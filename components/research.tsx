"use client"

import { motion } from "framer-motion"
import { FileText, ExternalLink, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Research() {
  return (
    <section id="research" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Research <span className="gradient-text">Publication</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="hidden sm:flex w-16 h-16 rounded-xl bg-primary/10 items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-5 h-5 text-primary sm:hidden" />
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Published Research
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    Medibot: AI Healthcare Chatbot
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Published research paper on Medibot - an AI-powered healthcare chatbot with NLP capabilities, multilingual support, and speech recognition features in the International Journal of Science and Technology.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Healthcare AI", "NLP", "Chatbot", "Research"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6">
                    <span className="text-primary font-medium">Journal:</span> International Journal of Science and Technology | <span className="text-primary font-medium">Published:</span> May 2025
                  </p>
                  
                  <Button
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Publication
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
