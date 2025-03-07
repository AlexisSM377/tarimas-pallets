import { Benefits } from "@/components/benefits";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { MaderaCategory } from "@/components/maderaCategory";
import { Products } from "@/components/products";


export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Products />
      <MaderaCategory />
      <Contact />
    </>
  );
}
