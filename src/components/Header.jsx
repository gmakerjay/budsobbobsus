import React, { useState, useEffect } from 'react';
import { Target, Calendar, Clock, BookOpen, BarChart3, HelpCircle, Layers, Calculator, Scale } from 'lucide-react';
import { EXAM_INFO } from '../data/curriculumData';

export function Header({ activeTab, setActiveTab }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const examDate = new Date(`${EXAM_INFO.examDate}T09:00:00+07:00`).getTime();
      const now = new Date().getTime();
      const difference = examDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft({ days, hours, minutes });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { id: 'practice', label: 'คลังแบบฝึกหัดและวิธีคิด', icon: HelpCircle },
    { id: 'diagnostic', label: 'วิเคราะห์ผลสอบเดิมและจุดอ่อน', icon: BarChart3 },
    { id: 'visual_hub', label: 'ศูนย์รวมผังมโนทัศน์และสูตร', icon: Layers },
    { id: 'curriculum', label: 'โครงสร้างหลักสูตร 6 หมวด', icon: BookOpen },
    { id: 'references', label: 'แหล่งอ้างอิงจริงทางราชการ', icon: Scale },
    { id: 'simulator', label: 'โปรแกรมคำนวณเกณฑ์ผ่าน 60%', icon: Calculator },
  ];

  return (
    <header className="app-header">
      <div className="header-top">
        <div className="brand-group">
          <div className="brand-icon-wrapper">
            <Target className="brand-icon" size={26} />
          </div>
          <div>
            <div className="brand-badge">
              <span>ระบบเตรียมความพร้อมมาตรฐานวิชาการ</span>
              <span className="dot-separator">•</span>
              <span>สายงานอำนวยการและสนับสนุน (อก.)</span>
            </div>
            <h1 className="brand-title">
              ระบบวิเคราะห์โครงสร้างข้อสอบและฝึกทำโจทย์เชิงลึก
            </h1>
          </div>
        </div>

        <div className="header-stats">
          <div className="stat-card">
            <div className="stat-label">
              <Calendar size={13} className="stat-icon" />
              <span>กำหนดสอบข้อเขียน</span>
            </div>
            <div className="stat-value">{EXAM_INFO.examDateThai}</div>
            <div className="stat-sub">
              เหลือเวลาอีก {timeLeft.days} วัน ({timeLeft.hours} ชม.)
            </div>
          </div>

          <div className="stat-card highlight">
            <div className="stat-label">
              <Clock size={13} className="stat-icon" />
              <span>เกณฑ์ตัดสินผ่านขั้นต่ำ</span>
            </div>
            <div className="stat-value text-accent">ร้อยละ 60 (90 ข้อ)</div>
            <div className="stat-sub">ข้อสอบรวม 150 ข้อ เวลา 3 ชม.</div>
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <div className="nav-container">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`nav-button ${isActive ? 'active' : ''}`}
              >
                <Icon size={16} className="nav-icon" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
