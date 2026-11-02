import { cn } from '@/lib/utils';

// Bintang 12 sudut (starburst) sebagai SVG inline, jadi tidak perlu file aset.
const STARBURST_POINTS = Array.from({ length: 24 }, (_, i) => {
  const radius = i % 2 === 0 ? 12 : 7.5;
  const angle = (Math.PI / 12) * i - Math.PI / 2;
  return `${(12 + radius * Math.cos(angle)).toFixed(2)},${(12 + radius * Math.sin(angle)).toFixed(2)}`;
}).join(' ');

export function Starburst({ className }: { className?: string }) {
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
