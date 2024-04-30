//This layout component is used to wrap sibling and child pages. The wrapping will stop when a new layout.tsx file is found in a child folder.
import MainHeader from "@root/components/main-header";
import "../globals.css";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
