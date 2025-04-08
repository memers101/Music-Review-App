import React from 'react';
import '../App.css'
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';

function ViewRankingPage({rankingToView}) {
    const title = rankingToView.title
    const artists = rankingToView.artists
    const producers = rankingToView.producers
    const releaseYear = rankingToView.releaseYear
    const ranking = rankingToView.ranking
    const notes = rankingToView.notes
    const Navigate = useNavigate()

    const goBack = async() => {
        Navigate("/rankingslist");
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
            <h1>View Ranking Notes Page</h1>
            <br/>
            <h3>{title} by {artists}</h3>
            <p>Producers: {producers}</p>
            <p>Release Year: {releaseYear}</p>
            <p>Ranking: {ranking}</p>
            <p>Notes: "{notes}"</p>
            </div>
            <div>
                <button onClick={getLink}>Get Spotify Link</button>
            </div>
            <div>
                <button onClick={goBack}>Go Back To Rankings List</button>
            </div>
        </div>
    )
}

export default ViewRankingPage