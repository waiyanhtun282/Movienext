import NavBar from "@/components/NavBar";
import  '../styles/globals.css';
import Head from "./head";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className=" bg-[#000] relative">
        <div className="">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
