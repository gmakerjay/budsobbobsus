// คลังแบบฝึกหัดข้อสอบมาตรฐาน 150 ข้อเต็ม ตามโครงสร้างหลักสูตร 6 หมวดวิชาหลัก
// สายงานอำนวยการและสนับสนุน (อก.) นายสิบตำรวจ / นายร้อยตำรวจ

import { IT_COMPUTER_QUESTIONS } from './questions/itComputerQuestions.js';
import { SARABAN_QUESTIONS } from './questions/sarabanQuestions.js';
import { LAW_QUESTIONS } from './questions/lawQuestions.js';
import { MATH_LOGIC_QUESTIONS } from './questions/mathLogicQuestions.js';
import { THAI_QUESTIONS } from './questions/thaiQuestions.js';
import { ENGLISH_SOCIETY_QUESTIONS } from './questions/englishSocietyQuestions.js';

export const QUESTIONS = [
  ...IT_COMPUTER_QUESTIONS,       // 35 ข้อ (หมวดที่ 1)
  ...SARABAN_QUESTIONS,           // 25 ข้อ (หมวดที่ 2)
  ...LAW_QUESTIONS,               // 25 ข้อ (หมวดที่ 3)
  ...MATH_LOGIC_QUESTIONS,        // 30 ข้อ (หมวดที่ 4 - สกัดตรงจาก PDF)
  ...THAI_QUESTIONS,              // 20 ข้อ (หมวดที่ 5)
  ...ENGLISH_SOCIETY_QUESTIONS    // 15 ข้อ (หมวดที่ 6)
];
