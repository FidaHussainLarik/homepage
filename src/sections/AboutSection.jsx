import { Box, Typography } from '@mui/material'
import SectionHeading from '../components/SectionHeading'

function AboutSection({ about }) {
  return (
    <Box component="section" id="about" className="content-section">
      <SectionHeading eyebrow="01 — About">A curious builder</SectionHeading>
      {about.map((paragraph) => (
        <Typography key={paragraph} color="text.secondary" sx={{ maxWidth: 760, mb: 2 }}>
          {paragraph}
        </Typography>
      ))}
    </Box>
  )
}

export default AboutSection
