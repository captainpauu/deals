import React, { useEffect, useState } from "react";
import DealsAPI from "../apis/DealsAPI";

const Search = (props) => {
    const [term, setTerm] = useState("");
    const [debounceTerm, setDebounceTerm] = useState(term);
    const { setCauseList, setDealList } = props;

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceTerm(term);
        }, 500);

        return () => clearTimeout(timerId);
    }, [term]);

    useEffect(() => {
        let params = {};
        if (debounceTerm) {
            params = { searchTerm: debounceTerm };
        }
        const search = async () => {
            await DealsAPI.get("/deals", {
                params: params,
            }).then((res) => {
                const causelistData = [...new Set(res.data.map((deal) => deal.cause.name))];
                setCauseList(causelistData);
                setDealList(res.data);
            });
        };
        search();
    }, [debounceTerm, setCauseList, setDealList]);

    return (
        <div className="search-bar ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Search</label>
                    <input type="text" value={term} onChange={(event) => setTerm(event.target.value)} />
                </div>
            </form>
        </div>
    );
};

export default Search;
