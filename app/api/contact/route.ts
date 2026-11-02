import { NextResponse } from 'next/server';

const LIMITS = { name: 100, email: 254, message: 2000 } as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Hapus karakter kontrol/baris baru supaya tidak bisa menyelipkan header.
const clean = (value: string) => value.replace(/[\r\n\t]+/g, ' ').trim();

function fail(error: string, status: number) {
  return NextResponse.json({ ok: false, error }, { status });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return fail('Invalid request.', 400);
  }

  // Honeypot: field "website" disembunyikan di form; bot biasanya mengisinya.
  if (typeof body.website === 'string' && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === 'string' ? clean(body.name) : '';
  const email = typeof body.email === 'string' ? clean(body.email) : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || name.length > LIMITS.name) return fail('Name is required.', 400);
  if (!EMAIL_PATTERN.test(email) || email.length > LIMITS.email) {
    return fail('A valid email is required.', 400);
  }
  if (!message || message.length > LIMITS.message) {
    return fail('Message is required (max 2000 characters).', 400);
  }

  // Kunci hanya dibaca di server dari environment variable, tidak pernah ke browser.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>';

  if (!apiKey || !to) {
    console.error('Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is missing.');
    return fail('Message service is not configured.', 500);
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!response.ok) {
    console.error('Resend error:', response.status, await response.text());
    return fail('Failed to send message.', 502);
  }

  return NextResponse.json({ ok: true });
}
