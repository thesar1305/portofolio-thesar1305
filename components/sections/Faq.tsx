import { Starburst } from '@/components/ui/starburst';

const FAQS = [
  {
    question: 'What technologies do you specialize in?',
    answer:
      'I work mainly with React, Next.js, TypeScript, and Tailwind CSS to build high-performance, scalable, and maintainable web applications.',
  },
  {
    question: 'Do you work on both design and development?',
    answer:
      'I focus on frontend development, translating UI/UX designs into responsive and interactive web experiences. I can also collaborate closely with designers to ensure a seamless user experience.',
  },
  {
    question: 'Do you have experience building business applications?',
    answer:
      'Yes. Alongside my frontend work, I am an HR Manager at a startup and have built internal web applications for real business operations. I understand how teams work with data, which helps me design interfaces that are practical and easy to use.',
  },
  {
    question: 'Do you take freelance or contract-based projects?',
    answer:
      'I am open to freelance, contract, and full-time opportunities, depending on the project scope and requirements. Feel free to reach out!',
  },
  {
    question: 'How do you approach a new project?',
    answer:
      'I start by understanding the project goals and requirements, followed by wireframing or UI implementation, then development, testing, and deployment, ensuring a smooth and efficient workflow.',
  },
  {
    question: 'How can we collaborate?',
    answer:
      'You can contact me through the form below or on GitHub. I usually begin with a consultation to discuss your needs, then propose a plan to bring your vision to life.',
  },
] as const;

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-start gap-3'>
        <Starburst className='mt-0.5 text-primary-200' />
        <h3 className='text-lg leading-7 font-semibold text-neutral-25 md:text-xl'>
          {question}
        </h3>
      </div>
      <p className='text-sm leading-6 text-neutral-400'>{answer}</p>
    </div>
  );
}

export function Faq() {
  // Dua item per baris (kiri + kanan) supaya garis pemisah rapi.
  const rows = Array.from({ length: Math.ceil(FAQS.length / 2) }, (_, i) =>
    FAQS.slice(i * 2, i * 2 + 2)
  );

  return (
    <section id='faq'>
      <div className='mx-auto flex max-w-360 flex-col gap-8 px-4 py-12 md:px-10 xl:gap-16 xl:px-32 xl:py-20'>
        <div className='flex flex-col items-center text-center'>
          <p className='text-lg font-medium text-primary-200 uppercase'>FAQ</p>
          <h2 className='text-3xl leading-9.5 font-extrabold text-neutral-25 uppercase md:text-5xl md:leading-15'>
            Frequently asked questions
          </h2>
        </div>

        <div className='divide-y divide-neutral-800'>
          {rows.map((row) => (
            <div key={row[0].question} className='grid md:grid-cols-2'>
              {row.map((item, index) => (
                <div
                  key={item.question}
                  className={
                    index === 1
                      ? 'py-6 md:border-l md:border-neutral-800 md:py-10 md:pl-8'
                      : 'py-6 md:py-10 md:pr-8'
                  }
                >
                  <FaqItem question={item.question} answer={item.answer} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
