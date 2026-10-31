import { SITE } from '@/lib/site';

export function Footer() {
  return (
    <footer className='border-t border-neutral-800'>
      <div className='mx-auto flex h-20 max-w-360 items-center justify-center px-4'>
        <p className='text-center text-sm text-neutral-400 md:text-base'>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
