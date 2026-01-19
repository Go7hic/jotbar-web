import { Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-2 border-foreground py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart className="h-4 w-4 fill-current" />
          <span>by</span>
          <a 
            href="https://x.com/go7hic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:underline underline-offset-4"
          >
            YiChu
          </a>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/go7hic/JotBar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
