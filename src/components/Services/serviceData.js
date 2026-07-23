import {
  Search,
  MousePointerClick,
  Globe,
  MapPinned,
  Megaphone,
  PenTool,
  Cpu,
  Palette,
} from "lucide-react";

const serviceData = [
  {
    id: 1,
    title: "Website Development",
    slug: "website-development",
    description: "Modern, responsive websites that convert visitors into customers. We build scalable digital experiences.",
    icon: Globe,
  },
  {
    id: 2,
    title: "SEO Services",
    slug: "seo-services",
    description: "Rank higher, get more traffic and grow your business with our data-driven search engine optimization strategies.",
    icon: Search,
  },
  {
    id: 3,
    title: "Google Ads",
    slug: "google-ads",
    description: "High-converting ads that deliver maximum ROI. Targeted campaigns to capture your ideal audience instantly.",
    icon: MousePointerClick,
  },
  {
    id: 4,
    title: "Meta Ads",
    slug: "meta-ads",
    description: "Reach your audience and grow with Facebook & Instagram ads. Build brand awareness and drive sales.",
    icon: Megaphone,
  },
  {
    id: 5,
    title: "AI Marketing Solutions",
    slug: "ai-marketing-solutions",
    description: "AI-powered marketing strategies for smart business growth. Automate tasks and personalize customer journeys.",
    icon: Cpu,
  },
  {
    id: 6,
    title: "Branding & Design",
    slug: "branding-design",
    description: "Build a strong brand identity that stands out. From logos to visual guidelines, we craft memorable brands.",
    icon: Palette,
  },
  {
    id: 7,
    title: "Graphic Design",
    slug: "graphic-design",
    description: "Creative designs that communicate your brand. Eye-catching visuals for social media, print, and digital.",
    icon: PenTool,
  },
  {
    id: 8,
    title: "Content Creation",
    slug: "content-creation",
    description: "Engaging content that attracts and converts. We write compelling copy, articles, and video scripts.",
    icon: MapPinned,
  },
];

export default serviceData;