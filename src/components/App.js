import React from "react";
import ReactDOM from "react-dom";
import SearchBar from './SeachBar';

class App extends React.Component {
    onTermSubmit=(term)=>{
        console.log(term);

    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
            </div>
        );
    }
}

export default App;