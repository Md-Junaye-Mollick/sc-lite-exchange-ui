import React from 'react';

const TimeLine = () => {
      const milestones = [
    { year: '2017', event: 'Founded with a vision to revolutionize crypto trading' },
    { year: '2018', event: 'Reached 10 million users milestone' },
    { year: '2020', event: 'Launched futures and derivatives trading' },
    { year: '2023', event: "Became the world's largest crypto exchange by volume" }
  ];
  return (
    <div>
            {/* Timeline Section */}
      <section className="py-16 bg-pre-bg">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Our Journey</span>
            </h2>
            <p className="text-lg text-secondary-desc">
              Key milestones in our path to becoming the world's leading exchange
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient opacity-30 hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`flex items-center group ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="relative bg-sub-card rounded-2xl p-8 border border-custom-border hover:border-accent transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-2xl">
                      <div className="absolute inset-0 bg-gradient opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="inline-block bg-accent/10 px-4 py-2 rounded-full mb-4">
                          <div className="text-2xl md:text-3xl font-bold text-accent group-hover:scale-110 transition-transform duration-300 inline-block">{milestone.year}</div>
                        </div>
                        <p className="text-dispute-color text-lg md:text-xl font-medium leading-relaxed group-hover:text-accent transition-colors duration-300">{milestone.event}</p>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/20 transition-all duration-500"></div>
                    </div>
                  </div>
                  <div className="hidden md:flex w-2/12 justify-center relative z-20">
                    <div className="w-6 h-6 bg-accent rounded-full border-4 border-card shadow-lg group-hover:scale-150 group-hover:shadow-glow transition-all duration-500 relative">
                      <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-0 group-hover:opacity-75"></div>
                    </div>
                  </div>
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TimeLine;