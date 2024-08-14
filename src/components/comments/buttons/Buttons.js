import { Link } from "react-router-dom"
/*import { useParams } from "react-router-dom"
import { gameServiceFactory } from "../../../services/gameService"
import { useService } from "../../../hooks/useService"
import * as commentService from '../../../services/commentService';
*/
import but from './Buttons.module.css'
export const Buttons = ({
   
    onDeleteComment,
    commentId,
    gameId
}) => {
    
    console.log(commentId);
    console.log(gameId);
    
    

    return (
   
        <p><Link to={`/carComment/${commentId}/edit`} ><button className={but.myButton}>Edit</button></Link> <button onClick={() => onDeleteComment(commentId)}  className={but.myButton}>Delete</button></p>
    )
}