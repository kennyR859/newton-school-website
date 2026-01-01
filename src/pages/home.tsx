import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Brain, Users, Trophy, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';
import { FloatingShapes } from '@/components/common/FloatingShapes';
import { cn } from '@/lib/utils';

export function Home() {
  const { t } = useTranslation('home');
  const { t: tc } = useTranslation('common');

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-options/hero-abstract-3.jpg"
            alt="Abstract Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F1F2E]/80 via-[#A855F7]/60 to-[#06B6D4]/50" />
          {/* Interactive Floating Shapes */}
          <FloatingShapes count={20} className="z-[1]" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-white/80 text-sm font-medium tracking-[0.15em] uppercase mb-6 bg-white/20 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/10">
              {t('hero.overline')}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-tight mb-8 drop-shadow-lg">
              {t('hero.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md whitespace-normal break-normal">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/curriculum">
                <Button variant="accent" size="lg" className="shadow-lg">
                  {tc('cta.viewProgram')}
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-white border-white/50 hover:bg-white/10">
                  {tc('cta.contactUs')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {[
              { icon: Brain, key: 'understanding' },
              { icon: Users, key: 'care' },
              { icon: Trophy, key: 'results' },
            ].map((item) => (
              <motion.div
                key={item.key}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
                }}
              >
                <Card
                  variant="hover"
                  tiltEnabled
                  tiltMaxAngle={8}
                  className="text-center group h-full"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#FF6B9D]/20 to-[#A855F7]/20 text-[#FF6B9D] flex items-center justify-center rounded-2xl group-hover:from-[#FF6B9D] group-hover:to-[#A855F7] group-hover:text-white transition-all duration-300">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {t(`values.${item.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(`values.${item.key}.description`)}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-32 bg-[#FDF2F8] dark:bg-[#1C1C2E]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="aspect-[3/4] max-h-[600px] w-full overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMG1hbGUlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3MTI2MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#FF6B9D] to-[#A855F7] rounded-2xl p-6 flex flex-col justify-center text-white hidden md:flex"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                <span className="text-5xl font-bold mb-2">15+</span>
                <span className="text-sm uppercase tracking-wider opacity-80">
                  Years of Experience
                </span>
              </motion.div>
            </motion.div>
            <motion.div
              className="lg:w-1/2 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
            >
              <div>
                <span className="text-[#FF6B9D] text-xs font-bold tracking-[0.15em] uppercase mb-4 block">
                  {t('about.overline')}
                </span>
                <h2
                  className="text-3xl md:text-4xl mb-6"
                  style={{
                    fontFamily: '"Poppins", "Noto Sans KR", sans-serif',
                    fontWeight: 700,
                    color: 'var(--about-title-color)',
                    WebkitTextFillColor: 'var(--about-title-color)',
                    background: 'none',
                  }}
                >
                  {t('about.title')}
                </h2>
                <blockquote className="text-lg italic text-[#4B5563] dark:text-gray-300 mb-6 border-l-2 border-[#FF6B9D] pl-6">
                  {t('about.quote')}
                </blockquote>
                <p className="text-[#4B5563] dark:text-gray-300 mb-6 leading-relaxed">
                  {t('about.description')}
                </p>
                <Link to="/about">
                  <Button variant="secondary">{tc('cta.learnMore')}</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#FF6B9D] to-[#A855F7]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 500, suffix: '+', key: 'students' },
              { value: 95, suffix: '%', key: 'satisfaction' },
              { value: 50, suffix: '+', key: 'universities' },
              { value: '1:1', isStatic: true, key: 'attention' },
            ].map((stat) => (
              <div key={stat.key} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.isStatic ? (
                    stat.value
                  ) : (
                    <AnimatedCounter
                      value={stat.value as number}
                      suffix={stat.suffix}
                      duration={2}
                    />
                  )}
                </div>
                <div className="text-sm uppercase tracking-wider opacity-80">
                  {t(`stats.${stat.key}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Preview */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#FF6B9D] text-xs font-bold tracking-[0.15em] uppercase mb-4 block">
              {t('curriculum.overline')}
            </span>
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{
                fontFamily: '"Poppins", "Noto Sans KR", sans-serif',
                fontWeight: 700,
                color: 'hsl(var(--foreground))',
                WebkitTextFillColor: 'hsl(var(--foreground))',
                background: 'none',
              }}
            >
              {t('curriculum.title')}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('curriculum.subtitle')}
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              {
                key: 'math',
                img: 'https://images.unsplash.com/photo-1758685733800-bc2a64fa8017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoJTIwY2xhc3MlMjBzdHVkZW50JTIwd3JpdGluZyUyMGNoYWxrYm9hcmR8ZW58MXx8fHwxNzY3MTI2MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
              },
              {
                key: 'science',
                img: 'https://images.unsplash.com/photo-1575467678971-7cd5c2937dc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFiJTIwZXhwZXJpbWVudCUyMHN0dWRlbnRzJTIwaGlnaCUyMHNjaG9vbHxlbnwxfHx8fDE3NjcxMjYwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
              },
              {
                key: 'english',
                img: 'https://images.unsplash.com/photo-1724166595400-fdfcdb29685e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdsaXNoJTIwbGl0ZXJhdHVyZSUyMGJvb2slMjByZWFkaW5nJTIwc3R1ZGVudHxlbnwxfHx8fDE3NjcxMjYwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
              },
            ].map((item) => (
              <motion.div
                key={item.key}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } },
                }}
              >
                <Link to="/curriculum" className="group block">
                  <div className="overflow-hidden aspect-[4/3] mb-6 rounded-2xl">
                    <img
                      src={item.img}
                      alt={t(`curriculum.${item.key}.title`)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#FF6B9D] transition-colors">
                    {t(`curriculum.${item.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t(`curriculum.${item.key}.description`)}
                  </p>
                  <div className="flex items-center text-[#FF6B9D] font-medium uppercase tracking-wider text-xs group-hover:underline">
                    {tc('cta.viewProgram')} <ArrowRight size={14} className="ml-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-[#FDF2F8] dark:bg-[#1F1F2E]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#FF6B9D] text-xs font-bold tracking-[0.15em] uppercase mb-4 block">
              {t('testimonials.overline')}
            </span>
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{
                fontFamily: '"Poppins", "Noto Sans KR", sans-serif',
                fontWeight: 700,
                color: 'var(--about-title-color)',
                WebkitTextFillColor: 'var(--about-title-color)',
                background: 'none',
              }}
            >
              {t('testimonials.title')}
            </h2>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18 } },
            }}
          >
            {(t('testimonials.reviews', { returnObjects: true }) as Array<{ text: string; author: string }>).map(
              (review, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.97, y: 15 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
                  }}
                >
                  <Card variant="solid" className="text-center bg-white dark:bg-[#1F1F2E] shadow-lg h-full">
                    <div className="mb-4 flex justify-center text-[#FF6B9D]">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-[#374151] dark:text-[#E5E7EB] mb-6 italic leading-relaxed">
                      "{review.text}"
                    </p>
                    <span className="text-sm font-semibold text-[#4B5563] dark:text-[#D1D5DB]">
                      - {review.author}
                    </span>
                  </Card>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-40 bg-gradient-to-r from-[#FF6B9D] to-[#A855F7]">
        <motion.div
          className="container mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
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
            {t('cta.title')}
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg" className="bg-white text-[#FF6B9D] hover:bg-white/90">
              {tc('cta.bookConsultation')}
            </Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
