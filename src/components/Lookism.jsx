import React from 'react'
import '../CSS/lookism.css'
import Container from 'react-bootstrap/Container'
import { FaPlay } from "react-icons/fa";

export default function Lookism() {
  return (
    <div>
      <section className="home-section">
        <Container>
          <div className="home-heading">
            <div className="home-img">
              <img src="/assets/img/lookism logo.jpeg" alt="" />
            </div>
            <div className="home-content mt-4">
              <div className="movie-description d-flex align-items-baseline gap-2">
                <div className="age">
                  <small>16+</small>
                </div>
                <div className="dot">
                  <h6>·</h6>
                </div>
                <div className="category">
                  <h6>Sub | Dub</h6>
                </div>
                <div className="dot">
                  <h6>·</h6>
                </div>
                <div className="category">
                  <h6>Action</h6>
                </div>
              </div>
              <h5 className="description my-3">Desperate to defend her village from the demon king, Reiko offers herself to a 5,000-year-old dragon for his help in exchange, but the flame-breathing beast is vegetarian and a total weakling.</h5>
              <button type="button" className="rounded-1 watch-btn px-4 py-2"><FaPlay className='me-2'/> Start Watching</button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
