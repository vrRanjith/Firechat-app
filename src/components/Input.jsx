import React from "react";
import Img from "../images/img.png";
import Attach from "../images/attach.png";

function Input() {
    return (
        <div className="input">
          <input type="text" placeholder="Type Something..."/>
          <div className="send">
            <img src={Attach} alt=""/>
            <input type="file" id="file" style={{display:"none"}}/>
            <label htmlFor="file">
                <img src={Img} alt=""/>
            </label>
            <button>Send</button>
          </div>
        </div>
    )
}

export default Input