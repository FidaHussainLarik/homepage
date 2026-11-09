import { Box, Chip, Stack, Typography } from '@mui/material'
import SectionHeading from '../components/SectionHeading'

function SkillsSection({ skills }) {
  return (
    <Box component="section" id="skills" className="content-section">
      <SectionHeading eyebrow="04 — Technical skills">Tools I&apos;m growing with</SectionHeading>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 3 }}>
        {skills.map((skillGroup) => (
          <Box key={skillGroup.group}>
            <Typography component="h3" variant="h3" color="text.primary" sx={{ mb: 2 }}>
              {skillGroup.group}
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {skillGroup.items.map((skill) => (
                <Chip key={skill} label={skill} variant="outlined" />
              ))}
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default SkillsSection
