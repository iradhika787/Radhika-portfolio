"use client"

import { motion } from "framer-motion"
import { Brain, Eye, MessageSquare, Cpu } from "lucide-react"

const highlights = [
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Building visual AI systems for real-time detection and analysis",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Developing intelligent language understanding applications",
  },
  {
    icon: Cpu,
    title: "Edge AI",
    description: "Optimizing AI models for deployment on edge devices",
  },
  {
    icon: Brain,
    title: "Deep Learning",
    description: "Architecting neural networks for complex problem solving",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              AI & ML-focused Computer Science undergraduate at Sreyas Institute of Engineering and Technology, Hyderabad (CGPA: 8.64, Expected Graduation: 2027). Seeking hands-on industry experience to apply technical knowledge and contribute to real-world projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My passion lies in building intelligent real-world applications involving surveillance AI, healthcare AI, and language technologies. I have published research in the International Journal of Science and Technology and built multiple AI/ML projects spanning computer vision, NLP, and edge deployment.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {["Python", "Java", "SQL", "PyTorch", "OpenCV", "YOLOv8", "NLP", "Deep Learning"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group glow-primary-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
