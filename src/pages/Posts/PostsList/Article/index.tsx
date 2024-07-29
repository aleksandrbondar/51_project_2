import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CardMedia } from '@mui/material';

interface ArticleInterface {
  title: string
  body: string
  id: number
  img?: string
}

export default function Article({ data }: { data: ArticleInterface }) {
  const { title, body, id, img } = data
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Box sx={{ overflow: 'hidden' }}>
        <CardMedia sx={{ height: 540, objectFit: 'cover', transition: 'all 1s ease', ':hover': { transform: 'scale(1.1)' } }}
          component="img"
          image={img}
          title={title}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => alert(`Share ID: ${id}`)}>Share</Button>
          <Button size="small" onClick={() => window.open(img)}>Learn More</Button>
        </CardActions>
      </Box>
    </Card >
  );
}
