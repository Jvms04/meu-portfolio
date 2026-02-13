'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FadingSlideshow from './media/FadingSlideshow';
import VideoLoop from './media/VideoLoop';
import BeforeAfterSlider from './media/BeforeAfterSlider';
import ComingSoon from './media/ComingSoon';

// ─── Types ───────────────────────────────────────────────

type MediaType = 'slideshow' | 'video' | 'before-after' | 'coming-soon';

interface ProjectMedia {
  type: MediaType;
  // Slideshow
  images?: string[];
  // Video
  videoSrc?: string;
  videoPoster?: string;
  // Before/After
  beforeImage?: string;
  afterImage?: string;
}

interface Project {
  number: string;
  type: string;
  title: string;
  description: string;
  tags: string;
  link: string;
  reversed: boolean;
  comingSoon?: boolean;
  media: ProjectMedia;
}

// ─── Data ────────────────────────────────────────────────

const projects: Project[] = [
  {
    number: "01",
    type: "COMMERCIAL PROJECT",
    title: "ECOSSISTEMA DIGITAL MODERNO",
    description: "Reconstrução integral da plataforma institucional utilizando tecnologias de ponta para garantir máxima performance. Responsável pela definição da stack e implementação de interfaces dinâmicas, elevando o padrão tecnológico da entrega corporativa.",
    tags: "NEXT.JS / REACT / TYPESCRIPT / TAILWIND CSS",
    link: "#",
    reversed: false,
    comingSoon: true,
    media: {
      type: 'slideshow',
      images: [
        '/projetos/site-comercial-1.webp',
        '/projetos/site-comercial-2.webp',
        '/projetos/site-comercial-3.webp',
      ],
    },
  },
  {
    number: "02",
    type: "SAAS DEVELOPMENT",
    title: "ABNT: ENGENHARIA DOCUMENTAL",
    description: "Desenvolvimento de uma plataforma inteligente para a automação rigorosa de normas acadêmicas. O projeto utiliza Inteligência Artificial para processamento de linguagem natural e um backend robusto em Python, transformando a complexidade das regras da ABNT em uma experiência de formatação invisível e precisa.",
    tags: "NEXT.JS / REACT / FASTAPI / POSTGRESQL / AI API",
    link: "#",
    reversed: true,
    comingSoon: true,
    media: {
      type: 'slideshow',
      images: [
        '/projetos/saas1.webp',
        '/projetos/saas2.webp',
        '/projetos/saas3.webp',
      ],
    },
  },
];

// ─── Media Renderer ──────────────────────────────────────

function ProjectMedia({ media }: { media: ProjectMedia }) {
  switch (media.type) {
    case 'slideshow':
      return <FadingSlideshow images={media.images || []} />;
    case 'video':
      return <VideoLoop src={media.videoSrc || ''} poster={media.videoPoster} />;
    case 'before-after':
      return (
        <BeforeAfterSlider
          beforeImage={media.beforeImage || ''}
          afterImage={media.afterImage || ''}
        />
      );
    case 'coming-soon':
      return <ComingSoon />;
    default:
      return null;
  }
}

// ─── Main Component ──────────────────────────────────────

export default function Projetos() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto space-y-32">
        {projects.map((project, index) => (
          <div
            key={project.number}
            className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${
              project.reversed ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Media Side */}
            <motion.div
              className="w-full md:w-3/5 relative"
              initial={{ opacity: 0, x: project.reversed ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectMedia media={project.media} />
              {project.comingSoon && (
                <div className="absolute top-4 left-4 bg-editorial-orange text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-sm z-10">
                  Em Desenvolvimento
                </div>
              )}
            </motion.div>

            {/* Text Side */}
            <motion.div
              className="w-full md:w-2/5 space-y-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="text-xs font-bold tracking-widest text-editorial-orange uppercase">
                {project.number} — {project.type}
              </div>

              <h3 className="font-serif text-5xl md:text-6xl text-editorial-orange leading-tight">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                {project.description}
              </p>

              <div className="text-[10px] font-bold tracking-widest uppercase text-editorial-orange pt-2">
                {project.tags}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

