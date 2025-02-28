import { Release } from '../components/ReleaseCard';

export const releases: Release[] = [
  {
    id: "me ilumina",
    title: "Me Ilumina",
    cover: "/images/capa-me_ilumina.png",
    year: "2024",
    description: "Um mergulho profundo nas raízes da música brasileira, onde Janine explora sua essência artística através de composições originais que misturam elementos tradicionais com sua interpretação contemporânea.",
    tracks: [
      { title: "Manhã de Sol", duration: "3:45" },
      { title: "Flores de Ipê", duration: "4:12" },
      { title: "Caminho das Águas", duration: "3:58" },
      { title: "Dança da Chuva", duration: "4:30" },
      { title: "Luz do Sertão", duration: "3:25" }
    ],
    videos: [
      {
        title: "Manhã de Sol - Videoclipe Oficial",
        url: "https://youtube.com/watch?v=example3",
        thumbnail: "https://images.unsplash.com/photo-1619983081583-6c3c6c895ed5?auto=format&fit=crop&q=80"
      }
    ],
    spotifyLink: "https://open.spotify.com/embed/album/3aXGgF67iw41UoHqD22x9b?utm_source=generator"
  },
  {
    id: "barracao e seu",
    title: "Barração é Seu",
    cover: "/images/capa-barracao_e_seu.png",
    year: "2024",
    description: "O álbum de estreia que apresentou Janine Matias ao Brasil, trazendo uma mistura única de ritmos brasileiros com sua voz marcante e interpretação singular.",
    tracks: [
      { title: "Primeiro Passo", duration: "3:58" },
      { title: "Vento Sul", duration: "4:05" },
      { title: "Madrugada", duration: "3:42" },
      { title: "Céu de Estrelas", duration: "4:18" },
      { title: "Nova Aurora", duration: "3:55" }
    ],
    spotifyLink: "https://open.spotify.com/embed/album/2dM726TT3EeEEVwpkyX065?utm_source=generator"
  },
  {
    id: "dende",
    title: "Dendê",
    cover: "/images/capa-dende.png",
    year: "2018",
    description: "Um álbum que celebra a riqueza da música brasileira através de uma perspectiva contemporânea. Janine Mathias traz sua interpretação única de clássicos e composições originais que mesclam MPB, samba e soul music.",
    tracks: [
      { title: "Coração Brasileiro", duration: "4:15" },
      { title: "Samba da Vida", duration: "3:48" },
      { title: "Noites de São Paulo", duration: "4:02" },
      { title: "Amor sem Fim", duration: "3:56" },
      { title: "Sonho Real", duration: "4:22" }
    ],
    videos: [
      {
        title: "Coração Brasileiro - Videoclipe Oficial",
        url: "https://youtube.com/watch?v=example1",
        thumbnail: "https://images.unsplash.com/photo-1619983081593-e2ba5b543168?auto=format&fit=crop&q=80"
      },
      {
        title: "Samba da Vida - Ao Vivo",
        url: "https://youtube.com/watch?v=example2",
        thumbnail: "https://images.unsplash.com/photo-1619983081583-6c3c6c895ed5?auto=format&fit=crop&q=80"
      }
    ],
    spotifyLink: "https://open.spotify.com/embed/album/2uj1zY8Y4pNcmeZZCGLIvr?utm_source=generator"
  },
];
