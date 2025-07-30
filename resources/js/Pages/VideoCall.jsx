import React, { useEffect, useState } from "react";
import { OTSession, OTPublisher, OTSubscriber } from "opentok-react";

const VideoCall = () => {
    const [apiKey, setApiKey] = useState("your_vonage_api_key");
    const [sessionId, setSessionId] = useState("");
    const [token, setToken] = useState("");

    useEffect(() => {
        // Fetch sessionId and token from your Laravel backend
        const fetchSessionData = async () => {
            try {
                const sessionResponse = await fetch("http://localhost:8000/video/create-session");
                const sessionData = await sessionResponse.json();

                const tokenResponse = await fetch("http://localhost:8000/video/generate-token", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ sessionId: sessionData.sessionId }),
                });

                const tokenData = await tokenResponse.json();
                setSessionId(sessionData.sessionId);
                setToken(tokenData.token);
            } catch (error) {
                console.error("Error fetching session data:", error);
            }
        };

        fetchSessionData();
    }, []);

    if (!sessionId || !token) return <div>Loading...</div>;

    return (
        <div>
            <h1>Video Call</h1>
            <OTSession apiKey={apiKey} sessionId={sessionId} token={token}>
                <OTPublisher />
                <OTSubscriber />
            </OTSession>
        </div>
    );
};

export default VideoCall;
