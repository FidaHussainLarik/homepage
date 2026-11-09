import { Box, Container } from '@mui/material'
import MobileNavigation from './MobileNavigation'
import Sidebar from './Sidebar'

function Layout({ identity, navigation, socialLinks, children }) {
  return (
    <Box id="page-shell">
      <MobileNavigation identity={identity} navigation={navigation} socialLinks={socialLinks} />
      <Container maxWidth="xl" className="site-container">
        <Sidebar identity={identity} navigation={navigation} socialLinks={socialLinks} />
        <Box component="main" className="main-content">
          {children}
        </Box>
      </Container>
    </Box>
  )
}

export default Layout
