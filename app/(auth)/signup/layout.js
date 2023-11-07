export default function RootLayout({children}) {
  return (
    <div className="custom_container">
      <div className="mx-auto max-w-[500px] min-h-[500px] pt-[80px]">
        {children}
      </div>
    </div>
  );
}
