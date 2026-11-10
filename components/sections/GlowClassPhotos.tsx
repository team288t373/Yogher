import SafeImage from "../SafeImage";
import { glowherContent } from "@/lib/content";

export default function GlowClassPhotos() {
  const { faceYogaPhotos } = glowherContent;

  if (!faceYogaPhotos || faceYogaPhotos.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-16 sm:py-24 bg-white border-y border-cotton/40 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-8 sm:mb-12 text-center">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
          Live classes
        </span>
        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold tracking-tightest text-bordeaux leading-tight">
          Inside a GlowHer class.
        </h2>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
          {faceYogaPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="relative w-[160px] h-[210px] sm:w-[220px] sm:h-[280px] shrink-0 rounded-[20px] overflow-hidden bg-cotton shadow-sm snap-start"
            >
              <SafeImage
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 220px, 160px"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
