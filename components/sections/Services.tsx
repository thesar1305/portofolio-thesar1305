import { Monitor } from 'lucide-react';

const SERVICES = [
  {
    title: 'Custom Website Development',
    description:
      'Building responsive, fast, and scalable websites tailored to your needs.',
  },
  {
    title: 'Web Performance Optimization',
    description:
      'Enhancing website speed, SEO, and overall performance for better results.',
  },
  {
    title: 'Website Maintenance & Debugging',
    description:
      'Fixing bugs, improving UI, and ensuring smooth performance over time.',
  },
] as const;

export function Services() {
  return (
    <section id='services'>
      <div className='mx-auto flex max-w-360 flex-col gap-12 px-4 py-16 md:px-10 md:py-24 xl:gap-16 xl:px-30 xl:py-30'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
          <div className='flex flex-col'>
            <p className='text-lg font-medium text-primary-200 uppercase'>
              Service
            </p>
            <h2 className='max-w-[509px] text-3xl leading-9.5 font-extrabold text-neutral-25 uppercase md:text-5xl md:leading-15'>
              My service expertise
            </h2>
          </div>
          <p className='max-w-[504px] text-base font-medium text-neutral-400 md:text-xl lg:text-right'>
            Creating modern, intuitive, and visually consistent web experiences
            that align with industry trends and user expectations.
          </p>
        </div>

        <ul className='grid gap-10 lg:grid-cols-3'>
          {SERVICES.map((service, index) => (
            <li key={service.title} className='flex flex-col gap-6'>
              <p className='text-xl font-semibold text-neutral-400'>
                {String(index + 1).padStart(2, '0')}
              </p>
              <hr className='border-neutral-800' />
              <Monitor aria-hidden='true' className='size-8 text-primary-200' />
              <h3 className='text-3xl leading-9.5 font-semibold text-neutral-25'>
                {service.title}
              </h3>
              <p className='text-base text-neutral-400 md:text-xl'>
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
