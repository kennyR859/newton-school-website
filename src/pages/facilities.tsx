import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Shield, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    caption: 'Main Classroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    caption: 'Student Lounge',
  },
  {
    src: 'https://images.unsplash.com/photo-1568667256549-094345857637?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    caption: 'Library',
  },
  {
    src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    caption: 'Science Lab',
  },
];

const features = [
  { icon: Shield, title: 'Safety First', description: '24-hour CCTV monitoring and secure entry' },
  { icon: Users, title: 'Small Classes', description: 'Maximum 8 students per class for personalized attention' },
  { icon: BookOpen, title: 'Study Lounge', description: 'Dedicated self-study space with resources' },
];

export function Facilities() {
  const { t } = useTranslation('common');

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#FF6B9D]/20 via-[#A855F7]/10 to-transparent dark:from-[#FF6B9D]/10 dark:via-[#A855F7]/5">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#FF6B9D] text-xs font-bold tracking-[0.15em] uppercase mb-4 block">
            Our Space
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
            Modern Learning Environment
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A thoughtfully designed space that inspires learning and creativity.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
            <Masonry gutter="24px">
              {images.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">{image.caption}</span>
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32 bg-[#FDF2F8] dark:bg-[#1C1C2E]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} variant="hover" className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#FF6B9D]/20 to-[#A855F7]/20 text-[#FF6B9D] flex items-center justify-center rounded-2xl">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#1F1F2E] dark:text-white">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
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
            Visit Us
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Schedule a tour to see our facilities in person.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg" className="bg-white text-[#FF6B9D] hover:bg-white/90">
              {t('cta.scheduleTour')}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
