import { GraduationCap, School, Laptop2 } from "lucide-react";
import { motion } from "framer-motion";

export const EducationSection = () => {
  const education = [
    {
      icon: <School className="text-primary w-6 h-6" />,
      title: "Fatima Matriculation Hr. Sec. School",
      subtitle: "1st – 12th Grade",
      details: [
        "10th Grade: 497/500 (99.4%)",
        "12th Grade: 577/600 (96.1%)"
      ],
      date: "2008 – 2022",
      milestones: ["Elementary", "Middle", "High School"]
    },
    {
      icon: <GraduationCap className="text-primary w-6 h-6" />,
      title: "Sri Venkateswara College of Engineering, Chennai",
      subtitle: "B.E. in Computer Science",
      details: [
        "Nov 2022 – Present",
        "CGPA: 9.08"
      ],
      date: "2022 – Present",
      milestones: ["1st Year", "Sophomore", "Pre-final-year", "Senior"]
    }
  ];

  return (
    <section
      id="education"
      className="py-16 px-4 sm:px-6 md:py-24 bg-gradient-to-b from-secondary/5 to-background overflow-x-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Education</span> Journey
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline path line for desktop only */}
          <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-primary/30 rounded-full -translate-y-1/2"></div>

          <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-8 px-2 md:px-8 py-8 md:py-12 overflow-x-auto md:overflow-visible snap-x md:snap-none snap-mandatory">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative snap-center w-full md:min-w-[300px] md:max-w-sm flex-shrink-0"
              >
                {/* Timeline icon dot */}
                <div className="absolute left-1/2 -top-8 -translate-x-1/2 w-6 h-6 bg-background border-4 border-primary rounded-full flex items-center justify-center z-10">
                  {item.icon}
                </div>

                {/* Milestone dots (desktop only) */}
                <div className="hidden md:flex absolute left-1/2 -top-4 -translate-x-1/2 w-full justify-around">
                  {item.milestones.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"
                    />
                  ))}
                </div>

                {/* Education Card */}
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-card rounded-xl p-6 shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300 h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.subtitle}</p>

                      <ul className="list-disc pl-5 text-sm text-foreground space-y-1 mb-4">
                        {item.details.slice(0, 2).map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <div className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full inline-block">
                        {item.date}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
