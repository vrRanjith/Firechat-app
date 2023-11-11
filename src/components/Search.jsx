import React from "react";

function Search() {
    return (
    <div className="search">
        <div className="searchForm" >
            <input type="text" placeholder="Find a user"/>
        </div>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/18512532/pexels-photo-18512532/free-photo-of-a-mountain-range-with-a-small-pond-in-the-foreground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
            <div className="userChatInfo">
                <span>Tony</span>
            </div>
        </div>
    </div>
    )
}

export default Search