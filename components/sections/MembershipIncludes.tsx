import SafeImage from "../SafeImage";
import { yogherContent, IMAGES } from "@/lib/content";
import { Video, Clock, Utensils, HelpCircle, MessageSquare } from "lucide-react";

const MEMBERSHIP_ICONS = [
  Video,
  Clock,
  Utensils,
  HelpCircle,
  MessageSquare,
];

export default function MembershipIncludes() {
  const { membershipIncludes } = yogherContent;

  return (
    <section className="w-full py-14 sm:py-20 bg-softpink">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="bg-cotton/60 p-6 sm:p-10 lg:p-12 rounded-card-xl border border-pink/30 shadow-sm">
          {/* Mobile Photo Banner: 200px banner above list */}
          <div className="lg:hidden relative w-full h-[200px] rounded-[24px] overflow-hidden bg-cotton mb-8 shadow-sm">
            <SafeImage
              src={IMAGES.membership}
              alt="YogHer certified coach in yoga practice"
              fill
              loading="lazy"
              sizes="(max-width: 1023px) 100vw, 600px"
              className="object-cover object-center"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Desktop Left Column: Photo (rounded 28px, aspect-[4/5]) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden bg-cotton shadow-md">
                <SafeImage
                  src={IMAGES.membership}
                  alt="YogHer certified coach in yoga practice"
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 460px, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column: Heading & 5 Membership Items with Lucide line icons */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-bordeaux/90 mb-2 inline-block">
                  Included with every plan
                </span>
                <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-extrabold tracking-tightest text-bordeaux leading-tight">
                  Every membership includes:
                </h2>
              </div>

              <div className="flex flex-col gap-3.5">
                {membershipIncludes.map((item, idx) => {
                  const IconComponent = MEMBERSHIP_ICONS[idx % MEMBERSHIP_ICONS.length];
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-4 bg-white/90 p-4 rounded-card border border-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-[52px] h-[52px] rounded-full bg-cotton text-bordeaux flex items-center justify-center shrink-0">
                        <IconComponent className="w-7 h-7 stroke-[2]" aria-hidden="true" />
                      </div>
                      <span className="text-bordeaux font-bold text-sm sm:text-base leading-snug">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
