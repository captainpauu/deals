import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import DealDetail from "./components/DealDetail";
import Header from "./components/Header";

function App() {
    return (
        <div className="App ui container">
            <BrowserRouter>
                <Header />
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/:dealId" exact component={DealDetail} />
            </BrowserRouter>
        </div>
    );
}

export default App;
