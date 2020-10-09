import React from "react";

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });

    }
    onFormSubmit=(event)=>{
      event.prevent.Default();

      //TODO - Make sure we call callback from the parent app to tell the app that form has been submitted
    }

    render() {
        return (
            <div className='search-bar ui segmet'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />

                    </div>

                </form>

            </div>
        );
    }
}

export default SearchBar;