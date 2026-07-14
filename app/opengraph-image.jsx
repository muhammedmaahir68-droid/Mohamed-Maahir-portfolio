import { ImageResponse } from 'next/og'

export const alt = 'Mohamed Maahir M | Full-Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px', color: '#f5f1e8', background: 'linear-gradient(135deg, #07111d 0%, #153752 55%, #d8a55d 140%)' }}>
      <div style={{ display: 'flex', fontSize: 28, letterSpacing: 7, color: '#e6bd7d' }}>PORTFOLIO 2026</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 86, fontWeight: 700, lineHeight: 1 }}>MOHAMED</div>
        <div style={{ display: 'flex', fontSize: 86, fontWeight: 700, lineHeight: 1, color: '#e6bd7d' }}>MAAHIR M</div>
      </div>
      <div style={{ display: 'flex', fontSize: 29, color: '#c8d4df' }}>Full-Stack Developer · React · Django · Cloud · AI</div>
    </div>,
    size,
  )
}
