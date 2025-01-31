/* eslint-disable @next/next/no-page-custom-font */
import Navbar from '../components/Navbar';
import BottomButtons from '../components/BottomButtons';
import BackgroundGradient from '@/components/BackgroundGradient';
import { SpeedInsights } from "@vercel/speed-insights/next"
import '../app/globals.css';

export const metadata = {
  title: 'ROBOSMART #19110',
  description: 'Official website of Robosmart FTC Team #19110',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BackgroundGradient />
      <head><link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Playwrite+IN:wght@100..400&display=swap" rel="stylesheet"/></head>
      <body className="font-inter">
        <Navbar />
        <main>
          {children}
        <SpeedInsights />
        </main>
        <BottomButtons />
      </body>
    </html>
  );
}
