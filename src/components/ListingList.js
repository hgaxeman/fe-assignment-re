import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListingList.scss';

function ListingList() {
    const [data, setData] = useState({ listings: [] });

    useEffect(() => {
        async function fetchListings() {
            const response = await axios(
                'https://ebkqjitsgh.execute-api.eu-central-1.amazonaws.com/prod/listings/'
            );

            setData({ listings: response.data});
        }
        fetchListings();
    }, []);

    return (
        <div>
            <ul className="listing-list">
                {data.listings.map(listing => (
                    <li key={listing.id} className="listing">
                        <div className="img">
                            {listing.image &&
                                <img src={listing.image} alt={listing.title}/>
                            }
                        </div>
                        <p>
                            {listing.title}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListingList;
