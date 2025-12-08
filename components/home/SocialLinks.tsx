import Image from 'next/image';
import { socialLinks } from '@/lib/data/social-links';

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff] transition-colors group"
        >
          <Image
            src={link.icon}
            alt={link.name}
            width={20}
            height={20}
            className="invert opacity-70 group-hover:opacity-100 transition-opacity"
          />
          <span className="text-[#8b949e] group-hover:text-[#58a6ff] text-sm transition-colors">
            {link.name}
          </span>
        </a>
      ))}
    </div>
  );
}
