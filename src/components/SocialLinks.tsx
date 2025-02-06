import { Instagram, Youtube, Mail } from 'lucide-react'; 

interface SocialLinksProps {
  links: {
    instagram?: string;
    youtube?: string;
    spotify?: string;
    email: string;
  };
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center space-x-8 mb-12">
        {links.instagram && (
          <a
            href={links.instagram}
            className="transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-12 h-12" />
          </a>
        )}
        {links.youtube && (
          <a
            href={links.youtube}
            className="transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube className="w-12 h-12" />
          </a>
        )}
        {links.spotify && (
          <a
            href={links.spotify}
            className="transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
          >
            <img
              src="/images/spotify-logo.svg"
              alt="Spotify"
              className="w-12 h-12"
            />
          </a>
        )}
      </div>

      <div className="max-w-md mx-auto mb-12">
        <p className="text-lg text-gray-600 mb-8">
          Para contratações e parcerias, entre em contato:
        </p>
        <a
          href={`mailto:${links.email}`}
          className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
          <span>{links.email}</span>
        </a>
      </div>

      <div className="max-w-[700px] mx-auto mb-12 px-4">
        <div className="instagram-reels">
          <div className="relative w-full overflow-hidden" style={{ paddingBottom: '157.77%' }}>
            <iframe 
              src="https://www.instagram.com/reel/DFtV9LBsAEP/embed" 
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0" 
              scrolling="no" 
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>

    </div>
  );
}
