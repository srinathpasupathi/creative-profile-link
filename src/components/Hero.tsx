
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 animate-fade-in">
          <h1 className="mb-4">
            <span className="block text-gray-700">Hello, I'm</span>
            <span className="block text-primary">John Doe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Web Developer & Designer
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            I craft responsive websites where technology meets creativity. I'm passionate about building excellent software that improves the lives of those around me.
          </p>
          <div className="flex space-x-4">
            <Button asChild size="lg">
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 opacity-75 blur"></div>
            <div className="relative bg-white rounded-lg shadow-xl p-6 md:p-10">
              <div className="aspect-[4/3] bg-gray-100 rounded-md overflow-hidden">
                {/* Replace with your profile image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">JD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
