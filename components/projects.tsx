"use client"

import { motion } from "framer-motion"
import { Github, Eye, MessageSquare, Heart, Scale, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Edge AI Violence Detection System",
    description:
      "Benchmarked three 3D CNN architectures (R3D-18, MC3-18, R(2+1)D-18) on the RWF-2000 dataset; MC3-18 achieved 81% recall and was selected for edge deployment. Integrated YOLOv8 person detection, temporal smoothing and optical-flow analysis to reduce false positives, with SQLite alert logging.",
    tags: ["PyTorch", "YOLOv8", "OpenCV", "3D CNN", "SQLite", "Edge AI"],
    github: "https://github.com/iradhika787/3D_CNN-s-in-Violence-Detection",
    icon: Eye,
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "NLP Sentiment Analysis App",
    description:
      "Built a Streamlit-based NLP sentiment analysis application using TF-IDF and Logistic Regression for real-time text classification.",
    tags: ["Streamlit", "NLP", "TF-IDF", "Logistic Regression", "Python"],
    github: "https://github.com/iradhika787",
    icon: MessageSquare,
    gradient: "from-chart-2/20 to-chart-2/5",
  },
  {
    title: "Medibot AI Healthcare Chatbot",
    description:
      "Designed an AI healthcare chatbot with NLP, multilingual support, speech recognition and text-to-speech capabilities.",
    tags: ["NLP", "Speech Recognition", "TTS", "Healthcare AI", "Multilingual"],
    github: "https://github.com/iradhika787/MediBOT-Project",
    icon: Heart,
    gradient: "from-chart-3/20 to-chart-3/5",
  },
  {
    title: "AI Legal Rights Awareness Platform",
    description:
      "Developed a web-based AI platform for simplified legal rights awareness using natural language processing.",
    tags: ["AI", "NLP", "Web Development", "Legal Tech"],
    github: "https://github.com/iradhika787",
    icon: Scale,
    gradient: "from-chart-4/20 to-chart-4/5",
  },
  {
    title: "Agentic Python 2 to Python 3 Code Migration Framework",
    description:
      "Developed an agentic framework that detects Python 2 compatibility issues through static analysis and automates conversion using rule-based transformations. Built an Analyze → Migrate → Verify → Retry pipeline that validates code via syntax, compilation, execution and optional tests, with Ollama-based LLM correction for unresolved issues.",
    tags: ["Python", "Ollama (LLM)", "AST", "Streamlit", "Agentic AI"],
    github: "https://github.com/iradhika787/Agentic-Code-Migration-Framework",
    icon: Bot,
    gradient: "from-primary/20 to-primary/5",
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
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
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
