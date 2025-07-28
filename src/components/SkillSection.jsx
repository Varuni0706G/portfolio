import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Code2,
  FileCode2,
  BadgeHelp,
  Github,
  TerminalSquare,
  Database,
  Server,
  FileText,
  Braces,
  Boxes,
  Coffee,
} from "lucide-react";

const skills = [
  { name: "HTML/CSS", icon: FileCode2, category: "frontend" },
  { name: "JavaScript", icon: Braces, category: "frontend" },
  { name: "React", icon: BadgeHelp, category: "frontend" },
 
  { name: "Node.js", icon: Server, category: "backend" },
  { name: "Express", icon: Code2, category: "backend" },
  { name: "MongoDB", icon: Database, category: "backend" },
  { name: "Git/GitHub", icon: Github, category: "tools" },
  { name: "Python", icon:Code2, category: "programming languages" },
  { name: "Java", icon: Coffee, category: "programming languages" },
  { name: "C", icon: Braces, category: "programming languages" },

];

const categories = ["all", "frontend", "backend", "tools","programming languages"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => {
            const Icon = skill.icon;
            return (
              <div
                key={key}
                className="bg-card p-4 rounded-lg shadow-sm flex items-center gap-3 card-hover"
              >
                <Icon className="w-6 h-6 text-primary" />
                <span className="font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
