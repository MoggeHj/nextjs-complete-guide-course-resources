import Header from "@root/components/header";
import "./globals.css";

export const metadata = {
  title: "NextPosts",
  description: "Browse and share amazing posts.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;