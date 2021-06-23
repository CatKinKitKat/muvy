import React, {useEffect, useState} from 'react'
import { fetchPersons } from "../services/Caller"

const People = () => {

    const [persons, setPersons] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setPersons(await fetchPersons())
        }
        fetchAPI()
    }, [])

    const trendingPersons = persons.slice(0, 4).map((p, i) => {
        return (
            <div className="col-md-3 text-center" key={i}>
                <img
                    className="img-fluid rounded-circle mx-auto d-block"
                    src={p.profileImg}
                    alt={p.name}
                ></img>
                <p className="font-weight-bold text-center">{p.name}</p>
                <p
                    className="font-weight-light text-center"
                    style={{ color: "#5a606b" }}
                >
                    Trending for {p.known}
                </p>
            </div>
        )
    })

  return (
    <div className="container">
        <div className="row mt-3">
            <div className="col">
                <p className="font-weight-bold" style={{ color: "#5a606b" }}>
                    TRENDING PERSONS ON THIS WEEK
                </p>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col">
                <div className="float-right">
                    <i className="far fa-arrow-alt-circle-right"/>
                </div>
            </div>
        </div>
        <div className="row mt-3">{trendingPersons}</div>
    </div>


  )
}

export default People
