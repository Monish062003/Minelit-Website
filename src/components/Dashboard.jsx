import React, { useState } from "react";
import '../CSS/Dashboard.css';
import Nav1 from "./Nav1";
import file from '../Images/file.png';
import dog from '../Images/dog.png';

const Dashboard = () => {
    const [name, SetName] = useState("Full Name");
    const [username, SetUserName] = useState("username");

    return (
        <>
            <Nav1 />
            <div className="profile">
                <div className="ellipse">
                    <img className="profile-img" src={dog} />
                </div>
                <p className="name">{name}</p>
                <p className="username">@{username}</p>
                <button className="edit-btn">Edit Your Profile</button>
            </div>
            <div className="buttons">
                <div className="btn btn1">
                    <img src={file} className="upload-file" />
                    <div>
                        <label for="files"><span>Choose File </span>to Upload</label>
                        <input type="file" id="files" className="hidden" />
                    </div>
                </div>
                <a href="/generate" className="btn btn2">Generate and Sell</a>
            </div>
            <div className="images-bottom">
                {/* <img className="img-div" src={dog} />
                <img className="img-div img-mid" src={dog} />
                <img className="img-div" src={dog} /> */}
                <div class="row">
                    <div class="column">
                        <img className="img-div" src={dog} />
                    </div>
                    <div class="column column-mid">
                        <img className="img-div" src={dog} />
                    </div>
                    <div class="column">
                        <img className="img-div" src={dog} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard; 