import React, { useState } from 'react';
import { Section } from './common/Section';
import { Typography } from './common/Typography';
import { Button } from './common/Button';
import { Card } from './common/Card';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Beaker, Book, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const subjects = [
  { id: 'math', name: 'Mathematics', icon: <Calculator /> },
  { id: 'science', name: 'Science', icon: <Beaker /> },
  { id: 'english', name: 'English', icon: <Book /> },
  { id: 'prep', name: 'Test Prep', icon: <Globe /> },
];

const content = {
  math: {
    title: 'Mathematics',
    desc: '논리적 사고의 기초를 다집니다.',
    levels: [
      { level: 'Elementary', details: '기초 연산, 도형 감각, 창의 사고력 수학' },
      { level: 'Middle School', details: 'Pre-Algebra, Algebra I, 기하학 기초' },
      { level: 'High School', details: 'Algebra II, Geometry, Pre-Calculus, Calculus AB/BC' }
    ],
    features: ['개념 원리 완벽 이해', '오답 노트 시스템', '서술형 문제 대비']
  },
  science: {
    title: 'Science',
    desc: '자연 현상의 원리를 탐구합니다.',
    levels: [
      { level: 'Elementary', details: '생활 속 과학, 기초 실험, 관찰 일지' },
      { level: 'Middle School', details: 'Earth Science, Life Science, Physical Science' },
      { level: 'High School', details: 'Biology, Chemistry, Physics (Regular/Honors/AP)' }
    ],
    features: ['실험 중심 학습', '데이터 분석 능력', '과학적 리포트 작성']
  },
  english: {
    title: 'English',
    desc: '깊이 있는 독해와 표현력을 기릅니다.',
    levels: [
      { level: 'Elementary', details: 'Phonics, Reading Comprehension, Creative Writing' },
      { level: 'Middle School', details: 'Novel Studies, Grammar, Essay Writing' },
      { level: 'High School', details: 'Literature Analysis, Academic Writing, AP Lang/Lit' }
    ],
    features: ['Book Club 운영', '1:1 첨삭 지도', '비판적 사고 훈련']
  },
  prep: {
    title: 'SAT/ACT Prep',
    desc: '목표 대학 합격을 위한 실전 대비.',
    levels: [
      { level: 'Foundation', details: '유형 분석, 필수 어휘 및 문법 정리' },
      { level: 'Strategy', details: '영역별 문제 풀이 전략, 시간 관리 연습' },
      { level: 'Final', details: '실전 모의고사, 취약점 집중 보완' }
    ],
    features: ['기출 문제 분석', '개인별 약점 진단', '실전 시뮬레이션']
  }
};

export const Curriculum = () => {
  const [activeTab, setActiveTab] = useState('math');

  return (
    <>
      <Section background="warm" className="border-b border-[#E8E6E3]">
        <div className="text-center">
          <Typography variant="overline" color="copper" className="mb-4 block">Curriculum</Typography>
          <Typography variant="h1" className="mb-6">Academic Programs</Typography>
          <Typography variant="body" color="muted" className="max-w-2xl mx-auto">
            체계적인 커리큘럼으로 기초부터 심화까지 완벽하게 대비합니다.
          </Typography>
        </div>
      </Section>

      <Section background="white">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {subjects.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setActiveTab(sub.id)}
              className={`flex items-center gap-2 px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-300 border ${
                activeTab === sub.id
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'bg-white text-stone border-[#E8E6E3] hover:border-copper hover:text-copper'
              }`}
            >
              {sub.icon}
              {sub.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
               <div className="grid md:grid-cols-2 gap-12">
                 <div>
                   <Typography variant="h3" className="mb-4">{content[activeTab as keyof typeof content].title}</Typography>
                   <Typography variant="body-large" color="muted" className="mb-8">{content[activeTab as keyof typeof content].desc}</Typography>

                   <div className="bg-warm-white p-8 mb-8 border border-[#E8E6E3]">
                      <Typography variant="h5" className="mb-6 uppercase tracking-wider">Key Features</Typography>
                      <ul className="space-y-4">
                        {content[activeTab as keyof typeof content].features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-3">
                             <div className="w-1.5 h-1.5 rounded-full bg-copper mt-2.5"></div>
                             <Typography variant="body">{feat}</Typography>
                          </li>
                        ))}
                      </ul>
                   </div>
                 </div>

                 <div className="space-y-6">
                    {content[activeTab as keyof typeof content].levels.map((lvl, i) => (
                      <Card key={i} variant="default" className="p-6">
                        <Typography variant="h5" color="copper" className="mb-2">{lvl.level}</Typography>
                        <Typography variant="body" color="muted">{lvl.details}</Typography>
                      </Card>
                    ))}
                 </div>
               </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>

      <Section background="charcoal" spacing="lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div>
            <Typography variant="h3" color="white" className="mb-2">Not sure where to start?</Typography>
            <Typography variant="body" color="white" className="opacity-80">
              Schedule a free level test to assess your child's current standing.
            </Typography>
          </div>
          <Link to="/contact">
            <Button variant="accent">Book Level Test</Button>
          </Link>
        </div>
      </Section>
    </>
  );
};
