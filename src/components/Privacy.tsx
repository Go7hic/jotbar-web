import { Shield, HardDrive, WifiOff, EyeOff } from "lucide-react";

const privacyPoints = [
  {
    icon: HardDrive,
    text: "All notes stored in local SQLite database",
  },
  {
    icon: WifiOff,
    text: "No network connections",
  },
  {
    icon: EyeOff,
    text: "No analytics or telemetry",
  },
  {
    icon: Shield,
    text: "No external services",
  },
];

const Privacy = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Your Notes, Your Privacy
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          JotBar stores all data locally on your Mac. No cloud sync, no data collection, no tracking. Your notes are yours alone.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {privacyPoints.map((point, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 border-2 border-foreground bg-card p-4 shadow-xs"
            >
              <point.icon className="h-6 w-6 flex-shrink-0" />
              <span className="font-medium">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Privacy;
