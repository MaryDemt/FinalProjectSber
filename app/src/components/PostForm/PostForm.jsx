import { Paper, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { queryNewPost } from "../../redux/actions/postsAC";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");
  
  const [titleDirty, setTitleDirty] = useState(false)
  const [titleError, setTitleError] = useState("Строка не может быть пустой")
  const titleHandler = (e) => {
    setTitle(e.target.value)
    if(e.target.value.length < 3) {
    setTitleError("Минимум 3 символа")
    if(!e.target.value) {
      setTitleError("Строка не может быть пустой")
    }
    } else {
      setTitleError("")
    }
  }

  const [textDirty, setTextDirty] = useState(false)
  const [textError, setTextError] = useState("Строка не может быть пустой")
  const textHandler = (e) => {
    setText(e.target.value)
    if(e.target.value.length < 3) {
    setTextError("Минимум 3 символа")
    if(!e.target.value) {
      setTextError("Строка не может быть пустой")
    }
    } else {
      setTextError("")
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case title:
        setTitleDirty(true)
        break;
      case text:
        setTextDirty(true)
        break;
      default:
        break;
    }
  }
  const dispatch = useDispatch();

  const submitHandler = () => {
    const preparedPostQuery = {
      title,
      text,
      image,
      tags: tags.split(",").map((el) => el.trim()),
    };

    const body = JSON.stringify(preparedPostQuery);

    console.log(body);
    setTitle('')
    setText('')
    setImage('')
    setTags('')
    dispatch(queryNewPost(body));
  };

  
  return (
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
              error= {titleDirty && titleError}
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={title}
              onChange={titleHandler}
              onBlur={(e)=> blurHandler(e)}
              helperText= {(titleDirty && titleError) && "Min. 3 symbols"}
            />
          </div>
          <div>
          
            <TextField
              error= {titleDirty && titleError}
              id="filled-basic"
              label="Text"
              variant="outlined"
              value={text}
              onChange={textHandler}
              onBlur={(e)=> blurHandler(e)}
              helperText= {(textDirty && textError) && "Min. 3 symbols"}
               
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

          <Button onClick={submitHandler} variant="outlined">
            Create Post
          </Button>
        </Stack>
      </Paper>
      </Stack>
  );
};

export default PostForm;