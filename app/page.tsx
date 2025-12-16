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
    </main>
  );
}
