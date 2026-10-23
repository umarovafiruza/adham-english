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
  },
  {
    id: "morning-coffee",
    number: "11",
    title: "A Cup of Morning Coffee",
    level: "A1",
    text: `Hold your warm cup in both hands right now. Feel the gentle heat spreading into your fingers. Take a slow sip, close your eyes, and enjoy this quiet morning minute. You do not have to jump out of bed and check your phone immediately. The messages, the news, and the noisy world can wait for a few minutes. This peaceful morning belongs entirely to you. Look out the window at the soft morning light breaking through the trees. Each new sunrise is a quiet gift that reminds you to start fresh. Set a gentle intention for today: choose to be patient with yourself, smile at people you meet, and take things one step at a time. Whatever tasks are waiting for you today, you will handle them with calm confidence. Finish your warm drink, take a deep breath, and welcome this beautiful new day with a grateful heart.`,
    glossary: [
      { word: "gentle", uz: "muloyim, sokin" },
      { word: "immediately", uz: "darhol" },
      { word: "entirely", uz: "butunlay, to'liq" },
      { word: "sunrise", uz: "quyosh chiqishi" },
      { word: "intention", uz: "niyat, maqsad" },
      { word: "confidence", uz: "ishonch" },
      { word: "grateful", uz: "minnatdor" }
    ]
  },
  {
    id: "slow-living",
    number: "12",
    title: "The Beauty of Slow Living",
    level: "A2",
    text: `Why does everyone believe that faster is always better? We drive fast, eat fast, and scroll through hundreds of short videos without remembering any of them. But true life happens when you dare to slow down. Slow living means tasting your food instead of swallowing it quickly while staring at a screen. It means listening carefully when someone speaks to you, looking into their eyes instead of glancing at your watch. When you slow down your pace, you notice the pleasant smell of fresh bread, the sound of birds singing in the garden, and the changing colors of autumn leaves. You do not need to fill every single second of your day with endless productivity. Sitting silently on a bench, doing absolutely nothing for ten minutes, is not wasted time; it is medicine for your restless spirit. Slow down today, breathe peacefully, and let your life unfold naturally.`,
    glossary: [
      { word: "swallowing", uz: "yutish" },
      { word: "glancing", uz: "qarab qo'yish" },
      { word: "pleasant", uz: "yoqimli" },
      { word: "productivity", uz: "unumdorlik" },
      { word: "absolutely", uz: "mutlaqo" },
      { word: "restless", uz: "bezovta, tinchsiz" },
      { word: "unfold", uz: "namoyon bo'lmoq, ochilmoq" }
    ]
  },
  {
    id: "daily-practice",
    number: "13",
    title: "The Magic of Daily Practice",
    level: "A1",
    text: `Every single time you open your mouth and read English aloud, you are transforming your future. You might think reading for ten minutes does not change much. But think of water dropping on a hard rock. One single drop does nothing, but millions of steady drops over time will carve a path through solid stone. Language learning works exactly the same way. When you practice reading every day, your tongue gets used to English sounds, your ears become sharper, and your confidence grows quietly inside you. You do not need five free hours every weekend; you only need ten honest minutes every single morning. Do not worry if your pronunciation is not perfect yet. Imperfect action will always beat perfect hesitation. Be proud of the discipline you are building today. Keep practicing aloud, believe in yourself, and watch how quickly your words begin to flow.`,
    glossary: [
      { word: "transforming", uz: "o'zgartirmoq" },
      { word: "steady", uz: "barqaror, to'xtovsiz" },
      { word: "carve", uz: "o'yib yo'l ochmoq" },
      { word: "sharper", uz: "o'tkirroq, sezgirroq" },
      { word: "pronunciation", uz: "talaffuz" },
      { word: "hesitation", uz: "ikkilanish" },
      { word: "discipline", uz: "intizom" }
    ]
  },
  {
    id: "forgive-yourself",
    number: "14",
    title: "Forgive Your Past Self",
    level: "B1",
    text: `Put down the heavy emotional stone you have been carrying in your chest. You made decisions in the past that you now regret, and you wish you could travel back in time to choose differently. But you must understand something profound today: you made those choices with the limited understanding, emotional pain, and maturity you possessed back then. You did not have the wisdom, clarity, and life experience that you hold in your hands today. Blaming your younger self for not knowing what you know now is completely unfair. That younger version of you was simply trying to survive, protect their fragile heart, and figure out an overwhelming world. Look back at your past self not with shame or anger, but with deep compassion and understanding. Thank them for surviving the storms, forgive their clumsy mistakes, and release the heavy guilt. You are standing in the present moment now, completely free to build an honest and peaceful life.`,
    glossary: [
      { word: "profound", uz: "chuqur, teran" },
      { word: "limited", uz: "cheklangan" },
      { word: "maturity", uz: "yetuklik" },
      { word: "fragile", uz: "nozik, zaif" },
      { word: "overwhelming", uz: "og'ir, bosimli" },
      { word: "compassion", uz: "hamdardlik, mehr" },
      { word: "release", uz: "ozod qilmoq, qo'yib yubormoq" }
    ]
  },
  {
    id: "night-silence",
    number: "15",
    title: "The Silence of Late Night",
    level: "A2",
    text: `The bustling city outside has finally fallen quiet, and the world is asleep under a blanket of stars. In this midnight stillness, all the noise and demands of the daylight hours disappear. You survived another full day on this earth, with all its challenges, conversations, and duties. Now is your sacred time to put your worries down on the bedside table. You cannot solve tomorrow's problems at midnight, and thinking about them repeatedly will only rob you of your peaceful rest. Close your eyes, loosen your tight jaw, and let your body sink into the soft comfort of your bed. The night was created so that tired humans could restore their energy and heal in silence. Whatever happened today is now finished and sealed in history. Breathe slowly, let your thoughts wander peacefully, and trust that tomorrow morning will bring renewed hope and fresh vitality.`,
    glossary: [
      { word: "bustling", uz: "gavjum, shovqinli" },
      { word: "stillness", uz: "sokinlik, sukunat" },
      { word: "sacred", uz: "muqaddas, qadrli" },
      { word: "repeatedly", uz: "takror-takror" },
      { word: "loosen", uz: "bo'shashtirmoq" },
      { word: "restore", uz: "tiklamoq" },
      { word: "vitality", uz: "hayotiy quvvat" }
    ]
  },
  {
    id: "protect-peace",
    number: "16",
    title: "Protect Your Inner Peace",
    level: "B1",
    text: `Your inner peace is an expensive treasure that you should never sell cheaply to anyone. Not every argument deserves your passionate reaction, and not every comment requires your defensive reply. Sometimes the most mature, powerful response you can give is total silence and a calm smile. Learn the healthy art of walking away from environments that constantly provoke negative emotions and unnecessary drama. You do not have to explain your boundaries or apologize for wanting a tranquil life. Protect your morning routine, guard your energy, and be extremely selective about who you allow into your private mental space. Surround yourself with people who lift your spirits, celebrate your genuine success, and inspire you to become wiser. When your internal world is grounded in peace, the external noise of the crowd will never have the power to shake your foundation.`,
    glossary: [
      { word: "treasure", uz: "xazina, boylik" },
      { word: "passionate", uz: "ehtirosli, qizg'in" },
      { word: "defensive", uz: "himoyalanish" },
      { word: "provoke", uz: "qo'zg'atmoq, undamoq" },
      { word: "tranquil", uz: "osuda, tinch" },
      { word: "selective", uz: "tanlab yondashadigan" },
      { word: "foundation", uz: "asos, poydevor" }
    ]
  },
  {
    id: "power-of-patience",
    number: "17",
    title: "The Power of Patience",
    level: "A2",
    text: `Think about an apple seed buried deep under cold dark soil. If you dig it up every single morning to see if it is growing, it will die. Growth requires quiet patience, darkness, and time. Many people abandon their dreams too early because they do not see instant dramatic results in two weeks. But real lasting greatness is always quiet and gradual. When you practice English, when you exercise, or when you study a new skill, the visible changes take months to appear on the surface. But underneath the ground, strong roots are spreading quietly every single day. Do not lose faith simply because your progress is not loud or obvious yet. Keep watering your habits with steady discipline. Trust the silent work happening beneath the surface, and be patient with your own journey. The tree will bear sweet fruit when the season is right.`,
    glossary: [
      { word: "buried", uz: "ko'milgan" },
      { word: "instant", uz: "lahzali, tezkor" },
      { word: "gradual", uz: "bosqichma-bosqich" },
      { word: "visible", uz: "ko'rinadigan" },
      { word: "discipline", uz: "intizom" },
      { word: "beneath", uz: "ostida" },
      { word: "season", uz: "fasl, payt" }
    ]
  },
  {
    id: "kindness",
    number: "18",
    title: "The Warmth of Human Kindness",
    level: "A1",
    text: `Never underestimate the power of a tiny act of kindness in an ordinary day. You never know what heavy battles another person is fighting behind their polite smile. The bus driver might be worried about a sick child, or the cashier might be working two jobs just to pay the rent. When you say a genuine thank you, when you hold a door open, or when you offer a sincere smile, you send a beam of warm sunshine into a cold room. Kindness does not cost a single dollar, but its value is priceless to someone who is having a lonely day. Try to be that gentle light today. Speak soft words, avoid harsh complaints, and treat every human being with basic dignity. When you sprinkle kindness into the world, your own heart feels lighter, warmer, and full of quiet joy.`,
    glossary: [
      { word: "underestimate", uz: "past baholamoq" },
      { word: "battles", uz: "janglar, qiyinchiliklar" },
      { word: "genuine", uz: "samimiy, chinakam" },
      { word: "sincere", uz: "dildan, samimiy" },
      { word: "priceless", uz: "bebaho" },
      { word: "complaints", uz: "shikoyatlar" },
      { word: "dignity", uz: "qadr-qimmat" }
    ]
  },
  {
    id: "inner-voice",
    number: "19",
    title: "Trust Your Inner Voice",
    level: "B1",
    text: `Everyone around you has strong advice about how you should live, which career path you must choose, and what defines real success. It is so easy to get lost in the loud chorus of other people's expectations that you completely forget your own song. But deep inside your chest, there is a quiet intuitive voice that knows your authentic truth. It whispers to you during solitary walks, it sparks your curiosity when you discover new ideas, and it gives you a gut feeling when something feels wrong. Learn to tune out the external noise and listen closely to that internal compass. You were not created to be an unoriginal copy of someone else; you were born to live your own unique story. Have the boldness to follow what truly sets your soul on fire, even if people around you do not understand your vision yet.`,
    glossary: [
      { word: "expectations", uz: "umidlar, talablar" },
      { word: "intuitive", uz: "ichki his-tuyg'uli" },
      { word: "authentic", uz: "haqiqiy, asl" },
      { word: "solitary", uz: "yolg'iz, xilvat" },
      { word: "compass", uz: "kompas, yo'l ko'rsatuvchi" },
      { word: "boldness", uz: "jur'at, jasorat" },
      { word: "vision", uz: "kelajak ko'rinishi, maqsad" }
    ]
  },
  {
    id: "rainy-day",
    number: "20",
    title: "A Walk in the Gentle Rain",
    level: "A2",
    text: `Rain is not a gloomy interruption; rain is heaven washing the tired earth. Put on your jacket, step outside, and listen to the rhythmic tapping of raindrops against the pavement. The smell of wet soil and fresh asphalt after summer rain has a unique name: petrichor. It is one of the most comforting scents in the world, reminding us of childhood simplicity and peaceful afternoons. The rain teaches us that clouds must gather and empty their tears before the green grass can grow tall. If you have been carrying tears or sadness in your heart recently, do not suppress them. Just like the clouds above, crying is simply the soul cleansing itself so that new light can shine through. Let the cool raindrops touch your skin, wash away your stress, and remind you of the sweet relief that always follows a cleansing storm.`,
    glossary: [
      { word: "gloomy", uz: "g'amgin, qorong'i" },
      { word: "rhythmic", uz: "ohangdor, bir maromda" },
      { word: "pavement", uz: "yo'lka, trotuar" },
      { word: "comforting", uz: "tasalli beruvchi" },
      { word: "simplicity", uz: "soddalik" },
      { word: "suppress", uz: "bosmoq, yashirmoq" },
      { word: "relief", uz: "yengillik, taskin" }
    ]
  },
  {
    id: "consistency",
    number: "21",
    title: "Consistency Over Intensity",
    level: "B1",
    text: `Many people begin their goals with explosive enthusiasm. They study ten hours on Sunday, exercise until they are injured on Monday, and then give up completely by Thursday because they are totally burned out. But champions understand that steady consistency will always outperform chaotic intensity. It is far better to read English aloud for fifteen minutes every single day than to attempt a painful six-hour marathon once a month. Daily micro-habits rewrite your neural pathways effortlessly without creating mental resistance. When you make your habit small enough that you can perform it even on your worst, most exhausting days, you build unbreakable momentum. Do not judge a day by the harvest you reap, but by the small seeds of discipline you plant every single afternoon. Show up quietly, do your small daily part, and let the unstoppable power of compounding take care of the rest.`,
    glossary: [
      { word: "enthusiasm", uz: "ishtiyoq, g'ayrat" },
      { word: "outperform", uz: "ustun kelmoq, ortda qoldirmoq" },
      { word: "chaotic", uz: "tartibsiz" },
      { word: "resistance", uz: "qarshilik" },
      { word: "momentum", uz: "sur'at, harakat kuchi" },
      { word: "harvest", uz: "hosil" },
      { word: "compounding", uz: "jamlanish, to'planish kuchi" }
    ]
  },
  {
    id: "belong-here",
    number: "22",
    title: "You Deserve to Be in the Room",
    level: "B1",
    text: `Have you ever walked into an important meeting or an English conversation and felt a sudden wave of imposter syndrome? A cold voice in your head whispered that you are not educated enough, your vocabulary is too basic, or that someone will soon discover you do not belong there. I want you to silence that voice permanently today. Nobody in that room has everything figured out. Even the most confident speakers experience private insecurity and nervousness. You are sitting at that table because of your persistent work, your unique perspective, and your valuable voice. You do not need to speak with a flawless posh accent to earn respect; clarity, sincerity, and honesty are infinitely more attractive than superficial perfection. Hold your shoulders straight, look people directly in the eye, and speak your mind with quiet dignity. You have earned your seat at this table, and you deserve to be heard.`,
    glossary: [
      { word: "imposter", uz: "o'zini boshqacha ko'rsatuvchi, soxta" },
      { word: "insecurity", uz: "ishonchsizlik, xavotir" },
      { word: "perspective", uz: "dunyoqarash, nuqtai nazar" },
      { word: "flawless", uz: "benuqson, kamchiliksiz" },
      { word: "sincerity", uz: "samimiylik" },
      { word: "superficial", uz: "yuzaki" },
      { word: "dignity", uz: "qadr-qimmat, viqor" }
    ]
  }
];

if (typeof window !== "undefined") {
  window.TOPICS = TOPICS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { TOPICS };
}
