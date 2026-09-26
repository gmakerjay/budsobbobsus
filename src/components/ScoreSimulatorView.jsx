import React, { useState } from 'react';
import { 
  Calculator, 
  Target, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  Sliders, 
  RotateCcw, 
  Sparkles,
  Award,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { SUBJECTS, EXAM_INFO } from '../data/curriculumData';

export function ScoreSimulatorView() {
  // ค่าเริ่มต้นตามแผนคะแนนเป้าหมาย
  const initialScores = {
    it_computer: 28,
    saraban: 20,
    law: 18,
    math_logic: 20,
    thai: 14,
    english_society: 14,
  };

  const [scores, setScores] = useState(initialScores);

  const handleScoreChange = (subjectId, value) => {
    setScores((prev) => ({
      ...prev,
      [subjectId]: Math.max(0, parseInt(value) || 0)
    }));
  };

  // Presets
  const applyPreset = (presetType) => {
    if (presetType === 'safe') {
      setScores({
        it_computer: 29,
        saraban: 22,
        law: 20,
        math_logic: 21,
        thai: 15,
        english_society: 15,
      });
    } else if (presetType === 'min') {
      setScores({
        it_computer: 22,
        saraban: 16,
        law: 15,
        math_logic: 17,
        thai: 11,
        english_society: 10,
      });
    } else if (presetType === 'past_profile') {
      // อิงจุดเดิม: คณิตต่ำ (14/30), กฎหมายต่ำ (11/30), อังกฤษสูง (80%), คอมฯ กลาง
      setScores({
        it_computer: 23,
        saraban: 14,
        law: 13,
        math_logic: 14,
        thai: 12,
        english_society: 16,
      });
    }
  };

  // คำนวณผลรวม
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const totalPercentage = Math.round((totalScore / EXAM_INFO.totalQuestions) * 100);
  const isPassed = totalScore >= EXAM_INFO.passingScoreMin;
  const gapToPass = EXAM_INFO.passingScoreMin - totalScore;

  return (
    <div className="simulator-view">
      <div className="simulator-hero-card">
        <div className="hero-badge">
          <Calculator size={15} />
          <span>เครื่องมือคำนวณและวางแผนคะแนนสอบ 150 ข้อ</span>
        </div>
        <h2 className="hero-title">
          โปรแกรมจำลองเป้าหมายคะแนนเกณฑ์ผ่าน 60% (Interactive Score Simulator)
        </h2>
        <p className="hero-desc">
          ทดลองปรับระดับคะแนนที่คาดหวังในแต่ละหมวดวิชา เพื่อดูภาพรวมความเป็นไปได้ 
          และประเมินว่าควรเพิ่มน้ำหนักการอ่านในหมวดใดเพื่อให้ผ่านเกณฑ์ 90 ข้อขึ้นไปอย่างปลอดภัย
        </p>

        {/* แถบพรีเซ็ตด่วน */}
        <div className="preset-buttons-row">
          <span className="preset-label">รูปแบบจำลองด่วน:</span>
          <button className="preset-chip" onClick={() => applyPreset('past_profile')}>
            จำลองจากฐานเดิม (เน้นเสริมจุดสะดุด)
          </button>
          <button className="preset-chip" onClick={() => applyPreset('min')}>
            เกณฑ์ผ่านพอดี (91 ข้อ / 60.7%)
          </button>
          <button className="preset-chip highlight" onClick={() => applyPreset('safe')}>
            เกณฑ์ปลอดภัยลุ้นขึ้นบัญชีตัวจริง (122 ข้อ / 81.3%)
          </button>
          <button className="preset-chip reset" onClick={() => setScores(initialScores)}>
            <RotateCcw size={13} />
            <span>คืนค่าแนะนำ</span>
          </button>
        </div>
      </div>

      <div className="simulator-grid">
        {/* แผงปรับคะแนนรายวิชา */}
        <div className="sliders-panel">
          <div className="panel-title-bar">
            <Sliders size={18} className="text-cyan" />
            <h3 className="panel-heading">ปรับระดับคะแนนเป้าหมายรายหมวดวิชา</h3>
          </div>

          <div className="sliders-list">
            {SUBJECTS.map((sub) => {
              const currentVal = scores[sub.id] || 0;
              const percentInSub = Math.round((currentVal / sub.maxScore) * 100);

              return (
                <div key={sub.id} className="subject-slider-card">
                  <div className="slider-card-top">
                    <div>
                      <span className="sub-title-text">{sub.title}</span>
                      <span className="sub-full-max">(เต็ม {sub.maxScore} ข้อ)</span>
                    </div>
                    <div className="slider-score-badge">
                      <span className="current-val text-accent">{currentVal}</span>
                      <span className="max-val">/ {sub.maxScore}</span>
                      <span className="sub-percent">({percentInSub}%)</span>
                    </div>
                  </div>

                  <div className="slider-track-wrap">
                    <input
                      type="range"
                      min="0"
                      max={sub.maxScore}
                      value={currentVal}
                      onChange={(e) => handleScoreChange(sub.id, e.target.value)}
                      className="range-input"
                    />
                  </div>

                  <div className="slider-meta-hint">
                    <span>คำแนะนำ: ควรได้ไม่น้อยกว่า {sub.targetScore} ข้อ</span>
                    <span className={currentVal >= sub.targetScore ? 'text-emerald' : 'text-amber'}>
                      {currentVal >= sub.targetScore ? 'บรรลุเป้าหมาย' : 'ขาดอีก ' + (sub.targetScore - currentVal) + ' ข้อ'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* แผงแสดงผลลัพธ์การประเมิน */}
        <div className="summary-result-panel">
          <div className={`result-card-main ${isPassed ? 'status-pass' : 'status-fail'}`}>
            <div className="result-top-status">
              {isPassed ? (
                <>
                  <CheckCircle2 size={24} className="text-emerald" />
                  <span className="status-heading text-emerald">ผ่านเกณฑ์การสอบ (เกณฑ์ 60%)</span>
                </>
              ) : (
                <>
                  <AlertTriangle size={24} className="text-amber" />
                  <span className="status-heading text-amber">ยังไม่ผ่านเกณฑ์ขั้นต่ำ</span>
                </>
              )}
            </div>

            <div className="large-score-display">
              <div className="score-big-num">{totalScore}</div>
              <div className="score-total-denom">/ 150 ข้อ</div>
            </div>

            <div className="percentage-tag-row">
              <span className="percent-badge">คิดเป็นร้อยละ {totalPercentage}%</span>
              <span className="criteria-tag">เกณฑ์ผ่าน: 90 ข้อ (60%)</span>
            </div>

            <div className="gauge-bar-outer">
              <div 
                className="gauge-bar-inner"
                style={{ 
                  width: `${Math.min(100, (totalScore / 150) * 100)}%`,
                  backgroundColor: isPassed ? '#10b981' : '#f59e0b'
                }}
              ></div>
              <div className="pass-marker" style={{ left: '60%' }}>
                <span className="marker-line"></span>
                <span className="marker-label">เกณฑ์ 60%</span>
              </div>
            </div>

            <div className="result-guidance-box">
              {isPassed ? (
                <p className="guidance-text">
                  ผลรวมคะแนน <strong>{totalScore} ข้อ</strong> ผ่านเกณฑ์ขั้นต่ำ 90 ข้อ 
                  {totalScore >= 110 
                    ? ' และอยู่ในระดับโซนปลอดภัยสูง มีโอกาสลุ้นขึ้นบัญชีในลำดับต้นๆ เพื่อบรรจุเป็นตัวจริง'
                    : ' แต่ยังเฉียดฉิว แนะนำให้เสริมคะแนนในหมวดสารบรรณหรือคอมพิวเตอร์เพิ่มอีก 10 ข้อ เพื่อสร้างความมั่นใจสูงสุด'}
                </p>
              ) : (
                <p className="guidance-text warning">
                  ยังขาดอีก <strong>{gapToPass} ข้อ</strong> จึงจะแตะเกณฑ์ผ่าน 90 ข้อ 
                  แนวทางแก้ปัญหา: เพิ่มคะแนนในหมวดเทคโนโลยีสารสนเทศ (มีถึง 35 ข้อ) และหมวดงานสารบรรณ (25 ข้อ) 
                  เนื่องจากเป็นวิชาที่มีเนื้อหาตรงตัวและท่องจำได้ง่ายที่สุด
                </p>
              )}
            </div>
          </div>

          {/* สรุปแผนกลยุทธ์คะแนนรายวิชา */}
          <div className="quick-recap-card">
            <h4 className="recap-title">
              <ShieldCheck size={16} className="text-cyan" />
              <span>เกณฑ์สถิติที่สำคัญ</span>
            </h4>
            <div className="recap-list">
              <div className="recap-item">
                <span className="r-label">คะแนนรวมสูงสุด:</span>
                <span className="r-val">150 ข้อ (150 คะแนน)</span>
              </div>
              <div className="recap-item">
                <span className="r-label">เวลาสอบเฉลี่ยต่อข้อ:</span>
                <span className="r-val">1.2 นาทีต่อข้อ (180 นาที / 150 ข้อ)</span>
              </div>
              <div className="recap-item">
                <span className="r-label">หมวดที่มีน้ำหนักสูงสุด:</span>
                <span className="r-val">คอมพิวเตอร์และสารสนเทศ</span>
              </div>
              <div className="recap-item">
                <span className="r-label">จุดชี้ขาดสายอำนวยการ:</span>
                <span className="r-val">ระเบียบงานสารบรรณ พ.ศ. 2526</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
