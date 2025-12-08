import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="code-card overflow-hidden hover:border-[#58a6ff] transition-all duration-200 cursor-pointer group hover:shadow-lg hover:shadow-[#58a6ff]/10">
        {/* Project image */}
        <div className="relative h-48 bg-[#21262d]">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Project details */}
        <div className="p-6 space-y-3">
          <h3 className="text-xl font-bold text-[#c9d1d9] group-hover:text-[#58a6ff] transition-colors">
            {project.title}
          </h3>

          <p className="text-[#c9d1d9] text-base">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="text-[#8b949e]">
              <span className="font-semibold text-[#c9d1d9]">Period:</span> {project.period}
            </span>
            <span className="text-[#8b949e]">
              <span className="font-semibold text-[#c9d1d9]">Role:</span> {project.role}
            </span>
          </div>

          {/* View project hint */}
          <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[#58a6ff] text-sm">View project details →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
