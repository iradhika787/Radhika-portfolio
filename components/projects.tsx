"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Eye, MessageSquare, Heart, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Edge AI Violence Detection System",
    description:
      "Built a real-time surveillance AI system using PyTorch, YOLOv8, OpenCV and 3D CNN architectures for violence detection in video streams.",
    tags: ["PyTorch", "YOLOv8", "OpenCV", "3D CNN", "Edge AI"],
    icon: Eye,
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "NLP Sentiment Analysis App",
    description:
      "Built a Streamlit-based NLP sentiment analysis application using TF-IDF and Logistic Regression for real-time text classification.",
    tags: ["Streamlit", "NLP", "TF-IDF", "Logistic Regression", "Python"],
    icon: MessageSquare,
    gradient: "from-chart-2/20 to-chart-2/5",
  },
  {
    title: "Medibot AI Healthcare Chatbot",
    description:
      "Designed an AI healthcare chatbot with NLP, multilingual support, speech recognition and text-to-speech capabilities.",
    tags: ["NLP", "Speech Recognition", "TTS", "Healthcare AI", "Multilingual"],
    icon: Heart,
    gradient: "from-chart-3/20 to-chart-3/5",
  },
  {
    title: "AI Legal Rights Awareness Platform",
    description:
      "Developed a web-based AI platform for simplified legal rights awareness using natural language processing.",
    tags: ["AI", "NLP", "Web Development", "Legal Tech"],
    icon: Scale,
    gradient: "from-chart-4/20 to-chart-4/5",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of AI and machine learning projects showcasing my expertise in computer vision, NLP, and intelligent systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/iradhika787" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
