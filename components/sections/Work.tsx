import { cn } from '@/lib/utils';

const DESCRIPTION =
  'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.';

// TODO: ganti dengan pengalaman nyata (nama perusahaan/proyek, periode, deskripsi).
const JOBS = [
  { company: 'Company Name', period: '20XX - 20XX', role: 'Frontend Developer' },
  { company: 'Company Name', period: '20XX - 20XX', role: 'Frontend Developer' },
  { company: 'Company Name', period: '20XX - 20XX', role: 'Frontend Developer' },
  { company: 'Company Name', period: '20XX - 20XX', role: 'Frontend Developer' },
] as const;

export function Work() {
  return (
    <section id='work' className='relative overflow-hidden'>
      <div className='mx-auto flex max-w-360 flex-col gap-10 px-4 py-10 md:px-10 xl:gap-16 xl:px-32 xl:py-20'>
        <div className='flex flex-col items-center text-center'>
          <p className='text-lg font-medium text-primary-200 uppercase'>
            Experience
          </p>
          <h2 className='text-3xl leading-9.5 font-extrabold text-neutral-25 uppercase md:text-5xl md:leading-15'>
            Professional work
          </h2>
        </div>

        <ol>
          {JOBS.map((job, index) => {
            const isFirst = index === 0;
            const isLast = index === JOBS.length - 1;
            const cardOnRight = index % 2 === 0;

            return (
              <li
                key={index}
                className={cn(
                  'relative grid grid-cols-[24px_1fr] gap-x-4 lg:grid-cols-[1fr_36px_1fr] lg:items-center lg:gap-x-18',
                  !isLast && 'pb-6 lg:pb-0'
                )}
              >
                <span
                  aria-hidden='true'
                  className={cn(
                    'absolute left-3 w-px -translate-x-1/2 bg-neutral-800 lg:left-1/2',
                    isFirst && 'top-3 bottom-0 lg:top-1/2',
                    isLast && 'top-0 h-3 lg:h-auto lg:bottom-1/2',
                    !isFirst && !isLast && 'inset-y-0'
                  )}
                />

                <span className='relative z-10 col-start-1 row-start-1 flex size-6 items-center justify-center self-start rounded-full border border-neutral-800 bg-black text-xs font-medium text-primary-200 lg:col-start-2 lg:size-9 lg:self-center lg:text-sm'>
                  {index + 1}
                </span>

                <article
                  className={cn(
                    'col-start-2 row-start-1 rounded-2xl border border-neutral-800 bg-card p-6 lg:max-w-[500px]',
                    cardOnRight
                      ? 'lg:col-start-3'
                      : 'lg:col-start-1 lg:justify-self-end'
                  )}
                >
                  <div className='flex flex-col gap-2 md:flex-row md:items-start md:justify-between'>
                    <div className='flex flex-col gap-2'>
                      <p className='text-sm text-neutral-400'>{job.period}</p>
                      <h3 className='text-xl font-semibold text-neutral-25'>
                        {job.role}
                      </h3>
                    </div>
                    <p className='text-xl font-bold text-primary-200'>
                      {job.company}
                    </p>
                  </div>
                  <p className='mt-4 text-sm leading-7.5 text-neutral-400'>
                    {DESCRIPTION}
                  </p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Kotak hijau gelap dekoratif (pojok kanan bawah) */}
      <div
        aria-hidden='true'
        className='absolute right-0 bottom-0 hidden grid-cols-2 md:grid'
      >
        <span className='size-11' />
        <span className='size-11 bg-primary-400' />
        <span className='size-11 bg-primary-400' />
        <span className='size-11 bg-primary-400' />
        <span className='size-11' />
        <span className='size-11 bg-primary-400' />
      </div>
    </section>
  );
}
