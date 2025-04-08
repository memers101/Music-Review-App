import { FaTrashAlt } from "react-icons/fa";

function DeleteAlbum({albumToDelete, onDelete}){
    
    const deleteConfirm = async() => {
        if(window.confirm("Are you sure you want to delete this album? This action is permanent."))
        {
            onDelete(albumToDelete._id)
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

export default DeleteAlbum