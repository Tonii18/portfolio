import ContactHero from "./components/contact-hero";
import Form from "./components/form";
import Socials from "./components/socials";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact me",
    description: "Get in touch with me and let's discuss about your ideas",
}

export default function ContactMe() {
    return (
        <main>
           <ContactHero/>
           <Form/>
           <Socials/>
        </main>
    );
}