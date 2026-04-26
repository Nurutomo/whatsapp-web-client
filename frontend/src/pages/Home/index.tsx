import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home__content">
                <div className="home__icon">
                    <svg viewBox="0 0 303 172" width="303" height="172" className="home__illustration">
                        <g fill="none" fillRule="evenodd">
                            <g transform="translate(0 3)">
                                <path fill="#CFD8DC" d="M229.822 38.1l-8.3 8.3c-18.8-18.8-44.7-30.4-73.3-30.4a103.4 103.4 0 0 0-73.3 30.3l-8.3-8.3C86.422 17.5 115.022 4.9 148.222 5c33.2.1 61.7 12.6 81.6 33.1z"/>
                                <path fill="#90A4AE" d="M212.422 55.5l-8.3 8.3c-14.4-14.4-34.4-23.3-56.4-23.3a79.6 79.6 0 0 0-56.4 23.3l-8.3-8.3c17-17 40.5-27.5 65.9-27.5 25.3-.1 48.7 10.4 63.5 27.5z"/>
                                <path fill="#607D8B" d="M148.222 81c-14.5 0-27.7 5.9-37.3 15.4l-8.3-8.3c11.9-11.9 28.3-19.3 46.3-19.3 18.1.1 34.4 7.4 46.3 19.3l-8.3 8.3c-9.7-9.5-22.8-15.4-38.7-15.4z"/>
                                <circle cx="148.222" cy="127" r="22" fill="#455A64"/>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="home__text">
                    <h1 className="home__title">Download WhatsApp for Windows</h1>
                    <p className="home__subtitle">
                        Make calls, share your screen and get a faster experience when you download the Windows app.
                    </p>
                    <button className="home__download-btn">Get the app</button>
                </div>
                <div className="home__divider">
                    <span></span>
                </div>
                <p className="home__info">
                    <svg viewBox="0 0 14 18" width="14" height="18" className="home__lock-icon">
                        <path fill="currentColor" d="M7 1C4.243 1 2 3.243 2 6v1H1a1 1 0 0 0-1 1v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a1 1 0 0 0-1-1h-1V6c0-2.757-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3v1H4V6c0-1.654 1.346-3 3-3zm0 8a1 1 0 1 1-.001 2.001A1 1 0 0 1 7 11z"/>
                    </svg>
                    Your personal messages are end-to-end encrypted
                </p>
            </div>
        </div>
    );
}

export default Home;
