import { Box } from '@mui/material'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'

function ProjectsSection({ projects }) {
  return (
    <Box component="section" id="projects" className="content-section">
      <SectionHeading eyebrow="03 — Featured projects">Things I&apos;ve built while learning</SectionHeading>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Box>
    </Box>
  )
}

export default ProjectsSection
