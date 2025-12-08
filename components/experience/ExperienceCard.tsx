'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Experience, RoleProgression } from '@/types/experience';

interface ExperienceCardProps {
  experience: Experience;
  featured?: boolean;
}

function isRoleProgression(role: string | RoleProgression): role is RoleProgression {
  return typeof role === 'object' && 'current' in role && 'previous' in role;
}

export function ExperienceCard({ experience, featured = false }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(featured);
  const [isCurrentRoleExpanded, setIsCurrentRoleExpanded] = useState(featured);
  const [isPreviousRoleExpanded, setIsPreviousRoleExpanded] = useState(false);

  // Map company names to their logo files
  const logoMap: Record<string, string> = {
    'Splunk': '/images/companies/splunk.png',
    'Amazon Web Services (AWS)': '/images/companies/aws.jpg',
    'Wisedocs': '/images/companies/wisedocs.jpeg',
    'KCM Solutions': '/images/companies/kcm.png',
    'SAP': '/images/companies/sap.png',
    'Toronto Water': '/images/companies/torontowater.jpg',
  };

  const hasLogo = logoMap[experience.company];

  return (
    <div className={`code-card p-4 ${featured ? 'border-[#3fb950]' : ''}`}>
      <div className="flex items-start gap-4">
        {/* Company Logo */}
        <div className="flex-shrink-0 w-16 h-16 rounded bg-[#21262d] flex items-center justify-center overflow-hidden">
          {hasLogo ? (
            <Image
              src={hasLogo}
              alt={experience.company}
              width={56}
              height={56}
              className="object-contain"
            />
          ) : (
            <span className="text-[#8b949e] text-xs">Logo</span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <a
              href={experience.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff] hover:text-[#79c0ff] hover:underline text-lg font-semibold"
            >
              {experience.company}
            </a>
            <span className="text-[#8b949e] text-sm">{experience.period}</span>
          </div>

          {/* Role Display */}
          {isRoleProgression(experience.role) ? (
            <div className="mt-2 space-y-4">
              {/* Current Role */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-[#c9d1d9]">{experience.role.current.title}</p>
                  <span className="text-[#8b949e] text-sm">{experience.role.current.period}</span>
                </div>

                {experience.role.current.description && (
                  <div className="mt-2">
                    <button
                      onClick={() => setIsCurrentRoleExpanded(!isCurrentRoleExpanded)}
                      className="flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] text-sm transition-colors"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${isCurrentRoleExpanded ? 'rotate-90' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {isCurrentRoleExpanded ? 'Hide details' : 'Show details'}
                    </button>

                    {isCurrentRoleExpanded && (
                      <div className="mt-2 text-[#c9d1d9] text-base space-y-2">
                        {experience.role.current.description.split('\n\n').map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Previous Role */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <p className="text-[#c9d1d9]">{experience.role.previous.title}</p>
                  <span className="text-[#8b949e] text-sm">{experience.role.previous.period}</span>
                </div>

                {experience.role.previous.description && (
                  <div className="mt-2">
                    <button
                      onClick={() => setIsPreviousRoleExpanded(!isPreviousRoleExpanded)}
                      className="flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] text-sm transition-colors"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${isPreviousRoleExpanded ? 'rotate-90' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {isPreviousRoleExpanded ? 'Hide details' : 'Show details'}
                    </button>

                    {isPreviousRoleExpanded && (
                      <div className="mt-2 text-[#c9d1d9] text-base space-y-2">
                        {experience.role.previous.description.split('\n\n').map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <p className="mt-1 text-[#c9d1d9]">{experience.role}</p>
          )}

          {/* Collapsible Description (for non-progression roles only) */}
          {!isRoleProgression(experience.role) && experience.description && (
            <div className="mt-3">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] text-sm transition-colors"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {isExpanded ? 'Hide details' : 'Show details'}
              </button>

              {isExpanded && (
                <div className="mt-2 text-[#c9d1d9] text-base space-y-2">
                  {experience.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
