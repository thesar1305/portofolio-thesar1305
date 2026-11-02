import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Starburst } from '@/components/ui/starburst';
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
        4
      </p>
      <div
        aria-hidden='true'
        className='flex gap-1.5 text-primary-200'
      >
        {Array.from({ length: 5 }, (_, i) => (
          <Starburst key={i} />
        ))}
      </div>
      <p className='text-xl font-semibold text-neutral-25'>
        Live Projects
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

      <div className='relative mt-12 xl:absolute xl:inset-y-0 xl:right-0 xl:mt-0 xl:w-[658px]'>
        <div className='relative h-[440px] overflow-hidden xl:h-full'>
          <div className='absolute inset-0 origin-bottom scale-110 mask-[linear-gradient(to_bottom,black_72%,transparent_100%)] xl:scale-100'>
            <Image
              src='/images/hero-portrait.png'
              alt={`Portrait of ${SITE.name}`}
              fill
              priority
              sizes='(min-width: 1280px) 640px, 90vw'
              className='object-contain object-bottom grayscale'
            />
          </div>
          <div
            aria-hidden='true'
            className='absolute inset-y-0 right-0 w-2/5 bg-primary-200/40 xl:w-78.5'
          />
        </div>
        <RatingCard className='mx-4 mt-6 xl:absolute xl:top-153 xl:left-46.5 xl:mx-0 xl:mt-0 xl:w-79' />
      </div>
    </section>
  );
}
