import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'denver'
                }
            });

            setRestaurants(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    }

    useEffect(() => {
        searchApi('pasta')
    }, []);

    return [searchApi, restaurants, errorMessage];
}