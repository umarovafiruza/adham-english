/**
 * Listening Master - O'quv bazasi va testlar to'plami
 * Barcha darajalar (A1-A2, B1-B2, C1) uchun haqiqiy audio-skriptlar,
 * savollar, tushuntirishlar, lug'atlar va tuzoqlar tahlili.
 */

const LISTENING_DATA = {
  levels: [
    {
      id: "beginner",
      name: "Boshlang'ich (A1-A2)",
      badge: "Beginner",
      badgeClass: "badge-beginner",
      description: "Kundalik sodda muloqotlar, aniq talaffuz, ismlar, raqamlar va orfografiya."
    },
    {
      id: "intermediate",
      name: "O'rta (B1-B2 / CEFR)",
      badge: "Intermediate",
      badgeClass: "badge-intermediate",
      description: "Sayohat, ish, xaridlar, chalg'ituvchi variantlar (distractors) va parafraza."
    },
    {
      id: "advanced",
      name: "Yuqori (C1 / IELTS Part 3-4)",
      badge: "Advanced",
      badgeClass: "badge-advanced",
      description: "Ilmiy ma'ruzalar, akademik taqdimotlar, tezkor nutq va murakkab tahlillar."
    }
  ],

  lessons: [
    /* ==========================================================================
       LEVEL 1: BEGINNER (A1-A2) - LESSON 1
       ========================================================================== */
    {
      id: "beg-1",
      level: "beginner",
      title: "Kutubxonaga a'zo bo'lish (Library Membership)",
      topic: "Kundalik shaxsiy ma'lumotlar, ism-familiya va raqamlar",
      accent: "en-GB (Britaniya)",
      voiceGender: "female",
      audioSpeedDefault: 0.9,
      duration: "2 min",
      description: "Talaba shahar kutubxonasiga tashrif buyurib, a'zolik kartasini rasmiylashtirmoqda. Ismlar, telefon raqami va manzillarni to'g'ri yozib olishga e'tibor bering.",
      
      vocabulary: [
        { word: "membership", phonetic: "/ˈmem.bə.ʃɪp/", pos: "noun", uzbek: "a'zolik", definition: "The state of belonging to an organization", example: "Library membership is free for students." },
        { word: "valid", phonetic: "/ˈvæl.ɪd/", pos: "adjective", uzbek: "amal qiluvchi, yaroqli", definition: "Legally acceptable or usable", example: "You need a valid passport or ID card." },
        { word: "borrow", phonetic: "/ˈbɒr.əʊ/", pos: "verb", uzbek: "qarzga/vaqtincha olmoq", definition: "To take and use something with the intention of returning it", example: "You can borrow up to six books." },
        { word: "fee", phonetic: "/fiː/", pos: "noun", uzbek: "to'lov, badal", definition: "An amount of money paid for a service", example: "There is no late fee if you return them on time." }
      ],

      sentences: [
        { speaker: "Librarian", text: "Good afternoon! Welcome to the Central City Library. How may I assist you today?" },
        { speaker: "Student", text: "Hello! I would like to register for a new student membership card, please." },
        { speaker: "Librarian", text: "Of course. I just need to take down a few details. Could you please tell me your full name?" },
        { speaker: "Student", text: "Yes, it is Oliver Kensington. That is K-E-N-S-I-N-G-T-O-N." },
        { speaker: "Librarian", text: "Thank you, Oliver. And what is your current address here in the city?" },
        { speaker: "Student", text: "I live at 24 Riverdale Road, Apartment 3B." },
        { speaker: "Librarian", text: "Great. And what is your contact phone number in case we need to reach you?" },
        { speaker: "Student", text: "It is 0794 321 885. Let me repeat that: 0794 321 885." },
        { speaker: "Librarian", text: "Got it. As a student member, you can borrow a maximum of six books at one time for up to three weeks." },
        { speaker: "Student", text: "That is fantastic! Is there any registration fee?" },
        { speaker: "Librarian", text: "Normally it is ten pounds, but for full-time students with a student ID, it is completely free." },
        { speaker: "Student", text: "Wonderful, here is my student card. Thank you so much!" }
      ],

      questions: [
        {
          id: "beg1-q1",
          type: "blank",
          prompt: "What is the applicant's surname?",
          instruction: "Write NO MORE THAN ONE WORD for the answer.",
          correctAnswer: ["Kensington", "kensington"],
          explanation: "Audioda talaba familiyasini aniq harflab beradi: 'That is K-E-N-S-I-N-G-T-O-N'. Shuning uchun to'g'ri javob — Kensington.",
          scriptEvidence: "Yes, it is Oliver Kensington. That is K-E-N-S-I-N-G-T-O-N."
        },
        {
          id: "beg1-q2",
          type: "blank",
          prompt: "Address: 24 ____________ Road, Apartment 3B.",
          instruction: "Write NO MORE THAN ONE WORD for the answer.",
          correctAnswer: ["Riverdale", "riverdale"],
          explanation: "Talaba manzilini aytayotganda: 'I live at 24 Riverdale Road' deb ta'kidlaydi.",
          scriptEvidence: "I live at 24 Riverdale Road, Apartment 3B."
        },
        {
          id: "beg1-q3",
          type: "blank",
          prompt: "Contact number: 0794 321 ____________.",
          instruction: "Write ONE NUMBER for the answer.",
          correctAnswer: ["885"],
          explanation: "Telefon raqami ikkita marta takrorlanadi: '0794 321 885'. Bo'sh joyga oxirgi qismi — 885 tushadi.",
          scriptEvidence: "It is 0794 321 885. Let me repeat that: 0794 321 885."
        },
        {
          id: "beg1-q4",
          type: "multiple_choice",
          prompt: "How many books can a student borrow at one time?",
          options: [
            { key: "A", text: "Three books" },
            { key: "B", text: "Six books" },
            { key: "C", text: "Ten books" }
          ],
          correctAnswer: "B",
          explanation: "Kutubxonachi 'borrow a maximum of six books at one time for up to three weeks' deydi. 'Three' bu haftalar soni, kitoblar soni esa 6 ta (Six).",
          scriptEvidence: "As a student member, you can borrow a maximum of six books at one time for up to three weeks."
        },
        {
          id: "beg1-q5",
          type: "multiple_choice",
          prompt: "How much does the student pay for registration?",
          options: [
            { key: "A", text: "£10" },
            { key: "B", text: "£5" },
            { key: "C", text: "Nothing (Free)" }
          ],
          correctAnswer: "C",
          explanation: "Kutubxonachi odatda £10 bo'lishini aytadi (tuzoq!), lekin talabalar uchun 'completely free' (bepul) ekanini qo'shimcha qiladi.",
          scriptEvidence: "Normally it is ten pounds, but for full-time students with a student ID, it is completely free."
        }
      ]
    },

    /* ==========================================================================
       LEVEL 1: BEGINNER (A1-A2) - LESSON 2
       ========================================================================== */
    {
      id: "beg-2",
      level: "beginner",
      title: "Kafeda nonushta buyurtma berish (Ordering at a Cafe)",
      topic: "Oziq-ovqat, narxlar va xushmuomala so'rovlar",
      accent: "en-US (Amerika)",
      voiceGender: "male",
      audioSpeedDefault: 0.95,
      duration: "2 min",
      description: "Mijoz 'Sunshine Cafe'da nonushta va ichimliklar buyurtma qilmoqda. Tanlovlar va qo'shimcha iltimoslarga e'tibor bering.",

      vocabulary: [
        { word: "order", phonetic: "/ˈɔː.dər/", pos: "verb / noun", uzbek: "buyurtma qilmoq / buyurtma", definition: "A request to make, supply, or deliver food or goods", example: "Are you ready to order?" },
        { word: "scrambled eggs", phonetic: "/ˌskræm.bəld ˈeɡz/", pos: "noun", uzbek: "qovurma tuxum (aralashtirilgan)", definition: "Eggs mixed together and cooked in a pan", example: "I will have scrambled eggs with toast." },
        { word: "receipt", phonetic: "/rɪˈsiːt/", pos: "noun", uzbek: "chek, kvitansiya", definition: "A written statement showing that something has been paid for", example: "Here is your receipt and change." },
        { word: "takeaway", phonetic: "/ˈteɪk.ə.weɪ/", pos: "noun / adjective", uzbek: "olib ketish (ovqat)", definition: "A meal bought at a restaurant to be eaten somewhere else", example: "Is this for here or takeaway?" }
      ],

      sentences: [
        { speaker: "Server", text: "Good morning! Welcome to Sunshine Cafe. Are you dining in or having takeaway today?" },
        { speaker: "Customer", text: "Good morning. I will be dining in, table for one, please." },
        { speaker: "Server", text: "Right this way. What can I get started for your breakfast?" },
        { speaker: "Customer", text: "I would like scrambled eggs on toast, but without butter on the bread, please." },
        { speaker: "Server", text: "No butter, noted. Would you like bacon or fresh mushrooms on the side?" },
        { speaker: "Customer", text: "I will take the mushrooms, please. And for the drink, a large hot chocolate." },
        { speaker: "Server", text: "Sure. We offer dairy milk, almond milk, or oat milk for our drinks." },
        { speaker: "Customer", text: "Almond milk would be wonderful." },
        { speaker: "Server", text: "Great choice! So that is scrambled eggs with mushrooms, toast with no butter, and a large hot chocolate with almond milk. Your total is twelve dollars and fifty cents." },
        { speaker: "Customer", text: "Here is a twenty-dollar bill. Keep the change as a tip!" },
        { speaker: "Server", text: "Thank you so much! Your meal will be ready in about ten minutes." }
      ],

      questions: [
        {
          id: "beg2-q1",
          type: "multiple_choice",
          prompt: "Where will the customer eat the meal?",
          options: [
            { key: "A", text: "Dining in the cafe" },
            { key: "B", text: "Takeaway to the office" },
            { key: "C", text: "Delivered to home" }
          ],
          correctAnswer: "A",
          explanation: "Mijoz aniq aytadi: 'I will be dining in, table for one, please.' Ya'ni kafening o'zida ovqatlanadi.",
          scriptEvidence: "I will be dining in, table for one, please."
        },
        {
          id: "beg2-q2",
          type: "blank",
          prompt: "The customer requests the toast WITHOUT ____________.",
          instruction: "Write ONE WORD only.",
          correctAnswer: ["butter"],
          explanation: "Mijoz nonushta buyurtmasida non ustiga sariyog' surmaslikni so'raydi: 'without butter on the bread'.",
          scriptEvidence: "I would like scrambled eggs on toast, but without butter on the bread, please."
        },
        {
          id: "beg2-q3",
          type: "multiple_choice",
          prompt: "Which milk did the customer choose for the hot chocolate?",
          options: [
            { key: "A", text: "Dairy milk" },
            { key: "B", text: "Oat milk" },
            { key: "C", text: "Almond milk" }
          ],
          correctAnswer: "C",
          explanation: "Ofitsiant uch xil sut turini sanaydi (tuzoq!), lekin mijoz 'Almond milk would be wonderful' deb bodom sutini tanlaydi.",
          scriptEvidence: "Almond milk would be wonderful."
        },
        {
          id: "beg2-q4",
          type: "blank",
          prompt: "The total bill for the order is $____________.",
          instruction: "Write the number (e.g., 12.50).",
          correctAnswer: ["12.50", "12.5"],
          explanation: "Ofitsiant jami hisobni aytadi: 'Your total is twelve dollars and fifty cents' ($12.50). Mijoz $20 bersa-da, hisob summasi $12.50.",
          scriptEvidence: "Your total is twelve dollars and fifty cents."
        }
      ]
    },

    /* ==========================================================================
       LEVEL 2: INTERMEDIATE (B1-B2) - LESSON 1
       ========================================================================== */
    {
      id: "int-1",
      level: "intermediate",
      title: "Greenfield Eko-bog' sayohati (Eco-Park Guided Tour)",
      topic: "Turizm, yo'riqnomalar, vaqtlar va tuzoqli narxlar",
      accent: "en-GB (Britaniya)",
      voiceGender: "male",
      audioSpeedDefault: 1.0,
      duration: "3 min",
      description: "Gid sayyohlarga eko-bog'dagi qoidalar, yangilangan chipta narxlari va ekskursiya marshruti haqida so'zlab bermoqda. Chalg'ituvchi ma'lumotlarga juda ehtiyot bo'ling!",

      vocabulary: [
        { word: "conservation", phonetic: "/ˌkɒn.səˈveɪ.ʃən/", pos: "noun", uzbek: "tabiatni asrash, muhofaza", definition: "The protection of plants and animals and natural areas", example: "The park funds several wildlife conservation projects." },
        { word: "prohibited", phonetic: "/prəˈhɪb.ɪ.tɪd/", pos: "adjective", uzbek: "taqiqlangan", definition: "Not allowed; banned by law or rule", example: "Smoking and single-use plastic are strictly prohibited." },
        { word: "sanctuary", phonetic: "/ˈsæŋk.tʃʊə.ri/", pos: "noun", uzbek: "qo'riqxona, boshpana", definition: "A safe place for birds or wild animals", example: "The bird sanctuary is located near the lake." },
        { word: "reschedule", phonetic: "/ˌriːˈʃedʒ.uːl/", pos: "verb", uzbek: "boshqa vaqtga ko'chirmoq", definition: "To change the date or time of an event", example: "The boat tour was rescheduled due to rain." }
      ],

      sentences: [
        { speaker: "Tour Guide", text: "Attention everyone, and a very warm welcome to Greenfield Eco-Park! My name is Arthur, and I will be leading your nature walk today." },
        { speaker: "Tour Guide", text: "Before we embark on the trails, I have a few essential announcements regarding schedule adjustments and safety regulations." },
        { speaker: "Tour Guide", text: "Originally, our tour was scheduled to depart at 9:30 AM. However, because of morning frost on the wooden bridge, our departure has been pushed back to 10:00 AM sharp." },
        { speaker: "Tour Guide", text: "Regarding tickets: adults pay £22, while seniors and students pay £16. Children under twelve can enter for just £8. Please note that credit cards are preferred, as we are trying to go entirely cashless." },
        { speaker: "Tour Guide", text: "Now, as you look at your trail maps, please remember that single-use plastic bottles are strictly prohibited inside the sanctuary. We have complimentary water refill stations located at every checkpoint." },
        { speaker: "Tour Guide", text: "Finally, the botanical greenhouse will close early at 3:30 PM for a private biological research workshop, although the main park grounds will remain open until 6:00 PM." },
        { speaker: "Tour Guide", text: "Please meet me at the North Gate in ten minutes. Make sure to wear sturdy waterproof shoes. Let us have a fantastic day!" }
      ],

      questions: [
        {
          id: "int1-q1",
          type: "multiple_choice",
          prompt: "What time does the eco-park walking tour actually begin?",
          options: [
            { key: "A", text: "9:30 AM" },
            { key: "B", text: "10:00 AM" },
            { key: "C", text: "10:15 AM" }
          ],
          correctAnswer: "B",
          explanation: "Gid dastlab 'Originally... at 9:30 AM' deb boshlaydi (tuzoq!), so'ng 'However... pushed back to 10:00 AM sharp' deydi. Demak, haqiqiy boshlanish vaqti 10:00 AM.",
          scriptEvidence: "Originally, our tour was scheduled to depart at 9:30 AM. However, because of morning frost on the wooden bridge, our departure has been pushed back to 10:00 AM sharp."
        },
        {
          id: "int1-q2",
          type: "blank",
          prompt: "The ticket price for seniors and students is £____________.",
          instruction: "Write ONE NUMBER only.",
          correctAnswer: ["16"],
          explanation: "Gid bir nechta narxlarni sanaydi: kattalar uchun £22, 12 yoshgacha bolalar uchun £8, pensionerlar va talabalar uchun esa £16.",
          scriptEvidence: "adults pay £22, while seniors and students pay £16. Children under twelve can enter for just £8."
        },
        {
          id: "int1-q3",
          type: "blank",
          prompt: "Visitors are strictly forbidden from bringing single-use ____________ bottles into the sanctuary.",
          instruction: "Write ONE WORD only.",
          correctAnswer: ["plastic"],
          explanation: "Audioda 'single-use plastic bottles are strictly prohibited' deyilgan. 'Prohibited' so'zi savoldagi 'forbidden' bilan sinonimdir.",
          scriptEvidence: "single-use plastic bottles are strictly prohibited inside the sanctuary."
        },
        {
          id: "int1-q4",
          type: "true_false_ng",
          prompt: "The entire park grounds will close to the public at 3:30 PM.",
          options: [
            { key: "TRUE", text: "True (To'g'ri)" },
            { key: "FALSE", text: "False (Noto'g'ri)" },
            { key: "NOT GIVEN", text: "Not Given (Ma'lumot berilmagan)" }
          ],
          correctAnswer: "FALSE",
          explanation: "Soat 3:30 da butun bog' emas, faqat botanika issiqxonasi (botanical greenhouse) yopiladi. Asosiy bog' esa soat 6:00 PM gacha ochiq qoladi. Shuning uchun javob FALSE.",
          scriptEvidence: "the botanical greenhouse will close early at 3:30 PM for a private biological research workshop, although the main park grounds will remain open until 6:00 PM."
        },
        {
          id: "int1-q5",
          type: "blank",
          prompt: "Visitors must assemble at the ____________ Gate before the tour starts.",
          instruction: "Write NO MORE THAN ONE WORD.",
          correctAnswer: ["North", "north"],
          explanation: "Gid uchrashuv joyi sifatida 'North Gate' (Shimoliy darvoza)ni aytadi.",
          scriptEvidence: "Please meet me at the North Gate in ten minutes."
        }
      ]
    },

    /* ==========================================================================
       LEVEL 2: INTERMEDIATE (B1-B2) - LESSON 2
       ========================================================================== */
    {
      id: "int-2",
      level: "intermediate",
      title: "Ish bo'yicha suhbat (Job Interview for IT Support)",
      topic: "Kasbiy suhbat, smenalar, imtiyozlar va mas'uliyat",
      accent: "en-US (Amerika)",
      voiceGender: "female",
      audioSpeedDefault: 1.0,
      duration: "3 min",
      description: "Nomzod IT qo'llab-quvvatlash bo'limi menejeri bilan suhbatdan o'tmoqda. Ish sharoitlari, ish haqi va sinov muddatiga doir tafsilotlarga e'tibor bering.",

      vocabulary: [
        { word: "probation", phonetic: "/prəˈbeɪ.ʃən/", pos: "noun", uzbek: "sinov muddati", definition: "A period of time during which an employee is monitored and tested", example: "The initial probation period lasts three months." },
        { word: "shift", phonetic: "/ʃɪft/", pos: "noun", uzbek: "ish smenasi", definition: "A scheduled period of work in a workplace", example: "He prefers working the morning shift." },
        { word: "compensation", phonetic: "/ˌkɒm.penˈseɪ.ʃən/", pos: "noun", uzbek: "maosh, tovon puli", definition: "Money awarded to someone as recompense for service or work", example: "Annual compensation includes a performance bonus." },
        { word: "troubleshoot", phonetic: "/ˈtrʌb.əl.ʃuːt/", pos: "verb", uzbek: "muammoni aniqlab bartaraf etmoq", definition: "To identify and solve serious problems or faults in a system", example: "We troubleshoot hardware and network issues daily." }
      ],

      sentences: [
        { speaker: "Interviewer", text: "Good afternoon, Daniel. Thank you for coming in today for the Customer Technical Support position." },
        { speaker: "Daniel", text: "Good afternoon, Ms. Harris. Thank you for having me. I am very enthusiastic about this opportunity." },
        { speaker: "Interviewer", text: "I reviewed your resume, and your three years of network administration experience look very promising." },
        { speaker: "Interviewer", text: "First, let us talk about the schedule. Our support center operates twenty-four-seven. The available opening is for the evening shift from 4:00 PM to midnight, Monday through Friday." },
        { speaker: "Daniel", text: "That schedule fits my personal routine very well, especially having weekends off." },
        { speaker: "Interviewer", text: "Exactly. The starting base salary is $48,000 annually, with health insurance coverage beginning after your three-month probation period." },
        { speaker: "Daniel", text: "That sounds very reasonable. Does the company also sponsor professional certification exams?" },
        { speaker: "Interviewer", text: "Yes, we reimburse up to $1,500 per year for approved cloud computing and cybersecurity certificates." },
        { speaker: "Interviewer", text: "We will conclude our final interviews on Thursday and notify all candidates of our decision by next Monday." }
      ],

      questions: [
        {
          id: "int2-q1",
          type: "multiple_choice",
          prompt: "Which work shift is currently being offered to Daniel?",
          options: [
            { key: "A", text: "Morning shift (8:00 AM - 4:00 PM)" },
            { key: "B", text: "Evening shift (4:00 PM - Midnight)" },
            { key: "C", text: "Night shift (Midnight - 8:00 AM)" }
          ],
          correctAnswer: "B",
          explanation: "Intervyuer aniq tushuntiradi: 'The available opening is for the evening shift from 4:00 PM to midnight, Monday through Friday.'",
          scriptEvidence: "The available opening is for the evening shift from 4:00 PM to midnight, Monday through Friday."
        },
        {
          id: "int2-q2",
          type: "blank",
          prompt: "The probation period lasts for ____________ months.",
          instruction: "Write ONE NUMBER or WORD.",
          correctAnswer: ["3", "three"],
          explanation: "Menejer aytadi: 'health insurance coverage beginning after your three-month probation period.' Sinov muddati 3 oy.",
          scriptEvidence: "with health insurance coverage beginning after your three-month probation period."
        },
        {
          id: "int2-q3",
          type: "blank",
          prompt: "The company reimburses up to $____________ annually for certification courses.",
          instruction: "Write the number (e.g., 1000).",
          correctAnswer: ["1500", "1,500"],
          explanation: "Menejer kompaniya sertifikatlar uchun yiliga $1,500 gacha xarajatni qoplab berishini ta'kidlaydi.",
          scriptEvidence: "Yes, we reimburse up to $1,500 per year for approved cloud computing and cybersecurity certificates."
        },
        {
          id: "int2-q4",
          type: "multiple_choice",
          prompt: "When will the candidates be notified of the final hiring decision?",
          options: [
            { key: "A", text: "This Thursday" },
            { key: "B", text: "This Friday" },
            { key: "C", text: "Next Monday" }
          ],
          correctAnswer: "C",
          explanation: "Payshanba kuni (Thursday) intervyular tugaydi (tuzoq!), lekin qaror keyingi dushanba (next Monday) kuni e'lon qilinadi.",
          scriptEvidence: "We will conclude our final interviews on Thursday and notify all candidates of our decision by next Monday."
        }
      ]
    },

    /* ==========================================================================
       LEVEL 3: ADVANCED (C1 / IELTS Part 4) - LESSON 1
       ========================================================================== */
    {
      id: "adv-1",
      level: "advanced",
      title: "Akademik ma'ruza: Okean kislotaliligi va marjon riflari (Ocean Acidification)",
      topic: "Ekologiya, dengiz biologiyasi, kimyoviy jarayonlar va ilmiy tahlil",
      accent: "en-GB (Britaniya)",
      voiceGender: "female",
      audioSpeedDefault: 1.05,
      duration: "4 min",
      description: "Universitet professori iqlim o'zgarishi, okean kislotaliligi va ularning marjon riflariga halokatli ta'siri haqida leksiya o'qimoqda. Ilmiy atamalar va sabab-oqibat bog'lanishlarini kuzatib boring.",

      vocabulary: [
        { word: "acidification", phonetic: "/əˌsɪd.ɪ.fɪˈkeɪ.ʃən/", pos: "noun", uzbek: "kislotali bo'lish/ortish jarayoni", definition: "The process of becoming an acid or becoming more acidic", example: "Ocean acidification threatens marine biodiversity worldwide." },
        { word: "calcium carbonate", phonetic: "/ˌkæl.si.əm ˈkɑː.bən.eɪt/", pos: "noun", uzbek: "kalsiy karbonat (ohaktosh birikmasi)", definition: "A white chemical compound found in rocks and shells of marine organisms", example: "Corals need calcium carbonate to build their hard skeletons." },
        { word: "vulnerable", phonetic: "/ˈvʌl.nər.ə.bəl/", pos: "adjective", uzbek: "zaif, himoyasiz", definition: "Susceptible to physical or emotional attack or harm", example: "Larval shellfish are exceptionally vulnerable to low pH levels." },
        { word: "catastrophic", phonetic: "/ˌkæt.əˈstrɒf.ɪk/", pos: "adjective", uzbek: "halokatli, fojiali", definition: "Involving or causing sudden great damage or suffering", example: "A failure of coral ecosystems would cause catastrophic economic loss." }
      ],

      sentences: [
        { speaker: "Lecturer", text: "Good morning, everyone. In today's marine biology lecture, we are turning our attention to one of the most pressing yet under-reported ecological crises of the Anthropocene: ocean acidification." },
        { speaker: "Lecturer", text: "Since the onset of the Industrial Revolution, human activities have released massive quantities of carbon dioxide into the atmosphere. What many people do not realize is that our oceans have absorbed roughly thirty percent of this anthropogenic carbon dioxide." },
        { speaker: "Lecturer", text: "When atmospheric carbon dioxide dissolves into seawater, it triggers a chemical chain reaction, producing carbonic acid. This process releases excess hydrogen ions, which in turn reduces the ocean's pH balance." },
        { speaker: "Lecturer", text: "Historically, ocean pH stood at an average of 8.2. Over the last two centuries, it has dropped to approximately 8.1. While a 0.1 decrease may sound trivial to the layperson, because pH is calculated on a logarithmic scale, this represents an astonishing thirty percent increase in ocean acidity." },
        { speaker: "Lecturer", text: "The primary consequence of this increased acidity is the depletion of carbonate ions. Calcifying marine organisms, particularly reef-building corals and crustaceans, rely heavily on carbonate ions to synthesize calcium carbonate for their protective skeletons and shells." },
        { speaker: "Lecturer", text: "Without sufficient carbonate, existing coral reefs actually begin to dissolve faster than they can regenerate. Researchers predict that by the year 2050, if current emissions trajectories continue unabated, nearly ninety percent of global coral reef ecosystems will face severe structural degradation." },
        { speaker: "Lecturer", text: "Beyond ecological collapse, this poses severe threats to coastal communities, as healthy reefs act as vital natural shock absorbers, diminishing incoming wave energy by up to ninety-seven percent during severe tropical storms." }
      ],

      questions: [
        {
          id: "adv1-q1",
          type: "blank",
          prompt: "Oceans have absorbed approximately ____________ percent of human-produced carbon dioxide.",
          instruction: "Write ONE NUMBER only.",
          correctAnswer: ["30", "thirty"],
          explanation: "Lektor ta'kidlaydi: 'our oceans have absorbed roughly thirty percent of this anthropogenic carbon dioxide'.",
          scriptEvidence: "our oceans have absorbed roughly thirty percent of this anthropogenic carbon dioxide."
        },
        {
          id: "adv1-q2",
          type: "multiple_choice",
          prompt: "A 0.1 decline on the logarithmic pH scale corresponds to what percentage increase in ocean acidity?",
          options: [
            { key: "A", text: "10 percent" },
            { key: "B", text: "30 percent" },
            { key: "C", text: "0.1 percent" }
          ],
          correctAnswer: "B",
          explanation: "pH shkalasi logarifmik bo'lgani sababli, 0.1 birlikka pasayish kislotalilikning 30 foizga (thirty percent) oshishini bildiradi.",
          scriptEvidence: "because pH is calculated on a logarithmic scale, this represents an astonishing thirty percent increase in ocean acidity."
        },
        {
          id: "adv1-q3",
          type: "blank",
          prompt: "Corals require carbonate ions to manufacture calcium ____________ for their hard skeletons.",
          instruction: "Write NO MORE THAN ONE WORD.",
          correctAnswer: ["carbonate"],
          explanation: "Marjonlar o'z skeletlarini hosil qilish uchun kalsiy karbonat (calcium carbonate) sintez qiladi.",
          scriptEvidence: "rely heavily on carbonate ions to synthesize calcium carbonate for their protective skeletons and shells."
        },
        {
          id: "adv1-q4",
          type: "true_false_ng",
          prompt: "By 2050, scientists predict all coral reefs worldwide will be completely destroyed.",
          options: [
            { key: "TRUE", text: "True (To'g'ri)" },
            { key: "FALSE", text: "False (Noto'g'ri)" },
            { key: "NOT GIVEN", text: "Not Given (Ma'lumot berilmagan)" }
          ],
          correctAnswer: "FALSE",
          explanation: "Olimlar barcha marjonlar (all) to'liq yo'q bo'ladi deb emas, balki taxminan 90 foizi (nearly ninety percent) og'ir strukturaviy yemirilishga duch keladi deb bashorat qilmoqda. Shuning uchun FALSE.",
          scriptEvidence: "Researchers predict that by the year 2050, if current emissions trajectories continue unabated, nearly ninety percent of global coral reef ecosystems will face severe structural degradation."
        },
        {
          id: "adv1-q5",
          type: "blank",
          prompt: "Coral reefs protect coastal communities by reducing wave energy by up to ____________ percent during tropical storms.",
          instruction: "Write ONE NUMBER only.",
          correctAnswer: ["97"],
          explanation: "Matnda aniq aytiladi: 'diminishing incoming wave energy by up to ninety-seven percent during severe tropical storms'.",
          scriptEvidence: "diminishing incoming wave energy by up to ninety-seven percent during severe tropical storms."
        }
      ]
    },

    /* ==========================================================================
       LEVEL 3: ADVANCED (C1 / IELTS Part 4) - LESSON 2
       ========================================================================== */
    {
      id: "adv-2",
      level: "advanced",
      title: "Neyrobiologiya: Odatlarning shakllanishi siri (Neurobiology of Habits)",
      topic: "Miya faoliyati, neyronlar zanjiri, dofamin va xatti-harakatlar",
      accent: "en-US (Amerika)",
      voiceGender: "male",
      audioSpeedDefault: 1.05,
      duration: "3.5 min",
      description: "Neyrobiologiya bo'yicha seminar: inson miyasi qanday qilib kundalik odatlarni avtomatlashtiradi, 'odatlar silsilasi' (habit loop)ning 3 elementi va uni o'zgartirish texnikasi.",

      vocabulary: [
        { word: "basal ganglia", phonetic: "/ˌbeɪ.səl ˈɡæŋ.ɡli.ə/", pos: "noun", uzbek: "bazal yadrolar (miya qismi)", definition: "A group of subcortical nuclei responsible for motor control and routine behaviors", example: "Automated habits are predominantly controlled by the basal ganglia." },
        { word: "cue", phonetic: "/kjuː/", pos: "noun", uzbek: "turtki, signal, ishora", definition: "A stimulus or event that triggers a specific response or behavior", example: "The morning alarm clock acts as a sensory cue." },
        { word: "prefrontal cortex", phonetic: "/ˌpriː.frʌn.təl ˈkɔː.teks/", pos: "noun", uzbek: "prefrontal po'stloq (ongli fikrlash qismi)", definition: "The cerebral cortex covering the front part of the frontal lobe, involved in decision making", example: "Decision making exhausts the prefrontal cortex." },
        { word: "neuroplasticity", phonetic: "/ˌnjʊə.rəʊ.plæsˈtɪs.ə.ti/", pos: "noun", uzbek: "neyroplastiklik (miyaning qayta shakllanish xususiyati)", definition: "The brain's ability to reorganize itself by forming new neural connections", example: "Neuroplasticity allows old patterns to be replaced over time." }
      ],

      sentences: [
        { speaker: "Professor", text: "Welcome back, colleagues. Have you ever wondered why you can tie your shoes or drive to work without consciously thinking about every individual motion?" },
        { speaker: "Professor", text: "The answer lies in an evolutionary energy-saving mechanism known as 'chunking'. Our brains are constantly seeking ways to conserve mental effort." },
        { speaker: "Professor", text: "When you learn a new complex behavior, your prefrontal cortex—the center of conscious decision-making—is working at maximum capacity. But once the behavior is repeated sufficiently, activity shifts deep into a primitive structure called the basal ganglia." },
        { speaker: "Professor", text: "At MIT, researchers discovered that every habit consists of a neurological loop with three distinct components: first, the cue; second, the routine; and third, the reward." },
        { speaker: "Professor", text: "The cue is a trigger that tells your brain to go into automatic mode. The routine is the physical or emotional behavior itself. And the reward is what reinforces the behavior by releasing a burst of dopamine." },
        { speaker: "Professor", text: "Crucially, recent brain imaging proves that you cannot simply eradicate an ingrained habit; rather, you must utilize the 'Golden Rule of Habit Change'. That means keeping the exact same cue and reward, but substituting the middle component—the routine." },
        { speaker: "Professor", text: "Over a period of twenty-one to sixty-six days of consistent repetition, neuroplasticity forms new synaptic pathways, cementing the modified routine as your new default state." }
      ],

      questions: [
        {
          id: "adv2-q1",
          type: "multiple_choice",
          prompt: "Which brain structure is responsible for storing automated routine habits?",
          options: [
            { key: "A", text: "The prefrontal cortex" },
            { key: "B", text: "The basal ganglia" },
            { key: "C", text: "The visual cortex" }
          ],
          correctAnswer: "B",
          explanation: "Ongli qaror qabul qilish prefrontal korteksda bo'lsa-da (tuzoq!), avtomatlashgan odatlar chuqur joylashgan 'basal ganglia'da saqlanadi.",
          scriptEvidence: "once the behavior is repeated sufficiently, activity shifts deep into a primitive structure called the basal ganglia."
        },
        {
          id: "adv2-q2",
          type: "blank",
          prompt: "The three parts of the habit loop are the cue, the routine, and the ____________.",
          instruction: "Write ONE WORD only.",
          correctAnswer: ["reward"],
          explanation: "Odatlar zanjiri uch qismdan iborat: cue (turtki), routine (xatti-harakat) va reward (mukofot).",
          scriptEvidence: "three distinct components: first, the cue; second, the routine; and third, the reward."
        },
        {
          id: "adv2-q3",
          type: "blank",
          prompt: "The neurotransmitter released during the reward phase is ____________.",
          instruction: "Write ONE WORD only.",
          correctAnswer: ["dopamine"],
          explanation: "Matnda aytiladi: 'reinforces the behavior by releasing a burst of dopamine'.",
          scriptEvidence: "And the reward is what reinforces the behavior by releasing a burst of dopamine."
        },
        {
          id: "adv2-q4",
          type: "multiple_choice",
          prompt: "According to the 'Golden Rule of Habit Change', which component should you alter to change a habit?",
          options: [
            { key: "A", text: "The cue" },
            { key: "B", text: "The reward" },
            { key: "C", text: "The routine" }
          ],
          correctAnswer: "C",
          explanation: "Odatni o'zgartirish qoidasiga ko'ra, turtki (cue) va mukofot (reward) bir xil qoldirilib, faqat o'rtadagi harakat (routine) almashtiriladi.",
          scriptEvidence: "keeping the exact same cue and reward, but substituting the middle component—the routine."
        }
      ]
    }
  ]
};

// Agar Node.js muhitida ishlatilsa eksport qilish
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LISTENING_DATA };
}
