import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  backgroundImage?: string;
  children?: ReactNode;
}

const PageHeader = ({ title, subtitle, highlight, backgroundImage, children }: PageHeaderProps) => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[50vh] flex items-center">
      {backgroundImage && (
        <div className="absolute inset-0">
          <img src={backgroundImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/75" />
        </div>
      )}
      {!backgroundImage && <div className="absolute inset-0 bg-card" />}

      <div className="relative z-10 container mx-auto max-w-5xl text-center">
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl font-light text-foreground"
        >
          {highlight ? (
            <>
              {title.split(highlight)[0]}
              <span className="text-gold-gradient italic">{highlight}</span>
              {title.split(highlight)[1]}
            </>
          ) : (
            title
          )}
        </motion.h1>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
