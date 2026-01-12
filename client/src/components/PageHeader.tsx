import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-primary/95">
      {/* Background Pattern/Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        {backgroundImage ? (
          <img 
            src={backgroundImage} 
            alt="Header background" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        )}
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto font-light"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
