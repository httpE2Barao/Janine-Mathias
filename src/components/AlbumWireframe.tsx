// AlbumWireframe.tsx
interface AlbumWireframeProps {
  spotifyLink: string;
}

export function AlbumWireframe({ spotifyLink }: AlbumWireframeProps) {
  return (
    <div className="album-wireframe w-full flex justify-center">
      <iframe
        style={{ borderRadius: '12px' }}
        src={spotifyLink}
        className="w-full h-[500px] sm:h-[400px] md:h-[500px]" 
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}
