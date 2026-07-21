import React from 'react'
import "./footer.css"
import { Box, Earth, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <>
            <div className='footer'>
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
                            O'zbekistondagi eng yirik ulgurji savdo <br />
                            platformasi. Biz tadbirkorlar va zavodlarni <br />
                            bitta joyga jamlaymiz.
                        </p> <br />
                        <div className="low">
                            <div className="div">
                                <Earth className='icons' />
                            </div>
                            <div className="div">
                                <Mail className='icons' />
                            </div>
                            <div className="div">
                                <Phone className='icons' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="us">
                    <b>Xaridorlar uchun</b><br /> <br />
                    <p className='qw'>Qanday buyurtma </p><br />
                    <p className='qw'>To'lov usullari</p><br />
                    <p className='qw'>Yetkazib berish</p><br />
                    <p className='qw'>Kafolat va qaytarish</p> <br />
                </div>
                <div className="to">
                    <b>Sotuvchilar uchun</b> <br /><br />
                    <p className='qw'>Sotuvchi bo'lish</p><br />
                    <p className='qw'>Sotuvchilar qoidalari</p><br />
                    <p className='qw'>Reklama va marketing</p><br />
                    <p className='qw'>Logistika yordami</p>
                </div>
                <div className="be">
                    <b>Ilovamizni yuklang</b> <br /><br />
                    <p>
                        Har doim aloqada bo'ling va eng yaxshi <br />
                        narxlardan xabardor bo'ling.
                    </p>
                    <div className="app">
                        <p>ios App Store</p>
                    </div>
                    <div className="app">
                        <p>Google Play</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer