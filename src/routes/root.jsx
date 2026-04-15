import Hero from "../components/Hero";
import Services from "../components/Services";
import GlobalPresence from "../components/GlobalPresence";
import PrivateCharterForm from "../components/PrivateCharterForm";
import GlobalExistence from "../components/GlobalExistence";

export default function Root() {
  return (
    <>
      <Hero />
      <Services />
      <GlobalPresence />
      <GlobalExistence />
      <PrivateCharterForm />
    </>
  );
}
