"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />

          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm currently seeking AI/ML internship opportunities, research collaborations,
            and exciting projects. If you believe I'd be a good fit for your team,
            I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-lg">

            <Mail className="w-14 h-14 text-primary mx-auto mb-6" />

            <h3 className="text-2xl font-bold mb-3">
              Let's Connect
            </h3>

            <p className="text-muted-foreground mb-8">
              Whether you have an internship opportunity, research collaboration,
              freelance project, or simply want to connect, feel free to reach out.
            </p>

            <div className="flex items-center justify-center gap-3 mb-10">
              <Mail className="w-5 h-5 text-primary" />
              <a
                href="mailto:radhikabaigaru1918@gmail.com"
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                radhikabaigaru1918@gmail.com
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">

              <Button size="lg" asChild className="glow-primary-hover">
                <a href="mailto:radhikabaigaru1918@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/baigaru-radhika"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://github.com/iradhika787"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>

            </div>

            <div className="mt-10 pt-8 border-t border-border">

              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Hyderabad, Telangana, India
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}