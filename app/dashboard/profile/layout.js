import Header from './Header';
import style from './globals.module.scss';

export default function RootLayout({children}) {
  return (
    <div>
      <Header />
      <div className={style.custom_container}>
        {children}
      </div>
    </div>
  );
}
