"use client"

import { motion } from "framer-motion"
import { Github, GitBranch, Star, GitCommit } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { icon: GitBranch, label: "Repositories", value: "15+" },
  { icon: Star, label: "Stars", value: "50+" },
  { icon: GitCommit, label: "Contributions", value: "200+" },
]

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
            <span className="gradient-text">GitHub</span> Activity
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center glow-primary-hover"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card border border-border text-center"
          >
            <Github className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Explore My Code
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Check out my GitHub profile to see my latest projects, contributions, and open-source work in AI and machine learning.
            </p>
            <Button
              size="lg"
              className="glow-primary-hover"
              asChild
            >
              <a href="https://github.com/iradhika787" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Visit GitHub Profile
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
