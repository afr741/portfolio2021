import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.scss';
import '../src/App.scss';

export const metadata = {
  metadataBase: new URL('https://www.innoflowai.ca'),
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
    url: 'https://www.innoflowai.ca/anushervon',
    siteName: 'Innoflow AI',
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
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.innoflowai.ca/anushervon',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Anushervon Rakhmatov',
  alternateName: 'Anoosh',
  url: 'https://www.innoflowai.ca/anushervon',
  jobTitle: 'Full Stack Engineer & AI Consultant',
  description:
    'Full Stack Engineer with 8+ years of experience specializing in React.js, Node.js, TypeScript, and OpenAI API integrations.',
  worksFor: {
    '@type': 'Organization',
    name: 'Innoflow AI',
    url: 'https://www.innoflowai.ca',
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
          crossOrigin="anonymous"
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
