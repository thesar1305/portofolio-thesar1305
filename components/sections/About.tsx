import Image from 'next/image';
import { cn } from '@/lib/utils';

// Posisi diambil dari Figma: mobile = frame 393px, desktop = frame 1440px.
const ABOUT_IMAGES = [
  {
    src: '/images/about-1.png',
    alt: 'Preview of a modern architecture website project',
    className:
      'left-10 top-0 h-[127px] w-[170px] xl:left-[252px] xl:top-[38px] xl:h-[179px] xl:w-[238px]',
    sizes: '(min-width: 1280px) 238px, 170px',
  },
  {
    src: '/images/about-2.png',
    alt: 'Preview of a digital agency website project',
    className:
      'left-56 top-[45px] h-[99px] w-[134px] xl:left-[1011px] xl:top-[75px] xl:h-[188px] xl:w-[251px]',
    sizes: '(min-width: 1280px) 251px, 134px',
  },
  {
    src: '/images/about-3.png',
    alt: 'Preview of a creative brand landing page project',
    className:
      'left-36 top-[164px] h-[100px] w-[132px] xl:left-[876px] xl:top-[305px] xl:h-[87px] xl:w-[117px]',
    sizes: '(min-width: 1280px) 117px, 132px',
  },
] as const;

function Collage({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative h-72 w-[393px] shrink-0 xl:pointer-events-none xl:absolute xl:inset-0 xl:h-auto xl:w-auto',
        className
      )}
    >
      {ABOUT_IMAGES.map((image) => (
        <div key={image.src} className={cn('absolute', image.className)}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={image.sizes}
            className='object-cover'
          />
        </div>
      ))}
    </div>
  );
}

export function About() {
  return (
    <section id='about' className='relative overflow-hidden'>
      <div className='relative mx-auto flex max-w-360 flex-col items-center gap-5 px-4 py-10 text-center md:px-10 xl:gap-8 xl:px-32 xl:py-30'>
        {/* Kotak hijau gelap dekoratif (pojok kiri bawah) */}
        <div
          aria-hidden='true'
          className='absolute bottom-2.5 left-0 grid grid-cols-2 xl:bottom-0'
        >
          <span className='size-8.5 bg-primary-400 xl:size-12' />
          <span className='size-8.5 xl:size-12' />
          <span className='size-8.5 bg-primary-400 xl:size-12' />
          <span className='size-8.5 bg-primary-400 xl:size-12' />
          <span className='size-8.5 bg-primary-400 xl:size-12' />
          <span className='size-8.5 xl:size-12' />
        </div>

        <div className='relative z-10 flex flex-col items-center gap-5 xl:gap-16'>
          <div className='flex flex-col items-center'>
            <p className='text-lg font-medium text-primary-200 uppercase'>
              About me
            </p>
            <h2 className='text-[32px] leading-12 font-extrabold text-neutral-25 uppercase md:text-5xl md:leading-15'>
              Crafting seamless <br className='hidden md:block' />
              <span className='text-primary-200'>
                <span className='whitespace-nowrap'>high-performance</span> web
              </span>{' '}
              <br className='hidden md:block' />
              experiences
            </h2>
          </div>

          <p className='max-w-[996px] text-base font-medium text-neutral-400 md:text-xl'>
            I&apos;m a frontend developer with a background as an HR Manager at a
            startup, where I work with operations, data, and administrative
            systems every day. That experience shapes how I build: I turn
            designs into responsive, high-performance websites and business
            tools that fit the way real teams work.
          </p>
        </div>

        <Collage />
      </div>
    </section>
  );
}
