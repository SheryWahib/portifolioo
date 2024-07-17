import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item item1 active">
                    <div className="content content1">
                            <h1 className="titleImg1">
                                Hi!
                                <br />
                                I'm Jackson
                            </h1>
                            <p>
                                100% html5 bootstrap templates Made
                                <br />
                                By <Link >Colorlib.com</Link>
                            </p>
                            <button type='botton' className='btn btn-transparent'>
                                Download CV <i className='fa-solid fa-download'></i>
                            </button>
                    </div>
                </div>
                    <div className="carousel-item item2">
                        <div className="content content2">
                            <h1 className="titleImg2">
                                I'm
                                <br />
                                a Designer
                            </h1>
                            <p>
                                100% html5 bootstrap templates Made
                                <br />
                                By <Link >Colorlib.com</Link>
                            </p>
                            <button type='botton' className='btn btn-transparent'>
                                View Portifolio <i className='fa-solid fa-briefcase'></i>
                            </button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                <span className="visually-hidden">Next</span>
            </button>
</div>

        </>
    )
}
