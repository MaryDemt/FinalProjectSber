import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LinkMUI from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { addLikeQuery, deleteLikeQuery } from '../../redux/actions/likesAC';
import { deletePostQuery } from '../../redux/actions/postsAC';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostsItem({image, author, title, text, _id, created_at, likes}) {
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch()
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const date = new Date(created_at).toLocaleString()
  const description = text.length > 200 ? text.slice(0, 200) + '...' : text
  const userId = useSelector((store) => store.person._id)
 
  const isLike = likes.includes(userId)

  const likeHandler = () => {
    // console.log({userId, likes})
    // console.log(!likes.includes(userId))
    if (!likes.includes(userId)) {
      dispatch(addLikeQuery(_id))
    } else {
      dispatch(deleteLikeQuery(_id))
    }
  }

  
  const deleteHandler = () => dispatch(deletePostQuery(_id))// Удалить пост, висит на кнопке со значком мусорки. 
  return (
		<Grid item direction='column' xs={6}>

		
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {author?.name.slice(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
					{description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"onClick={likeHandler}>
           {isLike ? <FavoriteIcon /> : <FavoriteBorderIcon  />}
          <p>{likes.length}</p>
        </IconButton>
        <LinkMUI component={Link} to={`/posts/${_id}`}><Button type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }} >
                Edit
          </Button>
        </LinkMUI>
        <IconButton aria-label="delete" onClick={deleteHandler}>
          <DeleteForeverIcon />
        </IconButton>
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
        <CardContent>

          <Typography paragraph>
						{text}
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
		</Grid>
  );
}

