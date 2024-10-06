import React from "react";

import DisplayQuote from "../Comonents/displayQuotes";
import Header from "../Comonents/header";
export default function Home() {
    return (<div className="space-y-8">
        <Header />
        <DisplayQuote />
    </div>
    )
}