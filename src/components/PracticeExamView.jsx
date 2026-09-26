import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  HelpCircle, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  ShieldAlert, 
  Filter, 
  RotateCcw,
  BookOpen,
  Award
} from 'lucide-react';
import { QUESTIONS } from '../data/questionsData';
import { SUBJECTS } from '../data/curriculumData';
import { QuestionDiagram } from './QuestionDiagram';

export function PracticeExamView() {
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showThinking, setShowThinking] = useState({});
  const [examMode, setExamMode] = useState('study'); // 'study' (instant explain) or 'exam' (timed test)

  // กรองคำถามตามหมวดวิชาที่เลือก
  const filteredQuestions = selectedSubject === 'all'
    ? QUESTIONS
    : QUESTIONS.filter((q) => q.subjectId === selectedSubject);

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];
  const totalInFilter = filteredQuestions.length;

  const handleSelectOption = (optionIndex) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIndex
    }));

    if (examMode === 'study') {
      setShowThinking((prev) => ({
        ...prev,
        [currentQ.id]: true
      }));
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowThinking({});
    setCurrentIndex(0);
  };

  const toggleThinkingForCurrent = () => {
    setShowThinking((prev) => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id]
    }));
  };

  const isCurrentAnswered = userAnswers[currentQ?.id] !== undefined;
  const currentUserChoice = userAnswers[currentQ?.id];
  const isCorrect = isCurrentAnswered && currentUserChoice === currentQ.correctIndex;

  // คำนวณสถิติ
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(
    ([qId, ans]) => {
      const q = QUESTIONS.find((item) => item.id === qId);
      return q && q.correctIndex === ans;
    }
  ).length;

  return (
    <div className="practice-view">
      {/* แผงควบคุมและตัวกรองหมวดวิชา */}
      <div className="practice-controls-card">
        <div className="controls-top">
          <div className="subject-filter-group">
            <span className="filter-title">
              <Filter size={16} />
              <span>เลือกหมวดวิชา:</span>
            </span>
            <div className="filter-pills">
              <button
                className={`filter-pill ${selectedSubject === 'all' ? 'active' : ''}`}
                onClick={() => { setSelectedSubject('all'); setCurrentIndex(0); }}
              >
                ทั้งหมด ({QUESTIONS.length} ข้อ)
              </button>
              {SUBJECTS.map((sub) => (
                <button
                  key={sub.id}
                  className={`filter-pill ${selectedSubject === sub.id ? 'active' : ''}`}
                  onClick={() => { setSelectedSubject(sub.id); setCurrentIndex(0); }}
                >
                  {sub.title.split(' ')[0]} ({QUESTIONS.filter((q) => q.subjectId === sub.id).length})
                </button>
              ))}
            </div>
          </div>

          <div className="mode-toggle-group">
            <button
              className={`mode-btn ${examMode === 'study' ? 'active' : ''}`}
              onClick={() => setExamMode('study')}
            >
              <Lightbulb size={14} />
              <span>โหมดเรียนรู้พร้อมวิธีคิด</span>
            </button>
            <button
              className={`mode-btn ${examMode === 'exam' ? 'active' : ''}`}
              onClick={() => setExamMode('exam')}
            >
              <Clock size={14} />
              <span>โหมดจำลองสอบจริง</span>
            </button>
            <button className="reset-btn" onClick={handleReset} title="เริ่มทำใหม่">
              <RotateCcw size={14} />
              <span>ล้างคำตอบ</span>
            </button>
          </div>
        </div>

        {/* แถบสถานะความคืบหน้า */}
        <div className="practice-progress-bar-wrap">
          <div className="progress-meta">
            <span>ทำแล้ว {answeredCount} จาก {QUESTIONS.length} ข้อ</span>
            <span>ตอบถูก {correctCount} ข้อ ({answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0}%)</span>
          </div>
          <div className="progress-track">
            <div 
              className="progress-fill"
              style={{ width: `${(answeredCount / QUESTIONS.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* สารบัญข้อคำถาม (Question Palette) */}
        <div className="question-palette">
          {filteredQuestions.map((q, idx) => {
            const answered = userAnswers[q.id] !== undefined;
            const correct = answered && userAnswers[q.id] === q.correctIndex;
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`palette-num-btn ${isCurrent ? 'current' : ''} ${
                  answered ? (correct ? 'answered-correct' : 'answered-wrong') : ''
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* บัตรโจทย์คำถามหลัก */}
      {currentQ && (
        <div className="question-card">
          <div className="question-card-header">
            <div className="question-meta-tags">
              <span className="meta-tag subject">
                หมวด: {SUBJECTS.find((s) => s.id === currentQ.subjectId)?.title}
              </span>
              <span className="meta-tag topic">{currentQ.topic}</span>
              <span className={`meta-tag difficulty ${currentQ.difficulty}`}>
                ระดับ: {currentQ.difficulty}
              </span>
            </div>
            <div className="question-counter">
              ข้อที่ {currentIndex + 1} / {totalInFilter}
            </div>
          </div>

          <div className="question-body">
            <h2 className="question-text">{currentQ.question}</h2>

            {/* ตัวเลือกคำตอบ ก, ข, ค, ง */}
            <div className="options-list">
              {currentQ.options.map((opt, optIdx) => {
                const choiceLabel = ['ก.', 'ข.', 'ค.', 'ง.'][optIdx];
                const isSelected = currentUserChoice === optIdx;
                const isCorrectOption = optIdx === currentQ.correctIndex;
                const showValidation = isCurrentAnswered && (examMode === 'study' || showThinking[currentQ.id]);

                let optClass = 'option-item';
                if (isSelected) optClass += ' selected';
                if (showValidation) {
                  if (isCorrectOption) optClass += ' correct';
                  else if (isSelected) optClass += ' incorrect';
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={optClass}
                  >
                    <div className="option-label-circle">{choiceLabel}</div>
                    <div className="option-content">{opt}</div>
                    {showValidation && (
                      <div className="option-status-icon">
                        {isCorrectOption ? (
                          <CheckCircle2 size={18} className="text-emerald" />
                        ) : isSelected ? (
                          <XCircle size={18} className="text-rose" />
                        ) : null}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* ปุ่มแสดง/ซ่อนวิธีคิด (กรณีต้องการดูละเอียด) */}
            <div className="action-row">
              <button
                className="toggle-thinking-btn"
                onClick={toggleThinkingForCurrent}
              >
                <Sparkles size={16} />
                <span>
                  {showThinking[currentQ.id]
                    ? 'ซ่อนกระบวนการคิดและเฉลยละเอียด'
                    : 'แสดงกระบวนการคิดและเฉลยละเอียด'}
                </span>
              </button>

              <div className="nav-buttons-group">
                <button
                  className="nav-page-btn"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                >
                  <ArrowLeft size={16} />
                  <span>ข้อก่อนหน้า</span>
                </button>
                <button
                  className="nav-page-btn primary"
                  disabled={currentIndex === totalInFilter - 1}
                  onClick={() => setCurrentIndex((prev) => Math.min(totalInFilter - 1, prev + 1))}
                >
                  <span>ข้อถัดไป</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* ส่วนแสดงกระบวนการคิด วิธีทำทีละสเต็ป และภาพประกอบ */}
            {showThinking[currentQ.id] && (
              <div className="detailed-thinking-panel">
                <div className="thinking-header">
                  <div className="thinking-title">
                    <Lightbulb size={20} className="text-amber" />
                    <span>กระบวนการคิดและแนวทางวิเคราะห์ทีละขั้นตอน</span>
                  </div>
                  <div className={`result-tag ${isCorrect ? 'correct' : 'wrong'}`}>
                    {isCorrect ? 'วิเคราะห์ได้ถูกต้อง' : 'คำตอบที่ถูกต้องคือ ' + ['ก.', 'ข.', 'ค.', 'ง.'][currentQ.correctIndex]}
                  </div>
                </div>

                {/* ขั้นตอนการคิด Step-by-Step */}
                <div className="steps-container">
                  <div className="section-label">ลำดับขั้นตอนการวิเคราะห์:</div>
                  {currentQ.thinkingProcess.map((step, sIdx) => (
                    <div key={sIdx} className="thinking-step-row">
                      <div className="step-badge">{sIdx + 1}</div>
                      <div className="step-text">{step}</div>
                    </div>
                  ))}
                </div>

                {/* แผนผังภาพประกอบเชิงเทคนิค */}
                {currentQ.diagramType && (
                  <div className="diagram-section-wrap">
                    <div className="section-label">ภาพประกอบและแผนผังมโนทัศน์ช่วยจำ:</div>
                    <QuestionDiagram type={currentQ.diagramType} data={currentQ.diagramData} />
                  </div>
                )}

                {/* สรุปหลักการ/ตัวบทกฎหมาย */}
                <div className="concept-box">
                  <div className="concept-header">
                    <BookOpen size={16} className="text-cyan" />
                    <span>แก่นหลักการและระเบียบที่เกี่ยวข้อง:</span>
                  </div>
                  <div className="concept-body">{currentQ.conceptSummary}</div>
                </div>

                {/* กล่องสูตรลัด / จุดที่มักหลงกล */}
                <div className="shortcut-box">
                  <div className="shortcut-header">
                    <ShieldAlert size={16} className="text-amber" />
                    <span>สูตรลัดจำเร็วและจุดที่คนส่วนใหญ่มักตอบผิด:</span>
                  </div>
                  <div className="shortcut-body">{currentQ.shortcutTip}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
