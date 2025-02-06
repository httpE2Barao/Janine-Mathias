import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AlbumWireframe } from './components/AlbumWireframe';
import { Biography } from './components/Biography';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ReleaseCard } from './components/ReleaseCard';
import { ShowCard } from './components/ShowCard';
import { SocialLinks } from './components/SocialLinks';
import { releases } from './data/releases';
import { shows } from './data/shows';
import { ReleasePage } from './pages/ReleasePage';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50">
      <section id="home" className="relative h-screen scroll-section">
        <Hero
          name="Janine Mathias"
          title="Cantora • Compositora • Intérprete"
          backgroundImage="/images/banner-cropped.jpg"
        />
      </section>

      <section id="about" className="section-spacing bg-white scroll-section">
        <div className="container-width">
          <h2 className="section-title">Sobre Mim</h2>
          <Biography
            image="/images/sobre-banner.png"
            content={{
              paragraphs: [
                "Com uma voz única e presença marcante, venho encantando o público com minha música que mistura MPB, soul e elementos contemporâneos. Minha jornada musical começou nas raízes do samba e da bossa nova, evoluindo para um som próprio que transcende gêneros.",
                "Através das minhas composições, busco criar conexões profundas e emocionais, trazendo histórias que falam sobre amor, vida e experiências humanas universais. Cada apresentação é uma oportunidade de compartilhar não apenas música, mas também momentos de verdadeira conexão com o público."
              ]
            }}
          />
        </div>
      </section>

      <section id="releases" className="section-spacing bg-gradient-to-r from-purple-50 to-pink-50 scroll-section">
        <div className="container-width">
          <h2 className="section-title">Últimos Lançamentos</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {releases.map((release, index) => (
              <div className="transform hover:scale-105 transition-transform duration-300" key={index}>
                <ReleaseCard release={release} />
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mt-20">
            <h3 className="text-3xl font-bold mb-8 text-center">As mais tocadas no Spotify</h3>
            <AlbumWireframe spotifyLink='https://open.spotify.com/embed/artist/0IVFb2BEbIsxxhtKw3Yyus' />
          </div>
        </div>
      </section>

      <section id="shows" className="section-spacing bg-white scroll-section">
        <div className="container-width">
          <h2 className="section-title">Próximos Shows</h2>
          <div className="grid gap-6">
            {shows.map((show, index) => (
              <div className="transform hover:-translate-y-1 transition-transform duration-300" key={index}>
                <ShowCard show={show} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="media" className="section-spacing bg-gradient-to-r from-purple-50 to-pink-50 scroll-section">
        <div className="container-width">
          <h2 className="section-title">Entre na família da nega!</h2>
          <div className="max-w-[700px] mx-auto">
            <div className="instagram-reels rounded-2xl overflow-hidden shadow-xl">
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
      </section>

      <section id="contact" className="section-spacing bg-white scroll-section">
        <div className="container-width">
          <h2 className="section-title">Entre em Contato</h2>
          <SocialLinks
            links={{
              instagram: "https://instagram.com/janinemathias",
              youtube: "https://www.youtube.com/channel/UCGEC1gpceg6DMhM7sDtXjZA",
              spotify: "https://open.spotify.com/intl-pt/artist/0IVFb2BEbIsxxhtKw3Yyus",
              email: "contatojaninemathias@gmail.com"
            }}
          />
        </div>
      </section>

      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12 px-4">
        <div className="container-width text-center">
          <p className="text-gray-200">© 2025 Janine Mathias. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/release/:id" element={<ReleasePage />} />
      </Routes>
    </Router>
  );
}
