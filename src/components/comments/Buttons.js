import { Link } from "react-router-dom"
/*import { useParams } from "react-router-dom"
import { gameServiceFactory } from "../../../services/gameService"
import { useService } from "../../../hooks/useService"
import * as commentService from '../../../services/commentService';
*/

export const Buttons = ({
   
    onDeleteComment,
    commentId,
    gameId
}) => {
    
    console.log(commentId);
    console.log(gameId);
    
    

    return (
   
        <p><Link to={`/carComment/${commentId}/edit`} className="button">Edit</Link> <button onClick={() => onDeleteComment(commentId)} className="button">delite</button></p>
    )
}