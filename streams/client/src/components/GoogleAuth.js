import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component{

    // state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '384348642975-h112f00klhp83etj26h11koea761c0bt.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance(); 
                this.onAuthChange(this.auth.isSignedIn.get());
                // this.setState({ isSignedIn: this.auth.isSignedIn.get() }) // Returns true or false (if the user is signed in)
                this.auth.isSignedIn.listen(this.onAuthChange); // Is gonna listen for any change as a callback to onAuthChange
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        // this.setState({ isSignedIn: this.auth.isSignedIn.get()});
        if (isSignedIn) {
            this.props.signThisFuckingIn(this.auth.currentUser.get().getId());
        }else {
            this.props.signThisFuckingOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        // if (this.state.isSignedIn === null) return null;
        if (this.props.isSignedIn === null) return null;

        // if (this.state.isSignedIn) return (
        if (this.props.isSignedIn) return (
            <button 
            onClick={this.onSignOutClick}
            className="ui red google button">
                <i className="google icon" />
                Sign Out
            </button>
        )

        return (
            <button
            onClick={this.onSignInClick}
            className="ui red google button">
                <i className="google icon" />
                Sign In
            </button>
        )  
    }

    render() {
        // console.log(this.state.isSignedIn)
        // console.log(this.props)
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        );
    };
};

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
});


export default connect(mapStateToProps, { signThisFuckingIn: signIn,signThisFuckingOut:signOut })(GoogleAuth);