import { ExternalLink, Github } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A fully responsive personal website built using HTML, CSS, and JavaScript to showcase projects and skills. Backend integration using Node.js is currently under development.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/SuriyakaantSR/Portfolio',
      live: '#',
    },
    {
      title: 'CRUD Book Management System',
      description: 'A complete web application that allows users to add, update, delete, and manage books efficiently with a clean UI and optimized backend logic.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#',
    },
    {
      title: 'Real-Time Face Recognition Attendance System',
      description: 'A Python and OpenCV-based system that automates attendance using real-time video processing with 95% recognition accuracy.',
      technologies: ['Python', 'OpenCV', 'Machine Learning'],
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="portfolio" className="min-h-screen bg-gray-800 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-green-400">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my latest projects showcasing web development, full-stack applications, and
            innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden border border-green-400/20 hover:border-green-400 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-xs font-medium border border-green-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
