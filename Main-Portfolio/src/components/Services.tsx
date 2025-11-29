import { Code, Palette, Database, Smartphone, Globe, Cpu } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Programming & Development',
      description:
        'Python, JavaScript, Java, HTML, CSS, Node.js, React, and Flask for building scalable applications.',
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description:
        'Pandas, NumPy, Matplotlib, Seaborn, Plotly, SQLite, and MongoDB for data analysis and visualization.',
    },
    {
      icon: Cpu,
      title: 'Embedded & IoT',
      description:
        'Arduino, ESP32, Embedded Systems, and IoT Prototyping for hardware-software integration projects.',
    },
    {
      icon: Smartphone,
      title: 'Tools & Platforms',
      description:
        'Git, GitHub, Visual Studio Code, Figma, Canva, and OpenCV for development and design workflows.',
    },
    {
      icon: Globe,
      title: 'Strengths',
      description:
        'Strong problem-solving, technical initiative, quick learning, leadership mindset, and excellent communication skills.',
    },
    {
      icon: Palette,
      title: 'Achievements',
      description:
        'Volunteered in major college technical events, contributed to open-source projects, and proposed business-tech innovation at Accenture.',
    },
  ];

  return (
    <section id="services" className="min-h-screen bg-gray-900 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-green-400">Services</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I offer a wide range of services to help bring your ideas to life with cutting-edge
            technology and creative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 bg-gray-800 rounded-lg border border-green-400/20 hover:border-green-400 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-green-400/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-400/20 transition-colors">
                  <Icon className="text-green-400" size={32} />
                </div>
                <h3 className="text-white text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-400/10 to-transparent border border-green-400/30 rounded-lg p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life with innovative solutions and modern
              technologies.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-green-400 text-gray-900 font-semibold rounded-full hover:bg-transparent hover:text-green-400 border-2 border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/50"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
