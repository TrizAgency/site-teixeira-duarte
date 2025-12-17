import Areas from "@/components/Areas";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <main className="font-(family-name:--font-alexandria)">
      <Header />
      <Banner />
      <WhoWeAre />
      <Areas />
      <Team />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
