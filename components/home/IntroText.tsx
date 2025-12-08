import { experiences } from '@/lib/data/experiences';
import { RoleProgression } from '@/types/experience';

function getRoleText(role: string | RoleProgression): string {
  return typeof role === 'string' ? role : role.current.title;
}

export function IntroText() {
  const fullTime = experiences.find((e) => e.type === 'full-time');
  const internships = experiences.filter((e) => e.type === 'internship');

  return (
    <div className="text-[#c9d1d9] space-y-4">
      {fullTime && (
        <div>
          <h4 className="text-[#8b949e] text-sm font-semibold uppercase mb-2">Current</h4>
          <p>
            Software Engineer II at{' '}
            <a
              href={fullTime.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff] hover:text-[#79c0ff] hover:underline"
            >
              {fullTime.company}
            </a>
          </p>
        </div>
      )}

      <div>
        <h4 className="text-[#8b949e] text-sm font-semibold uppercase mb-2">Previous Experience</h4>
        <ul className="space-y-2">
          {internships.slice(0, 3).map((exp) => (
            <li key={exp.id}>
              {getRoleText(exp.role)} @{' '}
              <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#58a6ff] hover:text-[#79c0ff] hover:underline"
              >
                {exp.company}
              </a>
            </li>
          ))}
          <li>
            Intern @{' '}
            {internships.slice(3).map((exp, idx, arr) => (
              <span key={exp.id}>
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#58a6ff] hover:text-[#79c0ff] hover:underline"
                >
                  {exp.company}
                </a>
                {idx < arr.length - 1 ? ', ' : ''}
              </span>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
