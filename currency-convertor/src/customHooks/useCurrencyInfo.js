import { useEffect, useState } from 'react'



// function useCurrencyInfo(currency) {
//     const [data, setData] = useState({})
//     console.log("line 7")
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
//         .then(response => response.json())
//         .then(res => setData(res[currency]))
//         console.log("data1: ", data)
//     }, [currency])
//     console.log("data2: ",data);
//     return data
// }


function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then(response => response.json())
            .then(response => {
                // console.log("response: ", response[currency]);
                setData(response[currency]);
            })
            .catch(error => {
                console.error("Error fetching currency data:", error);
            });
        
    }, [currency]);

    return data;
}


export default useCurrencyInfo;