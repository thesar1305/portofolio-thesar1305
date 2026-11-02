import Image from 'next/image';
import { ExternalLink, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

type Project = {
  title: string;
  description: string;
  /** URL demo publik. Kosong = proyek internal/privat (tidak bisa diklik). */
  href?: string;
  /** Path gambar di /public, mis. '/images/projects/sociality.png'. Kosong = tampil placeholder. */
  image?: string;
  /** Aplikasi internal: halaman publik hanya berisi form login. */
  loginRequired?: boolean;
};

// Hanya proyek nyata milikmu. Tambah item baru di sini kalau sudah ada.
const PROJECTS: Project[] = [
  {
    title: 'Sociality — Social Media App',
    description:
      'Frontend of a social media app: feed, posts, comments, likes, saved posts, profiles, and follow, built with Next.js and a REST API.',
    href: 'https://sociality-frontend-mvp-thesar1305.vercel.app',
  },
  {
    title: 'SIMANKAR — HR & Asset Management',
    description:
      'Internal HR and asset management system that replaces Excel workflows for a multi-site mining contractor, used concurrently by site admins. Solo-built with React, PHP/MySQL, and Firebase Authentication, with Excel import/export.',
    href: 'https://ajboffice.my.id/',
    loginRequired: true,
  },
  {
    title: 'Aplikasi Telur — Egg Business Management',
    description:
      'Business management app for an egg distribution company: daily sales with printable receipts, customers, stock, dynamic pricing, and income, expenditure, and gross profit reports. Built with PHP, MySQL, and Bootstrap 5.',
    href: 'https://abatiimadani.xyz/aplikasi_telur/',
    loginRequired: true,
  },
  {
    title: 'Movie Explorer',
    description:
      'A movie explorer app built with Vite that browses and searches movies from the TMDB API.',
    href: 'https://week-9-movie-explorer-app-thesar1305.vercel.app',
  },
];

function ProjectCard({ project }: { project: Project }) {
  const { href } = project;

  const content = (
    <>
      <div className='relative aspect-[383/285] overflow-hidden rounded-2xl border border-neutral-800 bg-card'>
        {project.image ? (
          <Image
            src={project.image}
            alt={`Preview of ${project.title}`}
            fill
            sizes='(min-width: 1280px) 383px, (min-width: 768px) 50vw, 100vw'
            className='object-cover transition-transform duration-500 group-hover:scale-105'
          />
        ) : (
          <div className='flex size-full items-center justify-center bg-linear-to-br from-primary-400 to-neutral-900 p-6 text-center text-xl font-extrabold text-neutral-25 uppercase'>
            {project.title}
          </div>
        )}

        {href ? (
          <span
            aria-hidden='true'
            className='absolute top-1/2 left-1/2 flex size-18 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-white text-sm font-bold text-black opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100'
          >
            VISIT
          </span>
        ) : null}

        {(project.loginRequired || !href) && (
          <span className='absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-neutral-800 bg-black/70 px-3 py-1 text-xs font-medium text-neutral-25 backdrop-blur-sm'>
            <Lock aria-hidden='true' className='size-3' />
            {href ? 'Login required' : 'Private project'}
          </span>
        )}
      </div>

      <div className='flex flex-col gap-2'>
        <h3 className='flex items-center gap-2 text-xl leading-8 font-semibold text-neutral-25'>
          {project.title}
          {href && (
            <>
              <ExternalLink
                aria-hidden='true'
                className='size-4 shrink-0 text-neutral-400'
              />
              <span className='sr-only'>(opens in a new tab)</span>
            </>
          )}
        </h3>
        <p className='text-sm leading-6 text-neutral-400'>
          {project.description}
        </p>
      </div>
    </>
  );

  const className = 'group flex flex-col gap-4 rounded-2xl';

  if (!href) return <div className={className}>{content}</div>;

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={cn(
        className,
        'outline-none focus-visible:ring-2 focus-visible:ring-primary-200'
      )}
    >
      {content}
    </a>
  );
}

export function Portfolio() {
  return (
    <section id='projects'>
      <div className='mx-auto flex max-w-360 flex-col gap-6 px-4 py-12 md:px-10 xl:gap-16 xl:px-32 xl:py-20'>
        <div className='flex flex-col items-center text-center'>
          <p className='text-lg font-medium text-primary-200 uppercase'>
            Portfolio
          </p>
          <h2 className='text-3xl leading-9.5 font-extrabold text-neutral-25 uppercase md:text-5xl md:leading-15'>
            Selected work
          </h2>
        </div>

        <ul className='grid gap-x-4 gap-y-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-y-16'>
          {PROJECTS.map((project) => (
            <li key={project.title}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
