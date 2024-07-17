import React from 'react'
import './About.css'


export default function About() {
    return (
        <>
            <div className="container">
                <p className='s-title' >ABOUT US</p>
                <h2 className='l-title'>WHO AM I?</h2>
                <p className='p1'><strong>Hi Im Jackson Ford</strong> On her way she met a copy. The copy warned the Little Blind Text,
                    that where it came from it would have been rewritten a thousand times and everything that was left
                    from its origin would be the word
                    (and) and the Little Blind Text should turn around and return to its own, safe country.
                </p>
                <p className='p2'>Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life One day however a small
                    line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                
                <div className="row">
                    <div className="col-md-3">
                        <div className="card card1">
                            <h3 className="card-icon"><i className='icon1 fa-regular fa-lightbulb'></i></h3>
                            <h6 className="card-text">Graphic Design</h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card2">
                            <h3 className="card-icon"><i className='icon2 fa-solid fa-earth-africa'></i></h3>
                            <h6 className="card-text">Web Design</h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card3">
                            <h3 className="card-icon"><i className='icon3 fa-solid fa-database'></i></h3>
                            <h6 className="card-text">Software</h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card4">
                            <h3 className="card-icon"><i className='icon4 fa-solid fa-mobile-screen-button'></i></h3>
                            <h6 className="card-text">Application</h6>
                        </div>
                    </div>
                    </div>

            </div>
        </>
    )
}
