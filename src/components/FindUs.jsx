import { ExternalLink } from 'lucide-react';

const FindUs = () => {
  // 📍 Paste your exact Google Maps link here:
  const directMapsUrl =
    'https://maps.app.goo.gl/JUYkB6iZSpZNwaDNA';
  
  // (Alternatively, if you have a short link like 'https://maps.app.goo.gl/xxxx', you can paste it directly above)

  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5198004351614!2d79.10581037530382!3d21.131702480543492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1a55a7b5369%3A0xf49188df3f3776cb!2sWealth%20Point!5e0!3m2!1sen!2sin!4v1788359464787!5m2!1sen!2sin';

  return (
    <section id="find-us" className="pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Rectangular Map Only */}
        <div className="relative w-full h-72 sm:h-100 lg:h-115 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          
          {/* Open in Maps button */}
          <a
            href={directMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 bg-white text-blue-700 px-4 py-2.5 rounded-xl shadow-lg border border-gray-100 text-sm font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            Open in Maps
            <ExternalLink size={14} />
          </a>

          <iframe
            title="Wealth Point Office Location"
            src={mapEmbedUrl}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default FindUs;