import React from 'react';
import QRCode from "react-qr-code";



class Qr extends React.Component {
    render() {
        return(
            <>
            <QRCode value = 'https://www.youtube.com/watch?v=-jRKsiAOAA8'/>
            
            </>
        )
    }
}
export default Qr;


