interface BiographyProps {
  image: string;
  content: {
    title: string;
    paragraphs: string[];
  };
}

export function Biography({ image, content }: BiographyProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={image}
              alt="Biography"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">{content.title}</h2>
            {content.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-600 mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}