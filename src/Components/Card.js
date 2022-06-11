import React from "react";
export default function Card(props)
{
    const img=props.img;
    return(
        <div className="digital-card">
            <img src={img} alt="img" />
            <h3>Vipul Tiwari</h3>
            <p className="title">Web developer</p>
            <h4>About</h4>
            <p className="about">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h4>Interests</h4>
            <p className="interests">Fitness Freak. Music scholar. Reader. Paneer Chawal Enthusiast. Technology fanatic. Engineering Student. Travel geek. Chai fanatic.</p>
            <div className="social-media">
                <img src={props.img1} alt="instagram" />
                <img src={props.img2} alt="facebook" />
                <img src={props.img3} alt="twitter" />
                <img src={props.img4} alt="github" />
            </div>
        </div>
    )
}