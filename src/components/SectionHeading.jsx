import { Box, Typography } from '@mui/material'

function SectionHeading({ eyebrow, children }) {
  return (
    <Box sx={{ mb: { xs: 4, md: 6 } }}>
      <Typography
        component="p"
        variant="overline"
        sx={{ color: 'primary.main', letterSpacing: '0.16em', fontWeight: 700 }}
      >
        {eyebrow}
      </Typography>
      <Typography component="h2" variant="h2">
        {children}
      </Typography>
    </Box>
  )
}

export default SectionHeading
