import { ExternalLink, Github } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Tamil Vetri Kalagam',
      description: 'A community platform built with HTML and modern web technologies for cultural engagement and information sharing.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/SuriyakaantSR/Tamil_vetri_kalagam',
      live: '#',
    },
    {
      title: 'Python Full Stack Development',
      description: 'Comprehensive full-stack application showcasing Python backend integration with modern frontend technologies.',
      technologies: ['Python', 'HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/SuriyakaantSR/Python-Full-Stack-Development',
      live: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern and responsive portfolio website showcasing projects, skills, and professional experience.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/SuriyakaantSR/Portfolio',
      live: '#',
    },
    {
      title: 'Web Development Projects',
      description: 'Collection of web development projects demonstrating various frontend technologies and design patterns.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/SuriyakaantSR/Web-Development-Projects',
      live: '#',
    },
    {
      title: 'Skill Development Hub',
      description: 'Educational platform focused on skill development and learning resources for students and professionals.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/SuriyakaantSR/Skill-Development',
      live: '#',
    },
    {
      title: 'College-Company Projects',
      description: 'Python-based projects combining academic learning with real-world company project requirements.',
      technologies: ['Python', 'Data Analytics'],
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/SuriyakaantSR/College-Company-Projects',
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
