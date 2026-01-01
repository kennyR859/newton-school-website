import React from 'react';
import { Section } from './common/Section';
import { Typography } from './common/Typography';
import { Card } from './common/Card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Link } from 'react-router-dom';
import { Button } from './common/Button';

export const FAQ = () => {
  const faqs = [
    {
      category: "Admissions",
      items: [
        { q: "입학 테스트가 있나요?", a: "네, 학생의 현재 수준을 정확히 파악하기 위해 수학과 영어 레벨 테스트를 진행합니다. 테스트 결과에 따라 맞춤형 커리큘럼을 제안해 드립니다." },
        { q: "상담 예약은 어떻게 하나요?", a: "홈페이지의 Contact 페이지를 통해 예약하거나, 전화 (201) 252-7252로 연락 주시면 됩니다." }
      ]
    },
    {
      category: "Curriculum",
      items: [
        { q: "숙제 양은 얼마나 되나요?", a: "학년과 과목에 따라 다르지만, 수업 내용을 온전히 자기 것으로 만들 수 있는 적정량의 과제를 부여합니다. 단순히 양만 많은 숙제는 지양합니다." },
        { q: "내신 관리도 해주시나요?", a: "네, 학교별 커리큘럼에 맞춰 내신 관리(GPA)를 철저하게 지도합니다. 특히 시험 기간에는 집중 대비 수업을 진행합니다." }
      ]
    }
  ];

  return (
    <>
      <Section background="warm" className="border-b border-[#E8E6E3]">
        <div className="text-center">
          <Typography variant="overline" color="copper" className="mb-4 block">FAQ</Typography>
          <Typography variant="h1" className="mb-6">Frequently Asked Questions</Typography>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-3xl mx-auto space-y-12">
          {faqs.map((cat, i) => (
            <div key={i}>
              <Typography variant="h4" className="mb-6 border-b border-copper pb-2 inline-block">{cat.category}</Typography>
              <Accordion type="single" collapsible className="w-full">
                {cat.items.map((item, j) => (
                  <AccordionItem key={j} value={`item-${i}-${j}`}>
                    <AccordionTrigger className="font-heading text-lg hover:text-copper">{item.q}</AccordionTrigger>
                    <AccordionContent className="font-body text-stone leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </Section>

      <Section background="charcoal" spacing="lg">
        <div className="text-center text-white">
          <Typography variant="h3" color="white" className="mb-4">Still have questions?</Typography>
          <Link to="/contact">
            <Button variant="outline">Contact Support</Button>
          </Link>
        </div>
      </Section>
    </>
  );
};
