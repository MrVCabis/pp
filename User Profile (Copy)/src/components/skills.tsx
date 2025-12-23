import { Sparkles, Layers, Box, Film, Palette, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const skills = [
  {
    icon: Film,
    title: "2D Animation",
    description: "Character animation, frame-by-frame animation, and traditional techniques.",
  },
  {
    icon: Box,
    title: "3D Animation",
    description: "Modeling, rigging, lighting, and rendering in industry-standard software.",
  },
  {
    icon: Zap,
    title: "Motion Graphics",
    description: "Dynamic graphics, kinetic typography, and abstract visual design.",
  },
  {
    icon: Palette,
    title: "Visual Effects",
    description: "Compositing, particle systems, and seamless integration of effects.",
  },
  {
    icon: Layers,
    title: "Storyboarding",
    description: "Conceptualizing and planning visual narratives from script to screen.",
  },
  {
    icon: Sparkles,
    title: "Art Direction",
    description: "Creating cohesive visual styles and guiding creative projects.",
  },
];

const tools = [
  "Adobe After Effects",
  "Blender",
  "Adobe Animate",
  "Toon Boom Harmony",
  "Adobe Illustrator",
  "Procreate",
  "Adobe Premiere",
  "TVpaint",
  "Houdini",
];

export function Skills() {
  const { t } = useLanguage();
  
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-4xl">{t('skills.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl border border-purple-100 hover:border-orange-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-400 rounded-lg flex items-center justify-center mb-4">
              <Film className="text-white" size={24} />
            </div>
            <h3 className="text-gray-900 mb-2">{t('skills.card.2d.title')}</h3>
            <p className="text-gray-600">{t('skills.card.2d.desc')}</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-purple-100 hover:border-orange-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-400 rounded-lg flex items-center justify-center mb-4">
              <Box className="text-white" size={24} />
            </div>
            <h3 className="text-gray-900 mb-2">{t('skills.card.3d.title')}</h3>
            <p className="text-gray-600">{t('skills.card.3d.desc')}</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-purple-100 hover:border-orange-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-400 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-white" size={24} />
            </div>
            <h3 className="text-gray-900 mb-2">{t('skills.card.motion.title')}</h3>
            <p className="text-gray-600">{t('skills.card.motion.desc')}</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-purple-100 hover:border-orange-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-400 rounded-lg flex items-center justify-center mb-4">
              <Palette className="text-white" size={24} />
            </div>
            <h3 className="text-gray-900 mb-2">{t('skills.card.vfx.title')}</h3>
            <p className="text-gray-600">{t('skills.card.vfx.desc')}</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-purple-100 hover:border-orange-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-400 rounded-lg flex items-center justify-center mb-4">
              <Layers className="text-white" size={24} />
            </div>
            <h3 className="text-gray-900 mb-2">{t('skills.card.storyboard.title')}</h3>
            <p className="text-gray-600">{t('skills.card.storyboard.desc')}</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-purple-100 hover:border-orange-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-400 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="text-white" size={24} />
            </div>
            <h3 className="text-gray-900 mb-2">{t('skills.card.art.title')}</h3>
            <p className="text-gray-600">{t('skills.card.art.desc')}</p>
          </div>
        </div>

        {/* Tools */}
        <div className="bg-white rounded-xl p-8 border border-purple-100 shadow-lg">
          <h3 className="text-gray-900 mb-6 text-center">{t('skills.tools')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-50 via-purple-50 to-orange-50 rounded-full text-gray-700 hover:from-blue-100 hover:via-purple-100 hover:to-orange-100 hover:text-orange-700 transition-all"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}