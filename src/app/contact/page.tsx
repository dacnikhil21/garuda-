import type { Metadata } from "next";
import { ContactClient } from "@/components/contact/contact-client";

export const metadata: Metadata = {
  title: "Contact Us | Trade Inquiries & Orders",
  description: "Get in touch with Garuda Global Exports for trade inquiries, custom packaging quotes, and international shipping rates for Indian agricultural produce.",
  alternates: {
    canonical: "https://garudaglobalexports.co.in/contact",
  },
  openGraph: {
    title: "Contact Garuda Global Exports",
    description: "Connect with our agricultural export specialists for bulk orders, price quotes, and global logistics options.",
    url: "https://garudaglobalexports.co.in/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
