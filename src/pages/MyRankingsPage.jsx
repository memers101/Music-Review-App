import { useEffect, useState } from 'react';
import RankingList from '../components/RankingList'
import { useNavigate } from 'react-router-dom';

function MyRankingsPage({setRankingToEdit, setRankingToView}) {
    const [rankings, setRankings] = useState([])
    const Navigate = useNavigate();

    const loadRankings = async() => {
        const response = await fetch('/rankings')
        const rankings = await response.json()
        setRankings(rankings)
    }

    useEffect(() => {
        loadRankings();
    }, []);


    const onViewRanking = async(rankingToView) => {
        setRankingToView(rankingToView)
        Navigate("/viewranking")
    }

    const onEditRanking = async(ranking) => {
        setRankingToEdit(ranking)
        Navigate("/editranking")
    }

    const onDeleteRanking = async(_id) => {
        console.log(_id)
        const response = await fetch(`/rankings/${_id}`, {method: 'DELETE'})
        if(response.status === 204) 
        {
            setRankings(rankings.filter(e => e._id !== _id))
        }
        else 
        {
            alert(`Failed to delete exercise with the id #${_id}, status code is ${response.status}`)
        }
    }

    return(
        <div><h1>My Rankings</h1>
        <p>To view your notes on a ranking, click on the notes icon in the description of the ranking you would like to view.</p>
        <p>To edit a ranking, click on the pencil icon in the description of the ranking you would like to edit.</p>
        <p>To delete a ranking, click on the trash can icon in the description of the ranking you would like to edit.</p>
        <RankingList myRankings={rankings} onDeleteRanking={onDeleteRanking} onEditRanking={onEditRanking} onViewRanking={onViewRanking}></RankingList>
        </div>
    )
}

export default MyRankingsPage