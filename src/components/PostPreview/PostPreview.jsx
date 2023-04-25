import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CardActions, CardContent, CardHeader, Collapse } from '@mui/material';
import Card from '@mui/material/Card';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import ExpandMore from './ExpandMore';
import CommentsBlock from './CommentsBlock';
import s from './PostPreview.module.css';

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
            height: '105px',
            alignItems: 'flex-start',
            pb: 0,
          }}
        />

        <CardActions disableSpacing sx={{ px: 2 }}>
          <Link to={`/posts/${id}`} className={s.link}>
            Learn More
          </Link>

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
          <CardContent sx={{ p: 0 }}>
            <CommentsBlock id={id} height={'160px'} scroll={'scroll'} />
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default PostPreview;

PostPreview.propTypes = {
  post: PropTypes.shape({
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
  }).isRequired,
};
