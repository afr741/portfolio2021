import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.scss';
import '../src/App.scss';

export const metadata = {
  metadataBase: new URL('https://af4741.github.io'),
  title: {
    default: 'Anushervon Rakhmatov | Full Stack Engineer & AI Consultant',
    template: '%s | Anushervon Rakhmatov',
  },
  description:
    "Full Stack Engineer with 8+ years of experience delivering scalable, AI-integrated web applications for enterprise clients. Specializing in React.js, Node.js, TypeScript, and OpenAI API integrations — available for consulting in Canada.",
  keywords: [
    'Anushervon Rakhmatov',
    'Anoosh',
    'Full Stack Engineer',
    'Software Consultant',
    'React.js Developer',
    'Node.js Developer',
    'AI Developer',
    'OpenAI API',
    'TypeScript Developer',
    'Toronto developer',
    'Canada software engineer',
    'Scotiabank',
    'Loblaw Digital',
    'PayPal engineer',
  ],
  authors: [{ name: 'Anushervon Rakhmatov', url: 'https://github.com/af4741' }],
  creator: 'Anushervon Rakhmatov',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://af4741.github.io',
    siteName: 'Anushervon Rakhmatov | Portfolio',
    title: 'Anushervon Rakhmatov | Full Stack Engineer & AI Consultant',
    description:
      'Full Stack Engineer with 8+ years building scalable, AI-integrated web applications for enterprise clients including Scotiabank, Loblaw, and PayPal.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anushervon Rakhmatov | Full Stack Engineer & AI Consultant',
    description:
      'Full Stack Engineer with 8+ years building scalable, AI-integrated web applications.',
    creator: '@af4741',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://af4741.github.io',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Anushervon Rakhmatov',
  alternateName: 'Anoosh',
  url: 'https://af4741.github.io',
  jobTitle: 'Full Stack Engineer & AI Consultant',
  description:
    'Full Stack Engineer with 8+ years of experience specializing in React.js, Node.js, TypeScript, and OpenAI API integrations.',
  worksFor: {
    '@type': 'Organization',
    name: 'Scotiabank',
  },
  knowsAbout: [
    'React.js',
    'Node.js',
    'TypeScript',
    'OpenAI API',
    'Google Cloud Platform',
    'Full Stack Development',
    'Micro-frontends',
    'AI-powered applications',
  ],
  sameAs: [
    'https://github.com/af4741',
    'https://www.linkedin.com/in/anushervon-rakhmatov',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW37O/R04232FyaBmDPpj0xYJ9ORFEtpfkV4pS0sEIrhYUFMsKnNOAEVXK7JRmSezXQBQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body data-theme="dark" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
