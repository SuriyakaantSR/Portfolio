import { GraduationCap, Code, Database, Cpu } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'MongoDB', level: 80 },
    { name: 'ESP32/IoT', level: 85 },
    { name: 'OpenCV', level: 80 },
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science and Business Systems',
      institution: 'Rajalakshmi Institute of Technology, Chennai',
      year: '2022 – 2026',
      icon: GraduationCap,
    },
  ];

  const expertise = [
    {
      title: 'Full Stack Development',
      description: 'Building end-to-end web applications with React, Node.js, and modern databases',
      icon: Code,
    },
    {
      title: 'IoT & Embedded Systems',
      description: 'Developing IoT-enabled wearables and embedded systems with ESP32 and Arduino',
      icon: Cpu,
    },
    {
      title: 'Data Analytics',
      description: 'Analyzing and visualizing data using Python, Pandas, and visualization libraries',
      icon: Database,
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-gray-900 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-green-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              About My Journey
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I am a driven and creative Computer Science and Business Systems Engineering student with
              hands-on experience in full-stack development, IoT systems, embedded systems, and data analytics.
              I specialize in building clean, user-centric applications with scalable backend logic and
              modern UI/UX.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My passion lies in combining technology and business to create impactful real-world solutions.
              I have practical experience as an Embedded System Design Intern at Camwear LLP, where I
              developed IoT-enabled wearable prototypes and optimized communication protocols. I'm constantly
              learning and exploring new technologies to enhance my skill set.
            </p>

            <div className="space-y-4 pt-4">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-all"
                  >
                    <Icon className="text-green-400 mt-1 flex-shrink-0" size={28} />
                    <div>
                      <h4 className="text-white font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-gray-400">{edu.institution}</p>
                      <p className="text-green-400 text-sm">{edu.year}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-green-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-400 to-green-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg border border-green-400/20 hover:border-green-400 transition-all hover:transform hover:scale-105 duration-300"
              >
                <Icon className="text-green-400 mb-4" size={40} />
                <h4 className="text-white text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
