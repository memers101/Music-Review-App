import '../App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function AddAlbumComponent() {
    const [title, setTitle] = useState('')
    const [artists, setArtists] = useState('')
    const [producers, setProducers] = useState('')
    const [releaseYear, setReleaseYear] = useState(1)
    const [notes, setNotes] = useState('')
    
    const navigate = useNavigate();
    
    const addAlbum = async () => {
        const response = await fetch('/albums', {
            method: 'POST',
            body: JSON.stringify({title, artists, producers, releaseYear, notes}),
            headers: {'Content-Type':'application/json'}
        })
        if (response.status === 201) 
        {
            alert(`${title} was added to your "My Albums Page"`)
        }
        else 
        {
            alert(`${title} was unable to be added to your "My Albums Page"`)
        }
        navigate("/")    
    }
    
    
    return(
    <div>
        <div><h1>Add Album </h1></div>
        <div><h3>Input below the album title, artists' names, producers' names, release year, and an optional note.</h3>
        <h3> Press "Add Album" to add the album to your list. </h3></div>
        <div>
            <form>
                <fieldset className="form">
                    <legend>Album Details</legend>
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
                    <label>Make an optional note about the album: 
                        <input type="text" value={notes} onChange={e => setNotes(e.target.value)}/>
                    </label>
                </fieldset>
            </form>
        </div>
        <div>
        <button onClick={addAlbum}>Add Album</button>
        </div>
    </div>
    )
}

export default AddAlbumComponent