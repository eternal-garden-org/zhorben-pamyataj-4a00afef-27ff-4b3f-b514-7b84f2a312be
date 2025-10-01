import { PageLayout } from "@/components/page-layout";
import { MemorialHero } from "@/components/memorial-hero";

export default function Home() {
  return (
    <PageLayout>
      <MemorialHero
        firstName="Александр"
        lastName="Карпук"
        middleName="Викторович"
        birthDate="1984-01-01"
        deathDate="2025-10-01"
        birthPlace="Солигорск, Беларусь"
        deathPlace="Брест, Беларусь"
        backgroundImage="/images/background.png"
      />
    </PageLayout>
  );
}