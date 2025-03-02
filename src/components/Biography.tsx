interface BiographyProps {
  image: string;
  content: {
    paragraphs: string[];
  };
}

export function Biography({ image, content }: BiographyProps) {
  return (
    <section className="py-10 px-4">
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
            {content.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg md:text-xl text-gray-600 mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}