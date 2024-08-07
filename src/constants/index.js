import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  karl,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "UX/UI Design",
    url: "#ux-ui-design",
  },
  {
    id: "3",
    title: "Inside Scoop",
    url: "#inside-scoop",
  },
  {
    id: "5",
    title: "Contact Us",
    url: "#contact-us",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo];

export const brainwaveServices = ["Research", "Wireframes", "Prototypes"];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Generative Ai Development",
    text: "Build generative AI-powered apps and chatbots.",
    date: "June 2024",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "App Development",
    text: "Develop and deploy applications on the web.",
    date: "June 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
];

export const collabText =
  "Our process ensures seamless integration, intuitive design, and robust security, bringing your vision to life with precision.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Intuitive Design",
  },
  {
    id: "2",
    title: "Robust Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Regular",
    description: "5 Page Website or 1 Scrollable Website with 5 Sections",
    price: "2597",
    url: "https://paystack.com/pay/snowcrystal-regular",
    features: [
      "UI Design",
      "Free Stock Images/Videos",
      "Mobile Responsive",
      "Technical SEO",
      "Custom Contact Form",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "13 Page Website or 1 Scrollable Website with 13 Sections",
    price: "5397",
    url: "https://paystack.com/pay/snowcrystal-premium",
    features: [
      "Everything in Regular Plus:",
      "6-13 Pages",
      "Google My Business",
      "Analytics",
      "On-page SEO",
      "WhatsApp Chat",
    ],
  },
  {
    id: "2",
    title: "Custom",
    description: "Custom webapp or website with unique features",
    price: null,
    features: [
      "Everything in Premium Plus:",
      "Custom Pictures/Videos",
      "API Integrations",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "User-Centric Design",
    text: "Personalize your website for each user's preferences and ensure it's accessible to everyone, enhancing engagement and satisfaction.",
    backgroundUrl: "/src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Intuitive Navigation",
    text: "Create a logical content structure and consistent navigation to make it easy for users to find what they need quickly.",
    backgroundUrl: "/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Engaging Visual Design",
    text: "Design a visually appealing and responsive website that looks great on any device, perfectly reflecting your brand.",
    backgroundUrl: "/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast Load Times",
    text: "Optimize your site to load quickly, keeping visitors engaged and reducing bounce rates.",
    backgroundUrl: "/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Interactive & Dynamic Elements",
    text: "Add engaging elements like videos and animations to make your site memorable and interactive",
    backgroundUrl: "/assets/benefits/card-5.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Clear & Compelling Call-to-Actions",
    text: "Place clear, persuasive CTAs strategically to guide visitors towards desired actions and boost engagement.",
    backgroundUrl: "/assets/benefits/card-6.svg",
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const testimonials = [
  {
    name: "Karl Abrahams",
    role: "Business Coach",
    message:
      "Customer service is rated 5 stars in my book, always following up and provides best solutions and strategies, also best tech support ever. They built a user friendly website of which my customers and potential customers enjoy using. I have also experienced an increase in my client base, via the contact form built into my contact page. graphics and visuals are next level. Everyone in my network contacted me the same day my website went live, all of them are interested in a website or upgrading their current website. Thank you Snowcrystal for building a powerful  and great looking website, the website is beyond my expectations, I am very happy with the results. By building me this powerful website you took my brand and business to the next level.",
    image: karl,
  },
];
