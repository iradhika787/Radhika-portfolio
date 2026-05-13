"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, ExternalLink, Calendar, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type CategoryTag = "AI/ML" | "Cloud AI" | "Data Science" | "Programming" | "Professional Skills" | "Research"

interface Certification {
  title: string
  issuer: string
  date: string
  tag: CategoryTag
  verificationLink: string
}

const certifications: Certification[] = [
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    date: "March 2026",
    tag: "Data Science",
    verificationLink: "https://drive.google.com/file/d/1ddPl-YSx9_VjiVKOyAkHslqhA8FM8OTi/view",
  },
  {
    title: "Google Student Ambassador",
    issuer: "Google Gemini",
    date: "Dec 2025",
    tag: "AI/ML",
    verificationLink: "https://drive.google.com/file/d/1rXDvC-pl0G1y0Ss0RjDBBuHQJPflXAv1/view",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Dec 2025",
    tag: "AI/ML",
    verificationLink: "https://drive.google.com/file/d/1kFneb9XcQU7KP0VIbBV0c58ebgWhwvv6/view",
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "Apr 2025",
    tag: "Programming",
    verificationLink: "https://drive.google.com/file/d/1AHzX9xlRNGrPlv3qf4oU0sEXsN0DKdz9/view",
  },
  {
    title: "Research Publication – Medibot",
    issuer: "International Journal of Science and Technology",
    date: "May 2025",
    tag: "Research",
    verificationLink: "https://drive.google.com/file/d/1VP1uDXFwVAdlIMgGzB0MO6CBrazcm93W/view",
  },
  {
    title: "TATA GenAI Data Analytics",
    issuer: "Forage",
    date: "Jul 2025",
    tag: "AI/ML",
    verificationLink: "https://drive.google.com/file/d/1bYHPlSEQUz50UT-GNOQz_lzmsi6S4LUY/view",
  },
  {
    title: "Deloitte Technology Job Simulation",
    issuer: "Forage",
    date: "Jul 2025",
    tag: "Professional Skills",
    verificationLink: "https://drive.google.com/file/d/1g5yOFWgO8QatU0GzK3uS4pl0DLCzdYGZ/view",
  },
  {
    title: "Innovating with Google Cloud AI",
    issuer: "Google",
    date: "Apr 2025",
    tag: "Cloud AI",
    verificationLink: "https://drive.google.com/file/d/15vKIQQievhJpdO6QcAdQLoAdYgCNnEiG/view",
  },
  {
    title: "Introduction to Soft Skills",
    issuer: "TCS iON",
    date: "Jul 2025",
    tag: "Professional Skills",
    verificationLink: "https://drive.google.com/file/d/1BYTqf4xEnVXp48q1zcFNGWD60U0GrDcM/view",
  },
]

const categoryColors: Record<CategoryTag, string> = {
  "AI/ML": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "Cloud AI": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Data Science": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "Programming": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "Professional Skills": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "Research": "bg-rose-500/20 text-rose-400 border-rose-500/30",
}

const issuerLogos: Record<string, string> = {
  "NPTEL": "N",
  "Google Gemini": "G",
  "Google": "G",
  "IBM SkillsBuild": "IBM",
  "TCS iON": "TCS",
  "Forage": "F",
  "International Journal of Science and Technology": "IJ",
}

const allTags: CategoryTag[] = ["AI/ML", "Cloud AI", "Data Science", "Programming", "Professional Skills", "Research"]

export function Certifications() {
  const [activeFilter, setActiveFilter] = useState<CategoryTag | "All">("All")

  const filteredCertifications = activeFilter === "All" 
    ? certifications 
    : certifications.filter(cert => cert.tag === activeFilter)

  return (
    <section id="certifications" className="py-24 relative bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Certifications & Credentials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Professional certifications and achievements validating expertise in AI, ML, and software development
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveFilter("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeFilter === "All"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-secondary/50 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === tag
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary/50 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Certification Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
              layout
            >
              <div className="relative h-full rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                  <div className="absolute -inset-px bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-2xl" />
                </div>

                <div className="relative p-6 flex flex-col h-full">
                  {/* Header with Logo and Tag */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">
                        {issuerLogos[cert.issuer] || <Award className="w-5 h-5" />}
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[cert.tag]}`}>
                      {cert.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Building2 className="w-4 h-4 text-primary/70" />
                    <span className="text-sm">{cert.issuer}</span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-muted-foreground mb-6">
                    <Calendar className="w-4 h-4 text-primary/70" />
                    <span className="text-sm">{cert.date}</span>
                  </div>

                  {/* Spacer */}
                  <div className="flex-grow" />

                  {/* View Certificate Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 group/btn transition-all duration-300"
                    asChild
                  >
                    <a
                      href={cert.verificationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Certifications", value: "9+" },
            { label: "Platforms", value: "6+" },
            { label: "Research Papers", value: "1" },
            { label: "Elite Badges", value: "2" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-secondary/30 border border-border/50"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
