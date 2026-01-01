import { useTranslation } from 'react-i18next';
import { Shield, FileText, UserCheck, CreditCard, Calendar, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const policies = [
  {
    key: 'privacy',
    icon: Shield,
  },
  {
    key: 'terms',
    icon: FileText,
  },
  {
    key: 'conduct',
    icon: UserCheck,
  },
  {
    key: 'payment',
    icon: CreditCard,
  },
  {
    key: 'attendance',
    icon: Calendar,
  },
  {
    key: 'safety',
    icon: AlertTriangle,
  },
];

export function Policy() {
  const { t } = useTranslation('policy');

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#FF6B9D]/20 via-[#A855F7]/10 to-transparent dark:from-[#FF6B9D]/10 dark:via-[#A855F7]/5">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#FF6B9D] text-xs font-bold tracking-[0.15em] uppercase mb-4 block">
            Policies
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

      {/* Policy Content */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {policies.map((policy) => {
              const content = t(`${policy.key}.content`, { returnObjects: true }) as string[];

              return (
                <Card key={policy.key} className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B9D]/20 to-[#A855F7]/20 text-[#FF6B9D] flex items-center justify-center rounded-2xl shrink-0">
                      <policy.icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4 text-[#1F1F2E] dark:text-white">{t(`${policy.key}.title`)}</h2>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        {Array.isArray(content) ? (
                          content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))
                        ) : (
                          <p>{content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            {t('lastUpdated')}: January 1, 2025
          </p>
        </div>
      </section>
    </>
  );
}
