/**
 * 20 Beginner (A1-A2) Lessons Generator
 */

const beginnerLessons = [
  // 1. Library Membership
  {
    id: "beg-1",
    level: "beginner",
    title: "Kutubxonaga a'zo bo'lish (Library Membership)",
    topic: "Shaxsiy ma'lumotlar, ism-familiya va raqamlar",
    accent: "en-GB (Britaniya)",
    voiceGender: "female",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Talaba shahar kutubxonasiga tashrif buyurib, a'zolik kartasini rasmiylashtirmoqda. Ismlar va telefon raqamlariga e'tibor bering.",
    vocabulary: [
      { word: "membership", phonetic: "/ˈmem.bə.ʃɪp/", pos: "noun", uzbek: "a'zolik", definition: "The state of belonging to an organization", example: "Library membership is free for students." },
      { word: "valid", phonetic: "/ˈvæl.ɪd/", pos: "adjective", uzbek: "amal qiluvchi, yaroqli", definition: "Legally acceptable or usable", example: "You need a valid passport or ID card." },
      { word: "borrow", phonetic: "/ˈbɒr.əʊ/", pos: "verb", uzbek: "vaqtincha olmoq", definition: "To take and use something with the intention of returning it", example: "You can borrow up to six books." },
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
        explanation: "Kutubxonachi talabaga aniq aytadi: 'you can borrow a maximum of six books at one time'.",
        scriptEvidence: "you can borrow a maximum of six books at one time for up to three weeks."
      }
    ]
  },

  // 2. Ordering at a Cafe
  {
    id: "beg-2",
    level: "beginner",
    title: "Kafeda nonushta buyurtma berish (Ordering at a Café)",
    topic: "Taomlar, ichimliklar va narxlar",
    accent: "en-US (Amerika)",
    voiceGender: "male",
    audioSpeedDefault: 0.95,
    duration: "2 min",
    description: "Mijoz mahalliy qahvaxonaga kirib, nonushta uchun ichimlik va yegulik tanlamoqda.",
    vocabulary: [
      { word: "cappuccino", phonetic: "/ˌkæp.əˈtʃiː.nəʊ/", pos: "noun", uzbek: "kapuchino qahvasi", definition: "Coffee made with espresso and hot steamed milk", example: "I will have a large cappuccino." },
      { word: "croissant", phonetic: "/ˈkrwɑː.sɒ̃/", pos: "noun", uzbek: "kruassan", definition: "A flaky, buttery, crescent-shaped roll", example: "Is the almond croissant fresh?" },
      { word: "receipt", phonetic: "/rɪˈsiːt/", pos: "noun", uzbek: "chek, kvitansiya", definition: "A paper proof of payment", example: "Would you like your receipt in the bag?" }
    ],
    sentences: [
      { speaker: "Barista", text: "Hi there! Welcome to Sunshine Bakery. What can I get started for you this morning?" },
      { speaker: "Customer", text: "Good morning! Can I please get a medium cappuccino to go?" },
      { speaker: "Barista", text: "Sure thing. Would you prefer regular cow's milk or oat milk?" },
      { speaker: "Customer", text: "Oat milk, please. And could you make it with extra foam?" },
      { speaker: "Barista", text: "No problem. Anything to eat with your coffee today? Our chocolate croissants just came fresh out of the oven." },
      { speaker: "Customer", text: "That sounds delicious! I will take one chocolate croissant as well." },
      { speaker: "Barista", text: "Great choice. So that is one medium oat cappuccino and one chocolate croissant. Your total comes to eight dollars and fifty cents." },
      { speaker: "Customer", text: "Here is a ten-dollar bill. Keep the change as a tip!" },
      { speaker: "Barista", text: "Thank you so much! Please wait by the counter, your drink will be ready in two minutes." }
    ],
    questions: [
      {
        id: "beg2-q1",
        type: "blank",
        prompt: "What type of milk did the customer choose?",
        instruction: "Write ONE WORD for the answer.",
        correctAnswer: ["oat", "Oat"],
        explanation: "Barista sut turini so'raganda, mijoz 'Oat milk, please' deb javob beradi.",
        scriptEvidence: "Oat milk, please. And could you make it with extra foam?"
      },
      {
        id: "beg2-q2",
        type: "blank",
        prompt: "What pastry did the customer order?",
        instruction: "Write ONE OR TWO WORDS for the answer.",
        correctAnswer: ["chocolate croissant", "croissant"],
        explanation: "Mijoz yangi pishgan shokoladli kruassandan bitta olishini aytadi: 'one chocolate croissant as well'.",
        scriptEvidence: "I will take one chocolate croissant as well."
      },
      {
        id: "beg2-q3",
        type: "multiple_choice",
        prompt: "What was the total cost of the order?",
        options: [
          { key: "A", text: "$8.50" },
          { key: "B", text: "$10.00" },
          { key: "C", text: "$12.50" }
        ],
        correctAnswer: "A",
        explanation: "Barista hisobni e'lon qiladi: 'Your total comes to eight dollars and fifty cents ($8.50)'. Mijoz esa $10 berib, qaytimni choychaqa sifatida qoldiradi.",
        scriptEvidence: "Your total comes to eight dollars and fifty cents."
      }
    ]
  },

  // 3. Buying a Train Ticket
  {
    id: "beg-3",
    level: "beginner",
    title: "Poyezd bekatida chipta sotib olish (Buying a Train Ticket)",
    topic: "Sayohat, vaqt va platforma ma'lumotlari",
    accent: "en-GB (Britaniya)",
    voiceGender: "male",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Yo'lovchi Manchester shahriga poyezd chiptasini xarid qilmoqda.",
    vocabulary: [
      { word: "platform", phonetic: "/ˈplæt.fɔːm/", pos: "noun", uzbek: "perron, platforma", definition: "A flat raised area where passengers get on trains", example: "The train departs from platform four." },
      { word: "return", phonetic: "/rɪˈtɜːn/", pos: "noun", uzbek: "qaytish chiptasi", definition: "A ticket for a journey to a place and back again", example: "A standard return ticket is cheaper." },
      { word: "direct", phonetic: "/daɪˈrekt/", pos: "adjective", uzbek: "to'g'ridan-to'g'ri", definition: "Without changing trains", example: "Is this a direct service?" }
    ],
    sentences: [
      { speaker: "Ticket Officer", text: "Next in line, please. Good morning! Where are you traveling today?" },
      { speaker: "Passenger", text: "Good morning. I need a ticket to Manchester, please." },
      { speaker: "Ticket Officer", text: "Single or return?" },
      { speaker: "Passenger", text: "A return ticket, please. I am coming back tomorrow evening." },
      { speaker: "Ticket Officer", text: "The next direct train departs at ten thirty from platform four." },
      { speaker: "Passenger", text: "How long does the journey take?" },
      { speaker: "Ticket Officer", text: "It takes exactly two hours and fifteen minutes." },
      { speaker: "Passenger", text: "How much is the return ticket?" },
      { speaker: "Ticket Officer", text: "That will be forty-two pounds, please." },
      { speaker: "Passenger", text: "Here is my contactless card. Thank you very much!" }
    ],
    questions: [
      {
        id: "beg3-q1",
        type: "blank",
        prompt: "The train departs from platform ____________.",
        instruction: "Write ONE WORD or NUMBER.",
        correctAnswer: ["4", "four", "Four"],
        explanation: "Chipta sotuvchi poyezd to'rtinchi platformadan jo'nashini aytadi: 'from platform four'.",
        scriptEvidence: "The next direct train departs at ten thirty from platform four."
      },
      {
        id: "beg3-q2",
        type: "multiple_choice",
        prompt: "How much does the return ticket cost?",
        options: [
          { key: "A", text: "£24" },
          { key: "B", text: "£42" },
          { key: "C", text: "£52" }
        ],
        correctAnswer: "B",
        explanation: "Bilet narxi 42 funt sterling ekanligi aytiladi: 'forty-two pounds, please'.",
        scriptEvidence: "That will be forty-two pounds, please."
      }
    ]
  },

  // 4. Hotel Room Reservation
  {
    id: "beg-4",
    level: "beginner",
    title: "Mehmonxonada xona band qilish (Hotel Room Reservation)",
    topic: "Turar joy, kunlar soni va nonushta",
    accent: "en-US (Amerika)",
    voiceGender: "female",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Mehmonxona ma'muri va mehmon o'rtasidagi suhbat.",
    vocabulary: [
      { word: "reservation", phonetic: "/ˌrez.əˈveɪ.ʃən/", pos: "noun", uzbek: "bron qilish", definition: "An arrangement to have a room held", example: "I have a reservation under the name Smith." },
      { word: "included", phonetic: "/ɪnˈkluː.dɪd/", pos: "adjective", uzbek: "ichiga kiritilgan", definition: "Contained as part of a whole", example: "Breakfast is included in the price." },
      { word: "keycard", phonetic: "/ˈkiː.kɑːd/", pos: "noun", uzbek: "elektron kalit karta", definition: "A plastic card used to open a hotel door", example: "Keep your keycard in your wallet." }
    ],
    sentences: [
      { speaker: "Receptionist", text: "Good evening, welcome to Grand Palace Hotel. Do you have a reservation?" },
      { speaker: "Guest", text: "Yes, I booked a double room online under the name David Miller." },
      { speaker: "Receptionist", text: "Let me check our system. Yes, Mr. Miller, a double room for three nights." },
      { speaker: "Guest", text: "That is correct. Is breakfast included in the room rate?" },
      { speaker: "Receptionist", text: "Yes, complimentary buffet breakfast is served from seven to ten every morning on the second floor." },
      { speaker: "Guest", text: "Perfect. What is the password for the Wi-Fi?" },
      { speaker: "Receptionist", text: "The network is GrandGuest, and the password is on your keycard envelope. You are in room 405 on the fourth floor." },
      { speaker: "Guest", text: "Thank you for your help!" }
    ],
    questions: [
      {
        id: "beg4-q1",
        type: "blank",
        prompt: "The guest booked a room for ____________ nights.",
        instruction: "Write ONE NUMBER or WORD.",
        correctAnswer: ["3", "three", "Three"],
        explanation: "Ma'mur 'for three nights' deb tasdiqlaydi.",
        scriptEvidence: "Yes, Mr. Miller, a double room for three nights."
      },
      {
        id: "beg4-q2",
        type: "blank",
        prompt: "The room number is ____________.",
        instruction: "Write THE ROOM NUMBER.",
        correctAnswer: ["405"],
        explanation: "Ma'mur 'You are in room 405 on the fourth floor' deb aytadi.",
        scriptEvidence: "You are in room 405 on the fourth floor."
      }
    ]
  },

  // 5. Shopping for Clothes
  {
    id: "beg-5",
    level: "beginner",
    title: "Kiyim do'konida xarid (Shopping for Clothes)",
    topic: "O'lchamlar, ranglar va narxlar",
    accent: "en-GB (Britaniya)",
    voiceGender: "female",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Xaridor ko'ylak o'lchami va rangini tanlamoqda.",
    vocabulary: [
      { word: "fitting room", phonetic: "/ˈfɪt.ɪŋ ˌruːm/", pos: "noun", uzbek: "kiyib ko'rish xonasi", definition: "A room where customers can try on clothes", example: "The fitting rooms are at the back." },
      { word: "medium", phonetic: "/ˈmiː.di.əm/", pos: "noun", uzbek: "o'rtacha o'lcham", definition: "A middle size between small and large", example: "Do you have this in medium?" },
      { word: "discount", phonetic: "/ˈdɪs.kaʊnt/", pos: "noun", uzbek: "chegirma", definition: "A reduction in the usual price", example: "There is a twenty percent discount today." }
    ],
    sentences: [
      { speaker: "Shop Assistant", text: "Hello! Can I help you find anything today?" },
      { speaker: "Customer", text: "Yes, please. I like this blue cotton shirt, but I need it in a size medium." },
      { speaker: "Shop Assistant", text: "Let me check the rack. Yes, here is a medium in navy blue." },
      { speaker: "Customer", text: "Where are the fitting rooms so I can try it on?" },
      { speaker: "Shop Assistant", text: "The fitting rooms are straight ahead, right next to the mirrors." },
      { speaker: "Customer", text: "It fits very well! How much does it cost?" },
      { speaker: "Shop Assistant", text: "It is originally thirty pounds, but today we have a five-pound discount, so it is twenty-five pounds." },
      { speaker: "Customer", text: "Wonderful, I will take it." }
    ],
    questions: [
      {
        id: "beg5-q1",
        type: "blank",
        prompt: "The discounted price of the shirt is ____________ pounds.",
        instruction: "Write ONE NUMBER.",
        correctAnswer: ["25", "twenty-five"],
        explanation: "Asl narxi 30 funt bo'lib, 5 funt chegirma bilan 25 funt bo'ladi.",
        scriptEvidence: "so it is twenty-five pounds."
      },
      {
        id: "beg5-q2",
        type: "multiple_choice",
        prompt: "What size did the customer ask for?",
        options: [
          { key: "A", text: "Small" },
          { key: "B", text: "Medium" },
          { key: "C", text: "Large" }
        ],
        correctAnswer: "B",
        explanation: "Mijoz 'I need it in a size medium' deb aytadi.",
        scriptEvidence: "Yes, please. I like this blue cotton shirt, but I need it in a size medium."
      }
    ]
  },

  // 6. Doctor's Appointment Booking
  {
    id: "beg-6",
    level: "beginner",
    title: "Shifokor qabuliga yozilish (Doctor's Appointment)",
    topic: "Salomatlik va vaqtni kelishish",
    accent: "en-GB (Britaniya)",
    voiceGender: "female",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Klinika qabulxonasida navbatga yozilish jarayoni.",
    vocabulary: [
      { word: "appointment", phonetic: "/əˈpɔɪnt.mənt/", pos: "noun", uzbek: "qabul vaqti", definition: "An arranged time to see a professional", example: "I have an appointment at three o'clock." },
      { word: "symptoms", phonetic: "/ˈsɪmp.təmz/", pos: "noun", uzbek: "belgilar, alomatlar", definition: "Signs of illness", example: "What symptoms are you experiencing?" },
      { word: "prescribe", phonetic: "/prɪˈskraɪb/", pos: "verb", uzbek: "dori yozib bermoq", definition: "To authorize medicine in writing", example: "The doctor will prescribe antibiotics." }
    ],
    sentences: [
      { speaker: "Receptionist", text: "Good morning, West End Health Clinic. How can I help you?" },
      { speaker: "Patient", text: "Hello. I would like to schedule an appointment with Dr. Watson, please." },
      { speaker: "Receptionist", text: "Are you an existing patient at our practice?" },
      { speaker: "Patient", text: "Yes, my date of birth is the fourteenth of March, 1995." },
      { speaker: "Receptionist", text: "Thank you. Dr. Watson has an opening tomorrow morning at nine fifteen, or on Thursday at two in the afternoon." },
      { speaker: "Patient", text: "Tomorrow morning at nine fifteen would be ideal, please." },
      { speaker: "Receptionist", text: "You are booked for Wednesday at 9:15 AM. Please arrive ten minutes early to fill out a health form." },
      { speaker: "Patient", text: "Thank you very much. See you tomorrow!" }
    ],
    questions: [
      {
        id: "beg6-q1",
        type: "blank",
        prompt: "The appointment is scheduled for ____________ AM.",
        instruction: "Write THE TIME.",
        correctAnswer: ["9:15", "9.15"],
        explanation: "Bemor ertaga ertalab soat 9:15 ga yoziladi.",
        scriptEvidence: "Tomorrow morning at nine fifteen would be ideal, please."
      },
      {
        id: "beg6-q2",
        type: "multiple_choice",
        prompt: "How many minutes early should the patient arrive?",
        options: [
          { key: "A", text: "5 minutes" },
          { key: "B", text: "10 minutes" },
          { key: "C", text: "20 minutes" }
        ],
        correctAnswer: "B",
        explanation: "Ma'mur 'Please arrive ten minutes early' deb aytadi.",
        scriptEvidence: "Please arrive ten minutes early to fill out a health form."
      }
    ]
  },

  // 7. Asking for Directions
  {
    id: "beg-7",
    level: "beginner",
    title: "Shaharda yo'l so'rash (Asking for Directions)",
    topic: "Yo'nalishlar, chorrahalar va diqqatga sazovor joylar",
    accent: "en-US (Amerika)",
    voiceGender: "male",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Sayyoh mahalliy aholidan muzeyga borish yo'lini so'ramoqda.",
    vocabulary: [
      { word: "intersection", phonetic: "/ˌɪn.təˈsek.ʃən/", pos: "noun", uzbek: "chorraha", definition: "A point where two or more roads cross", example: "Turn left at the next intersection." },
      { word: "blocks", phonetic: "/blɒks/", pos: "noun", uzbek: "kvartallar, oraliqlar", definition: "The area between adjacent streets", example: "Walk two blocks down Main Street." },
      { word: "opposite", phonetic: "/ˈɒp.ə.zɪt/", pos: "adjective", uzbek: "ro'parasida", definition: "Across from something", example: "The museum is opposite the post office." }
    ],
    sentences: [
      { speaker: "Tourist", text: "Excuse me! Could you please tell me how to get to the City History Museum?" },
      { speaker: "Local", text: "Sure! It is about a ten-minute walk from here. Walk straight down this avenue for two blocks." },
      { speaker: "Tourist", text: "Two blocks straight ahead, okay." },
      { speaker: "Local", text: "When you reach the traffic lights near the bank, turn right onto Pine Street." },
      { speaker: "Tourist", text: "Turn right at the traffic lights, got it." },
      { speaker: "Local", text: "Keep walking past the public library, and the museum will be directly on your left, opposite the city park." },
      { speaker: "Tourist", text: "Opposite the park on the left side. Thank you so much for your directions!" },
      { speaker: "Local", text: "You are very welcome. Enjoy your visit!" }
    ],
    questions: [
      {
        id: "beg7-q1",
        type: "blank",
        prompt: "The museum is opposite the city ____________.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["park", "Park"],
        explanation: "Muzey shahar bog'i (city park) ro'parasida joylashgan.",
        scriptEvidence: "opposite the city park."
      },
      {
        id: "beg7-q2",
        type: "multiple_choice",
        prompt: "How long does it take to walk to the museum?",
        options: [
          { key: "A", text: "5 minutes" },
          { key: "B", text: "10 minutes" },
          { key: "C", text: "25 minutes" }
        ],
        correctAnswer: "B",
        explanation: "Mahalliy odam: 'It is about a ten-minute walk from here' deydi.",
        scriptEvidence: "It is about a ten-minute walk from here."
      }
    ]
  },

  // 8. Airport Check-in
  {
    id: "beg-8",
    level: "beginner",
    title: "Aeroportda ro'yxatdan o'tish (Airport Check-in)",
    topic: "Parvoz, bagaj va o'rindiq tanlash",
    accent: "en-US (Amerika)",
    voiceGender: "female",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Yo'lovchi aeroport kassasida ro'yxatdan o'tib, yukini topshirmoqda.",
    vocabulary: [
      { word: "boarding pass", phonetic: "/ˈbɔː.dɪŋ ˌpɑːs/", pos: "noun", uzbek: "samolyotga chiqish taloni", definition: "A pass authorizing entry onto an aircraft", example: "Here is your boarding pass and receipt." },
      { word: "window seat", phonetic: "/ˈwɪn.dəʊ siːt/", pos: "noun", uzbek: "oyna yonidagi o'rindiq", definition: "A seat next to a window", example: "Would you prefer an aisle or window seat?" },
      { word: "luggage", phonetic: "/ˈlʌɡ.ɪdʒ/", pos: "noun", uzbek: "yuk, bagaj", definition: "Bags and suitcases for travel", example: "Please place your luggage on the scale." }
    ],
    sentences: [
      { speaker: "Agent", text: "Good afternoon. May I see your passport and flight booking confirmation?" },
      { speaker: "Traveler", text: "Here you go. I am flying to Chicago on flight AA420." },
      { speaker: "Agent", text: "Thank you. Do you have any bags to check in today?" },
      { speaker: "Traveler", text: "Yes, just this one large suitcase." },
      { speaker: "Agent", text: "Please place it on the scale... Twenty-one kilos, well within the limit. Would you prefer a window seat or an aisle seat?" },
      { speaker: "Traveler", text: "A window seat, please, if one is available." },
      { speaker: "Agent", text: "You are in seat 14A. Your flight boards at gate 22 starting at 3:30 PM. Have a pleasant flight!" },
      { speaker: "Traveler", text: "Thank you very much!" }
    ],
    questions: [
      {
        id: "beg8-q1",
        type: "blank",
        prompt: "The traveler's seat is ____________.",
        instruction: "Write THE SEAT NUMBER.",
        correctAnswer: ["14A", "14a"],
        explanation: "Agent o'rindiq raqami 14A ekanligini aytadi: 'You are in seat 14A'.",
        scriptEvidence: "You are in seat 14A."
      },
      {
        id: "beg8-q2",
        type: "blank",
        prompt: "The boarding gate is number ____________.",
        instruction: "Write THE NUMBER.",
        correctAnswer: ["22"],
        explanation: "Parvozga chiqish 22-darvozadan amalga oshiriladi: 'boards at gate 22'.",
        scriptEvidence: "Your flight boards at gate 22 starting at 3:30 PM."
      }
    ]
  },

  // 9. Meeting a New Classmate
  {
    id: "beg-9",
    level: "beginner",
    title: "Yangi kursdosh bilan tanishuv (Meeting a Classmate)",
    topic: "Tanishish, mutaxassislik va qiziqishlar",
    accent: "en-US (Amerika)",
    voiceGender: "male",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Universitetda ikki talaba birinchi darsdan oldin tanishmoqda.",
    vocabulary: [
      { word: "major", phonetic: "/ˈmeɪ.dʒər/", pos: "noun", uzbek: "asosiy mutaxassislik", definition: "A student's principal subject of study", example: "My major is computer science." },
      { word: "semester", phonetic: "/sɪˈmes.tər/", pos: "noun", uzbek: "semestr", definition: "A half-year term in school or university", example: "This is my second semester." },
      { word: "campus", phonetic: "/ˈkæm.pəs/", pos: "noun", uzbek: "universitet hududi", definition: "The grounds and buildings of a university", example: "I live near the north campus." }
    ],
    sentences: [
      { speaker: "Lucas", text: "Hi! Is anyone sitting here, or is this chair free?" },
      { speaker: "Sarah", text: "No, it is free. Go right ahead! My name is Sarah, by the way." },
      { speaker: "Lucas", text: "Nice to meet you, Sarah. I am Lucas. Are you also taking Introduction to Economics?" },
      { speaker: "Sarah", text: "Yes, it is required for my business management degree. What is your major?" },
      { speaker: "Lucas", text: "I am majoring in Computer Science, but I wanted to learn some basic finance this semester." },
      { speaker: "Sarah", text: "That is smart! Where are you from, Lucas?" },
      { speaker: "Lucas", text: "I am from Seattle originally, but I moved into a dormitory on campus last week." },
      { speaker: "Sarah", text: "Welcome to campus! We should study together before the midterm exams." }
    ],
    questions: [
      {
        id: "beg9-q1",
        type: "blank",
        prompt: "Lucas is majoring in Computer ____________.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["Science", "science"],
        explanation: "Lukas o'z mutaxassisligini aytadi: 'Computer Science'.",
        scriptEvidence: "I am majoring in Computer Science"
      },
      {
        id: "beg9-q2",
        type: "multiple_choice",
        prompt: "Where is Lucas from originally?",
        options: [
          { key: "A", text: "Chicago" },
          { key: "B", text: "Seattle" },
          { key: "C", text: "Boston" }
        ],
        correctAnswer: "B",
        explanation: "Lukas 'I am from Seattle originally' deb javob beradi.",
        scriptEvidence: "I am from Seattle originally, but I moved into a dormitory"
      }
    ]
  },

  // 10. Opening a Bank Account
  {
    id: "beg-10",
    level: "beginner",
    title: "Bank hisob raqami ochish (Opening a Bank Account)",
    topic: "Moliya, debet karta va shaxsni tasdiqlash",
    accent: "en-GB (Britaniya)",
    voiceGender: "female",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Mijoz yangi bankda hisob ochmoqda.",
    vocabulary: [
      { word: "debit card", phonetic: "/ˈdeb.ɪt kɑːd/", pos: "noun", uzbek: "debet karta", definition: "A card allowing electronic withdrawal of funds", example: "Your debit card will arrive by post." },
      { word: "deposit", phonetic: "/dɪˈpɒz.ɪt/", pos: "noun", uzbek: "dastlabki badal", definition: "A sum of money placed into a bank account", example: "An initial deposit of twenty pounds is required." },
      { word: "statement", phonetic: "/ˈsteɪt.mənt/", pos: "noun", uzbek: "bank ko'chirmasi", definition: "A record of transactions", example: "Monthly statements are sent by email." }
    ],
    sentences: [
      { speaker: "Bank Manager", text: "Good morning. How can Barclays Bank help you today?" },
      { speaker: "Customer", text: "Good morning. I recently moved to the UK and need to open a current account." },
      { speaker: "Bank Manager", text: "Certainly. Do you have your passport and a proof of address with you?" },
      { speaker: "Customer", text: "Yes, I brought my passport and my official apartment rental contract." },
      { speaker: "Bank Manager", text: "Excellent, that is everything we need. With our standard current account, online banking is free." },
      { speaker: "Customer", text: "When will I receive my debit card?" },
      { speaker: "Bank Manager", text: "It will be mailed to your address within five working days, along with your secure PIN." },
      { speaker: "Customer", text: "That is very fast. Thank you for setting this up!" }
    ],
    questions: [
      {
        id: "beg10-q1",
        type: "blank",
        prompt: "The debit card will arrive within ____________ working days.",
        instruction: "Write ONE NUMBER or WORD.",
        correctAnswer: ["5", "five", "Five"],
        explanation: "Bank xodimi karta 5 ish kuni ichida yetib kelishini aytadi: 'within five working days'.",
        scriptEvidence: "It will be mailed to your address within five working days"
      },
      {
        id: "beg10-q2",
        type: "multiple_choice",
        prompt: "What document did the customer use as proof of address?",
        options: [
          { key: "A", text: "A utility bill" },
          { key: "B", text: "A rental contract" },
          { key: "C", text: "A student card" }
        ],
        correctAnswer: "B",
        explanation: "Mijoz ijara shartnomasini taqdim etganini aytadi: 'my official apartment rental contract'.",
        scriptEvidence: "I brought my passport and my official apartment rental contract."
      }
    ]
  },

  // 11. Paying Restaurant Bill
  {
    id: "beg-11",
    level: "beginner",
    title: "Restoranda hisob-kitob qilish (Paying the Bill)",
    topic: "Restoran, hisob-kitob va bo'lib to'lash",
    accent: "en-US (Amerika)",
    voiceGender: "male",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Kechki ovqatdan so'ng hisobni to'lash va bo'lish jarayoni.",
    vocabulary: [
      { word: "split", phonetic: "/splɪt/", pos: "verb", uzbek: "teng bo'lmoq", definition: "To divide into two or more parts", example: "Can we split the bill equally?" },
      { word: "tip", phonetic: "/tɪp/", pos: "noun", uzbek: "choychaqa", definition: "Extra money given for good service", example: "We left a fifteen percent tip." }
    ],
    sentences: [
      { speaker: "Waiter", text: "Did you enjoy your pasta and dessert tonight?" },
      { speaker: "Diner", text: "Everything was wonderful, thank you! Could we please have the bill?" },
      { speaker: "Waiter", text: "Of course, here it is in the leather folder." },
      { speaker: "Diner", text: "Is service included, or can we add a tip on the card terminal?" },
      { speaker: "Waiter", text: "Service is not included, but you can add whatever tip you like on the card machine." },
      { speaker: "Diner", text: "Could we split the bill equally between two cards?" },
      { speaker: "Waiter", text: "Absolutely. The total is sixty dollars, so that will be thirty dollars per person." }
    ],
    questions: [
      {
        id: "beg11-q1",
        type: "blank",
        prompt: "Each person paid ____________ dollars.",
        instruction: "Write THE NUMBER.",
        correctAnswer: ["30", "thirty"],
        explanation: "Hisob teng bo'linganda har bir kishiga 30 dollar tushadi.",
        scriptEvidence: "so that will be thirty dollars per person."
      },
      {
        id: "beg11-q2",
        type: "multiple_choice",
        prompt: "Is service included in the bill?",
        options: [
          { key: "A", text: "Yes, fully included" },
          { key: "B", text: "No, service is not included" }
        ],
        correctAnswer: "B",
        explanation: "Ofitsiant 'Service is not included' deb aniq aytadi.",
        scriptEvidence: "Service is not included, but you can add whatever tip you like"
      }
    ]
  },

  // 12. Booking Cinema Tickets
  {
    id: "beg-12",
    level: "beginner",
    title: "Kinoteatrda chipta tanlash (Booking Cinema Tickets)",
    topic: "Filmlar, qatorlar va vaqtlar",
    accent: "en-GB (Britaniya)",
    voiceGender: "female",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Kassada kechki seansga chipta xarid qilish.",
    vocabulary: [
      { word: "row", phonetic: "/rəʊ/", pos: "noun", uzbek: "qator", definition: "A line of seats", example: "We have two seats in row F." },
      { word: "screen", phonetic: "/skriːn/", pos: "noun", uzbek: "katta ekran, zal", definition: "The surface on which films are projected", example: "The movie is in screen number three." }
    ],
    sentences: [
      { speaker: "Cashier", text: "Good evening. Welcome to Odeon Cinema. What film would you like to see?" },
      { speaker: "Customer", text: "Two adult tickets for the new space adventure movie at seven thirty, please." },
      { speaker: "Cashier", text: "Screen two has seats left in row G in the middle. Is that okay for you?" },
      { speaker: "Customer", text: "Yes, row G in the center is perfect." },
      { speaker: "Cashier", text: "That is eighteen pounds in total for two adult tickets." }
    ],
    questions: [
      {
        id: "beg12-q1",
        type: "blank",
        prompt: "The seats are in row ____________.",
        instruction: "Write ONE LETTER.",
        correctAnswer: ["G", "g"],
        explanation: "O'rindiqlar G qatorining markazida joylashgan.",
        scriptEvidence: "Screen two has seats left in row G in the middle."
      },
      {
        id: "beg12-q2",
        type: "blank",
        prompt: "The total price for two tickets is ____________ pounds.",
        instruction: "Write THE NUMBER.",
        correctAnswer: ["18", "eighteen"],
        explanation: "Ikkita chipta uchun jami 18 funt to'lanadi.",
        scriptEvidence: "That is eighteen pounds in total for two adult tickets."
      }
    ]
  },

  // 13. Joining a Fitness Gym
  {
    id: "beg-13",
    level: "beginner",
    title: "Sport zaliga a'zo bo'lish (Joining a Gym)",
    topic: "Sport, oylik to'lov va qoidalar",
    accent: "en-US (Amerika)",
    voiceGender: "male",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Yangi mijoz fitnes klubining a'zolik shartlari bilan tanishmoqda.",
    vocabulary: [
      { word: "locker", phonetic: "/ˈlɒk.ər/", pos: "noun", uzbek: "shkafcha", definition: "A small lockable storage cabinet", example: "Lockers are free to use with your card." },
      { word: "trainer", phonetic: "/ˈtreɪ.nər/", pos: "noun", uzbek: "murabbiy", definition: "A person who teaches athletic skills", example: "A personal trainer will show you around." }
    ],
    sentences: [
      { speaker: "Manager", text: "Welcome to Apex Fitness! Are you interested in our monthly gym membership?" },
      { speaker: "Client", text: "Yes, I would like to know the monthly fee and your opening hours." },
      { speaker: "Manager", text: "We are open twenty-four hours a day, seven days a week. The monthly fee is thirty-five dollars." },
      { speaker: "Client", text: "Does that include access to the swimming pool?" },
      { speaker: "Manager", text: "Yes, both the gym floor and the heated pool are included." }
    ],
    questions: [
      {
        id: "beg13-q1",
        type: "blank",
        prompt: "The monthly membership fee is ____________ dollars.",
        instruction: "Write ONE NUMBER.",
        correctAnswer: ["35", "thirty-five"],
        explanation: "Oylik to'lov 35 dollar ekanligi aytiladi.",
        scriptEvidence: "The monthly fee is thirty-five dollars."
      },
      {
        id: "beg13-q2",
        type: "multiple_choice",
        prompt: "Is pool access included in the membership?",
        options: [
          { key: "A", text: "Yes, it is included" },
          { key: "B", text: "No, it costs extra" }
        ],
        correctAnswer: "A",
        explanation: "Menejer basseyn a'zolikka kiritilganini aytadi: 'both the gym floor and the heated pool are included'.",
        scriptEvidence: "Yes, both the gym floor and the heated pool are included."
      }
    ]
  },

  // 14. Lost Property Office
  {
    id: "beg-14",
    level: "beginner",
    title: "Yo'qolgan buyumlar bo'limi (Lost Property)",
    topic: "Ranglar, shakllar va yo'qotilgan buyum",
    accent: "en-GB (Britaniya)",
    voiceGender: "female",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Yo'lovchi avtobusda unutib qoldirgan sumkasini qidirmoqda.",
    vocabulary: [
      { word: "backpack", phonetic: "/ˈbæk.pæk/", pos: "noun", uzbek: "ryukzak, orqa xalta", definition: "A bag carried on the back", example: "I left my black backpack on the bus." },
      { word: "leather", phonetic: "/ˈleð.ər/", pos: "noun", uzbek: "charm", definition: "Material made from animal skin", example: "It has a brown leather handle." }
    ],
    sentences: [
      { speaker: "Officer", text: "Central Transit Lost Property. What did you lose?" },
      { speaker: "Commuter", text: "I left my black leather backpack on the number 12 bus this morning." },
      { speaker: "Officer", text: "Can you describe what was inside it?" },
      { speaker: "Commuter", text: "Inside there is a silver laptop and a blue water bottle." },
      { speaker: "Officer", text: "Yes, the driver handed it in twenty minutes ago! Please sign here to collect it." }
    ],
    questions: [
      {
        id: "beg14-q1",
        type: "blank",
        prompt: "The backpack was left on bus number ____________.",
        instruction: "Write THE NUMBER.",
        correctAnswer: ["12"],
        explanation: "Yo'lovchi sumkasini 12-raqamli avtobusda qoldirgan.",
        scriptEvidence: "on the number 12 bus this morning."
      },
      {
        id: "beg14-q2",
        type: "blank",
        prompt: "Inside the backpack, there was a silver ____________.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["laptop", "Laptop"],
        explanation: "Ryukzak ichida kumushrang noutbuk (laptop) bo'lgan.",
        scriptEvidence: "Inside there is a silver laptop and a blue water bottle."
      }
    ]
  },

  // 15. Taking a Taxi to the Station
  {
    id: "beg-15",
    level: "beginner",
    title: "Taksi chaqirish va manzil (Taking a Taxi)",
    topic: "Yo'l haqi, vaqt va tezlik",
    accent: "en-US (Amerika)",
    voiceGender: "male",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Poyezdga shoshilayotgan yo'lovchi taksiga o'tirmoqda.",
    vocabulary: [
      { word: "meter", phonetic: "/ˈmiː.tər/", pos: "noun", uzbek: "hisoblagich", definition: "Device that records distance and fare", example: "Please turn on the taxi meter." },
      { word: "trunk", phonetic: "/trʌŋk/", pos: "noun", uzbek: "mashina yukxonasi (bagaj)", definition: "Car luggage compartment", example: "Can we put the bag in the trunk?" }
    ],
    sentences: [
      { speaker: "Driver", text: "Hello! Where are you headed today?" },
      { speaker: "Passenger", text: "To the Central Railway Station, please. My train leaves in twenty-five minutes." },
      { speaker: "Driver", text: "No worries, traffic is light today. It will take only ten minutes to get there." },
      { speaker: "Passenger", text: "That is a big relief. Can I pay with credit card at the end?" },
      { speaker: "Driver", text: "Yes, cards and cash are both accepted." }
    ],
    questions: [
      {
        id: "beg15-q1",
        type: "blank",
        prompt: "The drive to the station will take ____________ minutes.",
        instruction: "Write ONE NUMBER or WORD.",
        correctAnswer: ["10", "ten", "Ten"],
        explanation: "Haydovchi yo'l bor-yo'g'i 10 daqiqa vaqt olishini aytadi.",
        scriptEvidence: "It will take only ten minutes to get there."
      },
      {
        id: "beg15-q2",
        type: "blank",
        prompt: "The passenger's destination is the Central Railway ____________.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["Station", "station"],
        explanation: "Manzil: Markaziy temir yo'l vokzali (Central Railway Station).",
        scriptEvidence: "To the Central Railway Station, please."
      }
    ]
  },

  // 16. Returning an Item at a Store
  {
    id: "beg-16",
    level: "beginner",
    title: "Do'konda mahsulotni qaytarish (Returning an Item)",
    topic: "Kvitansiya, pulni qaytarish va nuqson",
    accent: "en-GB (Britaniya)",
    voiceGender: "female",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Xaridor nuqsonli soatni qaytarib, pulini qaytarib olmoqda.",
    vocabulary: [
      { word: "refund", phonetic: "/ˈriː.fʌnd/", pos: "noun", uzbek: "pulni qaytarish", definition: "A repayment of money", example: "Would you like an exchange or a full refund?" },
      { word: "faulty", phonetic: "/ˈfɒl.ti/", pos: "adjective", uzbek: "buzilgan, nuqsonli", definition: "Not working correctly", example: "The battery compartment is faulty." }
    ],
    sentences: [
      { speaker: "Customer Service", text: "Hello. How may I assist you with your return?" },
      { speaker: "Shopper", text: "I bought this wireless alarm clock yesterday, but the display is faulty." },
      { speaker: "Customer Service", text: "I am sorry to hear that. Do you have your purchase receipt?" },
      { speaker: "Shopper", text: "Yes, here is the paper receipt from yesterday afternoon." },
      { speaker: "Customer Service", text: "Thank you. I have processed a full refund to your payment card." }
    ],
    questions: [
      {
        id: "beg16-q1",
        type: "blank",
        prompt: "The customer returned a faulty wireless ____________.",
        instruction: "Write ONE OR TWO WORDS.",
        correctAnswer: ["alarm clock", "clock"],
        explanation: "Mijoz nosoz uyg'otgich soatni (alarm clock) qaytaradi.",
        scriptEvidence: "I bought this wireless alarm clock yesterday, but the display is faulty."
      },
      {
        id: "beg16-q2",
        type: "multiple_choice",
        prompt: "How will the refund be issued?",
        options: [
          { key: "A", text: "In cash" },
          { key: "B", text: "To the payment card" }
        ],
        correctAnswer: "B",
        explanation: "Xizmat xodimi pul to'lov kartasiga qaytarilganini tasdiqlaydi.",
        scriptEvidence: "processed a full refund to your payment card."
      }
    ]
  },

  // 17. Weekend Weather Forecast
  {
    id: "beg-17",
    level: "beginner",
    title: "Dam olish kuni ob-havo ma'lumoti (Weather Forecast)",
    topic: "Harorat, quyosh va yomg'ir ehtimoli",
    accent: "en-US (Amerika)",
    voiceGender: "male",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Shanba va yakshanba kunlari uchun ob-havo bashorati.",
    vocabulary: [
      { word: "sunny", phonetic: "/ˈsʌn.i/", pos: "adjective", uzbek: "quyoshli", definition: "Bright with sunlight", example: "Saturday will be warm and sunny." },
      { word: "degrees", phonetic: "/dɪˈɡriːz/", pos: "noun", uzbek: "daraja (harorat)", definition: "Unit of temperature measurement", example: "The temperature will reach twenty degrees." }
    ],
    sentences: [
      { speaker: "Presenter", text: "And now for your local weekend weather outlook." },
      { speaker: "Presenter", text: "Saturday will bring bright blue skies and plenty of sunshine across the entire valley." },
      { speaker: "Presenter", text: "Afternoon temperatures will reach a pleasant twenty-two degrees Celsius." },
      { speaker: "Presenter", text: "However, Sunday afternoon will see cloud cover increase with light showers starting around five PM." }
    ],
    questions: [
      {
        id: "beg17-q1",
        type: "blank",
        prompt: "Saturday's high temperature will be ____________ degrees.",
        instruction: "Write THE NUMBER.",
        correctAnswer: ["22", "twenty-two"],
        explanation: "Shanba kungi harorat 22 darajaga yetishi aytiladi.",
        scriptEvidence: "reach a pleasant twenty-two degrees Celsius."
      },
      {
        id: "beg17-q2",
        type: "blank",
        prompt: "Sunday showers are expected to start around ____________ PM.",
        instruction: "Write ONE NUMBER or WORD.",
        correctAnswer: ["5", "five", "Five"],
        explanation: "Yakshanba kungi yomg'ir soat 5 larda boshlanadi.",
        scriptEvidence: "light showers starting around five PM."
      }
    ]
  },

  // 18. Visiting a Pet Store
  {
    id: "beg-18",
    level: "beginner",
    title: "Uy hayvonlari do'konida (Visiting a Pet Store)",
    topic: "Kuchukchalar, ozuqa va parvarish",
    accent: "en-GB (Britaniya)",
    voiceGender: "female",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Mijoz yangi kuchukcha uchun ozuqa va o'yinchoq tanlamoqda.",
    vocabulary: [
      { word: "puppy", phonetic: "/ˈpʌp.i/", pos: "noun", uzbek: "kuchukcha", definition: "A young dog", example: "We adopted a friendly golden puppy." },
      { word: "collar", phonetic: "/ˈkɒl.ər/", pos: "noun", uzbek: "bo'yinbog'", definition: "A band worn around an animal's neck", example: "Choose a soft nylon collar." }
    ],
    sentences: [
      { speaker: "Clerk", text: "Welcome to Happy Paws! Can I help you with your pet supplies?" },
      { speaker: "Owner", text: "Yes, I just adopted a two-month-old golden retriever puppy." },
      { speaker: "Clerk", text: "Congratulations! You will need our puppy starter food, which is rich in vitamins." },
      { speaker: "Owner", text: "I also need a sturdy leash and a red collar." },
      { speaker: "Clerk", text: "All puppy collars and leashes are right here on aisle three." }
    ],
    questions: [
      {
        id: "beg18-q1",
        type: "blank",
        prompt: "The puppy is ____________ months old.",
        instruction: "Write ONE NUMBER or WORD.",
        correctAnswer: ["2", "two", "Two"],
        explanation: "Kuchukcha 2 oylik ekanligi aytiladi.",
        scriptEvidence: "I just adopted a two-month-old golden retriever puppy."
      },
      {
        id: "beg18-q2",
        type: "blank",
        prompt: "Collars and leashes are located on aisle ____________.",
        instruction: "Write ONE NUMBER or WORD.",
        correctAnswer: ["3", "three", "Three"],
        explanation: "Bo'yinbog'lar uchinchi qatorda (aisle three) joylashgan.",
        scriptEvidence: "right here on aisle three."
      }
    ]
  },

  // 19. Sending a Parcel at the Post Office
  {
    id: "beg-19",
    level: "beginner",
    title: "Pochtadan posilka jo'natish (At the Post Office)",
    topic: "Og'irlik, manzil va jo'natish xizmatlari",
    accent: "en-GB (Britaniya)",
    voiceGender: "male",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Germaniyaga posilka yuborish uchun pochta xizmatiga murojaat.",
    vocabulary: [
      { word: "parcel", phonetic: "/ˈpɑː.səl/", pos: "noun", uzbek: "posilka, tugun", definition: "A package wrapped for delivery", example: "This parcel contains books." },
      { word: "express", phonetic: "/ɪkˈspres/", pos: "adjective", uzbek: "tezkor", definition: "Fast delivery service", example: "Express delivery takes two days." }
    ],
    sentences: [
      { speaker: "Postal Worker", text: "Hello! Place your box on the scale, please. Where is it going?" },
      { speaker: "Sender", text: "It is going to Berlin, Germany." },
      { speaker: "Postal Worker", text: "It weighs one point five kilograms. Standard delivery takes five days and costs twelve pounds." },
      { speaker: "Sender", text: "Standard delivery is fine, thank you." },
      { speaker: "Postal Worker", text: "Please write your return address in the top corner of the box." }
    ],
    questions: [
      {
        id: "beg19-q1",
        type: "blank",
        prompt: "The destination city of the parcel is ____________.",
        instruction: "Write THE CITY NAME.",
        correctAnswer: ["Berlin", "berlin"],
        explanation: "Posilka Germaniyaning Berlin shahriga jo'natilmoqda.",
        scriptEvidence: "It is going to Berlin, Germany."
      },
      {
        id: "beg19-q2",
        type: "blank",
        prompt: "Standard delivery costs ____________ pounds.",
        instruction: "Write THE NUMBER.",
        correctAnswer: ["12", "twelve"],
        explanation: "Standart yetkazib berish narxi 12 funt sterling.",
        scriptEvidence: "and costs twelve pounds."
      }
    ]
  },

  // 20. Inviting a Friend to a Birthday Party
  {
    id: "beg-20",
    level: "beginner",
    title: "Tug'ilgan kunga taklif qilish (Birthday Invitation)",
    topic: "Bayram, sana va sovg'a masalasi",
    accent: "en-US (Amerika)",
    voiceGender: "female",
    audioSpeedDefault: 0.9,
    duration: "2 min",
    description: "Do'stlar shanba oqshomidagi bayram rejalarini muhokama qilmoqda.",
    vocabulary: [
      { word: "celebrate", phonetic: "/ˈsel.ə.breɪt/", pos: "verb", uzbek: "nishonlamoq", definition: "To observe an event with social festivities", example: "We will celebrate on Saturday night." },
      { word: "invitation", phonetic: "/ˌɪn.vɪˈteɪ.ʃən/", pos: "noun", uzbek: "taklifnoma", definition: "A written or spoken request to attend", example: "Thank you for the warm invitation." }
    ],
    sentences: [
      { speaker: "Emma", text: "Hey Daniel! Are you free this coming Saturday evening?" },
      { speaker: "Daniel", text: "Hi Emma! Yes, I do not have any plans yet. What is happening?" },
      { speaker: "Emma", text: "It is my twenty-first birthday, and I am hosting a barbecue party in my garden." },
      { speaker: "Daniel", text: "Happy early birthday! What time does the party start?" },
      { speaker: "Emma", text: "Guests will start arriving around six PM. Please do not bring any gifts, just bring your good mood!" },
      { speaker: "Daniel", text: "I will definitely be there at six. See you on Saturday!" }
    ],
    questions: [
      {
        id: "beg20-q1",
        type: "blank",
        prompt: "The birthday party starts at ____________ PM.",
        instruction: "Write ONE NUMBER or WORD.",
        correctAnswer: ["6", "six", "Six"],
        explanation: "Bayram kechki soat oltida (6 PM) boshlanishi aytiladi.",
        scriptEvidence: "Guests will start arriving around six PM."
      },
      {
        id: "beg20-q2",
        type: "blank",
        prompt: "Emma is celebrating her ____________-first birthday.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["twenty", "21"],
        explanation: "Emma 21 yoshini nishonlamoqda: 'twenty-first birthday'.",
        scriptEvidence: "It is my twenty-first birthday"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { beginnerLessons };
}
