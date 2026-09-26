// หมวดที่ 1: เทคโนโลยีสารสนเทศและคอมพิวเตอร์ (35 ข้อเต็มตามโครงสร้างข้อสอบ)
// ครอบคลุม: ฮาร์ดแวร์, ซอฟต์แวร์, โปรแกรมสำนักงาน, เครือข่าย, AI, ความปลอดภัยไอที และกฎหมายคอมพิวเตอร์

export const IT_COMPUTER_QUESTIONS = [
  {
    id: "it_01",
    subjectId: "it_computer",
    topic: "การใช้งานโปรแกรมสำนักงาน (Microsoft Excel)",
    difficulty: "ปานกลาง",
    question: "ในโปรแกรม Microsoft Excel หากพิมพ์สูตร =AVERAGE(B2:B6) ในเซลล์ B7 แล้วทำการคัดลอก (Copy) สูตรไปวางที่เซลล์ C7 สูตรในเซลล์ C7 จะเปลี่ยนเป็นรูปแบบใดตามคุณสมบัติการอ้างอิงเซลล์แบบสัมพัทธ์ (Relative Reference)?",
    options: [
      "=AVERAGE(B2:B6)",
      "=AVERAGE(C2:C6)",
      "=AVERAGE($B$2:$B$6)",
      "=AVERAGE(B3:B7)"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบสูตรตั้งต้น =AVERAGE(B2:B6) พบว่าไม่มีเครื่องหมายดอลลาร์ ($) กำกับ แสดงว่าเป็นการอ้างอิงแบบสัมพัทธ์",
      "ขั้นตอนที่ 2: วิเคราะห์การคัดลอกจาก B7 ไป C7 มีการเลื่อนไปทางขวา 1 คอลัมน์ (จาก B เป็น C) ในขณะที่แถวคงเดิม (แถวที่ 7)",
      "ขั้นตอนที่ 3: ปรับตัวแปรในสูตรจากคอลัมน์ B เป็น C ทั้งหมด ทำให้ได้ =AVERAGE(C2:C6)"
    ],
    conceptSummary: "การอ้างอิงแบบสัมพัทธ์จะเปลี่ยนตำแหน่งเซลล์ตามทิศทางการเคลื่อนย้าย หากต้องการตรึงตำแหน่งต้องใช้เครื่องหมาย $ (Absolute Reference)",
    shortcutTip: "สูตรลัด: เลื่อนขวา = เปลี่ยนชื่อคอลัมน์ (B -> C) | เลื่อนลง = เปลี่ยนเลขแถว",
    diagramType: "excel_reference",
    diagramData: {
      fromCell: "B7 (=AVERAGE(B2:B6))",
      toCell: "C7 (=AVERAGE(C2:C6))",
      shiftDirection: "เลื่อนขวา 1 คอลัมน์ (B -> C)",
      rowStatus: "แถวที่ 2-6 คงเดิม",
      absoluteExample: "หากใช้ $B$2:$B$6 จะตรึงตำแหน่งเซลล์เดิมไว้เสมอ"
    }
  },
  {
    id: "it_02",
    subjectId: "it_computer",
    topic: "ความปลอดภัยทางเทคโนโลยีสารสนเทศ (IT Security)",
    difficulty: "วิเคราะห์เข้มข้น",
    question: "พฤติกรรมของมัลแวร์ประเภทใดที่ทำการเข้ารหัสลับไฟล์เอกสารและฐานข้อมูลในเครื่องคอมพิวเตอร์ของหน่วยงานราชการ จากนั้นแสดงข้อความขู่กรรโชกให้ผู้ดูแลระบบโอนเงินดิจิทัลเพื่อแลกกับกุญแจปลดล็อก?",
    options: [
      "Spyware (สปายแวร์)",
      "Trojan Horse (ม้าโทรจัน)",
      "Ransomware (มัลแวร์เรียกค่าไถ่)",
      "Worm (หนอนอินเทอร์เน็ต)"
    ],
    correctIndex: 2,
    thinkingProcess: [
      "ขั้นตอนที่ 1: วิเคราะห์คีย์เวิร์ดของโจทย์ ได้แก่ 'เข้ารหัสลับไฟล์' (Encryption) และ 'ขู่ให้โอนเงินเพื่อปลดล็อก' (Ransom)",
      "ขั้นตอนที่ 2: พิจารณาประเภทมัลแวร์: Spyware ขโมยข้อมูล, Trojan แอบแฝง, Worm แพร่กระจายตัวเองอัตโนมัติ",
      "ขั้นตอนที่ 3: สรุปผล มัลแวร์ที่ล็อกไฟล์และเรียกเงินคือ Ransomware (มัลแวร์เรียกค่าไถ่)"
    ],
    conceptSummary: "Ransomware มุ่งเป้าเข้ารหัสข้อมูลสำคัญเพื่อตัดการเข้าถึง แล้วขู่เรียกค่าไถ่ การป้องกันคือการสำรองข้อมูลตามกฎ 3-2-1 และอัปเดตระบบสม่ำเสมอ",
    shortcutTip: "คีย์เวิร์ดจำเร็ว: ล็อกไฟล์ + เข้ารหัส + เรียกเงิน = Ransomware",
    diagramType: "security_threats",
    diagramData: {
      threatName: "Ransomware Threat Model",
      stages: [
        "1. ล่อลวงผ่าน Phishing หรือช่องโหว่ซอฟต์แวร์",
        "2. แอบเข้ารหัสไฟล์เอกสารและฐานข้อมูล",
        "3. แสดงข้อความเรียกค่าไถ่ (Ransom Note)",
        "4. มาตรการรับมือ: สำรองข้อมูล 3-2-1 และตัดการเชื่อมต่อเครือข่าย"
      ]
    }
  },
  {
    id: "it_03",
    subjectId: "it_computer",
    topic: "ปัญญาประดิษฐ์ (AI) เบื้องต้น",
    difficulty: "ปานกลาง",
    question: "เทคโนโลยีปัญญาประดิษฐ์ชนิดใดที่ทำงานโดยการเรียนรู้จากฐานข้อมูลภาษาขนาดใหญ่ เพื่อทำหน้าที่สร้างสรรค์เนื้อหาใหม่ เช่น การช่วยร่างสรุปรายงานการประชุม การเขียนตอบอีเมลราชการ หรือการแปลภาษา?",
    options: [
      "Computer Vision (การประมวลผลภาพ)",
      "Generative AI / Large Language Models (LLMs)",
      "Robotic Process Automation (RPA)",
      "Expert Systems แบบดั้งเดิม"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: วิเคราะห์คำว่า 'สร้างสรรค์เนื้อหาใหม่' (Generation) ในรูปแบบข้อความภาษา",
      "ขั้นตอนที่ 2: เปรียบเทียบเทคโนโลยี: Computer Vision เน้นเรื่องภาพ, RPA เน้นการทำงานตามกฎซ้ำๆ",
      "ขั้นตอนที่ 3: Generative AI และ LLM ถูกออกแบบมาเพื่อสังเคราะห์ข้อความภาษาธรรมชาติโดยตรง"
    ],
    conceptSummary: "Generative AI และ Large Language Models (LLMs) เป็นโมเดลที่สามารถสร้างสรรค์ผลลัพธ์ใหม่ทั้งข้อความ ภาพ และโค้ด โดยอาศัยการสั่งการผ่านคำสั่ง (Prompt)",
    shortcutTip: "จำคีย์เวิร์ด: สร้างเนื้อหาใหม่ + ร่างเอกสารสรุปความ = Generative AI",
    diagramType: "ai_ecosystem",
    diagramData: {
      core: "Generative AI Framework",
      branches: [
        "LLMs (ประมวลผลข้อความและร่างเอกสาร)",
        "Computer Vision (ตรวจจับวัตถุและวิเคราะห์ภาพ)",
        "Speech Recognition (แปลงเสียงเป็นข้อความ)",
        "Predictive Analytics (การพยากรณ์ข้อมูล)"
      ]
    }
  },
  {
    id: "it_04",
    subjectId: "it_computer",
    topic: "ฮาร์ดแวร์คอมพิวเตอร์ (Hardware)",
    difficulty: "ง่าย",
    question: "หน่วยความจำประเภทใดที่ทำหน้าที่เก็บข้อมูลและคำสั่งอย่างถาวรแม้ปิดเครื่องคอมพิวเตอร์ โดยบรรจุโปรแกรมเริ่มต้นระบบ (Firmware / BIOS) ไว้ภายใน?",
    options: [
      "RAM (Random Access Memory)",
      "ROM (Read-Only Memory)",
      "Cache Memory (หน่วยความจำแคช)",
      "Virtual Memory (หน่วยความจำเสมือน)"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบเงื่อนไข 'เก็บข้อมูลอย่างถาวรแม้ปิดเครื่อง' (Non-Volatile Memory)",
      "ขั้นตอนที่ 2: พิจารณาตัวเลือก: RAM และ Cache เป็น Volatile (ข้อมูลหายเมื่อไฟดับ)",
      "ขั้นตอนที่ 3: ROM (Read-Only Memory) เป็นหน่วยความจำถาวรที่บรรจุ BIOS/UEFI สำหรับการบูตระบบ"
    ],
    conceptSummary: "ROM เป็นหน่วยความจำแบบลบเลือนไม่ได้ (Non-Volatile) ใช้เก็บชุดคำสั่งระบบพื้นฐาน ส่วน RAM เป็นหน่วยความจำชั่วคราว (Volatile)",
    shortcutTip: "ท่องจำ: RAM ปิดเครื่องหาย | ROM ปิดเครื่องยังอยู่คู่เครื่อง",
    diagramType: "hardware_memory",
    diagramData: {
      type: "หน่วยความจำหลัก",
      rom: "ROM: ถาวร (Non-Volatile) เก็บ BIOS/Firmware",
      ram: "RAM: ชั่วคราว (Volatile) เก็บข้อมูลขณะทำงาน"
    }
  },
  {
    id: "it_05",
    subjectId: "it_computer",
    topic: "การใช้งานโปรแกรมสำนักงาน (Microsoft Word)",
    difficulty: "ปานกลาง",
    question: "ในโปรแกรม Microsoft Word หากต้องการสร้างหนังสือราชการที่มีเนื้อหาเดียวกันแต่ต้องการส่งถึงผู้รับจำนวนหลายร้อยคน โดยให้ชื่อและที่อยู่ของผู้รับเปลี่ยนไปตามรายชื่อในฐานข้อมูล ควรใช้ฟังก์ชันใด?",
    options: [
      "Track Changes (ติดตามการเปลี่ยนแปลง)",
      "Mail Merge (จดหมายเวียน)",
      "Macro (มาโคร)",
      "Cross-reference (การอ้างอิงโยง)"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: โจทย์ระบุถึงการส่งเอกสารเนื้อหาเดียวกันไปยังผู้รับจำนวนมากโดยเปลี่ยนเฉพาะข้อมูลเฉพาะบุคคล",
      "ขั้นตอนที่ 2: ฟังก์ชันมาตรฐานใน Word ที่เชื่อมฐานข้อมูลรายชื่อเข้ากับแบบฟอร์มเอกสารคือ จดหมายเวียน (Mail Merge)"
    ],
    conceptSummary: "Mail Merge (จดหมายเวียน) รวมเอกสารหลัก (Main Document) เข้ากับแหล่งข้อมูล (Data Source) เพื่อสร้างเอกสารเฉพาะบุคคลจำนวนมากอย่างรวดเร็ว",
    shortcutTip: "คีย์เวิร์ด: ข้อความเดียวกัน + ผู้รับหลายคน + ดึงจากตารางรายชื่อ = Mail Merge",
    diagramType: "mail_merge",
    diagramData: {
      mainDoc: "เอกสารหลัก (หนังสือราชการ)",
      dataSource: "แหล่งข้อมูล (รายชื่อผู้รับ Excel/Access)",
      mergedResult: "สร้างเอกสารเฉพาะบุคคลอัตโนมัติ"
    }
  },
  {
    id: "it_06",
    subjectId: "it_computer",
    topic: "การใช้งานโปรแกรมสำนักงาน (Microsoft Excel)",
    difficulty: "ปานกลาง",
    question: "ในโปรแกรม Microsoft Excel ข้อผิดพลาด (Error) รูปแบบใดที่จะแสดงขึ้นเมื่อมีการอ้างอิงเซลล์ที่ถูกลบไปแล้ว หรือตำแหน่งเซลล์ที่เคยผูกสูตรไว้ไม่มีอยู่อีกต่อไป?",
    options: [
      "#DIV/0!",
      "#VALUE!",
      "#REF!",
      "#NAME?"
    ],
    correctIndex: 2,
    thinkingProcess: [
      "ขั้นตอนที่ 1: วิเคราะห์สาเหตุที่โจทย์ระบุ คือ เซลล์ที่ผูกไว้ถูกลบ (Invalid Cell Reference)",
      "ขั้นตอนที่ 2: เปรียบเทียบรหัส Error: #DIV/0! คือหารด้วยศูนย์, #VALUE! คือชนิดข้อมูลผิด, #REF! คือ Reference ไม่ถูกต้อง (ถูกลบ)",
      "ขั้นตอนที่ 3: สรุปผล คือ #REF!"
    ],
    conceptSummary: "รหัสข้อผิดพลาด Excel สำคัญ: #REF! (อ้างอิงเซลล์ที่ไม่มีอยู่/ถูกลบ), #DIV/0! (หารด้วย 0), #VALUE! (ใช้ชนิดข้อมูลผิด เช่น เอาตัวหนังสือมาคำนวณ), #N/A (หาค่าไม่พบ)",
    shortcutTip: "จำเป็นคู่: #REF! = เซลล์ถูกลบหายไป | #DIV/0! = ตัวหารเป็นศูนย์",
    diagramType: "excel_errors",
    diagramData: {
      ref: "#REF! : อ้างอิงเซลล์ไม่ถูกต้อง / เซลล์ถูกลบ",
      div: "#DIV/0! : มีการหารด้วยตัวเลขศูนย์",
      val: "#VALUE! : รูปแบบข้อมูลไม่ถูกต้องในการคำนวณ",
      na: "#N/A : ค้นหาข้อมูลไม่พบในตาราง (VLOOKUP)"
    }
  },
  {
    id: "it_07",
    subjectId: "it_computer",
    topic: "ระบบเครือข่ายคอมพิวเตอร์ (Networking)",
    difficulty: "ปานกลาง",
    question: "หมายเลขไอพีแอดเดรส (IP Address) เวอร์ชัน IPv4 ประกอบด้วยจำนวนกี่บิต (Bits) และมักแสดงผลในรูปแบบตัวเลขฐานสิบกี่ชุดคั่นด้วยเครื่องหมายจุด?",
    options: [
      "16 บิต จำนวน 2 ชุด",
      "32 บิต จำนวน 4 ชุด",
      "64 บิต จำนวน 8 ชุด",
      "128 บิต จำนวน 16 ชุด"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ทบทวนมาตรฐาน IPv4 มีขนาดความยาว 32 บิต",
      "ขั้นตอนที่ 2: แบ่งออกเป็น 4 ไบต์ (Byte) หรือ 4 ส่วน (Octet) แต่ละส่วนมี 8 บิต คั่นด้วยเครื่องหมายจุด เช่น 192.168.1.1",
      "ขั้นตอนที่ 3: เปรียบเทียบกับ IPv6 ซึ่งมีขนาด 128 บิต"
    ],
    conceptSummary: "IPv4 มีขนาด 32 บิต (4 ชุด ชุดละ 8 บิต ตัวเลข 0-255) ส่วน IPv6 มีขนาด 128 บิต เขียนด้วยเลขฐานสิบหก 8 ชุดเพื่อแก้ปัญหา IP ขาดแคลน",
    shortcutTip: "ท่องจำ: IPv4 = 32 บิต (4 ชุดจุด) | IPv6 = 128 บิต",
    diagramType: "ip_structure",
    diagramData: {
      ipv4: "IPv4: 32 บิต แบ่งเป็น 4 ชุด เช่น 192.168.1.100",
      ipv6: "IPv6: 128 บิต เขียนด้วยเลขฐานสิบหก 8 กลุ่ม"
    }
  },
  {
    id: "it_08",
    subjectId: "it_computer",
    topic: "ระบบเครือข่ายคอมพิวเตอร์ (Networking)",
    difficulty: "ปานกลาง",
    question: "บริการใดบนเครือข่ายอินเทอร์เน็ตที่ทำหน้าที่แปลงชื่อโดเมน (Domain Name เช่น www.police.go.th) ให้กลายเป็นหมายเลขไอพีแอดเดรส (IP Address) ของเครื่องเซิร์ฟเวอร์?",
    options: [
      "DHCP (Dynamic Host Configuration Protocol)",
      "DNS (Domain Name System)",
      "FTP (File Transfer Protocol)",
      "SMTP (Simple Mail Transfer Protocol)"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: วิเคราะห์หน้าที่ แปลงชื่อเว็บไซต์เป็นตัวเลข IP",
      "ขั้นตอนที่ 2: พิจารณาโปรโตคอล: DHCP ทำหน้าที่แจก IP อัตโนมัติ, DNS ทำหน้าที่เป็นสมุดโทรศัพท์แปลชื่อเว็บไซต์เป็น IP",
      "ขั้นตอนที่ 3: สรุปคำตอบคือ DNS"
    ],
    conceptSummary: "DNS (Domain Name System) เปรียบเหมือนสมุดโทรศัพท์ของโลกอินเทอร์เน็ต แปลงชื่อภาษาอังกฤษที่มนุษย์จำง่ายให้เป็นหมายเลข IP ที่เครื่องคอมพิวเตอร์ใช้สื่อสาร",
    shortcutTip: "จำแม่น: DNS = แปลงชื่อเว็บเป็นเลข IP | DHCP = แจก IP เข้าเครื่อง",
    diagramType: "dns_flow",
    diagramData: {
      step1: "ผู้ใช้พิมพ์ www.police.go.th",
      step2: "ส่งคำขอไปสอบถาม DNS Server",
      step3: "DNS ส่งหมายเลข IP กลับมาเพื่อเชื่อมต่อไปยังเว็บเซิร์ฟเวอร์"
    }
  },
  {
    id: "it_09",
    subjectId: "it_computer",
    topic: "ความปลอดภัยทางเทคโนโลยีสารสนเทศ (IT Security)",
    difficulty: "ปานกลาง",
    question: "การโจมตีทางไซเบอร์ที่ผู้ไม่หวังดีส่งอีเมลหรือข้อความ SMS ปลอมแปลงแนบลิงก์ที่คล้ายกับเว็บไซต์ธนาคารหรือหน่วยงานรัฐ เพื่อหลอกล่อให้เหยื่อกรอกรหัสผ่านและข้อมูลส่วนบุคคล จัดเป็นการโจมตีประเภทใด?",
    options: [
      "Phishing (ฟิชชิ่ง)",
      "DDoS Attack",
      "SQL Injection",
      "Man-in-the-Middle"
    ],
    correctIndex: 0,
    thinkingProcess: [
      "ขั้นตอนที่ 1: คีย์เวิร์ดของโจทย์คือ ส่งลิงก์หรืออีเมลปลอมแปลงเพื่อ 'ตกเบ็ด' หลอกล่อเอาข้อมูลและรหัสผ่าน",
      "ขั้นตอนที่ 2: รูปแบบการหลอกลวงทางสังคม (Social Engineering) นี้เรียกว่า Phishing",
      "ขั้นตอนที่ 3: DDoS คือยิงเซิร์ฟเวอร์ให้ล่ม, SQL Injection คือเจาะฐานข้อมูล"
    ],
    conceptSummary: "Phishing คือการหลอกลวงแบบวิศวกรรมสังคม (Social Engineering) ผ่านอีเมล เว็บไซต์ปลอม หรือ SMS เพื่อขโมยรหัสผ่านหรือข้อมูลทางการเงิน",
    shortcutTip: "คีย์เวิร์ด: ส่งลิงก์ปลอม + หลอกเอาพาสเวิร์ด = Phishing",
    diagramType: "phishing_model",
    diagramData: {
      concept: "Phishing Attack Vector",
      flow: "ส่งอีเมล/SMS ปลอม -> เหยื่อหลงเชื่อกดลิงก์ -> กรอกข้อมูลในเว็บเลียนแบบ -> แฮกเกอร์ได้รหัสผ่าน"
    }
  },
  {
    id: "it_10",
    subjectId: "it_computer",
    topic: "ความปลอดภัยทางเทคโนโลยีสารสนเทศ (IT Security)",
    difficulty: "ปานกลาง",
    question: "การยืนยันตัวตนแบบหลายปัจจัย (Multi-Factor Authentication: MFA) ข้อใดจัดเป็นปัจจัยประเภท 'สิ่งที่คุณมี' (Something You Have)?",
    options: [
      "รหัสผ่าน (Password) และรหัส PIN",
      "รหัส OTP ที่ได้รับทางโทรศัพท์มือถือ หรือฮาร์ดแวร์โทเคน (Token)",
      "การสแกนลายนิ้วมือ (Fingerprint)",
      "การสแกนม่านตาและจดจำใบหน้า (Face Recognition)"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ทบทวน 3 เสาหลักของการยืนยันตัวตน (Authentication Factors):",
      "- 1. สิ่งที่คุณรู้ (Something you know): รหัสผ่าน, PIN",
      "- 2. สิ่งที่คุณมี (Something you have): สมาร์ตโฟนที่รับ OTP, บัตรสมาร์ตการ์ด, Token",
      "- 3. สิ่งที่คุณเป็น (Something you are): อัตลักษณ์ทางกายภาพ ลายนิ้วมือ ใบหน้า ม่านตา",
      "ขั้นตอนที่ 2: รหัส OTP ทางโทรศัพท์จัดเป็น 'สิ่งที่คุณมี' (ต้องมีอุปกรณ์เครื่องนั้นอยู่กับตัว)"
    ],
    conceptSummary: "MFA แบ่งปัจจัย 3 ด้าน: 1. รู้ (Password/PIN) 2. มี (โทรศัพท์/OTP/Key) 3. เป็น (ลายนิ้วมือ/ใบหน้า) การใช้ร่วมกันอย่างน้อย 2 ด้านช่วยเพิ่มความปลอดภัยสูงมาก",
    shortcutTip: "ท่อง 3 ด้าน: รหัส = รู้ | โทรศัพท์/OTP = มี | นิ้ว/หน้า = เป็น",
    diagramType: "mfa_factors",
    diagramData: {
      know: "Something You Know: รหัสผ่าน, PIN",
      have: "Something You Have: โทรศัพท์รับ OTP, สมาร์ตการ์ด",
      are: "Something You Are: ลายนิ้วมือ, ม่านตา, สแกนใบหน้า"
    }
  },
  {
    id: "it_11",
    subjectId: "it_computer",
    topic: "กฎหมายและระเบียบเทคโนโลยีสารสนเทศ (พ.ร.บ.คอมพิวเตอร์)",
    difficulty: "วิเคราะห์เข้มข้น",
    question: "ตาม พ.ร.บ. ว่าด้วยการกระทำความผิดเกี่ยวกับคอมพิวเตอร์ พ.ศ. 2550 และที่แก้ไขเพิ่มเติม การกระทำโดยมิชอบเพื่อเข้าถึงระบบคอมพิวเตอร์ที่มีมาตรการป้องกันการเข้าถึงโดยเฉพาะ มีความผิดตามมาตราใด?",
    options: [
      "มาตรา 5",
      "มาตรา 7",
      "มาตรา 9",
      "มาตรา 14"
    ],
    correctIndex: 0,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบฐานความผิดตาม พ.ร.บ.คอมพิวเตอร์:",
      "- มาตรา 5: เข้าถึง 'ระบบคอมพิวเตอร์' โดยมิชอบ (มีมาตรการป้องกัน)",
      "- มาตรา 7: เข้าถึง 'ข้อมูลคอมพิวเตอร์' โดยมิชอบ",
      "- มาตรา 9: แก้ไข ดัดแปลง หรือทำลาย 'ข้อมูลคอมพิวเตอร์'",
      "- มาตรา 14: นำเข้า 'ข้อมูลคอมพิวเตอร์ปลอมหรือเท็จ' สู่ระบบ",
      "ขั้นตอนที่ 2: โจทย์ถามถึงการเข้าถึง 'ระบบคอมพิวเตอร์' จึงตรงกับมาตรา 5"
    ],
    conceptSummary: "พ.ร.บ.คอมพิวเตอร์ฯ มาตรา 5 เข้าถึงระบบโดยมิชอบ (จำคุกไม่เกิน 6 เดือน ปรับไม่เกินหนึ่งหมื่นบาท) / มาตรา 7 เข้าถึงข้อมูลโดยมิชอบ / มาตรา 9 ทำลายข้อมูล / มาตรา 14 โพสต์ข้อความเท็จกระทบความมั่นคง",
    shortcutTip: "ไล่ลำดับเลข: ม.5 แอบเข้าระบบ | ม.7 แอบดูข้อมูล | ม.9 แก้ไขข้อมูล | ม.14 ปล่อยข้อมูลเท็จ",
    diagramType: "cyber_law_matrix",
    diagramData: {
      m5: "ม.5 เข้าถึงระบบคอมพิวเตอร์โดยมิชอบ",
      m7: "ม.7 เข้าถึงข้อมูลคอมพิวเตอร์โดยมิชอบ",
      m9: "ม.9 ทำลายหรือแก้ไขข้อมูลโดยมิชอบ",
      m14: "ม.14 นำข้อมูลเท็จเข้าสู่ระบบ"
    }
  },
  {
    id: "it_12",
    subjectId: "it_computer",
    topic: "การคุ้มครองข้อมูลส่วนบุคคล (PDPA)",
    difficulty: "ปานกลาง",
    question: "ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) ข้อใดจัดเป็น 'ข้อมูลส่วนบุคคลอ่อนไหว' (Sensitive Personal Data) ซึ่งกฎหมายห้ามมิให้เก็บรวบรวมโดยไม่ได้รับความยินยอมโดยชัดแจ้ง?",
    options: [
      "ชื่อ-นามสกุล",
      "ที่อยู่ตามทะเบียนบ้าน",
      "ข้อมูลประวัติอาชญากรรม และข้อมูลชีวภาพ (Biometrics)",
      "หมายเลขโทรศัพท์มือถือ"
    ],
    correctIndex: 2,
    thinkingProcess: [
      "ขั้นตอนที่ 1: นิยามข้อมูลส่วนบุคคลทั่วไป: ชื่อ ที่อยู่ เบอร์โทรศัพท์ อีเมล",
      "ขั้นตอนที่ 2: นิยามข้อมูลอ่อนไหวตามมาตรา 26: เชื้อชาติ เผ่าพันธุ์ ความคิดเห็นทางการเมือง ความเชื่อทางศาสนา พฤติกรรมทางเพศ ประวัติอาชญากรรม ข้อมูลสุขภาพ ข้อมูลชีวภาพ",
      "ขั้นตอนที่ 3: ตัวเลือกที่ 3 ระบุถึงข้อมูลประวัติอาชญากรรมและข้อมูลชีวภาพ ซึ่งเป็นข้อมูลอ่อนไหวที่ต้องคุ้มครองเข้มงวดเป็นพิเศษ"
    ],
    conceptSummary: "ข้อมูลส่วนบุคคลอ่อนไหว (Sensitive Data) ตามมาตรา 26 ของ PDPA รวมถึง ศาสนา สุขภาพ ประวัติอาชญากรรม พันธุกรรม และชีวภาพ ต้องได้รับความยินยอมโดยชัดแจ้ง (Explicit Consent) เท่านั้น เว้นแต่มีข้อยกเว้นตามกฎหมาย",
    shortcutTip: "ข้อมูลอ่อนไหว: ประวัติอาชญากรรม, โรคประจำตัว, ลายนิ้วมือ, ศาสนา",
    diagramType: "pdpa_categories",
    diagramData: {
      general: "ข้อมูลทั่วไป: ชื่อ, ที่อยู่, เบอร์โทร, อีเมล",
      sensitive: "ข้อมูลอ่อนไหว: ประวัติอาชญากรรม, ข้อมูลชีวภาพ, สุขภาพ, ศาสนา"
    }
  },
  {
    id: "it_13",
    subjectId: "it_computer",
    topic: "การใช้งานโปรแกรมสำนักงาน (Microsoft PowerPoint)",
    difficulty: "ง่าย",
    question: "ในโปรแกรม Microsoft PowerPoint หากต้องการเริ่มการนำเสนอสไลด์โชว์ตั้งแต่สไลด์แรกสุด สามารถกดปุ่มคีย์ลัดใดบนแป้นพิมพ์?",
    options: [
      "F1",
      "F5",
      "Shift + F5",
      "Ctrl + F5"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบคีย์ลัดการฉายสไลด์ใน PowerPoint",
      "- F5 = เริ่มสไลด์โชว์ตั้งแต่ 'สไลด์แรกสุด'",
      "- Shift + F5 = เริ่มสไลด์โชว์จาก 'สไลด์ปัจจุบัน'",
      "ขั้นตอนที่ 2: สรุปคำตอบคือ F5"
    ],
    conceptSummary: "ปุ่มฟังก์ชันลัดใน PowerPoint: F5 (เริ่มตั้งแต่สไลด์แรก), Shift + F5 (ฉายจากสไลด์ปัจจุบัน), Esc (ออกจากโหมดนำเสนอ), B (พักหน้าจอเป็นสีดำ), W (พักหน้าจอเป็นสีขาว)",
    shortcutTip: "F5 = เริ่มหน้าแรก | Shift + F5 = เริ่มหน้าที่เปิดอยู่",
    diagramType: "powerpoint_shortcuts",
    diagramData: {
      f5: "F5: ฉายสไลด์ตั้งแต่แผ่นแรก",
      shiftF5: "Shift + F5: ฉายสไลด์จากแผ่นปัจจุบัน"
    }
  },
  {
    id: "it_14",
    subjectId: "it_computer",
    topic: "ระบบคลาวด์คอมพิวติ้ง (Cloud Computing)",
    difficulty: "ปานกลาง",
    question: "บริการคลาวด์คอมพิวติ้งประเภทใดที่ผู้ใช้งานสามารถเข้าใช้งานโปรแกรมสำเร็จรูปผ่านทางเว็บบราวเซอร์ได้ทันที โดยไม่ต้องติดตั้งโปรแกรมหรือดูแลเซิร์ฟเวอร์ด้วยตนเอง เช่น Google Workspace หรือ Microsoft 365?",
    options: [
      "IaaS (Infrastructure as a Service)",
      "PaaS (Platform as a Service)",
      "SaaS (Software as a Service)",
      "DaaS (Data as a Service)"
    ],
    correctIndex: 2,
    thinkingProcess: [
      "ขั้นตอนที่ 1: วิเคราะห์ระดับการให้บริการคลาวด์:",
      "- IaaS: เช่าโครงสร้างพื้นฐาน เช่น เครื่อง Server เปล่า, Storage",
      "- PaaS: เช่าระบบสำหรับพัฒนาซอฟต์แวร์ เช่น ฐานข้อมูล รันไทม์",
      "- SaaS: ซอฟต์แวร์สำเร็จรูปพร้อมใช้งานผ่านเว็บ",
      "ขั้นตอนที่ 2: Google Workspace และ Microsoft 365 จัดเป็น SaaS"
    ],
    conceptSummary: "โมเดลบริการ Cloud: IaaS (ฮาร์ดแวร์/เซิร์ฟเวอร์เสมือน), PaaS (แพลตฟอร์มสำหรับเขียนโปรแกรม), SaaS (ซอฟต์แวร์พร้อมใช้งานผ่านอินเทอร์เน็ต)",
    shortcutTip: "SaaS = Software พร้อมใช้ผ่านเว็บทันที",
    diagramType: "cloud_layers",
    diagramData: {
      saas: "SaaS: ซอฟต์แวร์พร้อมใช้ (Google Docs, Office 365)",
      paas: "PaaS: แพลตฟอร์มพัฒนา (App Engine, Database)",
      iaas: "IaaS: โครงสร้างพื้นฐาน (Virtual Machines, Storage)"
    }
  },
  {
    id: "it_15",
    subjectId: "it_computer",
    topic: "การใช้งานโปรแกรมสำนักงาน (Microsoft Word)",
    difficulty: "ง่าย",
    question: "ในระบบปฏิบัติการ Windows และโปรแกรม Microsoft Office ปุ่มคีย์ลัดคู่ใดที่ใช้สำหรับการ 'ค้นหาและแทนที่ข้อความ' (Find and Replace)?",
    options: [
      "Ctrl + F",
      "Ctrl + H",
      "Ctrl + K",
      "Ctrl + G"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบคีย์ลัด: Ctrl + F คือค้นหา (Find), Ctrl + H คือค้นหาและแทนที่ (Find & Replace)",
      "ขั้นตอนที่ 2: Ctrl + K คือแทรกลิงก์ (Hyperlink)",
      "ขั้นตอนที่ 3: สรุปคำตอบคือ Ctrl + H"
    ],
    conceptSummary: "คีย์ลัด Word ที่สำคัญ: Ctrl + F (ค้นหา), Ctrl + H (แทนที่คำ), Ctrl + K (แทรกไฮเปอร์ลิงก์), Ctrl + Z (เลิกทำ), Ctrl + Y (ทำซ้ำ)",
    shortcutTip: "Ctrl + F = ค้นหาคำ | Ctrl + H = แทนที่คำ",
    diagramType: "word_shortcuts",
    diagramData: {
      ctrlF: "Ctrl + F: Find (ค้นหา)",
      ctrlH: "Ctrl + H: Replace (แทนที่)",
      ctrlK: "Ctrl + K: Hyperlink (ใส่ลิงก์)"
    }
  },
  {
    id: "it_16",
    subjectId: "it_computer",
    topic: "ฮาร์ดแวร์และอุปกรณ์เครือข่าย",
    difficulty: "ปานกลาง",
    question: "อุปกรณ์เครือข่ายชนิดใดที่ทำหน้าที่เลือกเส้นทางที่ดีที่สุดในการส่งแพ็กเก็ตข้อมูลข้ามระหว่างเครือข่ายคนละวง (คนละ Network Segment) เช่น การเชื่อมต่อเครือข่ายภายในหน่วยงานออกสู่อินเทอร์เน็ต?",
    options: [
      "Hub (ฮับ)",
      "Switch (สวิตช์)",
      "Router (เราเตอร์)",
      "Repeater (รีพีตเตอร์)"
    ],
    correctIndex: 2,
    thinkingProcess: [
      "ขั้นตอนที่ 1: วิเคราะห์หน้าที่: เลือกเส้นทาง (Routing) ข้ามระหว่างเครือข่ายคนละวง",
      "ขั้นตอนที่ 2: Hub และ Switch ทำงานเชื่อมต่ออุปกรณ์ภายในเครือข่ายวงเดียวกัน (LAN เดียวกัน)",
      "ขั้นตอนที่ 3: อุปกรณ์ที่เชื่อมข้าม Network และหาเส้นทางคือ Router (ทำงานบน Layer 3 Network Layer)"
    ],
    conceptSummary: "Router มีหน้าที่กำหนดเส้นทางและส่งต่อข้อมูลระหว่างเครือข่ายที่แตกต่างกัน โดยพิจารณาจาก IP Address ในขณะที่ Switch ส่งข้อมูลในวงเดียวกันตาม MAC Address",
    shortcutTip: "หาเส้นทางข้ามวงเครือข่าย = Router เสมอ",
    diagramType: "network_devices",
    diagramData: {
      router: "Router: เชื่อมต่อและเลือกเส้นทางข้ามเครือข่าย (Layer 3)",
      switch: "Switch: เชื่อมต่อคอมพิวเตอร์ในวง LAN เดียวกัน (Layer 2)",
      hub: "Hub: กระจายสัญญาณข้อมูลแบบดั้งเดิม"
    }
  },
  {
    id: "it_17",
    subjectId: "it_computer",
    topic: "การใช้งานโปรแกรมสำนักงาน (Microsoft Excel)",
    difficulty: "ปานกลาง",
    question: "ในโปรแกรม Microsoft Excel หากต้องการนับจำนวนเซลล์ที่มีตัวเลขและตัวอักษรทั้งหมดในช่วงข้อมูล โดยไม่นับเซลล์ว่าง ต้องใช้ฟังก์ชันใด?",
    options: [
      "=COUNT()",
      "=COUNTA()",
      "=COUNTBLANK()",
      "=COUNTIF()"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: แยกแยะฟังก์ชันตระกูล COUNT ใน Excel:",
      "- =COUNT() นับเฉพาะเซลล์ที่เป็น 'ตัวเลข'",
      "- =COUNTA() นับเซลล์ที่มี 'ข้อมูลทุกชนิด' ทั้งตัวเลขและตัวอักษร (ยกเว้นเซลล์ว่าง)",
      "- =COUNTBLANK() นับเฉพาะ 'เซลล์ว่าง'",
      "ขั้นตอนที่ 2: โจทย์ต้องการนับทั้งตัวเลขและตัวอักษร จึงต้องใช้ =COUNTA()"
    ],
    conceptSummary: "=COUNT นับเฉพาะตัวเลข / =COUNTA นับทุกเซลล์ที่ไม่ว่าง (All non-empty cells) / =COUNTIF นับตามเงื่อนไขที่กำหนด",
    shortcutTip: "COUNT = นับเฉพาะตัวเลข | COUNTA = นับทุกอย่างที่ไม่ว่าง",
    diagramType: "excel_count",
    diagramData: {
      count: "COUNT: ตัวเลขเท่านั้น",
      counta: "COUNTA: ตัวเลข + ตัวหนังสือ (ไม่ว่าง)",
      blank: "COUNTBLANK: เฉพาะช่องว่าง"
    }
  },
  {
    id: "it_18",
    subjectId: "it_computer",
    topic: "ฮาร์ดแวร์คอมพิวเตอร์ (Hardware)",
    difficulty: "ง่าย",
    question: "อุปกรณ์จัดเก็บข้อมูลแบบใดที่ไม่มีชิ้นส่วนกลไกเคลื่อนไหวภายใน โดยใช้ชิปหน่วยความจำแฟลชในการบันทึกข้อมูล ทำให้มีความเร็วในการอ่าน-เขียนข้อมูลสูงกว่าและทนทานต่อแรงสั่นสะเทือนมากกว่าฮาร์ดดิสก์แบบเดิม?",
    options: [
      "Magnetic Tape",
      "Floppy Disk",
      "Hard Disk Drive (HDD)",
      "Solid State Drive (SSD)"
    ],
    correctIndex: 3,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบคุณสมบัติ 'ไม่มีชิ้นส่วนเคลื่อนไหว' และ 'ใช้ชิปแฟลชเมมโมรี่'",
      "ขั้นตอนที่ 2: HDD มีจานแม่เหล็กหมุนและหัวอ่าน, ส่วน SSD (Solid State Drive) เป็นชิปอิเล็กทรอนิกส์ทั้งหมด"
    ],
    conceptSummary: "SSD (Solid State Drive) ใช้ Flash Memory บันทึกข้อมูล มีความเร็วสูง ประหยัดไฟ และทนต่อแรงตกกระแทกมากกว่า HDD ที่ใช้จานแม่เหล็กหมุน",
    shortcutTip: "ชิปความเร็วสูง ไม่มีจานหมุน = SSD",
    diagramType: "storage_compare",
    diagramData: {
      ssd: "SSD: ชิปแฟลช ไม่มีชิ้นส่วนเคลื่อนไหว เร็วสูง ทนทาน",
      hdd: "HDD: จานแม่เหล็กหมุน มีมอเตอร์ ช้ากว่า ไวต่อแรงกระแทก"
    }
  },
  {
    id: "it_19",
    subjectId: "it_computer",
    topic: "ระบบเครือข่ายคอมพิวเตอร์ (OSI Model)",
    difficulty: "วิเคราะห์เข้มข้น",
    question: "ตามแบบจำลองเครือข่าย OSI 7 Layers เลเยอร์ (Layer) ลำดับแรกสุดที่อยู่ใกล้ชิดกับผู้ใช้งานมากที่สุด และเป็นที่ทำงานของโปรโตคอล HTTP, HTTPS, FTP, DNS คือชั้นใด?",
    options: [
      "Transport Layer (ชั้นที่ 4)",
      "Network Layer (ชั้นที่ 3)",
      "Session Layer (ชั้นที่ 5)",
      "Application Layer (ชั้นที่ 7)"
    ],
    correctIndex: 3,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ทบทวนลำดับชั้น OSI 7 Layers จากล่างขึ้นบน:",
      "1. Physical -> 2. Data Link -> 3. Network -> 4. Transport -> 5. Session -> 6. Presentation -> 7. Application",
      "ขั้นตอนที่ 2: ชั้นที่ 7 (Application Layer) เป็นชั้นบนสุดที่ติดต่อกับโปรแกรมของผู้ใช้งาน และเป็นที่อยู่ของ HTTP, HTTPS, SMTP, DNS"
    ],
    conceptSummary: "Application Layer (ชั้นที่ 7) ให้บริการโปรโตคอลระดับแอปพลิเคชัน เช่น เว็บบราวเซอร์ อีเมล ในขณะที่ Physical Layer (ชั้นที่ 1) คือสายสัญญาณและคลื่นวิทยุ",
    shortcutTip: "จำลำดับ 7 ชั้น: All People Seem To Need Data Processing (A, P, S, T, N, D, P)",
    diagramType: "osi_layers",
    diagramData: {
      l7: "Layer 7 Application: HTTP, HTTPS, DNS, อีเมล",
      l4: "Layer 4 Transport: TCP, UDP (พอร์ต)",
      l3: "Layer 3 Network: IP Address, Router",
      l2: "Layer 2 Data Link: MAC Address, Switch"
    }
  },
  {
    id: "it_20",
    subjectId: "it_computer",
    topic: "ความปลอดภัยทางเทคโนโลยีสารสนเทศ (IT Security)",
    difficulty: "ปานกลาง",
    question: "หลักการสำรองข้อมูลตามมาตรฐานสากล 'กฎ 3-2-1' (3-2-1 Backup Rule) ข้อใดอธิบายความหมายได้ถูกต้อง?",
    options: [
      "สำรองข้อมูล 3 ครั้งต่อวัน ใน 2 อุปกรณ์ และเก็บไว้ 1 เดือน",
      "เก็บข้อมูลสำรอง 3 ชุด ในสื่อบันทึกที่ต่างกัน 2 ชนิด และเก็บไว้นอกสถานที่ 1 แห่ง",
      "มีรหัสผ่าน 3 ชุด ยืนยันตัวตน 2 ขั้นตอน และตรวจสอบ 1 ครั้งต่อสัปดาห์",
      "สำรองข้อมูลของ 3 แผนก ลงใน 2 เซิร์ฟเวอร์ และมีผู้ดูแล 1 คน"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบนิยามของ 3-2-1 Backup Rule:",
      "- 3 คือ เก็บข้อมูลสำรอง 3 ชุด (ต้นฉบับ 1 + สำรอง 2)",
      "- 2 คือ จัดเก็บบนสื่อบันทึกที่ต่างประเภทกัน 2 ชนิด (เช่น Harddisk + Cloud หรือ Tape)",
      "- 1 คือ เก็บสำรองไว้นอกสถานที่ (Off-site / Cloud) อย่างน้อย 1 แห่ง ป้องกันไฟไหม้/น้ำท่วม"
    ],
    conceptSummary: "กฎการสำรองข้อมูล 3-2-1: 3 สำเนาข้อมูล, 2 ชนิดของสื่อบันทึก, 1 สำเนาเก็บไว้นอกสถานที่ เพื่อรับประกันความอยู่รอดของข้อมูลเมื่อเกิดภัยพิบัติหรือแรนซัมแวร์",
    shortcutTip: "3-2-1: 3 สำเนา • 2 สื่อบันทึก • 1 นอกสถานที่",
    diagramType: "backup_rule",
    diagramData: {
      three: "3: มีข้อมูล 3 ชุด (1 ต้นฉบับ + 2 สำรอง)",
      two: "2: บันทึกบนสื่อต่างกัน 2 ชนิด",
      one: "1: เก็บไว้นอกสถานที่ (Off-site/Cloud) 1 แห่ง"
    }
  },
  {
    id: "it_21",
    subjectId: "it_computer",
    topic: "การใช้งานโปรแกรมสำนักงาน (Microsoft Excel)",
    difficulty: "ปานกลาง",
    question: "ในโปรแกรม Microsoft Excel ฟังก์ชัน =VLOOKUP(D2, A2:B20, 2, FALSE) พารามิเตอร์ 'FALSE' ตัวสุดท้ายมีความหมายอย่างไร?",
    options: [
      "ให้ค้นหาค่าที่ใกล้เคียงที่สุด (Approximate Match)",
      "ให้ค้นหาค่าที่ตรงกันทุกประการ (Exact Match)",
      "ให้เรียงลำดับข้อมูลจากน้อยไปหามากก่อนค้นหา",
      "ให้ข้ามการค้นหาหากพบค่าว่าง"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบโครงสร้าง =VLOOKUP(lookup_value, table_array, col_index, [range_lookup])",
      "ขั้นตอนที่ 2: พารามิเตอร์สุดท้าย range_lookup มี 2 ทางเลือก:",
      "- TRUE หรือ 1 หรือละเว้นไว้ = ค้นหาค่าใกล้เคียง",
      "- FALSE หรือ 0 = ค้นหาค่าที่ตรงกันพอดีเป๊ะ (Exact Match)"
    ],
    conceptSummary: "ใน VLOOKUP การใส่ FALSE หรือ 0 หมายถึงต้องการค้นหาค่าที่ตรงเป๊ะ 100% หากไม่พบจะแสดงผลเป็น #N/A",
    shortcutTip: "VLOOKUP ลงท้ายด้วย FALSE หรือ 0 = ค้นหาตรงเป๊ะทุกตัวอักษร",
    diagramType: "vlookup_param",
    diagramData: {
      falseVal: "FALSE (หรือ 0) = Exact Match (ตรงกันเป๊ะ)",
      trueVal: "TRUE (หรือ 1) = Approximate Match (ค่าใกล้เคียง)"
    }
  },
  {
    id: "it_22",
    subjectId: "it_computer",
    topic: "ปัญญาประดิษฐ์และวิทยาการข้อมูล",
    difficulty: "ปานกลาง",
    question: "ในวงการปัญญาประดิษฐ์ (AI) ปรากฏการณ์ที่แบบจำลองภาษาขนาดใหญ่ (LLM) สร้างคำตอบที่ฟังดูน่าเชื่อถือแต่เป็นข้อมูลเท็จที่ไม่มีอยู่จริงหรือมโนขึ้นมา เรียกว่าอะไร?",
    options: [
      "Overfitting",
      "AI Hallucination (อาการประสาทหลอนของเอไอ)",
      "Data Poisoning",
      "Underfitting"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: โจทย์ระบุถึงการที่ AI สร้างคำตอบเท็จที่มั่นใจแต่มโนขึ้นเอง",
      "ขั้นตอนที่ 2: ศัพท์เทคนิคเฉพาะของ LLM เรียกว่า AI Hallucination",
      "ขั้นตอนที่ 3: Overfitting คือการเทรนข้อมูลซ้ำซากเกินไปใน Machine Learning ทั่วไป"
    ],
    conceptSummary: "AI Hallucination คืออาการที่โมเดลภาษาแต่งข้อมูลที่ผิดพลาดหรือไม่เป็นความจริงขึ้นมาอย่างมั่นใจ เนื่องจากโมเดลทำงานบนหลักการคาดเดาความน่าจะเป็นของคำถัดไป",
    shortcutTip: "AI ตอบมั่นใจแต่มโนข้อมูลขึ้นเอง = AI Hallucination",
    diagramType: "ai_hallucination",
    diagramData: {
      concept: "AI Hallucination",
      desc: "การสร้างข้อเท็จจริงเท็จด้วยความมั่นใจสูง ป้องกันได้ด้วยการทำ Grounding และ RAG"
    }
  },
  {
    id: "it_23",
    subjectId: "it_computer",
    topic: "ระบบเครือข่ายและเว็บเทคโนโลยี",
    difficulty: "ง่าย",
    question: "โปรโตคอล HTTPS มีความแตกต่างจาก HTTP ทั่วไปอย่างไรในแง่ของความปลอดภัย?",
    options: [
      "HTTPS ทำงานได้เร็วกว่า HTTP 10 เท่า",
      "HTTPS มีการเข้ารหัสลับข้อมูล (SSL/TLS Encryption) ระหว่างผู้ใช้กับเซิร์ฟเวอร์",
      "HTTPS ใช้ได้เฉพาะเครื่องคอมพิวเตอร์ของหน่วยงานราชการเท่านั้น",
      "HTTPS ไม่จำเป็นต้องใช้หมายเลขไอพีแอดเดรส"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบตัวอักษร 'S' ใน HTTPS ย่อมาจาก Secure",
      "ขั้นตอนที่ 2: ใช้โปรโตคอลเข้ารหัส SSL/TLS ทำให้ข้อมูลที่ส่งผ่านสายเครือข่ายไม่สามารถถูกดักอ่านได้ง่าย"
    ],
    conceptSummary: "HTTPS (Hypertext Transfer Protocol Secure) ใช้พอร์ตมาตรฐาน 443 ทำการเข้ารหัสลับข้อมูลแบบ End-to-End เพื่อป้องกันการดักจับข้อมูลรหัสผ่านหรือข้อมูลบัตรเครดิต",
    shortcutTip: "HTTPS = มีตัว S คือ Secure เข้ารหัส SSL/TLS (พอร์ต 443)",
    diagramType: "http_vs_https",
    diagramData: {
      http: "HTTP (พอร์ต 80): ข้อมูลส่งแบบข้อความธรรมดา (Plain Text) เสี่ยงถูกดักอ่าน",
      https: "HTTPS (พอร์ต 443): มีการเข้ารหัสลับ SSL/TLS ข้อมูลปลอดภัยจากการดักจับ"
    }
  },
  {
    id: "it_24",
    subjectId: "it_computer",
    topic: "ความปลอดภัยทางเทคโนโลยีสารสนเทศ (IT Security)",
    difficulty: "ปานกลาง",
    question: "การโจมตีทางไซเบอร์รูปแบบใดที่มีเป้าหมายเพื่อทำให้เครื่องแม่ข่าย (Server) หรือระบบบริการหยุดชะงัก จนผู้ใช้งานทั่วไปไม่สามารถเข้าถึงได้ โดยการส่งทราฟฟิกมหาศาลจากคอมพิวเตอร์ผีดิบ (Botnet) เข้าถล่มพร้อมกัน?",
    options: [
      "Brute Force Attack",
      "DDoS Attack (Distributed Denial of Service)",
      "Zero-Day Exploit",
      "Cross-Site Scripting (XSS)"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: วิเคราะห์เป้าหมายการโจมตี คือ 'ทำให้ระบบบริการหยุดชะงัก' (Denial of Service)",
      "ขั้นตอนที่ 2: ใช้คอมพิวเตอร์หลายเครื่องทั่วโลก (Botnet/Distributed) ส่งข้อมูลถล่มพร้อมกัน เรียกว่า DDoS Attack"
    ],
    conceptSummary: "DDoS (Distributed Denial of Service) มุ่งโจมตีสภาพความพร้อมใช้งาน (Availability) ของระบบ โดยระดมยิงคำขอจำนวนมหาศาลจนแบนด์วิธหรือทรัพยากรเซิร์ฟเวอร์เต็มและล่มลง",
    shortcutTip: "ยิงทราฟฟิกลวงถล่มเซิร์ฟเวอร์จนล่ม = DDoS Attack",
    diagramType: "ddos_attack",
    diagramData: {
      attacker: "แฮกเกอร์ผู้สั่งการ",
      botnet: "เครือข่าย Botnet นับแสนเครื่อง",
      target: "เซิร์ฟเวอร์เป้าหมายถูกยิงข้อมูลจนล่ม (Denial of Service)"
    }
  },
  {
    id: "it_25",
    subjectId: "it_computer",
    topic: "การจัดการฐานข้อมูล (Database)",
    difficulty: "ปานกลาง",
    question: "ในระบบฐานข้อมูลเชิงสัมพันธ์ (Relational Database) คีย์ (Key) ประเภทใดที่ทำหน้าที่ระบุแถวข้อมูลในตารางได้อย่างเฉพาะเจาะจง โดยค่าของฟิลด์นั้นต้องไม่ซ้ำกันและต้องไม่มีค่าว่าง (Not Null)?",
    options: [
      "Foreign Key (คีย์นอก)",
      "Primary Key (คีย์หลัก)",
      "Candidate Key (คีย์สำรอง)",
      "Composite Key"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบคุณสมบัติ 'ค่าไม่ซ้ำกัน (Unique)' และ 'ห้ามเป็นค่าว่าง (Not Null)' เพื่อใช้ชี้แถวข้อมูลเฉพาะ",
      "ขั้นตอนที่ 2: นิยามนี้คือคุณสมบัติพื้นฐานของ คีย์หลัก หรือ Primary Key (เช่น เลขประจำตัวประชาชน หรือรหัสพนักงาน)"
    ],
    conceptSummary: "Primary Key (คีย์หลัก) คือฟิลด์ที่กำหนดความไม่ซ้ำกันของข้อมูลในแต่ละระเบียน เช่น รหัสบัตรประชาชน ส่วน Foreign Key (คีย์นอก) คือคีย์ที่ใช้เชื่อมโยงกับ Primary Key ของอีกตารางหนึ่ง",
    shortcutTip: "คีย์หลัก (Primary Key) = ห้ามซ้ำ และ ห้ามว่าง",
    diagramType: "database_keys",
    diagramData: {
      pk: "Primary Key: รหัสไม่ซ้ำ ชี้ระเบียนชัดเจน (เช่น เลขประจำตัวประชาชน)",
      fk: "Foreign Key: เชื่อมโยงข้อมูลไปยังตารางอื่น"
    }
  },
  {
    id: "it_26",
    subjectId: "it_computer",
    topic: "การใช้งานโปรแกรมสำนักงาน (Microsoft Word)",
    difficulty: "ปานกลาง",
    question: "หากต้องการแบ่งส่วนเอกสารใน Microsoft Word เพื่อให้แต่ละบทสามารถกำหนดหมายเลขหน้า หรือกำหนดการวางแนวกระดาษ (แนวตั้งและแนวนอน) แตกต่างกันได้ ต้องใช้คำสั่งใด?",
    options: [
      "Page Break (ตัวแบ่งหน้า)",
      "Section Break (ตัวแบ่งส่วน)",
      "Column Break (ตัวแบ่งคอลัมน์)",
      "Line Break (ตัวแบ่งบรรทัด)"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: วิเคราะห์ความต้องการ คือ การเปลี่ยนการตั้งค่าหน้ากระดาษ (แนวตั้ง/แนวนอน หรือ หัวกระดาษ) คนละส่วน",
      "ขั้นตอนที่ 2: Page Break แค่ขึ้นหน้าใหม่แต่การตั้งค่ายังเหมือนเดิม",
      "ขั้นตอนที่ 3: Section Break (ตัวแบ่งส่วน) เท่านั้นที่สามารถแยกคุณสมบัติและตั้งค่าต่างกันในแต่ละส่วนของเอกสารได้"
    ],
    conceptSummary: "Section Break (ตัวแบ่งส่วน) ใช้แยกเอกสารออกเป็นส่วนย่อย ทำให้สามารถตั้งค่าระยะขอบ การวางแนวกระดาษ และหัว/ท้ายกระดาษแยกอิสระจากกันได้",
    shortcutTip: "อยากเปลี่ยนแนวตั้ง-แนวนอนในไฟล์เดียวกัน = ใช้ Section Break",
    diagramType: "word_breaks",
    diagramData: {
      pageBreak: "Page Break: แค่ขึ้นหน้าใหม่ (การตั้งค่าเดิม)",
      sectionBreak: "Section Break: แยกส่วนอิสระ (ตั้งแนวตั้ง/นอน หัวกระดาษ แยกกันได้)"
    }
  },
  {
    id: "it_27",
    subjectId: "it_computer",
    topic: "ฮาร์ดแวร์และการเชื่อมต่อ",
    difficulty: "ง่าย",
    question: "พอร์ตมาตรฐานแบบใดที่สามารถรับ-ส่งข้อมูล ส่งสัญญาณภาพและเสียงความละเอียดสูง และจ่ายพลังงานชาร์จไฟได้ในสายเส้นเดียว โดยมีหัวต่อแบบสมมาตรที่สามารถเสียบใช้งานได้ทั้งสองด้าน?",
    options: [
      "VGA",
      "USB Type-A",
      "USB Type-C",
      "RS-232"
    ],
    correctIndex: 2,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบคุณสมบัติ 'หัวต่อสมมาตร เสียบได้สองด้าน' และ 'ส่งได้ทั้งภาพ เสียง ข้อมูล และพลังงานไฟ'",
      "ขั้นตอนที่ 2: พอร์ตมาตรฐานสากลยุคใหม่นี้คือ USB Type-C"
    ],
    conceptSummary: "USB Type-C เป็นพอร์ตอเนกประสงค์ขนาดกะทัดรัด รองรับโปรโตคอลหลากหลาย เช่น Thunderbolt, DisplayPort, และ USB Power Delivery (PD)",
    shortcutTip: "เสียบได้ 2 ด้าน ส่งทั้งภาพ เสียง ไฟ = USB Type-C",
    diagramType: "usb_c_spec",
    diagramData: {
      name: "USB Type-C",
      features: "สมมาตรกลับด้านได้ • รองรับดาต้า พาวเวอร์เดลิเวอรี และภาพระดับ 4K"
    }
  },
  {
    id: "it_28",
    subjectId: "it_computer",
    topic: "ซอฟต์แวร์และการจัดการระบบ",
    difficulty: "ปานกลาง",
    question: "ซอฟต์แวร์ประเภท 'Open Source' (รหัสเปิด) มีลักษณะสำคัญประการใดที่แตกต่างจากซอฟต์แวร์แบบ Commercial ทั่วไป?",
    options: [
      "ห้ามนำไปใช้งานในหน่วยงานราชการ",
      "ผู้พัฒนาเปิดเผยซอร์สโค้ด (Source Code) ให้นำไปศึกษา แก้ไข และพัฒนาต่อยอดได้อย่างเสรี",
      "ใช้งานได้เฉพาะบนระบบปฏิบัติการ Linux เท่านั้น",
      "ไม่มีระบบรักษาความปลอดภัยใดๆ"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: คำว่า Open Source หัวใจสำคัญคือการ 'เปิดเผยรหัสต้นฉบับ' (Source Code)",
      "ขั้นตอนที่ 2: อนุญาตให้สาธารณชนนำไปตรวจสอบ แก้ไข พัฒนาต่อยอดได้ตามสัญญาอนุญาต เช่น GPL, MIT, Apache"
    ],
    conceptSummary: "Open Source Software (เช่น Linux, LibreOffice, Python, Android) เปิดเผย Source Code ให้นักพัฒนานำไปพัฒนาปรับปรุงได้ฟรี ช่วยลดค่าลิขสิทธิ์ของภาครัฐ",
    shortcutTip: "Open Source = เปิดเผยซอร์สโค้ด ตรวจสอบและดัดแปลงได้",
    diagramType: "open_source",
    diagramData: {
      open: "Open Source: เปิดโค้ด ปรับแต่งได้ ตรวจสอบได้ (Linux, LibreOffice)",
      closed: "Proprietary: ปิดโค้ด ลิขสิทธิ์เฉพาะบริษัท (MS Windows, macOS)"
    }
  },
  {
    id: "it_29",
    subjectId: "it_computer",
    topic: "ความปลอดภัยทางเทคโนโลยีสารสนเทศ (IT Security)",
    difficulty: "วิเคราะห์เข้มข้น",
    question: "สามเหลี่ยมความมั่นคงปลอดภัยสารสนเทศ (CIA Triad) ประกอบด้วย 3 องค์ประกอบหลัก ข้อใดคือความหมายของ 'Integrity' (ความถูกต้องสมบูรณ์ของข้อมูล)?",
    options: [
      "ข้อมูลต้องถูกปกปิดเป็นความลับ ไม่ให้ผู้ไม่มีสิทธิเข้าถึง",
      "ข้อมูลต้องมีความถูกต้อง แท้จริง และไม่ถูกลักลอบแก้ไขหรือดัดแปลงโดยไม่ได้รับอนุญาต",
      "ข้อมูลและระบบต้องพร้อมใช้งานอยู่เสมอเมื่อผู้มีสิทธิต้องการเรียกใช้",
      "ข้อมูลต้องถูกเข้ารหัสด้วยความยาวคีย์อย่างน้อย 256 บิต"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ทบทวนสามเหลี่ยม CIA Triad:",
      "- C = Confidentiality (การรักษาความลับ): ป้องกันการแอบดู",
      "- I = Integrity (ความถูกต้องสมบูรณ์): ป้องกันการแก้ไขดัดแปลงข้อมูลโดยมิชอบ",
      "- A = Availability (สภาพพร้อมใช้งาน): ระบบต้องพร้อมให้บริการ ไม่ล่ม",
      "ขั้นตอนที่ 2: โจทย์ถามถึง Integrity จึงตรงกับข้อ 2"
    ],
    conceptSummary: "CIA Triad: 1. Confidentiality (ความลับ) 2. Integrity (ความถูกต้องสมบูรณ์ ไม่ถูกดัดแปลง) 3. Availability (ความพร้อมใช้งานเมื่อต้องการ)",
    shortcutTip: "C = ความลับ | I = ไม่ถูกดัดแปลง (สมบูรณ์) | A = พร้อมใช้งาน",
    diagramType: "cia_triad",
    diagramData: {
      c: "Confidentiality: รักษาความลับ ป้องกันการแอบดู",
      i: "Integrity: ความถูกต้องสมบูรณ์ ไม่ถูกแก้ไขแอบแฝง",
      a: "Availability: ความพร้อมใช้งาน ระบบไม่ล่ม"
    }
  },
  {
    id: "it_30",
    subjectId: "it_computer",
    topic: "การใช้งานโปรแกรมสำนักงาน (Microsoft Excel)",
    difficulty: "ปานกลาง",
    question: "ในโปรแกรม Microsoft Excel หากต้องการรวมผลรวมของยอดเงินในคอลัมน์ C เฉพาะแถวที่มีสถานะในคอลัมน์ B เป็นคำว่า 'ผ่าน' เท่านั้น ต้องใช้ฟังก์ชันใด?",
    options: [
      "=SUM(C2:C50)",
      "=COUNTIF(B2:B50, \"ผ่าน\")",
      "=SUMIF(B2:B50, \"ผ่าน\", C2:C50)",
      "=IF(B2:B50=\"ผ่าน\", C2:C50)"
    ],
    correctIndex: 2,
    thinkingProcess: [
      "ขั้นตอนที่ 1: โจทย์ต้องการ 'ผลรวม' (SUM) ภายใต้ 'เงื่อนไข' (IF) จึงต้องใช้ฟังก์ชัน =SUMIF()",
      "ขั้นตอนที่ 2: โครงสร้างของ SUMIF: =SUMIF(ช่วงที่ตรวจเงื่อนไข, เงื่อนไข, ช่วงตัวเลขที่จะบวก)",
      "ขั้นตอนที่ 3: แทนค่า: ช่วงตรวจคือ B2:B50, เงื่อนไขคือ \"ผ่าน\", ช่วงตัวเลขคือ C2:C50 ได้เป็น =SUMIF(B2:B50, \"ผ่าน\", C2:C50)"
    ],
    conceptSummary: "ฟังก์ชัน =SUMIF(range, criteria, [sum_range]) ใช้หาผลรวมแบบมีเงื่อนไขเดียว หากมีหลายเงื่อนไขต้องใช้ =SUMIFS()",
    shortcutTip: "SUMIF = หาผลรวมแบบมีเงื่อนไข (ตรวจคอลัมน์ B แล้วบวกตัวเลขในคอลัมน์ C)",
    diagramType: "excel_sumif",
    diagramData: {
      syntax: "=SUMIF(ช่วงตรวจเงื่อนไข, \"เงื่อนไข\", ช่วงผลรวม)",
      example: "=SUMIF(B2:B50, \"ผ่าน\", C2:C50)"
    }
  },
  {
    id: "it_31",
    subjectId: "it_computer",
    topic: "ระบบเครือข่ายไร้สาย (Wi-Fi)",
    difficulty: "ง่าย",
    question: "มาตรฐานการเข้ารหัสความปลอดภัยของเครือข่าย Wi-Fi รูปแบบใดในปัจจุบันที่ให้ความมั่นคงปลอดภัยสูงสุดและเป็นมาตรฐานใหม่ล่าสุดสำหรับการใช้งานทั่วไป?",
    options: [
      "WEP (Wired Equivalent Privacy)",
      "WPA",
      "WPA2",
      "WPA3"
    ],
    correctIndex: 3,
    thinkingProcess: [
      "ขั้นตอนที่ 1: วิวัฒนาการความปลอดภัย Wi-Fi: WEP (เก่าสุด ถูกแฮกง่าย) -> WPA -> WPA2 (ใช้แพร่หลาย) -> WPA3 (มาตรฐานใหม่ล่าสุด ป้องกันการดักรหัสผ่านได้ดีที่สุด)",
      "ขั้นตอนที่ 2: สรุปคำตอบคือ WPA3"
    ],
    conceptSummary: "WPA3 คือมาตรฐานความปลอดภัย Wi-Fi ยุคปัจจุบัน ป้องกันการเดารหัสผ่านแบบ Brute Force ได้อย่างมีประสิทธิภาพ และบังคับใช้การเข้ารหัส 192 บิตในระดับองค์กร",
    shortcutTip: "ความปลอดภัย Wi-Fi ล่าสุดและดีที่สุด = WPA3",
    diagramType: "wifi_security",
    diagramData: {
      evolution: "WEP (อันตราย เลิกใช้) -> WPA -> WPA2 -> WPA3 (ปลอดภัยสูงสุดปัจจุบัน)"
    }
  },
  {
    id: "it_32",
    subjectId: "it_computer",
    topic: "ฮาร์ดแวร์คอมพิวเตอร์ (CPU Architecture)",
    difficulty: "ปานกลาง",
    question: "หน่วยประมวลผลกลาง (CPU) มีส่วนประกอบหลัก 2 ส่วนในการทำงาน ได้แก่ หน่วยใด?",
    options: [
      "หน่วยความจำหลัก และ หน่วยความจำสำรอง",
      "หน่วยควบคุม (CU) และ หน่วยคำนวณและตรรกะ (ALU)",
      "แป้นพิมพ์ และ จอภาพ",
      "ฮาร์ดดิสก์ และ แรม"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบโครงสร้างสถาปัตยกรรมภายในของ CPU",
      "- CU (Control Unit): ควบคุมการทำงาน ถอดรหัสคำสั่ง และส่งต่อการทำงาน",
      "- ALU (Arithmetic and Logic Unit): ทำหน้าที่คำนวณคณิตศาสตร์และประมวลผลตรรกะเปรียบเทียบ",
      "ขั้นตอนที่ 2: สรุปส่วนประกอบหลักของ CPU คือ CU และ ALU"
    ],
    conceptSummary: "หัวใจของ CPU คือ ALU (คำนวณ บวกลบคูณหาร เปรียบเทียบจริง/เท็จ) ทำงานร่วมกับ CU (ควบคุมการอ่านคำสั่งและประสานงานอุปกรณ์) โดยมี Register ช่วยพักข้อมูลชั่วคราวความเร็วสูง",
    shortcutTip: "CPU = CU (ควบคุม) + ALU (คำนวณตรรกะ)",
    diagramType: "cpu_arch",
    diagramData: {
      cu: "Control Unit (CU): สั่งการ ถอดรหัส ควบคุมอุปกรณ์",
      alu: "Arithmetic Logic Unit (ALU): บวก ลบ คูณ หาร ตรรกศาสตร์"
    }
  },
  {
    id: "it_33",
    subjectId: "it_computer",
    topic: "ระบบสารสนเทศและการสื่อสาร (Internet of Things)",
    difficulty: "ง่าย",
    question: "แนวคิดทางเทคโนโลยีที่เชื่อมโยงอุปกรณ์ เครื่องมือ เครื่องใช้ หรือเซ็นเซอร์ต่างๆ เข้ากับระบบอินเทอร์เน็ต เพื่อให้สามารถแลกเปลี่ยนข้อมูลและสั่งการควบคุมจากระยะไกลได้ มีชื่อเรียกว่าอะไร?",
    options: [
      "Internet of Things (IoT)",
      "Big Data",
      "Virtual Reality (VR)",
      "Blockchain"
    ],
    correctIndex: 0,
    thinkingProcess: [
      "ขั้นตอนที่ 1: วิเคราะห์คำว่า 'อุปกรณ์รอบตัวเชื่อมต่ออินเทอร์เน็ต' (กล้องวงจรปิด, เซ็นเซอร์ตรวจจับ, สวิตช์ไฟอัจฉริยะ)",
      "ขั้นตอนที่ 2: สรุปแนวคิดนี้คือ Internet of Things (IoT หรือ อินเทอร์เน็ตของสรรพสิ่ง)"
    ],
    conceptSummary: "Internet of Things (IoT) คือการที่อุปกรณ์ทางกายภาพติดตั้งเซ็นเซอร์ ซอฟต์แวร์ และตัวส่งสัญญาณเพื่อแลกเปลี่ยนข้อมูลผ่านอินเทอร์เน็ต เช่น กล้องตรวจจับการจราจรแบบเรียลไทม์",
    shortcutTip: "อุปกรณ์กายภาพเชื่อมเน็ตส่งข้อมูลได้ = IoT (Internet of Things)",
    diagramType: "iot_ecosystem",
    diagramData: {
      concept: "Internet of Things",
      examples: "กล้องตรวจจับอัจฉริยะ, เซ็นเซอร์ฝุ่น PM2.5, ระบบเปิดปิดไฟระยะไกล"
    }
  },
  {
    id: "it_34",
    subjectId: "it_computer",
    topic: "ความปลอดภัยทางเทคโนโลยีสารสนเทศ (IT Security)",
    difficulty: "ปานกลาง",
    question: "การโจมตีทางไซเบอร์ประเภท 'Man-in-the-Middle' (MitM) มีลักษณะการทำงานอย่างไร?",
    options: [
      "การส่งมัลแวร์เข้าไปหลอกติดตั้งโปรแกรมแอนติไวรัสปลอม",
      "การลักลอบดักจับหรือแทรกแซงการสื่อสารระหว่างคู่สนทนา 2 ฝ่าย โดยที่ทั้งสองฝ่ายไม่รู้ตัว",
      "การทายรหัสผ่านแบบสุ่มรหัสผ่านนับล้านคำในเวลาสั้นๆ",
      "การโจรกรรมอุปกรณ์คอมพิวเตอร์ออกไปจากสำนักงาน"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: แปลความหมาย 'Man-in-the-Middle' แปลตรงตัวคือ บุคคลที่สามที่แอบยืนคั่นอยู่ตรงกลาง",
      "ขั้นตอนที่ 2: แฮกเกอร์แอบดักฟัง ดักอ่าน หรือเปลี่ยนแปลงแพ็กเกจข้อมูลที่รับส่งระหว่างเครื่องผู้ใช้กับเซิร์ฟเวอร์ เช่น บน Wi-Fi สาธารณะที่ไม่ได้เข้ารหัส"
    ],
    conceptSummary: "Man-in-the-Middle (MitM) คือการโจมตีที่ผู้ไม่หวังดีสอดแทรกเข้าไปอยู่ระหว่างการเชื่อมต่อของเหยื่อกับเซิร์ฟเวอร์ สามารถป้องกันได้ด้วยการใช้ HTTPS และ VPN",
    shortcutTip: "แอบดักอ่านข้อมูลตรงกลางระหว่าง 2 ฝ่าย = Man-in-the-Middle",
    diagramType: "mitm_attack",
    diagramData: {
      sender: "ผู้ใช้ (Client)",
      attacker: "แฮกเกอร์ดักจับข้อมูลตรงกลาง (MitM)",
      receiver: "เซิร์ฟเวอร์ปลายทาง"
    }
  },
  {
    id: "it_35",
    subjectId: "it_computer",
    topic: "การใช้งานโปรแกรมสำนักงาน (Microsoft Word)",
    difficulty: "ง่าย",
    question: "ในโปรแกรม Microsoft Word และโปรแกรมทั่วไปบน Windows หากเผลอลบข้อความหรือพิมพ์ผิด และต้องการ 'ยกเลิกการกระทำล่าสุด' (Undo) สามารถกดปุ่มคีย์ลัดใด?",
    options: [
      "Ctrl + U",
      "Ctrl + Z",
      "Ctrl + Y",
      "Ctrl + X"
    ],
    correctIndex: 1,
    thinkingProcess: [
      "ขั้นตอนที่ 1: ตรวจสอบคีย์ลัดมาตรฐาน: Ctrl + Z คือ Undo (ยกเลิกการกระทำล่าสุด)",
      "ขั้นตอนที่ 2: Ctrl + Y คือ Redo (ทำซ้ำ), Ctrl + U คือ Underline (ขีดเส้นใต้), Ctrl + X คือ Cut (ตัดข้อความ)"
    ],
    conceptSummary: "Ctrl + Z คือคีย์ลัด Undo สำหรับกู้คืนสถานะก่อนหน้า เป็นคีย์ลัดพื้นฐานสำคัญที่สุดในงานสำนักงาน",
    shortcutTip: "Ctrl + Z = ยกเลิกคำสั่งเดิม (Undo)",
    diagramType: "undo_redo",
    diagramData: {
      undo: "Ctrl + Z: Undo (ยกเลิกคำสั่ง)",
      redo: "Ctrl + Y: Redo (ทำซ้ำคำสั่ง)"
    }
  }
];
