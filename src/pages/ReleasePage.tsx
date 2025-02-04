import React from 'react';
import { useParams } from 'react-router-dom';
import { releases } from '../data/releases';

export function ReleasePage() {
  const { id } = useParams<{ id: string }>();
  const release = releases.find(r => r.id === id);

  if (!release) {
    return <div>Release not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-96">
            <img 
              src={release.cover}
              alt={release.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-8 text-white">
                <h1 className="text-4xl font-bold mb-2">{release.title}</h1>
                <p className="text-xl text-gray-200">{release.year}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="max-w-3xl mx-auto">
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Sobre o Álbum</h2>
                <p className="text-lg text-gray-600">{release.description}</p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Faixas</h2>
                <div className="space-y-4">
                  {release.tracks.map((track, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <span className="text-purple-600 font-semibold mr-4">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="text-gray-800">{track.title}</span>
                      </div>
                      <span className="text-gray-600">{track.duration}</span>
                    </div>
                  ))}
                </div>
              </div>

              {release.videos && release.videos.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Vídeos</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {release.videos.map((video, index) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-md">
                        <a 
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block relative group"
                        >
                          <img 
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full aspect-video object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white text-lg font-semibold">
                              Assistir Vídeo
                            </span>
                          </div>
                        </a>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {video.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}