import React from 'react';
import { Section } from './common/Section';
import { Typography } from './common/Typography';
import { Button } from './common/Button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export const About = () => {
  return (
    <>
      {/* Header */}
      <Section background="warm" spacing="lg" className="border-b border-[#E8E6E3]">
        <div className="text-center">
          <Typography variant="overline" color="copper" className="mb-4 block">About Us</Typography>
          <Typography variant="h1" className="mb-6">Our Philosophy</Typography>
          <Typography variant="body" color="muted" className="max-w-2xl mx-auto">
            Newton School은 단순한 학원이 아닌, 아이들의 미래를 함께 그리는 교육 파트너입니다.
          </Typography>
        </div>
      </Section>

      {/* Principal Profile */}
      <Section background="white">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <div className="aspect-[3/4] w-full bg-gray-100 relative">
               <img
                 src="https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMG1hbGUlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3MTI2MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                 alt="Principal Kenny"
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="mt-6">
              <Typography variant="h4" className="mb-1">Kenny Kim</Typography>
              <Typography variant="caption" color="copper" className="mb-4 block">Principal / Head Teacher</Typography>
              <div className="space-y-2 text-sm text-stone font-body">
                <p>• Columbia University, M.A. Education</p>
                <p>• 15+ Years Teaching Experience</p>
                <p>• Specialized in SAT/ACT Math</p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 space-y-8">
            <Typography variant="h3">"암기가 아닌 이해,<br/>정답이 아닌 과정이 중요합니다"</Typography>
            <div className="space-y-6 text-lg text-stone font-body leading-relaxed">
              <p>
                안녕하세요, Newton School 원장 Kenny입니다.
              </p>
              <p>
                지난 15년간 수많은 학생들을 지도하며 깨달은 한 가지 진실이 있습니다.
                성적이 오르지 않는 이유는 머리가 나빠서가 아니라, '공부하는 방법'과 '원리'를 모르기 때문입니다.
              </p>
              <p>
                많은 학생들이 공식을 맹목적으로 외우고 문제를 풉니다.
                이런 방식은 당장의 시험 점수를 올릴 수는 있어도, 학년이 올라갈수록 한계에 부딪힙니다.
                Newton School은 <strong>"Why?"</strong>라는 질문을 던집니다. 왜 이런 공식이 나왔는지,
                어떻게 적용되는지를 스스로 깨닫게 합니다.
              </p>
              <p>
                저희는 단순히 지식을 전달하는 것을 넘어,
                아이들이 배움의 주체가 되어 스스로 성장할 수 있도록 돕겠습니다.
              </p>
            </div>

            <div className="pt-8 border-t border-[#E8E6E3] grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 "원리 중심의 개념 학습",
                 "1:1 맞춤형 커리큘럼",
                 "메타인지 능력 강화",
                 "자기주도 학습 습관 형성"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <div className="w-6 h-6 rounded-full bg-copper/10 flex items-center justify-center text-copper">
                     <Check size={14} />
                   </div>
                   <Typography variant="body" className="font-medium">{item}</Typography>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </Section>

      {/* History Timeline */}
      <Section background="warm" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <Typography variant="h3" className="mb-12 text-center">Our Journey</Typography>
          <div className="space-y-12 border-l border-copper/30 pl-8 ml-4 md:ml-0 md:pl-0">
            {[
              { year: '2010', title: 'Foundation', desc: 'Newton School founded in Fort Lee with a vision for premium education.' },
              { year: '2015', title: 'Expansion', desc: 'Moved to current larger facility to accommodate growing student body.' },
              { year: '2019', title: 'Curriculum Innovation', desc: 'Launched proprietary "Deep Think" math curriculum.' },
              { year: '2023', title: 'Excellence Award', desc: 'Recognized as Top Educational Institution in NJ.' }
            ].map((item, i) => (
              <div key={i} className="relative md:grid md:grid-cols-5 md:gap-12 group">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-white border-4 border-copper md:hidden"></div>
                <div className="md:col-span-1 md:text-right">
                  <Typography variant="h4" color="copper" className="mb-1">{item.year}</Typography>
                </div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-copper mt-2 z-10"></div>
                <div className="md:col-span-4 pb-8 md:pb-0 border-b md:border-b-0 border-[#E8E6E3] last:border-0 md:pl-8 md:border-l md:border-copper/30 relative -left-[1px]">
                   <Typography variant="h5" className="mb-2">{item.title}</Typography>
                   <Typography variant="body" color="muted">{item.desc}</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="charcoal" spacing="xl">
        <div className="text-center text-white">
          <Typography variant="h3" color="white" className="mb-6">Join Our Community</Typography>
          <Typography variant="body" color="white" className="opacity-80 mb-10 max-w-xl mx-auto">
            Experience the difference of true education. Schedule a visit today.
          </Typography>
          <Link to="/contact">
             <Button variant="accent">Contact Us</Button>
          </Link>
        </div>
      </Section>
    </>
  );
};
