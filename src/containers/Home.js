import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loadingState: false,
            initiallyLoaded: false
			
        };
		this.handleMessage = this.handleMessage.bind(this);
    }
		handleMessage(){
			
			console.log($("#message").val());
			
		}
  
    render() {
       
        return (
            <div className="wrapper">
			<div id="simple-chat">
					 <div className="chat">
					  <div className="chat-title">
						<h5>Ask Any Questions</h5>
						<figure className="avatar">
						  <img src="" alt="profilepic"/></figure>
					  </div>
					  <div className="messages">
						<div className="messages-content" id="handle"></div>
						<div id="feedback"></div>
					  </div>
					  <div className="message-box">
					    <input id="user-name" type="hidden" value="" />
						<textarea type="text" id="message" className="message-input" placeholder="Type message..."></textarea>
						<button id="send" className="message-submit" onClick={this.handleMessage}>Send</button>
					  </div>

					</div>
					<div className="bg"></div>
					</div>
            </div>
        );
    }
}

Home.PropTypes = {
    username: React.PropTypes.string
};

Home.defaultProps = {
    username: undefined
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authentication.status.isLoggedIn,
        postStatus: state.memo.post,
        currentUser: state.authentication.status.currentUser,
        memoData: state.memo.list.data,
        listStatus: state.memo.list.status,
        isLast: state.memo.list.isLast,
        editStatus: state.memo.edit,
        removeStatus: state.memo.remove,
        starStatus: state.memo.star
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        memoPostRequest: (contents) => {
            return dispatch(memoPostRequest(contents));
        },
        memoListRequest: (isInitial, listType, id, username) => {
            return dispatch(memoListRequest(isInitial, listType, id, username));
        },
        memoEditRequest: (id, index, contents) => {
            return dispatch(memoEditRequest(id, index, contents));
        },
        memoRemoveRequest: (id, index) => {
            return dispatch(memoRemoveRequest(id, index));
        },
        memoStarRequest: (id, index) => {
            return dispatch(memoStarRequest(id, index));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
