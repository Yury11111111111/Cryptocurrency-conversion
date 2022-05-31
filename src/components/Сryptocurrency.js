import React from 'react';


const Сryptocurrency = (props) => {
    return (
        <div>
            <img src={props.cryptocurrency.image?.large} alt="cryptocurrency_img" /><br />
            {props.cryptocurrency.name}<br />
            {props.cryptocurrency.market_data?.current_price.usd} $
        </div>
    );
};

export default Сryptocurrency;