"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GithubSection() {
  return (
    <section id="github" className="py-24 relative bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">GitHub</span> Profile
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card border border-border text-center"
          >
            <Github className="w-16 h-16 text-primary mx-auto mb-6" />

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Explore My GitHub
            </h3>

            <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-7">
              Explore my GitHub profile to view AI & Machine Learning projects,
              source code, and ongoing work in Computer Vision, Natural Language
              Processing, and intelligent application development.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="glow-primary-hover"
                asChild
              >
                <a
                  href="https://github.com/iradhika787"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Visit GitHub Profile
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a
                  href="https://github.com/iradhika787?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View All Projects
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}