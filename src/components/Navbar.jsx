import React from "react";

function Navbar() {
    return (
    <div className="navbar">
        <span className="logo">FireChat</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/19049779/pexels-photo-19049779/free-photo-of-camping-under-the-milky-way.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
            <span>Tony</span>
            <button>Logout</button>
        </div>
    </div>
    )
}

export default Navbar
