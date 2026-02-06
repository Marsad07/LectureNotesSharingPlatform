export const metadata = {
    title: 'Lecture Notes Prototype',
    description: 'Test project to teach the team about Next.js',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }