import type { IconType } from 'react-icons';
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiReact,
  SiTypescript,
} from 'react-icons/si';

const TECH_ICONS: { label: string; icon: IconType; color: string }[] = [
  { label: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { label: 'CSS3', icon: SiCss, color: '#1572b6' },
  { label: 'HTML5', icon: SiHtml5, color: '#e34f26' },
  { label: 'Express', icon: SiExpress, color: '#fdfdfd' },
  { label: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { label: 'React', icon: SiReact, color: '#61dafb' },
  { label: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { label: 'Docker', icon: SiDocker, color: '#2496ed' },
];

// Data persis seperti di Figma (ganti sesuai skill aslimu).
const SKILLS = [
  { name: 'React JS', level: 50 },
  { name: 'HTML', level: 80 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'HTML', level: 100 },
  { name: 'Docker', level: 70 },
  { name: 'Javascript', level: 90 },
] as const;

export function Skills() {
  return (
    <section id='skills'>
      <div className='mx-auto flex max-w-360 flex-col gap-10 px-4 py-10 md:px-10 lg:flex-row lg:items-center lg:gap-[58px] xl:px-32 xl:py-20'>
        <div className='flex flex-col gap-10 lg:w-[524px] lg:shrink-0'>
          <div className='flex flex-col'>
            <p className='text-lg font-medium text-primary-200 uppercase'>
              Skills
            </p>
            <h2 className='text-3xl leading-9.5 font-extrabold text-neutral-25 uppercase md:text-5xl md:leading-15'>
              Skills that bring ideas to life
            </h2>
          </div>

          <ul className='grid w-fit grid-cols-4 gap-4 md:gap-6'>
            {TECH_ICONS.map(({ label, icon: Icon, color }) => (
              <li
                key={label}
                className='flex size-12 items-center justify-center rounded-full border border-neutral-800 md:size-16'
              >
                <Icon
                  aria-label={label}
                  role='img'
                  className='size-6 md:size-7'
                  style={{ color }}
                />
              </li>
            ))}
          </ul>
        </div>

        <ul className='flex flex-1 flex-col gap-4 md:gap-6'>
          {SKILLS.map((skill, index) => (
            <li key={`${skill.name}-${index}`} className='flex items-center gap-4 md:gap-6'>
              <div className='relative h-12 flex-1 md:h-16'>
                <span
                  aria-hidden='true'
                  className='absolute inset-x-0 top-1/2 h-px bg-neutral-800'
                />
                <div
                  className='relative flex h-full items-center rounded-xl bg-primary-300 bg-[repeating-linear-gradient(115deg,transparent_0_10px,rgb(145_255_2/0.08)_10px_11px)] px-4 text-sm font-medium text-neutral-25 md:px-6 md:text-base'
                  style={{ width: `${skill.level}%` }}
                >
                  {skill.name}
                </div>
              </div>
              <p className='w-11 text-left text-base font-medium text-neutral-25 md:w-14 md:text-xl'>
                {skill.level}%
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
