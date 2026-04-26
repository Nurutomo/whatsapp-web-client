import React from "react";
import "./Loader.css";

function Loader({ done }) {
    return (
        <div className="loader">
            <div className="loader__content">
                <div className="loader__logo">
                    <svg viewBox="0 0 303 32" width="303" height="32" className="loader__logo-svg">
                        <path fill="#00a884" d="M34.537.013c-5.93 0-11.304 2.029-15.56 5.398L16.32 2.754H.927v23.53l-.927.845v4.857h16.32v-4.857l-.855-.755v-8.46c0-6.79 5.535-12.285 12.372-12.285 6.844 0 12.38 5.496 12.38 12.286v8.459l-.862.755v4.857H55.66v-4.857l-.928-.845V2.753H39.339L36.68 5.41A24.23 24.23 0 0 0 34.537.013zm233.525 0c-5.93 0-11.305 2.029-15.56 5.398l-2.658-2.657h-15.393v23.53l-.927.845v4.857h16.32v-4.857l-.855-.755v-8.46c0-6.79 5.534-12.285 12.371-12.285 6.845 0 12.381 5.496 12.381 12.286v8.459l-.861.755v4.857h16.314v-4.857l-.927-.845V2.753h-15.393L270.204 5.41A24.23 24.23 0 0 0 268.062.013z"/>
                    </svg>
                    <div className="loader__whatsapp-icon">
                        <svg viewBox="0 0 39 39" width="100" height="100">
                            <path fill="#00a884" d="M19.5 0C8.731 0 0 8.731 0 19.5S8.731 39 19.5 39 39 30.269 39 19.5 30.269 0 19.5 0zm0 3.5c8.826 0 16 7.174 16 16s-7.174 16-16 16-16-7.174-16-16 7.174-16 16-16z"/>
                            <path fill="#00a884" d="M19.5 7C12.044 7 6 13.044 6 20.5S12.044 34 19.5 34 33 27.956 33 20.5 26.956 7 19.5 7z"/>
                        </svg>
                    </div>
                </div>
                <div className="loader__progress-container">
                    <div className={`loader__progress-bar ${done ? "loader__progress-bar--done" : ""}`}></div>
                </div>
                <p className="loader__text">WhatsApp Web Clone</p>
                <p className="loader__subtext">
                    <svg viewBox="0 0 12 11" width="12" height="11" className="loader__lock-icon">
                        <path fill="currentColor" d="M10.5 0h-9C.675 0 0 .675 0 1.5v8C0 10.325.675 11 1.5 11h9c.825 0 1.5-.675 1.5-1.5v-8C12 .675 11.325 0 10.5 0zm-4.5 7.5c-.825 0-1.5-.675-1.5-1.5S5.175 4.5 6 4.5 7.5 5.175 7.5 6 6.825 7.5 6 7.5zM9 3H3V2h6v1z"/>
                    </svg>
                    End-to-end encrypted
                </p>
            </div>
        </div>
    );
}

export default Loader;
