import { Link } from 'react-router-dom';

export interface Release {
  id: string;
  title: string;
  cover: string;
  year: string;
  description: string;
  tracks: Array<{
    title: string;
    duration: string;
  }>;
  videos?: Array<{
    title: string;
    url: string;
    thumbnail: string;
  }>;
}

interface ReleaseCardProps {
  release: Release;
}

export function ReleaseCard({ release }: ReleaseCardProps) {
  return (
    <Link 
      to={`/release/${release.id}`}
      className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 block"
    >
      <img 
        src={release.cover}
        alt={release.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
        <div>
          <h3 className="text-xl font-bold text-white">{release.title}</h3>
          <p className="text-gray-300">{release.year}</p>
        </div>
      </div>
    </Link>
  );
}