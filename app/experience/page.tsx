import { Metadata } from 'next';
import { ExperienceCard } from '@/components/experience/ExperienceCard';
import { TechStack } from '@/components/experience/TechStack';
import { ResumeDownload } from '@/components/experience/ResumeDownload';
import { experiences } from '@/lib/data/experiences';

export const metadata: Metadata = {
  title: 'Experience | Dante Mazza',
  description: 'Professional experience as a Software Engineer at Splunk and previous internships.',
};

export default function ExperiencePage() {
  // Get current role (first full-time experience with "Present" in period)
  const currentRole = experiences.find((e) => e.type === 'full-time' && e.period.includes('Present'));
  // Get previous full-time roles (excluding current)
  const previousFullTime = experiences.filter((e) => e.type === 'full-time' && !e.period.includes('Present'));
  const internships = experiences.filter((e) => e.type === 'internship');

  return (
    <div className="py-8 space-y-12">
      {/* Current Role */}
      {currentRole && (
        <section>
          <h2 className="text-2xl font-bold text-[#c9d1d9] mb-6">Current Role</h2>
          <ExperienceCard experience={currentRole} featured />
        </section>
      )}

      {/* Previous Experience */}
      <section>
        <h2 className="text-2xl font-bold text-[#c9d1d9] mb-6">Previous Experience</h2>
        <div className="space-y-4">
          {previousFullTime.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
          {internships.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack />

      {/* Resume Download */}
      <ResumeDownload />
    </div>
  );
}
