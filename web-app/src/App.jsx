import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Menu, ArrowRight, Layers } from 'lucide-react';

/**
 * UTILITY: Classname Merger (The Shadcn Standard)
 * This acts as our CSS class compiler. It safely merges Tailwind classes 
 * without conflicts (e.g., overriding padding or colors dynamically).
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * PRIMITIVE: Button
 * Engineered with variants (default, outline, ghost) and sizes.
 * Notice how it strictly uses our CSS variables (var(--brand-primary)).
 */
const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-[var(--background)]";
  
  const variants = {
    default: "bg-[var(--brand-primary)] text-[var(--background)] hover:opacity-90",
    outline: "border border-[var(--border)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]",
    ghost: "hover:bg-[var(--muted)] hover:text-[var(--foreground)]",
  };
  
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md text-base",
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
});
Button.displayName = "Button";

/**
 * COMPONENT: Shared Navbar
 */
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="text-[var(--brand-primary)]">
              <Layers className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
              BrandName.
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--brand-primary)] transition-colors">Products</a>
            <a href="#" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--brand-primary)] transition-colors">Engineering</a>
            <Button variant="default">Contact Us</Button>
          </div>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="sm">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

/**
 * MAIN ENTRY: App Layout
 * This is the blank canvas that Fete, Flux, Plum, etc., will inherit.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center min-h-[80vh] justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--muted)] border border-[var(--border)] mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-[var(--brand-primary)] animate-pulse"></span>
          <span className="text-xs font-medium text-[var(--brand-secondary)] uppercase tracking-widest">
            Template Initialized
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 max-w-4xl leading-tight">
          The Architecture is Ready.
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--brand-secondary)] max-w-2xl mb-10">
          This is your clean Base repository. UI primitives are established. CSS variables are mapped. You are ready to fork this template and build the empire.
        </p>
        
        <div className="flex gap-4">
          <Button size="lg" className="gap-2">
            Begin Development <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="lg">
            View Documentation
          </Button>
        </div>
      </main>
    </div>
  );
}