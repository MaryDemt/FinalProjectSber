import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import { usePostsDetailContext } from "./PostDetail";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";


const PostDetailCard = () => {
  const navigate = useNavigate();
  const { post, openModal } = usePostsDetailContext();
  console.log(post);
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
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={post.image}
        alt={post.title}
      />
      <Box sx={{
        margin: 1,
      }}>
      <span>{post.text}</span>
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        m={0}
        p={2}
      >
        <Button variant="outlined" size="small" onClick={() => navigate(-1)}>
          Go back
        </Button>
        <Button variant="outlined" size="small" onClick={openModal}>
          Edit
        </Button>
      </Grid>
    </Card>
    </Box>
  );
};

export default PostDetailCard;
