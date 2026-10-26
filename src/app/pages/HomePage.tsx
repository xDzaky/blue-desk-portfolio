// src/app/pages/HomePage.tsx
import { useOutletContext } from "react-router-dom";
import { CoverStage } from "../../components/stages/CoverStage";
import { AboutStage } from "../../components/stages/AboutStage";
import { SkillsStage } from "../../components/stages/SkillsStage";
import { JourneyStage } from "../../components/stages/JourneyStage";
import { WorksStage } from "../../components/stages/WorksStage";
import { CertificatesStage } from "../../components/stages/CertificatesStage";
import { ServicesStage } from "../../components/stages/ServicesStage";
import { ContactStage } from "../../components/stages/ContactStage";

export function HomePage() {
  const { onOpenCredits } = useOutletContext<{ onOpenCredits: () => void }>() || {
    onOpenCredits: () => {},
  };

  return (
    <div className="w-full">
      <CoverStage />
      <AboutStage />
      <SkillsStage />
      <JourneyStage />
      <WorksStage />
      <CertificatesStage />
      <ServicesStage />
      <ContactStage onOpenCredits={onOpenCredits} />
    </div>
  );
}
