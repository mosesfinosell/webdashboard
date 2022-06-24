import axios from "axios"
import toast from "react-hot-toast"

const collectEmail = (data) => {
    
    axios.post(`${process.env.REACT_APP_FINOSELL_BASE_URI}/email`, data)
    .then((res)=>{
        toast.success("Email saved.")
        
    })
    .catch(err=>{
        toast.error("Error while saving email.")
    })
}

export default collectEmail