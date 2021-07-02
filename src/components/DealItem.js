import React from "react";
import { useHistory } from "react-router-dom";

function DealItem({ deal, onItemClick }) {
    const history = useHistory();

    return (
        <div key={deal.key} className="card" onClick={() => history.push(`/${deal.key}`)}>
            <div className="image">
                <img src={deal.media[0]} alt="deal item" />
            </div>
            <div className="content">
                <div className="description">{deal.title}</div>
            </div>
            <div className="extra content">
                <span className="right floated">${deal.price}</span>
                {deal.cause.name}
            </div>
        </div>
    );
}

export default DealItem;
