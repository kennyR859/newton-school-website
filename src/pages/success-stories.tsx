import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Medal, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const students = [
  {
    name: 'Sarah L.',
    university: 'Columbia University',
    achievement: 'SAT 1550',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    name: 'David K.',
    university: 'NYU',
    achievement: 'GPA 2.8 → 3.9',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    name: 'Michael C.',
    university: 'Boston College',
    achievement: 'ACT 34',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
];

const testimonials = [
  {
    text: '아이가 수학에 자신감을 갖게 되었어요. Newton School 선생님들의 열정적인 지도 덕분입니다.',
    author: 'Jane D. 학부모',
  },
  {
    text: '단순히 성적만 오른 것이 아니라, 학습 방법 자체가 달라졌어요. 스스로 공부하는 습관이 생겼습니다.',
    author: 'Michael R. 학부모',
  },
  {
    text: '아들이 꿈꾸던 대학에 합격했어요! Newton School에 보낸 것이 최고의 결정이었습니다.',
    author: 'Sarah L. 학부모',
  },
];

export function SuccessStories() {
  const { t } = useTranslation('common');

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#FF6B9D]/20 via-[#A855F7]/10 to-transparent dark:from-[#FF6B9D]/10 dark:via-[#A855F7]/5">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#FF6B9D] text-xs font-bold tracking-[0.15em] uppercase mb-4 block">
            Success Stories
          </span>
          <h1
            className="text-4xl md:text-5xl mb-6"
            style={{
              fontFamily: '"Poppins", "Noto Sans KR", sans-serif',
              fontWeight: 700,
              color: 'hsl(var(--foreground))',
              WebkitTextFillColor: 'hsl(var(--foreground))',
              background: 'none',
            }}
          >
            Hall of Fame
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our students who achieved their dreams with Newton School.
          </p>
        </div>
      </section>

      {/* Students */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {students.map((student, index) => (
              <Card
                key={index}
                variant="hover"
                className="text-center p-8 border-0 shadow-none hover:shadow-xl"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-[#FF6B9D] to-[#A855F7] rounded-full flex items-center justify-center">
                    <Medal size={20} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#1F1F2E] dark:text-white">{student.name}</h3>
                <p className="text-[#FF6B9D] font-medium mb-2">{student.university}</p>
                <p className="text-muted-foreground">{student.achievement}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#2D1F3D] to-[#1F1F1F]">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl text-center mb-16"
            style={{
              fontFamily: '"Poppins", "Noto Sans KR", sans-serif',
              fontWeight: 700,
              color: '#ffffff',
              WebkitTextFillColor: '#ffffff',
              background: 'none',
            }}
          >
            What Parents Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <Quote size={48} className="text-[#FF6B9D] opacity-30 mb-4" />
                <p className="text-white/90 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <span className="text-white/60 text-sm">- {testimonial.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-40 bg-gradient-to-r from-[#FF6B9D] to-[#A855F7]">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{
              fontFamily: '"Poppins", "Noto Sans KR", sans-serif',
              fontWeight: 700,
              color: '#ffffff',
              WebkitTextFillColor: '#ffffff',
              background: 'none',
            }}
          >
            Join Our Success Stories
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Your success story starts here. Apply now and be our next star.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg" className="bg-white text-[#FF6B9D] hover:bg-white/90">
              {t('cta.applyNow')}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
