import React, { useState } from 'react';
import { BookOpen, CheckCircle2, ChevronDown, ChevronUp, Clock, FileCheck, Layers, Sparkles } from 'lucide-react';
import { SUBJECTS, EXAM_INFO } from '../data/curriculumData';

export function CurriculumOverviewView() {
  const [expandedSubject, setExpandedSubject] = useState(SUBJECTS[0].id);

  const toggleSubject = (id) => {
    setExpandedSubject(expandedSubject === id ? null : id);
  };

  return (
    <div className="curriculum-view">
      {/* สรุปเกณฑ์และภาพรวมข้อสอบ */}
      <div className="curriculum-hero-card">
        <div className="hero-badge">
          <BookOpen size={15} />
          <span>โครงสร้างหลักสูตรและมาตรฐานการทดสอบ</span>
        </div>
        <h2 className="hero-title">
          {EXAM_INFO.title} ประจำปี {EXAM_INFO.year}
        </h2>
        <p className="hero-desc">{EXAM_INFO.overview}</p>

        <div className="curriculum-stats-strip">
          <div className="stat-pill">
            <span className="pill-label">จำนวนข้อสอบทั้งหมด:</span>
            <span className="pill-val">{EXAM_INFO.totalQuestions} ข้อ</span>
          </div>
          <div className="stat-pill">
            <span className="pill-label">ระยะเวลาในการทำข้อสอบ:</span>
            <span className="pill-val">{EXAM_INFO.timeMinutes} นาที (3 ชั่วโมง)</span>
          </div>
          <div className="stat-pill">
            <span className="pill-label">เกณฑ์ตัดสินผ่าน:</span>
            <span className="pill-val">ร้อยละ {EXAM_INFO.passingCriteriaPercent} (ไม่ต่ำกว่า {EXAM_INFO.passingScoreMin} ข้อ)</span>
          </div>
          <div className="stat-pill">
            <span className="pill-label">กำหนดการสอบข้อเขียน:</span>
            <span className="pill-val">{EXAM_INFO.examDateThai}</span>
          </div>
        </div>
      </div>

      {/* รายการ 6 หมวดวิชาหลัก */}
      <div className="subjects-accordion-list">
        <div className="section-title-wrap">
          <Layers size={18} className="text-cyan" />
          <h3 className="section-title-text">
            โครงสร้างเนื้อหาและวิชาที่ออกสอบ (6 หมวดวิชาหลัก)
          </h3>
        </div>

        {SUBJECTS.map((sub) => {
          const isExpanded = expandedSubject === sub.id;
          return (
            <div key={sub.id} className={`subject-accordion-card ${isExpanded ? 'open' : ''}`}>
              <div 
                className="accordion-header"
                onClick={() => toggleSubject(sub.id)}
              >
                <div className="header-left">
                  <div className="sub-num-badge">หมวดที่ {sub.number}</div>
                  <div>
                    <h4 className="sub-title">{sub.title}</h4>
                    <span className="sub-subtitle">{sub.subtitle}</span>
                  </div>
                </div>

                <div className="header-right">
                  <div className="weight-chip">{sub.weightDescription}</div>
                  <button className="expand-icon-btn" aria-label="เปิดปิดเนื้อหา">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
              </div>

              {isExpanded && (
                <div className="accordion-body">
                  <div className="topics-grid">
                    {sub.topics.map((topic, tIdx) => (
                      <div key={tIdx} className="topic-item-card">
                        <div className="topic-header">
                          <CheckCircle2 size={16} className="text-cyan" />
                          <h5 className="topic-name">{topic.name}</h5>
                        </div>
                        <p className="topic-detail">{topic.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="sub-footer-note">
                    <div className="target-note">
                      <span>เป้าหมายคะแนนแนะนำสำหรับหมวดนี้:</span>
                      <strong className="text-accent">{sub.targetScore} จาก {sub.maxScore} ข้อ</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
