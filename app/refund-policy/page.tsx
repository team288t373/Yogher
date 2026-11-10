import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RefundPolicyPage() {
  return (
    <>
      <Header brand="yogher" />
      <main className="flex-1 max-w-[800px] mx-auto px-4 sm:px-6 py-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-bordeaux mb-4">
          Refund Policy
        </h1>
        <p className="text-muted text-base mb-8">
          Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
        </p>
        <div className="bg-white p-8 rounded-card border border-cotton shadow-sm space-y-4 text-bordeaux/90 leading-relaxed">
          <p>
            We strive to provide the most personalized, attentive live yoga and face yoga experience for all members.
          </p>
          <p className="font-semibold text-bordeaux">
            Detailed formal refund and cancellation policy document is coming soon.
          </p>
          <p className="text-sm text-muted">
            If you need to adjust your batch timings, pause your membership due to medical reasons, or discuss your plan, message us directly at{" "}
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
