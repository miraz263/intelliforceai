'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import {
  careersConfig,
  departments,
  locations,
  experiences,
  Department,
  JobLocation,
  ExperienceLevel,
  JobPosition,
} from '@/config/careers';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { CareerCard } from '@/components/cards/CareerCard';

export function CareerSection() {
  const [selectedDept, setSelectedDept] = useState<'All' | Department>('All');
  const [selectedLoc, setSelectedLoc] = useState<'All' | JobLocation>('All');
  const [selectedExp, setSelectedExp] = useState<'All' | ExperienceLevel>('All');

  const filteredJobs = careersConfig.positions.filter((job) => {
    const matchesDept = selectedDept === 'All' || job.department === selectedDept;
    const matchesLoc = selectedLoc === 'All' || job.location === selectedLoc;
    const matchesExp = selectedExp === 'All' || job.experience === selectedExp;
    return matchesDept && matchesLoc && matchesExp;
  });

  return (
    <Section spacing="xl" className="relative w-full bg-background overflow-hidden" id="open-positions">
      <Container size="xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <Badge variant="primary" icon={<Sparkles className="h-3 w-3" />}>
            Open Roles
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Explore Open Engineering & Research Positions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Filter opportunities by department, preferred work location, or experience level.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl border border-border/60 bg-surface/70 backdrop-blur-md shadow-xs">
          {/* Department Filter */}
          <div className="w-full md:w-1/3 flex flex-col gap-1">
            <label className="text-[11px] font-mono font-bold uppercase text-muted-foreground">
              Department
            </label>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value as 'All' | Department)}
              className="w-full rounded-xl border border-border/80 bg-background px-3 py-2 text-xs font-semibold text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="All">All Departments</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Location Filter */}
          <div className="w-full md:w-1/3 flex flex-col gap-1">
            <label className="text-[11px] font-mono font-bold uppercase text-muted-foreground">
              Location
            </label>
            <select
              value={selectedLoc}
              onChange={(e) => setSelectedLoc(e.target.value as 'All' | JobLocation)}
              className="w-full rounded-xl border border-border/80 bg-background px-3 py-2 text-xs font-semibold text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="All">All Locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Experience Level Filter */}
          <div className="w-full md:w-1/3 flex flex-col gap-1">
            <label className="text-[11px] font-mono font-bold uppercase text-muted-foreground">
              Experience Level
            </label>
            <select
              value={selectedExp}
              onChange={(e) => setSelectedExp(e.target.value as 'All' | ExperienceLevel)}
              className="w-full rounded-xl border border-border/80 bg-background px-3 py-2 text-xs font-semibold text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="All">All Experience Levels</option>
              {experiences.map((exp) => (
                <option key={exp} value={exp}>
                  {exp}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filtered Jobs Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job: JobPosition, index: number) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="h-full"
              >
                <CareerCard job={job} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-16 text-muted-foreground text-sm">
            No active positions match the selected filters. Please try resetting your criteria.
          </div>
        )}
      </Container>
    </Section>
  );
}
