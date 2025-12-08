export function ResumeDownload() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-[#c9d1d9] mb-6">Resume</h2>
      <div className="code-card p-6">
        <a
          href="/resume/dante-mazza-resume.pdf"
          download
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume
        </a>
      </div>
    </section>
  );
}
