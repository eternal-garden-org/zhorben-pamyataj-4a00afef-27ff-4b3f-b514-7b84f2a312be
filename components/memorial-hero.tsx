import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { formatDate, calculateAge, formatAgeText } from "@/lib/date-utils";

interface MemorialHeroProps {
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  deathDate: string;
  birthPlace?: string;
  deathPlace?: string;
  photoUrl?: string;
  backgroundImage?: string;
}

export function MemorialHero({
  firstName,
  lastName,
  middleName,
  birthDate,
  deathDate,
  birthPlace,
  deathPlace,
  photoUrl,
  backgroundImage,
}: MemorialHeroProps) {
  const age = calculateAge(birthDate, deathDate);
  const ageText = formatAgeText(age);
  const birthDateFormatted = formatDate(birthDate);
  const deathDateFormatted = formatDate(deathDate);
  const birthYear = new Date(birthDate).getFullYear();
  const deathYear = new Date(deathDate).getFullYear();

  return (
    <section className="relative w-full">
      {/* Background image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: 0.15,
          }}
        />
      )}

      <Container className="py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[480px_1fr] md:gap-12">
          {/* Photo */}
          <div className="relative aspect-square w-full overflow-hidden rounded-lg md:h-[480px] md:w-[480px]">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt={`${firstName} ${middleName} ${lastName}`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-muted">
                <span className="text-muted-foreground">Фото недоступно</span>
              </div>
            )}
          </div>

          {/* Personal Information */}
          <div className="flex flex-col justify-between">
            {/* Top Section */}
            <div className="space-y-4">
              {/* Name - First line */}
              <div
                className="text-[40px] font-bold leading-tight text-white"
                style={{ lineHeight: "1.1" }}
              >
                {firstName}
              </div>

              {/* Name - Second line */}
              <div
                className="text-[40px] font-bold leading-tight text-white"
                style={{ lineHeight: "1.1" }}
              >
                {middleName} {lastName}
              </div>

              {/* Age Badge */}
              <div className="mt-10">
                <Badge
                  className="rounded-full border-none px-4 py-2 text-base font-light"
                  style={{
                    backgroundColor: "#F6B95A",
                    color: "#1F1F1F",
                  }}
                >
                  {ageText}
                </Badge>
              </div>

              {/* Dates */}
              <div className="mt-5 text-xl">
                <span className="font-light" style={{ color: "#8B8B8B" }}>
                  {birthDateFormatted}{" "}
                </span>
                <span className="font-bold text-white">{birthYear}</span>
                <span className="font-light text-white"> – </span>
                <span className="font-light" style={{ color: "#8B8B8B" }}>
                  {deathDateFormatted}{" "}
                </span>
                <span className="font-bold text-white">{deathYear}</span>
              </div>
            </div>

            {/* Bottom Section - Places */}
            <div className="mt-8 space-y-6 md:mt-0">
              {/* Birth Place */}
              {birthPlace && (
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" style={{ color: "#8B8B8B" }} />
                    <span className="text-sm" style={{ color: "#8B8B8B" }}>
                      Место рождения
                    </span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {birthPlace}
                  </div>
                </div>
              )}

              {/* Death Place */}
              {deathPlace && (
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" style={{ color: "#8B8B8B" }} />
                    <span className="text-sm" style={{ color: "#8B8B8B" }}>
                      Место смерти
                    </span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {deathPlace}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}