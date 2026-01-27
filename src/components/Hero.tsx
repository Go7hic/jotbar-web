import heroMockup from "@/assets/preview.png";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 border-2 border-foreground px-4 py-2 mb-8 shadow-xs">
          <span className="font-mono text-sm">⌘⇧N</span>
          <span className="text-muted-foreground">Open in under 1 second</span>
        </div>
        <div className="flex items-center justify-center mb-6">
        <img src={logo} alt="JotBar" className="w-20 h-20" />
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          
          JotBar
        </h1>
        </div>
        
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A lightweight, distraction-free note-taking app for macOS that lives in your menu bar.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="border-2 shadow-md hover:shadow-xs hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            asChild
          >
            <a href="https://apps.apple.com/us/app/jotbar/id6757980936" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download for macOS
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 shadow-md hover:shadow-xs hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            asChild
          >
            <a href="https://github.com/go7hic/JotBar" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </a>
          </Button>
        </div>
        
        <div className="border-2 border-foreground shadow-lg p-2 bg-card">
          <img 
            src={heroMockup} 
            alt="JotBar app preview showing the menu bar note-taking interface" 
            className="w-full"
          />
        </div>
        
        <p className="mt-6 text-sm text-muted-foreground">
          Requires macOS 15.6 or later • Open Source
        </p>
      </div>
    </section>
  );
};

export default Hero;
