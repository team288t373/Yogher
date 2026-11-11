export interface Coach {
  name: string;
  role: string;
  experience: string;
  bio?: string;
  image: string;
  initials: string;
  practiceImage?: string;
  gallery?: string[];
}

export interface WeeklyDayItem {
  day: string;
  practice: string;
  title: string;
  description: string;
  type: "face-yoga" | "abhyanga";
}

export interface TransformationItem {
  id: string;
  title: string;
  duration: string;
  focus: string;
  image: string;
  quote?: string;
}

export interface DownloadItem {
  title: string;
  pages: string;
  description: string;
  filename: string;
  fileUrl: string;
  fileSize: string;
}

export interface Testimonial {
  name: string;
  duration: string;
  quote: string;
  image: string;
  initials: string;
}

export interface VideoReview {
  id: string;
  title: string;
  category: "Client Review" | "Live Session Recording" | "Transformation Story";
  duration: string;
  thumbnail: string;
  youtubeId?: string;
  clientName: string;
  quote?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  strikePrice?: string;
  popular?: boolean;
  duration?: string;
  monthlyNote?: string;
  ctaText: string;
  ctaHref: string;
  features?: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProgramItem {
  title: string;
  description: string;
  image: string;
  tag?: string;
}

export interface SessionStep {
  duration: string;
  title: string;
  description: string;
}

export interface JournalItem {
  title: string;
  href: string;
  image: string;
  excerpt: string;
}

export interface CoachStripItem {
  name: string;
  image: string;
}

export interface FaceYogaPhoto {
  src: string;
  alt: string;
}

export interface HeroPhoto {
  src: string;
  alt: string;
}
