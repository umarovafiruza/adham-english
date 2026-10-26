const fs = require('fs');
const path = require('path');
const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');

// Load listening exercises
const dataContent = fs.readFileSync(path.join(__dirname, 'js/listening/data.js'), 'utf8');
eval(dataContent.replace('const LISTENING_EXERCISES =', 'global.LISTENING_EXERCISES ='));

const targetDir = path.join(__dirname, 'assets/audio/listening');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function generateSingleFile(voiceName, text, finalFilePath, label) {
  const tempDir = path.join(__dirname, `tmp_${label.replace(/[^a-zA-Z0-9_-]/g, '_')}`);
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

  const tts = new MsEdgeTTS();
  try {
    await tts.setMetadata(voiceName, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
    const res = await tts.toFile(tempDir, text);
    const generatedAudio = res.audioFilePath;
    fs.copyFileSync(generatedAudio, finalFilePath);
    const size = fs.statSync(finalFilePath).size;
    tts.close();
    fs.rmSync(tempDir, { recursive: true, force: true });
    return { success: true, size };
  } catch (err) {
    tts.close();
    fs.rmSync(tempDir, { recursive: true, force: true });
    throw err;
  }
}

async function main() {
  console.log('=== Generating High-Quality Neural Audio for Listening Exercises ===');
  console.log(`Exercises count: ${LISTENING_EXERCISES.length}`);
  console.log(`Target directory: ${targetDir}`);

  const startTime = Date.now();
  const summary = [];

  // Concurrency limit: 3 parallel tasks
  const CONCURRENCY = 3;
  const queue = [...LISTENING_EXERCISES];

  async function worker(workerId) {
    while (queue.length > 0) {
      const ex = queue.shift();
      const isUS = ex.accent && ex.accent.toLowerCase().includes('en-us');
      const voiceName = isUS ? 'en-US-JennyNeural' : 'en-GB-SoniaNeural';
      const filename = `${ex.id}.mp3`;
      const outPath = path.join(targetDir, filename);

      console.log(`[Worker ${workerId}] Generating ${ex.id} (${voiceName}) -> ${filename}...`);
      try {
        const res = await generateSingleFile(voiceName, ex.script, outPath, ex.id);
        const sizeKb = (res.size / 1024).toFixed(1);
        console.log(`[Worker ${workerId}] OK ${ex.id}: ${sizeKb} KB`);
        summary.push({ id: ex.id, file: filename, voice: voiceName, sizeKb, status: 'SUCCESS' });
      } catch (err) {
        console.error(`[Worker ${workerId}] FAILED ${ex.id}:`, err.message);
        summary.push({ id: ex.id, file: filename, voice: voiceName, sizeKb: 0, status: 'FAILED: ' + err.message });
      }
    }
  }

  const workers = [];
  for (let w = 1; w <= CONCURRENCY; w++) {
    workers.push(worker(w));
  }
  await Promise.all(workers);

  // Generate Voice Previews
  console.log('\n--- Generating Voice Previews ---');
  try {
    const usText = "Hello and welcome to the Listening practice section. This is Jenny, reading in a natural American English accent. I hope you enjoy these exercises and sharpen your comprehension skills.";
    const ukText = "Hello and welcome to the Listening practice section. This is Sonia, reading in a natural British English accent. I hope you enjoy these exercises and sharpen your comprehension skills.";

    console.log('Generating preview-us.mp3 (en-US-JennyNeural)...');
    const usRes = await generateSingleFile('en-US-JennyNeural', usText, path.join(targetDir, 'preview-us.mp3'), 'preview-us');
    console.log(`OK preview-us.mp3: ${(usRes.size / 1024).toFixed(1)} KB`);

    console.log('Generating preview-uk.mp3 (en-GB-SoniaNeural)...');
    const ukRes = await generateSingleFile('en-GB-SoniaNeural', ukText, path.join(targetDir, 'preview-uk.mp3'), 'preview-uk');
    console.log(`OK preview-uk.mp3: ${(ukRes.size / 1024).toFixed(1)} KB`);
  } catch (err) {
    console.error('Failed generating previews:', err.message);
  }

  const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n=== All audio generation completed in ${totalTime}s! ===`);
  console.table(summary);
}

main().catch(err => {
  console.error('Execution error:', err);
  process.exit(1);
});
