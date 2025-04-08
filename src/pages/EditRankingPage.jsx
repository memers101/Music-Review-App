import '../App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EditRankingPage({rankingToEdit}) {
    const [title, setTitle] = useState(rankingToEdit.title)
    const [artists, setArtists] = useState(rankingToEdit.artists)
    const [producers, setProducers] = useState(rankingToEdit.producers)
    const [releaseYear, setReleaseYear] = useState(rankingToEdit.releaseYear)
    const [ranking, setRanking] = useState(rankingToEdit.ranking)
    const [notes, setNotes] = useState(rankingToEdit.notes)
    
    const navigate = useNavigate();
    
    const editRanking = async () => {
        if(window.confirm("Are you sure you want to edit this ranking? This action could erase current information."))
        {
            const response = await fetch(`/rankings/${rankingToEdit._id}`, {
                method: 'PUT',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({title, artists, producers, releaseYear, ranking, notes})
            })
            if (response.status === 200) 
            {
                alert("Ranking was successfully edited.")
            }
            else 
            {
                alert(`Failed to edit ${title}, status code = ${response.status}.`)
            }
            navigate("/rankingslist")     
        }
        else
        {
            alert("Editing opperation was cancelled.")
            navigate("/rankingslist")   
        }   
    }
    
    
    return(
    <div>
        <div><h1>Edit Ranking Page</h1></div>
        <div><h3>Update the desired values and press "Edit Ranking" to save the updates.</h3></div>
        <div>
            <form>
                <fieldset className="form">
                    <legend>Ranking Details</legend>
                    <label>Enter the album title: 
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                    </label>
                    <br/>
                    <label>Enter the name of the artist or artists: 
                        <input type="text" value={artists} onChange={e => setArtists(e.target.value)}/>
                    </label>
                    <br/>
                    <label>Enter the name of the producer or producers: 
                        <input type="text" value={producers} onChange={e => setProducers(e.target.value)}/>
                    </label>
                    <br/>
                    <label>Enter album's release year: 
                        <input type="number" value={releaseYear} onChange={e => setReleaseYear(e.target.value)}/>
                    </label>
                    <br/>
                    <label>Enter the album ranking: 
                        <input type="number" value={ranking} onChange={e => setRanking(e.target.value)}/>
                    </label>
                    <br/>
                    <label>Make an optional note about the album: 
                        <input type="text" value={notes} onChange={e => setNotes(e.target.value)}/>
                    </label>
                </fieldset>
            </form>
        </div>
        <div>
            <button onClick={editRanking}>Edit Ranking</button>
        </div>
    </div>
    )
}

export default EditRankingPage