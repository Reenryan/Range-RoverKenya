
import Footer from "./footer";
import Navbar from "./Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}
