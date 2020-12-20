import React from "react";
import {Link} from "react-router-dom";

import "./style.scss";

export const User = ({data}) => {
    const {login, avatar_url, html_url} = data;

    return (
        <div className='userCard'>
            <div className="userCard_inner">
                <Link to={`/users/:${login}`}>
                    <img src={avatar_url} alt={`photo ${login}`} className='userCard_inner_img'/>
                </Link>
                <div className="userCard_inner_details">
                    <p className='userCard_inner_details_field'>Login: {login}</p>
                    <p className='userCard_inner_details_field'>GitHub url:
                        <a href={html_url}>
                            {html_url}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
