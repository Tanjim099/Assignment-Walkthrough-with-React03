import React from "react"
import { useNavigate } from "react-router-dom"
function ImageCard({ imageUrl, id }) {
    // console.log(imageUrl)
    const navigate = useNavigate()
    function redirectToPage() {
        navigate(`/${id}`)
    }
    return (
        <div>
            <img src={imageUrl} onClick={redirectToPage} alt="" />
        </div>
    )
}

export default ImageCard