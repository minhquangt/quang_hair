import React from 'react'
import { Alert, AlertContainer } from "react-bs-notifier";
import './AlertInfo.css'

function AlertInfo({ alertShow, alertOff, alertContent, alertStyle }) {
    return (
        <>
            {alertShow &&
                <AlertContainer>
                    <Alert type={alertStyle}
                        timeout={3000}
                        onDismiss={() => alertOff()}
                    >
                        {alertContent}
                    </Alert>
                </AlertContainer>
            }
        </>
    )
}

export default AlertInfo
