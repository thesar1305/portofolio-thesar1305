import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/site';

export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Gambar pratinjau saat link dibagikan (WhatsApp, LinkedIn, dll.). Dibuat saat build.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#000000',
          color: '#fdfdfd',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: '#91ff02',
            textTransform: 'uppercase',
            letterSpacing: 4,
          }}
        >
          Portfolio
        </div>
        <div style={{ display: 'flex', fontSize: 88, fontWeight: 800, marginTop: 16 }}>
          {SITE.name}
        </div>
        <div style={{ display: 'flex', fontSize: 44, marginTop: 8, color: '#91ff02' }}>
          {SITE.role}
        </div>
        <div style={{ display: 'flex', fontSize: 30, marginTop: 40, color: '#a3a3a3' }}>
          Building fast and interactive web experiences.
        </div>
      </div>
    ),
    size
  );
}
