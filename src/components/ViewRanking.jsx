import { MdNotes } from "react-icons/md";

function ViewRanking({rankingToView, onViewRanking}){
    return(
        <MdNotes onClick={e => {e.preventDefault(); onViewRanking(rankingToView)}}/>
    )
}

export default ViewRanking