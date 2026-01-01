import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqCategories = [
  {
    key: 'enrollment',
    faqs: [
      { key: 'howToEnroll' },
      { key: 'ageRequirement' },
      { key: 'trialClass' },
    ],
  },
  {
    key: 'classes',
    faqs: [
      { key: 'classSize' },
      { key: 'classSchedule' },
      { key: 'makeupClass' },
    ],
  },
  {
    key: 'curriculum',
    faqs: [
      { key: 'subjects' },
      { key: 'levelTest' },
      { key: 'homework' },
    ],
  },
  {
    key: 'payment',
    faqs: [
      { key: 'tuition' },
      { key: 'paymentMethods' },
      { key: 'refund' },
    ],
  },
];

export function FAQ() {
  const { t } = useTranslation('faq');

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#FF6B9D]/20 via-[#A855F7]/10 to-transparent dark:from-[#FF6B9D]/10 dark:via-[#A855F7]/5">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#FF6B9D] text-xs font-bold tracking-[0.15em] uppercase mb-4 block">
            FAQ
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

      {/* FAQ Accordion */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.key} className="mb-12 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B9D]/20 to-[#A855F7]/20 text-[#FF6B9D] flex items-center justify-center rounded-xl">
                    <HelpCircle size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1F1F2E] dark:text-white">
                    {t(`categories.${category.key}`)}
                  </h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faq.key}
                      value={`${category.key}-${faq.key}`}
                      className="border border-border rounded-xl mb-3 px-6 data-[state=open]:bg-muted/50"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                        {t(`${category.key}.${faq.key}.question`)}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {t(`${category.key}.${faq.key}.answer`)}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 md:py-32 bg-[#FDF2F8] dark:bg-[#1C1C2E]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-[#FF6B9D] to-[#A855F7] text-white flex items-center justify-center rounded-2xl">
              <MessageCircle size={40} />
            </div>
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
              {t('stillHaveQuestions.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              {t('stillHaveQuestions.subtitle')}
            </p>
            <Link to="/contact">
              <Button size="lg">{t('stillHaveQuestions.button')}</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
