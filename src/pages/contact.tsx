import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: MapPin,
    titleKey: 'address',
    content: '123 Main Street, Fort Lee, NJ 07024',
  },
  {
    icon: Phone,
    titleKey: 'phone',
    content: '(201) 555-0123',
  },
  {
    icon: Mail,
    titleKey: 'email',
    content: 'info@newtonschool.com',
  },
  {
    icon: Clock,
    titleKey: 'hours',
    content: 'Mon-Fri: 3PM-9PM, Sat: 10AM-6PM',
  },
];

export function Contact() {
  const { t } = useTranslation('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - replace with your actual IDs
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'demo_service';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'demo_template';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'demo_key';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        },
        publicKey
      );

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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

      {/* Contact Form & Info */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-[#1F1F2E] dark:text-white">{t('form.title')}</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle size={20} />
                  <span>{t('form.success')}</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-lg flex items-center gap-3">
                  <AlertCircle size={20} />
                  <span>{t('form.error')}</span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('form.name')} *</Label>
                    <Input
                      id="name"
                      {...register('name')}
                      className={cn(errors.name && 'border-red-500')}
                      placeholder={t('form.namePlaceholder')}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t('form.email')} *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      className={cn(errors.email && 'border-red-500')}
                      placeholder={t('form.emailPlaceholder')}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('form.phone')} *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      className={cn(errors.phone && 'border-red-500')}
                      placeholder={t('form.phonePlaceholder')}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t('form.subject')} *</Label>
                    <Input
                      id="subject"
                      {...register('subject')}
                      className={cn(errors.subject && 'border-red-500')}
                      placeholder={t('form.subjectPlaceholder')}
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-500">{errors.subject.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('form.message')} *</Label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    className={cn('min-h-[150px]', errors.message && 'border-red-500')}
                    placeholder={t('form.messagePlaceholder')}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t('form.sending')}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={18} />
                      {t('form.submit')}
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-[#1F1F2E] dark:text-white">{t('info.title')}</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <Card key={index} variant="hover" className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B9D]/20 to-[#A855F7]/20 text-[#FF6B9D] flex items-center justify-center rounded-xl shrink-0">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-[#1F1F2E] dark:text-white">{t(`info.${item.titleKey}`)}</h3>
                        <p className="text-muted-foreground">{item.content}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video bg-muted rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.5!2d-73.9707!3d40.8509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUxJzAzLjIiTiA3M8KwNTgnMTQuNSJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Newton School Location"
                />
              </div>
            </div>
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
            {t('cta.title')}
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+12015550123">
              <Button variant="accent" size="lg" className="bg-white text-[#FF6B9D] hover:bg-white/90">
                <Phone size={18} className="mr-2" />
                {t('cta.call')}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
