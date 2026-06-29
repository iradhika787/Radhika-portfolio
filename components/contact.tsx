"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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
            Interested in collaborating on AI/ML projects, discussing internship
            opportunities, or exploring innovative ideas? I'd be happy to
            connect and will respond as soon as possible.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              Let's Connect
            </h3>

            <p className="text-muted-foreground mb-8">
              Currently open to AI/ML internship opportunities, research
              collaborations, freelance projects, and technical discussions.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Email</p>

                  <a
                    href="mailto:radhikabaigaru1918@gmail.com"
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  >
                    radhikabaigaru1918@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Location</p>

                  <p className="text-foreground">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/iradhika787"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/baigaru-radhika"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:radhikabaigaru1918@gmail.com"
                className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              action="https://formsubmit.co/radhikabaigaru1918@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* Hidden Inputs */}
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact - Baigaru Radhika"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_next"
                value="https://radhika-portfolio-8ypn.vercel.app/"
              />

              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for reaching out! I have received your message and will get back to you as soon as possible. - Baigaru Radhika"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>

                  <Input
                    id="name"
                    name="Name"
                    required
                    placeholder="Your name"
                    className="bg-card border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>

                  <Input
                    id="email"
                    name="Email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>

                <Input
                  id="subject"
                  name="Subject"
                  required
                  placeholder="What's this about?"
                  className="bg-card border-border focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>

                <Textarea
                  id="message"
                  name="Message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full glow-primary-hover"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}