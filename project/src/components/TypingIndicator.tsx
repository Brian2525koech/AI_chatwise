import { Bot } from "lucide-react";

export const TypingIndicator = () => {
  return (
    <div className="flex gap-4 p-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ai-gradient flex items-center justify-center shadow-glow">
        <Bot className="w-5 h-5 text-primary-foreground" />
      </div>
      
      <div className="bg-card border border-primary/20 rounded-2xl px-5 py-3 backdrop-blur-sm">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};
