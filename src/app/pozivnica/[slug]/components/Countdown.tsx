"use client";

import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

interface TimeBlockProps {
  value: number;
  label: string;
  isLast?: boolean;
}

const TimeBlock: React.FC<TimeBlockProps> = ({ value, label, isLast }) => (
  <div className="flex items-center">
    <div className="flex flex-col items-center group">
      {/* Number container */}
      <div className="relative">
        <div
          className="w-20 h-24 sm:w-28 sm:h-32 flex items-center justify-center backdrop-blur-sm transition-all duration-500"
          style={{
            backgroundColor: "rgba(255,255,255,0.8)",
            borderRadius: "var(--theme-radius)",
            boxShadow: "var(--theme-shadow)",
            border: "1px solid var(--theme-border)",
          }}
        >
          <span
            className="text-4xl sm:text-6xl font-serif tabular-nums"
            style={{ color: "var(--theme-text)" }}
          >
            {value.toString().padStart(2, '0')}
          </span>
        </div>
        {/* Decorative corner accents */}
        <div
          className="absolute -top-1 -left-1 w-3 h-3"
          style={{ borderTop: "1px solid var(--theme-border)", borderLeft: "1px solid var(--theme-border)" }}
        />
        <div
          className="absolute -top-1 -right-1 w-3 h-3"
          style={{ borderTop: "1px solid var(--theme-border)", borderRight: "1px solid var(--theme-border)" }}
        />
        <div
          className="absolute -bottom-1 -left-1 w-3 h-3"
          style={{ borderBottom: "1px solid var(--theme-border)", borderLeft: "1px solid var(--theme-border)" }}
        />
        <div
          className="absolute -bottom-1 -right-1 w-3 h-3"
          style={{ borderBottom: "1px solid var(--theme-border)", borderRight: "1px solid var(--theme-border)" }}
        />
      </div>
      {/* Label */}
      <span
        className="mt-4 text-[10px] sm:text-xs font-elegant uppercase tracking-[0.3em]"
        style={{ color: "var(--theme-text-muted)" }}
      >
        {label}
      </span>
    </div>
    {/* Separator */}
    {!isLast && (
      <div className="mx-3 sm:mx-6 flex flex-col items-center gap-2 opacity-30">
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--theme-primary)" }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--theme-primary)" }} />
      </div>
    )}
  </div>
);

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculateTime = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };

    setTimeLeft(calculateTime());

    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className="flex flex-wrap justify-center items-start gap-2 py-8">
        {['Dana', 'Sati', 'Minuta', 'Sekundi'].map((label, idx) => (
          <TimeBlock key={label} value={0} label={label} isLast={idx === 3} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center items-start gap-2 py-8">
      <TimeBlock value={timeLeft.days} label="Dana" />
      <TimeBlock value={timeLeft.hours} label="Sati" />
      <TimeBlock value={timeLeft.minutes} label="Minuta" />
      <TimeBlock value={timeLeft.seconds} label="Sekundi" isLast />
    </div>
  );
};
