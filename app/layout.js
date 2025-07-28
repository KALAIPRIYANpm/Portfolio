// app/layout.js
import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'A responsive portfolio using PT Serif',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
