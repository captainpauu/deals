import React from "react";

function DealItem({ deal, onItemClick }) {
    return (
        <div key={deal.key} className="card" onClick={onItemClick}>
            <div className="image">
                <img src={deal.media[0]} alt="deal item" />
            </div>
            <div className="content">
                <div className="description">{deal.title}</div>
            </div>
            <div className="extra content">
                <span className="right floated">
                    <i className="rupee sign icon"></i>
                    {deal.price}
                </span>
                {deal.cause.name}
            </div>
        </div>
    );
}

export default DealItem;
