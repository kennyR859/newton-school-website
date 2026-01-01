import React from 'react';
import { Section } from './common/Section';
import { Typography } from './common/Typography';
import { Card } from './common/Card';
import { Star, Trophy, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './common/Button';

const stories = [
  { name: 'Sarah L.', school: 'Columbia University', desc: 'SAT 1550점으로 합격', img: 'https://images.unsplash.com/photo-1593985887762-955dccf2b71e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwc3R1ZGVudCUyMGdyYWR1YXRlJTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3NjcxMjYwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'David K.', school: 'NYU', desc: 'GPA 2.8 → 3.9 향상', img: 'https://images.unsplash.com/photo-1758685733800-bc2a64fa8017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoJTIwY2xhc3MlMjBzdHVkZW50JTIwd3JpdGluZyUyMGNoYWxrYm9hcmR8ZW58MXx8fHwxNzY3MTI2MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Michael C.', school: 'Boston College', desc: 'ACT 34점 달성', img: 'https://images.unsplash.com/photo-1724166595400-fdfcdb29685e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdsaXNoJTIwbGl0ZXJhdHVyZSUyMGJvb2slMjByZWFkaW5nJTIwc3R1ZGVudHxlbnwxfHx8fDE3NjcxMjYwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
];

const testimonials = [
  { text: "선생님들이 정말 열정적이십니다. 아이가 수학을 싫어했는데, 원리를 이해하니 재미있어하네요.", author: "James P., Parent" },
  { text: "SAT 준비하면서 막막했는데, 개별 맞춤 지도로 약점을 완벽하게 보완할 수 있었습니다.", author: "Emily R., Student" },
  { text: "시설도 좋고 면학 분위기가 잘 잡혀 있어서 믿고 보낼 수 있습니다.", author: "Suji K., Parent" }
];

export const SuccessStories = () => {
  return (
    <>
      <Section background="warm" className="border-b border-[#E8E6E3]">
         <div className="text-center">
          <Typography variant="overline" color="copper" className="mb-4 block">Success Stories</Typography>
          <Typography variant="h1" className="mb-6">Hall of Fame</Typography>
          <Typography variant="body" color="muted" className="max-w-2xl mx-auto">
             Newton School과 함께 꿈을 이룬 학생들의 이야기입니다.
          </Typography>
        </div>
      </Section>

      <Section background="white">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, i) => (
              <Card key={i} className="group p-0 border-0 shadow-none hover:shadow-xl transition-shadow duration-300">
                 <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={story.img}
                      alt={story.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                 </div>
                 <div className="p-8 bg-white border border-t-0 border-[#E8E6E3] relative">
                    <div className="absolute -top-6 right-6 w-12 h-12 bg-copper text-white flex items-center justify-center">
                       <Trophy size={20} />
                    </div>
                    <Typography variant="h4" className="mb-2">{story.school}</Typography>
                    <Typography variant="body" color="copper" className="mb-4 font-medium">{story.desc}</Typography>
                    <Typography variant="caption" color="muted">{story.name}</Typography>
                 </div>
              </Card>
            ))}
         </div>
      </Section>

      <Section background="charcoal" spacing="lg">
         <div className="text-center mb-16">
            <Typography variant="h2" color="white" className="mb-4">Testimonials</Typography>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
               <Card key={i} className="bg-white/5 border-white/10 text-white p-10 relative">
                  <Quote className="absolute top-6 left-6 text-copper/30 w-12 h-12" />
                  <Typography variant="body-large" className="italic mb-8 relative z-10 leading-relaxed">"{test.text}"</Typography>
                  <Typography variant="caption" color="copper" className="block text-right">- {test.author}</Typography>
               </Card>
            ))}
         </div>
      </Section>

      <Section background="white" spacing="xl">
        <div className="text-center">
           <Typography variant="h3" className="mb-6">Join Our Success Stories</Typography>
           <Link to="/contact">
             <Button variant="primary">Apply Now</Button>
           </Link>
        </div>
      </Section>
    </>
  );
};
