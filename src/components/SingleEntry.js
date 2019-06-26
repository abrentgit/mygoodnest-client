import React from 'react';

const SingleEntry = (props) => {
    const id = props.match.params.id;
    return (
        <div className="single-entry-container">
            <div className="content">
                <h3>Good Entry No.{id}</h3>
                <p>June 6, 2019</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a.</p>
            </div>
        </div>
    )
}

export default SingleEntry;