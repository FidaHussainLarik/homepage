import { Box, Typography } from '@mui/material'
import SectionHeading from '../components/SectionHeading'

function EducationSection({ education }) {
  return (
    <Box component="section" id="education" className="content-section">
      <SectionHeading eyebrow="05 — Education">Building the foundation</SectionHeading>
      <Box sx={{ border: 1, borderColor: 'divider', p: { xs: 3, md: 4 }, maxWidth: 760 }}>
        <Typography component="h3" variant="h3" color="primary.main">
          {education.program}
        </Typography>
        <Typography color="text.primary" sx={{ mt: 1 }}>
          {education.institution}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {education.status}
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 3 }}>
          {education.description}
        </Typography>
      </Box>
    </Box>
  )
}

export default EducationSection
