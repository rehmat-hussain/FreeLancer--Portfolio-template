
import { motion } from "framer-motion";
import { Smartphone, Code, Layout } from "lucide-react";

const skillsData = [
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Flutter Development",
    description: "Expert in building cross-platform mobile applications"
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Dart Programming",
    description: "Advanced knowledge of Dart language and its features"
  },
  {
    icon: <Layout className="h-8 w-8 text-primary" />,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized in Flutter development with expertise in various tools and technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
