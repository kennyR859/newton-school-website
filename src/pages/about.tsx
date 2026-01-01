import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Check, GraduationCap, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function About() {
  const { t } = useTranslation('about');

  const milestones = t('timeline.milestones', { returnObjects: true }) as Array<{
    year: string;
    title: string;
    description: string;
  }>;

  const values = t('principal.values', { returnObjects: true }) as string[];
  const bio = t('principal.bio', { returnObjects: true }) as string[];

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#FF6B9D]/20 via-[#A855F7]/10 to-transparent dark:from-[#FF6B9D]/10 dark:via-[#A855F7]/5">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#FF6B9D] text-xs font-bold tracking-[0.15em] uppercase mb-4 block">
            {t('header.overline')}
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
            {t('header.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('header.subtitle')}
          </p>
        </div>
      </section>

      {/* Principal Profile */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="aspect-[3/4] overflow-hidden rounded-3xl mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMG1hbGUlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3MTI2MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Kenny Kim"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">{t('principal.name')}</h2>
                <p className="text-[#FF6B9D] font-medium mb-4">{t('principal.role')}</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={16} className="text-[#FF6B9D]" />
                    {t('principal.education')}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-[#FF6B9D]" />
                    {t('principal.experience')}
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-[#FF6B9D]" />
                    {t('principal.specialty')}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-8">
              <blockquote className="text-2xl font-medium italic border-l-4 border-[#FF6B9D] pl-6">
                {t('principal.quote')}
              </blockquote>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FF6B9D]/20 flex items-center justify-center">
                      <Check size={14} className="text-[#FF6B9D]" />
                    </div>
                    <span className="text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-[#FDF2F8] dark:bg-[#1C1C2E]">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl text-center mb-16"
            style={{
              fontFamily: '"Poppins", "Noto Sans KR", sans-serif',
              fontWeight: 700,
              color: 'var(--about-title-color)',
              WebkitTextFillColor: 'var(--about-title-color)',
              background: 'none',
            }}
          >
            {t('timeline.title')}
          </h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0 border-l-2 border-[#FF6B9D]/30">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-[#FF6B9D]" />
                <span className="text-[#FF6B9D] font-bold text-lg">{milestone.year}</span>
                <h3 className="text-xl font-semibold mt-2 mb-2 text-[#1F1F2E] dark:text-white">{milestone.title}</h3>
                <p className="text-[#4B5563] dark:text-gray-300">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-40 bg-gradient-to-r from-[#FF6B9D] to-[#A855F7]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg" className="bg-white text-[#FF6B9D] hover:bg-white/90">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
