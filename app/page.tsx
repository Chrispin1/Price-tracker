import { Button } from "@/components/ui/button";
import { Bell, LogIn, Rabbit, Shield } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const user = null;

  const products = [];

  const FEATURES = [
    {
      icon: Rabbit,
      title: "Lightning Fast",
      description:
        "Deal Drop extracts prices in seconds, handling JavaScript and dynamic content",
    },
    {
      icon: Shield,
      title: "Always Reliable",
      description:
        "Works across all major e-commerce sites with built-in anti-bot protection",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified instantly when prices drop below your target",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 top-0 sticky z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/deal-drop-logo.png"
              alt="logo"
              height={600}
              width={600}
              className="h-10 w-auto"
            />
          </div>
          <Button
            className="bg-orange-500 hover:orange-600 gap-3 cursor-pointer"
            variant="default"
            size="sm"
          >
            <LogIn />
            Sign In
          </Button>
        </div>
      </header>

      {/* hero section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex rounded-full bg-orange-100 text-orange-700 px-6 py-2 items-center text-sm font-medium mb-6">
            Made with ❤️ by Xtra
          </div>

          <h2 className="font-bold text-5xl text-gray-900 tracking-tight mb-4">
            Never miss a price drop
          </h2>

          <p className="max-w-2xl mb-12 mx-auto text-xl text-gray-600">
            Track prices from any ecommerce platform. Get alerts when prices
            drop and save money instantly!
          </p>

          {/* products */}

          {/* features */}
          {products.length === 0 && (
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
              {FEATURES.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-gray-200 p-6 bg-white"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
