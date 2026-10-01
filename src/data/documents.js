export const categories = [
  "All",
  "Grammar & Syntax",
  "Exam Preparation",
  "Writing & Composition",
  "Speaking & Eloquence",
  "Business Communication",
  "Foundational Reading"
];

export const levels = [
  "All Levels",
  "Beginner",
  "Intermediate",
  "Advanced"
];

export const documents = [
  {
    id: "doc-1",
    title: "The Comprehensive English Grammar & Syntax Handbook",
    slug: "comprehensive-english-grammar-syntax-handbook",
    category: "Grammar & Syntax",
    level: "Intermediate",
    pages: 68,
    format: "PDF",
    fileSize: "4.2 MB",
    price: 5000,
    priceFormatted: "₦5,000",
    isFree: false,
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
    shortDescription: "A systematic masterclass in sentence structure, subject-verb agreement, clauses, and common grammatical pitfalls.",
    fullDescription: "Designed for serious students and professionals alike, this comprehensive handbook demystifies English syntax with clear explanations, illustrative examples, and practical self-test exercises. It eliminates ambiguity around complex clauses, prepositional usage, and grammatical agreement.",
    whatYouWillLearn: [
      "Mastery of active vs. passive voice and when to employ each effectively",
      "Resolution of complex subject-verb and pronoun-antecedent agreement traps",
      "Clause coordination, subordination, and punctuation conventions",
      "Diagnostic checklists to self-edit essays, reports, and communications"
    ],
    suitableFor: [
      "Secondary school and university students refining academic prose",
      "Professionals seeking error-free business and legal writing",
      "English language teachers seeking modular curriculum reference aids"
    ]
  },
  {
    id: "doc-2",
    title: "UTME & SSCE Use of English Master Strategy Guide",
    slug: "utme-ssce-use-of-english-master-strategy-guide",
    category: "Exam Preparation",
    level: "Intermediate",
    pages: 94,
    format: "PDF",
    fileSize: "6.1 MB",
    price: 4500,
    priceFormatted: "₦4,500",
    isFree: false,
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    shortDescription: "High-yield analysis of past questions, lexis and structure patterns, antonyms/synonyms, and time-saving test strategies.",
    fullDescription: "An indispensable companion for candidates sitting for the Unified Tertiary Matriculation Examination (UTME) and Senior School Certificate Examination (SSCE/WAEC/NECO). Curated by veteran examiners to break down question traps and speed up comprehension.",
    whatYouWillLearn: [
      "Patterns in lexis and structure: idioms, register, and figurative language",
      "Techniques for tackling long comprehension passages in under 6 minutes",
      "Elimination methods for tricky multiple-choice antonym/synonym sections",
      "Complete breakdown of Oral English test conventions and stress placement"
    ],
    suitableFor: [
      "JAMB / UTME candidates aiming for 80+ in Use of English",
      "WAEC, NECO, and GCE examination candidates",
      "Private tutors and coaching centers"
    ]
  },
  {
    id: "doc-3",
    title: "Essential Foundations: 100 Common English Errors to Avoid",
    slug: "100-common-english-errors-to-avoid",
    category: "Grammar & Syntax",
    level: "Beginner",
    pages: 32,
    format: "PDF",
    fileSize: "2.4 MB",
    price: 0,
    priceFormatted: "FREE",
    isFree: true,
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    shortDescription: "A concise diagnostic guide highlighting the most frequent everyday spoken and written errors, with direct corrections.",
    fullDescription: "A practical, zero-cost reference guide compiled by English Lab Consultancy. It spotlights the 100 most prevalent language blunders in spoken conversation, formal email writing, and examination essays, offering instant rules of thumb.",
    whatYouWillLearn: [
      "Immediate corrections for commonly confused words (their/there/they're, affect/effect)",
      "Elimination of tautology and unnecessary filler phrasing",
      "Correct prepositions for tricky English collocations",
      "Everyday conversational pitfalls and natural native phrasing equivalents"
    ],
    suitableFor: [
      "Any learner wanting a quick, accessible reference guide",
      "Parents supporting young readers with home study",
      "Non-native speakers building conversational fluency"
    ]
  },
  {
    id: "doc-4",
    title: "The Professional Email & Business Correspondence Playbook",
    slug: "professional-email-business-correspondence-playbook",
    category: "Business Communication",
    level: "Intermediate",
    pages: 54,
    format: "PDF",
    fileSize: "3.8 MB",
    price: 6000,
    priceFormatted: "₦6,000",
    isFree: false,
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Frameworks, high-impact templates, and etiquette guides for persuasive workplace emails, proposals, and briefings.",
    fullDescription: "In the modern international workplace, clear and assertive written communication directly influences your career trajectory. This playbook provides battle-tested templates and strategic advice for communicating with senior leaders, clients, and partners.",
    whatYouWillLearn: [
      "Structuring executive-level emails that command attention and prompt action",
      "Balancing polite diplomacy with firm professional assertiveness",
      "Crafting concise project proposals and status memos",
      "Handling difficult conversations, pushback, and negotiations in writing"
    ],
    suitableFor: [
      "Corporate managers, consultants, and business analysts",
      "Entrepreneurs pitching international clients and investors",
      "Professionals stepping into leadership roles"
    ]
  },
  {
    id: "doc-5",
    title: "Mastering Spoken Diction & Eloquence: Accent & Articulation",
    slug: "mastering-spoken-diction-eloquence",
    category: "Speaking & Eloquence",
    level: "Advanced",
    pages: 48,
    format: "PDF",
    fileSize: "5.5 MB",
    price: 5500,
    priceFormatted: "₦5,500",
    isFree: false,
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    shortDescription: "A comprehensive guide to vocal clarity, phonetic articulation, syllable stress, and commanding speech presence.",
    fullDescription: "Elevate your verbal expression from routine speaking to magnetic, articulate eloquence. This guide breaks down phonetic sounds, intonation patterns, and pacing techniques used by world-class public speakers and broadcasters.",
    whatYouWillLearn: [
      "Correct articulation of difficult English vowel pairs and consonant clusters",
      "Stress timing and cadence for confident speech delivery",
      "Breath control and vocal projection techniques to eliminate nervous tension",
      "Impromptu speaking frameworks for meetings and presentations"
    ],
    suitableFor: [
      "Public speakers, seminar leaders, and educators",
      "Corporate executives addressing stakeholders",
      "Broadcasters, podcasters, and interview candidates"
    ]
  },
  {
    id: "doc-6",
    title: "Academic Essay Writing & Argumentation Frameworks",
    slug: "academic-essay-writing-argumentation-frameworks",
    category: "Writing & Composition",
    level: "Advanced",
    pages: 76,
    format: "PDF",
    fileSize: "4.9 MB",
    price: 5000,
    priceFormatted: "₦5,000",
    isFree: false,
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Step-by-step structures for argumentative, expository, and analytical essays with thesis development worksheets.",
    fullDescription: "Writing an outstanding academic essay requires far more than good grammar; it demands cohesive structural architecture, persuasive reasoning, and rigorous evidence integration. This resource walks learners through each phase of the writing process.",
    whatYouWillLearn: [
      "Formulating a compelling, defensible thesis statement",
      "The PEEL framework (Point, Evidence, Explanation, Link) for coherent body paragraphs",
      "Seamless transitional phrasing between divergent viewpoints",
      "Synthesis of external sources and academic citations without plagiarism"
    ],
    suitableFor: [
      "High school students writing WAEC/NECO essays",
      "Undergraduate and postgraduate university scholars",
      "Candidates preparing academic writing samples"
    ]
  },
  {
    id: "doc-7",
    title: "Early Literacy & Phonics Starter Kit for Young Learners",
    slug: "early-literacy-phonics-starter-kit-young-learners",
    category: "Foundational Reading",
    level: "Beginner",
    pages: 40,
    format: "PDF",
    fileSize: "8.2 MB",
    price: 3500,
    priceFormatted: "₦3,500",
    isFree: false,
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Engaging, illustrated phonics guides, blending activities, and sight word flashcard sheets for children aged 5-10.",
    fullDescription: "Crafted specifically for parents and early years educators, this starter kit grounds young readers in phonetic decoding, vowel blends, and reading confidence. Designed with engaging layouts that make literacy practice an enjoyable daily habit.",
    whatYouWillLearn: [
      "Synthetic phonics breakdown: short and long vowel sounds",
      "Consonant blends, digraphs, and dipthongs practice exercises",
      "High-frequency sight words worksheets with tracing exercises",
      "Reading comprehension mini-stories with guided question prompts"
    ],
    suitableFor: [
      "Parents nurturing confident young readers at home",
      "Primary school teachers seeking structured phonics supplements",
      "Early childhood learning centers"
    ]
  },
  {
    id: "doc-8",
    title: "Post-UTME English Language Rapid Revision Notes",
    slug: "post-utme-english-rapid-revision-notes",
    category: "Exam Preparation",
    level: "Intermediate",
    pages: 50,
    format: "PDF",
    fileSize: "3.5 MB",
    price: 0,
    priceFormatted: "FREE",
    isFree: true,
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Condensed revision notes covering idioms, sentence completion, comprehension drills, and university-specific test trends.",
    fullDescription: "Post-UTME tests are notorious for their tight time limits and tricky vocabulary traps. This rapid-revision guide distills essential grammar formulas, idiomatic nuances, and test speed secrets into an easily digestible 50-page summary.",
    whatYouWillLearn: [
      "Rapid sentence completion strategies under 30 seconds per question",
      "High-frequency idioms and figurative expressions tested by top universities",
      "Summary writing and inference deduction techniques",
      "Self-assessment speed tests with full answer keys and explanations"
    ],
    suitableFor: [
      "University screening and Post-UTME candidates across Nigeria",
      "Pre-degree and foundation year students",
      "Secondary school seniors"
    ]
  }
];
