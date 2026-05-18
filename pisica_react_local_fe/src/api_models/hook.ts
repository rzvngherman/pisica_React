import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url: string) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    async function fetchUrl() {
        const url2 = "http://razvangherman.runasp.net/api/CatImages"; // "/api/CatImages";
        axios.get(url2)
            .then(res => {
                console.log('Data:', res.data);
                setData(res.data)
                setLoading(false);
            })
            .catch(err => {
                if (err.response) {
                    // Server responded with a status code
                    console.log('Server error:', err.response.status);
                } else if (err.request) {
                    // Request made but no response received (CORS, network down)
                    console.log('Network / CORS error:', err.message);
                } else {
                    console.log('Axios setup error:', err.message);
                }
            });
    }
    useEffect(() => {
        fetchUrl();
    }, []);
    return { data, loading };
}
export { useFetch };
