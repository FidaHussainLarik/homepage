import { Box, Button, Stack, Typography } from '@mui/material'

function HeroSection({ identity }) {
  return (
    <Box component="section" id="top" className="hero-section" sx={{ minHeight: { md: '70vh' }, display: 'flex', alignItems: 'center' }}>
      <Box>
        <Typography variant="overline" color="primary.main" sx={{ letterSpacing: '0.16em', fontWeight: 700 }}>
          Hello, I&apos;m
        </Typography>
        <Typography component="h1" variant="h1" sx={{ fontSize: 'clamp(3.2rem, 8vw, 6.5rem)', mt: 2 }}>
          {identity.name}
        </Typography>
        <Typography component="p" variant="h2" sx={{ color: 'text.secondary', maxWidth: 720, mt: 2 }}>
          {identity.role}
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 620, mt: 3 }}>
          I&apos;m learning to turn data, models, and thoughtful interfaces into useful software.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 5 }} flexWrap="wrap" useFlexGap>
          <Button component="a" href="#projects" variant="contained">
            Explore my work
          </Button>
          <Button component="a" href="#contact" variant="outlined">
            Get in touch
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default HeroSection
