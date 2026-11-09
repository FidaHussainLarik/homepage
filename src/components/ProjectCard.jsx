import { Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material'

function ProjectCard({ project }) {
  return (
    <Card
      component="article"
      variant="outlined"
      sx={{
        height: '100%',
        backgroundColor: 'transparent',
        borderColor: 'divider',
        transition: 'transform 180ms ease, border-color 180ms ease, background-color 180ms ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          borderColor: 'primary.main',
          backgroundColor: 'rgba(100, 255, 218, 0.04)',
        },
      }}
    >
      <CardContent sx={{ p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
        <Typography component="h3" variant="h3" sx={{ color: 'text.primary', mb: 2 }}>
          {project.title}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          {project.description}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 4 }}>
          {project.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Stack>
        <Button
          component="a"
          href={project.href}
          target="_blank"
          rel="noreferrer"
          sx={{ alignSelf: 'flex-start', mt: 'auto', color: 'primary.main', px: 0 }}
        >
          View repository ↗
        </Button>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
