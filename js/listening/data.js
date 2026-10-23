/**
 * Listening Master - Comprehensive Learning Database
 * 60 Extensive Lessons: 20 Beginner (A1-A2), 20 Intermediate (B1-B2), 20 Advanced (C1)
 * Natural scripts, vocabulary with Uzbek translations, interactive comprehension tests & distractors.
 */

const LISTENING_DATA = {
  levels: [
  {
    "id": "beginner",
    "name": "Boshlang'ich (A1-A2)",
    "badge": "Beginner",
    "badgeClass": "badge-beginner",
    "description": "Kundalik sodda muloqotlar, aniq talaffuz, ismlar, raqamlar va orfografiya."
  },
  {
    "id": "intermediate",
    "name": "O'rta (B1-B2 / CEFR)",
    "badge": "Intermediate",
    "badgeClass": "badge-intermediate",
    "description": "Sayohat, ish, xaridlar, chalg'ituvchi variantlar (distractors) va parafraza."
  },
  {
    "id": "advanced",
    "name": "Yuqori (C1 / IELTS Part 3-4)",
    "badge": "Advanced",
    "badgeClass": "badge-advanced",
    "description": "Ilmiy ma'ruzalar, akademik taqdimotlar, tezkor nutq va murakkab tahlillar."
  }
],

  lessons: [
  {
    "id": "beg-1",
    "level": "beginner",
    "title": "Kutubxonaga a'zo bo'lish (Library Membership)",
    "topic": "Shaxsiy ma'lumotlar, ism-familiya va raqamlar",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Talaba shahar kutubxonasiga tashrif buyurib, a'zolik kartasini rasmiylashtirmoqda. Ismlar va telefon raqamlariga e'tibor bering.",
    "vocabulary": [
      {
        "word": "membership",
        "phonetic": "/ˈmem.bə.ʃɪp/",
        "pos": "noun",
        "uzbek": "a'zolik",
        "definition": "The state of belonging to an organization",
        "example": "Library membership is free for students."
      },
      {
        "word": "valid",
        "phonetic": "/ˈvæl.ɪd/",
        "pos": "adjective",
        "uzbek": "amal qiluvchi, yaroqli",
        "definition": "Legally acceptable or usable",
        "example": "You need a valid passport or ID card."
      },
      {
        "word": "borrow",
        "phonetic": "/ˈbɒr.əʊ/",
        "pos": "verb",
        "uzbek": "vaqtincha olmoq",
        "definition": "To take and use something with the intention of returning it",
        "example": "You can borrow up to six books."
      },
      {
        "word": "fee",
        "phonetic": "/fiː/",
        "pos": "noun",
        "uzbek": "to'lov, badal",
        "definition": "An amount of money paid for a service",
        "example": "There is no late fee if you return them on time."
      }
    ],
    "sentences": [
      {
        "speaker": "Librarian",
        "text": "Good afternoon! Welcome to the Central City Library. How may I assist you today?"
      },
      {
        "speaker": "Student",
        "text": "Hello! I would like to register for a new student membership card, please."
      },
      {
        "speaker": "Librarian",
        "text": "Of course. I just need to take down a few details. Could you please tell me your full name?"
      },
      {
        "speaker": "Student",
        "text": "Yes, it is Oliver Kensington. That is K-E-N-S-I-N-G-T-O-N."
      },
      {
        "speaker": "Librarian",
        "text": "Thank you, Oliver. And what is your current address here in the city?"
      },
      {
        "speaker": "Student",
        "text": "I live at 24 Riverdale Road, Apartment 3B."
      },
      {
        "speaker": "Librarian",
        "text": "Great. And what is your contact phone number in case we need to reach you?"
      },
      {
        "speaker": "Student",
        "text": "It is 0794 321 885. Let me repeat that: 0794 321 885."
      },
      {
        "speaker": "Librarian",
        "text": "Got it. As a student member, you can borrow a maximum of six books at one time for up to three weeks."
      },
      {
        "speaker": "Student",
        "text": "That is fantastic! Is there any registration fee?"
      },
      {
        "speaker": "Librarian",
        "text": "Normally it is ten pounds, but for full-time students with a student ID, it is completely free."
      },
      {
        "speaker": "Student",
        "text": "Wonderful, here is my student card. Thank you so much!"
      }
    ],
    "questions": [
      {
        "id": "beg1-q1",
        "type": "blank",
        "prompt": "What is the applicant's surname?",
        "instruction": "Write NO MORE THAN ONE WORD for the answer.",
        "correctAnswer": [
          "Kensington",
          "kensington"
        ],
        "explanation": "Audioda talaba familiyasini aniq harflab beradi: 'That is K-E-N-S-I-N-G-T-O-N'. Shuning uchun to'g'ri javob — Kensington.",
        "scriptEvidence": "Yes, it is Oliver Kensington. That is K-E-N-S-I-N-G-T-O-N."
      },
      {
        "id": "beg1-q2",
        "type": "blank",
        "prompt": "Address: 24 ____________ Road, Apartment 3B.",
        "instruction": "Write NO MORE THAN ONE WORD for the answer.",
        "correctAnswer": [
          "Riverdale",
          "riverdale"
        ],
        "explanation": "Talaba manzilini aytayotganda: 'I live at 24 Riverdale Road' deb ta'kidlaydi.",
        "scriptEvidence": "I live at 24 Riverdale Road, Apartment 3B."
      },
      {
        "id": "beg1-q3",
        "type": "blank",
        "prompt": "Contact number: 0794 321 ____________.",
        "instruction": "Write ONE NUMBER for the answer.",
        "correctAnswer": [
          "885"
        ],
        "explanation": "Telefon raqami ikkita marta takrorlanadi: '0794 321 885'. Bo'sh joyga oxirgi qismi — 885 tushadi.",
        "scriptEvidence": "It is 0794 321 885. Let me repeat that: 0794 321 885."
      },
      {
        "id": "beg1-q4",
        "type": "multiple_choice",
        "prompt": "How many books can a student borrow at one time?",
        "options": [
          {
            "key": "A",
            "text": "Three books"
          },
          {
            "key": "B",
            "text": "Six books"
          },
          {
            "key": "C",
            "text": "Ten books"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Kutubxonachi talabaga aniq aytadi: 'you can borrow a maximum of six books at one time'.",
        "scriptEvidence": "you can borrow a maximum of six books at one time for up to three weeks."
      }
    ]
  },
  {
    "id": "beg-2",
    "level": "beginner",
    "title": "Kafeda nonushta buyurtma berish (Ordering at a Café)",
    "topic": "Taomlar, ichimliklar va narxlar",
    "accent": "en-US (Amerika)",
    "voiceGender": "male",
    "audioSpeedDefault": 0.95,
    "duration": "2 min",
    "description": "Mijoz mahalliy qahvaxonaga kirib, nonushta uchun ichimlik va yegulik tanlamoqda.",
    "vocabulary": [
      {
        "word": "cappuccino",
        "phonetic": "/ˌkæp.əˈtʃiː.nəʊ/",
        "pos": "noun",
        "uzbek": "kapuchino qahvasi",
        "definition": "Coffee made with espresso and hot steamed milk",
        "example": "I will have a large cappuccino."
      },
      {
        "word": "croissant",
        "phonetic": "/ˈkrwɑː.sɒ̃/",
        "pos": "noun",
        "uzbek": "kruassan",
        "definition": "A flaky, buttery, crescent-shaped roll",
        "example": "Is the almond croissant fresh?"
      },
      {
        "word": "receipt",
        "phonetic": "/rɪˈsiːt/",
        "pos": "noun",
        "uzbek": "chek, kvitansiya",
        "definition": "A paper proof of payment",
        "example": "Would you like your receipt in the bag?"
      }
    ],
    "sentences": [
      {
        "speaker": "Barista",
        "text": "Hi there! Welcome to Sunshine Bakery. What can I get started for you this morning?"
      },
      {
        "speaker": "Customer",
        "text": "Good morning! Can I please get a medium cappuccino to go?"
      },
      {
        "speaker": "Barista",
        "text": "Sure thing. Would you prefer regular cow's milk or oat milk?"
      },
      {
        "speaker": "Customer",
        "text": "Oat milk, please. And could you make it with extra foam?"
      },
      {
        "speaker": "Barista",
        "text": "No problem. Anything to eat with your coffee today? Our chocolate croissants just came fresh out of the oven."
      },
      {
        "speaker": "Customer",
        "text": "That sounds delicious! I will take one chocolate croissant as well."
      },
      {
        "speaker": "Barista",
        "text": "Great choice. So that is one medium oat cappuccino and one chocolate croissant. Your total comes to eight dollars and fifty cents."
      },
      {
        "speaker": "Customer",
        "text": "Here is a ten-dollar bill. Keep the change as a tip!"
      },
      {
        "speaker": "Barista",
        "text": "Thank you so much! Please wait by the counter, your drink will be ready in two minutes."
      }
    ],
    "questions": [
      {
        "id": "beg2-q1",
        "type": "blank",
        "prompt": "What type of milk did the customer choose?",
        "instruction": "Write ONE WORD for the answer.",
        "correctAnswer": [
          "oat",
          "Oat"
        ],
        "explanation": "Barista sut turini so'raganda, mijoz 'Oat milk, please' deb javob beradi.",
        "scriptEvidence": "Oat milk, please. And could you make it with extra foam?"
      },
      {
        "id": "beg2-q2",
        "type": "blank",
        "prompt": "What pastry did the customer order?",
        "instruction": "Write ONE OR TWO WORDS for the answer.",
        "correctAnswer": [
          "chocolate croissant",
          "croissant"
        ],
        "explanation": "Mijoz yangi pishgan shokoladli kruassandan bitta olishini aytadi: 'one chocolate croissant as well'.",
        "scriptEvidence": "I will take one chocolate croissant as well."
      },
      {
        "id": "beg2-q3",
        "type": "multiple_choice",
        "prompt": "What was the total cost of the order?",
        "options": [
          {
            "key": "A",
            "text": "$8.50"
          },
          {
            "key": "B",
            "text": "$10.00"
          },
          {
            "key": "C",
            "text": "$12.50"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Barista hisobni e'lon qiladi: 'Your total comes to eight dollars and fifty cents ($8.50)'. Mijoz esa $10 berib, qaytimni choychaqa sifatida qoldiradi.",
        "scriptEvidence": "Your total comes to eight dollars and fifty cents."
      }
    ]
  },
  {
    "id": "beg-3",
    "level": "beginner",
    "title": "Poyezd bekatida chipta sotib olish (Buying a Train Ticket)",
    "topic": "Sayohat, vaqt va platforma ma'lumotlari",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "male",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Yo'lovchi Manchester shahriga poyezd chiptasini xarid qilmoqda.",
    "vocabulary": [
      {
        "word": "platform",
        "phonetic": "/ˈplæt.fɔːm/",
        "pos": "noun",
        "uzbek": "perron, platforma",
        "definition": "A flat raised area where passengers get on trains",
        "example": "The train departs from platform four."
      },
      {
        "word": "return",
        "phonetic": "/rɪˈtɜːn/",
        "pos": "noun",
        "uzbek": "qaytish chiptasi",
        "definition": "A ticket for a journey to a place and back again",
        "example": "A standard return ticket is cheaper."
      },
      {
        "word": "direct",
        "phonetic": "/daɪˈrekt/",
        "pos": "adjective",
        "uzbek": "to'g'ridan-to'g'ri",
        "definition": "Without changing trains",
        "example": "Is this a direct service?"
      }
    ],
    "sentences": [
      {
        "speaker": "Ticket Officer",
        "text": "Next in line, please. Good morning! Where are you traveling today?"
      },
      {
        "speaker": "Passenger",
        "text": "Good morning. I need a ticket to Manchester, please."
      },
      {
        "speaker": "Ticket Officer",
        "text": "Single or return?"
      },
      {
        "speaker": "Passenger",
        "text": "A return ticket, please. I am coming back tomorrow evening."
      },
      {
        "speaker": "Ticket Officer",
        "text": "The next direct train departs at ten thirty from platform four."
      },
      {
        "speaker": "Passenger",
        "text": "How long does the journey take?"
      },
      {
        "speaker": "Ticket Officer",
        "text": "It takes exactly two hours and fifteen minutes."
      },
      {
        "speaker": "Passenger",
        "text": "How much is the return ticket?"
      },
      {
        "speaker": "Ticket Officer",
        "text": "That will be forty-two pounds, please."
      },
      {
        "speaker": "Passenger",
        "text": "Here is my contactless card. Thank you very much!"
      }
    ],
    "questions": [
      {
        "id": "beg3-q1",
        "type": "blank",
        "prompt": "The train departs from platform ____________.",
        "instruction": "Write ONE WORD or NUMBER.",
        "correctAnswer": [
          "4",
          "four",
          "Four"
        ],
        "explanation": "Chipta sotuvchi poyezd to'rtinchi platformadan jo'nashini aytadi: 'from platform four'.",
        "scriptEvidence": "The next direct train departs at ten thirty from platform four."
      },
      {
        "id": "beg3-q2",
        "type": "multiple_choice",
        "prompt": "How much does the return ticket cost?",
        "options": [
          {
            "key": "A",
            "text": "£24"
          },
          {
            "key": "B",
            "text": "£42"
          },
          {
            "key": "C",
            "text": "£52"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Bilet narxi 42 funt sterling ekanligi aytiladi: 'forty-two pounds, please'.",
        "scriptEvidence": "That will be forty-two pounds, please."
      }
    ]
  },
  {
    "id": "beg-4",
    "level": "beginner",
    "title": "Mehmonxonada xona band qilish (Hotel Room Reservation)",
    "topic": "Turar joy, kunlar soni va nonushta",
    "accent": "en-US (Amerika)",
    "voiceGender": "female",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Mehmonxona ma'muri va mehmon o'rtasidagi suhbat.",
    "vocabulary": [
      {
        "word": "reservation",
        "phonetic": "/ˌrez.əˈveɪ.ʃən/",
        "pos": "noun",
        "uzbek": "bron qilish",
        "definition": "An arrangement to have a room held",
        "example": "I have a reservation under the name Smith."
      },
      {
        "word": "included",
        "phonetic": "/ɪnˈkluː.dɪd/",
        "pos": "adjective",
        "uzbek": "ichiga kiritilgan",
        "definition": "Contained as part of a whole",
        "example": "Breakfast is included in the price."
      },
      {
        "word": "keycard",
        "phonetic": "/ˈkiː.kɑːd/",
        "pos": "noun",
        "uzbek": "elektron kalit karta",
        "definition": "A plastic card used to open a hotel door",
        "example": "Keep your keycard in your wallet."
      }
    ],
    "sentences": [
      {
        "speaker": "Receptionist",
        "text": "Good evening, welcome to Grand Palace Hotel. Do you have a reservation?"
      },
      {
        "speaker": "Guest",
        "text": "Yes, I booked a double room online under the name David Miller."
      },
      {
        "speaker": "Receptionist",
        "text": "Let me check our system. Yes, Mr. Miller, a double room for three nights."
      },
      {
        "speaker": "Guest",
        "text": "That is correct. Is breakfast included in the room rate?"
      },
      {
        "speaker": "Receptionist",
        "text": "Yes, complimentary buffet breakfast is served from seven to ten every morning on the second floor."
      },
      {
        "speaker": "Guest",
        "text": "Perfect. What is the password for the Wi-Fi?"
      },
      {
        "speaker": "Receptionist",
        "text": "The network is GrandGuest, and the password is on your keycard envelope. You are in room 405 on the fourth floor."
      },
      {
        "speaker": "Guest",
        "text": "Thank you for your help!"
      }
    ],
    "questions": [
      {
        "id": "beg4-q1",
        "type": "blank",
        "prompt": "The guest booked a room for ____________ nights.",
        "instruction": "Write ONE NUMBER or WORD.",
        "correctAnswer": [
          "3",
          "three",
          "Three"
        ],
        "explanation": "Ma'mur 'for three nights' deb tasdiqlaydi.",
        "scriptEvidence": "Yes, Mr. Miller, a double room for three nights."
      },
      {
        "id": "beg4-q2",
        "type": "blank",
        "prompt": "The room number is ____________.",
        "instruction": "Write THE ROOM NUMBER.",
        "correctAnswer": [
          "405"
        ],
        "explanation": "Ma'mur 'You are in room 405 on the fourth floor' deb aytadi.",
        "scriptEvidence": "You are in room 405 on the fourth floor."
      }
    ]
  },
  {
    "id": "beg-5",
    "level": "beginner",
    "title": "Kiyim do'konida xarid (Shopping for Clothes)",
    "topic": "O'lchamlar, ranglar va narxlar",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Xaridor ko'ylak o'lchami va rangini tanlamoqda.",
    "vocabulary": [
      {
        "word": "fitting room",
        "phonetic": "/ˈfɪt.ɪŋ ˌruːm/",
        "pos": "noun",
        "uzbek": "kiyib ko'rish xonasi",
        "definition": "A room where customers can try on clothes",
        "example": "The fitting rooms are at the back."
      },
      {
        "word": "medium",
        "phonetic": "/ˈmiː.di.əm/",
        "pos": "noun",
        "uzbek": "o'rtacha o'lcham",
        "definition": "A middle size between small and large",
        "example": "Do you have this in medium?"
      },
      {
        "word": "discount",
        "phonetic": "/ˈdɪs.kaʊnt/",
        "pos": "noun",
        "uzbek": "chegirma",
        "definition": "A reduction in the usual price",
        "example": "There is a twenty percent discount today."
      }
    ],
    "sentences": [
      {
        "speaker": "Shop Assistant",
        "text": "Hello! Can I help you find anything today?"
      },
      {
        "speaker": "Customer",
        "text": "Yes, please. I like this blue cotton shirt, but I need it in a size medium."
      },
      {
        "speaker": "Shop Assistant",
        "text": "Let me check the rack. Yes, here is a medium in navy blue."
      },
      {
        "speaker": "Customer",
        "text": "Where are the fitting rooms so I can try it on?"
      },
      {
        "speaker": "Shop Assistant",
        "text": "The fitting rooms are straight ahead, right next to the mirrors."
      },
      {
        "speaker": "Customer",
        "text": "It fits very well! How much does it cost?"
      },
      {
        "speaker": "Shop Assistant",
        "text": "It is originally thirty pounds, but today we have a five-pound discount, so it is twenty-five pounds."
      },
      {
        "speaker": "Customer",
        "text": "Wonderful, I will take it."
      }
    ],
    "questions": [
      {
        "id": "beg5-q1",
        "type": "blank",
        "prompt": "The discounted price of the shirt is ____________ pounds.",
        "instruction": "Write ONE NUMBER.",
        "correctAnswer": [
          "25",
          "twenty-five"
        ],
        "explanation": "Asl narxi 30 funt bo'lib, 5 funt chegirma bilan 25 funt bo'ladi.",
        "scriptEvidence": "so it is twenty-five pounds."
      },
      {
        "id": "beg5-q2",
        "type": "multiple_choice",
        "prompt": "What size did the customer ask for?",
        "options": [
          {
            "key": "A",
            "text": "Small"
          },
          {
            "key": "B",
            "text": "Medium"
          },
          {
            "key": "C",
            "text": "Large"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Mijoz 'I need it in a size medium' deb aytadi.",
        "scriptEvidence": "Yes, please. I like this blue cotton shirt, but I need it in a size medium."
      }
    ]
  },
  {
    "id": "beg-6",
    "level": "beginner",
    "title": "Shifokor qabuliga yozilish (Doctor's Appointment)",
    "topic": "Salomatlik va vaqtni kelishish",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Klinika qabulxonasida navbatga yozilish jarayoni.",
    "vocabulary": [
      {
        "word": "appointment",
        "phonetic": "/əˈpɔɪnt.mənt/",
        "pos": "noun",
        "uzbek": "qabul vaqti",
        "definition": "An arranged time to see a professional",
        "example": "I have an appointment at three o'clock."
      },
      {
        "word": "symptoms",
        "phonetic": "/ˈsɪmp.təmz/",
        "pos": "noun",
        "uzbek": "belgilar, alomatlar",
        "definition": "Signs of illness",
        "example": "What symptoms are you experiencing?"
      },
      {
        "word": "prescribe",
        "phonetic": "/prɪˈskraɪb/",
        "pos": "verb",
        "uzbek": "dori yozib bermoq",
        "definition": "To authorize medicine in writing",
        "example": "The doctor will prescribe antibiotics."
      }
    ],
    "sentences": [
      {
        "speaker": "Receptionist",
        "text": "Good morning, West End Health Clinic. How can I help you?"
      },
      {
        "speaker": "Patient",
        "text": "Hello. I would like to schedule an appointment with Dr. Watson, please."
      },
      {
        "speaker": "Receptionist",
        "text": "Are you an existing patient at our practice?"
      },
      {
        "speaker": "Patient",
        "text": "Yes, my date of birth is the fourteenth of March, 1995."
      },
      {
        "speaker": "Receptionist",
        "text": "Thank you. Dr. Watson has an opening tomorrow morning at nine fifteen, or on Thursday at two in the afternoon."
      },
      {
        "speaker": "Patient",
        "text": "Tomorrow morning at nine fifteen would be ideal, please."
      },
      {
        "speaker": "Receptionist",
        "text": "You are booked for Wednesday at 9:15 AM. Please arrive ten minutes early to fill out a health form."
      },
      {
        "speaker": "Patient",
        "text": "Thank you very much. See you tomorrow!"
      }
    ],
    "questions": [
      {
        "id": "beg6-q1",
        "type": "blank",
        "prompt": "The appointment is scheduled for ____________ AM.",
        "instruction": "Write THE TIME.",
        "correctAnswer": [
          "9:15",
          "9.15"
        ],
        "explanation": "Bemor ertaga ertalab soat 9:15 ga yoziladi.",
        "scriptEvidence": "Tomorrow morning at nine fifteen would be ideal, please."
      },
      {
        "id": "beg6-q2",
        "type": "multiple_choice",
        "prompt": "How many minutes early should the patient arrive?",
        "options": [
          {
            "key": "A",
            "text": "5 minutes"
          },
          {
            "key": "B",
            "text": "10 minutes"
          },
          {
            "key": "C",
            "text": "20 minutes"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Ma'mur 'Please arrive ten minutes early' deb aytadi.",
        "scriptEvidence": "Please arrive ten minutes early to fill out a health form."
      }
    ]
  },
  {
    "id": "beg-7",
    "level": "beginner",
    "title": "Shaharda yo'l so'rash (Asking for Directions)",
    "topic": "Yo'nalishlar, chorrahalar va diqqatga sazovor joylar",
    "accent": "en-US (Amerika)",
    "voiceGender": "male",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Sayyoh mahalliy aholidan muzeyga borish yo'lini so'ramoqda.",
    "vocabulary": [
      {
        "word": "intersection",
        "phonetic": "/ˌɪn.təˈsek.ʃən/",
        "pos": "noun",
        "uzbek": "chorraha",
        "definition": "A point where two or more roads cross",
        "example": "Turn left at the next intersection."
      },
      {
        "word": "blocks",
        "phonetic": "/blɒks/",
        "pos": "noun",
        "uzbek": "kvartallar, oraliqlar",
        "definition": "The area between adjacent streets",
        "example": "Walk two blocks down Main Street."
      },
      {
        "word": "opposite",
        "phonetic": "/ˈɒp.ə.zɪt/",
        "pos": "adjective",
        "uzbek": "ro'parasida",
        "definition": "Across from something",
        "example": "The museum is opposite the post office."
      }
    ],
    "sentences": [
      {
        "speaker": "Tourist",
        "text": "Excuse me! Could you please tell me how to get to the City History Museum?"
      },
      {
        "speaker": "Local",
        "text": "Sure! It is about a ten-minute walk from here. Walk straight down this avenue for two blocks."
      },
      {
        "speaker": "Tourist",
        "text": "Two blocks straight ahead, okay."
      },
      {
        "speaker": "Local",
        "text": "When you reach the traffic lights near the bank, turn right onto Pine Street."
      },
      {
        "speaker": "Tourist",
        "text": "Turn right at the traffic lights, got it."
      },
      {
        "speaker": "Local",
        "text": "Keep walking past the public library, and the museum will be directly on your left, opposite the city park."
      },
      {
        "speaker": "Tourist",
        "text": "Opposite the park on the left side. Thank you so much for your directions!"
      },
      {
        "speaker": "Local",
        "text": "You are very welcome. Enjoy your visit!"
      }
    ],
    "questions": [
      {
        "id": "beg7-q1",
        "type": "blank",
        "prompt": "The museum is opposite the city ____________.",
        "instruction": "Write ONE WORD.",
        "correctAnswer": [
          "park",
          "Park"
        ],
        "explanation": "Muzey shahar bog'i (city park) ro'parasida joylashgan.",
        "scriptEvidence": "opposite the city park."
      },
      {
        "id": "beg7-q2",
        "type": "multiple_choice",
        "prompt": "How long does it take to walk to the museum?",
        "options": [
          {
            "key": "A",
            "text": "5 minutes"
          },
          {
            "key": "B",
            "text": "10 minutes"
          },
          {
            "key": "C",
            "text": "25 minutes"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Mahalliy odam: 'It is about a ten-minute walk from here' deydi.",
        "scriptEvidence": "It is about a ten-minute walk from here."
      }
    ]
  },
  {
    "id": "beg-8",
    "level": "beginner",
    "title": "Aeroportda ro'yxatdan o'tish (Airport Check-in)",
    "topic": "Parvoz, bagaj va o'rindiq tanlash",
    "accent": "en-US (Amerika)",
    "voiceGender": "female",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Yo'lovchi aeroport kassasida ro'yxatdan o'tib, yukini topshirmoqda.",
    "vocabulary": [
      {
        "word": "boarding pass",
        "phonetic": "/ˈbɔː.dɪŋ ˌpɑːs/",
        "pos": "noun",
        "uzbek": "samolyotga chiqish taloni",
        "definition": "A pass authorizing entry onto an aircraft",
        "example": "Here is your boarding pass and receipt."
      },
      {
        "word": "window seat",
        "phonetic": "/ˈwɪn.dəʊ siːt/",
        "pos": "noun",
        "uzbek": "oyna yonidagi o'rindiq",
        "definition": "A seat next to a window",
        "example": "Would you prefer an aisle or window seat?"
      },
      {
        "word": "luggage",
        "phonetic": "/ˈlʌɡ.ɪdʒ/",
        "pos": "noun",
        "uzbek": "yuk, bagaj",
        "definition": "Bags and suitcases for travel",
        "example": "Please place your luggage on the scale."
      }
    ],
    "sentences": [
      {
        "speaker": "Agent",
        "text": "Good afternoon. May I see your passport and flight booking confirmation?"
      },
      {
        "speaker": "Traveler",
        "text": "Here you go. I am flying to Chicago on flight AA420."
      },
      {
        "speaker": "Agent",
        "text": "Thank you. Do you have any bags to check in today?"
      },
      {
        "speaker": "Traveler",
        "text": "Yes, just this one large suitcase."
      },
      {
        "speaker": "Agent",
        "text": "Please place it on the scale... Twenty-one kilos, well within the limit. Would you prefer a window seat or an aisle seat?"
      },
      {
        "speaker": "Traveler",
        "text": "A window seat, please, if one is available."
      },
      {
        "speaker": "Agent",
        "text": "You are in seat 14A. Your flight boards at gate 22 starting at 3:30 PM. Have a pleasant flight!"
      },
      {
        "speaker": "Traveler",
        "text": "Thank you very much!"
      }
    ],
    "questions": [
      {
        "id": "beg8-q1",
        "type": "blank",
        "prompt": "The traveler's seat is ____________.",
        "instruction": "Write THE SEAT NUMBER.",
        "correctAnswer": [
          "14A",
          "14a"
        ],
        "explanation": "Agent o'rindiq raqami 14A ekanligini aytadi: 'You are in seat 14A'.",
        "scriptEvidence": "You are in seat 14A."
      },
      {
        "id": "beg8-q2",
        "type": "blank",
        "prompt": "The boarding gate is number ____________.",
        "instruction": "Write THE NUMBER.",
        "correctAnswer": [
          "22"
        ],
        "explanation": "Parvozga chiqish 22-darvozadan amalga oshiriladi: 'boards at gate 22'.",
        "scriptEvidence": "Your flight boards at gate 22 starting at 3:30 PM."
      }
    ]
  },
  {
    "id": "beg-9",
    "level": "beginner",
    "title": "Yangi kursdosh bilan tanishuv (Meeting a Classmate)",
    "topic": "Tanishish, mutaxassislik va qiziqishlar",
    "accent": "en-US (Amerika)",
    "voiceGender": "male",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Universitetda ikki talaba birinchi darsdan oldin tanishmoqda.",
    "vocabulary": [
      {
        "word": "major",
        "phonetic": "/ˈmeɪ.dʒər/",
        "pos": "noun",
        "uzbek": "asosiy mutaxassislik",
        "definition": "A student's principal subject of study",
        "example": "My major is computer science."
      },
      {
        "word": "semester",
        "phonetic": "/sɪˈmes.tər/",
        "pos": "noun",
        "uzbek": "semestr",
        "definition": "A half-year term in school or university",
        "example": "This is my second semester."
      },
      {
        "word": "campus",
        "phonetic": "/ˈkæm.pəs/",
        "pos": "noun",
        "uzbek": "universitet hududi",
        "definition": "The grounds and buildings of a university",
        "example": "I live near the north campus."
      }
    ],
    "sentences": [
      {
        "speaker": "Lucas",
        "text": "Hi! Is anyone sitting here, or is this chair free?"
      },
      {
        "speaker": "Sarah",
        "text": "No, it is free. Go right ahead! My name is Sarah, by the way."
      },
      {
        "speaker": "Lucas",
        "text": "Nice to meet you, Sarah. I am Lucas. Are you also taking Introduction to Economics?"
      },
      {
        "speaker": "Sarah",
        "text": "Yes, it is required for my business management degree. What is your major?"
      },
      {
        "speaker": "Lucas",
        "text": "I am majoring in Computer Science, but I wanted to learn some basic finance this semester."
      },
      {
        "speaker": "Sarah",
        "text": "That is smart! Where are you from, Lucas?"
      },
      {
        "speaker": "Lucas",
        "text": "I am from Seattle originally, but I moved into a dormitory on campus last week."
      },
      {
        "speaker": "Sarah",
        "text": "Welcome to campus! We should study together before the midterm exams."
      }
    ],
    "questions": [
      {
        "id": "beg9-q1",
        "type": "blank",
        "prompt": "Lucas is majoring in Computer ____________.",
        "instruction": "Write ONE WORD.",
        "correctAnswer": [
          "Science",
          "science"
        ],
        "explanation": "Lukas o'z mutaxassisligini aytadi: 'Computer Science'.",
        "scriptEvidence": "I am majoring in Computer Science"
      },
      {
        "id": "beg9-q2",
        "type": "multiple_choice",
        "prompt": "Where is Lucas from originally?",
        "options": [
          {
            "key": "A",
            "text": "Chicago"
          },
          {
            "key": "B",
            "text": "Seattle"
          },
          {
            "key": "C",
            "text": "Boston"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Lukas 'I am from Seattle originally' deb javob beradi.",
        "scriptEvidence": "I am from Seattle originally, but I moved into a dormitory"
      }
    ]
  },
  {
    "id": "beg-10",
    "level": "beginner",
    "title": "Bank hisob raqami ochish (Opening a Bank Account)",
    "topic": "Moliya, debet karta va shaxsni tasdiqlash",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Mijoz yangi bankda hisob ochmoqda.",
    "vocabulary": [
      {
        "word": "debit card",
        "phonetic": "/ˈdeb.ɪt kɑːd/",
        "pos": "noun",
        "uzbek": "debet karta",
        "definition": "A card allowing electronic withdrawal of funds",
        "example": "Your debit card will arrive by post."
      },
      {
        "word": "deposit",
        "phonetic": "/dɪˈpɒz.ɪt/",
        "pos": "noun",
        "uzbek": "dastlabki badal",
        "definition": "A sum of money placed into a bank account",
        "example": "An initial deposit of twenty pounds is required."
      },
      {
        "word": "statement",
        "phonetic": "/ˈsteɪt.mənt/",
        "pos": "noun",
        "uzbek": "bank ko'chirmasi",
        "definition": "A record of transactions",
        "example": "Monthly statements are sent by email."
      }
    ],
    "sentences": [
      {
        "speaker": "Bank Manager",
        "text": "Good morning. How can Barclays Bank help you today?"
      },
      {
        "speaker": "Customer",
        "text": "Good morning. I recently moved to the UK and need to open a current account."
      },
      {
        "speaker": "Bank Manager",
        "text": "Certainly. Do you have your passport and a proof of address with you?"
      },
      {
        "speaker": "Customer",
        "text": "Yes, I brought my passport and my official apartment rental contract."
      },
      {
        "speaker": "Bank Manager",
        "text": "Excellent, that is everything we need. With our standard current account, online banking is free."
      },
      {
        "speaker": "Customer",
        "text": "When will I receive my debit card?"
      },
      {
        "speaker": "Bank Manager",
        "text": "It will be mailed to your address within five working days, along with your secure PIN."
      },
      {
        "speaker": "Customer",
        "text": "That is very fast. Thank you for setting this up!"
      }
    ],
    "questions": [
      {
        "id": "beg10-q1",
        "type": "blank",
        "prompt": "The debit card will arrive within ____________ working days.",
        "instruction": "Write ONE NUMBER or WORD.",
        "correctAnswer": [
          "5",
          "five",
          "Five"
        ],
        "explanation": "Bank xodimi karta 5 ish kuni ichida yetib kelishini aytadi: 'within five working days'.",
        "scriptEvidence": "It will be mailed to your address within five working days"
      },
      {
        "id": "beg10-q2",
        "type": "multiple_choice",
        "prompt": "What document did the customer use as proof of address?",
        "options": [
          {
            "key": "A",
            "text": "A utility bill"
          },
          {
            "key": "B",
            "text": "A rental contract"
          },
          {
            "key": "C",
            "text": "A student card"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Mijoz ijara shartnomasini taqdim etganini aytadi: 'my official apartment rental contract'.",
        "scriptEvidence": "I brought my passport and my official apartment rental contract."
      }
    ]
  },
  {
    "id": "beg-11",
    "level": "beginner",
    "title": "Restoranda hisob-kitob qilish (Paying the Bill)",
    "topic": "Restoran, hisob-kitob va bo'lib to'lash",
    "accent": "en-US (Amerika)",
    "voiceGender": "male",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Kechki ovqatdan so'ng hisobni to'lash va bo'lish jarayoni.",
    "vocabulary": [
      {
        "word": "split",
        "phonetic": "/splɪt/",
        "pos": "verb",
        "uzbek": "teng bo'lmoq",
        "definition": "To divide into two or more parts",
        "example": "Can we split the bill equally?"
      },
      {
        "word": "tip",
        "phonetic": "/tɪp/",
        "pos": "noun",
        "uzbek": "choychaqa",
        "definition": "Extra money given for good service",
        "example": "We left a fifteen percent tip."
      }
    ],
    "sentences": [
      {
        "speaker": "Waiter",
        "text": "Did you enjoy your pasta and dessert tonight?"
      },
      {
        "speaker": "Diner",
        "text": "Everything was wonderful, thank you! Could we please have the bill?"
      },
      {
        "speaker": "Waiter",
        "text": "Of course, here it is in the leather folder."
      },
      {
        "speaker": "Diner",
        "text": "Is service included, or can we add a tip on the card terminal?"
      },
      {
        "speaker": "Waiter",
        "text": "Service is not included, but you can add whatever tip you like on the card machine."
      },
      {
        "speaker": "Diner",
        "text": "Could we split the bill equally between two cards?"
      },
      {
        "speaker": "Waiter",
        "text": "Absolutely. The total is sixty dollars, so that will be thirty dollars per person."
      }
    ],
    "questions": [
      {
        "id": "beg11-q1",
        "type": "blank",
        "prompt": "Each person paid ____________ dollars.",
        "instruction": "Write THE NUMBER.",
        "correctAnswer": [
          "30",
          "thirty"
        ],
        "explanation": "Hisob teng bo'linganda har bir kishiga 30 dollar tushadi.",
        "scriptEvidence": "so that will be thirty dollars per person."
      }
    ]
  },
  {
    "id": "beg-12",
    "level": "beginner",
    "title": "Kinoteatrda chipta tanlash (Booking Cinema Tickets)",
    "topic": "Filmlar, qatorlar va vaqtlar",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Kassada kechki seansga chipta xarid qilish.",
    "vocabulary": [
      {
        "word": "row",
        "phonetic": "/rəʊ/",
        "pos": "noun",
        "uzbek": "qator",
        "definition": "A line of seats",
        "example": "We have two seats in row F."
      },
      {
        "word": "screen",
        "phonetic": "/skriːn/",
        "pos": "noun",
        "uzbek": "katta ekran, zal",
        "definition": "The surface on which films are projected",
        "example": "The movie is in screen number three."
      }
    ],
    "sentences": [
      {
        "speaker": "Cashier",
        "text": "Good evening. Welcome to Odeon Cinema. What film would you like to see?"
      },
      {
        "speaker": "Customer",
        "text": "Two adult tickets for the new space adventure movie at seven thirty, please."
      },
      {
        "speaker": "Cashier",
        "text": "Screen two has seats left in row G in the middle. Is that okay for you?"
      },
      {
        "speaker": "Customer",
        "text": "Yes, row G in the center is perfect."
      },
      {
        "speaker": "Cashier",
        "text": "That is eighteen pounds in total for two adult tickets."
      }
    ],
    "questions": [
      {
        "id": "beg12-q1",
        "type": "blank",
        "prompt": "The seats are in row ____________.",
        "instruction": "Write ONE LETTER.",
        "correctAnswer": [
          "G",
          "g"
        ],
        "explanation": "O'rindiqlar G qatorining markazida joylashgan.",
        "scriptEvidence": "Screen two has seats left in row G in the middle."
      }
    ]
  },
  {
    "id": "beg-13",
    "level": "beginner",
    "title": "Sport zaliga a'zo bo'lish (Joining a Gym)",
    "topic": "Sport, oylik to'lov va qoidalar",
    "accent": "en-US (Amerika)",
    "voiceGender": "male",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Yangi mijoz fitnes klubining a'zolik shartlari bilan tanishmoqda.",
    "vocabulary": [
      {
        "word": "locker",
        "phonetic": "/ˈlɒk.ər/",
        "pos": "noun",
        "uzbek": "shkafcha",
        "definition": "A small lockable storage cabinet",
        "example": "Lockers are free to use with your card."
      },
      {
        "word": "trainer",
        "phonetic": "/ˈtreɪ.nər/",
        "pos": "noun",
        "uzbek": "murabbiy",
        "definition": "A person who teaches athletic skills",
        "example": "A personal trainer will show you around."
      }
    ],
    "sentences": [
      {
        "speaker": "Manager",
        "text": "Welcome to Apex Fitness! Are you interested in our monthly gym membership?"
      },
      {
        "speaker": "Client",
        "text": "Yes, I would like to know the monthly fee and your opening hours."
      },
      {
        "speaker": "Manager",
        "text": "We are open twenty-four hours a day, seven days a week. The monthly fee is thirty-five dollars."
      },
      {
        "speaker": "Client",
        "text": "Does that include access to the swimming pool?"
      },
      {
        "speaker": "Manager",
        "text": "Yes, both the gym floor and the heated pool are included."
      }
    ],
    "questions": [
      {
        "id": "beg13-q1",
        "type": "blank",
        "prompt": "The monthly membership fee is ____________ dollars.",
        "instruction": "Write ONE NUMBER.",
        "correctAnswer": [
          "35",
          "thirty-five"
        ],
        "explanation": "Oylik to'lov 35 dollar ekanligi aytiladi.",
        "scriptEvidence": "The monthly fee is thirty-five dollars."
      }
    ]
  },
  {
    "id": "beg-14",
    "level": "beginner",
    "title": "Yo'qolgan buyumlar bo'limi (Lost Property)",
    "topic": "Ranglar, shakllar va yo'qotilgan buyum",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Yo'lovchi avtobusda unutib qoldirgan sumkasini qidirmoqda.",
    "vocabulary": [
      {
        "word": "backpack",
        "phonetic": "/ˈbæk.pæk/",
        "pos": "noun",
        "uzbek": "ryukzak, orqa xalta",
        "definition": "A bag carried on the back",
        "example": "I left my black backpack on the bus."
      },
      {
        "word": "leather",
        "phonetic": "/ˈleð.ər/",
        "pos": "noun",
        "uzbek": "charm",
        "definition": "Material made from animal skin",
        "example": "It has a brown leather handle."
      }
    ],
    "sentences": [
      {
        "speaker": "Officer",
        "text": "Central Transit Lost Property. What did you lose?"
      },
      {
        "speaker": "Commuter",
        "text": "I left my black leather backpack on the number 12 bus this morning."
      },
      {
        "speaker": "Officer",
        "text": "Can you describe what was inside it?"
      },
      {
        "speaker": "Commuter",
        "text": "Inside there is a silver laptop and a blue water bottle."
      },
      {
        "speaker": "Officer",
        "text": "Yes, the driver handed it in twenty minutes ago! Please sign here to collect it."
      }
    ],
    "questions": [
      {
        "id": "beg14-q1",
        "type": "blank",
        "prompt": "The backpack was left on bus number ____________.",
        "instruction": "Write THE NUMBER.",
        "correctAnswer": [
          "12"
        ],
        "explanation": "Yo'lovchi sumkasini 12-raqamli avtobusda qoldirgan.",
        "scriptEvidence": "on the number 12 bus this morning."
      }
    ]
  },
  {
    "id": "beg-15",
    "level": "beginner",
    "title": "Taksi chaqirish va manzil (Taking a Taxi)",
    "topic": "Yo'l haqi, vaqt va tezlik",
    "accent": "en-US (Amerika)",
    "voiceGender": "male",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Poyezdga shoshilayotgan yo'lovchi taksiga o'tirmoqda.",
    "vocabulary": [
      {
        "word": "meter",
        "phonetic": "/ˈmiː.tər/",
        "pos": "noun",
        "uzbek": "hisoblagich",
        "definition": "Device that records distance and fare",
        "example": "Please turn on the taxi meter."
      },
      {
        "word": "trunk",
        "phonetic": "/trʌŋk/",
        "pos": "noun",
        "uzbek": "mashina yukxonasi (bagaj)",
        "definition": "Car luggage compartment",
        "example": "Can we put the bag in the trunk?"
      }
    ],
    "sentences": [
      {
        "speaker": "Driver",
        "text": "Hello! Where are you headed today?"
      },
      {
        "speaker": "Passenger",
        "text": "To the Central Railway Station, please. My train leaves in twenty-five minutes."
      },
      {
        "speaker": "Driver",
        "text": "No worries, traffic is light today. It will take only ten minutes to get there."
      },
      {
        "speaker": "Passenger",
        "text": "That is a big relief. Can I pay with credit card at the end?"
      },
      {
        "speaker": "Driver",
        "text": "Yes, cards and cash are both accepted."
      }
    ],
    "questions": [
      {
        "id": "beg15-q1",
        "type": "blank",
        "prompt": "The drive to the station will take ____________ minutes.",
        "instruction": "Write ONE NUMBER or WORD.",
        "correctAnswer": [
          "10",
          "ten",
          "Ten"
        ],
        "explanation": "Haydovchi yo'l bor-yo'g'i 10 daqiqa vaqt olishini aytadi.",
        "scriptEvidence": "It will take only ten minutes to get there."
      }
    ]
  },
  {
    "id": "beg-16",
    "level": "beginner",
    "title": "Do'konda mahsulotni qaytarish (Returning an Item)",
    "topic": "Kvitansiya, pulni qaytarish va nuqson",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Xaridor nuqsonli soatni qaytarib, pulini qaytarib olmoqda.",
    "vocabulary": [
      {
        "word": "refund",
        "phonetic": "/ˈriː.fʌnd/",
        "pos": "noun",
        "uzbek": "pulni qaytarish",
        "definition": "A repayment of money",
        "example": "Would you like an exchange or a full refund?"
      },
      {
        "word": "faulty",
        "phonetic": "/ˈfɒl.ti/",
        "pos": "adjective",
        "uzbek": "buzilgan, nuqsonli",
        "definition": "Not working correctly",
        "example": "The battery compartment is faulty."
      }
    ],
    "sentences": [
      {
        "speaker": "Customer Service",
        "text": "Hello. How may I assist you with your return?"
      },
      {
        "speaker": "Shopper",
        "text": "I bought this wireless alarm clock yesterday, but the display is faulty."
      },
      {
        "speaker": "Customer Service",
        "text": "I am sorry to hear that. Do you have your purchase receipt?"
      },
      {
        "speaker": "Shopper",
        "text": "Yes, here is the paper receipt from yesterday afternoon."
      },
      {
        "speaker": "Customer Service",
        "text": "Thank you. I have processed a full refund to your payment card."
      }
    ],
    "questions": [
      {
        "id": "beg16-q1",
        "type": "blank",
        "prompt": "The customer returned a faulty wireless ____________.",
        "instruction": "Write ONE OR TWO WORDS.",
        "correctAnswer": [
          "alarm clock",
          "clock"
        ],
        "explanation": "Mijoz nosoz uyg'otgich soatni (alarm clock) qaytaradi.",
        "scriptEvidence": "I bought this wireless alarm clock yesterday, but the display is faulty."
      }
    ]
  },
  {
    "id": "beg-17",
    "level": "beginner",
    "title": "Dam olish kuni ob-havo ma'lumoti (Weather Forecast)",
    "topic": "Harorat, quyosh va yomg'ir ehtimoli",
    "accent": "en-US (Amerika)",
    "voiceGender": "male",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Shanba va yakshanba kunlari uchun ob-havo bashorati.",
    "vocabulary": [
      {
        "word": "sunny",
        "phonetic": "/ˈsʌn.i/",
        "pos": "adjective",
        "uzbek": "quyoshli",
        "definition": "Bright with sunlight",
        "example": "Saturday will be warm and sunny."
      },
      {
        "word": "degrees",
        "phonetic": "/dɪˈɡriːz/",
        "pos": "noun",
        "uzbek": "daraja (harorat)",
        "definition": "Unit of temperature measurement",
        "example": "The temperature will reach twenty degrees."
      }
    ],
    "sentences": [
      {
        "speaker": "Presenter",
        "text": "And now for your local weekend weather outlook."
      },
      {
        "speaker": "Presenter",
        "text": "Saturday will bring bright blue skies and plenty of sunshine across the entire valley."
      },
      {
        "speaker": "Presenter",
        "text": "Afternoon temperatures will reach a pleasant twenty-two degrees Celsius."
      },
      {
        "speaker": "Presenter",
        "text": "However, Sunday afternoon will see cloud cover increase with light showers starting around five PM."
      }
    ],
    "questions": [
      {
        "id": "beg17-q1",
        "type": "blank",
        "prompt": "Saturday's high temperature will be ____________ degrees.",
        "instruction": "Write THE NUMBER.",
        "correctAnswer": [
          "22",
          "twenty-two"
        ],
        "explanation": "Shanba kungi harorat 22 darajaga yetishi aytiladi.",
        "scriptEvidence": "reach a pleasant twenty-two degrees Celsius."
      }
    ]
  },
  {
    "id": "beg-18",
    "level": "beginner",
    "title": "Uy hayvonlari do'konida (Visiting a Pet Store)",
    "topic": "Kuchukchalar, ozuqa va parvarish",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Mijoz yangi kuchukcha uchun ozuqa va o'yinchoq tanlamoqda.",
    "vocabulary": [
      {
        "word": "puppy",
        "phonetic": "/ˈpʌp.i/",
        "pos": "noun",
        "uzbek": "kuchukcha",
        "definition": "A young dog",
        "example": "We adopted a friendly golden puppy."
      },
      {
        "word": "collar",
        "phonetic": "/ˈkɒl.ər/",
        "pos": "noun",
        "uzbek": "bo'yinbog'",
        "definition": "A band worn around an animal's neck",
        "example": "Choose a soft nylon collar."
      }
    ],
    "sentences": [
      {
        "speaker": "Clerk",
        "text": "Welcome to Happy Paws! Can I help you with your pet supplies?"
      },
      {
        "speaker": "Owner",
        "text": "Yes, I just adopted a two-month-old golden retriever puppy."
      },
      {
        "speaker": "Clerk",
        "text": "Congratulations! You will need our puppy starter food, which is rich in vitamins."
      },
      {
        "speaker": "Owner",
        "text": "I also need a sturdy leash and a red collar."
      },
      {
        "speaker": "Clerk",
        "text": "All puppy collars and leashes are right here on aisle three."
      }
    ],
    "questions": [
      {
        "id": "beg18-q1",
        "type": "blank",
        "prompt": "The puppy is ____________ months old.",
        "instruction": "Write ONE NUMBER or WORD.",
        "correctAnswer": [
          "2",
          "two",
          "Two"
        ],
        "explanation": "Kuchukcha 2 oylik ekanligi aytiladi.",
        "scriptEvidence": "I just adopted a two-month-old golden retriever puppy."
      }
    ]
  },
  {
    "id": "beg-19",
    "level": "beginner",
    "title": "Pochtadan posilka jo'natish (At the Post Office)",
    "topic": "Og'irlik, manzil va jo'natish xizmatlari",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "male",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Germaniyaga posilka yuborish uchun pochta xizmatiga murojaat.",
    "vocabulary": [
      {
        "word": "parcel",
        "phonetic": "/ˈpɑː.səl/",
        "pos": "noun",
        "uzbek": "posilka, tugun",
        "definition": "A package wrapped for delivery",
        "example": "This parcel contains books."
      },
      {
        "word": "express",
        "phonetic": "/ɪkˈspres/",
        "pos": "adjective",
        "uzbek": "tezkor",
        "definition": "Fast delivery service",
        "example": "Express delivery takes two days."
      }
    ],
    "sentences": [
      {
        "speaker": "Postal Worker",
        "text": "Hello! Place your box on the scale, please. Where is it going?"
      },
      {
        "speaker": "Sender",
        "text": "It is going to Berlin, Germany."
      },
      {
        "speaker": "Postal Worker",
        "text": "It weighs one point five kilograms. Standard delivery takes five days and costs twelve pounds."
      },
      {
        "speaker": "Sender",
        "text": "Standard delivery is fine, thank you."
      },
      {
        "speaker": "Postal Worker",
        "text": "Please write your return address in the top corner of the box."
      }
    ],
    "questions": [
      {
        "id": "beg19-q1",
        "type": "blank",
        "prompt": "The destination city of the parcel is ____________.",
        "instruction": "Write THE CITY NAME.",
        "correctAnswer": [
          "Berlin",
          "berlin"
        ],
        "explanation": "Posilka Germaniyaning Berlin shahriga jo'natilmoqda.",
        "scriptEvidence": "It is going to Berlin, Germany."
      }
    ]
  },
  {
    "id": "beg-20",
    "level": "beginner",
    "title": "Tug'ilgan kunga taklif qilish (Birthday Invitation)",
    "topic": "Bayram, sana va sovg'a masalasi",
    "accent": "en-US (Amerika)",
    "voiceGender": "female",
    "audioSpeedDefault": 0.9,
    "duration": "2 min",
    "description": "Do'stlar shanba oqshomidagi bayram rejalarini muhokama qilmoqda.",
    "vocabulary": [
      {
        "word": "celebrate",
        "phonetic": "/ˈsel.ə.breɪt/",
        "pos": "verb",
        "uzbek": "nishonlamoq",
        "definition": "To observe an event with social festivities",
        "example": "We will celebrate on Saturday night."
      },
      {
        "word": "invitation",
        "phonetic": "/ˌɪn.vɪˈteɪ.ʃən/",
        "pos": "noun",
        "uzbek": "taklifnoma",
        "definition": "A written or spoken request to attend",
        "example": "Thank you for the warm invitation."
      }
    ],
    "sentences": [
      {
        "speaker": "Emma",
        "text": "Hey Daniel! Are you free this coming Saturday evening?"
      },
      {
        "speaker": "Daniel",
        "text": "Hi Emma! Yes, I do not have any plans yet. What is happening?"
      },
      {
        "speaker": "Emma",
        "text": "It is my twenty-first birthday, and I am hosting a barbecue party in my garden."
      },
      {
        "speaker": "Daniel",
        "text": "Happy early birthday! What time does the party start?"
      },
      {
        "speaker": "Emma",
        "text": "Guests will start arriving around six PM. Please do not bring any gifts, just bring your good mood!"
      },
      {
        "speaker": "Daniel",
        "text": "I will definitely be there at six. See you on Saturday!"
      }
    ],
    "questions": [
      {
        "id": "beg20-q1",
        "type": "blank",
        "prompt": "The birthday party starts at ____________ PM.",
        "instruction": "Write ONE NUMBER or WORD.",
        "correctAnswer": [
          "6",
          "six",
          "Six"
        ],
        "explanation": "Bayram kechki soat oltida (6 PM) boshlanishi aytiladi.",
        "scriptEvidence": "Guests will start arriving around six PM."
      }
    ]
  },
  {
    "id": "int-1",
    "level": "intermediate",
    "title": "Greenfield Eko-bog' sayohati (Eco-Park Guided Tour)",
    "topic": "Atrof-muhit, yovvoyi tabiat va sayohat marshruti",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "Gid sayyohlarga tabiiy qo'riqxona qoidalari, qushlar migratsiyasi va qayta tiklanuvchi energiya manbalari haqida so'zlamoqda.",
    "vocabulary": [
      {
        "word": "sanctuary",
        "phonetic": "/ˈsæŋk.tʃʊə.ri/",
        "pos": "noun",
        "uzbek": "qo'riqxona, panohgoh",
        "definition": "A nature reserve for birds or other animals",
        "example": "The wetland sanctuary protects rare aquatic birds."
      },
      {
        "word": "biodiversity",
        "phonetic": "/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/",
        "pos": "noun",
        "uzbek": "bioxilma-xillik",
        "definition": "The variety of plant and animal life in a habitat",
        "example": "Preserving local biodiversity is our main priority."
      },
      {
        "word": "footpath",
        "phonetic": "/ˈfʊt.pɑːθ/",
        "pos": "noun",
        "uzbek": "piyodalar yo'lagi",
        "definition": "A path for people to walk along",
        "example": "Visitors must strictly remain on the designated footpath."
      }
    ],
    "sentences": [
      {
        "speaker": "Tour Guide",
        "text": "Welcome everyone to the Greenfield Ecological Reserve. My name is Claire, and I will be leading your walk today."
      },
      {
        "speaker": "Tour Guide",
        "text": "Before we set out towards the wetland lakes, I must emphasize a few critical safety and conservation guidelines."
      },
      {
        "speaker": "Tour Guide",
        "text": "First, you must remain on the raised wooden boardwalk at all times to protect the fragile mosses and insect habitats below."
      },
      {
        "speaker": "Tour Guide",
        "text": "Second, littering is strictly prohibited; any packaging must be carried back to the visitor pavilion."
      },
      {
        "speaker": "Visitor",
        "text": "Excuse me, Claire, will we have an opportunity to see the kingfishers near the water hide today?"
      },
      {
        "speaker": "Tour Guide",
        "text": "Yes, indeed! The bird observation hide is our third stop, located approximately forty minutes from our current position."
      },
      {
        "speaker": "Tour Guide",
        "text": "The reserve operates entirely on solar and wind energy generated by our adjacent micro-station."
      },
      {
        "speaker": "Tour Guide",
        "text": "Now, let us begin our gentle loop around the southern woodland trail."
      }
    ],
    "questions": [
      {
        "id": "int1-q1",
        "type": "blank",
        "prompt": "Visitors must remain on the raised wooden ____________ at all times.",
        "instruction": "Write ONE WORD for the answer.",
        "correctAnswer": [
          "boardwalk",
          "Boardwalk"
        ],
        "explanation": "Gid yo'riqnoma berayotganda 'remain on the raised wooden boardwalk' deb qat'iy ta'kidlaydi.",
        "scriptEvidence": "First, you must remain on the raised wooden boardwalk at all times"
      },
      {
        "id": "int1-q2",
        "type": "multiple_choice",
        "prompt": "How far away is the bird observation hide from the starting point?",
        "options": [
          {
            "key": "A",
            "text": "Twenty minutes"
          },
          {
            "key": "B",
            "text": "Forty minutes"
          },
          {
            "key": "C",
            "text": "One hour"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Gid kuzatuv punkti qariyb 40 daqiqalik masofada joylashganini aytadi: 'located approximately forty minutes'.",
        "scriptEvidence": "located approximately forty minutes from our current position."
      }
    ]
  },
  {
    "id": "int-2",
    "level": "intermediate",
    "title": "Ish bo'yicha suhbat (Job Interview for IT Support)",
    "topic": "Karyera, texnik ko'nikmalar va muammolarni hal qilish",
    "accent": "en-US (Amerika)",
    "voiceGender": "male",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "Nomzod xalqaro texnologik kompaniyaning kadrlar bo'limi menejeri bilan suhbatdan o'tmoqda.",
    "vocabulary": [
      {
        "word": "troubleshoot",
        "phonetic": "/ˈtrʌb.əl.ʃuːt/",
        "pos": "verb",
        "uzbek": "nosozliklarni aniqlab tuzatmoq",
        "definition": "To analyze and solve problems in a system",
        "example": "I can troubleshoot complex hardware issues remotely."
      },
      {
        "word": "collaborate",
        "phonetic": "/kəˈlæb.ə.reɪt/",
        "pos": "verb",
        "uzbek": "hamkorlikda ishlamoq",
        "definition": "To work jointly on an activity or project",
        "example": "We collaborate closely with the software development team."
      }
    ],
    "sentences": [
      {
        "speaker": "Interviewer",
        "text": "Good afternoon, Jason. Thank you for coming in today for the IT Support Specialist position."
      },
      {
        "speaker": "Jason",
        "text": "Good afternoon, Ms. Harris. It is an absolute pleasure to meet with you."
      },
      {
        "speaker": "Interviewer",
        "text": "To start off, could you tell me about your background resolving critical system outages under tight deadlines?"
      },
      {
        "speaker": "Jason",
        "text": "In my previous role at Apex Systems, I was responsible for monitoring cloud infrastructure and resolving tier-two user tickets."
      },
      {
        "speaker": "Jason",
        "text": "When our main database failed during peak holiday sales, my team identified the corrupted cache within fifteen minutes."
      },
      {
        "speaker": "Interviewer",
        "text": "That is impressive speed. How do you handle difficult, frustrated clients over the phone?"
      },
      {
        "speaker": "Jason",
        "text": "I listen empathetically without interrupting, acknowledge their frustration, and explain our remediation steps in clear, non-technical language."
      },
      {
        "speaker": "Interviewer",
        "text": "Excellent. Our standard work model is hybrid, with three days in the office and two days remote."
      }
    ],
    "questions": [
      {
        "id": "int2-q1",
        "type": "blank",
        "prompt": "Jason's team resolved the database issue within ____________ minutes.",
        "instruction": "Write ONE NUMBER or WORD.",
        "correctAnswer": [
          "15",
          "fifteen",
          "Fifteen"
        ],
        "explanation": "Jason ma'lumotlar bazasidagi nosozlik 15 daqiqa ichida aniqlanganini aytadi.",
        "scriptEvidence": "identified the corrupted cache within fifteen minutes."
      },
      {
        "id": "int2-q2",
        "type": "multiple_choice",
        "prompt": "How many days per week are employees expected to work in the office?",
        "options": [
          {
            "key": "A",
            "text": "Two days"
          },
          {
            "key": "B",
            "text": "Three days"
          },
          {
            "key": "C",
            "text": "Five days"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Intervyu oluvchi ofisda 3 kun, masofadan 2 kun ishlashini ta'kidlaydi: 'three days in the office and two days remote'.",
        "scriptEvidence": "with three days in the office and two days remote."
      }
    ]
  },
  {
    "id": "int-3",
    "level": "intermediate",
    "title": "Universitet yaqinida uy ijarasi (Student Accommodation)",
    "topic": "Ijara narxi, kommunal xizmatlar va shartnoma",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "Talaba ko'chmas mulk agenti bilan kvartira shartlarini muhokama qilmoqda.",
    "vocabulary": [
      {
        "word": "tenancy",
        "phonetic": "/ˈten.ən.si/",
        "pos": "noun",
        "uzbek": "ijara muddati",
        "definition": "Possession of land or property as a tenant",
        "example": "The tenancy agreement is for twelve months."
      },
      {
        "word": "utilities",
        "phonetic": "/juːˈtɪl.ə.tiz/",
        "pos": "noun",
        "uzbek": "kommunal xizmatlar",
        "definition": "Services such as electricity, gas, and water",
        "example": "Are utilities included in the monthly rent?"
      }
    ],
    "sentences": [
      {
        "speaker": "Agent",
        "text": "Hello Simon. I have pulled up the details for the studio flat on Victoria Street."
      },
      {
        "speaker": "Simon",
        "text": "Great. Does the rent of seven hundred pounds include heating and internet?"
      },
      {
        "speaker": "Agent",
        "text": "Water and high-speed fiber internet are covered, but electricity and gas are billed separately each quarter."
      },
      {
        "speaker": "Simon",
        "text": "Understood. What is the security deposit requirement?"
      },
      {
        "speaker": "Agent",
        "text": "The landlord requires five weeks' rent as a refundable security deposit, held in an official deposit scheme."
      }
    ],
    "questions": [
      {
        "id": "int3-q1",
        "type": "blank",
        "prompt": "High-speed ____________ internet is covered in the rent.",
        "instruction": "Write ONE WORD.",
        "correctAnswer": [
          "fiber",
          "fibre"
        ],
        "explanation": "Internet turi tolali (fiber) ekanligi aytiladi.",
        "scriptEvidence": "Water and high-speed fiber internet are covered"
      }
    ]
  },
  {
    "id": "int-4",
    "level": "intermediate",
    "title": "San'at muzeyida audio-gid (Museum Audio Tour)",
    "topic": "Rassomlik, impressionizm va kompozitsiya",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "male",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "XIX asr oxiridagi fransuz impressionistlari ko'rgazmasi tahlili.",
    "vocabulary": [
      {
        "word": "brushstrokes",
        "phonetic": "/ˈbrʌʃ.strəʊks/",
        "pos": "noun",
        "uzbek": "mo'yqalam izlari",
        "definition": "The marks left by a paintbrush",
        "example": "Notice the energetic, visible brushstrokes on the canvas."
      },
      {
        "word": "perspective",
        "phonetic": "/pəˈspek.tɪv/",
        "pos": "noun",
        "uzbek": "perspektiva, ko'rinish",
        "definition": "The art of representing three dimensions on a flat surface",
        "example": "The artist deliberately alters the linear perspective."
      }
    ],
    "sentences": [
      {
        "speaker": "Audio Guide",
        "text": "You are standing before Claude Monet's iconic landscape, painted during the late summer of 1885."
      },
      {
        "speaker": "Audio Guide",
        "text": "Notice how the artist avoids mixing paints smoothly on the palette. Instead, he applies pure colors side by side directly onto the canvas."
      },
      {
        "speaker": "Audio Guide",
        "text": "From a close distance, the image appears chaotic, but stepping back three meters allows your brain to blend the vibrant light naturally."
      }
    ],
    "questions": [
      {
        "id": "int4-q1",
        "type": "blank",
        "prompt": "The painting was created in the year ____________.",
        "instruction": "Write THE YEAR.",
        "correctAnswer": [
          "1885"
        ],
        "explanation": "Kartina 1885 yilning yozida chizilgan.",
        "scriptEvidence": "painted during the late summer of 1885."
      }
    ]
  },
  {
    "id": "int-5",
    "level": "intermediate",
    "title": "Loyiha bo'yicha ish uchrashuvi (Project Team Meeting)",
    "topic": "Muddatlar, resurslar va jamoaviy vazifalar",
    "accent": "en-US (Amerika)",
    "voiceGender": "female",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "Dasturiy ta'minot loyihasining muddatlari va resurslarini taqsimlash.",
    "vocabulary": [
      {
        "word": "milestone",
        "phonetic": "/ˈmaɪl.stəʊn/",
        "pos": "noun",
        "uzbek": "muhim bosqich",
        "definition": "A significant stage or event in development",
        "example": "Our first technical milestone is scheduled for November."
      },
      {
        "word": "deliverable",
        "phonetic": "/dɪˈlɪv.ər.ə.bəl/",
        "pos": "noun",
        "uzbek": "topshirilishi kerak bo'lgan natija",
        "definition": "A tangible product produced by a project",
        "example": "The user interface mockups are the next deliverable."
      }
    ],
    "sentences": [
      {
        "speaker": "Project Lead",
        "text": "Thanks for joining on time, team. Let us review the sprint deadlines for our mobile application upgrade."
      },
      {
        "speaker": "Engineer",
        "text": "The authentication module is currently passing eighty-five percent of automated security tests."
      },
      {
        "speaker": "Project Lead",
        "text": "We need that figure to reach ninety-five percent before the beta release on October fifteenth."
      }
    ],
    "questions": [
      {
        "id": "int5-q1",
        "type": "blank",
        "prompt": "The beta release is scheduled for October ____________.",
        "instruction": "Write ONE NUMBER or WORD.",
        "correctAnswer": [
          "15",
          "fifteenth",
          "15th"
        ],
        "explanation": "Beta versiya chiqarilishi 15-oktabrga rejalashtirilgan.",
        "scriptEvidence": "before the beta release on October fifteenth."
      }
    ]
  },
  {
    "id": "int-6",
    "level": "intermediate",
    "title": "Parvoz kechikishi haqida e'lon (Flight Delay Announcement)",
    "topic": "Aeroport, noqulay ob-havo va kompensatsiya",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "male",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "London Gatwick aeroportida noqulay ob-havo sababli parvozlar holati.",
    "vocabulary": [
      {
        "word": "turbulence",
        "phonetic": "/ˈtɜː.bjə.ləns/",
        "pos": "noun",
        "uzbek": "havo girdobi, silkinish",
        "definition": "Violent or unsteady movement of air",
        "example": "Severe turbulence delayed incoming flights."
      },
      {
        "word": "voucher",
        "phonetic": "/ˈvaʊ.tʃər/",
        "pos": "noun",
        "uzbek": "talon, vaucher",
        "definition": "A document redeemable for goods or services",
        "example": "Passengers received meal vouchers at gate 12."
      }
    ],
    "sentences": [
      {
        "speaker": "Announcer",
        "text": "Attention passengers on flight BA249 to Madrid. Due to heavy thunderstorms over northern France, departure has been rescheduled to twenty-one hundred hours."
      },
      {
        "speaker": "Announcer",
        "text": "Passengers may collect complimentary refreshment vouchers worth fifteen euros from our customer desk opposite gate fourteen."
      }
    ],
    "questions": [
      {
        "id": "int6-q1",
        "type": "blank",
        "prompt": "Refreshment vouchers are worth ____________ euros.",
        "instruction": "Write THE NUMBER.",
        "correctAnswer": [
          "15",
          "fifteen"
        ],
        "explanation": "15 yevro qiymatidagi oziq-ovqat vaucheri beriladi.",
        "scriptEvidence": "refreshment vouchers worth fifteen euros"
      }
    ]
  },
  {
    "id": "int-7",
    "level": "intermediate",
    "title": "Faol dam olishni rejalashtirish (Adventure Holiday)",
    "topic": "Alpinizm, xavfsizlik va tog' ekspeditsiyasi",
    "accent": "en-US (Amerika)",
    "voiceGender": "female",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "Sayyoh tog'da piyoda yurish safari uchun jihozlar va sug'urtani o'rganmoqda.",
    "vocabulary": [
      {
        "word": "elevation",
        "phonetic": "/ˌel.əˈveɪ.ʃən/",
        "pos": "noun",
        "uzbek": "balandlik",
        "definition": "Height above sea level",
        "example": "The summit reaches an elevation of three thousand meters."
      },
      {
        "word": "acclimatize",
        "phonetic": "/əˈklaɪ.mə.taɪz/",
        "pos": "verb",
        "uzbek": "moslashmoq (iqlimga)",
        "definition": "Become accustomed to a new climate",
        "example": "Trekkers need two days to acclimatize."
      }
    ],
    "sentences": [
      {
        "speaker": "Guide",
        "text": "Our six-day trek crosses the Rocky Mountain Pass. You will be hiking an average of twelve miles per day."
      },
      {
        "speaker": "Hiker",
        "text": "Is special mountaineering footwear mandatory?"
      },
      {
        "speaker": "Guide",
        "text": "Yes, waterproof boots with stiff ankle support are strictly required due to loose shale on the northern ridge."
      }
    ],
    "questions": [
      {
        "id": "int7-q1",
        "type": "blank",
        "prompt": "Trekkers will hike an average of ____________ miles daily.",
        "instruction": "Write ONE NUMBER or WORD.",
        "correctAnswer": [
          "12",
          "twelve"
        ],
        "explanation": "Kuniga o'rtacha 12 milya masofa bosib o'tiladi.",
        "scriptEvidence": "hiking an average of twelve miles per day."
      }
    ]
  },
  {
    "id": "int-8",
    "level": "intermediate",
    "title": "Frilanserlar suhbati: Masofaviy ish (Remote Work)",
    "topic": "Moslashuvchan grafik, diqqat va unumdorlik",
    "accent": "en-US (Amerika)",
    "voiceGender": "male",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "Ikkita mustaqil mutaxassis uyda ishlash afzalliklari va qiyinchiliklarini taqqoslamoqda.",
    "vocabulary": [
      {
        "word": "procrastination",
        "phonetic": "/prəʊˌkræs.tɪˈneɪ.ʃən/",
        "pos": "noun",
        "uzbek": "ishni orqaga surish",
        "definition": "The action of delaying something",
        "example": "Time-blocking helps overcome procrastination."
      },
      {
        "word": "coworking",
        "phonetic": "/kəʊˈwɜː.kɪŋ/",
        "pos": "noun",
        "uzbek": "hamkorlikdagi umumiy ofis",
        "definition": "Shared office workspace",
        "example": "I spend Tuesdays at a local coworking space."
      }
    ],
    "sentences": [
      {
        "speaker": "Liam",
        "text": "Working from home saves me two hours of commuting daily, but maintaining boundaries between work and personal life is challenging."
      },
      {
        "speaker": "Chloe",
        "text": "I solved that by renting a desk at a coworking space three mornings a week. It forces me to stick to a routine."
      }
    ],
    "questions": [
      {
        "id": "int8-q1",
        "type": "blank",
        "prompt": "Working from home saves Liam ____________ hours of commuting daily.",
        "instruction": "Write ONE NUMBER or WORD.",
        "correctAnswer": [
          "2",
          "two"
        ],
        "explanation": "Liam uyda ishlash orqali har kuni 2 soat yo'l vaqtini tejashini aytadi.",
        "scriptEvidence": "Working from home saves me two hours of commuting daily"
      }
    ]
  },
  {
    "id": "int-9",
    "level": "intermediate",
    "title": "Quyosh energiyasi loyihasi (Community Solar Energy)",
    "topic": "Qayta tiklanuvchi energiya, batareyalar va elektr tarmoqlari",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "Shahar kengashida quyosh panellari o'rnatish dasturi taqdimoti.",
    "vocabulary": [
      {
        "word": "photovoltaic",
        "phonetic": "/ˌfəʊ.təʊ.vɒlˈteɪ.ɪk/",
        "pos": "adjective",
        "uzbek": "fotovoltik, yorug'likdan tok oluvchi",
        "definition": "Relating to the production of electric current at the junction of two substances exposed to light",
        "example": "Photovoltaic panels generate clean electricity."
      },
      {
        "word": "subsidy",
        "phonetic": "/ˈsʌb.sɪ.di/",
        "pos": "noun",
        "uzbek": "davlat subsidiyasi, yordam puli",
        "definition": "Government financial grant",
        "example": "Homeowners receive a thirty percent state subsidy."
      }
    ],
    "sentences": [
      {
        "speaker": "Councilor",
        "text": "Our municipal solar program aims to install rooftop arrays on over four hundred public residential buildings by 2028."
      },
      {
        "speaker": "Councilor",
        "text": "This will cut community carbon emissions by approximately twenty-five percent annually."
      }
    ],
    "questions": [
      {
        "id": "int9-q1",
        "type": "blank",
        "prompt": "The project aims to install solar arrays on ____________ buildings.",
        "instruction": "Write ONE NUMBER.",
        "correctAnswer": [
          "400",
          "four hundred"
        ],
        "explanation": "Loyiha 400 ta jamoat binosiga quyosh panellari o'rnatishni maqsad qilgan.",
        "scriptEvidence": "on over four hundred public residential buildings"
      }
    ]
  },
  {
    "id": "int-10",
    "level": "intermediate",
    "title": "Smartfon sharhi va tahlili (Tech Review Podcast)",
    "topic": "Texnologiya, batareya quvvati va kamera sensorlari",
    "accent": "en-US (Amerika)",
    "voiceGender": "male",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "Texnologik podkastda eng so'nggi flagman smartfon imkoniyatlari taqqoslanmoqda.",
    "vocabulary": [
      {
        "word": "aperture",
        "phonetic": "/ˈæp.ə.tʃər/",
        "pos": "noun",
        "uzbek": "diafragma (kamera)",
        "definition": "An opening that controls the amount of light entering a lens",
        "example": "The wider aperture improves low-light night photography."
      },
      {
        "word": "endurance",
        "phonetic": "/ɪnˈdʒʊə.rəns/",
        "pos": "noun",
        "uzbek": "chidam, davomiylik",
        "definition": "The ability to sustain prolonged stress",
        "example": "Battery endurance reached fourteen hours of video playback."
      }
    ],
    "sentences": [
      {
        "speaker": "Host",
        "text": "Today we are analyzing the battery test results for the newly released Titan Pro smartphone."
      },
      {
        "speaker": "Host",
        "text": "With its five-thousand-milliampere battery, the device lasted eighteen hours and forty minutes under continuous browsing."
      }
    ],
    "questions": [
      {
        "id": "int10-q1",
        "type": "blank",
        "prompt": "The battery capacity is ____________ milliamperes.",
        "instruction": "Write ONE NUMBER.",
        "correctAnswer": [
          "5000",
          "5,000"
        ],
        "explanation": "Batareya hajmi 5000 milliamper/soat ekanligi aytiladi.",
        "scriptEvidence": "With its five-thousand-milliampere battery"
      }
    ]
  },
  {
    "id": "int-11",
    "level": "intermediate",
    "title": "Shahar transportini yaxshilash (Public Transport Debate)",
    "topic": "Shaharsozlik, tirbandlik va veloyo'laklar",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "Shahar markazida avtomobilsiz hududlar yaratish bo'yicha jamoatchilik eshituvi.",
    "vocabulary": [
      {
        "word": "pedestrianized",
        "phonetic": "/pəˈdes.tri.ə.naɪzd/",
        "pos": "adjective",
        "uzbek": "piyodalarga ajratilgan",
        "definition": "Converted for the use of pedestrians only",
        "example": "The central shopping street is now pedestrianized."
      },
      {
        "word": "congestion",
        "phonetic": "/kənˈdʒes.tʃən/",
        "pos": "noun",
        "uzbek": "tirbandlik",
        "definition": "Crowded or blocked condition of streets",
        "example": "A congestion charge reduces downtown traffic."
      }
    ],
    "sentences": [
      {
        "speaker": "Speaker",
        "text": "Introducing a dedicated express tram corridor will reduce travel times between the suburbs and city center by thirty-five percent."
      }
    ],
    "questions": [
      {
        "id": "int11-q1",
        "type": "blank",
        "prompt": "Travel times will be reduced by ____________ percent.",
        "instruction": "Write ONE NUMBER.",
        "correctAnswer": [
          "35",
          "thirty-five"
        ],
        "explanation": "Tramvay yo'lagi vaqtni 35 foizga qisqartiradi.",
        "scriptEvidence": "reduce travel times between the suburbs and city center by thirty-five percent."
      }
    ]
  },
  {
    "id": "int-12",
    "level": "intermediate",
    "title": "Sog'lom uyqu va ovqatlanish (Sleep & Nutrition)",
    "topic": "Salomatlik, sirkad ritmlar va kofein ta'siri",
    "accent": "en-US (Amerika)",
    "voiceGender": "male",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "Uyqu mutaxassisi kechki ovqat va kofeinning uyqu sifatiga ta'sirini tushuntirmoqda.",
    "vocabulary": [
      {
        "word": "circadian",
        "phonetic": "/sɜːˈkeɪ.di.ən/",
        "pos": "adjective",
        "uzbek": "sirkad (kunlik biologik)",
        "definition": "Relating to twenty-four-hour biological cycles",
        "example": "Morning sunlight anchors your circadian rhythm."
      },
      {
        "word": "metabolize",
        "phonetic": "/məˈtæb.əl.aɪz/",
        "pos": "verb",
        "uzbek": "hazm qilmoq, parchalamoq",
        "definition": "Process substance through chemical metabolism",
        "example": "The human liver takes eight hours to metabolize caffeine."
      }
    ],
    "sentences": [
      {
        "speaker": "Dr. Kelly",
        "text": "Caffeine has a half-life of roughly six hours, meaning that drinking coffee at four PM leaves twenty-five percent in your system at midnight."
      }
    ],
    "questions": [
      {
        "id": "int12-q1",
        "type": "blank",
        "prompt": "Caffeine has an average half-life of ____________ hours.",
        "instruction": "Write ONE NUMBER or WORD.",
        "correctAnswer": [
          "6",
          "six"
        ],
        "explanation": "Kofeinning yarim parchalanish davri taxminan 6 soatni tashkil qiladi.",
        "scriptEvidence": "Caffeine has a half-life of roughly six hours"
      }
    ]
  },
  {
    "id": "int-13",
    "level": "intermediate",
    "title": "Vaqtni samarali boshqarish (Time Management)",
    "topic": "Pomodoro texnikasi, diqqat va rejalashtirish",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "Katta loyihalarni kichik bo'laklarga ajratish va chuqur diqqatni saqlash.",
    "vocabulary": [
      {
        "word": "interruption",
        "phonetic": "/ˌɪn.təˈrʌp.ʃən/",
        "pos": "noun",
        "uzbek": "chalg'itish, xalaqit",
        "definition": "An act of stopping the continuous progress",
        "example": "Turn off push alerts to minimize digital interruption."
      }
    ],
    "sentences": [
      {
        "speaker": "Trainer",
        "text": "Research demonstrates that it takes an average of twenty-three minutes to regain deep focus after a single phone interruption."
      }
    ],
    "questions": [
      {
        "id": "int13-q1",
        "type": "blank",
        "prompt": "It takes an average of ____________ minutes to regain deep focus.",
        "instruction": "Write THE NUMBER.",
        "correctAnswer": [
          "23",
          "twenty-three"
        ],
        "explanation": "Chalg'igandan so'ng diqqatni qayta jamlash uchun o'rtacha 23 daqiqa ketadi.",
        "scriptEvidence": "takes an average of twenty-three minutes to regain deep focus"
      }
    ]
  },
  {
    "id": "int-14",
    "level": "intermediate",
    "title": "Kosmik parvozlar tarixi (History of Space Travel)",
    "topic": "Astronavtika, Oyga qo'nish va raketalar",
    "accent": "en-US (Amerika)",
    "voiceGender": "male",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "Apollon dasturi va Saturn V raketasi haqidagi muzey ekspozitsiyasi.",
    "vocabulary": [
      {
        "word": "propulsion",
        "phonetic": "/prəˈpʌl.ʃən/",
        "pos": "noun",
        "uzbek": "harakatlantiruvchi kuch, tortish",
        "definition": "Action of driving or pushing forward",
        "example": "Rocket engines utilize liquid oxygen for propulsion."
      }
    ],
    "sentences": [
      {
        "speaker": "Docent",
        "text": "The massive Saturn V rocket stood at one hundred and eleven meters tall and produced seven point five million pounds of thrust."
      }
    ],
    "questions": [
      {
        "id": "int14-q1",
        "type": "blank",
        "prompt": "The Saturn V rocket stood at ____________ meters tall.",
        "instruction": "Write THE NUMBER.",
        "correctAnswer": [
          "111",
          "one hundred and eleven"
        ],
        "explanation": "Saturn V raketasining balandligi 111 metrni tashkil qilgan.",
        "scriptEvidence": "stood at one hundred and eleven meters tall"
      }
    ]
  },
  {
    "id": "int-15",
    "level": "intermediate",
    "title": "Til o'rganish strategiyalari (Language Strategies)",
    "topic": "Lug'at boyligi, intervalli takrorlash va kontekst",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "Poliglotlar tavsiyasi: intervalli takrorlash tizimi orqali so'z yodlash.",
    "vocabulary": [
      {
        "word": "retention",
        "phonetic": "/rɪˈten.ʃən/",
        "pos": "noun",
        "uzbek": "xotirada saqlab qolish",
        "definition": "Continued possession or memory of information",
        "example": "Spaced repetition drastically increases vocabulary retention."
      }
    ],
    "sentences": [
      {
        "speaker": "Linguist",
        "text": "Reviewing a new English phrase across intervals of one day, four days, and twelve days guarantees ninety percent long-term retention."
      }
    ],
    "questions": [
      {
        "id": "int15-q1",
        "type": "blank",
        "prompt": "The review intervals are one day, four days, and ____________ days.",
        "instruction": "Write THE NUMBER or WORD.",
        "correctAnswer": [
          "12",
          "twelve"
        ],
        "explanation": "Uchinchi takrorlash oralig'i 12 kunni tashkil qiladi.",
        "scriptEvidence": "one day, four days, and twelve days guarantees"
      }
    ]
  },
  {
    "id": "int-16",
    "level": "intermediate",
    "title": "Mijozlar bilan muammoni hal qilish (Dispute Resolution)",
    "topic": "Kompensatsiya, xizmat ko'rsatish va shartnoma",
    "accent": "en-US (Amerika)",
    "voiceGender": "female",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "Yetkazib berilmagan mahsulot bo'yicha mijoz shikoyati ko'rib chiqilmoqda.",
    "vocabulary": [
      {
        "word": "reimbursement",
        "phonetic": "/ˌriː.ɪmˈbɜːs.mənt/",
        "pos": "noun",
        "uzbek": "zararni qoplash, to'lab berish",
        "definition": "Repayment for expenses incurred",
        "example": "You are entitled to full reimbursement."
      }
    ],
    "sentences": [
      {
        "speaker": "Supervisor",
        "text": "As an apology for the four-day delay, we have refunded your shipping fee and credited thirty dollars to your store account."
      }
    ],
    "questions": [
      {
        "id": "int16-q1",
        "type": "blank",
        "prompt": "The company credited ____________ dollars to the customer's account.",
        "instruction": "Write THE NUMBER.",
        "correctAnswer": [
          "30",
          "thirty"
        ],
        "explanation": "Mijoz hisobiga 30 dollar qo'shib beriladi.",
        "scriptEvidence": "credited thirty dollars to your store account."
      }
    ]
  },
  {
    "id": "int-17",
    "level": "intermediate",
    "title": "Startap g'oyasi taqdimoti (Startup Pitch)",
    "topic": "Investitsiya, bozor ulushi va mobil ilova",
    "accent": "en-US (Amerika)",
    "voiceGender": "male",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "Investorlar oldida yangi sun'iy intellektli ta'lim platformasi taqdimoti.",
    "vocabulary": [
      {
        "word": "scalable",
        "phonetic": "/ˈskeɪ.lə.bəl/",
        "pos": "adjective",
        "uzbek": "kengayuvchan (biznes)",
        "definition": "Able to be easily expanded in size",
        "example": "Our software architecture is infinitely scalable."
      }
    ],
    "sentences": [
      {
        "speaker": "Founder",
        "text": "Our educational app reached fifty thousand active monthly users within its first six months of organic growth."
      }
    ],
    "questions": [
      {
        "id": "int17-q1",
        "type": "blank",
        "prompt": "The app reached ____________ thousand active users.",
        "instruction": "Write THE NUMBER.",
        "correctAnswer": [
          "50",
          "fifty"
        ],
        "explanation": "Foydalanuvchilar soni 50 mingga yetgan.",
        "scriptEvidence": "reached fifty thousand active monthly users"
      }
    ]
  },
  {
    "id": "int-18",
    "level": "intermediate",
    "title": "Shaharsozlik va yashil tomlar (Urban Green Roofs)",
    "topic": "Ekologiya, izolyatsiya va yomg'ir suvlari",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "Binolarning tomlariga o'simliklar ekish orqali shaharni sovutish dasturi.",
    "vocabulary": [
      {
        "word": "vegetation",
        "phonetic": "/ˌvedʒ.ɪˈteɪ.ʃən/",
        "pos": "noun",
        "uzbek": "o'simliklar qoplami",
        "definition": "Plants considered collectively",
        "example": "Rooftop vegetation absorbs solar radiation."
      }
    ],
    "sentences": [
      {
        "speaker": "Architect",
        "text": "Extensive green roofs can absorb up to seventy percent of rainfall, significantly easing pressure on municipal storm drains."
      }
    ],
    "questions": [
      {
        "id": "int18-q1",
        "type": "blank",
        "prompt": "Green roofs can absorb up to ____________ percent of rainfall.",
        "instruction": "Write THE NUMBER.",
        "correctAnswer": [
          "70",
          "seventy"
        ],
        "explanation": "Yashil tomlar yomg'ir suvining 70 foizigacha qismini o'ziga singdira oladi.",
        "scriptEvidence": "absorb up to seventy percent of rainfall"
      }
    ]
  },
  {
    "id": "int-19",
    "level": "intermediate",
    "title": "Kitob klubi muhokamasi (Book Club Discussion)",
    "topic": "Adabiyot, qahramonlar xarakteri va syujet",
    "accent": "en-US (Amerika)",
    "voiceGender": "female",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "Kitobxonlar o'rtasida zamonaviy ilmiy-fantastik roman tahlili.",
    "vocabulary": [
      {
        "word": "protagonist",
        "phonetic": "/prəˈtæɡ.ən.ɪst/",
        "pos": "noun",
        "uzbek": "bosh qahramon",
        "definition": "The leading character in a drama or novel",
        "example": "The novel's protagonist faces an agonizing ethical dilemma."
      }
    ],
    "sentences": [
      {
        "speaker": "Discussant",
        "text": "What makes chapter seven so gripping is how the author reveals that the protagonist's mentor was secretly guiding the rival faction all along."
      }
    ],
    "questions": [
      {
        "id": "int19-q1",
        "type": "blank",
        "prompt": "The key plot revelation occurs in chapter ____________.",
        "instruction": "Write THE CHAPTER NUMBER.",
        "correctAnswer": [
          "7",
          "seven",
          "Seven"
        ],
        "explanation": "Asosiy syujet burilishi 7-bobda sodir bo'ladi.",
        "scriptEvidence": "What makes chapter seven so gripping"
      }
    ]
  },
  {
    "id": "int-20",
    "level": "intermediate",
    "title": "Yovvoyi tabiatni asrash volontyori (Wildlife Volunteering)",
    "topic": "Hayvonlarni himoya qilish va o'rmon patruli",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "male",
    "audioSpeedDefault": 1,
    "duration": "3 min",
    "description": "Qo'riqxonada dengiz toshbaqalarini qutqarish loyihasi bo'yicha ko'rsatma.",
    "vocabulary": [
      {
        "word": "hatchling",
        "phonetic": "/ˈhætʃ.lɪŋ/",
        "pos": "noun",
        "uzbek": "tuxumdan chiqqan bola",
        "definition": "A young animal that has recently emerged from its egg",
        "example": "Volunteers guide sea turtle hatchlings safely to the ocean."
      }
    ],
    "sentences": [
      {
        "speaker": "Coordinator",
        "text": "Our night patrols have successfully protected over eight hundred turtle nests along the barrier beach this breeding season."
      }
    ],
    "questions": [
      {
        "id": "int20-q1",
        "type": "blank",
        "prompt": "Patrols protected over ____________ hundred turtle nests.",
        "instruction": "Write ONE NUMBER or WORD.",
        "correctAnswer": [
          "8",
          "eight",
          "800",
          "eight hundred"
        ],
        "explanation": "Patrullar 800 dan ortiq inlarni himoya qilgan.",
        "scriptEvidence": "protected over eight hundred turtle nests"
      }
    ]
  },
  {
    "id": "adv-1",
    "level": "advanced",
    "title": "Akademik ma'ruza: Okean kislotaliligi (Ocean Acidification)",
    "topic": "Dengiz biologiyasi, kimyoviy muvozanat va marjon riflari",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Universitet professori atmosferadagi karbonat angidrid gazining okeanlar kimyosiga va kalsiy-karbonat tuzilmalariga ta'sirini tushuntirmoqda.",
    "vocabulary": [
      {
        "word": "calcification",
        "phonetic": "/ˌkæl.sɪ.fɪˈkeɪ.ʃən/",
        "pos": "noun",
        "uzbek": "ohaklanish, kalsifikatsiya",
        "definition": "Process in which calcium salts build up in tissue or shells",
        "example": "Ocean acidification severely inhibits shell calcification."
      },
      {
        "word": "equilibrium",
        "phonetic": "/ˌek.wɪˈlɪb.ri.əm/",
        "pos": "noun",
        "uzbek": "kimyoviy muvozanat",
        "definition": "A state in which opposing forces are balanced",
        "example": "Marine chemical equilibrium is destabilized by excess carbon."
      }
    ],
    "sentences": [
      {
        "speaker": "Professor",
        "text": "Good morning, colleagues. Today we examine the biogeochemical impacts of anthropogenic carbon dioxide uptake by the world's oceans."
      },
      {
        "speaker": "Professor",
        "text": "Since the onset of the Industrial Revolution, marine surface waters have absorbed roughly thirty percent of human-generated emissions."
      },
      {
        "speaker": "Professor",
        "text": "This continuous influx has triggered a measurable decline in surface water pH of zero point one units."
      },
      {
        "speaker": "Professor",
        "text": "While zero point one sounds negligible to the layperson, the logarithmic nature of the pH scale represents a thirty percent increase in hydrogen ion concentration."
      },
      {
        "speaker": "Professor",
        "text": "Consequently, carbonate ion availability diminishes, directly starving reef-building corals and pteropods of the essential building blocks for calcification."
      }
    ],
    "questions": [
      {
        "id": "adv1-q1",
        "type": "blank",
        "prompt": "Surface waters have absorbed approximately ____________ percent of human emissions.",
        "instruction": "Write ONE NUMBER or WORD.",
        "correctAnswer": [
          "30",
          "thirty"
        ],
        "explanation": "Professoring so'zlariga ko'ra, okean suvlari inson chiqargan gazlarning 30 foizini o'zlashtirgan.",
        "scriptEvidence": "absorbed roughly thirty percent of human-generated emissions."
      },
      {
        "id": "adv1-q2",
        "type": "multiple_choice",
        "prompt": "What does the 0.1 decline in pH represent in hydrogen ion concentration?",
        "options": [
          {
            "key": "A",
            "text": "A 10% decrease"
          },
          {
            "key": "B",
            "text": "A 30% increase"
          },
          {
            "key": "C",
            "text": "A 50% increase"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Logarifmik shkala bo'yicha 0.1 pasayish vodorod ionlari konsentratsiyasining 30 foizga ortishini bildiradi.",
        "scriptEvidence": "represents a thirty percent increase in hydrogen ion concentration."
      }
    ]
  },
  {
    "id": "adv-2",
    "level": "advanced",
    "title": "Neyrobiologiya: Odatlarning shakllanishi siri (Neurobiology of Habits)",
    "topic": "Miya faoliyati, bazal gangliyalar va dofamin mexanizmi",
    "accent": "en-US (Amerika)",
    "voiceGender": "male",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Neyrobiolog odatlarning uch bosqichli halqasi va miyadagi avtomatlashgan neyron zanjirlarini tahlil qilmoqda.",
    "vocabulary": [
      {
        "word": "striatum",
        "phonetic": "/straɪˈeɪ.təm/",
        "pos": "noun",
        "uzbek": "talaq/chiziqli tana (miya qismi)",
        "definition": "A nucleus in the subcortical basal ganglia of the forebrain",
        "example": "The dorsal striatum consolidates procedural habit loops."
      },
      {
        "word": "consolidation",
        "phonetic": "/kənˌsɒl.ɪˈdeɪ.ʃən/",
        "pos": "noun",
        "uzbek": "mustahkamlanish, barqarorlashuv",
        "definition": "The process of making something physically or mentally stronger",
        "example": "Sleep plays an indispensable role in memory consolidation."
      }
    ],
    "sentences": [
      {
        "speaker": "Lecturer",
        "text": "Welcome back. Today we delve into the neuroanatomy of behavioral automaticity, specifically how conscious actions transition into reflexive habits."
      },
      {
        "speaker": "Lecturer",
        "text": "At the core of this transformation is the basal ganglia, an evolutionarily primitive cluster located beneath the cerebral cortex."
      },
      {
        "speaker": "Lecturer",
        "text": "When you first attempt a complex skill, like driving a manual transmission car, your prefrontal cortex operates at maximum metabolic capacity."
      },
      {
        "speaker": "Lecturer",
        "text": "However, as repetitions accumulate, the neurological workload migrates from the energy-hungry cortex to the highly efficient basal ganglia."
      },
      {
        "speaker": "Lecturer",
        "text": "This chunking mechanism compresses complex behavioral sequences into an automated three-part loop: the cue, the routine, and the neural dopamine reward."
      }
    ],
    "questions": [
      {
        "id": "adv2-q1",
        "type": "blank",
        "prompt": "The habit loop compresses behaviors into a ____________-part sequence.",
        "instruction": "Write ONE WORD or NUMBER.",
        "correctAnswer": [
          "three",
          "3",
          "Three"
        ],
        "explanation": "Odat halqasi uch qismli mexanizmdan iborat: turtki, odatdagi harakat va dofamin mukofoti.",
        "scriptEvidence": "automated three-part loop: the cue, the routine, and the neural dopamine reward."
      },
      {
        "id": "adv2-q2",
        "type": "multiple_choice",
        "prompt": "Which brain region handles complex behaviors once they become automated?",
        "options": [
          {
            "key": "A",
            "text": "The prefrontal cortex"
          },
          {
            "key": "B",
            "text": "The basal ganglia"
          },
          {
            "key": "C",
            "text": "The hippocampus"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Harakatlar avtomatlashgach, yuklama bazal gangliyalarga o'tadi.",
        "scriptEvidence": "migrates from the energy-hungry cortex to the highly efficient basal ganglia."
      }
    ]
  },
  {
    "id": "adv-3",
    "level": "advanced",
    "title": "Sun'iy intellekt va mehnat bozori (AI & Labor Economics)",
    "topic": "Avtomatlashtirish, kognitiv vazifalar va unumdorlik",
    "accent": "en-US (Amerika)",
    "voiceGender": "female",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Iqtisodchi generativ sun'iy intellektning intellektual kasblarga ta'sirini tahlil qilmoqda.",
    "vocabulary": [
      {
        "word": "displacement",
        "phonetic": "/dɪsˈpleɪs.mənt/",
        "pos": "noun",
        "uzbek": "siqib chiqarish, o'rnini egallash",
        "definition": "The enforced departure of people or jobs from a regular role",
        "example": "Technological displacement alters white-collar professions."
      },
      {
        "word": "augmentation",
        "phonetic": "/ˌɔːɡ.menˈteɪ.ʃən/",
        "pos": "noun",
        "uzbek": "kuchaytirish, to'ldirish",
        "definition": "The action or process of making or becoming greater in size or amount",
        "example": "AI functions as cognitive augmentation rather than total replacement."
      }
    ],
    "sentences": [
      {
        "speaker": "Economist",
        "text": "Unlike previous waves of industrial automation which primarily substituted manual physical labor, large language models target analytical and linguistic workflows directly."
      },
      {
        "speaker": "Economist",
        "text": "Empirical studies across corporate legal and programming sectors demonstrate average productivity gains exceeding thirty-four percent among junior associates."
      }
    ],
    "questions": [
      {
        "id": "adv3-q1",
        "type": "blank",
        "prompt": "Productivity gains among junior associates exceeded ____________ percent.",
        "instruction": "Write THE NUMBER.",
        "correctAnswer": [
          "34",
          "thirty-four"
        ],
        "explanation": "Tadqiqotlar unumdorlik o'sishi 34 foizdan oshganini ko'rsatadi.",
        "scriptEvidence": "productivity gains exceeding thirty-four percent among junior associates."
      }
    ]
  },
  {
    "id": "adv-4",
    "level": "advanced",
    "title": "Kvant hisoblash texnologiyalari (Quantum Computing)",
    "topic": "Superpozitsiya, kubitlar va kvant chalkashligi",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "male",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Kvant fizikasi professori superpozitsiya va kriptografiyadagi inqilobni tushuntirmoqda.",
    "vocabulary": [
      {
        "word": "superposition",
        "phonetic": "/ˌsuː.pə.pəˈzɪʃ.ən/",
        "pos": "noun",
        "uzbek": "superpozitsiya (bir vaqtda bir nechta holatda bo'lish)",
        "definition": "The ability of a quantum system to be in multiple states at once",
        "example": "Qubits leverage superposition to compute parallel solutions."
      }
    ],
    "sentences": [
      {
        "speaker": "Physicist",
        "text": "While a classical bit is strictly deterministic—occupying either zero or one—a quantum qubit exists as a continuous probability distribution across both states simultaneously until measured."
      }
    ],
    "questions": [
      {
        "id": "adv4-q1",
        "type": "blank",
        "prompt": "A quantum bit is known as a ____________.",
        "instruction": "Write ONE WORD.",
        "correctAnswer": [
          "qubit",
          "Qubit"
        ],
        "explanation": "Kvant biti qisqacha 'qubit' deb ataladi.",
        "scriptEvidence": "a quantum qubit exists as a continuous probability distribution"
      }
    ]
  },
  {
    "id": "adv-5",
    "level": "advanced",
    "title": "Xulq-atvor iqtisodiyoti: Turtki nazariyasi (Nudge Theory)",
    "topic": "Qaror qabul qilish, kognitiv og'ishlar va arxitektura",
    "accent": "en-US (Amerika)",
    "voiceGender": "female",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Iste'molchilar xulq-atvorini manipulyatsiyasiz ijobiy tomonga yo'naltirish mexanizmi.",
    "vocabulary": [
      {
        "word": "heuristic",
        "phonetic": "/hjʊəˈrɪs.tɪk/",
        "pos": "noun",
        "uzbek": "evristik qoida (zehniy tezkor usul)",
        "definition": "A mental shortcut that allows people to solve problems quickly",
        "example": "Availability heuristics often distort risk perception."
      }
    ],
    "sentences": [
      {
        "speaker": "Professor",
        "text": "By changing the default choice for retirement savings from opt-in to automatic enrollment, corporate participation rates surged from forty percent to over eighty-five percent."
      }
    ],
    "questions": [
      {
        "id": "adv5-q1",
        "type": "blank",
        "prompt": "Automatic enrollment raised participation rates to over ____________ percent.",
        "instruction": "Write THE NUMBER.",
        "correctAnswer": [
          "85",
          "eighty-five"
        ],
        "explanation": "Ishtirok etish darajasi 85 foizdan oshgani aytiladi.",
        "scriptEvidence": "surged from forty percent to over eighty-five percent."
      }
    ]
  },
  {
    "id": "adv-6",
    "level": "advanced",
    "title": "Mesopotamiya sug'orish tizimi arxeologiyasi (Mesopotamian Irrigation)",
    "topic": "Qadimgi muhandislik, sho'rlanish va sivilizatsiyalar inqirozi",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "male",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Dajla va Furot daryolari oralig'idagi sun'iy kanallar va tuproq sho'rlanishi oqibatlari.",
    "vocabulary": [
      {
        "word": "salinization",
        "phonetic": "/ˌsæl.ɪ.naɪˈzeɪ.ʃən/",
        "pos": "noun",
        "uzbek": "sho'rlanish (tuproq)",
        "definition": "The process of increasing the salt content of soil",
        "example": "Progressive soil salinization crippled ancient Sumerian wheat harvests."
      }
    ],
    "sentences": [
      {
        "speaker": "Historian",
        "text": "Archaeological pollen analyses reveal that by twenty-one hundred BC, rising water tables in southern Iraq drove soil salinity so high that farmers were forced to replace wheat entirely with salt-tolerant barley."
      }
    ],
    "questions": [
      {
        "id": "adv6-q1",
        "type": "blank",
        "prompt": "Sumerian farmers replaced wheat with salt-tolerant ____________.",
        "instruction": "Write ONE WORD.",
        "correctAnswer": [
          "barley",
          "Barley"
        ],
        "explanation": "Dehqonlar bug'doyni sho'rga chidamli arpa (barley) bilan almashtirishga majbur bo'lgan.",
        "scriptEvidence": "replace wheat entirely with salt-tolerant barley."
      }
    ]
  },
  {
    "id": "adv-7",
    "level": "advanced",
    "title": "Bioxilma-xillik va asosiy turlar (Keystone Species)",
    "topic": "Trofik kaskadlar, ekotizim muvozanati va yirtqichlar",
    "accent": "en-US (Amerika)",
    "voiceGender": "female",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Yelloustoun milliy bog'iga bo'rilar qaytarilgach, butun daryo o'zanlari va o'rmonlar qanday tiklanganligi.",
    "vocabulary": [
      {
        "word": "trophic",
        "phonetic": "/ˈtrəʊ.fɪk/",
        "pos": "adjective",
        "uzbek": "oziqlanish zanjiriga oid",
        "definition": "Relating to feeding and nutrition in food webs",
        "example": "Top predators trigger top-down trophic cascades."
      }
    ],
    "sentences": [
      {
        "speaker": "Ecologist",
        "text": "When apex wolves were reintroduced to Yellowstone in 1995, their predatory pressure altered deer grazing geography so profoundly that regenerated riverbank willows stabilized eroding riverbeds within a decade."
      }
    ],
    "questions": [
      {
        "id": "adv7-q1",
        "type": "blank",
        "prompt": "Wolves were reintroduced to Yellowstone in the year ____________.",
        "instruction": "Write THE YEAR.",
        "correctAnswer": [
          "1995"
        ],
        "explanation": "Bo'rilar Yelloustoun bog'iga 1995 yilda qaytarilgan.",
        "scriptEvidence": "reintroduced to Yellowstone in 1995"
      }
    ]
  },
  {
    "id": "adv-8",
    "level": "advanced",
    "title": "Kognitiv psixologiya: Xotira konsolidatsiyasi (Memory)",
    "topic": "Gippokamp, sinapslar va chuqur uyqu fazalari",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Uyqu paytida kun davomida olingan ma'lumotlarning uzoq muddatli xotiraga o'tish mexanizmi.",
    "vocabulary": [
      {
        "word": "hippocampus",
        "phonetic": "/ˌhɪp.əˈkæm.pəs/",
        "pos": "noun",
        "uzbek": "gippokamp (miya xotira markazi)",
        "definition": "A neural structure in the temporal lobe essential for forming memories",
        "example": "The hippocampus acts as a temporary short-term buffer."
      }
    ],
    "sentences": [
      {
        "speaker": "Neuroscientist",
        "text": "During stage three non-REM slow-wave sleep, high-frequency neural oscillations called sharp-wave ripples replay recent experiences, transferring encoded memories from the hippocampus to the neocortex."
      }
    ],
    "questions": [
      {
        "id": "adv8-q1",
        "type": "blank",
        "prompt": "Memories are transferred from the hippocampus to the ____________.",
        "instruction": "Write ONE WORD.",
        "correctAnswer": [
          "neocortex",
          "Neocortex"
        ],
        "explanation": "Xotira gippokampdan neokorteksga uzatiladi.",
        "scriptEvidence": "from the hippocampus to the neocortex."
      }
    ]
  },
  {
    "id": "adv-9",
    "level": "advanced",
    "title": "Shahar issiqlik orollari (Urban Heat Islands)",
    "topic": "Albedo effekti, asfalt va iqlimiy modellashtirish",
    "accent": "en-US (Amerika)",
    "voiceGender": "male",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Shahar infratuzilmasidagi qorong'i yuzalar qanday qilib tungi haroratni qishloq joylariga nisbatan sezilarli darajada oshiradi.",
    "vocabulary": [
      {
        "word": "albedo",
        "phonetic": "/ælˈbiː.dəʊ/",
        "pos": "noun",
        "uzbek": "albedo (qaytarish qobiliyati)",
        "definition": "The proportion of incident light that is reflected by a surface",
        "example": "Light-colored pavements increase urban surface albedo."
      }
    ],
    "sentences": [
      {
        "speaker": "Climatologist",
        "text": "Dense metropolitan centers can record nocturnal ambient temperatures up to seven degrees Celsius warmer than adjacent rural grasslands due to thermal mass absorption in concrete."
      }
    ],
    "questions": [
      {
        "id": "adv9-q1",
        "type": "blank",
        "prompt": "Metropolitan centers can be up to ____________ degrees Celsius warmer at night.",
        "instruction": "Write THE NUMBER.",
        "correctAnswer": [
          "7",
          "seven",
          "Seven"
        ],
        "explanation": "Shaharlarda tungi harorat 7 darajagacha balandroq bo'lishi mumkin.",
        "scriptEvidence": "ambient temperatures up to seven degrees Celsius warmer"
      }
    ]
  },
  {
    "id": "adv-10",
    "level": "advanced",
    "title": "Tilshunoslik: Tillar evolyutsiyasi (Language Evolution)",
    "topic": "Yo'qolib borayotgan tillar, fonetika va madaniy meros",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Dunyo bo'yicha har ikki haftada bitta til yo'qolib ketishi va uni saqlab qolish texnologiyalari.",
    "vocabulary": [
      {
        "word": "indigenous",
        "phonetic": "/ɪnˈdɪdʒ.ɪ.nəs/",
        "pos": "adjective",
        "uzbek": "mahalliy, tubjoy",
        "definition": "Originating or occurring naturally in a particular place",
        "example": "Preserving indigenous linguistic diversity protects ecological knowledge."
      }
    ],
    "sentences": [
      {
        "speaker": "Linguist",
        "text": "Of the approximately seven thousand spoken languages in existence today, sociolinguists forecast that over fifty percent will fall completely silent by the end of this century."
      }
    ],
    "questions": [
      {
        "id": "adv10-q1",
        "type": "blank",
        "prompt": "Over ____________ percent of languages are forecast to become extinct by 2100.",
        "instruction": "Write THE NUMBER.",
        "correctAnswer": [
          "50",
          "fifty"
        ],
        "explanation": "Mavjud tillarning 50 foizdan ortig'i yo'qolib ketishi xavfi bor.",
        "scriptEvidence": "forecast that over fifty percent will fall completely silent"
      }
    ]
  },
  {
    "id": "adv-11",
    "level": "advanced",
    "title": "CRISPR texnologiyasi va bioetika (Gene Editing Bioethics)",
    "topic": "Genetik tahrirlash, irsiy kasalliklar va etika",
    "accent": "en-US (Amerika)",
    "voiceGender": "female",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Genomni nishonga olib tahrirlovchi CRISPR-Cas9 vositasining tibbiy imkoniyatlari va ma'naviy chegaralari.",
    "vocabulary": [
      {
        "word": "germline",
        "phonetic": "/ˈdʒɜːm.laɪn/",
        "pos": "noun",
        "uzbek": "irsiy hujayralar (kelgusi avlodga o'tuvchi)",
        "definition": "The cellular lineage of sexually reproducing organisms producing gametes",
        "example": "Modifying the human germline creates transmissible genetic alterations."
      }
    ],
    "sentences": [
      {
        "speaker": "Bioethicist",
        "text": "While somatic gene therapy treats existing tissue without passing alterations to descendants, germline modification permanently introduces engineered sequences into future human generations."
      }
    ],
    "questions": [
      {
        "id": "adv11-q1",
        "type": "blank",
        "prompt": "Modifying the ____________ introduces permanent genetic changes to future generations.",
        "instruction": "Write ONE WORD.",
        "correctAnswer": [
          "germline",
          "Germline"
        ],
        "explanation": "Germline (irsiy hujayralar)ni o'zgartirish kelgusi avlodlarga uzatiladi.",
        "scriptEvidence": "germline modification permanently introduces engineered sequences"
      }
    ]
  },
  {
    "id": "adv-12",
    "level": "advanced",
    "title": "Global ta'minot zanjirlari (Supply Chain Economics)",
    "topic": "Logistika, yarimo'tkazgichlar va xavf tahlili",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "male",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Tayvan bo'g'ozi va yarimo'tkazgich mikrosxemalariga bog'liq jahon iqtisodiyoti muammolari.",
    "vocabulary": [
      {
        "word": "bottleneck",
        "phonetic": "/ˈbɒt.əl.nek/",
        "pos": "noun",
        "uzbek": "tor joy, to'siq bo'luvchi nuqta",
        "definition": "A point of congestion in a system that impedes overall progress",
        "example": "Semiconductor lithography remains a singular global bottleneck."
      }
    ],
    "sentences": [
      {
        "speaker": "Analyst",
        "text": "Over seventy-five percent of the world's most advanced microchips under seven nanometers are fabricated within a single geographical territory in East Asia."
      }
    ],
    "questions": [
      {
        "id": "adv12-q1",
        "type": "blank",
        "prompt": "Over ____________ percent of advanced chips are fabricated in one territory.",
        "instruction": "Write THE NUMBER.",
        "correctAnswer": [
          "75",
          "seventy-five"
        ],
        "explanation": "Eng ilg'or chiplarning 75 foizdan ortig'i bitta mintaqada ishlab chiqariladi.",
        "scriptEvidence": "Over seventy-five percent of the world's most advanced microchips"
      }
    ]
  },
  {
    "id": "adv-13",
    "level": "advanced",
    "title": "Qora tuynuklar va gravitatsion to'lqinlar (Astrophysics)",
    "topic": "LIGO observatoriyasi, umumiy nisbiylik nazariyasi va fazo-vaqt",
    "accent": "en-US (Amerika)",
    "voiceGender": "male",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Eynshteynning fazo-vaqt to'lqinlari kashfiyoti va ikkita qora tuynuk to'qnashuvi.",
    "vocabulary": [
      {
        "word": "interferometer",
        "phonetic": "/ˌɪn.tə.fəˈrɒm.ɪ.tər/",
        "pos": "noun",
        "uzbek": "interferometr (aniq o'lchash asbobi)",
        "definition": "An instrument that uses interference of waves for precise measurement",
        "example": "The laser interferometer measures changes smaller than a proton."
      }
    ],
    "sentences": [
      {
        "speaker": "Astrophysicist",
        "text": "When two binary black holes merged 1.3 billion light years away, the resulting gravitational waves distorted the four-kilometer laser arms of the LIGO detector by less than one-ten-thousandth the diameter of a single proton."
      }
    ],
    "questions": [
      {
        "id": "adv13-q1",
        "type": "blank",
        "prompt": "The black hole merger occurred ____________ billion light years away.",
        "instruction": "Write THE NUMBER.",
        "correctAnswer": [
          "1.3"
        ],
        "explanation": "Qora tuynuklar to'qnashuvi 1.3 milliard yorug'lik yili masofasida sodir bo'lgan.",
        "scriptEvidence": "merged 1.3 billion light years away"
      }
    ]
  },
  {
    "id": "adv-14",
    "level": "advanced",
    "title": "Ong falsafasi va sun'iy ong (Machine Consciousness)",
    "topic": "Subyektiv tajriba, Tyuring testi va ong siri",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Qanday qilib hisoblash kuchi his-tuyg'u va ichki tajribadan farq qilishi bo'yicha falsafiy munozara.",
    "vocabulary": [
      {
        "word": "qualia",
        "phonetic": "/ˈkwɑː.li.ə/",
        "pos": "noun",
        "uzbek": "kvaliya (ichki subyektiv his-tuyg'ular)",
        "definition": "Individual instances of subjective, conscious experience",
        "example": "Explaining qualia is widely referred to as the hard problem of consciousness."
      }
    ],
    "sentences": [
      {
        "speaker": "Philosopher",
        "text": "Even if an artificial neural network demonstrates flawless linguistic fluency in conversation, that syntactic manipulation tells us nothing about whether there is any subjective internal experience—what philosophers designate as qualia."
      }
    ],
    "questions": [
      {
        "id": "adv14-q1",
        "type": "blank",
        "prompt": "Philosophers call individual subjective experiences ____________.",
        "instruction": "Write ONE WORD.",
        "correctAnswer": [
          "qualia",
          "Qualia"
        ],
        "explanation": "Falsafada ichki subyektiv tuyg'ular 'qualia' deb yuritiladi.",
        "scriptEvidence": "what philosophers designate as qualia."
      }
    ]
  },
  {
    "id": "adv-15",
    "level": "advanced",
    "title": "Yashil vodorod energiyasi (Green Hydrogen)",
    "topic": "Elektroliz, og'ir sanoat va dekarbonizatsiya",
    "accent": "en-US (Amerika)",
    "voiceGender": "female",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Po'lat quyish va aviatsiyani toza energiyaga o'tkazishda vodorodning o'rni.",
    "vocabulary": [
      {
        "word": "electrolysis",
        "phonetic": "/ɪˌlekˈtrɒl.ə.sɪs/",
        "pos": "noun",
        "uzbek": "elektroliz",
        "definition": "Chemical decomposition produced by passing an electric current through liquid",
        "example": "Water electrolysis powered by offshore wind generates green hydrogen."
      }
    ],
    "sentences": [
      {
        "speaker": "Engineer",
        "text": "Green hydrogen offers the singular viable decarbonization pathway for heavy industrial manufacturing like steel-making, which demands operational temperatures exceeding fifteen hundred degrees Celsius."
      }
    ],
    "questions": [
      {
        "id": "adv15-q1",
        "type": "blank",
        "prompt": "Steel manufacturing requires temperatures exceeding ____________ hundred degrees Celsius.",
        "instruction": "Write THE NUMBER.",
        "correctAnswer": [
          "15",
          "fifteen",
          "1500",
          "fifteen hundred"
        ],
        "explanation": "Po'lat ishlab chiqarish 1500 darajadan yuqori haroratni talab qiladi.",
        "scriptEvidence": "demands operational temperatures exceeding fifteen hundred degrees Celsius."
      }
    ]
  },
  {
    "id": "adv-16",
    "level": "advanced",
    "title": "Ijtimoiy tarmoqlar va qutblanish (Algorithmic Polarization)",
    "topic": "Tavsiya algoritmlari, g'azab iqtisodiyoti va sotsiologiya",
    "accent": "en-US (Amerika)",
    "voiceGender": "male",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Foydalanuvchini platformada ko'proq ushlab turish uchun g'azab uyg'otuvchi kontentning ko'rsatilishi.",
    "vocabulary": [
      {
        "word": "polarization",
        "phonetic": "/ˌpəʊ.lər.aɪˈzeɪ.ʃən/",
        "pos": "noun",
        "uzbek": "qutblanish, qarama-qarshilik",
        "definition": "Division into two sharply contrasting groups or sets of opinions",
        "example": "Algorithmic feedback loops accelerate political polarization."
      }
    ],
    "sentences": [
      {
        "speaker": "Sociologist",
        "text": "By prioritizing engagement metrics above truth or nuanced debate, feed optimization algorithms systematically boost morally outraged content, which spreads six times faster than verified factual reports."
      }
    ],
    "questions": [
      {
        "id": "adv16-q1",
        "type": "blank",
        "prompt": "Outraged content spreads ____________ times faster than verified reports.",
        "instruction": "Write ONE NUMBER or WORD.",
        "correctAnswer": [
          "6",
          "six",
          "Six"
        ],
        "explanation": "G'azab uyg'otuvchi xabarlar faktlarga qaraganda 6 barobar tezroq tarqaladi.",
        "scriptEvidence": "spreads six times faster than verified factual reports."
      }
    ]
  },
  {
    "id": "adv-17",
    "level": "advanced",
    "title": "Seysmologiya: Zilzilalar tahlili (Seismic Forecasting)",
    "topic": "Tektonika, yoriqlar va sun'iy yo'ldosh radarlari",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "male",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Sun'iy yo'ldosh interferometriyasi yordamida yer qobig'idagi zo'riqishlarni kuzatish.",
    "vocabulary": [
      {
        "word": "subduction",
        "phonetic": "/səbˈdʌk.ʃən/",
        "pos": "noun",
        "uzbek": "subduksiya (bir plitaning ikkinchisi ostiga kirishi)",
        "definition": "The sideways and downward movement of the edge of a plate beneath another",
        "example": "Subduction zones produce the planet's most cataclysmic megathrust earthquakes."
      }
    ],
    "sentences": [
      {
        "speaker": "Geologist",
        "text": "Satellite radar interferometry can now monitor crustal strain accumulation down to millimeter precision along active fault lines, highlighting stress concentrations years before catastrophic rupture occurs."
      }
    ],
    "questions": [
      {
        "id": "adv17-q1",
        "type": "blank",
        "prompt": "Satellite radar monitors crustal strain down to ____________ precision.",
        "instruction": "Write ONE WORD.",
        "correctAnswer": [
          "millimeter",
          "millimetre"
        ],
        "explanation": "Yer qobig'idagi o'zgarishlar millimetrgacha aniqlikda o'lchanadi.",
        "scriptEvidence": "accumulation down to millimeter precision"
      }
    ]
  },
  {
    "id": "adv-18",
    "level": "advanced",
    "title": "Qadimgi iqlimshunoslik: Muz yadrolari (Paleoclimatology)",
    "topic": "Antarktida muzliklari, izotoplar va tarixiy atmosfera",
    "accent": "en-US (Amerika)",
    "voiceGender": "female",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Antarktidadagi uch kilometrlik muz burg'ilashlari orqali 800 ming yillik iqlim tarixini o'rganish.",
    "vocabulary": [
      {
        "word": "isotope",
        "phonetic": "/ˈaɪ.sə.təʊp/",
        "pos": "noun",
        "uzbek": "izotop",
        "definition": "Each of two or more forms of the same element",
        "example": "Oxygen-18 isotope ratios reconstruct past planetary temperatures."
      }
    ],
    "sentences": [
      {
        "speaker": "Researcher",
        "text": "By analyzing air bubbles trapped inside Antarctic ice cores drilled three kilometers deep, paleoclimatologists have reconstructed continuous greenhouse gas atmospheric records extending back eight hundred thousand years."
      }
    ],
    "questions": [
      {
        "id": "adv18-q1",
        "type": "blank",
        "prompt": "Ice cores have reconstructed atmospheric records back ____________ hundred thousand years.",
        "instruction": "Write ONE NUMBER or WORD.",
        "correctAnswer": [
          "8",
          "eight",
          "800",
          "eight hundred"
        ],
        "explanation": "Muz yadrolari 800 ming yillik atmosferani tiklashga imkon berdi.",
        "scriptEvidence": "extending back eight hundred thousand years."
      }
    ]
  },
  {
    "id": "adv-19",
    "level": "advanced",
    "title": "Neyroplastiklik va kattalarda o'rganish (Neuroplasticity)",
    "topic": "Miyaning moslashuvchanligi, miyelinlanish va kognitiv zahira",
    "accent": "en-GB (Britaniya)",
    "voiceGender": "female",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Qadimgi dogma inkor etildi: inson miyasi keksa yoshda ham yangi neyron zanjirlarini qura oladi.",
    "vocabulary": [
      {
        "word": "myelination",
        "phonetic": "/ˌmaɪ.ə.lɪˈneɪ.ʃən/",
        "pos": "noun",
        "uzbek": "miyelinlanish (nerv tolalari izolyatsiyasi)",
        "definition": "Formation of a fatty myelin sheath around nerve fibers",
        "example": "Repetitive mental practice accelerates axonal myelination."
      }
    ],
    "sentences": [
      {
        "speaker": "Neurologist",
        "text": "Adult neurogenesis and synaptogenesis persist throughout the human lifespan; rigorous foreign language acquisition physically expands hippocampal volume and fortifies white matter integrity well into the eighth decade of life."
      }
    ],
    "questions": [
      {
        "id": "adv19-q1",
        "type": "blank",
        "prompt": "Language acquisition physically expands ____________ volume.",
        "instruction": "Write ONE WORD.",
        "correctAnswer": [
          "hippocampal",
          "hippocampus"
        ],
        "explanation": "Xorijiy til o'rganish gippokamp hajmini kattalashtiradi.",
        "scriptEvidence": "physically expands hippocampal volume"
      }
    ]
  },
  {
    "id": "adv-20",
    "level": "advanced",
    "title": "Qayta tiklanuvchi qishloq xo'jaligi (Regenerative Agriculture)",
    "topic": "Tuproq mikrobiomi, uglerod sekvestratsiyasi va barqarorlik",
    "accent": "en-US (Amerika)",
    "voiceGender": "male",
    "audioSpeedDefault": 1.05,
    "duration": "4 min",
    "description": "Kimyoviy o'g'itlardan voz kechib, tuproqdagi mikroblar va zamburug'lar tarmoqlarini jonlantirish.",
    "vocabulary": [
      {
        "word": "mycorrhizal",
        "phonetic": "/ˌmaɪ.kəˈraɪ.zəl/",
        "pos": "adjective",
        "uzbek": "mikorizali (zamburug' va ildiz simbiozi)",
        "definition": "Relating to a symbiotic association between a fungus and plant roots",
        "example": "Mycorrhizal fungal networks shuttle nutrients between trees."
      }
    ],
    "sentences": [
      {
        "speaker": "Agronomist",
        "text": "By eliminating mechanical tilling and introducing diverse cover crops, regenerative farming techniques can sequester up to three metric tons of atmospheric carbon per hectare of topsoil annually."
      }
    ],
    "questions": [
      {
        "id": "adv20-q1",
        "type": "blank",
        "prompt": "Regenerative farming can sequester up to ____________ metric tons of carbon per hectare.",
        "instruction": "Write ONE NUMBER or WORD.",
        "correctAnswer": [
          "3",
          "three",
          "Three"
        ],
        "explanation": "Gektariga 3 tonnagacha karbonat angidrid saqlash imkoniyati mavjud.",
        "scriptEvidence": "sequester up to three metric tons of atmospheric carbon per hectare"
      }
    ]
  }
]
};

// Browser and Node.js export compatibility
if (typeof window !== 'undefined') {
  window.LISTENING_DATA = LISTENING_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LISTENING_DATA };
}
