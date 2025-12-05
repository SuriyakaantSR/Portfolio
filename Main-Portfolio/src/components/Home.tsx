import { Download, Github, Linkedin, Youtube, Hash, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const roles = [
  "Python Developer",
  "Full Stack Web Developer",
  "Youtuber",
  "Computer Science and Business Systems Engineer"
];

function TypingAnimation() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 80;
    const delay = isDeleting ? typingSpeed : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setDisplayText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, roleIndex, isDeleting]);

  return (
    <h2 className="text-2xl md:text-3xl font-semibold text-white">
      I'm a{' '}
      <span className="text-[#7cf03d] border-r-2 border-[#7cf03d] pr-1">
        {displayText}
      </span>
    </h2>
  );
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-[9%] pt-[60px]"
      style={{
        visibility: isVisible ? 'visible' : 'hidden',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1.5s linear, visibility 1.5s linear',
      }}
    >
      <div className="w-full grid md:grid-cols-2 gap-12 items-center text-white">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Suriyakaant S R
          </h1>

          <TypingAnimation />

          <p className="text-base text-gray-300 mt-6 mb-8 leading-relaxed max-w-xl">
            I am a driven and creative Computer Science and Business Systems Engineering student
            with hands-on experience in full-stack development, IoT systems, embedded systems, and
            data analytics. I specialize in building clean, user-centric applications with scalable
            backend logic and modern UI/UX. I am passionate about combining technology and business
            to create impactful real-world solutions.
          </p>

          <div className="flex items-center gap-8 mt-8">
            <a
              href="/myresume1.pdf"
              download="Suriyakaant_SR_Resume.pdf"
              className="inline-block px-8 py-3 bg-[#7cf03d] text-[#1f242d] font-semibold rounded-full border-2 border-[#44503d] shadow-[0_0_10px_#7cf03d] transition-all duration-500 hover:bg-transparent hover:text-[#7cf03d] hover:shadow-none"
            >
              Download CV
            </a>

            <div className="flex gap-3">
              <a
                href="https://github.com/SuriyakaantSR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex p-2 border-2 border-[#7cf03d] text-[#7cf03d] rounded-full text-xl transition-all duration-500 hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d]"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/suriyakaant-sr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex p-2 border-2 border-[#7cf03d] text-[#7cf03d] rounded-full text-xl transition-all duration-500 hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d]"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.youtube.com/@srsuriyakaant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex p-2 border-2 border-[#7cf03d] text-[#7cf03d] rounded-full text-xl transition-all duration-500 hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d]"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://discord.gg/SUe7Qf3t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex p-2 border-2 border-[#7cf03d] text-[#7cf03d] rounded-full text-xl transition-all duration-500 hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d]"
              >
                <Hash size={20} />
              </a>
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex p-2 border-2 border-[#7cf03d] text-[#7cf03d] rounded-full text-xl transition-all duration-500 hover:bg-[#7cf03d] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d]"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-[32vw] h-[32vw] min-w-[250px] min-h-[250px] max-w-[500px] max-h-[500px] rounded-full p-[10px] flex justify-center items-center overflow-hidden">
            <div
              className="absolute w-[500px] h-[500px]"
              style={{
                background: 'conic-gradient(transparent, transparent, transparent, #7cf03d)',
                animation: 'rotateBorder 10s linear infinite',
              }}
            ></div>
            <div
              className="absolute w-[500px] h-[500px]"
              style={{
                background: 'conic-gradient(transparent, transparent, transparent, #7cf03d)',
                animation: 'rotateBorder 10s linear infinite',
                animationDelay: '-5s',
              }}
            ></div>
            <div className="relative w-full h-full bg-[#1f242d] rounded-full flex justify-center items-center z-[1] overflow-hidden">
              <img
                src="/11.png"
                alt="Profile"
                className="w-[32vw] h-[32vw] rounded-full object-cover select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
