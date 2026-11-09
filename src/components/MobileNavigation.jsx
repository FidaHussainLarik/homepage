import { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import SocialLinks from './SocialLinks'

function MobileNavigation({ identity, navigation, socialLinks }) {
  const [open, setOpen] = useState(false)

  const closeDrawer = () => setOpen(false)

  return (
    <>
      <AppBar position="sticky" className="mobile-header" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between', px: '0 !important' }}>
          <Typography component="a" href="#top" variant="h6" color="primary.main" sx={{ textDecoration: 'none' }}>
            {identity.shortName}.
          </Typography>
          <IconButton
            aria-label="Open navigation menu"
            color="primary"
            onClick={() => setOpen(true)}
            sx={{ border: 1, borderColor: 'primary.main', borderRadius: 1 }}
          >
            <Box component="span" aria-hidden="true" sx={{ fontSize: '1.2rem', lineHeight: 1 }}>
              ☰
            </Box>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <Stack component="nav" aria-label="Mobile navigation" spacing={1} sx={{ width: 260, p: 4 }}>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            {identity.name}
          </Typography>
          {navigation.map((item) => (
            <Button
              key={item.href}
              component="a"
              href={item.href}
              onClick={closeDrawer}
              sx={{ justifyContent: 'flex-start', color: 'text.primary' }}
            >
              {item.label}
            </Button>
          ))}
          <Box sx={{ mt: 3 }}>
            <SocialLinks links={socialLinks} />
          </Box>
        </Stack>
      </Drawer>
    </>
  )
}

export default MobileNavigation
