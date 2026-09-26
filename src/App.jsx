import React, { useState } from 'react';
import { Header } from './components/Header';
import { PracticeExamView } from './components/PracticeExamView';
import { ScoreDiagnosticView } from './components/ScoreDiagnosticView';
import { VisualHubView } from './components/VisualHubView';
import { CurriculumOverviewView } from './components/CurriculumOverviewView';
import { ScoreSimulatorView } from './components/ScoreSimulatorView';
import { OfficialReferencesView } from './components/OfficialReferencesView';
import { ShieldCheck, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { EXAM_INFO } from './data/curriculumData';

export function App() {
  const [activeTab, setActiveTab] = useState('practice');

  return (
    <div className="app-layout">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="app-main-content">
        {activeTab === 'practice' && <PracticeExamView />}
        {activeTab === 'diagnostic' && <ScoreDiagnosticView />}
        {activeTab === 'visual_hub' && <VisualHubView />}
        {activeTab === 'curriculum' && <CurriculumOverviewView />}
        {activeTab === 'references' && <OfficialReferencesView />}
        {activeTab === 'simulator' && <ScoreSimulatorView />}
      </main>

      <footer className="app-footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-brand">
              <ShieldCheck size={18} className="text-cyan" />
              <span className="footer-brand-title">
                ระบบวิเคราะห์โครงสร้างข้อสอบและฝึกทำโจทย์เชิงวิเคราะห์
              </span>
            </div>
            <p className="footer-desc">
              พัฒนาขึ้นเพื่อเป็นเครื่องมือสนับสนุนการเรียนรู้ตามโครงสร้างหลักสูตรมาตรฐาน 
              สายงานอำนวยการและสนับสนุน (อก.) กำหนดสอบวันที่ {EXAM_INFO.examDateThai}
            </p>
          </div>

          <div className="footer-right">
            <div className="footer-tag-list">
              <span className="footer-tag">ข้อสอบ 150 ข้อ</span>
              <span className="footer-tag">เวลาสอบ 3 ชั่วโมง</span>
              <span className="footer-tag">เกณฑ์ผ่านร้อยละ 60</span>
              <span className="footer-tag">รองรับ GitHub Pages</span>
            </div>
            <div className="footer-copyright">
              มาตรฐานเนื้อหาทางวิชาการและการวัดผลสมรรถนะภาครัฐ
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
