import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';
import { withRouter } from 'react-router-dom';


class StreamList extends React.Component {
    
    componentDidMount() {
        this.props.fetchStreams();
    }
    
    renderList(){
        // console.log(this.props)
        return this.props.streams.map(stream => {
            return (
                <div className='item' key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className='large middle aligned icon camera' />
                    <div className='content'>
                        <h1>{stream.title}</h1>
                        <div className='description'>
                            <h1>{stream.description}</h1>
                        </div>
                    </div>
                </div>
            )
        });    
    }  

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <button className="ui button primary">
                        Edit
                    </button>
                    <button className="ui button negative">
                        Delete
                    </button>
                </div>
            ) 
        }
    }

    renderCreateStream() {
        if (this.props.userIsSignedIn) {
            return (
                <div style={{textAlign: 'right' }} >
                    <Link exact="true" to='/streams/new' className='ui button primary'>
                        Create Stream
                    </Link>
                </div>
            )
        }
    }
    
    render() {
        // console.log(this.props)
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreateStream()}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    streams:  Object.values(state.streams), //turns the values inside the object into an array
    currentUserId: state.auth.userId,
    userIsSignedIn: state.auth.isSignedIn,
});

export default withRouter(connect(mapStateToProps, {fetchStreams})(StreamList));