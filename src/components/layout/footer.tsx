import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#2D1F3D] to-[#1F1F1F] text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF6B9D]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A855F7]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold font-heading">
                Newton <span className="text-gradient">School</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              원리를 이해하면 모든 것이 쉬워집니다.
              <br />
              Understanding principles makes everything easy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-[#FF6B9D] transition-colors text-sm"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/curriculum"
                  className="text-white/70 hover:text-[#FF6B9D] transition-colors text-sm"
                >
                  {t('nav.curriculum')}
                </Link>
              </li>
              <li>
                <Link
                  to="/success-stories"
                  className="text-white/70 hover:text-[#FF6B9D] transition-colors text-sm"
                >
                  {t('nav.successStories')}
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-white/70 hover:text-[#FF6B9D] transition-colors text-sm"
                >
                  {t('nav.faq')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.contactUs')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={18} className="text-[#FF6B9D] shrink-0 mt-0.5" />
                <span>2175 Lemoine Ave #304, Fort Lee, NJ 07024</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone size={18} className="text-[#FF6B9D] shrink-0" />
                <a href="tel:+12012527252" className="hover:text-[#FF6B9D] transition-colors">
                  (201) 252-7252
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={18} className="text-[#FF6B9D] shrink-0" />
                <a
                  href="mailto:Kenny@newtonschool.net"
                  className="hover:text-[#FF6B9D] transition-colors"
                >
                  Kenny@newtonschool.net
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.hours')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Clock size={18} className="text-[#FF6B9D] shrink-0" />
                <span>{t('footer.weekdays')}</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm pl-7">
                <span>{t('footer.saturday')}</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm pl-7">
                <span>{t('footer.sunday')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} Newton School. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/policy"
              className="text-white/50 hover:text-[#FF6B9D] transition-colors text-sm"
            >
              {t('footer.privacyPolicy')}
            </Link>
            <Link
              to="/policy"
              className="text-white/50 hover:text-[#FF6B9D] transition-colors text-sm"
            >
              {t('footer.termsOfService')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
