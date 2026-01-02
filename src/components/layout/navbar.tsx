import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/common/theme-toggle';
import { LanguageToggle } from '@/components/common/language-toggle';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/curriculum', key: 'curriculum' },
  { href: '/facilities', key: 'facilities' },
  { href: '/success-stories', key: 'successStories' },
  { href: '/contact', key: 'contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation('common');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span
            className={cn(
              'text-2xl font-bold font-heading transition-colors',
              isScrolled ? 'text-foreground' : 'text-white'
            )}
          >
            Newton
          </span>
          <span className="text-gradient text-2xl font-bold font-heading">
            School
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              to={link.href}
              className={cn(
                'text-base font-medium transition-colors hover:text-[#FF6B9D]',
                isActive(link.href)
                  ? 'text-[#FF6B9D]'
                  : isScrolled
                  ? 'text-foreground'
                  : 'text-white'
              )}
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <Link to="/contact">
            <Button variant="default" size="sm">
              {t('nav.inquireNow')}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={isScrolled ? 'text-foreground' : 'text-white'}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <span className="text-gradient font-bold">Newton School</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.key}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-lg font-medium py-2 transition-colors hover:text-[#FF6B9D]',
                      isActive(link.href)
                        ? 'text-[#FF6B9D]'
                        : 'text-foreground'
                    )}
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                ))}
                <Link
                  to="/faq"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-medium py-2 transition-colors hover:text-[#FF6B9D]',
                    isActive('/faq') ? 'text-[#FF6B9D]' : 'text-foreground'
                  )}
                >
                  {t('nav.faq')}
                </Link>
                <div className="pt-4 mt-4 border-t border-border">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button variant="default" className="w-full">
                      {t('nav.inquireNow')}
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
