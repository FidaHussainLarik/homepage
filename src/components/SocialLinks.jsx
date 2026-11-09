import { Link, Stack } from '@mui/material'

function SocialLinks({ links }) {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          underline="none"
          sx={{
            color: 'text.secondary',
            '&:hover': { color: 'primary.main' },
            transition: 'color 180ms ease',
          }}
        >
          {link.label}
        </Link>
      ))}
    </Stack>
  )
}

export default SocialLinks
