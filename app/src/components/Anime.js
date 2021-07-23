import axios from 'axios';
import React, {useEffect} from 'react'
import { useParams } from 'react-router'

function Anime() {
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v3/anime/${id}`)
        .then(res => {
            console.log(res)
        })
    },[])
    return (
        <div>
            
        </div>
    )
}

export default Anime
