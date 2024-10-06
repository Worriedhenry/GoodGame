import React, { useEffect } from "react";
import axios from "axios";
import Card from "./card";
export default function DisplayQuote() {
    const [data, setData] = React.useState(null);
    const [saved, setSaved] = React.useState([]);

    useEffect(() => {
        getQuote();
    }, [])

    const getQuote = async () => {
        try {
            const result = await axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
            setData(result.data)
        }
        catch (err) {
            alert(err)
        }
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        getQuote();

    }

    const saveQuote = () => {
        console.log(saved)
        setSaved([data, ...saved,]);
        getQuote();
    }

    return (
        <div className=" flex flex-col items-center space-y-4 ">

            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="space-x-4">
                    <button className="form-select bg-gray-700  p-2" >New Quote</button>
                    <button type="button" onClick={() => saveQuote()} className="form-select bg-gray-700  p-2" >Save Quote</button>
                </div>
            </form>
            {data && <Card quote={data} />}

            <p className="text-[1.5rem] font-semibold text-center">Saved Quotes</p>
            <div className="flex flex-wrap gap-5 justify-evenly ">
                {saved && saved.map((quote, index) => <Card key={index} quote={quote} />)}
            </div>
            {!saved.length && <p className="text-[1rem] font-semibold text-center">No Quotes Saved</p>}
            
        </div>
    )
}