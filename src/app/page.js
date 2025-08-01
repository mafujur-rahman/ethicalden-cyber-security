
import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";
import { FAQs } from "@/components/Home/FAQ/FAQ";
import Clients from "@/components/Home/Industries/Clients";
import { IndustriesWeServe } from "@/components/Home/Industries/IndustriesWeServe";
import OurProducts from "@/components/Home/OurProducts/OurProducts";
import { Pricing } from "@/components/Home/Pricing/Pricing";
import Services from "@/components/Home/Services/Services";
import Stats from "@/components/Home/Stats/Stats";
import { Footer } from "@/components/Shared/Footer/Footer";
import { Navbar } from "@/components/Shared/Navbar/Navbar";


export default function Home() {
  return (
    <div>
      <div className="min-h-screen ">
        <Navbar />
        <Banner />
      </div>
      <About />
      <Services />
      <OurProducts />
      <Clients />
      <IndustriesWeServe />
      <Stats />
      <Pricing />
      <FAQs />
      <Footer />
    </div>
  );
}



