import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, Github, BookOpen } from "lucide-react";

const Download = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get Started
        </h2>
        <p className="text-muted-foreground mb-8">
          Download JotBar for free and start taking notes in seconds
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg"
            className="border-2 shadow-md hover:shadow-xs hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            asChild
          >
            <a href="https://apps.apple.com/us/app/jotbar/id6757980936?mt=12" target="_blank" rel="noopener noreferrer">
              <DownloadIcon className="mr-2 h-5 w-5" />
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
              View Source Code
            </a>
          </Button>
        </div>
        
        {/* <div className="border-2 border-foreground bg-secondary p-6 shadow-sm max-w-lg mx-auto">
          <h3 className="font-bold mb-4 flex items-center justify-center gap-2">
            <BookOpen className="h-5 w-5" />
            Installation
          </h3>
          <ol className="text-left text-sm text-muted-foreground space-y-2">
            <li>1. Download <code className="font-mono bg-card px-1 border">JotBar.dmg</code></li>
            <li>2. Unzip the file</li>
            <li>3. Drag JotBar.app to Applications</li>
            <li>4. Launch and grant accessibility permission</li>
          </ol>
        </div> */}
      </div>
    </section>
  );
};

export default Download;
