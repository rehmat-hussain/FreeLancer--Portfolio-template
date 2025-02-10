
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { handleEmailClick } from "@/utils/navigation";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full">
            Get in Touch
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-gray-600 mb-8">
            Interested in collaborating? Feel free to reach out for project inquiries or just to say hello.
          </p>
          <Button
            size="lg"
            onClick={handleEmailClick}
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
