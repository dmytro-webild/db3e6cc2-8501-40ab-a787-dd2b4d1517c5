"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSmall"
        background="blurBottom"
        cardStyle="gradient-bordered"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="GreenEdge Lawn Care"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Affordable Lawn Care You Can Trust"
      description="Professional, reliable, and friendly grass cutting services for your suburban home. Let two hardworking students take care of your lawn this summer."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/happy-young-male-watering-domestic-plant-leaves-indoor_496169-1382.jpg",
          alt: "GreenEdge Team",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pretty-woman-cute-clothes-reaching-plants-greenhouse_197531-12328.jpg",
          alt: "GreenEdge Member 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/boy-together-beautiful-college-smiling_1150-1659.jpg",
          alt: "GreenEdge Member 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-handsome-cheerful-gardener-smiling-posing-plants-flowers_176420-3826.jpg",
          alt: "GreenEdge Member 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/women-working-greenhouse-with-flowerpots_1157-30885.jpg",
          alt: "GreenEdge Member 5",
        },
      ]}
      buttons={[
        {
          text: "Get a Free Estimate",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",
          text: "Locally Owned",
        },
        {
          type: "text",
          text: "Fast Turnaround",
        },
        {
          type: "text",
          text: "Professional Tools",
        },
        {
          type: "text",
          text: "Competitive Prices",
        },
        {
          type: "text",
          text: "Reliable Service",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Our Services"
      description="We offer high-quality, professional lawn maintenance to keep your property looking its best year-round."
      accordionItems={[
        {
          id: "svc1",
          title: "Lawn Mowing",
          content: "Precision cutting for all lawn sizes, ensuring an even, healthy look for your grass.",
        },
        {
          id: "svc2",
          title: "Edging",
          content: "Crisp, clean lines for walkways, flowerbeds, and driveways to give your yard a professional finish.",
        },
        {
          id: "svc3",
          title: "Weed Whacking",
          content: "Careful trimming in hard-to-reach areas like fences, trees, and poles for a complete, tidy appearance.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/pleased-young-female-gardener-uniform-wearing-gardening-hat-gloves-holds-looks-clippers_141793-70932.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      plans={[
        {
          id: "p1",
          badge: "Standard",
          price: "$50",
          subtitle: "Small to Medium Lawns",
          features: [
            "Mowing",
            "Basic Edging",
          ],
        },
        {
          id: "p2",
          badge: "Popular",
          price: "$60",
          subtitle: "Average suburban yards",
          features: [
            "Mowing",
            "Precision Edging",
            "Weed Whacking",
          ],
        },
        {
          id: "p3",
          badge: "Custom",
          price: "$70+",
          subtitle: "Larger properties",
          features: [
            "Comprehensive Full Service",
            "Custom Scheduling",
          ],
        },
      ]}
      title="Transparent Pricing"
      description="Affordable and flexible rates. Contact us for a personalized estimate based on your specific property size."
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="Student-Run, Quality-Driven"
      description="We are a pair of local students dedicated to hard work and reliability. GreenEdge Lawn Care was started to provide homeowners in our neighborhood with a stress-free, professional service they can trust."
      subdescription="Summer jobs taught us the value of attention to detail and customer satisfaction. We treat every lawn like our own."
      icon={Users}
      imageSrc="http://img.b2bpic.net/free-photo/women-working-greenhouse-with-flowerpots_1157-30887.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="why-us" data-section="why-us">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Why Choose Us?"
      tag="The GreenEdge Promise"
      metrics={[
        {
          id: "m1",
          value: "100%",
          description: "Reliable & Punctual",
        },
        {
          id: "m2",
          value: "Local",
          description: "Community Focused",
        },
        {
          id: "m3",
          value: "Hard",
          description: "Working Students",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Great Service",
          quote: "Reliable and fast! My lawn has never looked better.",
          name: "Jane D.",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-attractive-young-man-walking-street-with-backpack-his-shoulders_58466-16223.jpg",
        },
        {
          id: "2",
          title: "Highly Recommended",
          quote: "The team was very polite and thorough. Excellent edging.",
          name: "Robert S.",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/half-body-shot-smiling-hairdresser-wearing-gray-apron-holding-scissors-spray-bottle-pastel-blue-color-background_140725-155123.jpg",
        },
        {
          id: "3",
          title: "Perfect Finish",
          quote: "Super impressed by their weed whacking skills. Everything is so tidy.",
          name: "Maria L.",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-view-old-woman-looking-away_23-2148231816.jpg",
        },
        {
          id: "4",
          title: "Excellent Quality",
          quote: "It is great to support local students who do a top-notch job.",
          name: "Tom K.",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-black-woman-caucasian-guy-have-outdoor-walk-stand-closely_273609-18072.jpg",
        },
        {
          id: "5",
          title: "Very Professional",
          quote: "Showed up on time, got the job done, and cleaned up beautifully.",
          name: "Sarah W.",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-tablet-park-looking-camera_23-2147779715.jpg",
        },
      ]}
      title="Happy Neighbors"
      description="Hear what our local clients have to say about our lawn care services."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "rotated-rays-static",
      }}
      text="Ready to get a fresh lawn? Request a free estimate today by contacting us via email or phone. We look forward to hearing from you!\n\nEmail: hello@greenedgelawncare.com\nPhone: (555) 012-3456"
      buttons={[
        {
          text: "Contact Us",
          href: "mailto:hello@greenedgelawncare.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="GreenEdge Lawn Care"
      copyrightText="© 2025 | GreenEdge Lawn Care"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
