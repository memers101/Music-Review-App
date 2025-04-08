import { FaPencilAlt } from "react-icons/fa";

function EditRanking({rankingToEdit, onEditRanking}){
    return(
        <FaPencilAlt onClick={e => {e.preventDefault(); onEditRanking(rankingToEdit)}}/>
    )
}

export default EditRanking