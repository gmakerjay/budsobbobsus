import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Target, 
  Compass, 
  ArrowUpRight, 
  Layers, 
  ShieldCheck, 
  Zap,
  Info
} from 'lucide-react';
import { DIAGNOSTIC_HISTORY, ROADMAP_STRATEGY, SUBJECTS } from '../data/curriculumData';

export function ScoreDiagnosticView() {
  const [activeHistoryTab, setActiveHistoryTab] = useState(0);

  const currentHistory = DIAGNOSTIC_HISTORY[activeHistoryTab];

  return (
    <div className="diagnostic-view">
      {/* ส่วนหัววิเคราะห์ผลคะแนน */}
      <div className="diagnostic-hero-card">
        <div className="hero-content">
          <div className="hero-badge">
            <BarChart3 size={15} />
            <span>รายงานวิเคราะห์เจาะลึกผลคะแนนย้อนหลัง</span>
          </div>
          <h2 className="hero-title">
            ถอดรหัสผลคะแนนเดิม สู่พิมพ์เขียวพิชิตเกณฑ์ผ่าน 60% นายสิบตำรวจ อก.
          </h2>
          <p className="hero-desc">
            จากการประมวลผลข้อมูลคะแนนการสอบจริงที่ผ่านมา ระบบได้วิเคราะห์ช่องว่างคะแนน (Score Gap) 
            เพื่อค้นหาจุดแข็งที่ต้องรักษา และจุดอ่อนที่ดึงคะแนนรวมลง พร้อมจัดทำแผนอุดรอยรั่วอย่างเป็นรูปธรรม
          </p>
        </div>

        {/* การ์ดสถิติไฮไลต์ */}
        <div className="hero-stat-cards">
          <div className="hero-stat-box positive">
            <div className="stat-box-title">
              <CheckCircle2 size={16} className="text-emerald" />
              <span>จุดแข็งที่โดดเด่น</span>
            </div>
            <div className="stat-box-number text-emerald">ภาค ข 75 / 100</div>
            <div className="stat-box-detail">
              ความรู้เฉพาะตำแหน่งผ่านฉลุย และภาษาอังกฤษทำได้ถึง 80% (16/20)
            </div>
          </div>

          <div className="hero-stat-box warning">
            <div className="stat-box-title">
              <AlertCircle size={16} className="text-amber" />
              <span>จุดสะดุดที่ต้องกู้คืน</span>
            </div>
            <div className="stat-box-number text-amber">ขาด 2 คะแนนใน ก.พ.</div>
            <div className="stat-box-detail">
              วิชาข้าราชการที่ดีได้ 28/50 (เกณฑ์ 30) และความรู้ปฏิบัติราชการได้ 11/30
            </div>
          </div>
        </div>
      </div>

      {/* แถบเลือกดูข้อมูลผลการสอบเดิม (ก.พ. vs ThaiJobJob) */}
      <div className="history-tabs-container">
        <div className="history-tabs-nav">
          {DIAGNOSTIC_HISTORY.map((hist, idx) => (
            <button
              key={idx}
              className={`history-tab-btn ${activeHistoryTab === idx ? 'active' : ''}`}
              onClick={() => setActiveHistoryTab(idx)}
            >
              <Layers size={16} />
              <span>{hist.source}</span>
            </button>
          ))}
        </div>

        {/* ตารางแจกแจงผลคะแนนจริงของภาพที่เลือก */}
        <div className="history-details-card">
          <div className="history-card-header">
            <div>
              <h3 className="history-card-title">{currentHistory.source}</h3>
              <p className="history-card-subtitle">
                คะแนนรวมที่ทำได้: {currentHistory.totalEarned} / {currentHistory.totalMax} คะแนน 
                (คิดเป็นร้อยละ {currentHistory.percent}%)
              </p>
            </div>
            <div className={`history-result-badge ${currentHistory.passed ? 'pass' : 'fail'}`}>
              {currentHistory.passed ? 'ผ่านเกณฑ์การประเมิน' : 'ไม่ผ่านเกณฑ์ขั้นต่ำ'}
            </div>
          </div>

          <div className="breakdown-grid">
            {currentHistory.breakdown.map((item, bIdx) => (
              <div key={bIdx} className="breakdown-item-card">
                <div className="item-card-top">
                  <span className="item-name">{item.subject}</span>
                  <span className={`item-status-pill ${item.gap >= 0 ? 'good' : 'gap'}`}>
                    {item.status}
                  </span>
                </div>

                <div className="item-score-row">
                  <div className="score-display">
                    <span className="score-num">{item.earned}</span>
                    <span className="score-max">/ {item.maxScore}</span>
                  </div>
                  <div className="score-criteria">เกณฑ์: {item.passingCriteria}</div>
                </div>

                <div className="score-gauge-bar">
                  <div 
                    className="score-gauge-fill"
                    style={{ 
                      width: `${Math.min(100, (item.earned / item.maxScore) * 100)}%`,
                      backgroundColor: item.gap >= 0 ? '#10b981' : '#f59e0b'
                    }}
                  ></div>
                </div>

                <div className="item-diagnostic-text">
                  <Info size={14} className="diag-icon" />
                  <span>{item.diagnosis}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* พิมพ์เขียวกลยุทธ์การอุดรอยรั่วสำหรับสอบนายสิบตำรวจ อก. 69 */}
      <div className="strategy-section">
        <div className="section-header-block">
          <div className="section-badge">
            <Compass size={15} />
            <span>ROADMAP กลยุทธ์กู้คะแนน</span>
          </div>
          <h2 className="section-title">
            แผนกลยุทธ์ 5 ขั้นตอน สู่เป้าหมาย 112 จาก 150 ข้อ (74.6%)
          </h2>
          <p className="section-subtitle">
            เปลี่ยนคะแนนที่ขาดหายไปในอดีตให้กลายเป็นจุดเก็บคะแนนที่มั่นคงที่สุดในสนามตำรวจอำนวยการ
          </p>
        </div>

        <div className="roadmap-grid">
          {ROADMAP_STRATEGY.map((st) => (
            <div key={st.step} className="roadmap-card">
              <div className="roadmap-card-header">
                <div className="step-num-badge">ก้าวที่ {st.step}</div>
                <h3 className="roadmap-card-title">{st.title}</h3>
              </div>
              <p className="roadmap-card-desc">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* แผนผังการตั้งเป้าคะแนนแต่ละวิชาเพื่อพิชิต 90 ข้อขึ้นไป */}
      <div className="target-allocation-card">
        <div className="allocation-header">
          <div className="header-left">
            <Target size={20} className="text-cyan" />
            <h3 className="allocation-title">
              สัดส่วนคะแนนเป้าหมายรายวิชา (Target Score Allocation)
            </h3>
          </div>
          <div className="allocation-total-badge">
            เป้าหมายรวม: 117 / 150 ข้อ (ผ่านเกณฑ์ 60% อย่างมั่นใจ)
          </div>
        </div>

        <div className="table-responsive">
          <table className="allocation-table">
            <thead>
              <tr>
                <th>ลำดับ</th>
                <th>หมวดวิชา</th>
                <th>จำนวนข้อประมาณการ</th>
                <th>เป้าหมายที่ต้องทำให้ได้</th>
                <th>คิดเป็นร้อยละ</th>
                <th>ระดับความสำคัญ</th>
              </tr>
            </thead>
            <tbody>
              {SUBJECTS.map((sub, sIdx) => {
                const percent = Math.round((sub.targetScore / sub.maxScore) * 100);
                return (
                  <tr key={sub.id}>
                    <td>หมวด {sub.number}</td>
                    <td className="font-semibold">{sub.title}</td>
                    <td>{sub.maxScore} ข้อ</td>
                    <td className="text-accent font-bold">{sub.targetScore} ข้อ</td>
                    <td>{percent}%</td>
                    <td>
                      <span className={`priority-tag p-${sIdx + 1}`}>
                        {sIdx === 0 ? 'สูงสุด (สัดส่วนเยอะสุด)' : sIdx === 1 ? 'สูงมาก (อุดรอยรั่ว)' : 'ปานกลาง'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
