/**
 * 20 Advanced (C1 / Academic) Lessons Generator
 */

const advancedLessons = [
  // 1. Ocean Acidification (Existing adv-1)
  {
    id: "adv-1",
    level: "advanced",
    title: "Akademik ma'ruza: Okean kislotaliligi (Ocean Acidification)",
    topic: "Dengiz biologiyasi, kimyoviy muvozanat va marjon riflari",
    accent: "en-GB (Britaniya)",
    voiceGender: "female",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Universitet professori atmosferadagi karbonat angidrid gazining okeanlar kimyosiga va kalsiy-karbonat tuzilmalariga ta'sirini tushuntirmoqda.",
    vocabulary: [
      { word: "calcification", phonetic: "/ˌkæl.sɪ.fɪˈkeɪ.ʃən/", pos: "noun", uzbek: "ohaklanish, kalsifikatsiya", definition: "Process in which calcium salts build up in tissue or shells", example: "Ocean acidification severely inhibits shell calcification." },
      { word: "equilibrium", phonetic: "/ˌek.wɪˈlɪb.ri.əm/", pos: "noun", uzbek: "kimyoviy muvozanat", definition: "A state in which opposing forces are balanced", example: "Marine chemical equilibrium is destabilized by excess carbon." }
    ],
    sentences: [
      { speaker: "Professor", text: "Good morning, colleagues. Today we examine the biogeochemical impacts of anthropogenic carbon dioxide uptake by the world's oceans." },
      { speaker: "Professor", text: "Since the onset of the Industrial Revolution, marine surface waters have absorbed roughly thirty percent of human-generated emissions." },
      { speaker: "Professor", text: "This continuous influx has triggered a measurable decline in surface water pH of zero point one units." },
      { speaker: "Professor", text: "While zero point one sounds negligible to the layperson, the logarithmic nature of the pH scale represents a thirty percent increase in hydrogen ion concentration." },
      { speaker: "Professor", text: "Consequently, carbonate ion availability diminishes, directly starving reef-building corals and pteropods of the essential building blocks for calcification." }
    ],
    questions: [
      {
        id: "adv1-q1",
        type: "blank",
        prompt: "Surface waters have absorbed approximately ____________ percent of human emissions.",
        instruction: "Write ONE NUMBER or WORD.",
        correctAnswer: ["30", "thirty"],
        explanation: "Professoring so'zlariga ko'ra, okean suvlari inson chiqargan gazlarning 30 foizini o'zlashtirgan.",
        scriptEvidence: "absorbed roughly thirty percent of human-generated emissions."
      },
      {
        id: "adv1-q2",
        type: "multiple_choice",
        prompt: "What does the 0.1 decline in pH represent in hydrogen ion concentration?",
        options: [
          { key: "A", text: "A 10% decrease" },
          { key: "B", text: "A 30% increase" },
          { key: "C", text: "A 50% increase" }
        ],
        correctAnswer: "B",
        explanation: "Logarifmik shkala bo'yicha 0.1 pasayish vodorod ionlari konsentratsiyasining 30 foizga ortishini bildiradi.",
        scriptEvidence: "represents a thirty percent increase in hydrogen ion concentration."
      }
    ]
  },

  // 2. Neurobiology of Habits (Existing adv-2)
  {
    id: "adv-2",
    level: "advanced",
    title: "Neyrobiologiya: Odatlarning shakllanishi siri (Neurobiology of Habits)",
    topic: "Miya faoliyati, bazal gangliyalar va dofamin mexanizmi",
    accent: "en-US (Amerika)",
    voiceGender: "male",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Neyrobiolog odatlarning uch bosqichli halqasi va miyadagi avtomatlashgan neyron zanjirlarini tahlil qilmoqda.",
    vocabulary: [
      { word: "striatum", phonetic: "/straɪˈeɪ.təm/", pos: "noun", uzbek: "talaq/chiziqli tana (miya qismi)", definition: "A nucleus in the subcortical basal ganglia of the forebrain", example: "The dorsal striatum consolidates procedural habit loops." },
      { word: "consolidation", phonetic: "/kənˌsɒl.ɪˈdeɪ.ʃən/", pos: "noun", uzbek: "mustahkamlanish, barqarorlashuv", definition: "The process of making something physically or mentally stronger", example: "Sleep plays an indispensable role in memory consolidation." }
    ],
    sentences: [
      { speaker: "Lecturer", text: "Welcome back. Today we delve into the neuroanatomy of behavioral automaticity, specifically how conscious actions transition into reflexive habits." },
      { speaker: "Lecturer", text: "At the core of this transformation is the basal ganglia, an evolutionarily primitive cluster located beneath the cerebral cortex." },
      { speaker: "Lecturer", text: "When you first attempt a complex skill, like driving a manual transmission car, your prefrontal cortex operates at maximum metabolic capacity." },
      { speaker: "Lecturer", text: "However, as repetitions accumulate, the neurological workload migrates from the energy-hungry cortex to the highly efficient basal ganglia." },
      { speaker: "Lecturer", text: "This chunking mechanism compresses complex behavioral sequences into an automated three-part loop: the cue, the routine, and the neural dopamine reward." }
    ],
    questions: [
      {
        id: "adv2-q1",
        type: "blank",
        prompt: "The habit loop compresses behaviors into a ____________-part sequence.",
        instruction: "Write ONE WORD or NUMBER.",
        correctAnswer: ["three", "3", "Three"],
        explanation: "Odat halqasi uch qismli mexanizmdan iborat: turtki, odatdagi harakat va dofamin mukofoti.",
        scriptEvidence: "automated three-part loop: the cue, the routine, and the neural dopamine reward."
      },
      {
        id: "adv2-q2",
        type: "multiple_choice",
        prompt: "Which brain region handles complex behaviors once they become automated?",
        options: [
          { key: "A", text: "The prefrontal cortex" },
          { key: "B", text: "The basal ganglia" },
          { key: "C", text: "The hippocampus" }
        ],
        correctAnswer: "B",
        explanation: "Harakatlar avtomatlashgach, yuklama bazal gangliyalarga o'tadi.",
        scriptEvidence: "migrates from the energy-hungry cortex to the highly efficient basal ganglia."
      }
    ]
  },

  // 3. AI & The Future of Labor Markets
  {
    id: "adv-3",
    level: "advanced",
    title: "Sun'iy intellekt va mehnat bozori (AI & Labor Economics)",
    topic: "Avtomatlashtirish, kognitiv vazifalar va unumdorlik",
    accent: "en-US (Amerika)",
    voiceGender: "female",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Iqtisodchi generativ sun'iy intellektning intellektual kasblarga ta'sirini tahlil qilmoqda.",
    vocabulary: [
      { word: "displacement", phonetic: "/dɪsˈpleɪs.mənt/", pos: "noun", uzbek: "siqib chiqarish, o'rnini egallash", definition: "The enforced departure of people or jobs from a regular role", example: "Technological displacement alters white-collar professions." },
      { word: "augmentation", phonetic: "/ˌɔːɡ.menˈteɪ.ʃən/", pos: "noun", uzbek: "kuchaytirish, to'ldirish", definition: "The action or process of making or becoming greater in size or amount", example: "AI functions as cognitive augmentation rather than total replacement." }
    ],
    sentences: [
      { speaker: "Economist", text: "Unlike previous waves of industrial automation which primarily substituted manual physical labor, large language models target analytical and linguistic workflows directly." },
      { speaker: "Economist", text: "Empirical studies across corporate legal and programming sectors demonstrate average productivity gains exceeding thirty-four percent among junior associates." }
    ],
    questions: [
      {
        id: "adv3-q1",
        type: "blank",
        prompt: "Productivity gains among junior associates exceeded ____________ percent.",
        instruction: "Write THE NUMBER.",
        correctAnswer: ["34", "thirty-four"],
        explanation: "Tadqiqotlar unumdorlik o'sishi 34 foizdan oshganini ko'rsatadi.",
        scriptEvidence: "productivity gains exceeding thirty-four percent among junior associates."
      }
    ]
  },

  // 4. Quantum Computing Principles
  {
    id: "adv-4",
    level: "advanced",
    title: "Kvant hisoblash texnologiyalari (Quantum Computing)",
    topic: "Superpozitsiya, kubitlar va kvant chalkashligi",
    accent: "en-GB (Britaniya)",
    voiceGender: "male",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Kvant fizikasi professori superpozitsiya va kriptografiyadagi inqilobni tushuntirmoqda.",
    vocabulary: [
      { word: "superposition", phonetic: "/ˌsuː.pə.pəˈzɪʃ.ən/", pos: "noun", uzbek: "superpozitsiya (bir vaqtda bir nechta holatda bo'lish)", definition: "The ability of a quantum system to be in multiple states at once", example: "Qubits leverage superposition to compute parallel solutions." }
    ],
    sentences: [
      { speaker: "Physicist", text: "While a classical bit is strictly deterministic—occupying either zero or one—a quantum qubit exists as a continuous probability distribution across both states simultaneously until measured." }
    ],
    questions: [
      {
        id: "adv4-q1",
        type: "blank",
        prompt: "A quantum bit is known as a ____________.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["qubit", "Qubit"],
        explanation: "Kvant biti qisqacha 'qubit' deb ataladi.",
        scriptEvidence: "a quantum qubit exists as a continuous probability distribution"
      }
    ]
  },

  // 5. Behavioral Economics & Nudge Theory
  {
    id: "adv-5",
    level: "advanced",
    title: "Xulq-atvor iqtisodiyoti: Turtki nazariyasi (Nudge Theory)",
    topic: "Qaror qabul qilish, kognitiv og'ishlar va arxitektura",
    accent: "en-US (Amerika)",
    voiceGender: "female",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Iste'molchilar xulq-atvorini manipulyatsiyasiz ijobiy tomonga yo'naltirish mexanizmi.",
    vocabulary: [
      { word: "heuristic", phonetic: "/hjʊəˈrɪs.tɪk/", pos: "noun", uzbek: "evristik qoida (zehniy tezkor usul)", definition: "A mental shortcut that allows people to solve problems quickly", example: "Availability heuristics often distort risk perception." }
    ],
    sentences: [
      { speaker: "Professor", text: "By changing the default choice for retirement savings from opt-in to automatic enrollment, corporate participation rates surged from forty percent to over eighty-five percent." }
    ],
    questions: [
      {
        id: "adv5-q1",
        type: "blank",
        prompt: "Automatic enrollment raised participation rates to over ____________ percent.",
        instruction: "Write THE NUMBER.",
        correctAnswer: ["85", "eighty-five"],
        explanation: "Ishtirok etish darajasi 85 foizdan oshgani aytiladi.",
        scriptEvidence: "surged from forty percent to over eighty-five percent."
      }
    ]
  },

  // 6. Archaeology of Mesopotamian Irrigation
  {
    id: "adv-6",
    level: "advanced",
    title: "Mesopotamiya sug'orish tizimi arxeologiyasi (Mesopotamian Irrigation)",
    topic: "Qadimgi muhandislik, sho'rlanish va sivilizatsiyalar inqirozi",
    accent: "en-GB (Britaniya)",
    voiceGender: "male",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Dajla va Furot daryolari oralig'idagi sun'iy kanallar va tuproq sho'rlanishi oqibatlari.",
    vocabulary: [
      { word: "salinization", phonetic: "/ˌsæl.ɪ.naɪˈzeɪ.ʃən/", pos: "noun", uzbek: "sho'rlanish (tuproq)", definition: "The process of increasing the salt content of soil", example: "Progressive soil salinization crippled ancient Sumerian wheat harvests." }
    ],
    sentences: [
      { speaker: "Historian", text: "Archaeological pollen analyses reveal that by twenty-one hundred BC, rising water tables in southern Iraq drove soil salinity so high that farmers were forced to replace wheat entirely with salt-tolerant barley." }
    ],
    questions: [
      {
        id: "adv6-q1",
        type: "blank",
        prompt: "Sumerian farmers replaced wheat with salt-tolerant ____________.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["barley", "Barley"],
        explanation: "Dehqonlar bug'doyni sho'rga chidamli arpa (barley) bilan almashtirishga majbur bo'lgan.",
        scriptEvidence: "replace wheat entirely with salt-tolerant barley."
      }
    ]
  },

  // 7. Biodiversity Loss & Keystone Species
  {
    id: "adv-7",
    level: "advanced",
    title: "Bioxilma-xillik va asosiy turlar (Keystone Species)",
    topic: "Trofik kaskadlar, ekotizim muvozanati va yirtqichlar",
    accent: "en-US (Amerika)",
    voiceGender: "female",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Yelloustoun milliy bog'iga bo'rilar qaytarilgach, butun daryo o'zanlari va o'rmonlar qanday tiklanganligi.",
    vocabulary: [
      { word: "trophic", phonetic: "/ˈtrəʊ.fɪk/", pos: "adjective", uzbek: "oziqlanish zanjiriga oid", definition: "Relating to feeding and nutrition in food webs", example: "Top predators trigger top-down trophic cascades." }
    ],
    sentences: [
      { speaker: "Ecologist", text: "When apex wolves were reintroduced to Yellowstone in 1995, their predatory pressure altered deer grazing geography so profoundly that regenerated riverbank willows stabilized eroding riverbeds within a decade." }
    ],
    questions: [
      {
        id: "adv7-q1",
        type: "blank",
        prompt: "Wolves were reintroduced to Yellowstone in the year ____________.",
        instruction: "Write THE YEAR.",
        correctAnswer: ["1995"],
        explanation: "Bo'rilar Yelloustoun bog'iga 1995 yilda qaytarilgan.",
        scriptEvidence: "reintroduced to Yellowstone in 1995"
      }
    ]
  },

  // 8. Cognitive Psychology: Memory Consolidation
  {
    id: "adv-8",
    level: "advanced",
    title: "Kognitiv psixologiya: Xotira konsolidatsiyasi (Memory)",
    topic: "Gippokamp, sinapslar va chuqur uyqu fazalari",
    accent: "en-GB (Britaniya)",
    voiceGender: "female",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Uyqu paytida kun davomida olingan ma'lumotlarning uzoq muddatli xotiraga o'tish mexanizmi.",
    vocabulary: [
      { word: "hippocampus", phonetic: "/ˌhɪp.əˈkæm.pəs/", pos: "noun", uzbek: "gippokamp (miya xotira markazi)", definition: "A neural structure in the temporal lobe essential for forming memories", example: "The hippocampus acts as a temporary short-term buffer." }
    ],
    sentences: [
      { speaker: "Neuroscientist", text: "During stage three non-REM slow-wave sleep, high-frequency neural oscillations called sharp-wave ripples replay recent experiences, transferring encoded memories from the hippocampus to the neocortex." }
    ],
    questions: [
      {
        id: "adv8-q1",
        type: "blank",
        prompt: "Memories are transferred from the hippocampus to the ____________.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["neocortex", "Neocortex"],
        explanation: "Xotira gippokampdan neokorteksga uzatiladi.",
        scriptEvidence: "from the hippocampus to the neocortex."
      }
    ]
  },

  // 9. Urban Heat Islands & Microclimates
  {
    id: "adv-9",
    level: "advanced",
    title: "Shahar issiqlik orollari (Urban Heat Islands)",
    topic: "Albedo effekti, asfalt va iqlimiy modellashtirish",
    accent: "en-US (Amerika)",
    voiceGender: "male",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Shahar infratuzilmasidagi qorong'i yuzalar qanday qilib tungi haroratni qishloq joylariga nisbatan sezilarli darajada oshiradi.",
    vocabulary: [
      { word: "albedo", phonetic: "/ælˈbiː.dəʊ/", pos: "noun", uzbek: "albedo (qaytarish qobiliyati)", definition: "The proportion of incident light that is reflected by a surface", example: "Light-colored pavements increase urban surface albedo." }
    ],
    sentences: [
      { speaker: "Climatologist", text: "Dense metropolitan centers can record nocturnal ambient temperatures up to seven degrees Celsius warmer than adjacent rural grasslands due to thermal mass absorption in concrete." }
    ],
    questions: [
      {
        id: "adv9-q1",
        type: "blank",
        prompt: "Metropolitan centers can be up to ____________ degrees Celsius warmer at night.",
        instruction: "Write THE NUMBER.",
        correctAnswer: ["7", "seven", "Seven"],
        explanation: "Shaharlarda tungi harorat 7 darajagacha balandroq bo'lishi mumkin.",
        scriptEvidence: "ambient temperatures up to seven degrees Celsius warmer"
      }
    ]
  },

  // 10. Linguistics: Language Evolution & Extinction
  {
    id: "adv-10",
    level: "advanced",
    title: "Tilshunoslik: Tillar evolyutsiyasi (Language Evolution)",
    topic: "Yo'qolib borayotgan tillar, fonetika va madaniy meros",
    accent: "en-GB (Britaniya)",
    voiceGender: "female",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Dunyo bo'yicha har ikki haftada bitta til yo'qolib ketishi va uni saqlab qolish texnologiyalari.",
    vocabulary: [
      { word: "indigenous", phonetic: "/ɪnˈdɪdʒ.ɪ.nəs/", pos: "adjective", uzbek: "mahalliy, tubjoy", definition: "Originating or occurring naturally in a particular place", example: "Preserving indigenous linguistic diversity protects ecological knowledge." }
    ],
    sentences: [
      { speaker: "Linguist", text: "Of the approximately seven thousand spoken languages in existence today, sociolinguists forecast that over fifty percent will fall completely silent by the end of this century." }
    ],
    questions: [
      {
        id: "adv10-q1",
        type: "blank",
        prompt: "Over ____________ percent of languages are forecast to become extinct by 2100.",
        instruction: "Write THE NUMBER.",
        correctAnswer: ["50", "fifty"],
        explanation: "Mavjud tillarning 50 foizdan ortig'i yo'qolib ketishi xavfi bor.",
        scriptEvidence: "forecast that over fifty percent will fall completely silent"
      }
    ]
  },

  // 11. CRISPR & Bioethics
  {
    id: "adv-11",
    level: "advanced",
    title: "CRISPR texnologiyasi va bioetika (Gene Editing Bioethics)",
    topic: "Genetik tahrirlash, irsiy kasalliklar va etika",
    accent: "en-US (Amerika)",
    voiceGender: "female",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Genomni nishonga olib tahrirlovchi CRISPR-Cas9 vositasining tibbiy imkoniyatlari va ma'naviy chegaralari.",
    vocabulary: [
      { word: "germline", phonetic: "/ˈdʒɜːm.laɪn/", pos: "noun", uzbek: "irsiy hujayralar (kelgusi avlodga o'tuvchi)", definition: "The cellular lineage of sexually reproducing organisms producing gametes", example: "Modifying the human germline creates transmissible genetic alterations." }
    ],
    sentences: [
      { speaker: "Bioethicist", text: "While somatic gene therapy treats existing tissue without passing alterations to descendants, germline modification permanently introduces engineered sequences into future human generations." }
    ],
    questions: [
      {
        id: "adv11-q1",
        type: "blank",
        prompt: "Modifying the ____________ introduces permanent genetic changes to future generations.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["germline", "Germline"],
        explanation: "Germline (irsiy hujayralar)ni o'zgartirish kelgusi avlodlarga uzatiladi.",
        scriptEvidence: "germline modification permanently introduces engineered sequences"
      }
    ]
  },

  // 12. Global Supply Chain Vulnerabilities
  {
    id: "adv-12",
    level: "advanced",
    title: "Global ta'minot zanjirlari (Supply Chain Economics)",
    topic: "Logistika, yarimo'tkazgichlar va xavf tahlili",
    accent: "en-GB (Britaniya)",
    voiceGender: "male",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Tayvan bo'g'ozi va yarimo'tkazgich mikrosxemalariga bog'liq jahon iqtisodiyoti muammolari.",
    vocabulary: [
      { word: "bottleneck", phonetic: "/ˈbɒt.əl.nek/", pos: "noun", uzbek: "tor joy, to'siq bo'luvchi nuqta", definition: "A point of congestion in a system that impedes overall progress", example: "Semiconductor lithography remains a singular global bottleneck." }
    ],
    sentences: [
      { speaker: "Analyst", text: "Over seventy-five percent of the world's most advanced microchips under seven nanometers are fabricated within a single geographical territory in East Asia." }
    ],
    questions: [
      {
        id: "adv12-q1",
        type: "blank",
        prompt: "Over ____________ percent of advanced chips are fabricated in one territory.",
        instruction: "Write THE NUMBER.",
        correctAnswer: ["75", "seventy-five"],
        explanation: "Eng ilg'or chiplarning 75 foizdan ortig'i bitta mintaqada ishlab chiqariladi.",
        scriptEvidence: "Over seventy-five percent of the world's most advanced microchips"
      }
    ]
  },

  // 13. Black Holes & Gravitational Waves
  {
    id: "adv-13",
    level: "advanced",
    title: "Qora tuynuklar va gravitatsion to'lqinlar (Astrophysics)",
    topic: "LIGO observatoriyasi, umumiy nisbiylik nazariyasi va fazo-vaqt",
    accent: "en-US (Amerika)",
    voiceGender: "male",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Eynshteynning fazo-vaqt to'lqinlari kashfiyoti va ikkita qora tuynuk to'qnashuvi.",
    vocabulary: [
      { word: "interferometer", phonetic: "/ˌɪn.tə.fəˈrɒm.ɪ.tər/", pos: "noun", uzbek: "interferometr (aniq o'lchash asbobi)", definition: "An instrument that uses interference of waves for precise measurement", example: "The laser interferometer measures changes smaller than a proton." }
    ],
    sentences: [
      { speaker: "Astrophysicist", text: "When two binary black holes merged 1.3 billion light years away, the resulting gravitational waves distorted the four-kilometer laser arms of the LIGO detector by less than one-ten-thousandth the diameter of a single proton." }
    ],
    questions: [
      {
        id: "adv13-q1",
        type: "blank",
        prompt: "The black hole merger occurred ____________ billion light years away.",
        instruction: "Write THE NUMBER.",
        correctAnswer: ["1.3"],
        explanation: "Qora tuynuklar to'qnashuvi 1.3 milliard yorug'lik yili masofasida sodir bo'lgan.",
        scriptEvidence: "merged 1.3 billion light years away"
      }
    ]
  },

  // 14. Philosophy of Mind & Machine Consciousness
  {
    id: "adv-14",
    level: "advanced",
    title: "Ong falsafasi va sun'iy ong (Machine Consciousness)",
    topic: "Subyektiv tajriba, Tyuring testi va ong siri",
    accent: "en-GB (Britaniya)",
    voiceGender: "female",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Qanday qilib hisoblash kuchi his-tuyg'u va ichki tajribadan farq qilishi bo'yicha falsafiy munozara.",
    vocabulary: [
      { word: "qualia", phonetic: "/ˈkwɑː.li.ə/", pos: "noun", uzbek: "kvaliya (ichki subyektiv his-tuyg'ular)", definition: "Individual instances of subjective, conscious experience", example: "Explaining qualia is widely referred to as the hard problem of consciousness." }
    ],
    sentences: [
      { speaker: "Philosopher", text: "Even if an artificial neural network demonstrates flawless linguistic fluency in conversation, that syntactic manipulation tells us nothing about whether there is any subjective internal experience—what philosophers designate as qualia." }
    ],
    questions: [
      {
        id: "adv14-q1",
        type: "blank",
        prompt: "Philosophers call individual subjective experiences ____________.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["qualia", "Qualia"],
        explanation: "Falsafada ichki subyektiv tuyg'ular 'qualia' deb yuritiladi.",
        scriptEvidence: "what philosophers designate as qualia."
      }
    ]
  },

  // 15. Green Hydrogen as Renewable Fuel
  {
    id: "adv-15",
    level: "advanced",
    title: "Yashil vodorod energiyasi (Green Hydrogen)",
    topic: "Elektroliz, og'ir sanoat va dekarbonizatsiya",
    accent: "en-US (Amerika)",
    voiceGender: "female",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Po'lat quyish va aviatsiyani toza energiyaga o'tkazishda vodorodning o'rni.",
    vocabulary: [
      { word: "electrolysis", phonetic: "/ɪˌlekˈtrɒl.ə.sɪs/", pos: "noun", uzbek: "elektroliz", definition: "Chemical decomposition produced by passing an electric current through liquid", example: "Water electrolysis powered by offshore wind generates green hydrogen." }
    ],
    sentences: [
      { speaker: "Engineer", text: "Green hydrogen offers the singular viable decarbonization pathway for heavy industrial manufacturing like steel-making, which demands operational temperatures exceeding fifteen hundred degrees Celsius." }
    ],
    questions: [
      {
        id: "adv15-q1",
        type: "blank",
        prompt: "Steel manufacturing requires temperatures exceeding ____________ hundred degrees Celsius.",
        instruction: "Write THE NUMBER.",
        correctAnswer: ["15", "fifteen", "1500", "fifteen hundred"],
        explanation: "Po'lat ishlab chiqarish 1500 darajadan yuqori haroratni talab qiladi.",
        scriptEvidence: "demands operational temperatures exceeding fifteen hundred degrees Celsius."
      }
    ]
  },

  // 16. Social Media Algorithms & Polarization
  {
    id: "adv-16",
    level: "advanced",
    title: "Ijtimoiy tarmoqlar va qutblanish (Algorithmic Polarization)",
    topic: "Tavsiya algoritmlari, g'azab iqtisodiyoti va sotsiologiya",
    accent: "en-US (Amerika)",
    voiceGender: "male",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Foydalanuvchini platformada ko'proq ushlab turish uchun g'azab uyg'otuvchi kontentning ko'rsatilishi.",
    vocabulary: [
      { word: "polarization", phonetic: "/ˌpəʊ.lər.aɪˈzeɪ.ʃən/", pos: "noun", uzbek: "qutblanish, qarama-qarshilik", definition: "Division into two sharply contrasting groups or sets of opinions", example: "Algorithmic feedback loops accelerate political polarization." }
    ],
    sentences: [
      { speaker: "Sociologist", text: "By prioritizing engagement metrics above truth or nuanced debate, feed optimization algorithms systematically boost morally outraged content, which spreads six times faster than verified factual reports." }
    ],
    questions: [
      {
        id: "adv16-q1",
        type: "blank",
        prompt: "Outraged content spreads ____________ times faster than verified reports.",
        instruction: "Write ONE NUMBER or WORD.",
        correctAnswer: ["6", "six", "Six"],
        explanation: "G'azab uyg'otuvchi xabarlar faktlarga qaraganda 6 barobar tezroq tarqaladi.",
        scriptEvidence: "spreads six times faster than verified factual reports."
      }
    ]
  },

  // 17. Plate Tectonics & Seismic Forecasting
  {
    id: "adv-17",
    level: "advanced",
    title: "Seysmologiya: Zilzilalar tahlili (Seismic Forecasting)",
    topic: "Tektonika, yoriqlar va sun'iy yo'ldosh radarlari",
    accent: "en-GB (Britaniya)",
    voiceGender: "male",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Sun'iy yo'ldosh interferometriyasi yordamida yer qobig'idagi zo'riqishlarni kuzatish.",
    vocabulary: [
      { word: "subduction", phonetic: "/səbˈdʌk.ʃən/", pos: "noun", uzbek: "subduksiya (bir plitaning ikkinchisi ostiga kirishi)", definition: "The sideways and downward movement of the edge of a plate beneath another", example: "Subduction zones produce the planet's most cataclysmic megathrust earthquakes." }
    ],
    sentences: [
      { speaker: "Geologist", text: "Satellite radar interferometry can now monitor crustal strain accumulation down to millimeter precision along active fault lines, highlighting stress concentrations years before catastrophic rupture occurs." }
    ],
    questions: [
      {
        id: "adv17-q1",
        type: "blank",
        prompt: "Satellite radar monitors crustal strain down to ____________ precision.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["millimeter", "millimetre"],
        explanation: "Yer qobig'idagi o'zgarishlar millimetrgacha aniqlikda o'lchanadi.",
        scriptEvidence: "accumulation down to millimeter precision"
      }
    ]
  },

  // 18. Paleoclimatology & Ice Core Analysis
  {
    id: "adv-18",
    level: "advanced",
    title: "Qadimgi iqlimshunoslik: Muz yadrolari (Paleoclimatology)",
    topic: "Antarktida muzliklari, izotoplar va tarixiy atmosfera",
    accent: "en-US (Amerika)",
    voiceGender: "female",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Antarktidadagi uch kilometrlik muz burg'ilashlari orqali 800 ming yillik iqlim tarixini o'rganish.",
    vocabulary: [
      { word: "isotope", phonetic: "/ˈaɪ.sə.təʊp/", pos: "noun", uzbek: "izotop", definition: "Each of two or more forms of the same element", example: "Oxygen-18 isotope ratios reconstruct past planetary temperatures." }
    ],
    sentences: [
      { speaker: "Researcher", text: "By analyzing air bubbles trapped inside Antarctic ice cores drilled three kilometers deep, paleoclimatologists have reconstructed continuous greenhouse gas atmospheric records extending back eight hundred thousand years." }
    ],
    questions: [
      {
        id: "adv18-q1",
        type: "blank",
        prompt: "Ice cores have reconstructed atmospheric records back ____________ hundred thousand years.",
        instruction: "Write ONE NUMBER or WORD.",
        correctAnswer: ["8", "eight", "800", "eight hundred"],
        explanation: "Muz yadrolari 800 ming yillik atmosferani tiklashga imkon berdi.",
        scriptEvidence: "extending back eight hundred thousand years."
      }
    ]
  },

  // 19. Neuroplasticity & Lifelong Learning
  {
    id: "adv-19",
    level: "advanced",
    title: "Neyroplastiklik va kattalarda o'rganish (Neuroplasticity)",
    topic: "Miyaning moslashuvchanligi, miyelinlanish va kognitiv zahira",
    accent: "en-GB (Britaniya)",
    voiceGender: "female",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Qadimgi dogma inkor etildi: inson miyasi keksa yoshda ham yangi neyron zanjirlarini qura oladi.",
    vocabulary: [
      { word: "myelination", phonetic: "/ˌmaɪ.ə.lɪˈneɪ.ʃən/", pos: "noun", uzbek: "miyelinlanish (nerv tolalari izolyatsiyasi)", definition: "Formation of a fatty myelin sheath around nerve fibers", example: "Repetitive mental practice accelerates axonal myelination." }
    ],
    sentences: [
      { speaker: "Neurologist", text: "Adult neurogenesis and synaptogenesis persist throughout the human lifespan; rigorous foreign language acquisition physically expands hippocampal volume and fortifies white matter integrity well into the eighth decade of life." }
    ],
    questions: [
      {
        id: "adv19-q1",
        type: "blank",
        prompt: "Language acquisition physically expands ____________ volume.",
        instruction: "Write ONE WORD.",
        correctAnswer: ["hippocampal", "hippocampus"],
        explanation: "Xorijiy til o'rganish gippokamp hajmini kattalashtiradi.",
        scriptEvidence: "physically expands hippocampal volume"
      }
    ]
  },

  // 20. Regenerative Agriculture & Soil Microbiome
  {
    id: "adv-20",
    level: "advanced",
    title: "Qayta tiklanuvchi qishloq xo'jaligi (Regenerative Agriculture)",
    topic: "Tuproq mikrobiomi, uglerod sekvestratsiyasi va barqarorlik",
    accent: "en-US (Amerika)",
    voiceGender: "male",
    audioSpeedDefault: 1.05,
    duration: "4 min",
    description: "Kimyoviy o'g'itlardan voz kechib, tuproqdagi mikroblar va zamburug'lar tarmoqlarini jonlantirish.",
    vocabulary: [
      { word: "mycorrhizal", phonetic: "/ˌmaɪ.kəˈraɪ.zəl/", pos: "adjective", uzbek: "mikorizali (zamburug' va ildiz simbiozi)", definition: "Relating to a symbiotic association between a fungus and plant roots", example: "Mycorrhizal fungal networks shuttle nutrients between trees." }
    ],
    sentences: [
      { speaker: "Agronomist", text: "By eliminating mechanical tilling and introducing diverse cover crops, regenerative farming techniques can sequester up to three metric tons of atmospheric carbon per hectare of topsoil annually." }
    ],
    questions: [
      {
        id: "adv20-q1",
        type: "blank",
        prompt: "Regenerative farming can sequester up to ____________ metric tons of carbon per hectare.",
        instruction: "Write ONE NUMBER or WORD.",
        correctAnswer: ["3", "three", "Three"],
        explanation: "Gektariga 3 tonnagacha karbonat angidrid saqlash imkoniyati mavjud.",
        scriptEvidence: "sequester up to three metric tons of atmospheric carbon per hectare"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { advancedLessons };
}
