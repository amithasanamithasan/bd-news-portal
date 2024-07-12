import React from 'react';

const DynamicNewsPage = ({params ,searchParams}) => {
    return (
        <div>
            <h1>dynamicNews page{searchParams.category}</h1>
        </div>
    );
};

export default DynamicNewsPage;