import React, { useState } from 'react';
import allHotel from '../fakeData/allHotels';
import rating from '../../images/star-rating.png';
import { useParams } from 'react-router-dom';

const Search = () => {

    // const { id } = useParams();
    // const { place } = props.hotel[id];

    // console.log('fakehotel place', props);

    const hotel = allHotel.slice(0, 3);
    const [hotels, setHotels] = useState(hotel);

    return (
        <div className="container d-flex ">

            <div className="m-5">

                <div className="text-white">
                    <h4>Stay in Sajek</h4>
                    <h5>Total hotels: {hotels.length}</h5>
                </div>

                {

                    hotels.map(hotel =>
                            <div class="card mb-3">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src={hotel.image} class="card-img" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{hotel.name}</h5>
                                            <p class="card-text">{hotel.details}</p>                                         
                                        </div>
                                    </div>
                                </div>
                            </div>

                    )
                }

            </div >
        </div >
    );
};

export default Search;