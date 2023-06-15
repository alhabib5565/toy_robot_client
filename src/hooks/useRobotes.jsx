import React, { useEffect, useState } from 'react';

const useRobotes = () => {
    const [robots, setRobots] = useState()
    useEffect(() => {
        fetch(`https://11-assignment-server.vercel.app/robots`)
            .then(res => res.json())
            .then(data => setRobots(data))
    }, [])
    return robots
};

export default useRobotes;