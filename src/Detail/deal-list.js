import axios from "axios";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import DealItem from "./deal-item";
import {useParams } from 'react-router-dom';
import {profileThunk} from "../Users/users-thunks";
import { createDealThunk } from "../Deals/deals-thunks";

const DEAL_URL = "http://localhost:4000/api/deals/restaurant/";

/*
    * This component is used to display restraunt.
 */
function DealList() {
    const {id} = useParams();
    const [result, setResult] = useState([]);
    let [leaveDeal, setLeaveDeal] = useState('');
   
    const dispatch = useDispatch();
  
    useEffect(() => {
        const asyncData = async () => {
            // This is the node API url for detail restraurant informations
            const response = await axios(DEAL_URL + id);
            setResult(response.data);
           
        };
        // make sure we only run asyncData() once
        if(result.length === 0){
            dispatch(profileThunk());
            asyncData();
        }
    },[]);

    const { currentUser } = useSelector(state => state.users);
   
 
    const submitDeal = () => {
        const templateDeal = {
            "restaurantID": id,
            "userID": currentUser._id,
            "username": currentUser.username
        }
        const newDeal = {
            ...templateDeal,
            deal: leaveDeal
        }
        dispatch(createDealThunk(newDeal));
        window.location.reload();
    };
    return (
        <>
        
        {currentUser && currentUser.role==="OWNER" ? <div className="col-md-6">
                <textarea value={leaveDeal} 
                className="form-control mb-3" 
                id="exampleFormControlTextarea1" 
                rows="3" 
                onChange={(event) => setLeaveDeal(event.target.value)}>
                </textarea>
                <button className="btn btn-primary mb-3" onClick={submitDeal}>Add a deal</button>
            </div> : ""}
         <div className="mt-3">
            <h1>Deals</h1>  
            <ul className="list-group">
       {
           result && result.map(result =>
               <DealItem result={result}/>)
       }
   </ul></div>
      
        </>
   
    );
}
export default DealList;