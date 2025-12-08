import Image from 'next/image';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-8">
      {images.map((image, idx) => (
        <div key={idx} className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={`${title} screenshot ${idx + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
