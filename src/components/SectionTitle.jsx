import React from 'react';

const SectionTitle = ({titleText}) => {
    return (
        <h2 className="text-3xl mb-10 md:text-5xl text-orange-400 font-bold text-center">{titleText}</h2>
    );
};

export default SectionTitle;