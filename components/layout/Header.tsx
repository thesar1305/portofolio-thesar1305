'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Beri latar pada header setelah halaman di-scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Saat menu mobile terbuka: kunci scroll halaman, Escape menutup menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b border-neutral-800 transition-colors duration-300',
          isOpen
            ? 'bg-black'
            : isScrolled
              ? 'bg-black/80 backdrop-blur-md'
              : 'bg-transparent'
        )}
      >
        <div className='mx-auto flex h-20 max-w-360 items-center justify-between px-4 md:px-10 xl:px-32'>
          <Link
            href='#home'
            onClick={() => setIsOpen(false)}
            className='flex items-center gap-3 md:gap-4'
          >
            <span aria-hidden='true' className='h-px w-6 bg-white md:w-10' />
            <span className='text-xl font-bold text-primary-200'>
              {SITE.name}.
            </span>
          </Link>

          <nav
            aria-label='Main'
            className='hidden items-center gap-8 lg:flex xl:gap-12'
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-base leading-7.5 text-white transition-colors hover:text-primary-200'
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type='button'
            className='text-white lg:hidden'
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls='mobile-menu'
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className='size-6' /> : <Menu className='size-6' />}
          </button>
        </div>
      </header>

      {isOpen && (
        <nav
          id='mobile-menu'
          aria-label='Mobile'
          className='fixed inset-x-0 top-20 bottom-0 z-40 bg-black p-6 lg:hidden'
        >
          <ul className='flex flex-col gap-8'>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='block text-base leading-7.5 text-white transition-colors hover:text-primary-200'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
