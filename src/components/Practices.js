import React from 'react';
import { connect } from 'react-redux';

const mapStatetoProps = state => {
    return { pratices: state.practices };
};

const connectedPractices = ({ practices }) => (
    <ul className="practice-list">
        {practices.map(el => (
            <li className="practice-item" key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
);

const practiceList = connect(mapStatetoProps)(connectedPractices);

export default practiceList;
