import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {loadUsers} from "../../redux/actions/usersAction";
import {loadUser} from "../../redux/actions/userAction";

import {User} from "../../components/User";

import './style.scss';

export const HomePage = () => {
    const dispatch = useDispatch();

    const {users} = useSelector((state) => state.usersData);

    const handleChooseUser = (username) => {
        dispatch(loadUser(username))
    };

    useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch]);

    return (
        <div className='home'>
            <div className="home_inner">
                {!users ? <p>Loading...</p> : users.map((user) => (
                <div
                    key={user.login}
                    className="home_inner_userWrapper"
                    onClick={() => handleChooseUser(user.login)}
                >
                    <User data={user}/>
                </div>
            ))}
            </div>
        </div>
    );
};
