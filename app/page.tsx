import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';

const PLACEHOLDERS = ['about', 'skills', 'projects', 'faq', 'contact'];

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      {PLACEHOLDERS.map((id) => (
        <section
          key={id}
          id={id}
          className='flex min-h-screen items-center justify-center border-b border-neutral-800 pt-20 text-3xl font-extrabold capitalize'
        >
          {id}
        </section>
      ))}
    </>
  );
}
