import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, MessageCircle, Code, Palette, Zap, ExternalLink, Star, GitFork, ArrowLeft, Calendar, User, Briefcase } from 'lucide-react';

type Page = 'home' | 'web-applications' | 'ui-ux-design' | 'ai-integration' | 'neural-style-transfer' | 'shadow-cipher' | 'mafia-game-engine' | 'neon-dashboard';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    if (currentPage === 'home') {
      const handleScroll = () => {
        const sections = ['home', 'about', 'projects', 'services', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [currentPage]);

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const repositories = [
    {
      name: "Neural-Style-Transfer",
      description: "AI-powered art generation using deep learning techniques",
      language: "Python",
      stars: 142,
      forks: 28,
      isPrivate: false,
      page: 'neural-style-transfer' as Page
    },
    {
      name: "Shadow-Cipher",
      description: "Advanced encryption tool with anime-inspired UI",
      language: "TypeScript",
      stars: 89,
      forks: 15,
      isPrivate: false,
      page: 'shadow-cipher' as Page
    },
    {
      name: "Mafia-Game-Engine",
      description: "Turn-based strategy game engine with AI opponents",
      language: "Rust",
      stars: 234,
      forks: 41,
      isPrivate: false,
      page: 'mafia-game-engine' as Page
    },
    {
      name: "Neon-Dashboard",
      description: "Real-time analytics dashboard with cyberpunk aesthetics",
      language: "React",
      stars: 167,
      forks: 22,
      isPrivate: true,
      page: 'neon-dashboard' as Page
    }
  ];

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Applications",
      description: "Full-stack web applications with modern frameworks and cutting-edge design. From concept to deployment, I craft digital experiences that captivate and perform.",
      features: ["React/Next.js", "Node.js/Python Backend", "Database Design", "API Development"],
      page: 'web-applications' as Page
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "Immersive interfaces that blend aesthetics with functionality. Creating digital environments that feel like stepping into another dimension.",
      features: ["Design Systems", "Prototyping", "Animation", "User Research"],
      page: 'ui-ux-design' as Page
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "AI Integration",
      description: "Intelligent applications powered by machine learning. Bringing artificial intelligence to solve real-world problems with elegant solutions.",
      features: ["ML Models", "Data Analysis", "Automation", "Neural Networks"],
      page: 'ai-integration' as Page
    }
  ];

  if (currentPage !== 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Navigation for sub-pages */}
        <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <button
                onClick={() => navigateToPage('home')}
                className="flex items-center space-x-2 text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-300 hover:to-purple-300 transition-all duration-300"
              >
                <ArrowLeft size={24} className="text-pink-400" />
                <span>akaneoshi</span>
              </button>
            </div>
          </div>
        </nav>

        <div className="pt-20">
          {currentPage === 'web-applications' && <WebApplicationsPage />}
          {currentPage === 'ui-ux-design' && <UIUXDesignPage />}
          {currentPage === 'ai-integration' && <AIIntegrationPage />}
          {currentPage === 'neural-style-transfer' && <NeuralStyleTransferPage />}
          {currentPage === 'shadow-cipher' && <ShadowCipherPage />}
          {currentPage === 'mafia-game-engine' && <MafiaGameEnginePage />}
          {currentPage === 'neon-dashboard' && <NeonDashboardPage />}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-300 hover:to-purple-300 transition-all duration-300"
            >
              akaneoshi
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-300 hover:text-pink-400 ${
                    activeSection === item.id ? 'text-pink-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-gray-300 hover:text-pink-400 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              akaneoshi
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Shadow Developer • Digital Architect • Code Artisan
            </p>
            <div className="flex justify-center space-x-6">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25"
          >
            Enter the Digital Realm
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm akaneoshi, a shadow developer who crafts digital experiences in the intersection of 
                technology and art. Like a character from an underground syndicate, I operate in the 
                depths of code, creating powerful applications that blur the line between reality and 
                the digital realm.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans across full-stack development, AI/ML, and creating immersive user 
                experiences. I believe in the philosophy that code is poetry, and every application 
                tells a story worth experiencing.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                {['React', 'TypeScript', 'Python', 'Rust', 'Node.js', 'AI/ML', 'WebGL', 'Cybersecurity'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-sm hover:border-pink-400/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center border border-purple-500/30">
                <Code size={120} className="text-purple-400" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-pink-400/30">
                <Zap size={32} className="text-pink-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Shadow Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {repositories.map((repo, index) => (
              <div
                key={repo.name}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-pink-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer"
                onClick={() => navigateToPage(repo.page)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    <Github size={20} className="text-purple-400" />
                    {repo.name}
                  </h3>
                  {repo.isPrivate && (
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                      Private
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mb-4">{repo.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      {repo.language}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={14} />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={14} />
                      {repo.forks}
                    </span>
                  </div>
                  <ExternalLink size={16} className="text-pink-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            What You Want to Make
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer"
                onClick={() => navigateToPage(service.page)}
              >
                <div className="text-cyan-400 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                  <span className="mr-2">Learn More</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Meet With Me
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Ready to bring your vision to life? Let's connect in the digital realm and create something extraordinary together.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email",
                description: "akaneoshi@digital.realm",
                action: "Send Message",
                href: "mailto:akaneoshi@digital.realm"
              },
              {
                icon: <Github className="w-8 h-8" />,
                title: "GitHub",
                description: "@akaneoshi",
                action: "View Profile",
                href: "https://github.com/akaneoshi"
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Discord",
                description: "akaneoshi#0001",
                action: "Connect",
                href: "https://discord.com/users/akaneoshi"
              }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-pink-400/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-pink-400 mb-4 flex justify-center">{contact.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">{contact.title}</h3>
                <p className="text-gray-300 mb-4">{contact.description}</p>
                <span className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm">
                  {contact.action}
                </span>
              </a>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6">
              Whether it's a web application, AI integration, or a complete digital transformation, 
              I'm here to make your vision a reality.
            </p>
            <a
              href="mailto:akaneoshi@digital.realm?subject=Project Inquiry"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25"
            >
              Let's Create Something Amazing
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 akaneoshi. Crafted in the shadows of the digital realm.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Service Pages Components
function WebApplicationsPage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Code className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Web Applications
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Full-stack web applications that push the boundaries of what's possible in the browser. 
            From concept to deployment, I craft digital experiences that captivate and perform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Frontend Excellence</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>React & Next.js Applications</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>TypeScript Integration</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>Responsive Design Systems</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>Performance Optimization</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Backend Power</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Node.js & Python APIs</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Database Architecture</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Authentication Systems</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Cloud Deployment</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">Ready to Build Your Web Application?</h3>
          <p className="text-gray-300 mb-6">
            Let's discuss your project requirements and create something extraordinary together.
          </p>
          <a
            href="mailto:akaneoshi@digital.realm?subject=Web Application Project"
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
}

function UIUXDesignPage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Palette className="w-20 h-20 text-pink-400 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            UI/UX Design
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Immersive interfaces that blend aesthetics with functionality. Creating digital environments 
            that feel like stepping into another dimension.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Design Philosophy</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Anime-Inspired Aesthetics</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Dark Mode Excellence</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Micro-Interactions</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Emotional Design</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Technical Skills</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Figma & Prototyping</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Design Systems</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>User Research</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Accessibility</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">Transform Your Digital Presence</h3>
          <p className="text-gray-300 mb-6">
            Let's create a design that not only looks stunning but tells your unique story.
          </p>
          <a
            href="mailto:akaneoshi@digital.realm?subject=UI/UX Design Project"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Design With Me
          </a>
        </div>
      </div>
    </div>
  );
}

function AIIntegrationPage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Zap className="w-20 h-20 text-purple-400 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            AI Integration
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Intelligent applications powered by machine learning. Bringing artificial intelligence 
            to solve real-world problems with elegant solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">AI Capabilities</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Neural Networks</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Computer Vision</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Natural Language Processing</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Predictive Analytics</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Implementation</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>TensorFlow & PyTorch</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>API Integration</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>Model Optimization</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>Real-time Processing</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">Harness the Power of AI</h3>
          <p className="text-gray-300 mb-6">
            Ready to integrate intelligent features into your application? Let's explore the possibilities.
          </p>
          <a
            href="mailto:akaneoshi@digital.realm?subject=AI Integration Project"
            className="inline-block bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Explore AI Solutions
          </a>
        </div>
      </div>
    </div>
  );
}

// Project Pages Components
function NeuralStyleTransferPage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Github className="w-8 h-8 text-purple-400 mr-3" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Neural Style Transfer
            </h1>
          </div>
          <div className="flex items-center justify-center space-x-6 mb-6">
            <span className="flex items-center text-gray-300">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
              Python
            </span>
            <span className="flex items-center text-gray-300">
              <Star size={16} className="mr-1" />
              142 stars
            </span>
            <span className="flex items-center text-gray-300">
              <GitFork size={16} className="mr-1" />
              28 forks
            </span>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            AI-powered art generation using deep learning techniques. Transform any image into a masterpiece 
            using the artistic style of famous painters or create your own unique aesthetic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Features</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Real-time Style Transfer</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Custom Style Training</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Batch Processing</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Web Interface</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Technology Stack</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>TensorFlow 2.0</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>OpenCV</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Flask API</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Docker</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">Explore the Code</h3>
          <p className="text-gray-300 mb-6">
            Dive into the implementation details and see how deep learning transforms ordinary images into art.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/akaneoshi/neural-style-transfer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View on GitHub
            </a>
            <a
              href="https://neural-style-demo.akaneoshi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShadowCipherPage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Github className="w-8 h-8 text-purple-400 mr-3" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Shadow Cipher
            </h1>
          </div>
          <div className="flex items-center justify-center space-x-6 mb-6">
            <span className="flex items-center text-gray-300">
              <div className="w-3 h-3 bg-cyan-400 rounded-full mr-2"></div>
              TypeScript
            </span>
            <span className="flex items-center text-gray-300">
              <Star size={16} className="mr-1" />
              89 stars
            </span>
            <span className="flex items-center text-gray-300">
              <GitFork size={16} className="mr-1" />
              15 forks
            </span>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Advanced encryption tool with anime-inspired UI. Secure your data with military-grade encryption 
            while enjoying a beautiful, intuitive interface that makes cryptography accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Security Features</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>AES-256 Encryption</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>RSA Key Exchange</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>Zero-Knowledge Architecture</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>Secure File Shredding</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">User Experience</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Drag & Drop Interface</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Dark Theme Design</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Progress Animations</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Cross-Platform</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">Secure Your Digital Life</h3>
          <p className="text-gray-300 mb-6">
            Experience the perfect blend of security and aesthetics. Your data deserves both protection and style.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/akaneoshi/shadow-cipher"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View Source
            </a>
            <a
              href="https://cipher.akaneoshi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Try It Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function MafiaGameEnginePage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Github className="w-8 h-8 text-purple-400 mr-3" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Mafia Game Engine
            </h1>
          </div>
          <div className="flex items-center justify-center space-x-6 mb-6">
            <span className="flex items-center text-gray-300">
              <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
              Rust
            </span>
            <span className="flex items-center text-gray-300">
              <Star size={16} className="mr-1" />
              234 stars
            </span>
            <span className="flex items-center text-gray-300">
              <GitFork size={16} className="mr-1" />
              41 forks
            </span>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Turn-based strategy game engine with AI opponents. Experience the thrill of underground politics 
            and strategy in a beautifully crafted digital world where every decision matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Game Features</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Strategic Gameplay</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>AI Opponents</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Multiplayer Support</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Rich Storyline</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Technical Excellence</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center"><div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>Rust Performance</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>WebAssembly</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>Real-time Networking</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>Cross-Platform</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">Enter the Underground</h3>
          <p className="text-gray-300 mb-6">
            Step into a world of strategy, deception, and power. Are you ready to build your empire?
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/akaneoshi/mafia-game-engine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View Code
            </a>
            <a
              href="https://mafia.akaneoshi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Play Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function NeonDashboardPage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Github className="w-8 h-8 text-purple-400 mr-3" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Neon Dashboard
            </h1>
            <span className="ml-4 px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full border border-yellow-500/30">
              Private
            </span>
          </div>
          <div className="flex items-center justify-center space-x-6 mb-6">
            <span className="flex items-center text-gray-300">
              <div className="w-3 h-3 bg-cyan-400 rounded-full mr-2"></div>
              React
            </span>
            <span className="flex items-center text-gray-300">
              <Star size={16} className="mr-1" />
              167 stars
            </span>
            <span className="flex items-center text-gray-300">
              <GitFork size={16} className="mr-1" />
              22 forks
            </span>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Real-time analytics dashboard with cyberpunk aesthetics. Visualize complex data streams 
            in a stunning interface that makes information beautiful and actionable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Analytics Power</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>Real-time Data Streams</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>Interactive Charts</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>Custom Metrics</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>Alert Systems</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Visual Excellence</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Cyberpunk Aesthetics</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Neon Animations</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Responsive Design</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>Dark Mode Native</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">Private Repository</h3>
          <p className="text-gray-300 mb-6">
            This project showcases advanced dashboard capabilities with proprietary features. 
            Contact me to discuss similar implementations for your organization.
          </p>
          <a
            href="mailto:akaneoshi@digital.realm?subject=Dashboard Project Inquiry"
            className="inline-block bg-gradient-to-r from-cyan-500 to-pink-600 hover:from-cyan-600 hover:to-pink-700 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Request Access
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;