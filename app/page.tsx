import Image from 'next/image';
import { SocialLinks } from '@/components/home/SocialLinks';
import { IntroText } from '@/components/home/IntroText';

export default function Home() {
  return (
    <div className="py-8 space-y-8">
      {/* Profile Section */}
      <div className="flex items-center gap-6">
        <Image
          src="/images/headshot.jpg"
          alt="Dante Mazza"
          width={120}
          height={120}
          className="rounded-full border-2 border-[#30363d]"
          priority
        />
        <div>
          <h2 className="text-2xl font-bold text-[#c9d1d9]">Dante Mazza</h2>
          <p className="text-[#c9d1d9] text-xl font-light mt-1">Software Engineer II @ Splunk</p>
        </div>
      </div>

      {/* About Section */}
      <div className="code-card p-6">
        <h3 className="text-xl font-semibold text-[#c9d1d9] mb-4">About</h3>
        <IntroText />
      </div>

      {/* Contact Section */}
      <div className="code-card p-6">
        <h3 className="text-xl font-semibold text-[#c9d1d9] mb-4">Connect</h3>
        <SocialLinks />
      </div>
    </div>
  );
}
