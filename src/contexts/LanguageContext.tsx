import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Common
    'common.name': 'Cai Zhaoxian',
    
    // Navigation
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.title': 'Independent Animator',
    'hero.description': 'Creating stunning animations that bring stories to life through creative motion design and visual effects.',
    'hero.cta': 'View My Work',
    'hero.contact': 'Get in Touch',
    
    // Portfolio
    'portfolio.title': 'Featured Work',
    'portfolio.description': 'A selection of my recent animation projects showcasing different styles and techniques.',
    'portfolio.category.character': 'Character Animation',
    'portfolio.category.houdini': 'Houdini Rendering',
    'portfolio.category.motion': 'Motion Graphics',
    'portfolio.category.3d': '3D Animation',
    'portfolio.category.interactive': 'Interactive Installation',
    'portfolio.gallery': 'Project Gallery',
    'portfolio.video': 'Project Video',
    'portfolio.tools': 'Tools & Software',
    
    // Portfolio Projects
    'portfolio.project1.title': 'Remember like a fish',
    'portfolio.project1.description': 'This film tells the story of an elderly person living alone, who is jolted awake on the sofa due to a vague and fading memory.',
    'portfolio.project1.detailed': 'This film tells the story of an elderly person living alone, who is jolted awake on the sofa due to a vague and fading memory. Using the popular myth that \'a fish\'s memory lasts only seven seconds\' as a narrative metaphor, the film explores the emotional distress caused by memory decline in old age, and calls for greater care and attention toward the elderly at home.',
    
    'portfolio.project2.title': 'Bubble Burst',
    'portfolio.project2.description': 'A procedurally generated bubble-bursting visual effect that captures dynamic morphological transformation through particle and pyro-based simulation.',
    'portfolio.project2.detailed': 'This project focuses on exploring the application of node-based procedural workflows in visual effects using Houdini. By constructing a bubble-bursting simulation, the process incorporates DOP Networks and Wrangle nodes to control particle systems, while the Pyro Source Spread node is used to simulate morphological changes during the bursting phase. The project not only strengthened my understanding of the fundamental principles of procedural thinking but also deepened my awareness of the logical connections between different platforms, highlighting the efficiency and creative potential of procedural generation in animation and VFX production.',
    
    'portfolio.project3.title': 'Audio Identity',
    'portfolio.project3.description': 'An interactive audio-based project that explores self-identity within the blurred boundaries of virtual and real environments through participatory music generation.',
    'portfolio.project3.detailed': 'With the reconstruction of the concepts of "virtual" and "reality" in the context of technological development, an expression space different from the real world has been opened up. The theme of the work is the recognition and exploration of self-identity within an environment where the virtual and reality are intertwined. At its core is an interactive program that generates and stores music. The program poses four questions to participants, designed to explore their self-perception, sense of social belonging, and value and trust systems, helping them clarify and explore their self-identity from different perspectives.',
    
    'portfolio.project4.title': '3D Wonderland',
    'portfolio.project4.description': 'A stylized 3D environment showcasing lighting and composition techniques.',
    'portfolio.project4.detailed': '3D Wonderland showcases advanced 3D modeling, lighting, and rendering techniques in a fantastical environment. The project demonstrates mastery of spatial composition, material creation, and atmospheric effects. Each scene is carefully crafted to create a sense of wonder and immersion.',
    
    // About
    'about.title': 'About Me',
    'about.description': 'Passionate animator dedicated to creating captivating visual stories.',
    'about.content': 'Hi, I am Cai Zhaoxian, an independent animator and digital media artist whose practice centers on emotional projection and personal growth. My work explores how inner experiences are shaped through memory, imagination, and subconscious perception, and how these intangible states can be translated into visual narratives. My work primarily uses stop-motion and 2D animation, alongside 3D techniques for visual and spatial exploration. I am also interested in Chinese culture and mythological narratives, reinterpreting traditional symbols through contemporary personal perspectives. When I\'m not animating, I\'m exploring new techniques, studying motion in nature, and finding inspiration in everyday moments. I\'m always excited to collaborate on projects that push creative boundaries.',
    
    // Skills
    'skills.title': 'Skills & Expertise',
    'skills.description': 'Technical skills and creative tools I use to bring animations to life.',
    'skills.animation': 'Animation',
    'skills.motion': 'Motion Graphics',
    'skills.modeling': '3D Modeling',
    'skills.vfx': 'Visual Effects',
    'skills.tools': 'Tools & Software',
    'skills.tools.description': 'Professional software and tools I work with',
    
    // Skills Cards
    'skills.card.2d.title': '2D Animation',
    'skills.card.2d.desc': 'Character animation, frame-by-frame animation, and traditional techniques.',
    'skills.card.3d.title': '3D Animation',
    'skills.card.3d.desc': 'Modeling, rigging, lighting, and rendering in industry-standard software.',
    'skills.card.motion.title': 'Motion Graphics',
    'skills.card.motion.desc': 'Dynamic graphics, kinetic typography, and abstract visual design.',
    'skills.card.vfx.title': 'Visual Effects',
    'skills.card.vfx.desc': 'Compositing, particle systems, and seamless integration of effects.',
    'skills.card.storyboard.title': 'Storyboarding',
    'skills.card.storyboard.desc': 'Conceptualizing and planning visual narratives from script to screen.',
    'skills.card.art.title': 'Art Direction',
    'skills.card.art.desc': 'Creating cohesive visual styles and guiding creative projects.',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.description': 'I\'m always open to new projects and collaborations. Feel free to reach out!',
    'contact.email': 'Email Me',
    'contact.bilibili': 'Bilibili',
    'contact.bilibili.account': '静泽小饼干anan',
    'contact.xiaohongshu': 'Xiaohongshu (Little Red Book)',
    'contact.xiaohongshu.account': '百里云吞-990574837',
    'contact.form.title': 'Get in Touch',
    'contact.form.emailNotice': 'Your message will be sent to: 18261170803@163.com',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Thank you for your message! I\'ll get back to you soon.',
    'contact.form.error': 'Failed to send message. Please try again or contact me directly via email.',
    'contact.form.placeholder.name': 'Your name',
    'contact.form.placeholder.email': 'your.email@example.com',
    'contact.form.placeholder.message': 'Tell me about your project...',
    'contact.available.title': 'Available for Projects',
    'contact.available.desc': 'I\'m currently accepting new projects and collaborations. Whether you need character animation, motion graphics, or complete visual storytelling, let\'s discuss how I can help bring your vision to life.',
    'contact.footer': '© 2025 Cai Zhaoxian. All rights reserved.',
  },
  zh: {
    // Common
    'common.name': '蔡昭贤',
    
    // Navigation
    'nav.portfolio': '作品集',
    'nav.about': '关于我',
    'nav.skills': '技能',
    'nav.contact': '联系方式',
    
    // Hero
    'hero.greeting': '你好，我是',
    'hero.title': '独立动画师',
    'hero.description': '通过创意运动设计和视觉效果创作令人惊叹的动画，让故事生动起来。',
    'hero.cta': '查看作品',
    'hero.contact': '联系我',
    
    // Portfolio
    'portfolio.title': '精选作品',
    'portfolio.description': '精选近期动画项目，展示不同风格和技术。',
    'portfolio.category.character': '角色动画',
    'portfolio.category.houdini': 'Houdini渲染',
    'portfolio.category.motion': '运动图形',
    'portfolio.category.3d': '3D动画',
    'portfolio.category.interactive': '互动装置',
    'portfolio.gallery': '项目图集',
    'portfolio.video': '项目视频',
    'portfolio.tools': '工具与软件',
    
    // Portfolio Projects
    'portfolio.project1.title': '像鱼一样记忆',
    'portfolio.project1.description': '这部影片讲述了一位独居老人因模糊且逐渐消退的记忆而从沙发上惊醒的故事。',
    'portfolio.project1.detailed': '这部影片讲述了一位独居老人因模糊且逐渐消退的记忆而从沙发上惊醒的故事。影片借用广为流传的"鱼的记忆只有七秒"这一说法作为叙事隐喻，探讨了老年记忆衰退所带来的情感困扰，并呼吁人们给予家中老人更多的关心和关注。',
    
    'portfolio.project2.title': '泡泡爆裂',
    'portfolio.project2.description': '通过粒子和火焰模拟捕捉动态形态转换的程序化生成气泡爆裂视觉效果。',
    'portfolio.project2.detailed': '该项目专注于探索使用Houdini在视觉效果中应用基于节点的程序化工作流程。通过构建气泡爆裂模拟，该过程结合了DOP网络和Wrangle节点来控制粒子系统，同时使用Pyro Source Spread节点模拟爆裂阶段的形态变化。该项目不仅加强了我对程序化思维基本原理的理解，还加深了我对不同平台之间逻辑连接的认识，突出了程序化生成在动画和视效制作中的效率和创意潜力。',
    
    'portfolio.project3.title': '音频身份',
    'portfolio.project3.description': '一个互动音频项目，通过参与式音乐生成探索虚拟和现实环境模糊边界内的自我认同。',
    'portfolio.project3.detailed': '在技术发展的背景下，重新构建"虚拟"和"现实"的概念，开辟了一个不同于现实世界的表达空间。作品的主题是在虚拟和现实交织的环境中认识和探索自我认同。核心是一个互动程序，生成并存储音乐。该程序向参与者提出四个问题，旨在探索他们的自我感知、社会归属感以及价值观和信任系统，帮助他们从不同角度澄清和探索自我认同。',
    
    'portfolio.project4.title': '3D仙境',
    'portfolio.project4.description': '展示灯光和构图技术的风格化3D环境。',
    'portfolio.project4.detailed': '3D仙境在奇幻环境中展示了高级3D建模、灯光和渲染技术。该项目展示了对空间构图、材质创建和氛围效果的精通。每个场景都经过精心制作，营造出奇妙和沉浸的感觉。',
    
    // About
    'about.title': '关于我',
    'about.description': '热衷于创作引人入胜的视觉故事的动画师。',
    'about.content': '我是一名独立动画师和数字媒体艺术家，我的实践集中在情感投射和个人成长上。我的工作探索了内心体验如何通过记忆、想象和潜意识感知塑造，以及这些无形状态如何转化为视觉叙事。我的工作主要使用定格动画和2D动画，同时使用3D技术进行视觉和空间探索。我对中华文化和神话叙事感兴趣，通过当代个人视角重新诠释传统符号。当我不在制作动画时，我探索新技术，研究自然中的运动，并从日常时刻中寻找灵感。我总是对推动创意边界的项目充满热情。',
    
    // Skills
    'skills.title': '技能与专长',
    'skills.description': '我用来赋予动画生命的技术技能和创意工具。',
    'skills.animation': '动画制作',
    'skills.motion': '运动图形',
    'skills.modeling': '3D建模',
    'skills.vfx': '视觉效果',
    'skills.tools': '工具与软件',
    'skills.tools.description': '我使用的专业软件和工具',
    
    // Skills Cards
    'skills.card.2d.title': '2D动画',
    'skills.card.2d.desc': '角色动画、逐帧动画和传统技术。',
    'skills.card.3d.title': '3D动画',
    'skills.card.3d.desc': '在行业标准软件中进行建模、绑定、灯光和渲染。',
    'skills.card.motion.title': '运动图形',
    'skills.card.motion.desc': '动态图形、动态字幕和抽象视觉设计。',
    'skills.card.vfx.title': '视觉效果',
    'skills.card.vfx.desc': '合成、粒子系统和效果的无缝集成。',
    'skills.card.storyboard.title': '分镜头脚本',
    'skills.card.storyboard.desc': '从剧本到屏幕的概念化和规划视觉叙事。',
    'skills.card.art.title': '艺术指导',
    'skills.card.art.desc': '创建统一的视觉风格并指导创意项目。',
    
    // Contact
    'contact.title': '联系我',
    'contact.description': '我随时欢迎新项目和合作机会，请随时联系！',
    'contact.email': '发送邮件',
    'contact.bilibili': 'Bilibili',
    'contact.bilibili.account': '静泽小饼干anan',
    'contact.xiaohongshu': 'Xiaohongshu (Little Red Book)',
    'contact.xiaohongshu.account': '百里云吞-990574837',
    'contact.form.title': '联系我',
    'contact.form.emailNotice': '您的消息将发送到: 18261170803@163.com',
    'contact.form.name': '姓名',
    'contact.form.email': '电子邮件',
    'contact.form.message': '消息',
    'contact.form.send': '发送消息',
    'contact.form.sending': '发送中...',
    'contact.form.success': '感谢您的消息！我将尽快回复您。',
    'contact.form.error': '发送消息失败。请重试或直接通过电子邮件联系我。',
    'contact.form.placeholder.name': '您的姓名',
    'contact.form.placeholder.email': 'your.email@example.com',
    'contact.form.placeholder.message': '告诉我您的项目...',
    'contact.available.title': '项目可用',
    'contact.available.desc': '我目前接受新项目和合作。无论您需要角色动画、运动图形还是完整的视觉叙事，让我们讨论如何帮助您实现愿景。',
    'contact.footer': '© 2025 蔡兆贤. 保留所有权利。',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}