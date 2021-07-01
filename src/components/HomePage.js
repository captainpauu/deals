import React, { useEffect, useState } from "react";
import DealsAPI from "../apis/DealsAPI";
import DealItem from "./DealItem";

function HomePage(props) {
    const [dealList, setDealList] = useState([]);
    const [causeList, setCauseList] = useState([]);
    const [selectedCause, setSelectedCause] = useState("");

    useEffect(() => {
        getAllDeals();
    }, []);

    const getAllDeals = async () => {
        const { data } = await DealsAPI.get("/deals");
        const causelistData = [...new Set(data.map((deal) => deal.cause.name))];
        setCauseList(causelistData);
        setDealList(data);
    };

    const renderCauseList = causeList.map((cause, index) => {
        return (
            <div className="item" key={index} value={cause} onClick={() => setSelectedCause(cause)}>
                <div className={`ui large ${selectedCause === cause ? "" : "basic"} blue label`}>{cause}</div>
            </div>
        );
    });

    const renderDealSummaryList = dealList.map((deal) => {
        if (selectedCause === "" || selectedCause === deal.cause.name) {
            return <DealItem key={deal.key} deal={deal} />;
        }
        return false;
    });

    return (
        <div className="ui grid">
            {renderDealSummaryList.length ? (
                <div className="ui row">
                    <div className="twelve wide column">
                        <div className="ui three stackable cards">{renderDealSummaryList}</div>
                    </div>
                    <div className="four wide column">
                        <div className="content">
                            {selectedCause !== "" ? (
                                <div
                                    className="ui right floated mini inverted red button"
                                    onClick={() => setSelectedCause("")}
                                >
                                    x Clear
                                </div>
                            ) : (
                                ""
                            )}

                            <div className="ui title">Filter By Cause</div>
                        </div>
                        <div className="ui divided selection list">{renderCauseList}</div>
                    </div>
                </div>
            ) : (
                <div className="ui active centered inline loader"></div>
            )}
        </div>
    );
}

export default HomePage;
