
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { toast } from "sonner";
import { handleContactScroll } from "@/utils/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const handleHireMe = () => {
    handleContactScroll();
    toast.success("Let's discuss your project!");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/+1234567890", "_blank");
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">Flutter Dev</h1>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-2">Experience</h3>
                      <p className="text-sm text-gray-500">Years of Flutter development experience building robust applications</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Skills</h3>
                      <p className="text-sm text-gray-500">Expertise in Flutter, Dart, and mobile app development</p>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-2">Mobile Apps</h3>
                      <p className="text-sm text-gray-500">Collection of mobile applications built with Flutter</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">UI/UX</h3>
                      <p className="text-sm text-gray-500">Beautiful and intuitive user interfaces</p>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer" onClick={handleWhatsApp}>
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button 
          onClick={handleHireMe}
          className="bg-primary hover:bg-primary/90 text-white rounded-full"
        >
          <UserPlus className="mr-2 h-5 w-5" />
          Hire Me
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
