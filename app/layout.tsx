import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import LightPillar from '@/components/LightPillar'
import './globals.css'

// import weights used throughout the site
const sora = Sora({
  subsets: ['latin'],
  weight: ['400','500','600','700','800'],
  variable: '--font-primary',
});

export const metadata: Metadata = {
  title: 'ICSD Recruitment',
  description: 'Recruitment portal for ICSD',
  icons: {
    // use the same logo image as the site favicon; place it in public/ or public/images
    icon: [
      {
        url: '/icsd-logo.png',
      },
      {
        url: '/icsd-logo.jpeg',
      },
    ],
    // keep existing apple icon or reuse logo if you prefer
    apple: '/icsd-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.variable}`}>
      <body className="font-body antialiased">
        <div className="background-layer">
          <LightPillar
            topColor="#58cce9"
            bottomColor="#000000"
            intensity={1}
            rotationSpeed={0.3}
            glowAmount={0.012}
            pillarWidth={3}
            pillarHeight={0.4}
            noiseIntensity={2}
            pillarRotation={25}
            interactive={false}
            mixBlendMode="normal"
            quality="medium"
            className=""
          />
        </div>
        <div className="content-layer">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
