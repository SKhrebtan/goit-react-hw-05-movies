import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";
async function FetchActor(id) {
        const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=7704615e0d5baf851bf04ec2239749fe&total_results=30`);
    const data = await response.json();
    
             return data
}

export default function Actor() {
    const {actorId} = useParams();
    const [ actor, setActor] = useState([])

    useEffect(() => {
        FetchActor(actorId).then(actor => {
            console.log(actor)
            setActor(actor)
        })
    }, [actorId])

const { name, homepage, birthday, profile_path, biography } = actor;
    return (
        <div style={{ display: 'flex' }}>
              <div>
            <h1>{name}</h1>
            <p>{birthday}</p>
                <p>{homepage}</p>
                <h2>Biography</h2>
                <p>{biography}</p>
            </div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name}></img>
            </div>
        </div>
      
    )
}   