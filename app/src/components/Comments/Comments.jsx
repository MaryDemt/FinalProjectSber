import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadAllComments, queryNewComment } from "../../redux/actions/commentsAC";
import CommentItem from "./CommentItem";

const Comments = () => {
    const [commentForm, setCommentForm] = useState("");
    const postId = useParams()
    const dispatch = useDispatch();

  const comments = useSelector((store) => store.comments);
  useEffect(() => {
    dispatch(loadAllComments(postId._id)); 
  }, [dispatch, commentForm])
  const submitHandler = () => {
    const preparedPostQuery = {
        text: commentForm,
      };
  
      const body = preparedPostQuery;
          dispatch(queryNewComment(body, postId._id))
    
    setCommentForm('')
  }
  //if (!comments.length) return <div>Comments list is empty</div>;
    return (
    <Box sx={{
        display: 'flex',
        flexDirection: { m: 'column'},
    alignItems: 'start',
    bgcolor: 'background.paper',
    overflow: 'hidden',
    padding: '10px',
    margin: '10px',
    justifyContent: 'space-evenly',
    alignContent: 'stretch'
    }}
    >
        <Grid>
      {comments.map((comment) => {
        return <CommentItem key={comment._id} {...comment} />;
      })}
    
    <TextField
      margin="dense" 
      size="small"
      id="standard-basic"
      variant="outlined"
      value={commentForm}
      onChange={(e) => setCommentForm(e.target.value)}
    />
    <Box sx= {{alignSelf: 'flex-end', justifyContent: 'center' }} >
  <Button onClick={submitHandler} variant="outlined">
            Create comment
          </Button>
</Box>
          </Grid>
          </Box>
    )
}

export default Comments