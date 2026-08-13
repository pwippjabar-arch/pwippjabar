'use client';

import { useEffect, useRef, useState } from 'react';
import { BilikOrnament } from './SundaOrnaments';

interface StatItemProps {
  target: number;
  label: string;
  suffix?: string;
}

function StatCard({ target, label, suffix = '' }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let current = 0;
            const duration = 1200; // 1.2s total count-up time
            const stepTime = 30;
            const steps = duration / stepTime;
            const increment = Math.max(1, Math.ceil(target / steps));

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCount(current);
            }, stepTime);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div
      ref={cardRef}
      className="stat-card bg-white border border-gray-200 hover:border-brand-red rounded-2xl p-4 sm:p-8 text-center shadow-sm"
    >
      <span className="stat-number block text-3xl sm:text-5xl font-extrabold text-brand-red mb-1 sm:mb-2">
        {count}
        {suffix}
      </span>
      <span className="stat-label block text-[10px] sm:text-sm font-bold text-gray-500 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default function StatCounter() {
  const stats = [
    { target: 6, label: 'Bidang' },
    { target: 500, label: 'Kader', suffix: '++' },
    { target: 12, label: 'Pimpinan Daerah' },
    { target: 9, label: 'Badan Koordinator Cabang' },
  ];

  return (
    <div className="relative py-8 sm:py-12 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 overflow-hidden">
      {/* Ornamen Anyaman Bilik Sunda sebagai tekstur latar */}
      <BilikOrnament className="absolute inset-0 w-full h-full text-brand-red opacity-[0.025] dark:opacity-[0.04]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 stats-container">
          {stats.map((s, idx) => (
            <StatCard key={idx} target={s.target} label={s.label} suffix={s.suffix} />
          ))}
        </div>
      </div>
    </div>
  );
}
