import { Box, Typography } from '@mui/material'

function Footer({ name }) {
  return (
    <Box component="footer" sx={{ py: 5, borderTop: 1, borderColor: 'divider' }}>
      <Typography variant="body2" color="text.secondary">
        Designed and built by {name}. Learning in public, one project at a time.
      </Typography>
    </Box>
  )
}

export default Footer
