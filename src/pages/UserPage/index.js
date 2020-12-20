import React from "react";
import {useSelector} from "react-redux";

import './style.scss';

export const UserPage = () => {
    const {user} = useSelector((state) => state.usersData);

    const autoCheckValue = (value) => value !== null ? value : '';

    return (
        <div className='userPage'>
            {user === undefined ? <p>Loading ...</p> :
                <div className='userPage_inner'>
                    <img  className='userPage_inner_field'src={autoCheckValue(user.avatar_url)} alt={`photo ${user.name}`} />
                    <p className='userPage_inner_field'>Name: {autoCheckValue(user.name)}</p>
                    <p className='userPage_inner_field'>Email: {autoCheckValue(user.email)}</p>
                    <p className='userPage_inner_field'>Bio: {autoCheckValue(user.bio)}</p>
                    <p className='userPage_inner_field'>Followers: {autoCheckValue(user.followers)}</p>
                    <p className='userPage_inner_field'>Following: {autoCheckValue(user.following)}</p>
                    <p className='userPage_inner_field'>Created at: {autoCheckValue(user.created_at)}</p>
                    <p className='userPage_inner_field'>Company: {autoCheckValue(user.company)}</p>
                    <p className='userPage_inner_field'>Location: {autoCheckValue(user.location)}</p>
                    <p className='userPage_inner_field'>Blog:
                        <a href={autoCheckValue(user.blog)}>
                            {autoCheckValue(user.blog)}
                        </a>
                    </p>
                </div>}
        </div>
    );
};
