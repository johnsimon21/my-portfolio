import { Project } from '../../constants/projects';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  isPortuguese: boolean;
}

export const ProjectModal = ({ project, isOpen, onClose, isPortuguese }: ProjectModalProps) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          {/* Project Image */}
          <div className="relative h-64 md:h-80">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Project Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-white/90 text-lg">
                {isPortuguese ? project.shortDescription.pt : project.shortDescription.en}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#208FBB] mb-4">
                {isPortuguese ? 'Sobre o Projeto' : 'About the Project'}
              </h3>
              <p className="text-[#D0D8EA] leading-relaxed text-lg">
                {isPortuguese ? project.description.pt : project.description.en}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#208FBB] mb-4">
                {isPortuguese ? 'Principais Características' : 'Key Features'}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(isPortuguese ? project.highlights.pt : project.highlights.en).map((highlight, index) => (
                  <li key={index} className="flex items-center text-[#D0D8EA]">
                    <span className="text-[#208FBB] mr-3">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#208FBB] mb-4">
                {isPortuguese ? 'Tecnologias Utilizadas' : 'Technologies Used'}
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#208FBB]/20 text-[#208FBB] px-4 py-2 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#208FBB] hover:bg-[#1A7A9A] text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 text-center"
                >
                  {isPortuguese ? 'Ver Demo ao Vivo' : 'View Live Demo'}
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#2E3B63] hover:bg-[#3A4A73] text-[#D0D8EA] py-3 px-6 rounded-lg font-semibold transition-colors duration-200 text-center"
                >
                  {isPortuguese ? 'Ver Código' : 'View Code'}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};