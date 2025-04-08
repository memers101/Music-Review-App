import React from 'react';
import '../App.css'
import EditRanking from './EditRanking'
import DeleteRanking from './DeleteRanking'
import ViewRanking from './ViewRanking';

function aRanking({singleRanking, onDeleteRanking, onEditRanking, onViewRanking}) {
    if (singleRanking.notes) {
        return (
            <div>
                <br/>
                <h3>{singleRanking.title} by {singleRanking.artists}</h3>
                <p>Producers: {singleRanking.producers}</p>
                <p>Release Year: {singleRanking.releaseYear}</p>
                <p>Ranking: {singleRanking.ranking}</p>
                <ViewRanking rankingToView={singleRanking} onViewRanking={onViewRanking}></ViewRanking>
                <EditRanking rankingToEdit={singleRanking} onEditRanking={onEditRanking}></EditRanking>
                <DeleteRanking rankingToDelete={singleRanking} onDeleteRanking={onDeleteRanking}></DeleteRanking>
            </div>
        )
    }
    else {
        return (
            <div>
                <br/>
                <h3>{singleRanking.title} by {singleRanking.artists}</h3>
                <p>Producers: {singleRanking.producers}</p>
                <p>Release Year: {singleRanking.releaseYear}</p>
                <p>Ranking: {singleRanking.ranking}</p>
                <EditRanking rankingToEdit={singleRanking} onEditRanking={onEditRanking}></EditRanking>
                <DeleteRanking rankingToDelete={singleRanking} onDeleteRanking={onDeleteRanking}></DeleteRanking>
            </div>
        )
    }
}

export default aRanking