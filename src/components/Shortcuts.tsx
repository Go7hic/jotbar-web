const shortcuts = [
  { keys: "⌘⇧N", description: "Toggle note window (global)" },
  { keys: "⌘N", description: "Create new note" },
  { keys: "⌘Q", description: "Quit application" },
];

const Shortcuts = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Keyboard Shortcuts
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Designed for power users who love their keyboard
        </p>
        
        <div className="grid gap-4 max-w-md mx-auto">
          {shortcuts.map((shortcut, index) => (
            <div 
              key={index}
              className="flex items-center justify-between border-2 border-foreground p-4 shadow-xs"
            >
              <span className="font-mono text-lg bg-secondary px-3 py-1 border-2 border-foreground">
                {shortcut.keys}
              </span>
              <span className="text-muted-foreground">{shortcut.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shortcuts;
