import { useForm } from "../../../hooks/useForm";
import { useState, useEffect } from "react";
import { useReducer } from 'react';
import { useParams, useNavigate} from 'react-router-dom';


import * as commentService from "../../../servises/commentService"
import { useAuthContext } from "../../../contexts/AuthContext"; 


import { carReducer } from "../../../redusers/carReduser"; 
import eComm from "./EditComments.module.css"
export const EditComment = () =>{
    
    const { userId, userEmail } = useAuthContext();
    //const [game, dispatch]  = useReducer(gameReducer, {});
    const { commentId} = useParams()
    
    console.log(commentId); 
    const [comm,setComm] = useState({})
    const [car, dispatch]  = useReducer(carReducer, {});
       
        const navigate = useNavigate();
    
    const onCommentEditSubmit = async (values) => {
        
        const response = await commentService.editComment(comm[0]._id, values.comment, comm[0].carId);
          console.log(response);
        dispatch({
             type: 'COMMENT_EDIT',
             payload: response,
             userEmail,
             userId
            
             
         });
         navigate(`/carList/${comm[0].carId}`);
         
     }
   

    const { values, changeHandler, onSubmit, changeValues } = useForm({
       
        _ownerId: "",
    carId: "",
    comment: "",
    _createdOn: 1722892827136,
    _id: ""
       
    }, onCommentEditSubmit);

    

    useEffect(() => {
        async function haha(){

            const comm = await commentService.getOneComment(commentId)
            setComm(comm)
            changeValues(comm[0])
            return comm
            
        }
        haha()
    }
        
        ,[]
    )
    
   console.log(comm);
   
    
    /*const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        comment: '',
       
    }, onGameEditSubmit);*/
    

   

    return (
        <section className={eComm.body} >
        <form method='post' onSubmit={onSubmit}>
          <div className={eComm.container}>
          
         
              <label htmlFor="comment">
              <p >Edit Comment</p>
            </label>
            <textarea
              //type="textarea"
             // placeholder="Enter your coment..."
              name="comment"
              id="comment"
              rows="10"
              cols="70"
              required=""
              value={values.comment}
              onChange={changeHandler}
              >
              </textarea>
            
            <hr />
           
            <button type="submit" className={eComm.registerbtn}>
            Edit Comment
            </button>
          </div>
         
        </form>
        </section>
    );
};