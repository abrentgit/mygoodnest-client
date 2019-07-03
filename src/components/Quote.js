import React from 'react';
import { connect } from 'react-redux';
// import { getQuotes } from '../actions/quote'

export class Quote extends React.Component {
    render() {
        console.log('quote', this.props.quotes)
        const singleQuote = this.props.quotes;
        return (
            <div className="quote-container">
                <h2>{singleQuote}</h2>
            </div>
        )
    }
}

const mapStatetoProps = state => ({
    quotes: state.quotes,
    loading: state.loading,
    error: state.error
})

export default connect(mapStatetoProps(Quote));