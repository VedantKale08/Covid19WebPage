import React, { useEffect, useState } from 'react'

export default function Header() {

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const res = await fetch("https://data.covid19india.org/data.json");
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="App">
                <center>
                    <h5 className='zoom-in-out-box'> 🔴 LIVE</h5>
                    <p style={{ fontSize: "60px" }}><b>COVID19 CORONAVIRUS TRACKER</b></p>
                </center>
                <div>
                    <center>
                        <div className='zoom'>
                            <div className='MainCard' style={{ backgroundColor: "#3399FF" }}>
                                <div className='card-header' style={{ fontSize: "40px", textShadow: " 5px 5px 8px grey" }}>
                                    <p><b>Our Country</b></p>
                                </div>
                                <div className='card-content' style={{ fontSize: "80px", color: "white", textShadow: " 5px 10px 8px grey" }}>
                                    <p><b>INDIA</b></p>
                                </div>
                            </div>
                        </div>

                        <div className='zoom'>
                            <div className='MainCard' style={{ backgroundColor: "#33FF33" }}>
                                <div className='card-header' style={{ fontSize: "40px", textShadow: " 5px 5px 8px grey" }}>
                                    <p><b>TOTAL ACTIVE</b></p>
                                </div>
                                <div className='card-content' style={{ fontSize: "80px", color: "white", textShadow: " 5px 10px 8px grey" }}>
                                    <p><b>{data.active}</b></p>
                                </div>
                            </div>
                        </div>

                        <div className='zoom'>
                            <div className='MainCard' style={{ backgroundColor: "#FFFF00" }}>
                                <div className='card-header' style={{ fontSize: "40px", textShadow: " 5px 5px 8px grey" }}>
                                    <p><b>TOTAL CONFIRMED</b></p>
                                </div>
                                <div className='card-content' style={{ fontSize: "80px", color: "white", textShadow: " 5px 10px 8px grey" }}>
                                    <p><b>{data.confirmed}</b></p>
                                </div>
                            </div>
                        </div>

                        <div className='zoom'>
                            <div className='MainCard' style={{ backgroundColor: "#FFA500" }}>
                                <div className='card-header' style={{ fontSize: "40px", textShadow: " 5px 5px 8px grey" }}>
                                    <p><b>TOTAL RECOVERED</b></p>
                                </div>
                                <div className='card-content' style={{ fontSize: "80px", color: "white", textShadow: " 5px 10px 8px grey" }}>
                                    <p><b>{data.recovered}</b></p>
                                </div>
                            </div>
                        </div>

                        <div className='zoom'>
                            <div className='MainCard' style={{ backgroundColor: "#FF0000" }}>
                                <div className='card-header' style={{ fontSize: "40px", textShadow: " 5px 5px 8px grey" }}>
                                    <p><b>TOTAL DEATHS</b></p>
                                </div>
                                <div className='card-content' style={{ fontSize: "80px", color: "white", textShadow: " 5px 10px 8px grey" }}>
                                    <p><b>{data.deaths}</b></p>
                                </div>
                            </div>
                            <br/>
                        </div>
                    </center>

                </div>
            </div>

        </>
    )
}
