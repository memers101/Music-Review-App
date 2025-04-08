import React from 'react';
import '../App.css'
import ARanking from './ARanking'

function RankingList({myRankings, onDeleteRanking, onEditRanking, onViewRanking}) {
    return(
        <div>
            <ul>
                {myRankings.map((ranking,i) => <ARanking singleRanking ={ranking} onDeleteRanking={onDeleteRanking} onEditRanking={onEditRanking} onViewRanking={onViewRanking} key ={i}/>)}
            </ul>
        </div>
    )
}

export default RankingList