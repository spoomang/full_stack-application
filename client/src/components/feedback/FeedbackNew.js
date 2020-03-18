import React, {Component} from 'react';
import FeedbackForm from './FeedbackForm';
import FeedbackReview from './FeedbackReview';


class Feedback extends Component {
    state = { showFormReview: false};

    renderContent() {
        if(this.state.showFormReview) {
            return <FeedbackReview
            onCancel={() => this.setState({showFormReview: false})}
            />
        }

        return <FeedbackForm
            onFeedbackSubmit={() => this.setState({showFormReview: true})}
        />
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default Feedback