import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import SocialLinks from './SocialLinks'

function Sidebar({ identity, navigation, socialLinks }) {
  return (
    <Box component="aside" className="desktop-sidebar">
      <Stack spacing={5} sx={{ position: 'sticky', top: 48 }}>
        <Box>
          <Typography component="p" variant="h6" color="primary.main">
            {identity.shortName}.
          </Typography>
          <Typography component="h1" variant="h1" sx={{ fontSize: 'clamp(2.4rem, 4vw, 4rem)', mt: 2 }}>
            {identity.name}
          </Typography>
          <Typography color="text.primary" sx={{ mt: 2, maxWidth: 300 }}>
            {identity.role}
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            {identity.goal}
          </Typography>
        </Box>
        <Divider />
        <Stack component="nav" aria-label="Primary navigation" spacing={1}>
          {navigation.map((item) => (
            <Button
              key={item.href}
              component="a"
              href={item.href}
              variant="text"
              sx={{
                justifyContent: 'flex-start',
                color: 'text.secondary',
                px: 0,
                '&:hover': { color: 'primary.main', backgroundColor: 'transparent', pl: 1 },
                transition: 'all 180ms ease',
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
        <SocialLinks links={socialLinks} />
      </Stack>
    </Box>
  )
}

export default Sidebar
