
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Download, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { handleContactScroll } from "@/utils/navigation";

const Hero = () => {
  const handleDownloadCV = () => {
    toast.info("CV download feature will be available soon!");
  };

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Available for Freelance Work
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Flutter Developer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Crafting beautiful cross-platform applications with Flutter. 
            Transforming ideas into seamless mobile experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              onClick={handleContactScroll}
              className="bg-primary hover:bg-primary/90 text-white rounded-full"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleDownloadCV}
              className="rounded-full"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com"
              target="_blank"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com"
              target="_blank"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
