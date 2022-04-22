import ReactDOM from "react-dom";
import { useEffect } from "react";
import styles from "./Modal.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { modalInnerVariantes, modalWrVariants } from "./modalAnimation";
import { useDispatch } from "react-redux";
import { updatePostQuery } from "../../redux/actions/postsAC";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { usePostsDetailContext } from "../PostDetail/PostDetail";
import { Paper } from "@mui/material";
import { Stack } from "@mui/material";

function Modal({ children, state, ...rest }) {
  return ReactDOM.createPortal(
      <AnimatePresence>
    {state && <ModalInner {...rest}>{children}</ModalInner>}
    </AnimatePresence>,
    document.getElementById("modal-root")
  );
}

const ModalInner = ({ onClose }) => {
  const postId = useParams()
  const escHandler = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };
  const {post, openModal} = usePostsDetailContext()
  useEffect(() => {
    window.document.addEventListener("keydown", escHandler);

    return () => {
      window.document.removeEventListener("keydown", escHandler);
    };
  }, []);
  const [title, setTitle] = useState(post.title);
  const [text, setText] = useState(post.text);
  const [image, setImage] = useState(post.image);
  const [tags, setTags] = useState(post.tags);

  const closeClickHandler = () => {
    onClose();
  };

  const innerClickHandler = (e) => {
    e.stopPropagation();
  };
  const dispatch = useDispatch()
  const submitHandler = () => {
    const preparedPostQuery = {
      title,
      text,
      image,
      tags: tags.split(",").map((el) => el.trim()),
    };

    const body = preparedPostQuery;

    //console.log(body);
    dispatch(updatePostQuery(postId._id, body, onClose()));
  };

    const isTitleError = false;
  return (
    <motion.div
      variants={modalWrVariants}
      initial="start"
      animate="show"
      exit="end"
      onClick={closeClickHandler}
      className={styles.wrapper}
    >
      <motion.div
        variants={modalInnerVariantes}
        onClick={innerClickHandler}
        className={styles.inner}
      >
        <svg
          onClick={closeClickHandler}
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`bi bi-x-square ${styles.icon}`}
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
        <Stack
      component="div"
      direction="column"
      alignItems="center"
    >
    
      <Paper elevation={3} sx={{width: 400}}>
        <Stack
          component="form"
          alignItems="center"
          spacing={2}
          noValidate
          sx={{ py: 5, px: 2 }}
          autoComplete="off"
        >
        <div>
            <TextField
              error={isTitleError}
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={title}
              helperText={isTitleError && "Title must have min 3 symbols"}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="filled-basic"
              label="Text"
              variant="outlined"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Image"
              variant="outlined"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Tags"
              variant="outlined"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          <Button onClick={submitHandler} type="submit"
              variant="contained"
              sx={{ mt: 1, mb: 1 }}>
            Update Post
          </Button>
          </Stack>
          </Paper>
          </Stack>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
