import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import DealsAPI from "../apis/DealsAPI";

function DealDetail() {
    const { dealId } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        if (dealId) {
            const getDeal = async () => {
                await DealsAPI.get(`/deals/${dealId}`).then((res) => {
                    setDetails(res.data);
                });
            };

            getDeal();
        }
    }, [dealId]);

    return (
        <div className="ui segment">
            {Object.keys(details).length ? (
                <div>
                    <h1 className="ui header">{details.title}</h1>
                    <div className="ui grid">
                        <div className="two column row">
                            <div className="column">
                                <div className="ui list">
                                    <div className="item">
                                        <div className="content">
                                            <b>Deal Type:</b> {details.dealType}
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="content">
                                            <b>Cause:</b> {details.cause.name}
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="content">
                                            <b>Price:</b> ${details.price}
                                        </div>
                                    </div>
                                </div>
                                <div className="ui segment">
                                    <h4>Description</h4>
                                    <p>{details.description}</p>
                                </div>
                                {details.charity ? (
                                    <div className="ui segment">
                                        <h4>Charity: {details.charity.name}</h4>
                                        <p>{details.charity.description}</p>
                                        <div className="ui image blue label">
                                            <img src={details.user.avatar} alt="user" />
                                            {details.user.name}
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="column center aligned">
                                <img
                                    className="ui medium rounded image"
                                    style={{ width: "100%" }}
                                    src={details.media[0]}
                                    alt="deal"
                                ></img>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="ui active centered inline loader"></div>
            )}
        </div>
    );
}

export default DealDetail;
