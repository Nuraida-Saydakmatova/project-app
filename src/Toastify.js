    import  React from 'react';
    import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';


    class Toastify extends React.Component {
        clickT = () => {
            return toast.error('fjidsnhf')
        }
        render(){
            return(
                <>
                <button onClick = {() => this.clickT()}>TAP</button>
                <ToastContainer position='bottom-right'/>
                <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {new Date().toLocaleTimeString()}.</h2>
        </div>  
                
                </>
            )
        }
    }
    export default Toastify;