import '../App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function AddRankingComponent() {
    const [title, setTitle] = useState('')
    const [artists, setArtists] = useState('')
    const [producers, setProducers] = useState('')
    const [releaseYear, setReleaseYear] = useState(1)
    const [ranking, setRanking] = useState(1)
    const [notes, setNotes] = useState('')
    
    const navigate = useNavigate();
    
    const addRanking = async () => {
        const response = await fetch('/rankings', {
            method: 'POST',
            body: JSON.stringify({title, artists, producers, releaseYear, ranking, notes}),
            headers: {'Content-Type':'application/json'}
        })
        if (response.status === 201) 
        {
            alert(`${title} was added to your "My Rankings Page"`)
        }
        else 
        {
            alert(`${title} was unable to be added to your "My Rankings Page"`)
        }
        navigate("/")    
    }
    
    
    return(
    <div>
        <div><h1>Add Ranking </h1></div>
        <div><h3>Input below the ranking title, artists' names, producers' names, release year, and an optional note.</h3>
        <h3> Press "Add Ranking" to add the ranking to your list. </h3></div>
        <div>
            <form>
                <fieldset className="form">
                    <legend>Ranking Details</legend>
                    <label>Enter the album's title: 
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
        <button onClick={addRanking}>Add Ranking</button>
        </div>
    </div>
    )
}

export default AddRankingComponent