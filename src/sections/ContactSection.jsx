import { Box, Button, Typography } from '@mui/material'
import SectionHeading from '../components/SectionHeading'

function ContactSection({ socialLinks }) {
  return (
    <Box component="section" id="contact" className="content-section contact-section">
      <SectionHeading eyebrow="06 — Contact">Let&apos;s connect</SectionHeading>
      <Typography color="text.secondary" sx={{ maxWidth: 620 }}>
        If you would like to follow my learning journey or talk about software, AI, and building for the web, find me through one of these profiles.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 4, flexWrap: 'wrap' }}>
        {socialLinks.map((link) => (
          <Button key={link.label} component="a" href={link.href} target="_blank" rel="noreferrer" variant="outlined">
            Visit {link.label}
          </Button>
        ))}
      </Box>
    </Box>
  )
}

export default ContactSection
