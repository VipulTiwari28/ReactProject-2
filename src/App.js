import React from 'react';
import Card from './Components/Card';
import Vipul from '../src/images/pic3.jpeg';
import instagram from "../src/images/Instagram Icon.png";
import facebook from "../src/images/Facebook Icon.png";
import twitter from "../src/images/Twitter Icon.png";
import github from "../src/images/GitHub Icon.png";
import './style.css';

export default function App()
{
    return(
        <div className='card'>
            <Card 
                img={Vipul}
                img1={instagram}
                img2={facebook}
                img3={twitter}
                img4={github}
            />
            <Card
                img={Vipul}
                img1={instagram}
                img2={facebook}
                img3={twitter}
                img4={github}

            />
            <Card
                img={Vipul}
                img1={instagram}
                img2={facebook}
                img3={twitter}
                img4={github}

            />
            <Card
                img={Vipul}
                img1={instagram}
                img2={facebook}
                img3={twitter}
                img4={github}
            />
        </div>
    )
}