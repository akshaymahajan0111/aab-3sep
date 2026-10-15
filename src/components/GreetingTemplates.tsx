import { useState } from 'react';
import { motion } from 'motion/react';

interface Template {
  id: string;
  text: string;
}

interface Category {
  id: string;
  label: string;
  emoji: string;
  templates: Template[];
}

interface GreetingTemplatesProps {
  eyebrow: string;
  categories: Category[];
  onSelect: (text: string) => void;
}

export default function GreetingTemplates({ eyebrow, categories, onSelect }: GreetingTemplatesProps) {
  const [activeCatId, setActiveCatId] = useState(categories[0]?.id ?? '');

  const activeCategory = categories.find((c) => c.id === activeCatId) ?? categories[0];

  return (
    <div className="mt-10 border-t-2 border-dashed border-border pt-8">
      <p className="mb-4 text-sm font-extrabold uppercase tracking-wide text-muted-foreground">
        {eyebrow}
      </p>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Template categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCatId(cat.id)}
            aria-pressed={activeCatId === cat.id}
            className={`rounded-full border-2 px-3 py-1.5 text-xs font-extrabold transition-all duration-150 ${
              activeCatId === cat.id
                ? 'border-secondary bg-secondary text-secondary-foreground'
                : 'border-border bg-card text-foreground hover:border-secondary hover:text-secondary'
            }`}
          >
            <span aria-hidden="true">{cat.emoji} </span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Template chips */}
      <motion.div
        key={activeCatId}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' as const }}
        className="mt-4 flex flex-wrap gap-2"
      >
        {activeCategory?.templates.map((tpl, index) => (
          <motion.button
            key={tpl.id}
            type="button"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.06, duration: 0.18 }}
            onClick={() => onSelect(tpl.text)}
            className="rounded-full border-2 border-primary bg-card px-3 py-2 text-left text-xs font-bold text-primary transition-transform duration-150 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
          >
            {tpl.text}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
