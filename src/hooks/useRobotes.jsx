import React, { useEffect, useState } from 'react';

const useRobotes = () => {
    const [robots, setRobots] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/robots`)
            .then(res => res.json())
            .then(data => setRobots(data))
    }, [])
    return robots
};

export default useRobotes;