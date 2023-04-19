
import React, {useEffect, useState} from "react";
// import {useParams} from "react-router-dom";
// import {useDispatch} from "react-redux";
// import {profileThunk} from "../Users/users-thunks";
// import axios from "axios";
// const REVIEW_URL = "http://localhost:4000/api/reviews/restaurant/";
/*
    This component is used to display a yelp restraunt home page.
 */
const RestaurantItem = (
    {
        restaurant = {
            name: "No Name",
            id: "No Id",
            phone: "No Phone",
            rating: "No Rating",
            image_url: "No Image",
            comment:"comments....",
            location:"location",
            price:"price"
        }
    }
) => {
//     const [comment, setComment] = useState([]);
   
//    restaurant.comment = comment[0];
//     const dispatch = useDispatch();
  
//     useEffect(() => {
//         const asyncData = async () => {
//             // This is the node API url for detail restraurant informations
//             const response = await axios(REVIEW_URL + restaurant.id);
//             setComment(response.data);
//             console.log(response.data);
//             debugger;
//         };
//         // make sure we only run asyncData() once
//         if(comment.length === 0){
//             dispatch(profileThunk());
//             asyncData();
//         }
//     },[]);

        return(
            <div className="card border-light">
                <div className="row">
                    <div className="col-md-3">
                        <a  href={'http://localhost:3000/detail/' + restaurant.id}>
                            <img className="p-2" src={restaurant.image_url} width={180} height={200}/>
                            </a>
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <a  href={'http://localhost:3000/detail/' + restaurant.id}>
                                <h5 className="card-title mb-3"> {restaurant.name}</h5>
                            </a>
                            <div className="mb-2 card-text"> 
                                <i class="bi bi-cash-coin"></i> {restaurant.price} 
                            </div>
                            <div className="mb-2 card-text"> 
                                <i class="bi bi-telephone"></i> {restaurant.display_phone}
                            </div>
                            <div className="mb-2"> Rating: {restaurant.rating} <span></span>
                                    {restaurant.rating>=4? (<i class="bi bi-hand-thumbs-up-fill"></i>): ""}
                            </div>
                            <div className="mb-2"> 
                                <i class="bi bi-geo-alt"></i> {restaurant.location.display_address.join(", ")}
                            </div>
                        </div>    
                     </div>
                </div>
                
            </div>
                
        )
    }
export default RestaurantItem;