import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import '../style/Contact.scss'

    const libraries = ['places'];
    const mapContainerStyle = {
    width: '98vw',
    height: '90vh',
    };
    const center = {
        lat: 30.2905715, 
        lng: 30.6337262, 
    };

    const GoogleMaps = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDjQ4EX-zUE1KwkQyAHTi3sMt6Szei3hrA', 
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <div className='Maps'>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
    };

    export default GoogleMaps;