import React from "react";

const Search = (props) => {
    return (
        <div className="ui search">
            <div className="ui icon input">
                <input
                    value={props.searchFelid}
                    onChange={props.searchChange}
                    className="prompt"
                    onSubmitEditing={this.searchSub}
                />
                <i className="search icon" />
            </div>
        </div>
    );
};

export default Search;
