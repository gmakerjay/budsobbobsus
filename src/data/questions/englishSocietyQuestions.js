// หมวดที่ 6: ภาษาอังกฤษ และ สังคม วัฒนธรรม จริยธรรม ประชาคมอาเซียน (15 ข้อเต็มตามโครงสร้างข้อสอบ)
// ครอบคลุม: ไวยากรณ์ภาษาอังกฤษ, คำศัพท์, บทสนทนา, ปรัชญาเศรษฐกิจพอเพียง, เสาหลักอาเซียน, และจริยธรรม

export const ENGLISH_SOCIETY_QUESTIONS = [
  {
    id: "eng_soc_01",
    subjectId: "english_society",
    topic: "ภาษาอังกฤษ: Subject-Verb Agreement",
    difficulty: "ปานกลาง",
    question: "Complete the sentence correctly: 'Neither the officer nor his assistants ______ informed about the schedule change yesterday.'",
    options: ["was", "were", "is", "are"],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบโครงสร้าง Neither A nor B กริยาต้องผันตามประธานตัวหลัง (B)",
      "ขั้นตอนที่ 2: ประธานตัวหลังคือ 'his assistants' เป็นพหูพจน์",
      "ขั้นตอนที่ 3: มีคำบอกเวลา 'yesterday' ในอดีต จึงต้องใช้รูป Past Tense พหูพจน์ คือ 'were'",
      "ขั้นตอนที่ 4: สรุปคำตอบคือ were"
    ],
    conceptSummary: "Neither A nor B: ผันตามประธาน B ตัวหลังสุดที่ติดกับกริยา + อดีตใช้ were",
    shortcutTip: "Neither A nor B -> ตาจ้องที่ B ตัวหลังสุด (assistants พหูพจน์ + อดีต = were)",
    diagramType: "grammar_rule",
    diagramData: { ruleName: "Neither A nor B", subjectA: "the officer", subjectB: "his assistants (พหูพจน์)", tenseMarker: "yesterday", result: "were informed" }
  },
  {
    id: "eng_soc_02",
    subjectId: "english_society",
    topic: "สังคม วัฒนธรรม: ปรัชญาของเศรษฐกิจพอเพียง",
    difficulty: "ง่าย",
    question: "ปรัชญาของเศรษฐกิจพอเพียงตามแนวพระราชดำริ ประกอบด้วยหลักการสำคัญ '3 ห่วง 2 เงื่อนไข' ข้อใดระบุหลักการ 3 ห่วง ได้ถูกต้องครบถ้วน?",
    options: [
      "ความพอประมาณ, ความมีเหตุผล, การมีภูมิคุ้มกันในตัวที่ดี",
      "ความประหยัด, ความซื่อสัตย์, ความขยันหมั่นเพียร",
      "ความมีคุณธรรม, ความรอบรู้, ความสามัคคี",
      "ความพอดี, ความรอบคอบ, การพึ่งพาตนเอง"
    ],
    correctIndex: 0,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ทบทวน 3 ห่วง: 1. พอประมาณ 2. มีเหตุผล 3. มีภูมิคุ้มกันในตัวที่ดี",
      "ขั้นตอนที่ 2: 2 เงื่อนไข: 1. เงื่อนไขความรู้ 2. เงื่อนไขคุณธรรม",
      "ขั้นตอนที่ 3: สรุปคำตอบตรงกับตัวเลือกที่ 1"
    ],
    conceptSummary: "เศรษฐกิจพอเพียง: 3 ห่วง (พอประมาณ, มีเหตุผล, มีภูมิคุ้มกันที่ดี) + 2 เงื่อนไข (ความรู้, คุณธรรม)",
    shortcutTip: "3 ห่วง = พอประมาณ • มีเหตุผล • ภูมิคุ้มกัน",
    diagramType: "sufficiency_economy",
    diagramData: {
      rings: ["พอประมาณ", "มีเหตุผล", "มีภูมิคุ้มกันที่ดี"],
      conditions: ["เงื่อนไขความรู้ (รอบรู้ รอบคอบ ระมัดระวัง)", "เงื่อนไขคุณธรรม (ซื่อสัตย์ สุจริต อดทน)"],
      outcome: "สมดุล มั่นคง ยั่งยืน"
    }
  },
  {
    id: "eng_soc_03",
    subjectId: "english_society",
    topic: "ประชาคมอาเซียน (3 เสาหลัก)",
    difficulty: "ปานกลาง",
    question: "ประชาคมอาเซียนก่อตั้งขึ้นโดยมีเสาหลักความร่วมมือ 3 เสาหลัก (3 Pillars) ข้อใดไม่ใช่หนึ่งใน 3 เสาหลักของประชาคมอาเซียน?",
    options: [
      "ประชาคมการเมืองและความมั่นคงอาเซียน (APSC)",
      "ประชาคมเศรษฐกิจอาเซียน (AEC)",
      "ประชาคมการทหารและอาวุธยุทโธปกรณ์อาเซียน (ADMC)",
      "ประชาคมสังคมและวัฒนธรรมอาเซียน (ASCC)"
    ],
    correctIndex: 2,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบ 3 เสาหลักอาเซียน: การเมืองและความมั่นคง (APSC), เศรษฐกิจ (AEC), สังคมและวัฒนธรรม (ASCC)",
      "ขั้นตอนที่ 2: อาเซียนไม่มีเสาหลักด้านการทหาร/อาวุธ"
    ],
    conceptSummary: "3 เสาหลักอาเซียน: APSC (การเมืองความมั่นคง), AEC (เศรษฐกิจ), ASCC (สังคมและวัฒนธรรม)",
    shortcutTip: "3 เสาหลัก = การเมืองมั่นคง • เศรษฐกิจ • สังคมวัฒนธรรม",
    diagramType: "asean_pillars",
    diagramData: {
      pillars: [
        { code: "APSC", th: "การเมืองและความมั่นคง", focus: "สันติภาพ ปราศจากความขัดแย้ง" },
        { code: "AEC", th: "เศรษฐกิจ", focus: "ตลาดและฐานการผลิตเดียว" },
        { code: "ASCC", th: "สังคมและวัฒนธรรม", focus: "ประชาชนเป็นศูนย์กลาง คุณภาพชีวิต" }
      ]
    }
  },
  {
    id: "eng_soc_04",
    subjectId: "english_society",
    topic: "ภาษาอังกฤษ: Tenses (Present Perfect vs Past Simple)",
    difficulty: "ปานกลาง",
    question: "Choose the correct verb form: 'Police Sergeant Somchai ______ at this station for more than five years and he still works here.'",
    options: ["worked", "works", "has worked", "had worked"],
    correctIndex: 2,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบตัวบอกเวลา 'for more than five years' (เป็นเวลามากกว่า 5 ปี)",
      "ขั้นตอนที่ 2: มีประโยคเสริม 'and he still works here' (และปัจจุบันก็ยังคงทำงานอยู่ที่นี่) บ่งชี้การกระทำที่เริ่มตั้งแต่อดีตและดำเนินต่อเนื่องมาถึงปัจจุบัน",
      "ขั้นตอนที่ 3: โครงสร้าง Tense ที่ใช้คือ Present Perfect Tense (Subject + has/have + V.3)",
      "ขั้นตอนที่ 4: สรุปใช้ 'has worked'"
    ],
    conceptSummary: "Present Perfect (has/have + V.3) ใช้กับการกระทำที่เกิดขึ้นในอดีตและดำเนินต่อเนื่องมาถึงปัจจุบัน มักมีคำว่า 'since' หรือ 'for'",
    shortcutTip: "ทำตั้งแต่อดีตจนถึงตอนนี้ + for/since = has/have + V.3",
    diagramType: "tense_timeline",
    diagramData: { past: "5 ปีก่อน", present: "ปัจจุบันยังทำงานอยู่", tense: "has worked (Present Perfect)" }
  },
  {
    id: "eng_soc_05",
    subjectId: "english_society",
    topic: "ภาษาอังกฤษ: Conditional Sentences (If-Clause Type 2)",
    difficulty: "วิเคราะห์เข้มข้น",
    question: "Complete the sentence: 'If I ______ the chief of police, I would improve the public safety system immediately.'",
    options: ["am", "was", "were", "had been"],
    correctIndex: 2,
    thinkingProcess: [
      "ขั้นตอนที่ 1: สังเกตประโยคหลักใช้ 'I would improve...' (would + V.inf) เป็น If-Clause Type 2 (สมมุติในสิ่งที่ไม่จริงในปัจจุบัน)",
      "ขั้นตอนที่ 2: ใน If-Clause Type 2 กริยาในประโยค if ต้องเป็น Past Simple และในภาษาอังกฤษทางการ กริยา to be จะใช้ 'were' กับประธานทุกตัว (รวมถึง I, He, She, It)",
      "ขั้นตอนที่ 3: สรุปคำตอบคือ 'were'"
    ],
    conceptSummary: "If-Clause Type 2 (สมมุติตรงข้ามความจริงในปัจจุบัน): If + S + V.2 (were), S + would + V.1",
    shortcutTip: "สมมุติถ้าฉันเป็น...: If I were... คู่กับ would + V.1",
    diagramType: "if_clause_type2",
    diagramData: { ifPart: "If I were (V.2 สมมุติ)", mainPart: "I would improve (would + V.inf)" }
  },
  {
    id: "eng_soc_06",
    subjectId: "english_society",
    topic: "ภาษาอังกฤษ: คำศัพท์ในงานสำนักงานและกฎหมาย (Vocabulary)",
    difficulty: "ปานกลาง",
    question: "What is the closest synonym of the word 'CONFIDENTIAL' in official documents?",
    options: ["Public", "Secret", "Dangerous", "Temporary"],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: คำว่า 'Confidential' แปลว่า ชั้นความลับ หรือเป็นความลับ",
      "ขั้นตอนที่ 2: คำศัพท์ที่มีความหมายใกล้เคียงที่สุดคือ 'Secret' (ความลับ)",
      "ขั้นตอนที่ 3: 'Public' = สาธารณะ, 'Dangerous' = อันตราย, 'Temporary' = ชั่วคราว"
    ],
    conceptSummary: "Confidential = Secret (เป็นความลับ) ตรงกับชั้นความลับของหนังสือราชการ",
    shortcutTip: "Confidential = Secret (ความลับ)",
    diagramType: "vocab_synonym",
    diagramData: { word: "Confidential", synonym: "Secret / Private", antonym: "Public / Open" }
  },
  {
    id: "eng_soc_07",
    subjectId: "english_society",
    topic: "ภาษาอังกฤษ: บทสนทนาในที่ทำงาน (Conversation)",
    difficulty: "ง่าย",
    question: "In an office, a citizen asks: 'Excuse me, could you tell me where Room 204 is?' What is the most polite response?",
    options: [
      "No, I am too busy right now.",
      "Certainly, it is on the second floor, just down this hallway on your right.",
      "Go find it yourself.",
      "Why do you need to go there?"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: สถานการณ์ประชาชนสอบถามทางในสถานที่ราชการอย่างสุภาพ",
      "ขั้นตอนที่ 2: การตอบรับของเจ้าหน้าที่ต้องมีความสุภาพและให้ข้อมูลที่ชัดเจน",
      "ขั้นตอนที่ 3: ตัวเลือกที่ 2 'Certainly, it is on the second floor...' สุภาพและช่วยเหลือประชาชนดีที่สุด"
    ],
    conceptSummary: "สำนวนตอบรับคำขอทิศทางอย่างสุภาพ: Certainly, ... / Sure, it's right over there.",
    shortcutTip: "ตอบคำถามประชาชนอย่างสุภาพ = Certainly, ...",
    diagramType: "office_dialogue",
    diagramData: { ask: "Could you tell me where...?", reply: "Certainly, it is on the second floor..." }
  },
  {
    id: "eng_soc_08",
    subjectId: "english_society",
    topic: "ภาษาอังกฤษ: การใช้คำบุพบทบอกเวลา (Prepositions of Time)",
    difficulty: "ง่าย",
    question: "Fill in the blank: 'The official meeting is scheduled to begin ______ 09:30 AM ______ Monday morning.'",
    options: ["in, at", "at, on", "on, in", "at, in"],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบเวลาเจาะจง '09:30 AM' ใช้บุพบท 'at' (at + จุดเวลา เช่น at 9:30 AM, at noon)",
      "ขั้นตอนที่ 2: ตรวจสอบวันในสัปดาห์ 'Monday morning' มีชื่อวันระบุ ใช้บุพบท 'on' (on + วัน เช่น on Monday, on Friday)",
      "ขั้นตอนที่ 3: รวมเป็น 'at, on'"
    ],
    conceptSummary: "กฎการใช้ In, On, At กับเวลา: At + จุดเวลาเฉพาะเจาะจง / On + วันและวันที่ / In + เดือน ปี ฤดูกาล",
    shortcutTip: "At จุดเวลา • On วัน • In เดือนปี",
    diagramType: "prepositions_time",
    diagramData: { atTime: "at 09:30 AM (เวลาเป๊ะ)", onDay: "on Monday (วัน)", inYear: "in November 2026 (เดือน/ปี)" }
  },
  {
    id: "eng_soc_09",
    subjectId: "english_society",
    topic: "สังคม วัฒนธรรม: เกษตรทฤษฎีใหม่ตามแนวพระราชดำริ",
    difficulty: "ปานกลาง",
    question: "ตามหลักปรัชญาเศรษฐกิจพอเพียง 'เกษตรทฤษฎีใหม่' กำหนดอัตราส่วนการจัดสรรพื้นที่ดินออกเป็น 4 ส่วนในสัดส่วนเท่าใด?",
    options: [
      "25 : 25 : 25 : 25",
      "30 : 30 : 30 : 10",
      "40 : 30 : 20 : 10",
      "50 : 20 : 20 : 10"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ทบทวนหลักเกษตรทฤษฎีใหม่ขั้นต้นในการจัดสรรที่ดินแปลงขนาดเล็ก",
      "ขั้นตอนที่ 2: อัตราส่วนมาตรฐาน 30 : 30 : 30 : 10 ได้แก่:",
      "- 30% แรก: สระกักเก็บน้ำ",
      "- 30% ที่สอง: ปลูกข้าวเพื่อการบริโภคในครัวเรือน",
      "- 30% ที่สาม: ปลูกพืชไร่ ไม้ผล พืชผักสวนครัว",
      "- 10% สุดท้าย: ที่อยู่อาศัย เลี้ยงสัตว์ และโรงเรือน",
      "ขั้นตอนที่ 3: สรุปคำตอบคือ 30 : 30 : 30 : 10"
    ],
    conceptSummary: "เกษตรทฤษฎีใหม่ สัดส่วน 30:30:30:10 (สระน้ำ 30% : นาข้าว 30% : พืชไร่พืชสวน 30% : ที่อยู่อาศัย 10%)",
    shortcutTip: "สัดส่วนทฤษฎีใหม่ = 30 : 30 : 30 : 10",
    diagramType: "new_theory_land",
    diagramData: { water: "30% แหล่งน้ำ", rice: "30% ปลูกข้าว", crops: "30% พืชไร่พืชสวน", house: "10% ที่อยู่อาศัย" }
  },
  {
    id: "eng_soc_10",
    subjectId: "english_society",
    topic: "ประชาคมอาเซียน (ข้อมูลพื้นฐาน)",
    difficulty: "ง่าย",
    question: "สำนักงานเลขาธิการอาเซียน (ASEAN Secretariat) ตั้งอยู่ที่เมืองหลวงของประเทศใด?",
    options: [
      "กรุงเทพมหานคร ประเทศไทย",
      "กัวลาลัมเปอร์ ประเทศมาเลเซีย",
      "จาการ์ตา ประเทศอินโดนีเซีย",
      "สิงคโปร์ ประเทศสิงคโปร์"
    ],
    correctIndex: 2,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบที่ตั้งสำนักงานใหญ่ของเลขาธิการอาเซียน (ASEAN Secretariat)",
      "ขั้นตอนที่ 2: ตั้งอยู่ที่กรุงจาการ์ตา (Jakarta) ประเทศอินโดนีเซีย",
      "ขั้นตอนที่ 3: (ข้อสังเกต: ประเทศไทยเป็นสถานที่ลงนามปฏิญญากรุงเทพฯ ก่อตั้งอาเซียน เมื่อปี พ.ศ. 2510)"
    ],
    conceptSummary: "สำนักงานเลขาธิการอาเซียนตั้งอยู่ที่กรุงจาการ์ตา ประเทศอินโดนีเซีย มีเลขาธิการอาเซียนเป็นหัวหน้าฝ่ายบริหาร",
    shortcutTip: "สำนักงานเลขาธิการอาเซียน = จาการ์ตา อินโดนีเซีย",
    diagramType: "asean_hq",
    diagramData: { hq: "กรุงจาการ์ตา ประเทศอินโดนีเซีย", founding: "ลงนามก่อตั้ง ณ กรุงเทพมหานคร พ.ศ. 2510" }
  },
  {
    id: "eng_soc_11",
    subjectId: "english_society",
    topic: "จริยธรรมและการปฏิบัติหน้าที่ราชการ",
    difficulty: "ปานกลาง",
    question: "สถานการณ์ใดจัดเป็น 'การขัดกันระหว่างประโยชน์ส่วนบุคคลกับประโยชน์ส่วนรวม' (Conflict of Interest) ในการปฏิบัติหน้าที่ราชการ?",
    options: [
      "เจ้าหน้าที่ทำหน้าที่เบิกจ่ายเงินตามระเบียบของทางราชการอย่างเคร่งครัด",
      "กรรมการตรวจรับพัสดุรับจ้างเป็นที่ปรึกษาให้กับบริษัทเอกชนที่เข้ายื่นซองประมูลงานของหน่วยงานตนเอง",
      "ข้าราชการใช้เวลาว่างในวันหยุดเสาร์-อาทิตย์ไปปลูกต้นไม้ที่บ้านพัก",
      "เจ้าหน้าที่ตำรวจอำนวยความสะดวกด้านการจราจรหน้าโรงเรียนในตอนเช้า"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: วิเคราะห์นิยาม Conflict of Interest (การขัดกันแห่งผลประโยชน์): สถานการณ์ที่ประโยชน์ส่วนตัวของเจ้าหน้าที่เข้ามามีอิทธิพลต่อการตัดสินใจในหน้าที่สาธารณะ",
      "ขั้นตอนที่ 2: ในข้อ 2 การที่กรรมการตรวจรับไปรับเงินเป็นที่ปรึกษาของบริษัทผู้เข้าประมูล ก่อให้เกิดผลประโยชน์ทับซ้อนและความไม่เป็นกลางโดยตรง",
      "ขั้นตอนที่ 3: สรุปคำตอบคือ ข้อ 2"
    ],
    conceptSummary: "Conflict of Interest เกิดขึ้นเมื่อผลประโยชน์ส่วนตนขัดแย้งกับหน้าที่ราชการ ทำให้ขาดความเป็นกลางและเสี่ยงต่อการทุจริต",
    shortcutTip: "กรรมการตรวจรับไปรับเงินบริษัทคู่ประมูล = ประโยชน์ทับซ้อน (Conflict of Interest)",
    diagramType: "conflict_interest",
    diagramData: { public: "ประโยชน์ส่วนรวม (ราชการ)", private: "ประโยชน์ส่วนตน (รับเงินที่ปรึกษา)", conflict: "เกิดการขัดกันแห่งผลประโยชน์" }
  },
  {
    id: "eng_soc_12",
    subjectId: "english_society",
    topic: "สังคม วัฒนธรรม: วันสำคัญของชาติ",
    difficulty: "ง่าย",
    question: "วันชาติของประเทศไทย และวันพ่อแห่งชาติ ตรงกับวันที่เท่าใดของทุกปี?",
    options: [
      "๒๘ กรกฎาคม",
      "๑๒ สิงหาคม",
      "๑๓ ตุลาคม",
      "๕ ธันวาคม"
    ],
    correctIndex: 3,
    thinkingProcess: [
      "ขั้นตอนที่ 1: วันที่ 5 ธันวาคม เป็นวันคล้ายวันพระบรมราชสมภพของพระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร",
      "ขั้นตอนที่ 2: ทางราชการกำหนดให้เป็น วันชาติ, วันพ่อแห่งชาติ, และวันดินโลก",
      "ขั้นตอนที่ 3: สรุปคำตอบคือ ๕ ธันวาคม"
    ],
    conceptSummary: "๕ ธันวาคม = วันชาติ • วันพ่อแห่งชาติ • วันดินโลก",
    shortcutTip: "๕ ธันวาคม = วันชาติและวันพ่อแห่งชาติ",
    diagramType: "national_days",
    diagramData: { dec5: "๕ ธันวาคม: วันชาติ, วันพ่อแห่งชาติ, วันดินโลก" }
  },
  {
    id: "eng_soc_13",
    subjectId: "english_society",
    topic: "ภาษาอังกฤษ: การอ่านเพื่อความเข้าใจ (Reading Comprehension)",
    difficulty: "ปานกลาง",
    question: "Read the memo: 'All administrative officers must submit their annual training reports to the Department of Education by Friday at 4:30 PM. Late submissions will not be processed.'\nWhat will happen if an officer submits the report on Monday morning?",
    options: [
      "The officer will receive a promotion.",
      "The report will be accepted with a small fine.",
      "The report will not be processed.",
      "The report will be sent to the police chief."
    ],
    correctIndex: 2,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบข้อความในบันทึก 'Late submissions will not be processed.' (รายงานที่ส่งล่าช้าจะไม่ได้รับการประมวลผล)",
      "ขั้นตอนที่ 2: กำหนดส่งคือวันศุกร์เวลา 16.30 น. ดังนั้นการส่งวันจันทร์เช้าถือเป็น 'Late submission'",
      "ขั้นตอนที่ 3: ผลลัพธ์คือ รายงานจะไม่ได้รับการประมวลผล (The report will not be processed)"
    ],
    conceptSummary: "การอ่านจับใจความประกาศภาษาอังกฤษ: ตรวจสอบเงื่อนไขข้อจำกัด (Late submissions will not be processed) เพื่อตอบผลลัพธ์ได้อย่างตรงประเด็น",
    shortcutTip: "Late submissions will not be processed = ไม่ประมวลผลถ้าส่งช้า",
    diagramType: "reading_memo",
    diagramData: { deadline: "Friday 4:30 PM", condition: "Late submissions will not be processed" }
  },
  {
    id: "eng_soc_14",
    subjectId: "english_society",
    topic: "ประชาคมอาเซียน: สมาชิกภาพและกฎบัตร",
    difficulty: "ปานกลาง",
    question: "ประเทศใดเป็นประเทศสมาชิกล่าสุดที่ได้รับมติเห็นชอบในหลักการให้เข้าเป็นสมาชิกประเทศที่ 11 ของประชาคมอาเซียน?",
    options: [
      "ติมอร์-เลสเต (Timor-Leste)",
      "ปาปัวนิวกินี (Papua New Guinea)",
      "ฟิจิ (Fiji)",
      "มัลดีฟส์ (Maldives)"
    ],
    correctIndex: 0,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ประเทศสมาชิกอาเซียนเดิม 10 ประเทศ ได้แก่ บรูไน กัมพูชา อินโดนีเซีย ลาว มาเลเซีย เมียนมา ฟิลิปปินส์ สิงคโปร์ ไทย เวียดนาม",
      "ขั้นตอนที่ 2: ในการประชุมสุดยอดอาเซียน ผู้นำอาเซียนได้รับรองในหลักการให้ ติมอร์-เลสเต (Timor-Leste) เข้าเป็นสมาชิกลำดับที่ 11",
      "ขั้นตอนที่ 3: สรุปคำตอบคือ ติมอร์-เลสเต"
    ],
    conceptSummary: "ติมอร์-เลสเต ได้รับสถานะผู้สังเกตการณ์และมติเห็นชอบในหลักการเพื่อเข้าเป็นสมาชิกประเทศที่ 11 ของอาเซียน",
    shortcutTip: "สมาชิกลำดับที่ 11 ของอาเซียน = ติมอร์-เลสเต (Timor-Leste)",
    diagramType: "asean_members",
    diagramData: { current10: "10 ประเทศสมาชิกเดิม", new11: "ประเทศที่ 11: ติมอร์-เลสเต (Timor-Leste)" }
  },
  {
    id: "eng_soc_15",
    subjectId: "english_society",
    topic: "สังคม วัฒนธรรม: หลักธรรมภิบาลและคุณธรรม 4 ประการ",
    difficulty: "ง่าย",
    question: "พระราชดำรัสคุณธรรม 4 ประการ ที่พระบาทสมเด็จพระมหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร พระราชทานแก่ปวงชนชาวไทย ข้อใดไม่ใช่หนึ่งในคุณธรรม 4 ประการดังกล่าว?",
    options: [
      "การรักษาความสัตย์ ความจริงใจต่อตัวเองและผู้อื่น",
      "การรู้จักข่มใจตนเอง ฝึกใจตนเองให้ประพฤติปฏิบัติอยู่ในความสัตย์",
      "การแสวงหาผลประโยชน์ทางการค้าให้เติบโตอย่างรวดเร็ว",
      "การอดทน อดกลั้น และอดออม ที่จะไม่ประพฤติล่วงความสัตย์สุจริต"
    ],
    correctIndex: 2,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ทบทวนคุณธรรม 4 ประการตามพระราชดำรัส:",
      "1. การรักษาความสัตย์ ความจริงใจต่อตัวเองและผู้อื่น",
      "2. การรู้จักข่มใจตนเองให้ประพฤติดี",
      "3. การอดทน อดกลั้น และอดออม",
      "4. การรู้จักละวางความชั่วและความทุจริต",
      "ขั้นตอนที่ 2: ตัวเลือกที่ 3 'การแสวงหาผลประโยชน์ทางการค้าให้เติบโตอย่างรวดเร็ว' ไม่ใช่คุณธรรม 4 ประการ"
    ],
    conceptSummary: "คุณธรรม 4 ประการ: สัตย์ซื่อ • ข่มใจ • อดทนอดออม • สละความชั่ว เพื่อความมั่นคงของสังคม",
    shortcutTip: "คุณธรรม 4 ประการ: รักษาความสัตย์ • ข่มใจ • อดทนอดกลั้น • รู้จักสละละวาง",
    diagramType: "moral_four",
    diagramData: { virtues: ["1. รักษาความสัตย์", "2. รู้จักข่มใจ", "3. อดทน อดกลั้น อดออม", "4. รู้จักสละประโยชน์ส่วนตน"] }
  }
];
