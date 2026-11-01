import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Skills } from '@/components/sections/Skills';
import { Work } from '@/components/sections/Work';

const PLACEHOLDERS = ['projects', 'faq', 'contact'];

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Skills />
      <Experience />
      <Work />
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
