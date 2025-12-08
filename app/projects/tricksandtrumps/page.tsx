import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/data/projects';

const project = projects.find((p) => p.slug === 'tricksandtrumps')!;

export const metadata: Metadata = {
  title: 'tricksandtrumps | Dante Mazza',
  description: project.shortDescription,
};

export default function TricksAndTrumpsPage() {
  return (
    <div className="py-8">
      {/* Back link */}
      <Link
        href="/projects"
        className="text-[#58a6ff] hover:text-[#79c0ff] text-sm mb-6 inline-flex items-center gap-1"
      >
        ← Back to Projects
      </Link>

      {/* Header */}
      <div className="code-card p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#c9d1d9]">tricksandtrumps.com</h1>
            <p className="text-[#8b949e] mt-1">{project.period}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-[#8b949e]">
              <span className="font-semibold text-[#c9d1d9]">Role:</span> {project.role}
            </p>
            {project.liveUrl && (
              <p className="text-sm mt-1">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58a6ff] hover:underline"
                >
                  tricksandtrumps.com
                </a>
              </p>
            )}
          </div>
        </div>

        {/* Collaborator */}
        {project.collaborator && (
          <div className="mt-4 p-3 bg-[#21262d] rounded-md">
            <p className="text-sm text-[#c9d1d9]">
              Collaborated with{' '}
              <a
                href={project.collaborator.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#58a6ff] hover:underline"
              >
                {project.collaborator.name}
              </a>
            </p>
          </div>
        )}

        {/* Description */}
        <div className="mt-6 text-[#c9d1d9] space-y-3 text-sm md:text-base">
          {project.fullDescription.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-6 pt-4 border-t border-[#30363d]">
          <h3 className="text-lg font-semibold text-[#c9d1d9] mb-3">Key Features</h3>
          <ul className="space-y-2 text-sm">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="text-[#c9d1d9] flex items-start gap-2">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Screenshot */}
      {project.images.length > 0 && (
        <div className="code-card overflow-hidden">
          <div className="p-4 border-b border-[#30363d]">
            <h3 className="text-lg font-semibold text-[#c9d1d9]">Gameplay Screenshot</h3>
          </div>
          <div className="relative w-full aspect-video bg-[#21262d]">
            <Image
              src={project.images[0]}
              alt="tricksandtrumps gameplay"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>
      )}

      {/* Visit link */}
      {project.liveUrl && (
        <div className="mt-8 code-card p-6">
          <p className="text-[#8b949e] text-sm mb-4">
            Visit the live site to play rubber bridge online.
          </p>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-md transition-colors text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Visit tricksandtrumps.com
          </a>
        </div>
      )}
    </div>
  );
}
