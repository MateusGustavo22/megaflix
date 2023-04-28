import './globals.css'

export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <body className='bg-primary'>
      <div className='max-w-[1400px] min-h-screen p-4 bg-primary m-auto'>
        {children}
      </div>
    </body>
  
  );
}