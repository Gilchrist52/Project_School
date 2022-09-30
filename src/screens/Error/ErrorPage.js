import React from 'react';

const ErrorPage = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        }}
        >
            <h1
                style={{
                    fontSize: 88
                }}
            >
                404
            </h1>
        </div>
    );
};

export default ErrorPage;