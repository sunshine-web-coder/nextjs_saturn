import Header from '@/components/header/Header';
import './globals.scss';
import {barlow} from './fonts';
import Provider from './Provider';
import Footer from '@/components/footer/Footer';
import ScrollToTop from '@/constants/ScrollToTop';
import {UserProviderSignUp} from '@/redux/provider';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <ScrollToTop />
        <Provider>
          <UserProviderSignUp>
            <Header />
            {children}
            <Footer />
          </UserProviderSignUp>
        </Provider>
      </body>
    </html>
  );
}