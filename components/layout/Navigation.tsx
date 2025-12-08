'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: '~' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-8 md:gap-12 pb-8">
      {navItems.map((item) => {
        const isActive = pathname === item.href ||
          (item.href !== '/' && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm md:text-base transition-colors px-2 py-1 ${
              isActive
                ? 'text-[#58a6ff] border-b-2 border-[#58a6ff]'
                : 'text-[#8b949e] hover:text-[#c9d1d9]'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
