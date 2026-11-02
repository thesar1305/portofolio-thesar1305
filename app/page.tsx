import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Experience } from '@/components/sections/Experience';
import { Faq } from '@/components/sections/Faq';
import { Hero } from '@/components/sections/Hero';
import { Portfolio } from '@/components/sections/Portfolio';
import { Services } from '@/components/sections/Services';
import { Skills } from '@/components/sections/Skills';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Faq />
      <Contact />
    </>
  );
}
