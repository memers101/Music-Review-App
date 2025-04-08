import '../App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EditAlbumPage({albumToEdit}) {
    const [title, setTitle] = useState(albumToEdit.title)
    const [artists, setArtists] = useState(albumToEdit.artists)
    const [producers, setProducers] = useState(albumToEdit.producers)
    const [releaseYear, setReleaseYear] = useState(albumToEdit.releaseYear)
    const [notes, setNotes] = useState(albumToEdit.notes)
    
    const navigate = useNavigate();
    
    const editAlbum = async () => {
        if(window.confirm("Are you sure you want to edit this album? This action could erase current information."))
        {
            const response = await fetch(`/albums/${albumToEdit._id}`, {
                method: 'PUT',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({title, artists, producers, releaseYear, notes})
            })
            if (response.status === 200) 
            {
                alert("Album was successfully edited.")
            }
            else 
            {
                alert(`Failed to edit ${title}, status code = ${response.status}.`)
            }
            navigate("/")     
        }
        else
        {
            alert("Editing opperation was cancelled.")
            navigate("/")   
        }   
    }
    
    
    return(
    <div>
        <div><h1>Edit Album Page</h1></div>
        <div><h3>Update the desired values and press "Edit Album" to save the updates.</h3></div>
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
            <button onClick={editAlbum}>Edit Album</button>
        </div>
    </div>
    )
}

export default EditAlbumPage