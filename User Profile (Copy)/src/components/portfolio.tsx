import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const projects = [
  {
    id: 1,
    title: "Remember like a fish",
    category: "Character Animation",
    categoryKey: "character",
    description: "This film tells the story of an elderly person living alone, who is jolted awake on the sofa due to a vague and fading memory.",
    image: "https://i.ibb.co/YBFmyKYn/1cover.png",
    detailedDescription: "This film tells the story of an elderly person living alone, who is jolted awake on the sofa due to a vague and fading memory. Using the popular myth that 'a fish's memory lasts only seven seconds' as a narrative metaphor, the film explores the emotional distress caused by memory decline in old age, and calls for greater care and attention toward the elderly at home.",
    videoUrl: "https://player.bilibili.com/player.html?bvid=BV1iu4y137ST&page=1&high_quality=1&danmaku=0&autoplay=0",
    images: [
      "https://i.ibb.co/YBFmyKYn/1cover.png",
      "https://i.ibb.co/Jw4pBYLP/1-7.jpg",
"https://i.ibb.co/qLQYPD0B/1.jpg",
"https://i.ibb.co/SX5wyPM2/1-3.jpg",
"https://i.ibb.co/bgPYxfgK/1-2.jpg",
"https://i.ibb.co/5gCJ3n3z/1-1.jpg",
    ],
    tools: ["Blender", "Capcut", "Procreate"],
    year: "2024",
  },
  {
    id: 2,
    title: "Bubble Burst",
    category: "Houdini Rendering",
    categoryKey: "houdini",
    description: "A procedurally generated bubble-bursting visual effect that captures dynamic morphological transformation through particle and pyro-based simulation.",
    image: "https://i.ibb.co/dwpKhc5S/2cover.png",
    detailedDescription: "This project focuses on exploring the application of node-based procedural workflows in visual effects using Houdini. By constructing a bubble-bursting simulation, the process incorporates DOP Networks and Wrangle nodes to control particle systems, while the Pyro Source Spread node is used to simulate morphological changes during the bursting phase. The project not only strengthened my understanding of the fundamental principles of procedural thinking but also deepened my awareness of the logical connections between different platforms, highlighting the efficiency and creative potential of procedural generation in animation and VFX production.",
    videoUrl: "https://player.bilibili.com/player.html?bvid=BV17bBbB6E46&page=1&high_quality=1&danmaku=0&autoplay=0",
    images: [
      "https://i.ibb.co/dwpKhc5S/2cover.png",
      "https://i.ibb.co/N2BWWmSm/2-1.png",
    ],
    tools: ["Houdini", "Premiere"],
    year: "2024",
  },
  {
    id: 3,
    title: "Audio Identity",
    category: "Interactive Installation",
    categoryKey: "interactive",
    description: "An interactive audio-based project that explores self-identity within the blurred boundaries of virtual and real environments through participatory music generation.",
    image: "https://i.ibb.co/1J7v0zn1/3cover.png",
    detailedDescription: "With the reconstruction of the concepts of 'virtual' and 'reality' in the context of technological development, an expression space different from the real world has been opened up. The theme of the work is the recognition and exploration of self-identity within an environment where the virtual and reality are intertwined. At its core is an interactive program that generates and stores music. The program poses four questions to participants, designed to explore their self-perception, sense of social belonging, and value and trust systems, helping them clarify and explore their self-identity from different perspectives.",

    images: [
      "https://i.ibb.co/1J7v0zn1/3cover.png",
      "https://i.ibb.co/fdrRqwGS/3-1.png",
      "https://i.ibb.co/5XbgCfqY/3-5.png",
    
      "https://i.ibb.co/QqqFhf2/3-2.png"
    ],
    tools: ["Adobe After Effects", "Houdini", "Adobe Premiere"],
    year: "2023",
  },
 
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreenImage, setIsFullscreenImage] = useState(false);
  const { language, t } = useLanguage();

  const openProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    setIsFullscreenImage(false);
    document.body.style.overflow = "auto";
  };

  const openFullscreenImage = () => {
    setIsFullscreenImage(true);
  };

  const closeFullscreenImage = () => {
    setIsFullscreenImage(false);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-4xl">{t('portfolio.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('portfolio.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            // Get translated title and description based on project id
            const titleKey = `portfolio.project${project.id}.title`;
            const descKey = `portfolio.project${project.id}.description`;
            
            return (
              <div
                key={project.id}
                onClick={() => openProject(project)}
                className="group relative overflow-hidden rounded-xl bg-white hover:scale-[1.02] transition-transform duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={t(titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center shadow-lg">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-purple-600 mb-2">{t(`portfolio.category.${project.categoryKey}`)}</div>
                  <h3 className="text-gray-900 mb-2 text-2xl">{t(titleKey)}</h3>
                  <p className="text-gray-600">{t(descKey)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 p-4 overflow-y-auto scrollbar-hide"
          onClick={closeProject}
        >
          <div className="min-h-screen flex items-start justify-center py-12">
            <div 
              className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={closeProject}
                className="sticky top-4 float-right mr-4 mt-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all"
              >
                <X size={24} className="text-gray-700" />
              </button>

              {/* Content Section */}
              <div className="p-8 clear-both">
                {/* Project Introduction */}
                <div className="mb-8">
                  <div className="text-purple-600 mb-2">{t(`portfolio.category.${selectedProject.categoryKey}`)} • {selectedProject.year}</div>
                  <h2 className="text-gray-900 mb-4">{t(`portfolio.project${selectedProject.id}.title`)}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`portfolio.project${selectedProject.id}.detailed`)}
                  </p>
                </div>

                {/* Image Gallery */}
                <div className="mb-8">
                  <h3 className="text-gray-900 mb-3">{t('portfolio.gallery')}</h3>
                  <div className="relative">
                    <div 
                      className="aspect-video rounded-lg overflow-hidden bg-gray-100 cursor-zoom-in"
                      onClick={openFullscreenImage}
                    >
                      <ImageWithFallback
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Navigation Arrows */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all"
                        >
                          <ChevronLeft size={24} className="text-gray-700" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all"
                        >
                          <ChevronRight size={24} className="text-gray-700" />
                        </button>
                      </>
                    )}
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 text-white">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </div>
                  
                  {/* Thumbnail Gallery */}
                  <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide">
                    {selectedProject.images.map((img, index) => (
                      <div
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                          currentImageIndex === index 
                            ? "border-orange-500 scale-105" 
                            : "border-transparent hover:border-orange-300"
                        }`}
                      >
                        <ImageWithFallback
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video Section */}
                {selectedProject.videoUrl && (
                  <div className="mb-8">
                    <h3 className="text-gray-900 mb-3">{t('portfolio.video')}</h3>
                    <div className="w-full bg-black rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      <iframe
                        src={selectedProject.videoUrl}
                        title={selectedProject.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}

                {/* Tools */}
                <div className="mb-6">
                  <h3 className="text-gray-900 mb-3">{t('portfolio.tools')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-orange-50 to-amber-50 text-gray-700 rounded-full border border-orange-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Viewer */}
      {selectedProject && isFullscreenImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={closeFullscreenImage}
        >
          <button 
            onClick={closeFullscreenImage}
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all"
          >
            <X size={28} className="text-gray-700" />
          </button>

          <div 
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={selectedProject.images[currentImageIndex]}
              alt={`${selectedProject.title} - Fullscreen`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Navigation Arrows */}
            {selectedProject.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all"
                >
                  <ChevronLeft size={28} className="text-gray-700" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all"
                >
                  <ChevronRight size={28} className="text-gray-700" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-black/70 text-white">
              {currentImageIndex + 1} / {selectedProject.images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}