import React from 'react';
import '../App.css'
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';

function ViewAlbumPage({albumToView}) {
    const title = albumToView.title
    const artists = albumToView.artists
    const producers = albumToView.producers
    const releaseYear = albumToView.releaseYear
    const notes = albumToView.notes
    const Navigate = useNavigate()

    const goBack = async() => {
        Navigate("/");
    }

    const getLink = async () => {
            try {
              const url = `/spotify-album?album=${encodeURIComponent(title)}&artist=${encodeURIComponent(artists)}`;
              const response = await fetch(url);
              const data = await response.json();
              const linkToOpen = data.spotifyLink
          
              if (response.ok) {
                window.open(linkToOpen, "_blank")
              } else {
                console.error('Error:', data.error);
              }
            } 
            catch (error) {
              console.error('Error calling Spotify Album Link Microservice:', error);
            }
    }

    return(
        <div>
            <div>
            <h1>View Album Notes Page</h1>
            <br/>
            <h3>{title} by {artists}</h3>
            <p>Producers: {producers}</p>
            <p>Release Year: {releaseYear}</p>
            <p>Notes: "{notes}"</p>
            </div>
            <div>
                <button onClick={getLink}>Get Spotify Link</button>
            </div>
            <div>
                <button onClick={goBack}>Go Back To Albums List</button>
            </div>
        </div>
    )
}

export default ViewAlbumPage