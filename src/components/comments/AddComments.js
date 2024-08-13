import { useForm } from "../../hooks/useForm";

import { useReducer } from 'react';
import { useParams, useNavigate} from 'react-router-dom';

import { carServiceFactory } from '../../servises/carService';
import * as commentService from '../../servises/commentService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';


import { carReducer } from '../../redusers/carReduser';
import { useCarContext } from '../../contexts/CarContext';
//import { Buttons } from '../AddComment/Buttons';
//import { AddCommentButton } from '../AddComment/AddCommentButton';

import comm from './AddComment.module.css'

export const AddComment = () =>{
    const { userId, userEmail } = useAuthContext();

    const { carId } = useParams()
    
const [car, dispatch]  = useReducer(carReducer, {});
       
        const navigate = useNavigate();
    
    const onCommentSubmit = async (values) => {
        
       
        
        const response = await commentService.createComment(carId, values.comment);
          console.log(response);
        dispatch({
             type: 'COMMENT_ADD',
             payload: response,
             userEmail,
             userId
            
             
         });
         navigate(`/carList/${carId}`);
         
     };
    const { values, changeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);

    return (
        <section className={comm.body} >
        <form method='post' onSubmit={onSubmit}>
          <div className={comm.container}>
          
         
              <label htmlFor="comment">
              <p >Add Comment</p>
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
           
            <button type="submit" className={comm.registerbtn}>
            Add Comment
            </button>
          </div>
         
        </form>
        </section>
    );
   
    
};