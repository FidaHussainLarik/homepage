import { Box, Stack, Typography } from '@mui/material'
import SectionHeading from '../components/SectionHeading'

function LearningJourneySection({ journey }) {
  return (
    <Box component="section" id="journey" className="content-section">
      <SectionHeading eyebrow="02 — Learning journey">Progress over perfection</SectionHeading>
      <Stack spacing={0}>
        {journey.map((item) => (
          <Box key={item.period} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '110px 1fr' }, gap: 2, py: 3, borderTop: 1, borderColor: 'divider' }}>
            <Typography color="primary.main" variant="overline" sx={{ fontWeight: 700 }}>
              {item.period}
            </Typography>
            <Box>
              <Typography component="h3" variant="h3" color="text.primary">
                {item.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default LearningJourneySection
