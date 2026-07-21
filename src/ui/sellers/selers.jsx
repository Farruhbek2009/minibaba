import React, { useState, useEffect } from "react";
import "./selers.css";
import { ShieldPlus } from 'lucide-react';
import { useNavigate } from "react-router-dom";
const Selers = () => {
    const navigate = useNavigate();
    const [sellers, setSellers] = useState([]);
    useEffect(() => {
        const fetchSellers = async () => {
            try {
                const response = await fetch("https://uzum-api.onrender.com/api/sellers");
                const data = await response.json();
                setSellers(data.data);
                console.log(data.data)
            } catch (error) {
                console.error("Xatolik:", error);
            }
        };
        fetchSellers();
    }, []);

    return (
        <div className="aaaaa">
            <div className="lite">
                <h2> <ShieldPlus size={20} style={{ color: "orange" }} />Tasdiqlangan sotuvchilar</h2>
                <h3>Hammasi</h3>
            </div>
            <div className="bbbbb">
                {sellers.map((seller) => (
                    <div key={seller.id} className="ccccc">
                        <div className="ddddd">
                            <img src={seller.logoUrl} alt={seller.name} />
                        </div>
                        <h3 className="eeeee">{seller.name}</h3>
                        <p className="fffff">{seller.experienceLabel} • {seller.location}</p>

                        <div className="ggggg">
                            <div className="hhhhh">
                                <span>{seller.reliabilityScore}%</span>
                                <p>Ishonchlilik</p>
                            </div>
                            <div className="iiiii">
                                <span>{seller.responseTimeSeconds}s</span>
                                <p>Javob vaqti</p>
                            </div>
                        </div>

                        <button
                            className="jjjjjbtn"
                            onClick={() => navigate(`/store/${seller.slug}`)}
                        >
                            Sotuvchi sahifasi
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Selers;