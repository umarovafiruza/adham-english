const TOPICS = [
  {
    id: "daily-reset",
    number: "01",
    title: "Take a Slow Breath",
    level: "A1",
    text: `Take a slow breath right now. Drop your shoulders and relax your face. You have been running all day, thinking about many heavy things. But in this quiet moment, there is nothing you need to fix immediately. Drink a glass of fresh water and look around the room. You are safe, you are alive, and you are trying your best every single day. Even if today was stressful or messy, it does not mean your life is bad. A single bad day is just twenty-four hours that will pass away tonight. Tomorrow morning the sun will rise again, bringing brand new energy and another chance to smile. Be gentle with your tired mind. Eat something warm, talk kindly to yourself, and let your body rest. You do not need to solve the whole world tonight. Just focus on this one breath, and remember that you are doing enough. Everything will be fine.`,
    glossary: [
      { word: "shoulders", uz: "yelkalar" },
      { word: "immediately", uz: "darhol" },
      { word: "alive", uz: "tirik, hayotda" },
      { word: "stressful", uz: "asabiy, og'ir" },
      { word: "gentle", uz: "muloyim, mehribon" },
      { word: "energy", uz: "quvvat, energiya" },
      { word: "focus", uz: "diqqatni qaratmoq" }
    ]
  },
  {
    id: "self-belief",
    number: "02",
    title: "You Are Stronger Than You Think",
    level: "A1",
    text: `Listen to me carefully today. Sometimes you look at other people and feel like you are falling behind in life. You compare your quiet beginning with someone else's shining success. But please stop being so hard on yourself. Look at how many difficult days you have already survived. You faced situations that felt impossible, yet your brave heart kept moving forward every time. Making mistakes does not make you a failure; it simply means you are learning something new. Every mistake is just a small step towards real wisdom. Your journey has its own unique speed, and you are not late for your own life. Keep your head high, speak with honesty, and believe in your own potential. The world needs your unique voice, your honest smile, and your kind heart. Wake up tomorrow with courage, because you are stronger, braver, and much more capable than you think today. Keep going forward.`,
    glossary: [
      { word: "carefully", uz: "diqqat bilan" },
      { word: "survived", uz: "yengib o'tding" },
      { word: "impossible", uz: "imkonsiz" },
      { word: "failure", uz: "muvaffaqiyatsizlik" },
      { word: "wisdom", uz: "donolik" },
      { word: "potential", uz: "qobiliyat, imkoniyat" },
      { word: "courage", uz: "jasorat" }
    ]
  },
  {
    id: "small-steps",
    number: "03",
    title: "Don't Rush Your Life",
    level: "A2",
    text: `Why are you rushing so much through your days? Life is not a race against the clock, and you do not have to achieve everything before tomorrow morning. Great things take patient time to grow, just like an ancient tree in a quiet forest. When you try to do too many things at once, you lose the simple joy of living. Instead of worrying about next year, focus on what you can do in the next twenty minutes. Can you clean your desk? Can you read two useful pages? Can you take a five-minute walk outside? Small daily actions may seem tiny today, but over six months they compound into huge progress. Celebrate your small victories every single evening. If you took even one tiny step forward today, you should feel proud of your discipline. Slow down, breathe deeply, trust the process, and let yourself grow one steady day at a time.`,
    glossary: [
      { word: "rushing", uz: "shoshilmoq" },
      { word: "achieve", uz: "erishmoq" },
      { word: "ancient", uz: "qadimiy, katta" },
      { word: "worrying", uz: "tashvishlanish" },
      { word: "compound", uz: "to'planmoq, ko'paymoq" },
      { word: "victories", uz: "g'alabalar" },
      { word: "discipline", uz: "intizom" }
    ]
  },
  {
    id: "tired-mind",
    number: "04",
    title: "It Is Okay to Rest",
    level: "A2",
    text: `If you feel completely exhausted right now, I want you to know something important. Resting is not laziness; resting is a necessary part of being human. In our modern world, people constantly tell you to hustle, work harder, and never stop. But an engine that runs without stopping will eventually break down. Your brain needs quiet hours to heal, your eyes need darkness to rest, and your soul needs peaceful moments without screens. Give yourself permission to pause without feeling guilty. Turn off your notifications, close your door, and listen to the soft rain outside. A good cup of hot tea and eight hours of deep sleep can completely change how you see your problems tomorrow. When your body is tired, do not quit your dreams; simply learn to rest and breathe peacefully. Take your time tonight, recharge your battery, and give your mind the peaceful stillness it truly deserves.`,
    glossary: [
      { word: "exhausted", uz: "butkul charchagan" },
      { word: "laziness", uz: "dangasalik" },
      { word: "eventually", uz: "oxir-oqibat" },
      { word: "guilty", uz: "aybdor" },
      { word: "notifications", uz: "bildirishnomalar" },
      { word: "recharge", uz: "quvvat olmoq" },
      { word: "deserves", uz: "loyiq" }
    ]
  },
  {
    id: "courage",
    number: "05",
    title: "Speak Without Fear",
    level: "A2",
    text: `Do you know why speaking English sometimes feels scary? Because you are afraid of being judged or sounding funny. But let me tell you a secret: nobody cares about a small grammatical mistake as much as you do. When you speak English with an accent, it simply shows the world that you are brave enough to learn a second language. Your voice does not need to be perfect to be meaningful and clear. Every native speaker started by speaking broken, awkward sentences as a child. Stop apologizing for trying. Open your mouth, speak with confidence, and let your natural emotions come through your words. Each time you read a text aloud, your tongue becomes stronger, your rhythm becomes smoother, and your hesitation disappears. Be proud of every single word that comes out of your mouth today. Your voice has power, and speaking clearly is a superpower you are building right now.`,
    glossary: [
      { word: "judged", uz: "baholanish, tanqid" },
      { word: "accent", uz: "talaffuz, urg'u" },
      { word: "meaningful", uz: "mazmunli" },
      { word: "awkward", uz: "noqulay, g'alati" },
      { word: "apologizing", uz: "uzr so'ramoq" },
      { word: "hesitation", uz: "ikkilanish" },
      { word: "superpower", uz: "super kuch" }
    ]
  },
  {
    id: "new-beginnings",
    number: "06",
    title: "A Fresh Start Today",
    level: "B1",
    text: `No matter how many mistakes you made in the past, today offers you a completely clean sheet of paper. You cannot rewrite yesterday, but you have absolute control over what you write on the page in front of you right now. Stop replaying old regrets in your head like a broken video. People who hurt your feelings, opportunities you missed, and plans that did not work out belong to the past. Carrying old emotional baggage only slows you down and steals your present joy. Forgive yourself for not knowing better back then; you did the best you could with the knowledge you had. Today you are wiser, stronger, and more experienced. Stand up straight, look into the mirror, and smile at the person staring back at you. This is your life, this is your journey, and you have every right to begin again with fresh hope, honest ambition, and quiet confidence.`,
    glossary: [
      { word: "absolute", uz: "to'liq, mutlaq" },
      { word: "regrets", uz: "afsuslar" },
      { word: "baggage", uz: "yuk, og'irlik" },
      { word: "forgive", uz: "kechirmoq" },
      { word: "experienced", uz: "tajribali" },
      { word: "ambition", uz: "intilish, maqsad" },
      { word: "confidence", uz: "ishonch" }
    ]
  },
  {
    id: "true-friends",
    number: "07",
    title: "You Are Never Truly Alone",
    level: "A1",
    text: `On quiet lonely evenings, it is easy to convince yourself that nobody understands what you are going through. But that is a lie created by a tired mind. Across this earth, millions of people feel the exact same doubts, fears, and hopes that you feel right now. You are never as alone as you imagine. Think of the people who have shown you kindness in your life: a parent who prepared a warm meal, a teacher who believed in your ability, or a friend who sent a silly message just to make you laugh. Even if you only have one true friend who listens to your voice without judgment, you are truly rich. Reach out to someone you care about today. Send a simple text saying you are thinking of them. Connection begins with a small act of vulnerability. Be the kind of friend you wish to have, and love will always find its way back to your heart.`,
    glossary: [
      { word: "convince", uz: "ishontirmoq" },
      { word: "doubts", uz: "shubhalar" },
      { word: "kindness", uz: "mehribonlik" },
      { word: "judgment", uz: "hukm, tanqid" },
      { word: "vulnerability", uz: "ochiqko'ngillik, samimiylik" },
      { word: "connection", uz: "aloqa, yaqinlik" },
      { word: "imagine", uz: "tasavvur qilmoq" }
    ]
  },
  {
    id: "quiet-nature",
    number: "08",
    title: "Look Up at the Open Sky",
    level: "A2",
    text: `When was the last time you stepped outside and truly looked up at the open sky? We spend so many hours staring down at small glowing glass screens that we forget the vast beauty of our living planet. Step away from your desk right now, open your window, and feel the cool wind touching your cheeks. Notice the gentle clouds drifting across the blue sky, completely unbothered by human hurry. The earth does not rush its seasons; winter gently gives way to spring, and darkness always surrenders to the warm morning light. When your mind feels heavy with worry, nature reminds you that life is much bigger than your current problem. Take a walk under tall green trees, listen to the whisper of the leaves, and feel the solid ground beneath your feet. Mother nature is a quiet doctor that heals your soul without charging a single coin. Breathe in, breathe out, and reconnect with reality.`,
    glossary: [
      { word: "glowing", uz: "porlab turgan" },
      { word: "vast", uz: "keng, ulkan" },
      { word: "drifting", uz: "suzib yurgan" },
      { word: "unbothered", uz: "bexavotir, xotirjam" },
      { word: "surrenders", uz: "taslim bo'ladi, o'rnini beradi" },
      { word: "whisper", uz: "shivirlash" },
      { word: "reconnect", uz: "qayta bog'lanmoq" }
    ]
  },
  {
    id: "gratitude",
    number: "09",
    title: "Count Your Small Blessings",
    level: "B1",
    text: `It is human nature to focus on what is missing in our lives instead of appreciating what is already right in front of us. We obsess over the money we have not earned yet, the status we have not achieved, or the material things we cannot afford. But pause for a moment and consider the hidden wealth you already possess today. You have eyes that can read these words, lungs that breathe clean air effortlessly, and a functioning brain that can learn an entirely new language. You have access to clean water, warm clothes, and food on your table. Millions of people would trade places with you in a heartbeat just to have the basic safety you enjoy today. Gratitude is not about pretending that everything in your life is perfect; it is about choosing to see the light in ordinary moments. When you are thankful for the little things, peace quietly settles in your heart.`,
    glossary: [
      { word: "appreciating", uz: "qadrlash" },
      { word: "obsess", uz: "tinimsiz o'ylamoq" },
      { word: "wealth", uz: "boylik" },
      { word: "possess", uz: "ega bo'lmoq" },
      { word: "effortlessly", uz: "osonlikcha, qiyinchiliksiz" },
      { word: "gratitude", uz: "minnatdorchilik" },
      { word: "ordinary", uz: "oddiy" }
    ]
  },
  {
    id: "big-dream",
    number: "10",
    title: "Keep Going Through the Storm",
    level: "B1",
    text: `Deep inside you, there is an ambitious dream waiting to be fulfilled. Maybe you want to speak fluent English, build an independent career, or travel across distant continents. But between where you stand today and where you want to be lies an uncomfortable valley called the messy middle. In this valley, motivation will inevitably fade, self-doubt will knock on your door, and progress will feel painfully slow. This is the exact moment where average people give up and make convenient excuses. But you are not average. Discipline means showing up and reading your text aloud even when you do not feel like it. It means staying loyal to the promises you made to yourself long after the mood has passed. Every obstacle you encounter is not a wall blocking your path; it is an exam testing your determination. Stand firm, embrace the struggle, and keep marching forward. Your future self is waiting to thank you for not giving up today.`,
    glossary: [
      { word: "ambitious", uz: "ulug'vor, intiluvchan" },
      { word: "inevitably", uz: "muqarrar ravishda" },
      { word: "convenient", uz: "qulay" },
      { word: "loyal", uz: "sodiq" },
      { word: "obstacle", uz: "to'siq, g'ov" },
      { word: "determination", uz: "qat'iyat" },
      { word: "embrace", uz: "qabul qilmoq, quchoq ochmoq" }
    ]
  }
];

if (typeof window !== "undefined") {
  window.TOPICS = TOPICS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { TOPICS };
}
