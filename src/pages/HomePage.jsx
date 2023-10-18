import { useEffect, useState } from "react";
import ImageCard from "../component/ImageCard";
import "../style/HomePage.css"

function HomePage() {
    const [data, setData] = useState()
    const getData = async () => {
        const response = await fetch("https://api.slingacademy.com/v1/sample-data/photos?limit=20");
        const { photos } = await response.json()
        setData(photos)
        console.log(photos)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div id="home">
            <div id="parent">
                {
                    data?.map((e, i) => {
                        return <ImageCard key={i} imageUrl={e.url} id={e.id} />
                    })
                }
            </div>
        </div>
    )
}

export default HomePage