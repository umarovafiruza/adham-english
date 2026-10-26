/**
 * Generator for 12 Comprehensive Professional Listening Practice Exercises
 * 6 Parts, CEFR A1-C1 (focused on B1/B2), exactly 8 questions per exercise (96 questions total).
 */

const fs = require('fs');
const path = require('path');

const EXERCISES = [
  // 1. Part 1 — Everyday Conversations (B1)
  {
    id: "ex-1",
    title: "Booking a Photography Workshop",
    cefr: "B1",
    part: "Part 1 — Everyday Conversations",
    partNumber: 1,
    duration: "0:35",
    durationSec: 35,
    description: "Weekend creative photography course reservation and equipment inquiry.",
    accent: "en-GB (British English)",
    voiceGender: "female",
    script: `Good morning, Aperture Studio. How may I help you today?
Hello! I am calling to book a spot for the weekend beginner photography workshop on Saturday, October 14th.
Certainly! We have three spaces remaining for the morning session starting at nine o'clock. The tuition fee is forty-five pounds.
Wonderful. Do I need to bring my own tripod and zoom lenses?
We provide all studio lighting and tripods free of charge, but you should bring your own digital SLR camera with a fully charged battery.
Understood. Please reserve one place under the name Marcus Davies. My contact number is 07700 900542.
Splendid, Marcus. A confirmation email with the studio map has just been dispatched.`,
    sentences: [
      { speaker: "Clerk", text: "Good morning, Aperture Studio. How may I help you today?" },
      { speaker: "Marcus", text: "Hello! I am calling to book a spot for the weekend beginner photography workshop on Saturday, October 14th." },
      { speaker: "Clerk", text: "Certainly! We have three spaces remaining for the morning session starting at nine o'clock. The tuition fee is forty-five pounds." },
      { speaker: "Marcus", text: "Wonderful. Do I need to bring my own tripod and zoom lenses?" },
      { speaker: "Clerk", text: "We provide all studio lighting and tripods free of charge, but you should bring your own digital SLR camera with a fully charged battery." },
      { speaker: "Marcus", text: "Understood. Please reserve one place under the name Marcus Davies. My contact number is 07700 900542." },
      { speaker: "Clerk", text: "Splendid, Marcus. A confirmation email with the studio map has just been dispatched." }
    ],
    questions: [
      {
        id: "ex1-q1",
        number: 1,
        type: "multiple_choice",
        prompt: "What date is the beginner photography workshop scheduled for?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "October 4th" },
          { key: "B", text: "October 14th" },
          { key: "C", text: "October 24th" },
          { key: "D", text: "November 14th" }
        ],
        correctAnswer: "B",
        explanation: "Marcus ochiqchasiga 'on Saturday, October 14th' deb aytadi.",
        scriptEvidence: "Saturday, October 14th"
      },
      {
        id: "ex1-q2",
        number: 2,
        type: "fill_blank",
        prompt: "The morning session of the workshop begins at ____________ o'clock.",
        instruction: "Write ONE WORD or a number.",
        correctAnswer: ["9", "nine", "9:00", "9 am", "9:00 am"],
        explanation: "Xodim ertalabki dars soat 9:00 da boshlanishini tasdiqlaydi.",
        scriptEvidence: "starting at nine o'clock"
      },
      {
        id: "ex1-q3",
        number: 3,
        type: "short_answer",
        prompt: "How much is the workshop tuition fee?",
        instruction: "Write NO MORE THAN THREE WORDS or a number with currency.",
        correctAnswer: ["£45", "45 pounds", "45", "forty-five pounds", "45 GBP"],
        explanation: "O'quv kursi to'lovi qirq besh funt sterling ekanligi aytiladi.",
        scriptEvidence: "The tuition fee is forty-five pounds."
      },
      {
        id: "ex1-q4",
        number: 4,
        type: "true_false",
        prompt: "Participants must bring their own studio tripods to the class.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "False",
        explanation: "Studiya shtativlar (tripods) va chiroqlarni bepul taqdim etadi: 'provide all studio lighting and tripods free of charge'.",
        scriptEvidence: "We provide all studio lighting and tripods free of charge"
      },
      {
        id: "ex1-q5",
        number: 5,
        type: "multiple_choice",
        prompt: "What item is the caller explicitly instructed to bring?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "Studio lighting kit" },
          { key: "B", text: "Digital SLR camera with charged battery" },
          { key: "C", text: "Heavy zoom lenses" },
          { key: "D", text: "Printed studio map" }
        ],
        correctAnswer: "B",
        explanation: "Ishtirokchi batareyasi to'liq quvvatlangan raqamli kamerani olib kelishi kerak.",
        scriptEvidence: "bring your own digital SLR camera with a fully charged battery."
      },
      {
        id: "ex1-q6",
        number: 6,
        type: "fill_blank",
        prompt: "The caller's surname is ____________.",
        instruction: "Write ONE WORD (surname only).",
        correctAnswer: ["Davies", "davies"],
        explanation: "Qo'ng'iroq qiluvchi o'z familiyasini 'Marcus Davies' deb tanishtiradi.",
        scriptEvidence: "under the name Marcus Davies"
      },
      {
        id: "ex1-q7",
        number: 7,
        type: "true_false",
        prompt: "There are five spaces remaining for the morning workshop session.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "False",
        explanation: "Xodim atigi 3 ta bo'sh joy qolganini aytadi: 'three spaces remaining'.",
        scriptEvidence: "We have three spaces remaining for the morning session"
      },
      {
        id: "ex1-q8",
        number: 8,
        type: "matching",
        prompt: "Match each workshop detail with its correct value:",
        instruction: "Select the correct match for each item.",
        items: [
          { id: "fee", label: "Tuition fee" },
          { id: "date", label: "Workshop date" },
          { id: "spaces", label: "Remaining spaces" }
        ],
        options: ["£45", "October 14th", "Three spaces", "Free of charge"],
        correctAnswer: {
          "fee": "£45",
          "date": "October 14th",
          "spaces": "Three spaces"
        },
        explanation: "Narxi £45, sanasi 14-oktyabr va qolgan joylar soni 3 ta.",
        scriptEvidence: "tuition fee is forty-five pounds... October 14th... three spaces remaining"
      }
    ]
  },

  // 2. Part 1 — Everyday Conversations (A2)
  {
    id: "ex-2",
    title: "Café Table Reservation & Dietary Inquiry",
    cefr: "A2",
    part: "Part 1 — Everyday Conversations",
    partNumber: 1,
    duration: "0:32",
    durationSec: 32,
    description: "Lunch table booking for four guests and vegan dietary options inquiry.",
    accent: "en-GB (British English)",
    voiceGender: "female",
    script: `Hello, Willow Green Café. How can I assist you?
Hi, I would like to reserve a table for four people this Friday at one o'clock in the afternoon.
Let me check our table diary. Yes, we have a quiet table by the bay window available. May I take your surname?
Yes, it is Harrison. Also, two of our guests follow a strict vegan diet. Do you offer plant-based lunch dishes?
Absolutely! We serve fresh avocado toast, warm lentil soup, and a vegan berry cheesecake every afternoon.
That sounds delicious! Is street parking available near the café?
Free customer parking is located directly behind our garden patio.
Thank you so much, see you on Friday!`,
    sentences: [
      { speaker: "Waiter", text: "Hello, Willow Green Café. How can I assist you?" },
      { speaker: "Customer", text: "Hi, I would like to reserve a table for four people this Friday at one o'clock in the afternoon." },
      { speaker: "Waiter", text: "Let me check our table diary. Yes, we have a quiet table by the bay window available. May I take your surname?" },
      { speaker: "Customer", text: "Yes, it is Harrison. Also, two of our guests follow a strict vegan diet. Do you offer plant-based lunch dishes?" },
      { speaker: "Waiter", text: "Absolutely! We serve fresh avocado toast, warm lentil soup, and a vegan berry cheesecake every afternoon." },
      { speaker: "Customer", text: "That sounds delicious! Is street parking available near the café?" },
      { speaker: "Waiter", text: "Free customer parking is located directly behind our garden patio." },
      { speaker: "Customer", text: "Thank you so much, see you on Friday!" }
    ],
    questions: [
      {
        id: "ex2-q1",
        number: 1,
        type: "multiple_choice",
        prompt: "How many people is the reservation for?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "Two people" },
          { key: "B", text: "Three people" },
          { key: "C", text: "Four people" },
          { key: "D", text: "Six people" }
        ],
        correctAnswer: "C",
        explanation: "Mijoz 4 kishi uchun stol band qilmoqchi ekanini aytadi: 'table for four people'.",
        scriptEvidence: "reserve a table for four people this Friday"
      },
      {
        id: "ex2-q2",
        number: 2,
        type: "fill_blank",
        prompt: "The reservation is booked for ____________ o'clock on Friday afternoon.",
        instruction: "Write ONE WORD or a number.",
        correctAnswer: ["1", "one", "1:00", "1 pm", "1:00 pm"],
        explanation: "Stol juma kuni soat 13:00 (one o'clock) ga band qilinmoqda.",
        scriptEvidence: "at one o'clock in the afternoon."
      },
      {
        id: "ex2-q3",
        number: 3,
        type: "true_false",
        prompt: "The reserved table is located next to the front doorway.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "False",
        explanation: "Stol kirish eshigi oldida emas, balki deraza yonida: 'by the bay window'.",
        scriptEvidence: "table by the bay window available."
      },
      {
        id: "ex2-q4",
        number: 4,
        type: "fill_blank",
        prompt: "The customer's surname is ____________.",
        instruction: "Write ONE WORD (surname only).",
        correctAnswer: ["Harrison", "harrison"],
        explanation: "Mijoz o'z familiyasini Harrison deb aytadi.",
        scriptEvidence: "Yes, it is Harrison."
      },
      {
        id: "ex2-q5",
        number: 5,
        type: "multiple_choice",
        prompt: "Which of the following dishes was NOT mentioned as a vegan option?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "Avocado toast" },
          { key: "B", text: "Warm lentil soup" },
          { key: "C", text: "Mushroom pizza" },
          { key: "D", text: "Berry cheesecake" }
        ],
        correctAnswer: "C",
        explanation: "Menyuda avocado toast, lentil soup va berry cheesecake bor, pizza aytilmagan.",
        scriptEvidence: "fresh avocado toast, warm lentil soup, and a vegan berry cheesecake"
      },
      {
        id: "ex2-q6",
        number: 6,
        type: "true_false",
        prompt: "Two of the dining guests follow a strict vegan diet.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "True",
        explanation: "Mijoz mehmonlardan ikki nafari qat'iy vegan taomlar yeyishini tasdiqlaydi.",
        scriptEvidence: "two of our guests follow a strict vegan diet."
      },
      {
        id: "ex2-q7",
        number: 7,
        type: "short_answer",
        prompt: "Where is free customer parking located?",
        instruction: "Write NO MORE THAN FOUR WORDS.",
        correctAnswer: ["behind our garden patio", "behind the garden patio", "behind the patio", "garden patio"],
        explanation: "Mijozlar uchun bepul avtoturargoh bog' orqasida joylashgan.",
        scriptEvidence: "directly behind our garden patio."
      },
      {
        id: "ex2-q8",
        number: 8,
        type: "matching",
        prompt: "Match each café feature with its location or detail:",
        instruction: "Select the correct match for each item.",
        items: [
          { id: "table", label: "Reserved table" },
          { id: "parking", label: "Customer parking" },
          { id: "guests", label: "Vegan diners" }
        ],
        options: ["By the bay window", "Behind the garden patio", "Two guests", "Front doorway"],
        correctAnswer: {
          "table": "By the bay window",
          "parking": "Behind the garden patio",
          "guests": "Two guests"
        },
        explanation: "Stol deraza yonida, parkovka bog' orqasida va vegan mehmonlar 2 nafar.",
        scriptEvidence: "by the bay window... behind our garden patio... two of our guests"
      }
    ]
  },

  // 3. Part 2 — Monologue and Information (B1)
  {
    id: "ex-3",
    title: "City Botanical Garden Visitor Guidelines",
    cefr: "B1",
    part: "Part 2 — Monologue and Information",
    partNumber: 2,
    duration: "0:36",
    durationSec: 36,
    description: "Opening hours, greenhouse admission fees, and botanical conservation rules.",
    accent: "en-GB (British English)",
    voiceGender: "female",
    script: `Welcome to the Royal Botanical Gardens. The outdoor park grounds remain open daily from eight in the morning until seven in the evening.
Our famous glass greenhouse closes one hour earlier, at six o'clock, for daily misting and plant care.
Adult admission tickets cost twelve euros, while children under twelve enter free of charge.
Visitors are warmly encouraged to explore the rare orchid pathway and the tropical butterfly pavilion.
Please remember that touching flowers or picking botanical samples is strictly prohibited.
Commercial flash photography is not permitted inside the greenhouse without a registered media permit.
Picnic blankets may only be placed on the designated southern meadow lawn.
Have an inspiring visit!`,
    sentences: [
      { speaker: "Guide", text: "Welcome to the Royal Botanical Gardens. The outdoor park grounds remain open daily from eight in the morning until seven in the evening." },
      { speaker: "Guide", text: "Our famous glass greenhouse closes one hour earlier, at six o'clock, for daily misting and plant care." },
      { speaker: "Guide", text: "Adult admission tickets cost twelve euros, while children under twelve enter free of charge." },
      { speaker: "Guide", text: "Visitors are warmly encouraged to explore the rare orchid pathway and the tropical butterfly pavilion." },
      { speaker: "Guide", text: "Please remember that touching flowers or picking botanical samples is strictly prohibited." },
      { speaker: "Guide", text: "Commercial flash photography is not permitted inside the greenhouse without a registered media permit." },
      { speaker: "Guide", text: "Picnic blankets may only be placed on the designated southern meadow lawn." },
      { speaker: "Guide", text: "Have an inspiring visit!" }
    ],
    questions: [
      {
        id: "ex3-q1",
        number: 1,
        type: "multiple_choice",
        prompt: "What time do the outdoor park grounds close each evening?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "5:00 pm" },
          { key: "B", text: "6:00 pm" },
          { key: "C", text: "7:00 pm" },
          { key: "D", text: "8:00 pm" }
        ],
        correctAnswer: "C",
        explanation: "Ochiq bog' hududi kechki soat 7:00 gacha ochiq bo'ladi.",
        scriptEvidence: "until seven in the evening."
      },
      {
        id: "ex3-q2",
        number: 2,
        type: "fill_blank",
        prompt: "The glass greenhouse closes at ____________ o'clock for maintenance.",
        instruction: "Write ONE WORD or a number.",
        correctAnswer: ["6", "six", "6:00", "6 pm", "6:00 pm"],
        explanation: "Issiqxona o'simliklarni sug'orish uchun soat 6:00 da yopiladi.",
        scriptEvidence: "closes one hour earlier, at six o'clock"
      },
      {
        id: "ex3-q3",
        number: 3,
        type: "short_answer",
        prompt: "How much does an adult admission ticket cost?",
        instruction: "Write NO MORE THAN THREE WORDS or a number with currency.",
        correctAnswer: ["12 euros", "€12", "12 euro", "12", "twelve euros"],
        explanation: "Kattalar uchun chipta narxi 12 yevro.",
        scriptEvidence: "Adult admission tickets cost twelve euros"
      },
      {
        id: "ex3-q4",
        number: 4,
        type: "true_false",
        prompt: "Children under the age of twelve must pay half price.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "False",
        explanation: "12 yoshgacha bo'lgan bolalar bepul kirishadi: 'enter free of charge'.",
        scriptEvidence: "children under twelve enter free of charge."
      },
      {
        id: "ex3-q5",
        number: 5,
        type: "multiple_choice",
        prompt: "Where are visitors permitted to place picnic blankets?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "Near the greenhouse entrance" },
          { key: "B", text: "On the southern meadow lawn" },
          { key: "C", text: "Along the orchid pathway" },
          { key: "D", text: "Inside the butterfly pavilion" }
        ],
        correctAnswer: "B",
        explanation: "Piknik to'shaklarini faqat janubiy o'tloq maysazoriga qo'yishga ruxsat berilgan.",
        scriptEvidence: "placed on the designated southern meadow lawn."
      },
      {
        id: "ex3-q6",
        number: 6,
        type: "true_false",
        prompt: "Touching flowers and picking botanical samples is strictly prohibited.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "True",
        explanation: "Gullarga tegish va o'simliklarni uzish qat'iyan man etiladi.",
        scriptEvidence: "touching flowers or picking botanical samples is strictly prohibited."
      },
      {
        id: "ex3-q7",
        number: 7,
        type: "fill_blank",
        prompt: "Commercial ____________ photography requires a registered media permit.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["flash", "Flash"],
        explanation: "Chaqnoqli (flash) tijoriy suratga olish ruxsatnomani talab qiladi.",
        scriptEvidence: "Commercial flash photography is not permitted"
      },
      {
        id: "ex3-q8",
        number: 8,
        type: "ordering",
        prompt: "Arrange these garden attractions in the order mentioned by the speaker:",
        instruction: "Order the items from first mentioned (1) to last (4).",
        items: [
          { id: "A", text: "Glass greenhouse" },
          { id: "B", text: "Rare orchid pathway" },
          { id: "C", text: "Tropical butterfly pavilion" },
          { id: "D", text: "Southern meadow lawn" }
        ],
        correctOrder: ["A", "B", "C", "D"],
        explanation: "Matnda avval issiqxona (A), keyin orxideya yo'lagi (B), kapalaklar paviloni (C) va nihoyat janubiy o'tloq (D) tilga olinadi.",
        scriptEvidence: "greenhouse... orchid pathway... butterfly pavilion... southern meadow"
      }
    ]
  },

  // 4. Part 2 — Monologue and Information (B2)
  {
    id: "ex-4",
    title: "Airport Terminal Shuttle & Gate Relocation Notice",
    cefr: "B2",
    part: "Part 2 — Monologue and Information",
    partNumber: 2,
    duration: "0:38",
    durationSec: 38,
    description: "Airport transit maintenance, replacement express shuttle buses, and gate updates.",
    accent: "en-GB (British English)",
    voiceGender: "female",
    script: `Attention all departing passengers at Terminal 3.
Due to scheduled electrical maintenance on our automated track transit, the inter-terminal train service is temporarily suspended until two o'clock this afternoon.
Complimentary express shuttle buses are running every six minutes from ground transportation door B.
Passengers booked on flight BA 418 to Copenhagen should note that your departure gate has been relocated from gate 14 to gate 29 in the satellite concourse.
Boarding will commence promptly forty minutes prior to departure.
Please ensure you keep personal baggage in your sight at all times. Unattended items will be removed and destroyed by airport security patrols.
Customer service agents in blue jackets are stationed along the concourse to assist with gate connections.`,
    sentences: [
      { speaker: "Announcer", text: "Attention all departing passengers at Terminal 3." },
      { speaker: "Announcer", text: "Due to scheduled electrical maintenance on our automated track transit, the inter-terminal train service is temporarily suspended until two o'clock this afternoon." },
      { speaker: "Announcer", text: "Complimentary express shuttle buses are running every six minutes from ground transportation door B." },
      { speaker: "Announcer", text: "Passengers booked on flight BA 418 to Copenhagen should note that your departure gate has been relocated from gate 14 to gate 29 in the satellite concourse." },
      { speaker: "Announcer", text: "Boarding will commence promptly forty minutes prior to departure." },
      { speaker: "Announcer", text: "Please ensure you keep personal baggage in your sight at all times. Unattended items will be removed and destroyed by airport security patrols." },
      { speaker: "Announcer", text: "Customer service agents in blue jackets are stationed along the concourse to assist with gate connections." }
    ],
    questions: [
      {
        id: "ex4-q1",
        number: 1,
        type: "multiple_choice",
        prompt: "Why is the inter-terminal train service currently suspended?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "Severe winter snowfall" },
          { key: "B", text: "Scheduled electrical maintenance" },
          { key: "C", text: "Track expansion work" },
          { key: "D", text: "Transport staff strike" }
        ],
        correctAnswer: "B",
        explanation: "Poyezd rejaviy elektr ta'mirlash ishlari tufayli to'xtatilgan.",
        scriptEvidence: "scheduled electrical maintenance on our automated track transit"
      },
      {
        id: "ex4-q2",
        number: 2,
        type: "fill_blank",
        prompt: "Express shuttle buses run every ____________ minutes from door B.",
        instruction: "Write ONE WORD or a number.",
        correctAnswer: ["6", "six"],
        explanation: "Ekspress avtobuslar har 6 daqiqada qatnamoqda.",
        scriptEvidence: "running every six minutes from ground transportation door B."
      },
      {
        id: "ex4-q3",
        number: 3,
        type: "short_answer",
        prompt: "What is the destination city for flight BA 418?",
        instruction: "Write ONE WORD (city name).",
        correctAnswer: ["Copenhagen", "copenhagen"],
        explanation: "BA 418 reysi Kopengagenga yo'l olmoqda.",
        scriptEvidence: "Passengers booked on flight BA 418 to Copenhagen"
      },
      {
        id: "ex4-q4",
        number: 4,
        type: "multiple_choice",
        prompt: "What is the new departure gate for flight BA 418?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "Gate 14" },
          { key: "B", text: "Gate 22" },
          { key: "C", text: "Gate 29" },
          { key: "D", text: "Gate 38" }
        ],
        correctAnswer: "C",
        explanation: "Chiqish eshigi 14-darvozadan 29-darvozaga ko'chirildi.",
        scriptEvidence: "relocated from gate 14 to gate 29"
      },
      {
        id: "ex4-q5",
        number: 5,
        type: "true_false",
        prompt: "Boarding begins thirty minutes before scheduled departure.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "False",
        explanation: "Samolyotga chiqish parvozdan 40 daqiqa oldin boshlanadi: 'promptly forty minutes prior'.",
        scriptEvidence: "commence promptly forty minutes prior to departure."
      },
      {
        id: "ex4-q6",
        number: 6,
        type: "fill_blank",
        prompt: "Unattended baggage will be removed and ____________ by security.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["destroyed", "Destroyed"],
        explanation: "Nazoratsiz qoldirilgan buyumlar yo'q qilinadi.",
        scriptEvidence: "Unattended items will be removed and destroyed"
      },
      {
        id: "ex4-q7",
        number: 7,
        type: "true_false",
        prompt: "The train service is scheduled to resume at two o'clock this afternoon.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "True",
        explanation: "Poyezd xizmati soat 14:00 gacha vaqtincha to'xtatilgan.",
        scriptEvidence: "suspended until two o'clock this afternoon."
      },
      {
        id: "ex4-q8",
        number: 8,
        type: "matching",
        prompt: "Match each airport service with its designated attribute:",
        instruction: "Select the correct match for each item.",
        items: [
          { id: "shuttle", label: "Shuttle bus pickup" },
          { id: "staff", label: "Customer service staff" },
          { id: "gate", label: "New departure gate" }
        ],
        options: ["Door B", "Blue jackets", "Gate 29", "Terminal 1"],
        correctAnswer: {
          "shuttle": "Door B",
          "staff": "Blue jackets",
          "gate": "Gate 29"
        },
        explanation: "Avtobus B eshigidan, xodimlar ko'k kamzullarda va yangi darvoza 29.",
        scriptEvidence: "door B... blue jackets... gate 29"
      }
    ]
  },

  // 5. Part 3 — Academic Discussion (B1)
  {
    id: "ex-5",
    title: "Renewable Energy Seminar Project Planning",
    cefr: "B1",
    part: "Part 3 — Academic Discussion",
    partNumber: 3,
    duration: "0:37",
    durationSec: 37,
    description: "Two university students divide research roles for an environmental seminar presentation.",
    accent: "en-US (American English)",
    voiceGender: "female",
    script: `Hi Sophia, thanks for meeting. Our environmental seminar presentation is in ten days, and we need to divide the slides.
Agreed, Liam. We have a twenty-minute slot. I think we should split it into two ten-minute segments.
Great idea. I am keen to analyze offshore wind farms in northern Europe, specifically their construction costs and energy yield.
Perfect. Then I will cover decentralized solar panel installations on residential homes, including battery storage technologies.
Should we invite the audience to ask questions during the talk?
Professor Clark explicitly requested that all questions be held for a five-minute discussion period at the very end.
Understood. Let us draft our slide outline by Thursday and meet in the library cafeteria on Friday afternoon to rehearse.`,
    sentences: [
      { speaker: "Liam", text: "Hi Sophia, thanks for meeting. Our environmental seminar presentation is in ten days, and we need to divide the slides." },
      { speaker: "Sophia", text: "Agreed, Liam. We have a twenty-minute slot. I think we should split it into two ten-minute segments." },
      { speaker: "Liam", text: "Great idea. I am keen to analyze offshore wind farms in northern Europe, specifically their construction costs and energy yield." },
      { speaker: "Sophia", text: "Perfect. Then I will cover decentralized solar panel installations on residential homes, including battery storage technologies." },
      { speaker: "Liam", text: "Should we invite the audience to ask questions during the talk?" },
      { speaker: "Sophia", text: "Professor Clark explicitly requested that all questions be held for a five-minute discussion period at the very end." },
      { speaker: "Liam", text: "Understood. Let us draft our slide outline by Thursday and meet in the library cafeteria on Friday afternoon to rehearse." }
    ],
    questions: [
      {
        id: "ex5-q1",
        number: 1,
        type: "multiple_choice",
        prompt: "When is the students' seminar presentation scheduled?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "In three days" },
          { key: "B", text: "In one week" },
          { key: "C", text: "In ten days" },
          { key: "D", text: "Next month" }
        ],
        correctAnswer: "C",
        explanation: "Liam taqdimot 10 kundan keyin ekanini aytadi: 'presentation is in ten days'.",
        scriptEvidence: "presentation is in ten days"
      },
      {
        id: "ex5-q2",
        number: 2,
        type: "fill_blank",
        prompt: "The total duration of the presentation slot is ____________ minutes.",
        instruction: "Write ONE WORD or a number.",
        correctAnswer: ["20", "twenty"],
        explanation: "Ularga jami yigirma daqiqalik vaqt ajratilgan.",
        scriptEvidence: "We have a twenty-minute slot."
      },
      {
        id: "ex5-q3",
        number: 3,
        type: "matching",
        prompt: "Match each student with their agreed presentation topic:",
        instruction: "Select the correct match for each item.",
        items: [
          { id: "liam", label: "Liam's topic" },
          { id: "sophia", label: "Sophia's topic" },
          { id: "qa", label: "Question session" }
        ],
        options: ["Offshore wind farms", "Residential solar panels", "5-minute final discussion", "Hydroelectric dams"],
        correctAnswer: {
          "liam": "Offshore wind farms",
          "sophia": "Residential solar panels",
          "qa": "5-minute final discussion"
        },
        explanation: "Liam shamol stansiyalarini, Sophia quyosh panellarini tayyorlaydi, savollar esa oxirgi 5 daqiqada bo'ladi.",
        scriptEvidence: "offshore wind farms... solar panel installations... five-minute discussion period"
      },
      {
        id: "ex5-q4",
        number: 4,
        type: "true_false",
        prompt: "Liam will present on residential battery storage systems.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "False",
        explanation: "Akkumulyator saqlash tizimlarini Sophia o'z bo'limida taqdim etadi.",
        scriptEvidence: "I will cover decentralized solar panel installations... battery storage technologies"
      },
      {
        id: "ex5-q5",
        number: 5,
        type: "multiple_choice",
        prompt: "When will audience questions be addressed?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "During slide transitions" },
          { key: "B", text: "Only at the very end of the presentation" },
          { key: "C", text: "Through email feedback after class" },
          { key: "D", text: "At the start of the lecture" }
        ],
        correctAnswer: "B",
        explanation: "Professor savol-javoblar faqat taqdimot yakunida bo'lishini tayinlagan.",
        scriptEvidence: "held for a five-minute discussion period at the very end."
      },
      {
        id: "ex5-q6",
        number: 6,
        type: "fill_blank",
        prompt: "The slide outline must be drafted by ____________.",
        instruction: "Write ONE WORD (day of the week).",
        correctAnswer: ["Thursday", "thursday"],
        explanation: "Slayd qoralamasi payshanba kuniga qadar tayyorlanishi lozim.",
        scriptEvidence: "draft our slide outline by Thursday"
      },
      {
        id: "ex5-q7",
        number: 7,
        type: "true_false",
        prompt: "The students plan to rehearse their presentation in the library cafeteria on Friday.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "True",
        explanation: "Talabalar juma kuni tushdan keyin kutubxona kafesida mashq qilishga kelishadilar.",
        scriptEvidence: "meet in the library cafeteria on Friday afternoon to rehearse."
      },
      {
        id: "ex5-q8",
        number: 8,
        type: "short_answer",
        prompt: "How many minutes are reserved for the final question-and-answer period?",
        instruction: "Write ONE WORD or a number.",
        correctAnswer: ["5", "five", "5 minutes", "five minutes"],
        explanation: "Yakuniy savol-javoblar uchun 5 daqiqa ajratilgan.",
        scriptEvidence: "held for a five-minute discussion period at the very end."
      }
    ]
  },

  // 6. Part 3 — Academic Discussion (B2)
  {
    id: "ex-6",
    title: "Urban Architecture Case Study: Vertical Forests",
    cefr: "B2",
    part: "Part 3 — Academic Discussion",
    partNumber: 3,
    duration: "0:39",
    durationSec: 39,
    description: "Graduate student and faculty advisor debate hydraulic pumps and wind resistance in green towers.",
    accent: "en-GB (British English)",
    voiceGender: "female",
    script: `Dr. Vance, thank you for reviewing my thesis draft on vertical forest residential towers.
You have selected an engaging topic, Marcus. Your thermal insulation models are persuasive, but your hydraulic analysis needs work.
Do you mean the automated greywater irrigation system for the cantilevered balconies?
Precisely. The electric water pumps consume substantial energy on higher floors. You must calculate whether the energy savings from leaf shade compensate for pump power consumption.
I could incorporate high-efficiency solar pumps powered by rooftop photovoltaic panels to offset that electrical load.
That would significantly strengthen your structural feasibility chapter. Also, verify that the selected oak saplings can withstand wind speeds exceeding eighty kilometers per hour at eighty meters altitude.
I will consult the botanical wind tunnel data before our next advisory meeting on Tuesday.`,
    sentences: [
      { speaker: "Marcus", text: "Dr. Vance, thank you for reviewing my thesis draft on vertical forest residential towers." },
      { speaker: "Dr. Vance", text: "You have selected an engaging topic, Marcus. Your thermal insulation models are persuasive, but your hydraulic analysis needs work." },
      { speaker: "Marcus", text: "Do you mean the automated greywater irrigation system for the cantilevered balconies?" },
      { speaker: "Dr. Vance", text: "Precisely. The electric water pumps consume substantial energy on higher floors. You must calculate whether the energy savings from leaf shade compensate for pump power consumption." },
      { speaker: "Marcus", text: "I could incorporate high-efficiency solar pumps powered by rooftop photovoltaic panels to offset that electrical load." },
      { speaker: "Dr. Vance", text: "That would significantly strengthen your structural feasibility chapter. Also, verify that the selected oak saplings can withstand wind speeds exceeding eighty kilometers per hour at eighty meters altitude." },
      { speaker: "Marcus", text: "I will consult the botanical wind tunnel data before our next advisory meeting on Tuesday." }
    ],
    questions: [
      {
        id: "ex6-q1",
        number: 1,
        type: "multiple_choice",
        prompt: "Which section of Marcus's thesis did Dr. Vance highlight as needing further work?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "Fire escape regulations" },
          { key: "B", text: "Thermal insulation models" },
          { key: "C", text: "Hydraulic irrigation analysis" },
          { key: "D", text: "Basement parking design" }
        ],
        correctAnswer: "C",
        explanation: "Dr. Vance gidravlik hisob-kitoblar (nasoslar va sug'orish) tahlilini yaxshilash kerakligini ta'kidlaydi.",
        scriptEvidence: "your hydraulic analysis needs work."
      },
      {
        id: "ex6-q2",
        number: 2,
        type: "fill_blank",
        prompt: "Marcus proposes using greywater to irrigate the cantilevered ____________.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["balconies", "Balconies"],
        explanation: "Oqova suvlar balkonlardagi o'simliklarni sug'orish uchun ishlatiladi.",
        scriptEvidence: "greywater irrigation system for the cantilevered balconies"
      },
      {
        id: "ex6-q3",
        number: 3,
        type: "true_false",
        prompt: "Dr. Vance confirms that leaf shade automatically offsets all water pump energy without calculation.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "False",
        explanation: "Aksincha, Marcus barg soyasi nasos sarflaydigan elektrni qoplashini aniq hisoblab chiqishi shart.",
        scriptEvidence: "You must calculate whether the energy savings from leaf shade compensate"
      },
      {
        id: "ex6-q4",
        number: 4,
        type: "short_answer",
        prompt: "How does Marcus propose powering the high-efficiency irrigation pumps?",
        instruction: "Write NO MORE THAN FOUR WORDS.",
        correctAnswer: ["rooftop photovoltaic panels", "solar panels", "photovoltaic panels", "rooftop solar panels"],
        explanation: "Tomdagi fotovoltaik (quyosh) panellari orqali quvvatlantirishni taklif qiladi.",
        scriptEvidence: "powered by rooftop photovoltaic panels to offset that electrical load."
      },
      {
        id: "ex6-q5",
        number: 5,
        type: "multiple_choice",
        prompt: "What wind speed must the selected saplings be capable of enduring?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "Exceeding 50 km/h" },
          { key: "B", text: "Exceeding 65 km/h" },
          { key: "C", text: "Exceeding 80 km/h" },
          { key: "D", text: "Exceeding 120 km/h" }
        ],
        correctAnswer: "C",
        explanation: "Ko'chatlar soatiga 80 kilometrdan ortiq shamol tezligiga bardosh berishi kerak.",
        scriptEvidence: "wind speeds exceeding eighty kilometers per hour"
      },
      {
        id: "ex6-q6",
        number: 6,
        type: "fill_blank",
        prompt: "The saplings must withstand strong winds at an altitude of eighty ____________.",
        instruction: "Write ONE WORD (unit of distance).",
        correctAnswer: ["meters", "metres"],
        explanation: "80 metr balandlikdagi shamol ko'zda tutilgan.",
        scriptEvidence: "at eighty meters altitude."
      },
      {
        id: "ex6-q7",
        number: 7,
        type: "true_false",
        prompt: "Marcus will review botanical wind tunnel data before their next meeting on Tuesday.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "True",
        explanation: "Marcus seshanba kungi uchrashuvdan oldin aerodinamik tunnel ma'lumotlarini o'rganib chiqadi.",
        scriptEvidence: "I will consult the botanical wind tunnel data before our next advisory meeting on Tuesday."
      },
      {
        id: "ex6-q8",
        number: 8,
        type: "matching",
        prompt: "Match each critique or proposal with the speaker who stated it:",
        instruction: "Select the correct speaker for each statement.",
        items: [
          { id: "hydraulic", label: "Critique on hydraulic pumps" },
          { id: "solar", label: "Proposal of rooftop solar panels" },
          { id: "wind", label: "Wind resistance requirement (80 km/h)" }
        ],
        options: ["Dr. Vance", "Marcus", "Building contractor"],
        correctAnswer: {
          "hydraulic": "Dr. Vance",
          "solar": "Marcus",
          "wind": "Dr. Vance"
        },
        explanation: "Gidravlikani tanqid qilgan va shamol talabini qo'ygan Dr. Vance, quyosh panellarini taklif qilgan Marcus.",
        scriptEvidence: "Dr. Vance: hydraulic analysis... Marcus: rooftop photovoltaic... Dr. Vance: wind speeds exceeding eighty"
      }
    ]
  },

  // 7. Part 4 — Lecture or Educational Talk (B1)
  {
    id: "ex-7",
    title: "The Secret Life of Honeybees",
    cefr: "B1",
    part: "Part 4 — Lecture or Educational Talk",
    partNumber: 4,
    duration: "0:37",
    durationSec: 37,
    description: "Colony coordination, figure-eight waggle dance, and hive temperature regulation.",
    accent: "en-US (American English)",
    voiceGender: "female",
    script: `In this morning's behavioral biology lecture, we explore how honeybee colonies achieve remarkable coordination without centralized leadership.
A typical hive contains roughly fifty thousand worker bees, all females.
When a scout bee locates a rich field of wildflowers, she returns to the dark honeycomb and performs what entomologists call the waggle dance.
The angle of her figure-eight movement relative to vertical gravity communicates the exact direction of the blossoms relative to the sun.
Furthermore, the duration of the central waggle signifies the distance: each second of dancing represents roughly one kilometer of flight.
Back inside the hive, worker bees continuously fan their wings to circulate cool air, keeping the brood nursery at a steady thirty-four degrees Celsius.
This collective regulation ensures the survival of developing larvae.`,
    sentences: [
      { speaker: "Lecturer", text: "In this morning's behavioral biology lecture, we explore how honeybee colonies achieve remarkable coordination without centralized leadership." },
      { speaker: "Lecturer", text: "A typical hive contains roughly fifty thousand worker bees, all females." },
      { speaker: "Lecturer", text: "When a scout bee locates a rich field of wildflowers, she returns to the dark honeycomb and performs what entomologists call the waggle dance." },
      { speaker: "Lecturer", text: "The angle of her figure-eight movement relative to vertical gravity communicates the exact direction of the blossoms relative to the sun." },
      { speaker: "Lecturer", text: "Furthermore, the duration of the central waggle signifies the distance: each second of dancing represents roughly one kilometer of flight." },
      { speaker: "Lecturer", text: "Back inside the hive, worker bees continuously fan their wings to circulate cool air, keeping the brood nursery at a steady thirty-four degrees Celsius." },
      { speaker: "Lecturer", text: "This collective regulation ensures the survival of developing larvae." }
    ],
    questions: [
      {
        id: "ex7-q1",
        number: 1,
        type: "multiple_choice",
        prompt: "Approximately how many worker bees reside in a typical hive?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "5,000 bees" },
          { key: "B", text: "15,000 bees" },
          { key: "C", text: "50,000 bees" },
          { key: "D", text: "150,000 bees" }
        ],
        correctAnswer: "C",
        explanation: "Odatdagi uyada taxminan ellik ming ishchi asalari bo'ladi.",
        scriptEvidence: "contains roughly fifty thousand worker bees"
      },
      {
        id: "ex7-q2",
        number: 2,
        type: "true_false",
        prompt: "All worker bees in a honeybee colony are female.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "True",
        explanation: "Barcha ishchi asalarilar urg'ochidir: 'all females'.",
        scriptEvidence: "fifty thousand worker bees, all females."
      },
      {
        id: "ex7-q3",
        number: 3,
        type: "fill_blank",
        prompt: "Scout bees communicate flower locations using the ____________ dance.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["waggle", "Waggle"],
        explanation: "Asalari o'ziga xos 'waggle' raqsi orqali ma'lumot beradi.",
        scriptEvidence: "performs what entomologists call the waggle dance."
      },
      {
        id: "ex7-q4",
        number: 4,
        type: "short_answer",
        prompt: "What geometric shape does the scout bee's dance movement resemble?",
        instruction: "Write NO MORE THAN TWO WORDS.",
        correctAnswer: ["figure-eight", "figure eight", "figure 8", "8"],
        explanation: "Raqs 8 raqami shaklidagi harakatga o'xshaydi.",
        scriptEvidence: "The angle of her figure-eight movement"
      },
      {
        id: "ex7-q5",
        number: 5,
        type: "multiple_choice",
        prompt: "What does the duration of the central waggle signify?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "Sweetness of flower nectar" },
          { key: "B", text: "Flight distance to the flowers" },
          { key: "C", text: "Presence of rival predator wasps" },
          { key: "D", text: "Wind speed and rain probability" }
        ],
        correctAnswer: "B",
        explanation: "Raqsning davomiyligi gullargacha bo'lgan masofani bildiradi.",
        scriptEvidence: "the duration of the central waggle signifies the distance"
      },
      {
        id: "ex7-q6",
        number: 6,
        type: "fill_blank",
        prompt: "Each second of dancing represents roughly one ____________ of flight distance.",
        instruction: "Write ONE WORD (unit of distance).",
        correctAnswer: ["kilometer", "kilometre", "km"],
        explanation: "Raqsning har bir soniyasi taxminan 1 kilometr masofaga teng.",
        scriptEvidence: "each second of dancing represents roughly one kilometer of flight."
      },
      {
        id: "ex7-q7",
        number: 7,
        type: "true_false",
        prompt: "Worker bees fan their wings to heat the hive up to forty degrees Celsius.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "False",
        explanation: "Harorat 40 emas, balki 34 darajada barqaror saqlanadi: 'thirty-four degrees Celsius'.",
        scriptEvidence: "keeping the brood nursery at a steady thirty-four degrees Celsius."
      },
      {
        id: "ex7-q8",
        number: 8,
        type: "ordering",
        prompt: "Place the stages of bee foraging communication in chronological order:",
        instruction: "Order the items from first (1) to last (4).",
        items: [
          { id: "A", text: "Scout bee discovers a field of wildflowers" },
          { id: "B", text: "Scout returns to the dark honeycomb" },
          { id: "C", text: "Performs the figure-eight waggle dance" },
          { id: "D", text: "Worker bees fly to the target blossom coordinates" }
        ],
        correctOrder: ["A", "B", "C", "D"],
        explanation: "Avval gul topiladi (A), uyaga qaytiladi (B), raqs ijro etiladi (C), so'ngra qolgan asalarilar uchib boradi (D).",
        scriptEvidence: "locates a rich field... returns to the honeycomb... performs the waggle dance... collective regulation"
      }
    ]
  },

  // 8. Part 4 — Lecture or Educational Talk (C1)
  {
    id: "ex-8",
    title: "Cognitive Neuroplasticity and Sleep Architecture",
    cefr: "C1",
    part: "Part 4 — Lecture or Educational Talk",
    partNumber: 4,
    duration: "0:40",
    durationSec: 40,
    description: "Slow-wave oscillations, hippocampal memory consolidation, and glymphatic clearance.",
    accent: "en-US (American English)",
    voiceGender: "female",
    script: `Over the past decade, neuroimaging has radically revised our understanding of non-REM slow-wave sleep.
Far from being a passive metabolic resting state, stage three deep sleep generates synchronized electrical oscillations below one Hertz across the prefrontal cortex.
These slow waves drive a bidirectional dialogue between the temporary storage buffers of the hippocampus and long-term neocortical networks.
Through sharp-wave ripples, fragile episodic memories acquired during daytime wakefulness are reactivated and systematically consolidated into stable semantic knowledge.
Simultaneously, the brain's glymphatic system expands by nearly sixty percent, pumping cerebrospinal fluid along paravascular channels to flush out toxic metabolites, notably beta-amyloid proteins.
Chronic disruption of slow-wave sleep compromises synaptic pruning, severely impairing hippocampal plasticity and daytime cognitive flexibility.`,
    sentences: [
      { speaker: "Neuroscientist", text: "Over the past decade, neuroimaging has radically revised our understanding of non-REM slow-wave sleep." },
      { speaker: "Neuroscientist", text: "Far from being a passive metabolic resting state, stage three deep sleep generates synchronized electrical oscillations below one Hertz across the prefrontal cortex." },
      { speaker: "Neuroscientist", text: "These slow waves drive a bidirectional dialogue between the temporary storage buffers of the hippocampus and long-term neocortical networks." },
      { speaker: "Neuroscientist", text: "Through sharp-wave ripples, fragile episodic memories acquired during daytime wakefulness are reactivated and systematically consolidated into stable semantic knowledge." },
      { speaker: "Neuroscientist", text: "Simultaneously, the brain's glymphatic system expands by nearly sixty percent, pumping cerebrospinal fluid along paravascular channels to flush out toxic metabolites, notably beta-amyloid proteins." },
      { speaker: "Neuroscientist", text: "Chronic disruption of slow-wave sleep compromises synaptic pruning, severely impairing hippocampal plasticity and daytime cognitive flexibility." }
    ],
    questions: [
      {
        id: "ex8-q1",
        number: 1,
        type: "multiple_choice",
        prompt: "What is the frequency of synchronized electrical oscillations during stage three deep sleep?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "Below one Hertz" },
          { key: "B", text: "Exactly ten Hertz" },
          { key: "C", text: "Between 20 and 30 Hertz" },
          { key: "D", text: "Above 50 Hertz" }
        ],
        correctAnswer: "A",
        explanation: "Sekin to'lqinli chuqur uyquda elektr tebranishlar 1 Gerts (one Hertz) dan past bo'ladi.",
        scriptEvidence: "synchronized electrical oscillations below one Hertz across the prefrontal cortex."
      },
      {
        id: "ex8-q2",
        number: 2,
        type: "fill_blank",
        prompt: "Slow waves mediate a dialogue between neocortical networks and the temporary buffers of the ____________.",
        instruction: "Write ONE WORD (brain structure).",
        correctAnswer: ["hippocampus", "Hippocampus"],
        explanation: "Xotira gipokamp (hippocampus) va neokorteks o'rtasida mustahkamlanadi.",
        scriptEvidence: "temporary storage buffers of the hippocampus and long-term neocortical networks."
      },
      {
        id: "ex8-q3",
        number: 3,
        type: "true_false",
        prompt: "Episodic memories are transferred from the permanent neocortex back into temporary hippocampal buffers.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "False",
        explanation: "Aksincha, xotiralar vaqtinchalik gipokampdan uzoq muddatli neokorteksga ko'chiriladi.",
        scriptEvidence: "temporary storage buffers of the hippocampus and long-term neocortical networks."
      },
      {
        id: "ex8-q4",
        number: 4,
        type: "multiple_choice",
        prompt: "By what percentage does the brain's glymphatic clearance system expand during deep sleep?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "Twenty percent" },
          { key: "B", text: "Thirty-five percent" },
          { key: "C", text: "Nearly sixty percent" },
          { key: "D", text: "Over eighty percent" }
        ],
        correctAnswer: "C",
        explanation: "Glimfatik tozalash tizimi deyarli 60 foizga kengayadi.",
        scriptEvidence: "glymphatic system expands by nearly sixty percent"
      },
      {
        id: "ex8-q5",
        number: 5,
        type: "fill_blank",
        prompt: "Cerebrospinal fluid flushes out toxic metabolites, notably ____________-amyloid proteins.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["beta", "Beta"],
        explanation: "Zaharli beta-amiloid oqsillari yuvib chiqariladi.",
        scriptEvidence: "notably beta-amyloid proteins."
      },
      {
        id: "ex8-q6",
        number: 6,
        type: "true_false",
        prompt: "Chronic disruption of slow-wave sleep impairs synaptic pruning and daytime cognitive flexibility.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "True",
        explanation: "Sekin to'lqinli uyquning buzilishi sinaptik tiklanish va kognitiv moslashuvchanlikka salbiy ta'sir qiladi.",
        scriptEvidence: "severely impairing hippocampal plasticity and daytime cognitive flexibility."
      },
      {
        id: "ex8-q7",
        number: 7,
        type: "short_answer",
        prompt: "What transient wave event reactivates daytime memories during sleep?",
        instruction: "Write NO MORE THAN THREE WORDS.",
        correctAnswer: ["sharp-wave ripples", "sharp wave ripples", "ripples"],
        explanation: "O'tkir to'lqinli tebranishlar (sharp-wave ripples) xotira izlarini qayta faollashtiradi.",
        scriptEvidence: "Through sharp-wave ripples, fragile episodic memories"
      },
      {
        id: "ex8-q8",
        number: 8,
        type: "ordering",
        prompt: "Arrange the neurological sequence of sleep memory consolidation:",
        instruction: "Order the items from first (1) to last (4).",
        items: [
          { id: "A", text: "Daytime acquisition of episodic memories" },
          { id: "B", text: "Generation of prefrontal sub-one-Hertz slow waves" },
          { id: "C", text: "Hippocampal sharp-wave ripples reactivate traces" },
          { id: "D", text: "Systematic consolidation into stable semantic knowledge" }
        ],
        correctOrder: ["A", "B", "C", "D"],
        explanation: "Kunduzgi xotiralar (A) -> sub-1Hz to'lqinlar (B) -> sharp-wave ripples (C) -> barqaror semantik bilim (D).",
        scriptEvidence: "memories acquired during daytime... slow waves... sharp-wave ripples... consolidated into stable semantic knowledge"
      }
    ]
  },

  // 9. Part 5 — Opinions and Attitudes (B1)
  {
    id: "ex-9",
    title: "Workplace Perspectives: Remote vs. Office Life",
    cefr: "B1",
    part: "Part 5 — Opinions and Attitudes",
    partNumber: 5,
    duration: "0:36",
    durationSec: 36,
    description: "Colleagues debate daily commute time, kitchen table isolation, and creative in-person synergy.",
    accent: "en-GB (British English)",
    voiceGender: "female",
    script: `Hannah, our management announced we can either stay completely remote or return to the downtown office three days a week. I am definitely staying remote.
Really, David? I find working from my kitchen table quite isolating. In the office, grabbing a coffee together often sparks our best marketing ideas.
I understand that, but eliminating my forty-minute train commute saves me nearly seven hours every week. I use that reclaimed time to jog and cook fresh meals.
That is a genuine benefit. However, training junior apprentices over video calls is frustrating. They learn much faster watching experienced designers collaborate in person.
True, mentorship is tougher online. Perhaps a hybrid schedule with two office days is a balanced compromise.
I would support that enthusiastically!`,
    sentences: [
      { speaker: "David", text: "Hannah, our management announced we can either stay completely remote or return to the downtown office three days a week. I am definitely staying remote." },
      { speaker: "Hannah", text: "Really, David? I find working from my kitchen table quite isolating. In the office, grabbing a coffee together often sparks our best marketing ideas." },
      { speaker: "David", text: "I understand that, but eliminating my forty-minute train commute saves me nearly seven hours every week. I use that reclaimed time to jog and cook fresh meals." },
      { speaker: "Hannah", text: "That is a genuine benefit. However, training junior apprentices over video calls is frustrating. They learn much faster watching experienced designers collaborate in person." },
      { speaker: "David", text: "True, mentorship is tougher online. Perhaps a hybrid schedule with two office days is a balanced compromise." },
      { speaker: "Hannah", text: "I would support that enthusiastically!" }
    ],
    questions: [
      {
        id: "ex9-q1",
        number: 1,
        type: "multiple_choice",
        prompt: "How many days per week did management propose employees attend the downtown office?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "One day" },
          { key: "B", text: "Two days" },
          { key: "C", text: "Three days" },
          { key: "D", text: "Five days" }
        ],
        correctAnswer: "C",
        explanation: "Rahbariyat haftasiga 3 kun ofisga kelishni taklif qilgan.",
        scriptEvidence: "return to the downtown office three days a week."
      },
      {
        id: "ex9-q2",
        number: 2,
        type: "matching",
        prompt: "Match each colleague with their initial perspective:",
        instruction: "Select the correct match for each item.",
        items: [
          { id: "david", label: "David's stance" },
          { id: "hannah", label: "Hannah's stance" },
          { id: "outcome", label: "Final agreement" }
        ],
        options: ["Prefers working fully remote", "Feels isolated working from kitchen table", "Two-day hybrid compromise", "Return full-time to office"],
        correctAnswer: {
          "david": "Prefers working fully remote",
          "hannah": "Feels isolated working from kitchen table",
          "outcome": "Two-day hybrid compromise"
        },
        explanation: "David to'liq masofaviy ishni afzal ko'radi, Hannah yolg'izlik his qiladi, oxirida 2 kunlik gibridga kelishadilar.",
        scriptEvidence: "David: definitely staying remote... Hannah: isolating... compromise: two office days"
      },
      {
        id: "ex9-q3",
        number: 3,
        type: "short_answer",
        prompt: "How long is David's one-way train commute?",
        instruction: "Write NO MORE THAN THREE WORDS.",
        correctAnswer: ["40 minutes", "forty minutes", "40 min", "40"],
        explanation: "David poyezdda qirq daqiqa yo'l yuradi.",
        scriptEvidence: "eliminating my forty-minute train commute"
      },
      {
        id: "ex9-q4",
        number: 4,
        type: "fill_blank",
        prompt: "David saves nearly ____________ hours each week by not commuting.",
        instruction: "Write ONE WORD or a number.",
        correctAnswer: ["7", "seven"],
        explanation: "Yo'lga sarflanmagan vaqt haftasiga qariyb 7 soatni tashkil etadi.",
        scriptEvidence: "saves me nearly seven hours every week."
      },
      {
        id: "ex9-q5",
        number: 5,
        type: "true_false",
        prompt: "Hannah believes junior apprentices learn faster during in-person collaboration.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "True",
        explanation: "Hannah yosh shogirdlar jonli muloqotda ancha tezroq o'rganishini aytadi.",
        scriptEvidence: "They learn much faster watching experienced designers collaborate in person."
      },
      {
        id: "ex9-q6",
        number: 6,
        type: "multiple_choice",
        prompt: "What compromise does David propose towards the end of their conversation?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "Working full-time from the office" },
          { key: "B", text: "A hybrid schedule with two office days" },
          { key: "C", text: "Switching to a four-day work week" },
          { key: "D", text: "Renting an independent co-working desk" }
        ],
        correctAnswer: "B",
        explanation: "David haftasiga 2 kun ofisda bo'ladigan gibrid jadvalni murosaga taklif etadi.",
        scriptEvidence: "Perhaps a hybrid schedule with two office days is a balanced compromise."
      },
      {
        id: "ex9-q7",
        number: 7,
        type: "fill_blank",
        prompt: "Hannah mentions that grabbing a ____________ together often sparks creative marketing ideas.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["coffee", "Coffee"],
        explanation: "Ofisda birga kofe ichish ijodiy g'oyalarni keltirib chiqarishi aytiladi.",
        scriptEvidence: "grabbing a coffee together often sparks our best marketing ideas."
      },
      {
        id: "ex9-q8",
        number: 8,
        type: "true_false",
        prompt: "Hannah strongly rejects David's suggested two-day hybrid compromise.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "False",
        explanation: "Hannah taklifni katta ishtiyoq bilan qo'llab-quvvatlaydi: 'support that enthusiastically!'.",
        scriptEvidence: "I would support that enthusiastically!"
      }
    ]
  },

  // 10. Part 5 — Opinions and Attitudes (B2)
  {
    id: "ex-10",
    title: "Automotive Perspectives: Electric Vehicles in Sub-Zero Climates",
    cefr: "B2",
    part: "Part 5 — Opinions and Attitudes",
    partNumber: 5,
    duration: "0:38",
    durationSec: 38,
    description: "Automotive journalists assess winter battery degradation, cabin heat pumps, and rural charging.",
    accent: "en-US (American English)",
    voiceGender: "female",
    script: `Robert, our cold-weather road test across northern Sweden revealed substantial battery drain. At minus fifteen degrees, driving range dropped thirty-five percent.
That is undeniable, Elena, but modern electric vehicles with heat pump thermal management fared significantly better than older resistive heating models.
True, yet the charging speeds at roadside stations plummeted. Cold battery chemistry slows lithium-ion intake, doubling charging durations from twenty to forty-five minutes.
Manufacturers are addressing that by integrating automated pre-conditioning, warming the battery pack when a navigation destination is set to a supercharger.
In urban settings that works, but in rural sub-Arctic regions with sixty miles between chargers, battery uncertainty creates acute driver anxiety.
I agree rural infrastructure requires massive public subsidies, but electric drivetrains still offer superior traction control on packed snow compared to petrol cars.`,
    sentences: [
      { speaker: "Elena", text: "Robert, our cold-weather road test across northern Sweden revealed substantial battery drain. At minus fifteen degrees, driving range dropped thirty-five percent." },
      { speaker: "Robert", text: "That is undeniable, Elena, but modern electric vehicles with heat pump thermal management fared significantly better than older resistive heating models." },
      { speaker: "Elena", text: "True, yet the charging speeds at roadside stations plummeted. Cold battery chemistry slows lithium-ion intake, doubling charging durations from twenty to forty-five minutes." },
      { speaker: "Robert", text: "Manufacturers are addressing that by integrating automated pre-conditioning, warming the battery pack when a navigation destination is set to a supercharger." },
      { speaker: "Elena", text: "In urban settings that works, but in rural sub-Arctic regions with sixty miles between chargers, battery uncertainty creates acute driver anxiety." },
      { speaker: "Robert", text: "I agree rural infrastructure requires massive public subsidies, but electric drivetrains still offer superior traction control on packed snow compared to petrol cars." }
    ],
    questions: [
      {
        id: "ex10-q1",
        number: 1,
        type: "multiple_choice",
        prompt: "By what percentage did electric driving range decrease at minus fifteen degrees?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "15 percent" },
          { key: "B", text: "25 percent" },
          { key: "C", text: "35 percent" },
          { key: "D", text: "50 percent" }
        ],
        correctAnswer: "C",
        explanation: "Elena sovuq havoda masofa zaxirasi 35 foizga kamayganini aytadi.",
        scriptEvidence: "driving range dropped thirty-five percent."
      },
      {
        id: "ex10-q2",
        number: 2,
        type: "fill_blank",
        prompt: "Vehicles with ____________ pump thermal systems retained significantly more battery range.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["heat", "Heat"],
        explanation: "Issiqlik nasosi (heat pump) bo'lgan mashinalar ancha yaxshi natija ko'rsatgan.",
        scriptEvidence: "modern electric vehicles with heat pump thermal management"
      },
      {
        id: "ex10-q3",
        number: 3,
        type: "true_false",
        prompt: "Cold temperatures caused roadside charging times to increase from twenty to forty-five minutes.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "True",
        explanation: "Zaryadlash vaqti 20 daqiqadan 45 daqiqagacha cho'zilgan.",
        scriptEvidence: "doubling charging durations from twenty to forty-five minutes."
      },
      {
        id: "ex10-q4",
        number: 4,
        type: "short_answer",
        prompt: "What process warms the battery before reaching a fast charging station?",
        instruction: "Write NO MORE THAN THREE WORDS.",
        correctAnswer: ["automated pre-conditioning", "pre-conditioning", "battery pre-conditioning", "preconditioning"],
        explanation: "Batareyani oldindan qizdirish (automated pre-conditioning) tizimi.",
        scriptEvidence: "integrating automated pre-conditioning, warming the battery pack"
      },
      {
        id: "ex10-q5",
        number: 5,
        type: "matching",
        prompt: "Match each speaker with their principal assessment:",
        instruction: "Select the correct match for each item.",
        items: [
          { id: "elena", label: "Elena's concern" },
          { id: "robert_snow", label: "Robert's advantage" },
          { id: "infra", label: "Rural infrastructure" }
        ],
        options: ["Acute driver anxiety in sub-Arctic regions", "Superior snow traction control", "Requires massive public subsidies", "Zero battery degradation"],
        correctAnswer: {
          "elena": "Acute driver anxiety in sub-Arctic regions",
          "robert_snow": "Superior snow traction control",
          "infra": "Requires massive public subsidies"
        },
        explanation: "Elena haydovchilar xavotirini, Robert qorda yaxshi yurishini aytadi, infratuzilmaga esa subsidiya kerak.",
        scriptEvidence: "Elena: acute driver anxiety... Robert: superior traction control... requires massive public subsidies"
      },
      {
        id: "ex10-q6",
        number: 6,
        type: "multiple_choice",
        prompt: "According to Robert, what advantage do electric drivetrains maintain over petrol cars in winter?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "Heavier curb weight" },
          { key: "B", text: "Superior traction control on packed snow" },
          { key: "C", text: "Faster windscreen wiper motors" },
          { key: "D", text: "Lower tyre puncture rates" }
        ],
        correctAnswer: "B",
        explanation: "Elektromobillar qorda tortish kuchini (traction control) benzinli mashinalardan ustun saqlaydi.",
        scriptEvidence: "electric drivetrains still offer superior traction control on packed snow"
      },
      {
        id: "ex10-q7",
        number: 7,
        type: "fill_blank",
        prompt: "In rural sub-Arctic regions, charging stations are separated by up to sixty ____________.",
        instruction: "Write ONE WORD (unit of distance).",
        correctAnswer: ["miles", "Miles"],
        explanation: "Qutbbo'yi qishloq joylarida stansiyalar oralig'i 60 milga yetadi.",
        scriptEvidence: "rural sub-Arctic regions with sixty miles between chargers"
      },
      {
        id: "ex10-q8",
        number: 8,
        type: "true_false",
        prompt: "Robert argues that rural charging networks can expand fully without any public subsidies.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "False",
        explanation: "Robert qishloq infratuzilmasi uchun yirik davlat subsidiyalari kerakligiga qo'shiladi.",
        scriptEvidence: "I agree rural infrastructure requires massive public subsidies"
      }
    ]
  },

  // 11. Part 6 — Short Story and Narrative (A2/B1)
  {
    id: "ex-11",
    title: "The Midnight Sleeper Train to Edinburgh",
    cefr: "A2",
    part: "Part 6 — Short Story and Narrative",
    partNumber: 6,
    duration: "0:35",
    durationSec: 35,
    description: "A missed daytime express train turns into an unforgettable overnight journey through the Highlands.",
    accent: "en-GB (British English)",
    voiceGender: "female",
    script: `Last November, heavy traffic on the M1 motorway caused me to miss the final afternoon express train to Edinburgh by just seven minutes.
Disappointed and exhausted, I entered King's Cross station, wondering whether to book an expensive airport hotel.
The ticket clerk smiled warmly and suggested the Caledonian Sleeper train departing at eleven-thirty at night.
I booked a cozy single cabin, boarded the train, and fell asleep to the rhythmic clatter of steel rails.
When I awoke at dawn and pulled back the cabin curtain, golden sunlight was illuminating the misty purple hills of the Scottish Highlands.
The dining car steward served fresh hot porridge and black tea.
Missing my earlier train turned out to be the most serene travel experience of my life.`,
    sentences: [
      { speaker: "Julian", text: "Last November, heavy traffic on the M1 motorway caused me to miss the final afternoon express train to Edinburgh by just seven minutes." },
      { speaker: "Julian", text: "Disappointed and exhausted, I entered King's Cross station, wondering whether to book an expensive airport hotel." },
      { speaker: "Julian", text: "The ticket clerk smiled warmly and suggested the Caledonian Sleeper train departing at eleven-thirty at night." },
      { speaker: "Julian", text: "I booked a cozy single cabin, boarded the train, and fell asleep to the rhythmic clatter of steel rails." },
      { speaker: "Julian", text: "When I awoke at dawn and pulled back the cabin curtain, golden sunlight was illuminating the misty purple hills of the Scottish Highlands." },
      { speaker: "Julian", text: "The dining car steward served fresh hot porridge and black tea." },
      { speaker: "Julian", text: "Missing my earlier train turned out to be the most serene travel experience of my life." }
    ],
    questions: [
      {
        id: "ex11-q1",
        number: 1,
        type: "multiple_choice",
        prompt: "Why did Julian miss his scheduled afternoon express train?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "Severe train mechanical delay" },
          { key: "B", text: "Heavy motorway traffic on the M1" },
          { key: "C", text: "Lost ticket at security" },
          { key: "D", text: "Slept past his alarm" }
        ],
        correctAnswer: "B",
        explanation: "M1 trassasidagi tirbandlik tufayli Julian poyezdga kech qoladi.",
        scriptEvidence: "heavy traffic on the M1 motorway caused me to miss the final afternoon express train"
      },
      {
        id: "ex11-q2",
        number: 2,
        type: "fill_blank",
        prompt: "Julian missed the afternoon express train by only ____________ minutes.",
        instruction: "Write ONE WORD or a number.",
        correctAnswer: ["7", "seven"],
        explanation: "Julian bor-yo'g'i 7 daqiqaga kechikkan edi.",
        scriptEvidence: "miss the final afternoon express train to Edinburgh by just seven minutes."
      },
      {
        id: "ex11-q3",
        number: 3,
        type: "short_answer",
        prompt: "What London railway station did Julian enter?",
        instruction: "Write NO MORE THAN THREE WORDS.",
        correctAnswer: ["King's Cross", "Kings Cross", "King's Cross station", "Kings Cross station"],
        explanation: "Julian Londondagi King's Cross vokzaliga kirib boradi.",
        scriptEvidence: "I entered King's Cross station"
      },
      {
        id: "ex11-q4",
        number: 4,
        type: "multiple_choice",
        prompt: "What time did the Caledonian Sleeper train depart?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "9:30 pm" },
          { key: "B", text: "10:45 pm" },
          { key: "C", text: "11:30 pm" },
          { key: "D", text: "Midnight" }
        ],
        correctAnswer: "C",
        explanation: "Tungi yotoqli poyezd soat 23:30 (eleven-thirty) da yo'lga chiqqan.",
        scriptEvidence: "Caledonian Sleeper train departing at eleven-thirty at night."
      },
      {
        id: "ex11-q5",
        number: 5,
        type: "true_false",
        prompt: "Julian decided to stay overnight in an expensive airport hotel.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "False",
        explanation: "U mehmonxonaga bormasdan, tungi poyezdda ketishga qaror qiladi.",
        scriptEvidence: "I booked a cozy single cabin, boarded the train"
      },
      {
        id: "ex11-q6",
        number: 6,
        type: "fill_blank",
        prompt: "At dawn, sunlight illuminated the misty hills of the Scottish ____________.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["Highlands", "highlands"],
        explanation: "Tongda Shotlandiya tog'liklari (Highlands) manzarasi ochiladi.",
        scriptEvidence: "misty purple hills of the Scottish Highlands."
      },
      {
        id: "ex11-q7",
        number: 7,
        type: "true_false",
        prompt: "The dining car steward served hot porridge and black tea for breakfast.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "True",
        explanation: "Kuzatuvchi nonushtaga issiq bo'tqa (porridge) va qora choy uzatadi.",
        scriptEvidence: "served fresh hot porridge and black tea."
      },
      {
        id: "ex11-q8",
        number: 8,
        type: "ordering",
        prompt: "Place Julian's travel experiences in correct chronological sequence:",
        instruction: "Order the events from first (1) to last (4).",
        items: [
          { id: "A", text: "Missed afternoon train by seven minutes" },
          { id: "B", text: "Booked a single cabin on the 11:30 pm sleeper train" },
          { id: "C", text: "Woke up to golden sunlight over Scottish hills" },
          { id: "D", text: "Enjoyed fresh porridge and tea in the dining car" }
        ],
        correctOrder: ["A", "B", "C", "D"],
        explanation: "Poyezdga kechikish (A) -> chipta olish (B) -> tonggi manzara (C) -> nonushta (D).",
        scriptEvidence: "missed the final afternoon... booked a cozy single cabin... awoke at dawn... served fresh hot porridge"
      }
    ]
  },

  // 12. Part 6 — Short Story and Narrative (B2)
  {
    id: "ex-12",
    title: "Lost in the Alpine Mist",
    cefr: "B2",
    part: "Part 6 — Short Story and Narrative",
    partNumber: 6,
    duration: "0:39",
    durationSec: 39,
    description: "A sudden mountain squall, following sheep bells through fog, and sanctuary in a shepherd's cabin.",
    accent: "en-GB (British English)",
    voiceGender: "female",
    script: `Three years ago, while solo trekking along the Swiss Alpine ridge, clear morning skies deceived me.
By two in the afternoon, icy winds swept over the pass, blanketing the rocky trail in dense white fog.
My mobile phone had zero reception, and every boulder looked identical.
As daylight began to fade and panic threatened to take over, I paused and listened intently.
Through the howling gust, the faint, melodic clinking of bronze sheep bells reached my ears.
Trusting my instincts, I navigated carefully towards the sound down a steep grassy slope.
Ten minutes later, a weathered wooden cabin emerged through the mist.
An elderly shepherd named Bruno opened the heavy pine door, welcomed me inside his warm kitchen, and handed me wool socks and a bowl of steaming vegetable broth.
That night beside his crackling hearth taught me that nature's gentlest sounds can save lives.`,
    sentences: [
      { speaker: "Claire", text: "Three years ago, while solo trekking along the Swiss Alpine ridge, clear morning skies deceived me." },
      { speaker: "Claire", text: "By two in the afternoon, icy winds swept over the pass, blanketing the rocky trail in dense white fog." },
      { speaker: "Claire", text: "My mobile phone had zero reception, and every boulder looked identical." },
      { speaker: "Claire", text: "As daylight began to fade and panic threatened to take over, I paused and listened intently." },
      { speaker: "Claire", text: "Through the howling gust, the faint, melodic clinking of bronze sheep bells reached my ears." },
      { speaker: "Claire", text: "Trusting my instincts, I navigated carefully towards the sound down a steep grassy slope." },
      { speaker: "Claire", text: "Ten minutes later, a weathered wooden cabin emerged through the mist." },
      { speaker: "Claire", text: "An elderly shepherd named Bruno opened the heavy pine door, welcomed me inside his warm kitchen, and handed me wool socks and a bowl of steaming vegetable broth." },
      { speaker: "Claire", text: "That night beside his crackling hearth taught me that nature's gentlest sounds can save lives." }
    ],
    questions: [
      {
        id: "ex12-q1",
        number: 1,
        type: "multiple_choice",
        prompt: "What hazardous weather change trapped Claire on the mountain ridge?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "Heavy thunderstorm and hail" },
          { key: "B", text: "Dense white fog and icy winds" },
          { key: "C", text: "Sudden gravel rockslide" },
          { key: "D", text: "Blinding snow avalanche" }
        ],
        correctAnswer: "B",
        explanation: "Qalin oq tuman va muzdek shamol so'qmoqni qoplab oladi.",
        scriptEvidence: "blanketing the rocky trail in dense white fog."
      },
      {
        id: "ex12-q2",
        number: 2,
        type: "fill_blank",
        prompt: "The weather severely deteriorated by ____________ in the afternoon.",
        instruction: "Write ONE WORD or a number.",
        correctAnswer: ["2", "two", "2:00", "2 pm", "2:00 pm"],
        explanation: "Havo tushdan keyin soat 14:00 (two in the afternoon) da buziladi.",
        scriptEvidence: "By two in the afternoon, icy winds swept over the pass"
      },
      {
        id: "ex12-q3",
        number: 3,
        type: "true_false",
        prompt: "Claire used her mobile phone's online mapping to locate the nearest village.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "False",
        explanation: "Telefonida aloqa umuman bo'lmagan: 'zero reception'.",
        scriptEvidence: "My mobile phone had zero reception"
      },
      {
        id: "ex12-q4",
        number: 4,
        type: "short_answer",
        prompt: "What acoustic sound guided Claire down the steep slope?",
        instruction: "Write NO MORE THAN THREE WORDS.",
        correctAnswer: ["sheep bells", "bronze sheep bells", "clinking of sheep bells", "bells"],
        explanation: "Qo'ylarning bronza qo'ng'irog'i (bronze sheep bells) tovushi yo'l ko'rsatadi.",
        scriptEvidence: "melodic clinking of bronze sheep bells reached my ears."
      },
      {
        id: "ex12-q5",
        number: 5,
        type: "fill_blank",
        prompt: "The elderly shepherd who sheltered Claire was named ____________.",
        instruction: "Write ONE WORD (name only).",
        correctAnswer: ["Bruno", "bruno"],
        explanation: "Keksalar cho'ponining ismi Bruno edi.",
        scriptEvidence: "An elderly shepherd named Bruno opened the heavy pine door"
      },
      {
        id: "ex12-q6",
        number: 6,
        type: "multiple_choice",
        prompt: "What did Bruno hand Claire when she entered his cabin?",
        instruction: "Select ONE correct option.",
        options: [
          { key: "A", text: "Hot coffee and fresh crusty bread" },
          { key: "B", text: "Wool socks and steaming vegetable broth" },
          { key: "C", text: "A rescue beacon and topographic map" },
          { key: "D", text: "A heavy blanket and alpine cheese" }
        ],
        correctAnswer: "B",
        explanation: "Cho'pon unga jun paypoq va qaynoq sabzavotli sho'rva uzatadi.",
        scriptEvidence: "handed me wool socks and a bowl of steaming vegetable broth."
      },
      {
        id: "ex12-q7",
        number: 7,
        type: "true_false",
        prompt: "It took Claire approximately ten minutes to reach the cabin after following the sound.",
        instruction: "Choose True or False.",
        options: [
          { key: "True", text: "True" },
          { key: "False", text: "False" }
        ],
        correctAnswer: "True",
        explanation: "Tovush ortidan tushgach, o'n daqiqadan so'ng yog'och kulba ko'rinadi.",
        scriptEvidence: "Ten minutes later, a weathered wooden cabin emerged through the mist."
      },
      {
        id: "ex12-q8",
        number: 8,
        type: "ordering",
        prompt: "Place the events in Claire's narrative in chronological order:",
        instruction: "Order the items from first (1) to last (4).",
        items: [
          { id: "A", text: "Dense fog covers the Alpine ridge" },
          { id: "B", text: "Hears bronze sheep bells in the howling wind" },
          { id: "C", text: "Navigates down the steep grassy slope" },
          { id: "D", text: "Bruno welcomes her inside his warm cabin" }
        ],
        correctOrder: ["A", "B", "C", "D"],
        explanation: "Tuman tushishi (A) -> qo'ng'iroq tovushini eshitish (B) -> pastga tushish (C) -> kulbada panoh topish (D).",
        scriptEvidence: "dense white fog... bronze sheep bells... navigated carefully towards the sound... Bruno opened the door"
      }
    ]
  }
];

// Write to js/listening/data.js
const fileContent = `/**
 * Professional Listening Practice Data
 * 12 Comprehensive Lessons across 6 Parts with CEFR A1-C1 mapping.
 * Each exercise contains exactly 8 questions (96 questions total).
 */

const LISTENING_EXERCISES = ${JSON.stringify(EXERCISES, null, 2)};

const LISTENING_PARTS = [
  { id: "all", name: "All Parts", count: 12 },
  { id: "1", name: "Part 1 — Everyday Conversations", description: "Short dialogues about meetings, bookings, and inquiries.", count: 2 },
  { id: "2", name: "Part 2 — Monologue and Information", description: "Announcements, visitor rules, and schedules.", count: 2 },
  { id: "3", name: "Part 3 — Academic Discussion", description: "Peer and faculty project discussions and study plans.", count: 2 },
  { id: "4", name: "Part 4 — Lecture or Educational Talk", description: "Educational presentations on science, history, and nature.", count: 2 },
  { id: "5", name: "Part 5 — Opinions and Attitudes", description: "Evaluating viewpoints, work trends, and perspectives.", count: 2 },
  { id: "6", name: "Part 6 — Short Story and Narrative", description: "Personal narratives, travel experiences, and unexpected adventures.", count: 2 }
];

const LISTENING_LEVELS = [
  { id: "all", name: "All Levels" },
  { id: "A1", name: "A1 — Beginner" },
  { id: "A2", name: "A2 — Elementary" },
  { id: "B1", name: "B1 — Intermediate" },
  { id: "B2", name: "B2 — Upper-Intermediate" },
  { id: "C1", name: "C1 — Advanced" }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    LISTENING_EXERCISES,
    LISTENING_PARTS,
    LISTENING_LEVELS
  };
}
`;

fs.writeFileSync(path.join(__dirname, 'js', 'listening', 'data.js'), fileContent, 'utf8');
console.log('SUCCESS: Written 12 exercises with 96 questions to js/listening/data.js');
