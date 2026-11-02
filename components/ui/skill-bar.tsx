'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

type SkillBarProps = {
  name: string;
  level: number;
  /** Urutan bar, dipakai untuk jeda antar bar. */
  index: number;
};

/** Bar terisi dari 0 ke `level` saat masuk layar; angka persen ikut naik. */
export function SkillBar({ name, level, index }: SkillBarProps) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    // Reduce motion: durasi 0 = langsung ke nilai akhir. setState hanya
    // dipanggil lewat callback animasi, bukan langsung di badan effect.
    const controls = animate(0, level, {
      duration: reduceMotion ? 0 : 1.2,
      delay: reduceMotion ? 0 : index * 0.12,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(Math.round(latest)),
      onComplete: () => setValue(level),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, level, index]);

  return (
    <li ref={ref} className='flex items-center gap-4 md:gap-6'>
      <div className='relative h-12 flex-1 md:h-16'>
        <span
          aria-hidden='true'
          className='absolute inset-x-0 top-1/2 h-px bg-neutral-800'
        />
        <div
          aria-hidden='true'
          className='absolute inset-y-0 left-0 rounded-xl bg-primary-300 bg-[repeating-linear-gradient(115deg,transparent_0_10px,rgb(145_255_2/0.08)_10px_11px)]'
          style={{ width: `${value}%` }}
        />
        <span className='relative flex h-full items-center px-4 text-sm font-medium text-neutral-25 md:px-6 md:text-base'>
          {name}
        </span>
      </div>
      <p
        className='w-11 text-left text-base font-medium text-neutral-25 md:w-14 md:text-xl'
      >
        {value}%
      </p>
    </li>
  );
}
