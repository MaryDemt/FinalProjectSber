import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import { loadAllPosts } from "../../redux/actions/postsAC";
import PostItem from "../PostItem/PostItem";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector((store) => store.posts);
  const search = useSelector((store) => store.search)
  const debouncedSearch = useDebounce(search, 200)
  
  useEffect(() => {
    dispatch(loadAllPosts(debouncedSearch)); 
  }, [debouncedSearch, dispatch])



  if (!posts.length) return <div>Posts list is empty</div>;

  return (
    <Grid container spacing={2} justifyContent="center">
      {posts.map((post) => {
        return <PostItem key={post._id} {...post} />;
      })}
    </Grid>
  );
};

export default PostsList;