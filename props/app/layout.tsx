import './globals.css';
import '@rainbow-me/rainbowkit/styles.css';

// provider generation for rainbowkit + wgmi
import { Providers } from './provider';

// components
import Header from './components/header';
import Footer from './components/footer';


function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header></Header>
          {children}
          <Footer></Footer>
          </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
