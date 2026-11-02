'use client';

import type { ReactNode } from 'react';
import { MotionConfig, motion, type Variants } from 'framer-motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Arah = dari mana elemen datang. 'up' = muncul dari bawah naik ke posisi asli. */
type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const OFFSETS: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: -32 },
  right: { x: 32 },
  none: {},
};

/**
 * Bungkus sekali di layout. `reducedMotion="user"` membuat semua animasi
 * gerak (transform) otomatis mati bagi pengunjung yang mengaktifkan
 * "Reduce motion" di sistem operasinya; hanya fade yang tersisa.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion='user'>{children}</MotionConfig>;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  /** true = animasi langsung saat halaman dimuat (untuk bagian atas/Hero). */
  immediate?: boolean;
};

/** Fade + geser saat elemen masuk layar (sekali saja). */
export function Reveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  immediate = false,
}: RevealProps) {
  const hidden = { opacity: 0, ...OFFSETS[direction] };
  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE },
  };

  if (immediate) {
    return (
      <motion.div className={className} initial={hidden} animate={visible}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

const groupVariants = (stagger: number, delay: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

type GroupProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'ul';
  stagger?: number;
  delay?: number;
};

/** Container: anak-anaknya (RevealItem) muncul bergantian. */
export function RevealGroup({
  children,
  className,
  as = 'div',
  stagger = 0.12,
  delay = 0,
}: GroupProps) {
  const Tag = as === 'ul' ? motion.ul : motion.div;
  return (
    <Tag
      className={className}
      variants={groupVariants(stagger, delay)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </Tag>
  );
}

/** Harus berada di dalam RevealGroup. */
export function RevealItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'li';
}) {
  const Tag = as === 'li' ? motion.li : motion.div;
  return (
    <Tag className={className} variants={itemVariants}>
      {children}
    </Tag>
  );
}
