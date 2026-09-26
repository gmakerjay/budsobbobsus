import React from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert, Cpu, FileText, Compass, Sparkles, AlertTriangle } from 'lucide-react';

export function QuestionDiagram({ type, data }) {
  if (!data) return null;

  switch (type) {
    case 'excel_reference':
      return (
        <div className="diagram-box">
          <div className="diagram-header">
            <span className="diagram-title">แผนผังจำลองการคำนวณและอ้างอิงเซลล์ (Excel Grid Visualizer)</span>
          </div>
          <div className="excel-grid-preview">
            <table className="excel-table">
              <thead>
                <tr>
                  <th></th>
                  <th>A</th>
                  <th className="highlight-col">B (คอลัมน์เดิม)</th>
                  <th className="highlight-target-col">C (คอลัมน์เป้าหมาย)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-num">1</td>
                  <td>รายการ</td>
                  <td>คะแนน ม.ค.</td>
                  <td>คะแนน ก.พ.</td>
                </tr>
                <tr>
                  <td className="row-num">2..6</td>
                  <td>ข้อมูลแถว 2 ถึง 6</td>
                  <td className="cell-data">ช่วง B2:B6</td>
                  <td className="cell-data-target">ช่วง C2:C6</td>
                </tr>
                <tr>
                  <td className="row-num font-bold">7</td>
                  <td>สูตรเฉลี่ย</td>
                  <td className="cell-formula active-source">=AVERAGE(B2:B6)</td>
                  <td className="cell-formula active-target">=AVERAGE(C2:C6)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="diagram-notes-grid">
            <div className="note-card">
              <span className="note-label">การเคลื่อนที่</span>
              <span className="note-desc">{data.shiftDirection}</span>
            </div>
            <div className="note-card">
              <span className="note-label">สถานะแถว</span>
              <span className="note-desc">{data.rowStatus}</span>
            </div>
            <div className="note-card full-width">
              <span className="note-label">ข้อพึงระวัง (Absolute)</span>
              <span className="note-desc">{data.absoluteExample}</span>
            </div>
          </div>
        </div>
      );

    case 'security_threats':
      return (
        <div className="diagram-box">
          <div className="diagram-header">
            <span className="diagram-title">วงจรภัยคุกคามและความปลอดภัยทางไซเบอร์</span>
          </div>
          <div className="flow-steps">
            {data.stages && data.stages.map((stage, idx) => (
              <div key={idx} className="flow-step-item">
                <div className="step-circle">{idx + 1}</div>
                <div className="step-content">{stage}</div>
                {idx < data.stages.length - 1 && (
                  <ArrowRight size={18} className="step-arrow" />
                )}
              </div>
            ))}
          </div>
        </div>
      );

    case 'saraban_types':
      return (
        <div className="diagram-box">
          <div className="diagram-header">
            <span className="diagram-title">เปรียบเทียบโครงสร้างรูปแบบหนังสือราชการ</span>
          </div>
          <div className="two-col-diagram">
            <div className="paper-mockup external">
              <div className="paper-header">
                <div className="garuda-badge center">
                  <div className="garuda-shape large"></div>
                  <span>ครุฑ 3 ซม. (กึ่งกลาง)</span>
                </div>
              </div>
              <div className="paper-body">
                <div className="paper-title">{data.typeA?.name}</div>
                <div className="paper-meta">ใช้กระดาษตราครุฑ ติดต่อระหว่างกระทรวงหรือบุคคลภายนอก</div>
                <div className="paper-tags">
                  <span className="paper-tag">{data.typeA?.garuda}</span>
                  <span className="paper-tag">{data.typeA?.paper}</span>
                </div>
              </div>
            </div>

            <div className="paper-mockup internal">
              <div className="paper-header internal-hdr">
                <div className="garuda-badge left">
                  <div className="garuda-shape small"></div>
                  <span>ครุฑ 1.5 ซม. (มุมซ้าย)</span>
                </div>
                <div className="header-text-block">บันทึกข้อความ</div>
              </div>
              <div className="paper-body">
                <div className="paper-title">{data.typeB?.name}</div>
                <div className="paper-meta">ใช้กระดาษบันทึกข้อความ ติดต่อภายในหน่วยงานเดียวกัน</div>
                <div className="paper-tags">
                  <span className="paper-tag">{data.typeB?.garuda}</span>
                  <span className="paper-tag">{data.typeB?.paper}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'speed_levels':
      return (
        <div className="diagram-box">
          <div className="diagram-header">
            <span className="diagram-title">{data.title}</span>
          </div>
          <div className="speed-levels-grid">
            {data.items && data.items.map((item, idx) => (
              <div key={idx} className="speed-card" style={{ borderColor: item.color }}>
                <div className="speed-badge" style={{ backgroundColor: item.color }}>
                  {item.level}
                </div>
                <div className="speed-action">{item.action}</div>
                <div className="speed-rule">ระบุสีแดง มุมบนซ้าย และหน้าซอง</div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'property_crimes':
      return (
        <div className="diagram-box">
          <div className="diagram-header">
            <span className="diagram-title">ผังวิวัฒนาการและลำดับความผิดเกี่ยวกับทรัพย์</span>
          </div>
          <div className="crime-steps-container">
            {data.hierarchy && data.hierarchy.map((item, idx) => (
              <div key={idx} className="crime-step-card">
                <div className="crime-index">{idx + 1}</div>
                <div className="crime-title">{item.stage}</div>
                <div className="crime-formula">{item.formula}</div>
                <div className="crime-penalty">{item.penalty}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'speed_distance_triangle':
      return (
        <div className="diagram-box">
          <div className="diagram-header">
            <span className="diagram-title">แผนภาพสามเหลี่ยมสูตรฟิสิกส์คณิตศาสตร์ (S = V x T)</span>
          </div>
          <div className="physics-diagram-wrap">
            <div className="triangle-card">
              <svg viewBox="0 0 200 160" className="triangle-svg">
                <polygon points="100,10 10,150 190,150" fill="rgba(2, 132, 199, 0.15)" stroke="#0284c7" strokeWidth="3" />
                <line x1="45" y1="85" x2="155" y2="85" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 2" />
                <line x1="100" y1="85" x2="100" y2="150" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 2" />
                <text x="100" y="60" textAnchor="middle" fill="#38bdf8" fontSize="22" fontWeight="bold">S (ระยะทาง)</text>
                <text x="60" y="125" textAnchor="middle" fill="#f8fafc" fontSize="18" fontWeight="bold">V (ความเร็ว)</text>
                <text x="140" y="125" textAnchor="middle" fill="#f8fafc" fontSize="18" fontWeight="bold">T (เวลา)</text>
              </svg>
            </div>
            <div className="calculation-breakdown">
              <div className="calc-row source-leg">
                <span className="calc-title">{data.legA}</span>
              </div>
              <div className="calc-row target-leg">
                <span className="calc-title">{data.legB}</span>
              </div>
              <div className="calc-hint">
                หมายเหตุ: เมื่อระยะทางคงที่ ความเร็วกับเวลาจะแปรผกผันกันเสมอ
              </div>
            </div>
          </div>
        </div>
      );

    case 'series_tree':
      return (
        <div className="diagram-box">
          <div className="diagram-header">
            <span className="diagram-title">ผังวิเคราะห์โครงสร้างความสัมพันธ์ตัวเลข (Series Progression)</span>
          </div>
          <div className="series-display">
            <div className="numbers-row">
              {data.sequence && data.sequence.map((num, idx) => (
                <div key={idx} className={`num-bubble ${idx === data.sequence.length - 1 ? 'target' : ''}`}>
                  <span className="num-val">{num}</span>
                  <span className="num-pos">พจน์ที่ {idx + 1}</span>
                </div>
              ))}
            </div>
            <div className="steps-flow">
              {data.steps && data.steps.map((st, idx) => (
                <div key={idx} className="step-rule-item">
                  <span className="step-tag">ก้าวที่ {idx + 1}</span>
                  <span className="step-math">{st}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'thai_spelling_matrix':
      return (
        <div className="diagram-box">
          <div className="diagram-header">
            <span className="diagram-title">ตารางเทียบเคียงคำสะกดถูก-ผิดตามหลักภาษาไทย</span>
          </div>
          <div className="spelling-grid">
            {data.correctWords && data.correctWords.map((item, idx) => (
              <div key={idx} className="spelling-card">
                <div className="correct-word-badge">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>{item.word}</span>
                </div>
                <div className="spelling-note">{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'sufficiency_economy':
      return (
        <div className="diagram-box">
          <div className="diagram-header">
            <span className="diagram-title">ผังแม่บทปรัชญาของเศรษฐกิจพอเพียง (3 ห่วง 2 เงื่อนไข)</span>
          </div>
          <div className="sufficiency-wrap">
            <div className="rings-container">
              {data.rings && data.rings.map((ring, idx) => (
                <div key={idx} className="ring-circle">
                  <div className="ring-num">ห่วงที่ {idx + 1}</div>
                  <div className="ring-name">{ring}</div>
                </div>
              ))}
            </div>
            <div className="conditions-bar">
              <div className="condition-item">
                <div className="cond-title">เงื่อนไขความรู้</div>
                <div className="cond-desc">รอบรู้ • รอบคอบ • ระมัดระวัง</div>
              </div>
              <div className="condition-divider"></div>
              <div className="condition-item">
                <div className="cond-title">เงื่อนไขคุณธรรม</div>
                <div className="cond-desc">ซื่อสัตย์สุจริต • ขยันอดทน • สติปัญญา</div>
              </div>
            </div>
            <div className="outcome-banner">
              {data.outcome}
            </div>
          </div>
        </div>
      );

    case 'grammar_rule':
      return (
        <div className="diagram-box">
          <div className="diagram-header">
            <span className="diagram-title">โครงสร้างไวยากรณ์: Proximity Rule (ความใกล้ชิดของประธาน)</span>
          </div>
          <div className="grammar-flow">
            <div className="grammar-card ignored">
              <div className="rule-sub">ประธานตัวแรก (ไกลกริยา)</div>
              <div className="rule-val">{data.subjectA}</div>
              <div className="rule-status">ไม่ใช้ตัดสินรูปกริยา</div>
            </div>
            <div className="grammar-connector">+ nor +</div>
            <div className="grammar-card active-decision">
              <div className="rule-sub">ประธานตัวหลัง (ติดกริยา)</div>
              <div className="rule-val text-accent">{data.subjectB}</div>
              <div className="rule-status highlight">ตัวตัดสินรูปกริยา (Decision Maker)</div>
            </div>
          </div>
          <div className="grammar-summary-bar">
            <span>ผลลัพธ์: {data.result}</span>
          </div>
        </div>
      );

    case 'operation_formula':
      return (
        <div className="diagram-box">
          <div className="diagram-header">
            <span className="diagram-title">แผนผังถอดรหัสความสัมพันธ์ตัวดำเนินการ (Mathematical Operation Decoder)</span>
          </div>
          <div className="operation-flow">
            <div className="op-rule-card">
              <span className="op-tag">รูปทั่วไป</span>
              <span className="op-rule-text text-accent font-bold">{data.rule}</span>
            </div>
            <div className="op-cases-row">
              <div className="op-case-pill">{data.case1}</div>
              <div className="op-case-pill">{data.case2}</div>
            </div>
            <div className="op-target-box">
              <span className="op-target-label">ผลลัพธ์ข้อสอบ:</span>
              <span className="op-target-val text-emerald font-bold">{data.target}</span>
            </div>
          </div>
        </div>
      );

    case 'work_rate_triangle':
      return (
        <div className="diagram-box">
          <div className="diagram-header">
            <span className="diagram-title">แผนผังสูตรคำนวณการทำงานร่วมกัน (Work & Time Mechanics)</span>
          </div>
          <div className="work-rate-grid">
            <div className="work-formula-box">
              <span className="wf-label">สูตรลัด 2 คนช่วยกัน:</span>
              <span className="wf-math text-accent">{data.formula}</span>
            </div>
            <div className="workers-compare-row">
              <div className="worker-box">{data.workerA}</div>
              <div className="worker-box">{data.workerB}</div>
            </div>
            <div className="work-solution-banner">
              {data.combined}
            </div>
          </div>
        </div>
      );

    case 'labor_formula':
      return (
        <div className="diagram-box">
          <div className="diagram-header">
            <span className="diagram-title">สูตรสมดุลแรงงานและปริมาณงาน (Proportion of Labor)</span>
          </div>
          <div className="labor-balance-box">
            <div className="labor-formula-hdr">{data.formula}</div>
            <div className="labor-sides-grid">
              <div className="labor-side">
                <span className="side-title">สถานการณ์ที่ 1:</span>
                <span className="side-val">{data.sideA}</span>
              </div>
              <div className="side-arrow">=</div>
              <div className="labor-side highlight">
                <span className="side-title">สถานการณ์ที่ 2 (เป้าหมาย):</span>
                <span className="side-val text-emerald font-bold">{data.sideB}</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'animal_legs_system':
      return (
        <div className="diagram-box">
          <div className="diagram-header">
            <span className="diagram-title">ผังระบบสมการแก้ปัญหาขาและหัวสัตว์</span>
          </div>
          <div className="system-eq-wrap">
            <div className="system-eq-card">
              <div className="eq-line">1) {data.eq1}</div>
              <div className="eq-line">2) {data.eq2}</div>
            </div>
            <div className="system-solution-card">
              <span className="sol-badge">คำตอบละเอียด</span>
              <span className="sol-text">{data.solution}</span>
            </div>
          </div>
        </div>
      );

    case 'percentage_base_shift':
      return (
        <div className="diagram-box">
          <div className="diagram-header">
            <span className="diagram-title">แผนภาพจำลองการเปลี่ยนฐานร้อยละ (Base Value Shift)</span>
          </div>
          <div className="base-shift-flow">
            <div className="shift-stage">
              <span className="stage-num">ขั้นที่ 1 (ลดลง):</span>
              <span className="stage-text">{data.step1}</span>
            </div>
            <div className="shift-stage">
              <span className="stage-num">ขั้นที่ 2 (กู้คืน):</span>
              <span className="stage-text">{data.step2}</span>
            </div>
            <div className="shift-formula-card">
              <span className="sf-label">คิดเป็นเปอร์เซ็นต์คืนกลับ:</span>
              <span className="sf-val text-emerald font-bold">{data.formula}</span>
            </div>
          </div>
        </div>
      );

    default:
      return renderUniversalFallback(type, data);
  }
}

function getDiagramTitle(type) {
  const titles = {
    ai_ecosystem: "แผนผังระบบนิเวศและสถาปัตยกรรมปัญญาประดิษฐ์ (AI & LLM Architecture)",
    phishing_model: "วงจรการโจมตีและการตรวจจับฟิชชิ่ง (Phishing Attack Lifecycle)",
    mfa_factors: "โมเดลการยืนยันตัวตนแบบหลายปัจจัย 3 มิติ (MFA 3 Factors)",
    pdpa_categories: "ผังจำแนกประเภทข้อมูลส่วนบุคคลตาม พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล (PDPA)",
    cloud_layers: "พีระมิดระดับชั้นการให้บริการ Cloud Computing (IaaS / PaaS / SaaS)",
    osi_layers: "ผังโครงสร้างแบบจำลองเครือข่าย 7 ระดับชั้น (OSI 7 Layers Model)",
    backup_rule: "กฎมาตรฐานการสำรองข้อมูลปลอดภัยระดับสากล (3-2-1 Backup Strategy)",
    vlookup_param: "โครงสร้างพารามิเตอร์และการทำงานของฟังก์ชัน VLOOKUP",
    database_keys: "ผังจำแนกประเภทคีย์ในฐานข้อมูลเชิงสัมพันธ์ (Database Keys)",
    cia_triad: "สามเหลี่ยมความมั่นคงปลอดภัยสารสนเทศ (CIA Triad Architecture)",
    wifi_security: "วิวัฒนาการโปรโตคอลความปลอดภัยเครือข่ายไร้สาย (Wi-Fi Security Protocols)",
    cpu_arch: "ผังการทำงานภายในหน่วยประมวลผลกลาง (CPU Execution Pipeline)",
    destroy_committee: "ขั้นตอนและองค์ประกอบคณะกรรมการทำลายหนังสือราชการ",
    doc_numbering: "โครงสร้างและรหัสการออกเลขที่หนังสือราชการ",
    archives_timeline: "วงจรอายุและการส่งมอบหนังสือราชการไปยังหอจดหมายเหตุแห่งชาติ",
    receipt_stamp: "ผังการลงตราประทับรับ-ส่งหนังสือราชการและจุดวางตรา",
    e_saraban: "มาตรฐานและองค์ประกอบของระบบสารบรรณอิเล็กทรอนิกส์ (e-Saraban)",
    police_doc_prefix: "รหัสตัวพยัญชนะและเลขประจำตัวส่วนราชการในสังกัดสำนักงานตำรวจแห่งชาติ (ตร.)",
    good_governance: "เสาหลักและเป้าหมายการบริหารกิจการบ้านเมืองที่ดี (Good Governance)",
    loan_contract: "เกณฑ์กฎหมายหลักฐานการกู้ยืมเงินและดอกเบี้ยตาม ป.พ.พ.",
    statute_limitations: "ตารางกำหนดอายุความในคดีแพ่งและอาญาที่สำคัญ",
    procurement_methods: "ผังจำแนกวิธีจัดซื้อจัดจ้างตาม พ.ร.บ.การจัดซื้อจัดจ้างฯ พ.ศ. 2560",
    procurement_pillars: "4 เสาหลักแห่งความคุ้มค่า โปร่งใส และมีประสิทธิภาพ",
    criminal_penalties: "ลำดับขั้นโทษทางอาญา 5 สถานตามประมวลกฎหมายอาญา มาตรา 18",
    robbery_gang: "ผังองค์ประกอบความผิดฐานชิงทรัพย์และปล้นทรัพย์",
    extortion_blackmail: "ตารางเปรียบเทียบความผิดฐานกรรโชกทรัพย์ vs รีดเอาทรัพย์",
    void_vs_voidable: "เปรียบเทียบผลทางกฎหมาย: โมฆะกรรม (Void) vs โมฆียกรรม (Voidable)",
    police_discipline: "ระบบโทษทางวินัยข้าราชการตำรวจ 5 สถานตาม พ.ร.บ.ตำรวจแห่งชาติ พ.ศ. 2565",
    admin_appeal: "ขั้นตอนและระยะเวลาการอุทธรณ์คำสั่งทางปกครอง",
    ratio_chain: "ผังวิเคราะห์อัตราส่วนต่อเนื่องและตัวแปรเชื่อมโยง (Ratio Chain Analysis)",
    profit_share: "สูตรและสัดส่วนการแบ่งกำไรตามเงินลงทุนและระยะเวลา",
    pct_ratio: "ผังแปลงร้อยละ อัตราส่วน และฐานตัวเลข",
    markup_discount: "ผังวงจรราคาทุน ราคาป้าย และกำไรสุทธิหลังลดราคา",
    weighted_avg: "สูตรค่าเฉลี่ยถ่วงน้ำหนัก (Weighted Average Formula)",
    tree_interval: "สูตรคำนวณจำนวนเสาไฟ ต้นไม้ และระยะห่างช่วง",
    handshake_round: "สูตรการจับมือและการแข่งขันแบบพบกันหมด Combination C(n,2)",
    clock_angle: "สูตรคำนวณมุมระหว่างเข็มสั้นและเข็มยาวบนหน้าปัดนาฬิกา",
    conjunction_types: "ผังจำแนกคำเชื่อมและโครงสร้างสัมพันธสารภาษาไทย",
    royal_body: "ผังคำราชาศัพท์หมวดร่างกายและอวัยวะสำคัญ",
    polite_words: "ตารางเทียบเคียงคำสุภาพตามหลักภาษาไทย",
    foreign_syntax: "เปรียบเทียบสำนวนภาษาต่างประเทศ (สำนวนแปล) vs สำนวนภาษาไทยแท้",
    tense_timeline: "เส้นเวลาและโครงสร้าง Tense ในภาษาอังกฤษ (English Tense Timeline)",
    vocab_synonym: "ตารางคำศัพท์ ความหมายเหมือน (Synonym) และความหมายตรงข้าม (Antonym)",
    prepositions_time: "ผังการใช้บุพบทบอกเวลาและสถานที่ (Prepositions: In / On / At)",
    new_theory_land: "ผังการจัดสรรพื้นที่ตามหลักเกษตรทฤษฎีใหม่ (อัตราส่วน 30:30:30:10)",
    asean_members: "ผังโครงสร้างประเทศสมาชิกประชาคมอาเซียน (ASEAN Member States)"
  };
  return titles[type] || `แผนผังมโนทัศน์เชิงวิเคราะห์: ${type ? type.replace(/_/g, ' ') : 'หลักการสำคัญ'}`;
}

function renderUniversalFallback(type, data) {
  if (!data) return null;

  const title = getDiagramTitle(type);

  // 1. Steps / Stages / Pipeline
  const stepsList = data.stages || data.steps || data.flow || data.lifecycle || (Array.isArray(data) ? data : null);
  const isPipeline = Array.isArray(stepsList) && stepsList.length > 0;

  // 2. Comparison (typeA/typeB, pros/cons, correct/wrong, formal/informal, etc.)
  const compLeft = data.typeA || data.pros || data.correct || data.formal || data.past || data.foreign || data.sideA || data.public;
  const compRight = data.typeB || data.cons || data.wrong || data.informal || data.present || data.thai || data.sideB || data.private;
  const hasComparison = compLeft !== undefined && compRight !== undefined;

  // 3. Formula
  const hasFormula = Boolean(data.formula || data.equation || data.rule);

  // 4. Pillars / items / levels / hierarchy
  const itemsList = data.pillars || data.items || data.levels || data.factors || data.virtues || data.hierarchy;
  const hasItemsList = Array.isArray(itemsList) && itemsList.length > 0;

  // 5. General key-value entries (excluding already handled keys)
  const handledKeys = new Set(['stages', 'steps', 'flow', 'lifecycle', 'typeA', 'typeB', 'pros', 'cons', 'correct', 'wrong', 'formal', 'informal', 'past', 'present', 'foreign', 'thai', 'sideA', 'sideB', 'public', 'private', 'formula', 'equation', 'rule', 'pillars', 'items', 'levels', 'factors', 'virtues', 'hierarchy']);
  const remainingEntries = Object.entries(data).filter(([k]) => !handledKeys.has(k) && typeof data[k] !== 'object');

  return (
    <div className="diagram-box">
      <div className="diagram-header">
        <span className="diagram-title">{title}</span>
      </div>

      <div className="universal-diagram-wrap">
        {hasFormula && (
          <div className="universal-formula-bar">
            <span className="universal-formula-code">{data.formula || data.equation || data.rule}</span>
            {(data.solution || data.target || data.result) && (
              <span className="universal-formula-badge">
                ผลลัพธ์: {data.solution || data.target || data.result}
              </span>
            )}
          </div>
        )}

        {isPipeline && (
          <div className="universal-flow-wrap">
            {stepsList.map((step, idx) => (
              <div key={idx} className="universal-flow-step">
                <div className="universal-step-bubble">
                  {typeof step === 'string' ? step : step.name || step.stage || JSON.stringify(step)}
                </div>
                {idx < stepsList.length - 1 && (
                  <ArrowRight size={16} className="universal-flow-arrow" />
                )}
              </div>
            ))}
          </div>
        )}

        {hasComparison && (
          <div className="universal-compare-wrap">
            <div className="universal-compare-col positive">
              <div className="universal-col-title">
                {data.typeA?.name || 'กรณีที่ 1 / ฝั่งมาตรฐาน'}
              </div>
              <div className="universal-col-content">
                {typeof compLeft === 'object' ? Object.entries(compLeft).map(([k, v]) => `${k}: ${v}`).join(' | ') : String(compLeft)}
              </div>
            </div>
            <div className="universal-compare-col negative">
              <div className="universal-col-title">
                {data.typeB?.name || 'กรณีที่ 2 / ฝั่งเปรียบเทียบ'}
              </div>
              <div className="universal-col-content">
                {typeof compRight === 'object' ? Object.entries(compRight).map(([k, v]) => `${k}: ${v}`).join(' | ') : String(compRight)}
              </div>
            </div>
          </div>
        )}

        {hasItemsList && (
          <div className="universal-cards-grid">
            {itemsList.map((it, idx) => (
              <div key={idx} className="universal-card-item">
                <div className="universal-card-key">
                  {typeof it === 'object' ? (it.stage || it.level || it.code || it.name || `ข้อที่ ${idx + 1}`) : `รายการที่ ${idx + 1}`}
                </div>
                <div className="universal-card-val">
                  {typeof it === 'object' ? (it.th || it.focus || it.action || it.detail || it.formula || it.penalty || JSON.stringify(it)) : String(it)}
                </div>
              </div>
            ))}
          </div>
        )}

        {remainingEntries.length > 0 && !hasItemsList && (
          <div className="universal-cards-grid">
            {remainingEntries.map(([key, val], idx) => (
              <div key={idx} className="universal-card-item">
                <div className="universal-card-key">{key}</div>
                <div className="universal-card-val">{String(val)}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
