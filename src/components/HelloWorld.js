import './HelloWorld.css';
import React from 'react';
import BarcodeScanner from './BarcodeScanner';
import DBR from "../dbr";
class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            libLoaded: false,
            resultValue: "",
            bShowScanner: false
        };
    }
    async componentDidMount() {
        try {
            console.log('inside try',DBR.BarcodeScanner)
            //Load the library on page load to speed things up.

            await DBR.BarcodeScanner.loadWasm();
            this.setState(state => {
                state.libLoaded = true;
                return state;
            }, () => {
                this.showScanner();
            });
        } catch (ex) {
            console.log('inisde catch')
            alert(ex.message);
            throw ex;
        }
    }    
    showScanner = () => {
        this.setState({
            bShowScanner: true
        });
    }
    appendMessage = (message) => {
        switch (message.type) {
            case "result":
                this.setState(prevState => {
                    prevState.resultValue = message.format + ": " + message.text;
                    return prevState;
                });
                break;
            case "error":
                this.setState(prevState => {
                    prevState.resultValue = message.msg;
                    return prevState;
                });
                break;
            default: break;
        }
    }
    render() {
        return (
            <div className="helloWorld">
            <div id="UIElement">
                {!this.state.libLoaded ? "" : <span></span>}
                {this.state.bShowScanner ? (<BarcodeScanner appendMessage={this.appendMessage}></BarcodeScanner>) : ""}
                <BarcodeScanner appendMessage={this.appendMessage}></BarcodeScanner>
            </div>
            <h1>hey</h1>
            <input type="text" value={this.state.resultValue} readOnly={true} id="resultText" />
        </div>
        );
    }
}
export default HelloWorld;
// (<span style=>Loading Library...</span>)