import React, { useState, useEffect, useRef } from 'react';
import { 
  Target, 
  Calendar, 
  Clock, 
  BookOpen, 
  BarChart3, 
  HelpCircle, 
  Layers, 
  Calculator, 
  Scale, 
  ChevronLeft, 
  ChevronRight,
  MoveHorizontal
} from 'lucide-react';
import { EXAM_INFO } from '../data/curriculumData';

export function Header({ activeTab, setActiveTab }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const navScrollRef = useRef(null);
  const buttonRefs = useRef({});

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

  // ตรวจสอบสถานะการเลื่อนซ้าย-ขวา
  const checkScroll = () => {
    const el = navScrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 6);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 6);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  // เลื่อนปุ่ม active ให้อยู่กึ่งกลางหน้าจอเสมอ
  useEffect(() => {
    const btn = buttonRefs.current[activeTab];
    if (btn && navScrollRef.current) {
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setTimeout(checkScroll, 350);
    }
  }, [activeTab]);

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    const btn = buttonRefs.current[tabId];
    if (btn) {
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  const scrollByDirection = (direction) => {
    if (!navScrollRef.current) return;
    const offset = direction === 'left' ? -200 : 200;
    navScrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    setTimeout(checkScroll, 300);
  };

  const activeIndex = navItems.findIndex((item) => item.id === activeTab);

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

      {/* แถบนำทางพร้อมระบบจุดบอกสถานะการสไลด์บนมือถือ */}
      <nav className="header-nav">
        <div className="nav-scroll-wrapper">
          {/* ปุ่มลูกศรเลื่อนซ้าย */}
          <button 
            type="button"
            className={`nav-scroll-arrow left ${canScrollLeft ? 'visible' : ''}`}
            onClick={() => scrollByDirection('left')}
            aria-label="เลื่อนเมนูไปทางซ้าย"
          >
            <ChevronLeft size={16} />
          </button>

          <div 
            className="nav-container" 
            ref={navScrollRef}
            onScroll={checkScroll}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  ref={(el) => (buttonRefs.current[item.id] = el)}
                  onClick={() => handleSelectTab(item.id)}
                  className={`nav-button ${isActive ? 'active' : ''}`}
                >
                  <Icon size={16} className="nav-icon" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* ปุ่มลูกศรเลื่อนขวา */}
          <button 
            type="button"
            className={`nav-scroll-arrow right ${canScrollRight ? 'visible' : ''}`}
            onClick={() => scrollByDirection('right')}
            aria-label="เลื่อนเมนูไปทางขวา"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* จุดบอกว่าสไลด์ได้สำหรับมือถือ (Pagination Dots & Swipe Indicator) */}
        <div className="mobile-nav-slider-indicator">
          <div className="slider-indicator-left">
            <MoveHorizontal size={13} className="slider-icon-pulse" />
            <span className="slider-hint-text">
              สไลด์เลื่อนแถบเมนู ({activeIndex + 1}/{navItems.length})
            </span>
          </div>

          <div className="slider-dots-group">
            {navItems.map((item, idx) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className={`slider-dot-btn ${isActive ? 'active' : ''}`}
                  title={item.label}
                  aria-label={`ไปที่หมวดที่ ${idx + 1}: ${item.label}`}
                >
                  <span className="dot-shape" />
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
