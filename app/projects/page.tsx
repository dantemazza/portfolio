import { Metadata } from 'next';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/lib/data/projects';

export const metadata: Metadata = {
  title: 'Projects | Dante Mazza',
  description: 'Personal projects including ShipLite and tricksandtrumps.',
};

export default function ProjectsPage() {
  return (
    <div className="py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#c9d1d9] mb-3">Projects</h1>
        <p className="text-[#8b949e]">
          I love building things. Here&apos;s what I&apos;ve been working on.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={project.id}>
            <ProjectCard project={project} />
            {index < projects.length - 1 && (
              <div className="mt-8 border-t border-[#30363d]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
