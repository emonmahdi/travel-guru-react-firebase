import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Services.css'

const Services = () => {
    const [services, setServices] = useState('');

    useEffect( () => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="header-hero-area">
                            <h1>Cox's Bazar</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim totam necessitatibus, exercitationem incidunt cupiditate maiores ullam veritatis nulla numquam, quibusdam quisquam, dignissimos magnam sapiente. Excepturi rerum illo similique. Officia, assumenda.</p>
                            <button className='btn btn-warning'>Booking</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                       <div className="row">
                       {
                            services &&  services.map(service => {
                                const {id, img, title} = service;
                                return (
                                    <div className='col-md-4'>
                                        <Link to='/home'>
                                            <div className="service-card">
                                                <div className="card-img">
                                                    <img src={img} className='img-fluid' alt="" />
                                                    <div className="overlay-service"></div>
                                                </div> 
                                                <h3>{title}</h3>
                                            </div>

                                        </Link>
                                        
                                        
                                    </div>
                                )
                            })
                        }
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;