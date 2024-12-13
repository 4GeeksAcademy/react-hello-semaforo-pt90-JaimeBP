import React, { useState } from "react";


const Home = () => {
    
    const [color, setColor] = useState("off");

    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <div
                style={{
                    backgroundColor: "#333",
                    width: "80px",
                    padding: "10px",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {/* Luz roja */}
                <div
                    onClick={() => setColor("red")}
                    style={{
                        backgroundColor: color === "red" ? "red" : "#550000",
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        marginBottom: "10px",
                        cursor: "pointer",
                    }}
                ></div>
                {/* Luz amarilla */}
                <div
                    onClick={() => setColor("yellow")}
                    style={{
                        backgroundColor: color === "yellow" ? "yellow" : "#555500",
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        marginBottom: "10px",
                        cursor: "pointer",
                    }}
                ></div>
                {/* Luz verde */}
                <div
                    onClick={() => setColor("green")}
                    style={{
                        backgroundColor: color === "green" ? "#00FF00" : "#055500",
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        cursor: "pointer",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Home;

