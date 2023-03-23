import '../../app/globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'Blog',
  description: 'Blog Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* Header */}
      <Header />
      <body>{children}</body>
    </html>
  );
}
