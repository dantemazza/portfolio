import Image from 'next/image';
import { techStack } from '@/lib/data/experiences';

export function TechStack() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-[#c9d1d9] mb-6">Tech Stack</h2>
      <div className="code-card p-6">
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 bg-[#21262d] rounded-lg flex items-center justify-center group-hover:bg-[#30363d] transition-colors border border-[#30363d] group-hover:border-[#58a6ff] overflow-hidden p-2">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-[#8b949e] text-center group-hover:text-[#c9d1d9]">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
