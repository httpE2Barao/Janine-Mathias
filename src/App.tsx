import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Biography } from './components/Biography';
import { ReleaseCard } from './components/ReleaseCard';
import { ShowCard } from './components/ShowCard';
import { SocialLinks } from './components/SocialLinks';
import { ReleasePage } from './pages/ReleasePage';
import { releases } from './data/releases';
import { shows } from './data/shows';
import { AlbumWireframe } from './components/AlbumWireframe';
import { Header } from './components/Header';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div id="home">
        <Hero
          name="Janine Mathias"
          title="Cantora • Compositora • Intérprete"
          backgroundImage="/images/main-banner.png"
        />
      </div>

      <div className='pt-10' id="about">
        <Biography
          image="/images/sobre-banner.png"
          content={{
            title: "Sobre Mim",
            paragraphs: [
              "Com uma voz única e presença marcante, venho encantando o público com minha música que mistura MPB, soul e elementos contemporâneos. Minha jornada musical começou nas raízes do samba e da bossa nova, evoluindo para um som próprio que transcende gêneros.",
              "Através das minhas composições, busco criar conexões profundas e emocionais, trazendo histórias que falam sobre amor, vida e experiências humanas universais. Cada apresentação é uma oportunidade de compartilhar não apenas música, mas também momentos de verdadeira conexão com o público."
            ]
          }}
        />
      </div>

      <div className='pt-10' id="releases">
        <section className="bg-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Últimos Lançamentos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {releases.map((release, index) => (
                <ReleaseCard key={index} release={release} />
              ))}
            </div>
            <div className='mx-auto mt-20 w-full'>
              <h3 className="text-3xl font-bold mb-4">As mais tocadas no Spotify</h3>
              <AlbumWireframe spotifyLink='https://open.spotify.com/embed/artist/0IVFb2BEbIsxxhtKw3Yyus' />
            </div>
          </div>
        </section>
      </div>

      <section className="py-10 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Próximos Shows</h2>
          <div className="space-y-6">
            {shows.map((show, index) => (
              <ShowCard key={index} show={show} />
            ))}
          </div>
        </div>
      </section>

      <div className='pt-6' id="contact">
        <section className="bg-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Entre em contato!</h2>
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
      </div>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Janine Mathias. Todos os direitos reservados.</p>
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
