import React, { Component } from 'react';

class FeedbackReview extends Component {
    render() {
        return (
            <div>
               <h5>Please confirm</h5>
               <button className="yellow darken-3 btn-flat" onClick={this.props.onCancel}>
                   Back
               </button>
            </div>
        );
    }
}

export default FeedbackReview;