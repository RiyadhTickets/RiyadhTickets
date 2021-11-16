import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export default function Events() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios.get("/events").then(res => {
            setEvents(res.data)
        })
    },[])
    return (

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider  text-purple1 uppercase rounded-full bg-teal-accent-400">
              Events
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20  text-purpule2 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative text-darkblue ">Discover The Latest Events </span>
            </span>
          </h2>
        
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => <Link to={`/events/${event.id}`}>
            <div className="relative cursor-pointer overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={event.image}
                alt="event"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-xl text-gray-50">{event.title}</p>
                <p className="mb-4 text-md tracking-wide text-gray-50">
                {event.start_date}
                </p>
                <div className="flex items-center justify-center space-x-3">
                </div>
              </div>
            </div>
          </Link>)}


        </div>
      </div>  
    )
}
