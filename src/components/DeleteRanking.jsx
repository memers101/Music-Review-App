import { FaTrashAlt } from "react-icons/fa";

function DeleteRanking({rankingToDelete, onDeleteRanking}){
    
    const deleteConfirm = async() => {
        if(window.confirm("Are you sure you want to delete this ranking? This action is permanent."))
        {
            onDeleteRanking(rankingToDelete._id)
        }
        else
        {
            alert("Deletion cancelled.")
        }
    }   
    return(
        <FaTrashAlt onClick={e => {e.preventDefault(); deleteConfirm()}}/>
    )
}

export default DeleteRanking