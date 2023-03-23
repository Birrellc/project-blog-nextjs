import '../../app/globals.css';
import Banner from '../components/Banner';
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
      <body>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
