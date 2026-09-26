import React, { useState } from 'react';
import { 
  FileCheck2, 
  ExternalLink, 
  Search, 
  BookOpen, 
  ShieldCheck, 
  Scale, 
  Calendar, 
  CheckCircle2, 
  Award,
  Layers
} from 'lucide-react';
import { OFFICIAL_REFERENCES } from '../data/officialReferencesData';

export function OfficialReferencesView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRef, setSelectedRef] = useState(OFFICIAL_REFERENCES[0].id);

  const filteredReferences = OFFICIAL_REFERENCES.filter((ref) => 
    ref.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ref.issuingBody.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ref.keySections.some((sec) => sec.topic.toLowerCase().includes(searchTerm.toLowerCase()) || sec.points.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const activeRef = OFFICIAL_REFERENCES.find((r) => r.id === selectedRef) || OFFICIAL_REFERENCES[0];

  return (
    <div className="official-references-view">
      <div className="ref-hero-card">
        <div className="hero-badge">
          <Scale size={15} />
          <span>ฐานข้อมูลกฎหมายและระเบียบราชการที่อ้างอิงได้จริง</span>
        </div>
        <h2 className="hero-title">
          คลังระเบียบราชการ กฎหมาย และเอกสารอ้างอิงมาตรฐาน (Verified Legal Corpus)
        </h2>
        <p className="hero-desc">
          รวบรวมตัวบทกฎหมาย ระเบียบสำนักนายกรัฐมนตรี กฎ ก.ตร. และระเบียบการเงินการคลังภาครัฐ 
          ที่ใช้เป็นเกณฑ์มาตรฐานในการออกข้อสอบจริงของสายงานอำนวยการและสนับสนุน (อก.) 
          สามารถสืบค้นและเทียบเคียงกับข้อสอบได้โดยตรง
        </p>

        <div className="ref-search-bar">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="ค้นหาชื่อระเบียบ, มาตรา, พ.ร.บ., หรือประเด็นสำคัญ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="ref-layout-grid">
        {/* รายการระเบียบทางซ้าย */}
        <div className="ref-list-sidebar">
          <div className="list-hdr">
            <span>เอกสารอ้างอิงทางราชการ ({filteredReferences.length} รายการ)</span>
          </div>
          <div className="ref-items-stack">
            {filteredReferences.map((ref) => {
              const isActive = ref.id === activeRef.id;
              return (
                <button
                  key={ref.id}
                  onClick={() => setSelectedRef(ref.id)}
                  className={`ref-list-btn ${isActive ? 'active' : ''}`}
                >
                  <div className="ref-btn-top">
                    <span className="ref-tag">กฎหมาย/ระเบียบ</span>
                    <span className="ref-status">ตรวจสอบแล้ว</span>
                  </div>
                  <h4 className="ref-btn-title">{ref.title}</h4>
                  <div className="ref-btn-meta">
                    <span className="issuing">{ref.issuingBody.split('/')[0]}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* เนื้อหาเจาะลึกทางขวา */}
        <div className="ref-content-main">
          {activeRef && (
            <div className="ref-detail-card">
              <div className="ref-card-header">
                <div className="ref-meta-badges">
                  <span className="meta-badge verified">
                    <CheckCircle2 size={13} />
                    <span>แหล่งข้อมูลที่อ้างอิงได้จริง</span>
                  </span>
                  <span className="meta-badge date">
                    <Calendar size={13} />
                    <span>{activeRef.effectiveDate}</span>
                  </span>
                </div>
                <h3 className="ref-main-title">{activeRef.title}</h3>
                <div className="issuing-box">
                  <span className="issuing-label">หน่วยงานผู้ออกและประกาศ:</span>
                  <span className="issuing-text">{activeRef.issuingBody}</span>
                </div>
                <div className="scope-box">
                  <span className="scope-label">ขอบเขตการบังคับใช้:</span>
                  <span className="scope-text">{activeRef.scope}</span>
                </div>
              </div>

              <div className="ref-sections-list">
                <h4 className="sections-heading">
                  <BookOpen size={16} className="text-cyan" />
                  <span>สาระสำคัญและมาตราที่มักนำมาตั้งโจทย์ข้อสอบ</span>
                </h4>
                <div className="sections-grid">
                  {activeRef.keySections.map((sec, idx) => (
                    <div key={idx} className="key-section-item">
                      <div className="section-topic-row">
                        <span className="topic-idx">{idx + 1}</span>
                        <h5 className="topic-name">{sec.topic}</h5>
                      </div>
                      <p className="topic-points">{sec.points}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
