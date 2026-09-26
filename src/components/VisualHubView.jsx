import React, { useState } from 'react';
import { Layers, Bookmark, Sparkles, CheckCircle2, ChevronRight, FileText, ShieldCheck, Zap } from 'lucide-react';
import { INFOGRAPHICS_DATA } from '../data/infographicsData';

export function VisualHubView() {
  const [activeSectionId, setActiveSectionId] = useState(INFOGRAPHICS_DATA[0].id);

  const currentInfographic = INFOGRAPHICS_DATA.find((item) => item.id === activeSectionId) || INFOGRAPHICS_DATA[0];

  return (
    <div className="visual-hub-view">
      <div className="visual-hero-card">
        <div className="hero-badge">
          <Layers size={15} />
          <span>ศูนย์รวมแผนผังมโนทัศน์และภาพประกอบเชิงวิชาการ</span>
        </div>
        <h2 className="hero-title">
          สรุปสาระสำคัญด้วยภาพและผังเปรียบเทียบ (Visual Knowledge Architecture)
        </h2>
        <p className="hero-desc">
          การจำแนกเนื้อหาและกฎระเบียบที่ซับซ้อนให้อยู่ในรูปของตารางเปรียบเทียบ กล่องสูตรลัด 
          และแผนผังมโนทัศน์ ช่วยให้สมองจดจำได้อย่างแม่นยำและดึงมาใช้ในห้องสอบได้อย่างรวดเร็ว
        </p>
      </div>

      <div className="visual-content-layout">
        {/* เมนูด้านข้างเลือกหัวข้อผัง */}
        <aside className="visual-sidebar">
          <div className="sidebar-header">
            <span>หมวดหมู่แผนผังและสูตร</span>
          </div>
          <div className="sidebar-menu">
            {INFOGRAPHICS_DATA.map((info) => {
              const isActive = info.id === activeSectionId;
              return (
                <button
                  key={info.id}
                  onClick={() => setActiveSectionId(info.id)}
                  className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
                >
                  <div className="nav-item-content">
                    <span className="item-cat-label">{info.category}</span>
                    <span className="item-title-text">{info.title}</span>
                  </div>
                  <ChevronRight size={16} className="nav-arrow" />
                </button>
              );
            })}
          </div>
        </aside>

        {/* เนื้อหาผังที่เลือก */}
        <main className="visual-main-panel">
          <div className="panel-header-card">
            <div className="panel-meta-tags">
              <span className="cat-tag">{currentInfographic.category}</span>
              <span className="badge-tag">{currentInfographic.badge}</span>
            </div>
            <h3 className="panel-title">{currentInfographic.title}</h3>
            <p className="panel-desc">{currentInfographic.description}</p>
          </div>

          <div className="infographic-sections-list">
            {currentInfographic.sections.map((sec, sIdx) => (
              <div key={sIdx} className="infographic-section-card">
                <h4 className="sec-title">{sec.subtitle}</h4>
                <div className="sec-items-grid">
                  {sec.items.map((item, iIdx) => (
                    <div key={iIdx} className="info-detail-box">
                      <div className="box-top">
                        <span className="box-label">{item.label}</span>
                        {item.tag && <span className="box-tag">{item.tag}</span>}
                      </div>
                      <p className="box-detail">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
