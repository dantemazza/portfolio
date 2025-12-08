import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/data/projects';
import { shipliteFeatures } from '@/lib/data/shiplite-features';
import { CONTACT_EMAIL } from '@/lib/constants';

const project = projects.find((p) => p.slug === 'shiplite')!;

export const metadata: Metadata = {
  title: 'ShipLite | Dante Mazza',
  description: project.shortDescription,
};

export default function ShipLitePage() {
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
            <h1 className="text-3xl font-bold text-[#c9d1d9]">ShipLite</h1>
            <p className="text-[#8b949e] mt-1">{project.period}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-[#8b949e]">
              <span className="font-semibold text-[#c9d1d9]">Role:</span> {project.role}
            </p>
          </div>
        </div>

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

      {/* Feature Showcase */}
      <div className="space-y-12">
        <h2 className="text-2xl font-bold text-[#c9d1d9]">Feature Walkthrough</h2>

        {shipliteFeatures.map((feature, idx) => (
          <div key={feature.name} className="code-card overflow-hidden">
            {/* Feature header */}
            <div className="p-4 border-b border-[#30363d]">
              <h3 className="text-lg font-semibold text-[#c9d1d9]">
                {idx + 1}. {feature.name}
              </h3>
            </div>

            {/* Feature description */}
            <div className="p-4 text-[#c9d1d9] text-sm md:text-base">
              <p>{feature.description}</p>
            </div>

            {/* Full-size screenshot */}
            {feature.image ? (
              <div className="relative w-full aspect-video bg-[#21262d]">
                <Image
                  src={feature.image}
                  alt={`${feature.name} screenshot`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            ) : (
              <div className="p-8 bg-[#21262d] text-center">
                <p className="text-[#8b949e]">Screenshot coming soon</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 code-card p-6 text-center">
        <p className="text-[#8b949e] text-sm mb-3">
          Want to try Shiplite? Shoot me an email
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-md transition-colors text-sm"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
