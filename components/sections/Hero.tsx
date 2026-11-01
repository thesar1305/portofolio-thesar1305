import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE } from '@/lib/site';
import { cn } from '@/lib/utils';

function RatingCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-3xl border border-neutral-800 bg-black p-5',
        className
      )}
    >
      <p className='text-5xl leading-14 font-bold tracking-[-0.02em] text-neutral-25'>
        5.0
      </p>
      <div
        role='img'
        aria-label='Rated 5 out of 5 stars'
        className='flex gap-1.5 text-amber-400'
      >
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} aria-hidden='true' className='size-6 fill-current' />
        ))}
      </div>
      <p className='text-xl font-semibold text-neutral-25'>
        Many Client Trust with me
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section id='home' className='relative overflow-hidden xl:min-h-[874px]'>
      <div className='mx-auto max-w-360 px-4 pt-30 md:px-10 xl:px-32 xl:pt-55'>
        <div className='relative z-10 flex max-w-[807px] flex-col gap-15'>
          <div className='flex flex-col gap-6'>
            <div className='flex items-center gap-4'>
              <span
                aria-hidden='true'
                className='hidden h-px w-28 bg-neutral-25 md:block'
              />
              <p className='text-sm font-medium text-neutral-25 md:text-xl'>
                Hi, I am {SITE.name} {SITE.role}
              </p>
            </div>

            <h1 className='text-[40px] leading-none font-extrabold text-white uppercase md:text-6xl xl:text-[80px]'>
              Building fast &{' '}
              <span className='text-primary-200'>interactive</span> web
              experiences.
            </h1>

            <p className='max-w-[597px] text-base font-medium text-neutral-400 md:text-xl'>
              Bridging creativity and functionality to deliver stunning,
              user-friendly web applications.
            </p>
          </div>

          <Button
            asChild
            className='h-14 w-full max-w-75 rounded-full text-base font-bold text-neutral-950 shadow-green'
          >
            <Link href='#contact'>HIRE ME</Link>
          </Button>
        </div>
      </div>

      <div className='relative mt-12 h-[480px] w-full xl:absolute xl:inset-y-0 xl:right-0 xl:mt-0 xl:h-auto xl:w-[658px]'>
        <Image
          src='/images/hero-portrait.png'
          alt={`Portrait of ${SITE.name}`}
          fill
          priority
          sizes='(min-width: 1280px) 658px, 100vw'
          className='object-cover object-top grayscale'
        />
        <div
          aria-hidden='true'
          className='absolute inset-y-0 right-0 w-2/5 bg-primary-200/40 xl:w-78.5'
        />
        <RatingCard className='absolute inset-x-4 bottom-4 xl:inset-x-auto xl:top-153 xl:bottom-auto xl:left-46.5 xl:w-79' />
      </div>
    </section>
  );
}
