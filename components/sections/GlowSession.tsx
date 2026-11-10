import { glowherContent } from "@/lib/content";

export default function GlowSession() {
  const { sessionBreakdown } = glowherContent;

  return (
    <section id="session" className="w-full bg-bordeaux text-white py-16 sm:py-24 border-y border-bordeaux-light">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-eyebrow text-cotton mb-2 inline-block">
            Your 30-minute session
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold tracking-tightest text-white leading-tight">
            Simple enough for a busy morning.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Desktop Left Column / Mobile Top: Minimalist Face-Zone Illustration */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[340px] lg:max-w-none bg-softpink rounded-card-lg p-6 sm:p-8 border border-pink/30 shadow-md flex flex-col items-center justify-center">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-bordeaux/80 mb-3">
                Target Workout Zones
              </span>

              {/* Elegant Inline SVG Face Line Art */}
              <div className="w-full max-h-[220px] lg:max-h-[300px] flex items-center justify-center">
                <svg
                  viewBox="0 0 280 330"
                  className="w-full h-auto max-h-[220px] lg:max-h-[290px] drop-shadow-sm select-none"
                  aria-hidden="true"
                  fill="none"
                >
                  {/* Hairline / Crown */}
                  <path
                    d="M 68 115 C 68 50 110 38 140 38 C 170 38 212 50 212 115"
                    stroke="#5A0016"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                  {/* Face Contour / Jaw / Chin */}
                  <path
                    d="M 68 115 C 68 180 90 220 140 238 C 190 220 212 180 212 115"
                    stroke="#5A0016"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                  {/* Neck & Shoulders */}
                  <path
                    d="M 112 228 C 110 255 85 285 45 305"
                    stroke="#5A0016"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 168 228 C 170 255 195 285 235 305"
                    stroke="#5A0016"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  {/* Collarbone hints */}
                  <path
                    d="M 90 295 Q 120 300 135 292"
                    stroke="#5A0016"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  <path
                    d="M 145 292 Q 160 300 190 295"
                    stroke="#5A0016"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    opacity="0.6"
                  />

                  {/* Eyebrows */}
                  <path
                    d="M 94 130 Q 112 121 126 128"
                    stroke="#5A0016"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 154 128 Q 168 121 186 130"
                    stroke="#5A0016"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />

                  {/* Serene Eyelids / Lashes */}
                  <path
                    d="M 97 143 Q 112 153 125 145"
                    stroke="#5A0016"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 155 145 Q 168 153 183 143"
                    stroke="#5A0016"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  {/* Minimal Nose */}
                  <path
                    d="M 139 135 L 138 174 Q 140 178 144 176"
                    stroke="#5A0016"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  {/* Subtle Lip Line */}
                  <path
                    d="M 124 198 Q 140 192 156 198"
                    stroke="#5A0016"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 128 199 Q 140 208 152 199"
                    stroke="#5A0016"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />

                  {/* Zone 1: Forehead */}
                  <g transform="translate(140, 84)">
                    <circle r="12" fill="#EA8EAB" stroke="#FFFFFF" strokeWidth="2" />
                    <text fill="#5A0016" fontSize="11" fontWeight="800" textAnchor="middle" dy=".35em">1</text>
                  </g>

                  {/* Zone 2: Eyes */}
                  <g transform="translate(195, 142)">
                    <circle r="12" fill="#EA8EAB" stroke="#FFFFFF" strokeWidth="2" />
                    <text fill="#5A0016" fontSize="11" fontWeight="800" textAnchor="middle" dy=".35em">2</text>
                  </g>

                  {/* Zone 3: Cheeks */}
                  <g transform="translate(85, 172)">
                    <circle r="12" fill="#EA8EAB" stroke="#FFFFFF" strokeWidth="2" />
                    <text fill="#5A0016" fontSize="11" fontWeight="800" textAnchor="middle" dy=".35em">3</text>
                  </g>

                  {/* Zone 4: Jawline / Neck */}
                  <g transform="translate(195, 235)">
                    <circle r="12" fill="#EA8EAB" stroke="#FFFFFF" strokeWidth="2" />
                    <text fill="#5A0016" fontSize="11" fontWeight="800" textAnchor="middle" dy=".35em">4</text>
                  </g>
                </svg>
              </div>

              {/* Legend Badges */}
              <div className="grid grid-cols-2 gap-2 w-full mt-4 text-[11px] font-bold text-bordeaux/90">
                <span className="flex items-center gap-1.5 bg-white/70 px-2.5 py-1 rounded-full">
                  <span className="w-4 h-4 rounded-full bg-pink text-bordeaux flex items-center justify-center text-[10px] font-black">1</span>
                  Forehead
                </span>
                <span className="flex items-center gap-1.5 bg-white/70 px-2.5 py-1 rounded-full">
                  <span className="w-4 h-4 rounded-full bg-pink text-bordeaux flex items-center justify-center text-[10px] font-black">2</span>
                  Eyes
                </span>
                <span className="flex items-center gap-1.5 bg-white/70 px-2.5 py-1 rounded-full">
                  <span className="w-4 h-4 rounded-full bg-pink text-bordeaux flex items-center justify-center text-[10px] font-black">3</span>
                  Cheeks
                </span>
                <span className="flex items-center gap-1.5 bg-white/70 px-2.5 py-1 rounded-full">
                  <span className="w-4 h-4 rounded-full bg-pink text-bordeaux flex items-center justify-center text-[10px] font-black">4</span>
                  Jaw & Neck
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Session Breakdown Steps */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {sessionBreakdown.map((step, idx) => (
              <div
                key={idx}
                className="bg-bordeaux-light/60 border border-bordeaux-light/80 rounded-card p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 hover:bg-bordeaux-light/80 transition-colors"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <span className="px-4 py-2 bg-cotton text-bordeaux rounded-full font-extrabold text-sm sm:text-base flex-shrink-0 shadow-sm">
                    {step.duration}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-softpink/90 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-bold uppercase tracking-widest text-cotton flex-shrink-0 hidden md:block">
                  Step 0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
