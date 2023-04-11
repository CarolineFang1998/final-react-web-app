import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { profileThunk, logoutThunk} from "./users-thunks";
import {useNavigate} from "react-router";
import Nav from "../nav";

function ProfileScreen() {
    const { currentUser } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(profileThunk());
    }, []);
    return (
        <div>
            <Nav/>
            <div>
                {currentUser && (
                    <div>
                        <h2>Welcome {currentUser.username}</h2>
                        <span>First Name: {currentUser.firstName}</span><br/>
                        <span>Last Name: {currentUser.lastName}</span><br/>
                        <span>Password: {currentUser.password}</span><br/>
                        <span>Email: {currentUser.email}</span><br/>
                        <span>Role: {currentUser.role}</span><br/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfileScreen;