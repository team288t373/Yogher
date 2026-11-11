import {
  Coach,
  Testimonial,
  PricingPlan,
  FaqItem,
  ProgramItem,
  SessionStep,
  JournalItem,
  CoachStripItem,
  FaceYogaPhoto,
  HeroPhoto,
  WeeklyDayItem,
  TransformationItem,
  DownloadItem,
  VideoReview,
} from "./types";

export const CLOUDINARY_BASE = "https://res.cloudinary.com/dmtggqp0f/image/upload/";

export const IMAGES = {
  // Hero
  heroLiveClass: `${CLOUDINARY_BASE}v1779726637/Gemini_Generated_Image_f5wtff5wtff5wtff_lshpe6.png`,
  heroAvatars: [
    {
      name: "Krati Sharma",
      src: `${CLOUDINARY_BASE}v1778651263/yogher/testimonials/nb5g3vsdie75r5fwqik2.png`,
    },
    {
      name: "Meenal Thokare",
      src: `${CLOUDINARY_BASE}v1778652067/yogher/testimonials/x19y44l21sipq4prg2ze.png`,
    },
    {
      name: "Sneha Reddy",
      src: `${CLOUDINARY_BASE}v1778652922/yogher/testimonials/s7hzbf9ostk6uf3mggo0.png`,
    },
  ],

  // Programs
  programs: {
    weightLoss: `${CLOUDINARY_BASE}v1785862764/yogher/instructorsgallery/fxpzrudcpe3xfvr9tuhx.png`,
    fatLoss: `${CLOUDINARY_BASE}v1780150084/yogher/instructorsgallery/pqemeacqpen7zbtc061x.png`,
    pcos: `${CLOUDINARY_BASE}v1785862770/yogher/instructorsgallery/dtuj5lsvcjfvwbsrgavc.png`,
    bodyToning: `${CLOUDINARY_BASE}v1779257187/yogher/instructorsgallery/dpygk3mdwo2rthia4avv.jpg`,
    stressRelief: `${CLOUDINARY_BASE}v1779258686/yogher/instructorsgallery/xdgxxcdiexzuvitse5aa.jpg`,
    glowherCrossLink: `${CLOUDINARY_BASE}v1785862762/yogher/instructors/albytawz1le5e1u6f68k.png`,
  },

  // On the mat with our coaches photo strip
  coachStrip: [
    {
      name: "Amisha",
      image: `${CLOUDINARY_BASE}v1779173122/yogher/instructorsgallery/ow9g7ubpwqpklhsx4adi.jpg`,
    },
    {
      name: "Diksha",
      image: `${CLOUDINARY_BASE}v1780151754/yogher/instructorsgallery/uvvcdnycqssdkp3mxiis.png`,
    },
    {
      name: "Hejeebu",
      image: `${CLOUDINARY_BASE}v1780151251/yogher/instructorsgallery/swhz8oo5cnjjv22gndbz.png`,
    },
    {
      name: "Ithieeka",
      image: `${CLOUDINARY_BASE}v1780150085/yogher/instructorsgallery/psqm3mray7drt14e0zrv.png`,
    },
    {
      name: "Kashish",
      image: `${CLOUDINARY_BASE}v1780152356/yogher/instructorsgallery/gvnqngvosokr4jsctvyw.png`,
    },
    {
      name: "Lipakshi",
      image: `${CLOUDINARY_BASE}v1779189045/yogher/instructorsgallery/qb3yxknuqzwwk2nphelw.jpg`,
    },
    {
      name: "Neha",
      image: `${CLOUDINARY_BASE}v1779168146/yogher/instructorsgallery/wdr4kk6jlclmhiawx353.png`,
    },
    {
      name: "Pooja",
      image: `${CLOUDINARY_BASE}v1780149719/yogher/instructorsgallery/iunmzef0emt0ikdluhgm.png`,
    },
    {
      name: "Samruddhi",
      image: `${CLOUDINARY_BASE}v1779185210/yogher/instructorsgallery/fy0v9dcbv0ncf05vk9ns.png`,
    },
    {
      name: "Shivangi",
      image: `${CLOUDINARY_BASE}v1780150970/yogher/instructorsgallery/epsrwspvk16ks6hqlgxa.png`,
    },
    {
      name: "Shubhashini",
      image: `${CLOUDINARY_BASE}v1779258699/yogher/instructorsgallery/oqz7jobkbhnxpn7300gh.jpg`,
    },
    {
      name: "Neha (2)",
      image: `${CLOUDINARY_BASE}v1779168385/yogher/instructorsgallery/zxvz6srin2fjdeir5ph5.png`,
    },
  ] as CoachStripItem[],

  // Membership includes
  membership: `${CLOUDINARY_BASE}v1779168385/yogher/instructorsgallery/zxvz6srin2fjdeir5ph5.png`,

  // Journal
  journal: [
    {
      title: "The 10-Minute Hormone Reset (That Actually Works)",
      href: "https://yogher.in/blog/the-10-minute-hormone-reset-that-actually-works",
      image: `${CLOUDINARY_BASE}v1781618271/yogher/blogs/tkq7kwaqvydgllhxosm4.png`,
      excerpt: "Simple daily flows and breathwork to naturally balance cortisol, insulin and thyroid hormones.",
    },
    {
      title: "Yoga For Irregular Periods: What Actually Works",
      href: "https://yogher.in/blog/yoga-for-irregular-periods-what-actually-works",
      image: `${CLOUDINARY_BASE}v1781616511/yogher/blogs/bnh25qnglw2h5o0hq6qh.png`,
      excerpt: "How mindful yoga postures support ovarian circulation and restore a healthy cycle.",
    },
    {
      title: "5 Gentle Morning Poses for Energy and Mobility",
      href: "https://yogher.in/blog",
      image: `${CLOUDINARY_BASE}v1781617196/yogher/blogs/qn0gor1wawpdorye3jc0.png`,
      excerpt: "Awaken your spine, boost digestion, and start your day feeling centered and energized.",
    },
    {
      title: "Fat Loss Myths Most Women Still Believe",
      href: "https://yogher.in/blog/fat-loss-myths-most-women-still-believe",
      image: `${CLOUDINARY_BASE}v1781617566/yogher/blogs/pjcjyuwkxtcconly33th.png`,
      excerpt: "Why starving and endless cardio fail women, and how consistent daily yoga builds lasting tone.",
    },
  ] as JournalItem[],

  // YogHer Final CTA background
  yogherFinalCTA: `${CLOUDINARY_BASE}v1780149719/yogher/instructorsgallery/iunmzef0emt0ikdluhgm.png`,

  // GlowHer Hero coaches
  glowherHeroAvatars: [
    {
      name: "Manisha Chandani",
      src: `${CLOUDINARY_BASE}v1785862762/yogher/instructors/albytawz1le5e1u6f68k.png`,
    },
    {
      name: "Ithieeka",
      src: `${CLOUDINARY_BASE}v1780150081/yogher/instructors/zrsn3rkt41xfu72ysjwd.png`,
    },
  ],

  // GlowHer coach practice galleries
  glowherCoachGalleries: {
    manisha: [
      `${CLOUDINARY_BASE}v1785862763/yogher/instructorsgallery/kew28w8rvyi1u20pau6g.png`,
      `${CLOUDINARY_BASE}v1785862764/yogher/instructorsgallery/fxpzrudcpe3xfvr9tuhx.png`,
      `${CLOUDINARY_BASE}v1785862766/yogher/instructorsgallery/ljfmkj6kfbearmsjixrj.png`,
    ],
    ithieeka: [
      `${CLOUDINARY_BASE}v1780150084/yogher/instructorsgallery/pqemeacqpen7zbtc061x.png`,
      `${CLOUDINARY_BASE}v1780150085/yogher/instructorsgallery/psqm3mray7drt14e0zrv.png`,
      `${CLOUDINARY_BASE}v1780150090/yogher/instructorsgallery/cpdcmt8xesoqojp2stoi.png`,
    ],
  },

  // GlowHer Benefits photo
  glowherBenefits: `${CLOUDINARY_BASE}v1780150970/yogher/instructorsgallery/epsrwspvk16ks6hqlgxa.png`,

  // GlowHer Final CTA band background
  glowherFinalCTA: `${CLOUDINARY_BASE}v1780150961/yogher/instructorsgallery/mca07a6qrtx28iteqrsz.png`,
};

export const siteConfig = {
  phone: "+91 86792 44416",
  phoneRaw: "918679244416",
  yogherWhatsAppUrl: "https://wa.me/918679244416?text=Hi%20YogHer!%20I'd%20like%20to%20know%20more%20about%20your%20live%20yoga%20batches.",
  glowherWhatsAppUrl: "https://wa.me/918679244416?text=Hi%20GlowHer!%20I'd%20like%20to%20know%20more%20about%20your%20face%20yoga%20classes.",
  logoUrl: "/brand/yogher-logo.png",
};

export const yogherContent = {
  offerStrip: "3-Month Progress plan at 60% off this week. Limited seats in each batch.",
  hero: {
    chip: "Live online · Mon to Sat · 5 AM to 9 PM IST · Women only",
    h1: "Live yoga for Indian women, right from home.",
    sub: "Group online live classes for weight loss, PCOS, body toning, flexibility, stress relief and many more. Monday to Saturday online live sessions on Google Meet that fit around your schedule.",
    ctaPrimary: "See plans from ₹1,199",
    ctaPrimaryHref: "#plans",
    ctaSecondary: "Chat on WhatsApp",
    badgeSocial: "Joined by 5,000+ women across India and 12+ countries.",
  },
  stats: [
    { value: "5,000+", label: "women on the mat" },
    { value: "50K+", label: "live sessions taught" },
    { value: "Mon–Sat", label: "live class schedule" },
    { value: "12+", label: "countries served" },
  ],
  programs: [
    {
      title: "Weight Loss",
      description: "Sustainable weight loss with guided flows, core work and daily consistency.",
      image: IMAGES.programs.weightLoss,
    },
    {
      title: "Fat Loss",
      description: "Target stubborn areas and tone muscles with daily live yoga.",
      image: IMAGES.programs.fatLoss,
    },
    {
      title: "PCOS and Irregular Periods",
      description: "Gentle yoga flows designed to support hormonal balance and regular cycles.",
      image: IMAGES.programs.pcos,
    },
    {
      title: "Body Toning",
      description: "Sculpt and strengthen your entire body using mindful yoga flows.",
      image: IMAGES.programs.bodyToning,
    },
    {
      title: "Stress Relief and Fitness",
      description: "Decompress, release daily tension, improve mobility and sleep better.",
      image: IMAGES.programs.stressRelief,
    },
  ] as ProgramItem[],
  glowherCrossLink: {
    title: "Looking for Face Yoga? Meet GlowHer",
    description: "Our dedicated face yoga program, from ₹999.",
    cta: "Explore GlowHer",
    href: "/glowher",
    coachImage: IMAGES.programs.glowherCrossLink,
  },
  howItWorks: [
    {
      step: "01",
      title: "Share your focus area & fitness level",
      description: "Tell us your focus area and fitness level so that we can place you in the right group of batches.",
    },
    {
      step: "02",
      title: "Instant batch link after payment",
      description: "After payment, receive WhatsApp confirmation with your group joining link. Access 10+ batches throughout the day and start joining right away.",
    },
    {
      step: "03",
      title: "Personalised diet chart within 2–3 days",
      description: "Our team shares your diet chart Google form, and within 2 to 3 days you receive your personalised diet plan.",
    },
    {
      step: "04",
      title: "Build a lasting daily habit",
      description: "Daily live sessions with real-time posture corrections on Google Meet that fit seamlessly into your routine.",
    },
  ],
  coachStrip: IMAGES.coachStrip,
  membershipIncludes: [
    "All sessions live on Google Meet",
    "Join any batch, 5 AM to 9 PM IST (Monday to Saturday)",
    "Small batches for real-time coach attention",
    "10-minute daily doubt session with your teacher",
    "WhatsApp support from a fitness advisor",
  ],
  coaches: [
    {
      name: "Vishakha Khanvilkar",
      role: "Advanced Yoga and Strength",
      experience: "6+ yrs exp",
      image: `${CLOUDINARY_BASE}v1780150211/yogher/instructors/xnqpemantty4rgmdgtjv.png`,
      practiceImage: `${CLOUDINARY_BASE}v1780150216/yogher/instructorsgallery/wykni5lyqllujuyj7ehp.png`,
      initials: "VK",
    },
    {
      name: "Hema Chauhan",
      role: "Yoga Science and Wellness",
      experience: "4+ yrs exp",
      image: `${CLOUDINARY_BASE}v1780151489/yogher/instructors/kymmht50s8se9t99xr3y.png`,
      practiceImage: `${CLOUDINARY_BASE}v1780151495/yogher/instructorsgallery/mld7oc5rnnbvteiouxqk.png`,
      initials: "HC",
    },
    {
      name: "Neha Bisht",
      role: "PCOS, Hormonal Balance & Therapy",
      experience: "2+ yrs exp",
      image: `${CLOUDINARY_BASE}v1779168076/yogher/instructors/psdscr1pfyxao1dvt0fa.png`,
      practiceImage: `${CLOUDINARY_BASE}v1779168146/yogher/instructorsgallery/wdr4kk6jlclmhiawx353.png`,
      initials: "NB",
    },
    {
      name: "Shivangi Tyagi",
      role: "Weight Loss and Yoga Therapy",
      experience: "4+ yrs exp",
      image: `${CLOUDINARY_BASE}v1780150955/yogher/instructors/gd5c97pbeccn5ywqnmlm.png`,
      practiceImage: `${CLOUDINARY_BASE}v1780150970/yogher/instructorsgallery/epsrwspvk16ks6hqlgxa.png`,
      initials: "ST",
    },
    {
      name: "Amrita Singh Gautam",
      role: "Therapeutic & Restorative Yoga",
      experience: "2+ yrs exp",
      image: `${CLOUDINARY_BASE}v1779257165/yogher/instructors/kkpwspxlkmmw5hvcka2c.jpg`,
      practiceImage: `${CLOUDINARY_BASE}v1779257210/yogher/instructorsgallery/weovpbirmfbqu1rlwpsm.jpg`,
      initials: "AS",
    },
    {
      name: "Anisha Inroda",
      role: "Women's Wellness & Flexibility",
      experience: "4+ yrs exp",
      image: `${CLOUDINARY_BASE}v1780152079/yogher/instructors/wvoymemokjkv7z9gjwcd.png`,
      practiceImage: `${CLOUDINARY_BASE}v1780152083/yogher/instructorsgallery/zoesqezqjvufrfnezqbo.png`,
      initials: "AI",
    },
    {
      name: "Manisha Chandani",
      role: "Yoga & Face Yoga Instructor",
      experience: "PGDYT Yogkulam, practicing since 2018",
      image: `${CLOUDINARY_BASE}v1785862762/yogher/instructors/albytawz1le5e1u6f68k.png`,
      practiceImage: `${CLOUDINARY_BASE}v1785862764/yogher/instructorsgallery/fxpzrudcpe3xfvr9tuhx.png`,
      initials: "MC",
    },
    {
      name: "Ithieeka",
      role: "Yoga & Holistic Wellness Coach",
      experience: "PG in Yogic Science Pune, 3+ yrs exp",
      image: `${CLOUDINARY_BASE}v1780150081/yogher/instructors/zrsn3rkt41xfu72ysjwd.png`,
      practiceImage: `${CLOUDINARY_BASE}v1780150084/yogher/instructorsgallery/pqemeacqpen7zbtc061x.png`,
      initials: "IT",
    },
  ] as Coach[],
  testimonials: [
    {
      name: "Ritika",
      duration: "90-day transformation",
      quote: "YogHer helped me go from 78 kg to 68 kg with great support, motivation and consistency throughout my journey.",
      image: `${CLOUDINARY_BASE}v1779079881/yogher/testimonials/z7xbxn9cbv81pw7eyabg.jpg`,
      initials: "R",
    },
    {
      name: "Anika Gupta",
      duration: "60-day transformation",
      quote: "The guidance, motivation and support helped me stay consistent and build healthier habits in two months.",
      image: `${CLOUDINARY_BASE}v1779080713/yogher/testimonials/egmsyftd6whodutyrtcj.jpg`,
      initials: "AG",
    },
    {
      name: "Sneha Sharma",
      duration: "90-day transformation",
      quote: "YogHer helped me stay consistent. I finally feel healthier, more active and happy with myself.",
      image: `${CLOUDINARY_BASE}v1779081374/yogher/testimonials/fzmzlr8yf4rhitjy6j8q.jpg`,
      initials: "SS",
    },
  ] as Testimonial[],
  videoReviews: [
    {
      id: "vid-1",
      title: "Watch a Live Google Meet Yoga Session (Full Recording)",
      category: "Live Session Recording",
      duration: "Full Session",
      thumbnail: `${CLOUDINARY_BASE}v1779726637/Gemini_Generated_Image_f5wtff5wtff5wtff_lshpe6.png`,
      clientName: "Batch Session with Coach",
      quote: "See how our certified coaches correct posture live, interact with members, and guide breathwork.",
    },
    {
      id: "vid-2",
      title: "Ritika's 10 Kg Weight Loss & Habit Reset Review",
      category: "Client Review",
      duration: "Member Review",
      thumbnail: `${CLOUDINARY_BASE}v1779079881/yogher/testimonials/z7xbxn9cbv81pw7eyabg.jpg`,
      clientName: "Ritika (Lost 10 Kgs)",
      quote: "From 78 kg to 68 kg in 90 days. Daily live accountability changed everything.",
    },
    {
      id: "vid-3",
      title: "Anika on Building 60 Days of Non-Stop Yoga Practice",
      category: "Transformation Story",
      duration: "Member Review",
      thumbnail: `${CLOUDINARY_BASE}v1779080713/yogher/testimonials/egmsyftd6whodutyrtcj.jpg`,
      clientName: "Anika Gupta",
      quote: "Flexible batch timing made it possible to never miss a class around work and home.",
    },
  ] as VideoReview[],
  plansGroup: [
    {
      id: "group-1m",
      name: "1 Month Trial",
      price: "₹1,199",
      strikePrice: "₹2,000",
      duration: "/ 30 days",
      ctaText: "Start 1-Month Trial",
      ctaHref: "#diet",
      features: [
        "Daily live sessions (Mon to Sat)",
        "Nutrition and lifestyle guide",
        "10-min daily doubt session",
        "Women-only community",
        "WhatsApp support",
      ],
    },
    {
      id: "group-3m",
      name: "3 Months Progress",
      price: "₹2,399",
      strikePrice: "₹6,000",
      duration: "/ 90 days",
      popular: true,
      ctaText: "Get 60% off",
      ctaHref: "#trial",
      features: [
        "Daily live and recorded sessions",
        "Nutrition and lifestyle guide",
        "Cycle and wellness tracking",
        "Small batches for personal guidance",
        "Most popular among women",
      ],
    },
    {
      id: "group-6m",
      name: "6 Months Transformation",
      price: "₹3,599",
      strikePrice: "₹12,000",
      duration: "/ 180 days",
      ctaText: "Start Transformation",
      ctaHref: "#plans",
      features: [
        "Everything in 3 Months",
        "24x7 WhatsApp support",
        "Dedicated coach check-ins",
        "Hormonal balance protocols",
        "Best value per month",
      ],
    },
  ] as PricingPlan[],
  plansPersonal: {
    intro: "Your own certified trainer, your own fixed timing, nutrition and habit guidance, and a private support group. Classes Monday to Saturday.",
    sharedFeatures: [
      "Certified instructor as your dedicated trainer",
      "Your own timing, fixed for the month",
      "Nutrition & habit guidance",
      "Schedule by our head fitness advisor",
      "Classes Monday to Saturday",
      "Private support group with your teacher plus daily reminders",
    ],
    items: [
      {
        id: "p-1m",
        name: "1 Month Assessment and Foundation",
        price: "₹6,999",
        duration: "/ 30 days",
        ctaText: "Talk to a fitness advisor",
        ctaHref: "#trial",
      },
      {
        id: "p-3m",
        name: "3 Months Transformation Program",
        price: "₹16,999",
        duration: "/ 90 days",
        popular: true,
        ctaText: "Talk to a fitness advisor",
        ctaHref: "#trial",
      },
      {
        id: "p-6m",
        name: "6 Months Deep Transformation",
        price: "₹27,999",
        duration: "/ 180 days",
        ctaText: "Talk to a fitness advisor",
        ctaHref: "#trial",
      },
      {
        id: "p-12m",
        name: "12 Months Lifestyle Coaching",
        price: "₹47,999",
        duration: "/ 365 days",
        ctaText: "Talk to a fitness advisor",
        ctaHref: "#trial",
      },
    ] as PricingPlan[],
  },
  journal: IMAGES.journal,
  faqs: [
    {
      question: "I am a complete beginner. Can I join?",
      answer: "Absolutely. Over 70% of our members have never done yoga before. Our certified women coaches provide step-by-step guidance and gentle variations for every posture, ensuring you feel comfortable and confident from day one.",
    },
    {
      question: "How is YogHer different from a recorded yoga app?",
      answer: "YogHer is 100% live on Google Meet with two-way camera interaction. Your coach watches you in real-time, corrects your alignment, guides your breathing, and keeps you accountable every single day.",
    },
    {
      question: "Will the nutrition guidance require exotic ingredients or outside food?",
      answer: "No. Our nutrition and habit guidance is 100% built around simple, home-cooked Indian meals (ghar ka khana)—dal, roti, sabzi, curd, and seasonal fruits. We customize portion sizes and macro ratios for your specific goal without forcing exotic grocery shopping.",
    },
    {
      question: "What if I miss my scheduled live session?",
      answer: "Life happens. You can either jump into another batch on the same day (we run batches Monday to Saturday from 5 AM to 9 PM IST) or access the recorded session in your member portal within a few hours.",
    },
    {
      question: "What payment methods are supported?",
      answer: "We support all major Indian and international payment methods through secure Razorpay integration: UPI (GPay, PhonePe, Paytm), credit/debit cards, net banking, and digital wallets.",
    },
  ] as FaqItem[],
};

export const glowherContent = {
  hero: {
    chip: "Live face yoga · 30 minutes · Monday to Friday",
    h1: "Your natural glow, 30 minutes a day.",
    sub: "Live face yoga with certified women coaches. Lift and tone your facial muscles, release everyday tension, and build a glow routine that needs no products.",
    ctaPrimary: "Join from ₹999 a month",
    ctaPrimaryHref: "#pricing",
    ctaSecondary: "Chat on WhatsApp",
  },
  heroPhoto: undefined as HeroPhoto | undefined,
  quickFacts: [
    "30 min live session, Monday to Friday",
    "3 days Face Yoga + 2 days Ayurvedic Abhyanga",
    "6 batches between 5:30 AM and 8:30 PM IST",
    "Zero products or tools needed",
  ],
  benefits: [
    {
      title: "Lifted, toned look",
      description: "Lifted, toned look for cheeks, jawline and neck.",
    },
    {
      title: "Natural glow",
      description: "Natural glow from massage and movement, no creams or devices.",
    },
    {
      title: "Less tension",
      description: "Release forehead, jaw and eye tension from screens and stress.",
    },
    {
      title: "A routine that sticks",
      description: "A fixed batch and a coach who checks in.",
    },
  ],
  weeklyRhythm: [
    {
      day: "Monday",
      practice: "Face Yoga",
      title: "Lift & Tone",
      description: "Targeted facial exercises to tone underlying muscles, lift cheeks and jawline, and set a fresh, active tone for your week.",
      type: "face-yoga",
    },
    {
      day: "Tuesday",
      practice: "Abhyanga",
      title: "Upper Body Lymphatic Flow",
      description: "A warm-oil Ayurvedic self-massage for neck, shoulders, arms and upper back — easing tension and supporting lymphatic flow toward the face.",
      type: "abhyanga",
    },
    {
      day: "Wednesday",
      practice: "Face Yoga",
      title: "Symmetry & Glow",
      description: "Mid-week practice to reinforce muscle memory — continued work on facial symmetry, dark circles and skin dullness.",
      type: "face-yoga",
    },
    {
      day: "Thursday",
      practice: "Abhyanga",
      title: "Lower Body Grounding",
      description: "Warm-oil massage for legs and feet, grounding the nervous system and supporting overall circulation and recovery.",
      type: "abhyanga",
    },
    {
      day: "Friday",
      practice: "Face Yoga",
      title: "Full Facial Flow & Weekend Glow",
      description: "Closing the week with a full facial routine — leaving you glowing and refreshed heading into the weekend.",
      type: "face-yoga",
    },
  ] as WeeklyDayItem[],
  sessionBreakdown: [
    {
      duration: "5 min",
      title: "Warm-up",
      description: "Gentle neck releases, acupressure awakening and rhythmic breathing.",
    },
    {
      duration: "15 min",
      title: "Face workout",
      description: "Targeted resistance exercises for forehead, eyes, cheeks, jawline and neck firming.",
    },
    {
      duration: "10 min",
      title: "Massage and release",
      description: "Lymphatic drainage and acupressure massage to release tension and boost circulation.",
    },
  ] as SessionStep[],
  coaches: [
    {
      name: "Manisha Chandani",
      role: "Face Yoga certified by Yoga Alliance",
      experience: "PGDYT Yogkulam, practising since 2018",
      image: `${CLOUDINARY_BASE}v1785862762/yogher/instructors/albytawz1le5e1u6f68k.png`,
      initials: "MC",
      gallery: IMAGES.glowherCoachGalleries.manisha,
    },
    {
      name: "Ithieeka",
      role: "Internationally certified in Face Yoga",
      experience: "PG in Yogic Science Pune, 3+ years",
      image: `${CLOUDINARY_BASE}v1780150081/yogher/instructors/zrsn3rkt41xfu72ysjwd.png`,
      initials: "IT",
      gallery: IMAGES.glowherCoachGalleries.ithieeka,
    },
  ] as Coach[],
  transformations: [
    {
      id: "t-21-days",
      title: "21-Day Transformation",
      duration: "21 Days of Practice",
      focus: "Visible facial lift & natural radiance",
      image: "/images/transformations/face-yoga-21-days.jpg",
      quote: "Consistent practice of just 21 days can be this impactful.",
    },
    {
      id: "t-30-days",
      title: "30-Day Face Yoga Magic",
      duration: "30 Days of Practice",
      focus: "Cheek contouring & defined jawline",
      image: "/images/transformations/face-yoga-30-days.jpg",
      quote: "Face yoga magic in just 30 days.",
    },
    {
      id: "t-double-chin",
      title: "Double Chin & Dark Circles",
      duration: "Targeted Results",
      focus: "Under-eye drainage & chin firming",
      image: "/images/transformations/double-chin-dark-circles.jpg",
      quote: "Noticeable under-eye drainage and sculpted chin line.",
    },
    {
      id: "t-jawline",
      title: "Jawline Improvement",
      duration: "Consistent Practice",
      focus: "Sharper jawline & reduced puffiness",
      image: "/images/transformations/jawline-improvement.jpg",
      quote: "Definite sharpening and posture alignment along the jaw.",
    },
    {
      id: "t-1-month-profile",
      title: "1-Month Profile Contouring",
      duration: "1 Month of Practice",
      focus: "Profile shaping & double chin reduction",
      image: "/images/transformations/face-yoga-1-month-profile.jpg",
      quote: "Progress of just a month's practice.",
    },
    {
      id: "t-smile-lift",
      title: "Cheek Lift & Symmetry",
      duration: "Consistent Sessions",
      focus: "Cheek definition & youthful glow",
      image: "/images/transformations/face-yoga-smile-lift.jpg",
      quote: "Cheeks visibly lifted and complexion refreshed.",
    },
    {
      id: "t-chat-review",
      title: "Asymmetrical Face & Acne Recovery",
      duration: "20 Days of Practice",
      focus: "Facial symmetry, lifted cheeks & faded dullness",
      image: "/images/transformations/client-whatsapp-review.jpg",
      quote: "Before starting her sessions, she had an asymmetrical face along with acne and dullness. After practicing consistently, she noticed a visible glow, lifted cheeks, a more defined jawline, and her original skin tone returning as dullness faded — with much improved facial symmetry.",
    },
  ] as TransformationItem[],
  downloads: [
    {
      title: "Face Yoga & Self-Care Journey Guide",
      pages: "9 Pages (PDF)",
      description: "Complete weekly rhythm, facial lifting movements, client transformations, and daily practice guidance.",
      filename: "YogHer-Face-Yoga-Client-Guide.pdf",
      fileUrl: "/downloads/YogHer-Face-Yoga-Client-Guide.pdf",
      fileSize: "1.0 MB",
    },
    {
      title: "Understanding Abhyanga Guide",
      pages: "4 Pages (PDF)",
      description: "Gentle guide to the Ayurvedic self-massage behind your Tuesday and Thursday sessions for lymphatic drainage and stress relief.",
      filename: "Abhyanga-YogHer-Understanding.pdf",
      fileUrl: "/downloads/Abhyanga-YogHer-Understanding.pdf",
      fileSize: "300 KB",
    },
  ] as DownloadItem[],
  faceYogaPhotos: [] as FaceYogaPhoto[],
  testimonials: [] as Testimonial[],
  sharedFeatures: [
    "30-minute live sessions",
    "6 batch options, 5:30 AM to 8:30 PM",
    "Monday to Friday classes",
    "Custom timing on request",
    "WhatsApp support",
  ],
  plans: [
    {
      id: "glow-1m",
      name: "1 Month Trial",
      price: "₹999",
      duration: "/ 30 days",
      ctaText: "Start 1-Month Trial",
      ctaHref: "#diet",
    },
    {
      id: "glow-3m",
      name: "3 Months Progress",
      price: "₹1,999",
      duration: "/ 90 days",
      popular: true,
      monthlyNote: "About ₹666 a month",
      ctaText: "Join Most Popular",
      ctaHref: "#trial",
    },
    {
      id: "glow-6m",
      name: "6 Months Transformation",
      price: "₹2,999",
      duration: "/ 180 days",
      monthlyNote: "About ₹500 a month",
      ctaText: "Start Transformation",
      ctaHref: "#trial",
    },
  ] as PricingPlan[],
  faqs: [
    {
      question: "When will I see a difference?",
      answer: "Most members notice reduced puffiness, improved glow, and relaxed facial muscles within the first 10–14 days of consistent practice. Visible muscle toning, cheek contouring, and neck firming typically appear around 4–6 weeks.",
    },
    {
      question: "Do I need products or tools?",
      answer: "No. You don't need jade rollers, gua sha stones, or expensive creams. All exercises use only your clean hands and facial resistance. You can apply a few drops of your everyday moisturizer or face oil for smooth gliding during the final massage.",
    },
    {
      question: "What if no batch timing suits me?",
      answer: "We run 6 batches throughout the day from 5:30 AM to 8:30 PM IST. If you have unique timing constraints, simply message our team on WhatsApp, and we will assist you in finding an accommodating slot or alternative.",
    },
    {
      question: "Can I combine with full-body live yoga?",
      answer: "Yes, many women pair face yoga with YogHer's full-body live yoga for complete physical and facial fitness. Contact our team on WhatsApp for discounted combination packages.",
    },
  ] as FaqItem[],
};
