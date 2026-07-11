"use client";

import { motion } from "framer-motion";
import { Award, Globe2, Ship, Users2 } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "20+",
    label: "Years of Trust",
    icon: Award,
  },
  {
    id: 2,
    value: "10,000+",
    label: "Metric Tons Exported",
    icon: Ship,
  },
  {
    id: 3,
    value: "45+",
    label: "Countries Served",
    icon: Globe2,
  },
  {
    id: 4,
    value: "5,000+",
    label: "Partner Farmers",
    icon: Users2,
  },
];

export function StatsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#f8f9fa] border border-black/5 hover:border-accent/30 hover:shadow-lg transition-all duration-500 group"
              >
                <div className="mb-4 text-accent transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500">
                  <Icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
