
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projectData = [
  {
    title: "E-Commerce App",
    description: "A full-featured shopping app with beautiful UI and seamless payment integration",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    link: "#"
  },
  {
    title: "Social Media App",
    description: "Real-time messaging and social networking platform built with Flutter",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my favorite Flutter applications that showcase my expertise in mobile development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="outline" className="text-white border-white hover:bg-white/20">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
