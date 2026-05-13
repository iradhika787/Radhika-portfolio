"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "SQL"],
  },
  {
    title: "Core Concepts",
    skills: ["Object-Oriented Programming", "DBMS", "Machine Learning", "Deep Learning"],
  },
  {
    title: "AI/ML Frameworks",
    skills: ["PyTorch", "Scikit-learn", "OpenCV", "YOLOv8"],
  },
  {
    title: "Tools & Platforms",
    skills: ["VS Code", "GitHub", "Jupyter Notebook", "Streamlit"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="text-lg font-semibold text-primary mb-4">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300" />
                      <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated skill tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {["Python", "Java", "SQL", "PyTorch", "OpenCV", "YOLOv8", "NLP", "Scikit-learn", "GitHub", "Streamlit", "Machine Learning", "Deep Learning", "Computer Vision", "OOP", "DBMS"].map(
            (skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full bg-secondary border border-border hover:border-primary/50 text-secondary-foreground text-sm font-medium cursor-default transition-all duration-300"
              >
                {skill}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}
