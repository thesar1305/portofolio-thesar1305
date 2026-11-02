'use client';

import { useRef, useState, type FormEvent } from 'react';
import Image from 'next/image';
import type { IconType } from 'react-icons';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { SITE, SOCIAL_LINKS } from '@/lib/site';

type Result = 'success' | 'error';

const FIELD_CLASS =
  'w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-base text-neutral-25 placeholder:text-neutral-500 transition-colors focus:border-primary-200 focus:outline-none';

const SOCIAL_ICONS: Record<string, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
};

const RESULT_COPY = {
  success: {
    image: '/images/sent.png',
    title: 'Message Sent Successfully!',
    text: "Thank you for reaching out. I'll get back to you as soon as possible.",
    action: 'Back to home',
  },
  error: {
    image: '/images/not-sent.png',
    title: 'Message not sent!',
    text: 'Something went wrong on our end. Please try again in a moment.',
    action: 'Try again',
  },
} as const;

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<Result>('success');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);

    let next: Result = 'error';
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          website: data.get('website'), // honeypot: harus kosong
        }),
      });
      if (response.ok) {
        next = 'success';
        form.reset();
      }
    } catch {
      // Jaringan putus / server tidak terjangkau -> tetap tampil modal gagal.
    } finally {
      setSending(false);
    }

    setResult(next);
    dialogRef.current?.showModal();
  }

  const copy = RESULT_COPY[result];

  return (
    <section id='contact' className='border-t border-neutral-800'>
      <div className='mx-auto flex max-w-360 flex-col gap-10 px-4 py-10 md:px-10 lg:flex-row lg:gap-[122px] xl:px-32 xl:py-30'>
        {/* Kiri: foto + sosial */}
        <div className='flex flex-col gap-6 lg:w-[420px] lg:shrink-0'>
          <div className='relative aspect-square w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 mask-[linear-gradient(to_bottom,black_55%,transparent)]'>
            <Image
              src='/images/hero-portrait.png'
              alt={`Portrait of ${SITE.name}`}
              fill
              sizes='(min-width: 1024px) 420px, 100vw'
              className='object-cover object-top grayscale'
            />
          </div>

          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-2'>
              <span className='size-2.5 rounded-full bg-primary-200' />
              <span className='text-sm font-medium text-primary-200'>
                Available for Work
              </span>
            </div>
            <p className='text-2xl leading-8 font-bold text-neutral-25'>
              {SITE.name}
            </p>
            <ul className='flex items-center gap-3'>
              {SOCIAL_LINKS.map(({ label, href }) => {
                const Icon = SOCIAL_ICONS[label];
                return (
                <li key={label}>
                  <a
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={label}
                    className='flex size-11 items-center justify-center rounded-full border border-neutral-800 text-neutral-25 transition-colors hover:border-primary-200 hover:text-primary-200 focus-visible:border-primary-200 focus-visible:outline-none'
                  >
                    <Icon className='size-5' />
                  </a>
                </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Kanan: form */}
        <div className='flex flex-1 flex-col gap-6'>
          <div className='flex flex-col'>
            <p className='text-lg font-medium text-primary-200 uppercase'>
              Contact
            </p>
            <h2 className='text-[34px] leading-12 font-extrabold text-neutral-25 uppercase md:text-5xl md:leading-15'>
              Let&apos;s work <span className='text-primary-200'>together</span>
            </h2>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col gap-5'
          >
            <label className='flex flex-col gap-2 text-sm font-semibold text-neutral-25'>
              Name
              <input
                name='name'
                type='text'
                required
                maxLength={100}
                autoComplete='name'
                placeholder='Enter your name'
                className={FIELD_CLASS}
              />
            </label>

            <label className='flex flex-col gap-2 text-sm font-semibold text-neutral-25'>
              Email
              <input
                name='email'
                type='email'
                required
                maxLength={254}
                autoComplete='email'
                placeholder='Enter your email'
                className={FIELD_CLASS}
              />
            </label>

            <label className='flex flex-col gap-2 text-sm font-semibold text-neutral-25'>
              Message
              <textarea
                name='message'
                required
                maxLength={2000}
                placeholder='Enter your message'
                className={`${FIELD_CLASS} h-44 resize-none`}
              />
            </label>

            {/* Honeypot: tersembunyi dari manusia, bot biasanya mengisinya. */}
            <div
              aria-hidden='true'
              className='absolute -left-[9999px] h-0 w-0 overflow-hidden'
            >
              <label>
                Website
                <input
                  name='website'
                  type='text'
                  tabIndex={-1}
                  autoComplete='off'
                />
              </label>
            </div>

            <Button
              type='submit'
              disabled={sending}
              className='h-14 w-full rounded-full bg-primary-200 text-base font-bold text-black shadow-green hover:bg-primary-200/90'
            >
              {sending ? 'Sending…' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>

      {/* Modal hasil kirim: <dialog> native (Esc & fokus ditangani browser). */}
      <dialog
        ref={dialogRef}
        aria-labelledby='contact-result-title'
        className='m-auto w-[calc(100%-32px)] max-w-md rounded-2xl border border-neutral-800 bg-neutral-950 p-8 text-center text-neutral-25 backdrop:bg-black/70 backdrop:backdrop-blur-sm'
      >
        <div className='flex flex-col items-center gap-4'>
          <Image
            src={copy.image}
            alt=''
            width={165}
            height={136}
            className='h-auto w-[165px]'
          />
          <h3
            id='contact-result-title'
            className='text-2xl leading-8 font-extrabold'
          >
            {copy.title}
          </h3>
          <p className='text-base text-neutral-400'>{copy.text}</p>

          {result === 'success' ? (
            <Button
              asChild
              className='mt-2 h-12 w-full rounded-full bg-primary-200 font-bold text-black uppercase hover:bg-primary-200/90'
            >
              <a href='#home' onClick={() => dialogRef.current?.close()}>
                {copy.action}
              </a>
            </Button>
          ) : (
            <Button
              type='button'
              onClick={() => dialogRef.current?.close()}
              className='mt-2 h-12 w-full rounded-full bg-primary-200 font-bold text-black uppercase hover:bg-primary-200/90'
            >
              {copy.action}
            </Button>
          )}
        </div>
      </dialog>
    </section>
  );
}
