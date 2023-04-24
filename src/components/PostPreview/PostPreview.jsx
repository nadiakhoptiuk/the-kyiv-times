import { useState } from 'react';
import {
  CardActions,
  // CardContent,
  CardHeader,
  Collapse,
  // Collapse,
} from '@mui/material';
import Card from '@mui/material/Card';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMore from './ExpandMore';
import CommentsBlock from './CommentsBlock';

const PostPreview = ({ post }) => {
  const { title, id } = post;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card
        sx={{
          width: '98%',
          height: '95%',
          boxShadow: '0px 2px 5px 1px rgba(105,105,105,0.3)',
        }}
      >
        <CardHeader
          title={title}
          sx={{
            textTransform: 'capitalize',
            height: '115px',
            alignItems: 'flex-start',
            pb: 0,
          }}
        />

        <CardActions disableSpacing sx={{ p: 0 }}>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CommentsBlock id={id} expanded={expanded} />
        </Collapse>
      </Card>
    </>
  );
};

export default PostPreview;
