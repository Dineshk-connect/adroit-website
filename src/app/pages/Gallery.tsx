import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1758691737182-d42aefd6dee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjB0ZWFtJTIwYmx1ZSUyMHdoaXRlJTIwdGhlbWV8ZW58MXx8fHwxNzcwMDM5NzczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhhbmRzaGFrZSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcwMDM5NzczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1714601344981-75e003bc5d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwZ2xhc3N8ZW58MXx8fHwxNzcwMDM5NzczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMHdvcmtzaG9wJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MDAzOTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758520144661-73849bde0da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFsJTIwdGVhbSUyMGhhcHB5JTIwb2ZmaWNlfGVufDF8fHx8MTc3MDAzOTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1549923746-9507eec27243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIUiUyMG1hbmFnZXIlMjByZXZpZXdpbmclMjByZXN1bWV8ZW58MXx8fHwxNzcwMDM5NzczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1690356107486-0796de806f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd29ya2VyJTIwYXBwcmVudGljZXNoaXAlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzAwMzk3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1765438863717-49fca900f861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwd2hpdGVib2FyZCUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzAwMzk3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80'
  ];

  return (
    <div className="flex flex-col w-full">
       <section className="bg-slate-900 py-20 text-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Glimpses of our workplace, training sessions, and placement drives.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
          >
            <Masonry gutter="20px">
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  style={{width: "100%", display: "block", borderRadius: "12px"}}
                  alt={`Gallery Image ${i}`}
                  className="shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>
    </div>
  );
};
