import React, {useEffect, useState} from 'react'
import {fetchMovies} from '../service'
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

export function Home() {
    const [nowPlaying, setNowPlaying] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setNowPlaying(await fetchMovies())
        }
        fetchAPI()
    }, [])

    const movies = nowPlaying.slice(0, 5).map((item, index) => {
        return (
            <div style={{ height: 500, width: "100%" }} key={index}>
                <div className="carousel-center">
                    <img style={{ height: 600 }} src={item.backPoster} alt={item.title} />
                </div>
                <div className="carousel-center">
                    <i
                        className="far fa-play-circle"
                        style={{fontSize: 95, color: "#f4c10f"}}
                    />
                </div>
                <div
                    className="carousel-caption"
                    style={{ textAlign: "center", fontSize: 35 }}
                >
                    {item.title}
                </div>
            </div>
        )
    })
    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col">

                </div>
            </div>
        </div>
    )
}
