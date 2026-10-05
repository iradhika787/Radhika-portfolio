"use client"

import { motion } from "framer-motion"
import { Download, FileText, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const experience = [
  {
    title: "AI/ML Research",
    description: "Published research in International Journal of Science and Technology",
    icon: FileText,
  },
  {
    title: "Project Development",
    description: "Built 4+ AI/ML applications including violence detection & healthcare AI",
    icon: Briefcase,
  },
  {
    title: "B.Tech CSE (AI & ML)",
    description: "Sreyas Institute of Engineering and Technology | CGPA: 8.64",
    icon: GraduationCap,
  },
]

export function Resume() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {experience.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border border-border text-center"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-8 md:p-12 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Get My Full Resume
              </h3>
              
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Download my complete resume to learn more about my education, experience, projects, and technical skills in AI and machine learning.
              </p>
              
              <Button
                size="lg"
                className="glow-primary-hover"
                asChild
              >
                <a href="/resume.pdf" download="Baigaru_Radhika_Resume.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume (PDF)
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
