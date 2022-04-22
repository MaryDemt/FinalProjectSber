import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { usePostsDetailContext } from "./PostDetail";
import Comments from "../Comments/Comments"



const PostDetailCard = () => {
  const navigate = useNavigate();
  const { post, openModal } = usePostsDetailContext();
  //console.log(idPost, token, detailPost);
  const date = post.created_at.replace("T", " ").replace("Z", " ")
  const dateNormal = date.substring(0, date.length - 5)
  return (
    <Box m={2} p={2}>
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.title}
        subheader = {dateNormal}
      />
      <CardMedia
        component="img"
        height="300"
        image={post.image}
        alt={post.title}
      />
      <Box sx={{
        mt: 1,
        ml: 1,
      }}>
      <span>{post.text}</span>
      </Box>
      <Grid
        container
        justifyContent="flex-end"
        gap
        m={0}
        p={1}
      >
        <Button type="submit"
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
              onClick={() => navigate(-1)} >
                Go back
          </Button>
        <Button type="submit"
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
              onClick={openModal}>
                Edit
         </Button>
      </Grid>
      <hr />
      <Comments />
    </Card>
    </Box>
  );
};

export default PostDetailCard;
