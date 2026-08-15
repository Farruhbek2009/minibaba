import React from "react";
import "./footer.css";
import { Box, Earth, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {

    const { t } = useTranslation();

    return (
        <>
            <div className="footer">
                <div>

                    <div className="logo">

                        <div className="logo-card">
                            <Box size={20} color="white" />
                        </div>

                        <h2>Minibaba</h2>

                    </div>

                    <br />

                    <div className="we">

                        <p>
                            {t("footer_description")}
                        </p>

                        <br />

                        <div className="low">

                            <div className="div">
                                <Earth className="icons" />
                            </div>

                            <div className="div">
                                <Mail className="icons" />
                            </div>

                            <div className="div">
                                <Phone className="icons" />
                            </div>

                        </div>

                    </div>

                </div>
                <div className="us">

                    <b>{t("buyers")}</b>

                    <br />
                    <br />

                    <p className="qw">
                        {t("how_to_order")}
                    </p>

                    <br />

                    <p className="qw">
                        {t("payment_methods")}
                    </p>

                    <br />

                    <p className="qw">
                        {t("delivery")}
                    </p>

                    <br />

                    <p className="qw">
                        {t("warranty_return")}
                    </p>

                    <br />

                </div>
                <div className="to">

                    <b>{t("sellers")}</b>

                    <br />
                    <br />

                    <p className="qw">
                        {t("become_seller")}
                    </p>

                    <br />

                    <p className="qw">
                        {t("seller_rules")}
                    </p>

                    <br />

                    <p className="qw">
                        {t("advertising_marketing")}
                    </p>

                    <br />

                    <p className="qw">
                        {t("logistics_help")}
                    </p>

                </div>

                <div className="be">

                    <b>{t("download_app")}</b>

                    <br />
                    <br />

                    <p>
                        {t("app_description")}
                    </p>

                    <div className="app">
                        <p>iOS App Store</p>
                    </div>

                    <div className="app">
                        <p>Google Play</p>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Footer;