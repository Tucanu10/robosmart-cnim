import Navbar from '../components/Navbar';
import BottomButtons from '../components/BottomButtons';
import BackgroundGradient from '@/components/BackgroundGradient';
import '../app/globals.css';

export const metadata = {
  title: 'ROBOSMART #19110',
  description: 'Official website of Robosmart FTC Team #19110',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BackgroundGradient />
      <body>
        <Navbar />
        <main>{children}</main>
        <BottomButtons />
      </body>
    </html>
  );
}
