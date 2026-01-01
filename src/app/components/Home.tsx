import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from './common/Section';
import { Typography } from './common/Typography';
import { Button } from './common/Button';
import { Card } from './common/Card';
import { BookOpen, Brain, Users, ArrowRight, Star, Trophy, GraduationCap, Quote, ChevronDown, Sparkles, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1605547446826-efe6b45ffe4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWNhZGVtaWMlMjBsaWJyYXJ5JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzY3MTI2MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Library"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B9D]/60 via-[#A855F7]/50 to-[#06B6D4]/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="overline" className="text-[#FF6B9D] mb-6 block">
              Premium Education in Fort Lee
            </Typography>
            <Typography variant="h1" color="white" className="mb-6 max-w-4xl mx-auto">
              원리를 이해하면<br className="md:hidden"/> 모든 것이 쉬워집니다
            </Typography>
            <Typography variant="body-large" color="white" className="mb-10 max-w-2xl mx-auto opacity-90">
              단순 암기가 아닌 깊이 있는 이해를 통해<br className="md:hidden"/> 아이들의 진짜 실력을 키우는 Newton School입니다.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/curriculum">
                <Button variant="accent" size="lg">Explore Curriculum</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Contact Us</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Value Proposition */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card variant="hover" className="text-center group hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#FF6B9D]">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#FF6B9D] to-[#A855F7]/10 text-[#FF6B9D] flex items-center justify-center rounded-2xl group-hover:bg-gradient-to-br from-[#FF6B9D] to-[#A855F7] group-hover:text-white transition-colors duration-300">
              <Brain size={32} />
            </div>
            <Typography variant="h4" className="mb-4">Deep Understanding</Typography>
            <Typography variant="body" color="muted">
              공식 암기가 아닌 원리 이해를 최우선으로 하여, 응용력과 사고력을 동시에 키웁니다.
            </Typography>
          </Card>

          <Card variant="hover" className="text-center group hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#FF6B9D]">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#FF6B9D] to-[#A855F7]/10 text-[#FF6B9D] flex items-center justify-center rounded-2xl group-hover:bg-gradient-to-br from-[#FF6B9D] to-[#A855F7] group-hover:text-white transition-colors duration-300">
              <Users size={32} />
            </div>
            <Typography variant="h4" className="mb-4">Personalized Care</Typography>
            <Typography variant="body" color="muted">
              소수 정예 수업으로 학생 한 명 한 명의 성향과 수준을 파악하여 맞춤형 지도를 제공합니다.
            </Typography>
          </Card>

          <Card variant="hover" className="text-center group hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#FF6B9D]">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#FF6B9D] to-[#A855F7]/10 text-[#FF6B9D] flex items-center justify-center rounded-2xl group-hover:bg-gradient-to-br from-[#FF6B9D] to-[#A855F7] group-hover:text-white transition-colors duration-300">
              <Trophy size={32} />
            </div>
            <Typography variant="h4" className="mb-4">Proven Results</Typography>
            <Typography variant="body" color="muted">
              명문대 합격과 성적 향상으로 증명된 Newton School만의 교육 시스템을 경험하세요.
            </Typography>
          </Card>
        </div>
      </Section>

      {/* Principal/About Preview */}
      <Section background="soft-pink" spacing="lg">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 relative">
             <div className="aspect-[3/4] max-h-[600px] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMG1hbGUlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3MTI2MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#FF6B9D] to-[#A855F7] p-6 flex flex-col justify-center text-white hidden md:flex">
                <Typography variant="h2" color="white" className="text-5xl font-bold mb-2">15+</Typography>
                <Typography variant="caption" color="white">Years of Experience</Typography>
             </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <div>
               <Typography variant="overline" className="text-[#FF6B9D] mb-4 block">About Us</Typography>
               <Typography variant="h2" className="mb-6">
                 교육의 본질은<br/>
                 성적 그 이상입니다
               </Typography>
               <Typography variant="quote" className="text-[#6B7280] mb-6 block border-l-2 border-[#FF6B9D] pl-6">
                 "학생들이 스스로 생각하는 힘을 기를 때, 성적은 자연스럽게 따라옵니다."
               </Typography>
               <Typography variant="body" color="muted" className="mb-6">
                 Newton School은 단순히 입시를 위한 기술을 가르치는 곳이 아닙니다.
                 우리는 학생들이 학문의 즐거움을 깨닫고, 스스로 문제를 해결하는 능력을 키워
                 미래의 인재로 성장하도록 돕습니다.
               </Typography>
               <Link to="/about">
                 <Button variant="secondary">Learn More About Us</Button>
               </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="gradient" spacing="md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          <div>
            <Typography variant="h2" color="white" className="mb-2">500+</Typography>
            <Typography variant="caption" color="muted">Students Taught</Typography>
          </div>
          <div>
            <Typography variant="h2" color="white" className="mb-2">95%</Typography>
            <Typography variant="caption" color="muted">Satisfaction Rate</Typography>
          </div>
          <div>
            <Typography variant="h2" color="white" className="mb-2">50+</Typography>
            <Typography variant="caption" color="muted">University Acceptances</Typography>
          </div>
          <div>
            <Typography variant="h2" color="white" className="mb-2">1:1</Typography>
            <Typography variant="caption" color="muted">Personalized Attention</Typography>
          </div>
        </div>
      </Section>

      {/* Curriculum Preview */}
      <Section background="white">
        <div className="text-center mb-16">
          <Typography variant="overline" className="text-[#FF6B9D] mb-4 block">Our Curriculum</Typography>
          <Typography variant="h2" className="mb-6">Tailored Learning Programs</Typography>
          <Typography variant="body" color="muted" className="max-w-2xl mx-auto">
            기초부터 심화까지, 학년별 수준별 맞춤 커리큘럼을 제공합니다.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Mathematics', desc: '논리적 사고력을 키우는 수학', img: 'https://images.unsplash.com/photo-1758685733800-bc2a64fa8017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoJTIwY2xhc3MlMjBzdHVkZW50JTIwd3JpdGluZyUyMGNoYWxrYm9hcmR8ZW58MXx8fHwxNzY3MTI2MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080' },
            { title: 'Science', desc: '호기심을 탐구로 연결하는 과학', img: 'https://images.unsplash.com/photo-1575467678971-7cd5c2937dc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFiJTIwZXhwZXJpbWVudCUyMHN0dWRlbnRzJTIwaGlnaCUyMHNjaG9vbHxlbnwxfHx8fDE3NjcxMjYwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
            { title: 'English', desc: '비판적 독해와 표현력을 기르는 영어', img: 'https://images.unsplash.com/photo-1724166595400-fdfcdb29685e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdsaXNoJTIwbGl0ZXJhdHVyZSUyMGJvb2slMjByZWFkaW5nJTIwc3R1ZGVudHxlbnwxfHx8fDE3NjcxMjYwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080' }
          ].map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <Typography variant="h4" className="mb-2 group-hover:text-[#FF6B9D] transition-colors">{item.title}</Typography>
              <Typography variant="body" color="muted" className="mb-4">{item.desc}</Typography>
              <div className="flex items-center text-[#FF6B9D] font-medium uppercase tracking-wider text-xs group-hover:underline">
                View Program <ArrowRight size={14} className="ml-2" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="soft-pink" spacing="lg">
        <div className="text-center mb-12">
          <Typography variant="overline" className="text-[#FF6B9D] mb-4 block">Testimonials</Typography>
          <Typography variant="h2" className="mb-6">What Parents Say</Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { text: "Newton School changed my daughter's perspective on math. She loves learning now.", author: "Jane D." },
             { text: "The teachers are incredibly dedicated and the curriculum is top-notch.", author: "Michael R." },
             { text: "Best investment for my son's education. He got into his dream college!", author: "Sarah L." }
           ].map((t, i) => (
             <Card key={i} variant="default" className="text-center">
               <div className="mb-4 flex justify-center text-[#FF6B9D]">
                 {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
               </div>
               <Typography variant="body" className="mb-6 italic">"{t.text}"</Typography>
               <Typography variant="caption" color="muted">- {t.author}</Typography>
             </Card>
           ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient" spacing="xl">
        <div className="text-center">
          <Typography variant="h2" color="white" className="mb-6">Ready to Start?</Typography>
          <Typography variant="body-large" color="white" className="mb-10 max-w-2xl mx-auto opacity-80">
            무료 레벨 테스트와 상담을 통해 자녀에게 꼭 맞는 로드맵을 설계하세요.
          </Typography>
          <Link to="/contact">
            <Button variant="accent" size="lg">Book a Consultation</Button>
          </Link>
        </div>
      </Section>
    </>
  );
};
