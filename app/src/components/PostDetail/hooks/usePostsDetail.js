import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { updatePostQuery } from "../../../redux/actions/postsAC"
import { useLayoutEffect } from "react"

const usePostsDetail = ({closeModal, _id}) => {
    //const [loading, setLoading] = useState(false)
  
    const postsId = useParams()

    const dispatch = useDispatch()

    // const controller = useRef(new AbortController())
    
    const post = useSelector((state) => state.posts.find((el)=> el._id === postsId._id)) || {}
console.log(post)
    useLayoutEffect(()=>{
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.target).entries())
        dispatch(updatePostQuery(postsId, formData, closeModal))
      }
    return {
      post,
      submitHandler,
    }
}

export default usePostsDetail