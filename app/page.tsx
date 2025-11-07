import {
  AboutSection,
  ContactSection,
  Footer,
  Header,
  ProjectSection,
  ScrollSpyNav,
  NavData,
  TestScrollAnimation,
} from "@/components";

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <ProjectSection />
        <ContactSection />
        <TestScrollAnimation />
      </main>
      <Footer />

      <ScrollSpyNav items={NavData} offset={70} />
    </>
  );
}
