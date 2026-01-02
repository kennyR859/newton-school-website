import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

// US Flag SVG Component (Circular)
const USFlag = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <clipPath id="usCircle">
        <circle cx="50" cy="50" r="50"/>
      </clipPath>
    </defs>
    <g clipPath="url(#usCircle)">
      {/* Red background */}
      <rect fill="#B22234" width="100" height="100"/>
      {/* White stripes */}
      <rect fill="#fff" y="7.7" width="100" height="7.7"/>
      <rect fill="#fff" y="23.1" width="100" height="7.7"/>
      <rect fill="#fff" y="38.5" width="100" height="7.7"/>
      <rect fill="#fff" y="53.8" width="100" height="7.7"/>
      <rect fill="#fff" y="69.2" width="100" height="7.7"/>
      <rect fill="#fff" y="84.6" width="100" height="7.7"/>
      {/* Blue canton */}
      <rect fill="#3C3B6E" width="40" height="53.8"/>
    </g>
  </svg>
);

// Korean Flag Component - Canva에서 만든 원형 태극기 이미지 사용
const KRFlag = () => (
  <img
    src="/images/kr-flag.png"
    alt="Korean Flag"
    className="min-w-[130%] min-h-[130%] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  />
);

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const isKorean = i18n.language === 'ko';

  const toggleLanguage = () => {
    i18n.changeLanguage(isKorean ? 'en' : 'ko');
  };

  return (
    <div className="relative group">
      <button
        onClick={toggleLanguage}
        className={cn(
          'relative w-10 h-10 rounded-full transition-all duration-300',
          'border-2 border-white/40 hover:border-white/70 hover:scale-110',
          'shadow-lg hover:shadow-xl overflow-hidden'
        )}
        aria-label={isKorean ? 'Switch to English' : '한국어로 전환'}
      >
        {/* Show KRFlag in English mode (click to go Korean), USFlag in Korean mode (click to go English) */}
        <span
          className={cn(
            'absolute inset-0 transition-all duration-300',
            isKorean ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          )}
        >
          <KRFlag />
        </span>
        <span
          className={cn(
            'absolute inset-0 transition-all duration-300',
            isKorean ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          )}
        >
          <USFlag />
        </span>
      </button>
      {/* Tooltip */}
      <span
        className={cn(
          'absolute top-full left-1/2 -translate-x-1/2 mt-2',
          'px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap',
          'bg-gray-900/90 text-white backdrop-blur-sm',
          'opacity-0 scale-95 pointer-events-none',
          'group-hover:opacity-100 group-hover:scale-100',
          'transition-all duration-200 ease-out',
          'shadow-lg'
        )}
      >
        {isKorean ? 'Switch to English' : '한국어로 전환'}
        {/* Tooltip arrow */}
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45" />
      </span>
    </div>
  );
}
