import Image from 'next/image';
import Link from 'next/link';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const WORKING_WITH_ME = [
  'React Expert',
  'Precise Website Implementation',
  'TypeScript Proficiency',
  'Clean, Maintainable Code',
  'Responsive Website Development',
  'UI Design Proficiency (Figma)',
] as const;

const ANOTHER_TALENT = [
  'Basic React Knowledge',
  'Inconsistent Design Translation',
  'Little to No TypeScript Knowledge',
  'Unstructured Code',
  'Inconsistent Responsiveness',
  'No Design Skills',
] as const;

// Bintang 12 sudut (starburst) sebagai SVG inline, jadi tidak perlu file aset.
const STARBURST_POINTS = Array.from({ length: 24 }, (_, i) => {
  const radius = i % 2 === 0 ? 12 : 7.5;
  const angle = (Math.PI / 12) * i - Math.PI / 2;
  return `${(12 + radius * Math.cos(angle)).toFixed(2)},${(12 + radius * Math.sin(angle)).toFixed(2)}`;
}).join(' ');

function Starburst({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden='true'
      viewBox='0 0 24 24'
      fill='currentColor'
      className={cn('size-6 shrink-0', className)}
    >
      <polygon points={STARBURST_POINTS} />
    </svg>
  );
}

function ComparisonColumn({
  title,
  items,
  highlight,
}: {
  title: string;
  items: readonly string[];
  highlight?: boolean;
}) {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='text-center text-2xl leading-8 font-extrabold text-neutral-25 uppercase md:text-[28px] md:leading-9'>
        {title}
      </h3>

      <div className='relative mx-auto flex size-20 items-center justify-center overflow-hidden rounded-full bg-card'>
        {highlight ? (
          <Image
            src='/images/hero-portrait.png'
            alt='Thesar Ramadhani'
            fill
            sizes='80px'
            className='object-cover object-top'
          />
        ) : (
          <User aria-hidden='true' className='size-8 fill-white text-white' />
        )}
      </div>

      <ul>
        {items.map((item) => (
          <li
            key={item}
            className='flex items-center gap-3 border-b border-neutral-800 py-6 last:border-b-0 md:py-9'
          >
            <Starburst
              className={highlight ? 'text-primary-200' : 'text-primary-300'}
            />
            <span
              className={cn(
                highlight
                  ? 'text-base font-semibold text-neutral-25 md:text-lg'
                  : 'text-base text-neutral-400 md:text-xl'
              )}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  return (
    <section id='experience'>
      <div className='mx-auto flex max-w-360 flex-col gap-10 px-4 py-10 md:px-10 xl:gap-12 xl:px-30 xl:py-20'>
        <div className='flex flex-col items-center text-center'>
          <p className='text-lg font-medium text-primary-200 uppercase'>
            Working
          </p>
          <h2 className='text-3xl leading-9.5 font-extrabold text-neutral-25 uppercase md:text-5xl md:leading-15'>
            Why choose me?
          </h2>
        </div>

        <div className='grid gap-10 lg:grid-cols-2 lg:gap-20'>
          <ComparisonColumn
            title='Working with me'
            items={WORKING_WITH_ME}
            highlight
          />
          <ComparisonColumn title='Another talent' items={ANOTHER_TALENT} />
        </div>

        <Button
          asChild
          className='mx-auto h-14 w-full rounded-full text-base font-bold text-neutral-950 shadow-green sm:w-60'
        >
          <Link href='#contact'>HIRE ME</Link>
        </Button>
      </div>
    </section>
  );
}
