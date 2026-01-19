import { Zap, Target, Save, Pin, Search, Lock, Monitor, Keyboard } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Open notes in under 1 second with ⌘⇧N global shortcut",
  },
  {
    icon: Target,
    title: "Zero Distractions",
    description: "Clean, minimal interface focused on your words",
  },
  {
    icon: Save,
    title: "Auto-Save",
    description: "Never lose your work with automatic saving (500ms debounce)",
  },
  {
    icon: Pin,
    title: "Pin Notes",
    description: "Keep important notes at the top for quick access",
  },
  {
    icon: Search,
    title: "Real-Time Search",
    description: "Find notes instantly as you type",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "All data stored locally on your Mac, no cloud sync",
  },
  {
    icon: Monitor,
    title: "Menu Bar Integration",
    description: "Always accessible, never in the way",
  },
  {
    icon: Keyboard,
    title: "Keyboard Shortcuts",
    description: "Full keyboard support for power users",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Features
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Built with SwiftUI and SwiftData for native macOS performance
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border-2 border-foreground p-6 shadow-sm hover:shadow-md hover:-translate-x-[3px] hover:-translate-y-[3px] transition-all"
            >
              <feature.icon className="h-8 w-8 mb-4" strokeWidth={2} />
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
