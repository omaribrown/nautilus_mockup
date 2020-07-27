import React from 'react'
import arrow from './assets/arrow2.png'
import './Styles/LandingParalax.css'

export default class LandingParalax extends React.Component {
    render() {
        return (
            <div>
                <div className='landing-div'>
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
                <div className='content-div'>
                    CONTENT
                </div>
            </div>
        )
    }
}
