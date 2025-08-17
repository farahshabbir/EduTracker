import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  Divider,
  TextField,
  Paper,
} from '@mui/material';

const ThemeShowcase: React.FC = () => {
  return (
    <Box sx={{ p: 4, bgcolor: 'background.default', color: 'text.primary' }}>
      <Typography variant="h4" gutterBottom>
        🎨 Education Tracker Theme Showcase
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* TYPOGRAPHY */}
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          📚 Typography Variants
        </Typography>
        <Typography variant="h1">H1 - Heading 1</Typography>
        <Typography variant="h2">H2 - Heading 2</Typography>
        <Typography variant="h3">H3 - Heading 3</Typography>
        <Typography variant="h4">H4 - Heading 4</Typography>
        <Typography variant="h5">H5 - Heading 5</Typography>
        <Typography variant="h6">H6 - Heading 6</Typography>
        <Typography variant="body1">Body1 - Standard body text</Typography>
        <Typography variant="body2">Body2 - Secondary body text</Typography>
        <Typography variant="caption">Caption - Small text</Typography>
        <Typography variant="overline">Overline - Label</Typography>
      </Box>

      {/* BUTTONS */}
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          🔘 Button Variants 1
        </Typography>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          Contained Primary
        </Button>
        <Button variant="outlined" color="primary" sx={{ mr: 2 }}>
          Outlined Primary
        </Button>
        <Button variant="text" color="primary">
          Text Primary
        </Button>
      </Box>

      {/* BUTTONS */}
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          🔘 Button Variants
        </Typography>

        {/* Contained Buttons */}
        <Typography variant="subtitle1" mt={2}>
          Contained
        </Typography>
        <Grid container spacing={2} mt={1}>
          <Grid>
            <Button variant="contained" color="primary">
              Primary
            </Button>
          </Grid>
          <Grid>
            <Button variant="contained" color="primary" disabled>
              Disabled
            </Button>
          </Grid>
          <Grid>
            <Button variant="contained" color="primary" size="small">
              Small
            </Button>
          </Grid>
          <Grid>
            <Button variant="contained" color="primary" size="large">
              Large
            </Button>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              color="primary"
              href="https://example.com"
              target="_blank"
            >
              Anchor Link
            </Button>
          </Grid>
        </Grid>

        {/* Outlined Buttons */}
        <Typography variant="subtitle1" mt={4}>
          Outlined
        </Typography>
        <Grid container spacing={2} mt={1}>
          <Grid>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
          </Grid>
          <Grid>
            <Button variant="outlined" color="primary" disabled>
              Disabled
            </Button>
          </Grid>
          <Grid>
            <Button variant="outlined" color="primary" size="small">
              Small
            </Button>
          </Grid>
          <Grid>
            <Button variant="outlined" color="primary" size="large">
              Large
            </Button>
          </Grid>
          <Grid>
            <Button
              variant="outlined"
              color="primary"
              href="https://example.com"
              target="_blank"
            >
              Anchor Link
            </Button>
          </Grid>
        </Grid>

        {/* Text Buttons */}
        <Typography variant="subtitle1" mt={4}>
          Text
        </Typography>
        <Grid container spacing={2} mt={1}>
          <Grid>
            <Button variant="text" color="primary">
              Primary
            </Button>
          </Grid>
          <Grid>
            <Button variant="text" color="primary" disabled>
              Disabled
            </Button>
          </Grid>
          <Grid>
            <Button variant="text" color="primary" size="small">
              Small
            </Button>
          </Grid>
          <Grid>
            <Button variant="text" color="primary" size="large">
              Large
            </Button>
          </Grid>
          <Grid>
            <Button
              variant="text"
              color="primary"
              href="https://example.com"
              target="_blank"
            >
              Anchor Link
            </Button>
          </Grid>
        </Grid>

        {/* Full Width Button */}
        <Typography variant="subtitle1" mt={4}>
          Full Width
        </Typography>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
          Full Width Button
        </Button>
      </Box>

      {/* TEXT COLORS */}
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          📝 Text Color Variants
        </Typography>
        <Typography color="text.primary">Text Primary</Typography>
        <Typography color="text.secondary">Text Secondary</Typography>
        <Typography color="text.disabled">Text Disabled</Typography>
        <Typography color="text.hint">Text Hint</Typography>
      </Box>

      {/* BACKGROUNDS */}
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          🧱 Background Colors
        </Typography>
        <Card sx={{ mb: 2 }}>
          <CardContent>
            <Typography>
              Card with <code>background.paper</code>
            </Typography>
          </CardContent>
        </Card>
        <Paper sx={{ p: 2, bgcolor: 'background.secondary' }}>
          <Typography>
            Paper with <code>background.secondary</code>
          </Typography>
        </Paper>
      </Box>

      {/* BORDERS */}
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          📏 Border Variants
        </Typography>
        <Box
          sx={{
            p: 2,
            border: 1,
            borderColor: 'border.main',
            borderRadius: 2,
            mb: 2,
          }}
        >
          Border: <code>border.main</code>
        </Box>
        <Box
          sx={{
            p: 2,
            border: 1,
            borderColor: 'border.light',
            borderRadius: 2,
          }}
        >
          Border: <code>border.light</code>
        </Box>
      </Box>

      {/* GRADES */}
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          🏅 Grade Chips
        </Typography>
        <Grid container spacing={1}>
          <Grid size="auto">
            <Chip
              label="Excellent (A)"
              sx={{ bgcolor: 'grade.excellent', color: '#fff' }}
            />
          </Grid>
          <Grid size="auto">
            <Chip
              label="Good (B)"
              sx={{ bgcolor: 'grade.good', color: '#fff' }}
            />
          </Grid>
          <Grid size="auto">
            <Chip
              label="Average (C)"
              sx={{ bgcolor: 'grade.average', color: '#000' }}
            />
          </Grid>
          <Grid size="auto">
            <Chip
              label="Poor (D)"
              sx={{ bgcolor: 'grade.poor', color: '#fff' }}
            />
          </Grid>
          <Grid size="auto">
            <Chip
              label="Fail (F)"
              sx={{ bgcolor: 'grade.fail', color: '#fff' }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* INPUT FIELD */}
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          ✍️ TextField Example
        </Typography>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: 400 }}
        />
      </Box>

      {/* HOVER COLOR */}
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          🖱️ Hover Variant Box
        </Typography>
        <Box
          sx={{
            p: 2,
            bgcolor: 'hover.main',
            borderRadius: 2,
            transition: 'background 0.3s',
            '&:hover': {
              bgcolor: 'hover.secondary',
            },
          }}
        >
          <Typography>Hover over this box to see hover styles</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ThemeShowcase;
