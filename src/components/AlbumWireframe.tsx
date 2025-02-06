interface AlbumWireframeProps {
  spotifyLink: string;
}

export function AlbumWireframe({ spotifyLink }: AlbumWireframeProps) {
  return (
    <div className="album-wireframe">
       <iframe style={{ borderRadius: '12px' }} src={spotifyLink} width="100%" height="500" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  );
}
