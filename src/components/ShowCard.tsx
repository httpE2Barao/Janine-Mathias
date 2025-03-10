import { Calendar } from 'lucide-react';

export interface Show {
  date: string;
  venue: string;
  city: string;
  time: string;
  ticketUrl?: string;
  ehOficina?: boolean;
}

interface ShowCardProps {
  show: Show;
}

export function ShowCard({ show }: ShowCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-wrap items-center justify-between hover:shadow-xl transition-shadow">
      <div className="flex items-center space-x-6">
        <div className="text-center">
          <Calendar className="w-6 h-6 text-purple-500 mx-auto mb-2" />
          <span className="text-lg font-semibold text-gray-800">{show.date}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{show.venue}</h3>
          <p className="text-gray-600">{show.city} • {show.time}</p>
        </div>
      </div>
      {show.ticketUrl && (
        <a
          href={show.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto mt-4 sm:mt-0 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
        >
          {show.ehOficina ? 'Inscrever-se' : 'Comprar Ingresso'}
        </a>
      )}
    </div>
  );
}