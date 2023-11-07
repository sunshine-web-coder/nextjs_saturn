import Header from './Header';

export default function RootLayout({children}) {
  return (
    <div className="bg-[#FAF8F5]">
      <Header />
      <div className="">
        {children}
      </div>
    </div>
  );
}
