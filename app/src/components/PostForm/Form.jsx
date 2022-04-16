import { useDispatch } from 'react-redux';
import { addNewPost } from '../../redux/actions/postsAC';
import PostForm from './PostForm';


function Form () {
  const dispatch = useDispatch()
 const submitHandler = async (e) => {
   e.preventDefault()
   
   const formData = Object.fromEntries(new FormData(e.target).entries())
   
   dispatch(addNewPost(formData, e))
}
  return (
    <PostForm
    onSubmit={submitHandler}
    />
  );
};
export default Form