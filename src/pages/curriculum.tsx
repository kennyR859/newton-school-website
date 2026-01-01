import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, FlaskConical, BookText, GraduationCap, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const tabs = [
  { key: 'math', icon: Calculator },
  { key: 'science', icon: FlaskConical },
  { key: 'english', icon: BookText },
  { key: 'testPrep', icon: GraduationCap },
];

export function Curriculum() {
  const { t } = useTranslation('curriculum');
  const [activeTab, setActiveTab] = useState('math');

  const tabContent = t(activeTab, { returnObjects: true }) as {
    title: string;
    description: string;
    features: string[];
    levels: Record<string, { title: string; courses: string[] }>;
  };

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

      {/* Tabs */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  'flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all',
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] text-white'
                    : 'bg-muted text-muted-foreground hover:text-foreground'
                )}
              >
                <tab.icon size={18} />
                {t(`tabs.${tab.key}`)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left: Info */}
                <div>
                  <h2
                    className="text-3xl mb-6"
                    style={{
                      fontWeight: 700,
                      color: 'hsl(var(--foreground))',
                      WebkitTextFillColor: 'hsl(var(--foreground))',
                      background: 'none',
                    }}
                  >
                    {tabContent.title}
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {tabContent.description}
                  </p>
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Key Features</h3>
                  <ul className="space-y-3">
                    {tabContent.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#FF6B9D]/20 flex items-center justify-center">
                          <Check size={14} className="text-[#FF6B9D]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Levels */}
                <div className="space-y-6">
                  {Object.entries(tabContent.levels).map(([key, level]) => (
                    <Card key={key} variant="hover" className="p-6">
                      <h3 className="text-lg font-semibold mb-4 text-[#FF6B9D]">
                        {level.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {level.courses.map((course, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-muted rounded-full text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
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
            {t('cta.title')}
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg" className="bg-white text-[#FF6B9D] hover:bg-white/90">
              Book Level Test
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
