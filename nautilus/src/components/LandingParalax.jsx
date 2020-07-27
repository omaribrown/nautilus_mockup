import React from 'react'
import './Styles/LandingParalax.css'
import arrow from './assets/arrow2.png'

export default class LandingParalax extends React.Component {
    render() {
        return (
            <div>
                <div className="landing-div">
                    <div className='landing-content'>
                        <h4>Issue 079</h4>
                        <h1>Catalyst</h1>
                        <p>Agents of change</p>
                        <a href='#'><strong>Read More</strong></a>
                        <br />
                        <button>SEE FULL ISSUE</button>
                    </div>
                    <div className='landing-scroll'>
                        <img src={arrow} />
                        <br />
                        <a href='#'>SCROLL DOWN</a>
                    </div>
                </div>
                <div className="homepage-content">
                    <div className="paraInner">
                        <div className="window">
                            <h1></h1>
                        </div>
                    </div>
                </div>
                {/* <div className="bottom-div">
                    This is the bottom div
                </div> */}
            </div>
        )
    }
}
