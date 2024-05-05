import "./globals.css";

export const metadata = {
  title: "Next Auth",
  description: "Next.js Authentication",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
