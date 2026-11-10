import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header brand="yogher" />
      <main className="flex-1 max-w-[800px] mx-auto px-4 sm:px-6 py-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-bordeaux mb-4">
          Terms of Service
        </h1>
        <p className="text-muted text-base mb-8">
          Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
        </p>
        <div className="bg-white p-8 rounded-card border border-cotton shadow-sm space-y-4 text-bordeaux/90 leading-relaxed">
          <p>
            Welcome to YogHer. By accessing our live Google Meet sessions, receiving our diet plans, or booking any class memberships, you agree to our terms of conduct, schedule policies, and wellness guidelines.
          </p>
          <p className="font-semibold text-bordeaux">
            Detailed formal terms of service are coming soon.
          </p>
          <p className="text-sm text-muted">
            For urgent assistance or questions about your membership, reach our team via WhatsApp at{" "}
            <a href="https://wa.me/919457592078" className="font-bold underline text-bordeaux">
              +91 94575 92078
            </a>.
          </p>
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-bordeaux hover:underline"
            >
              <span>← Back to YogHer Home</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer brand="yogher" />
    </>
  );
}
