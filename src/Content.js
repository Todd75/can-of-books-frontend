import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import axios from 'axios';

class Content extends React.Component {

    getBook = async () => {
        if (this.props.auth0.isAuthenticated) {
            const res = await this.props.auth0.getIdTokenClaims();

            const jwt = res.__raw;
            console.log(jwt);
            let url = `${process.env.REACT_APP_SERVER_URL}/books`;
            let bookResults = await axios.get(url);
            // let config = {
            //    method: 'get',
            //    baseURL = process.env.REACT_APP_SERVER_URL,
            //    url: '/books',
            //    headers: {
            //    "Authorization": `Bearer ${jwt}`
            // }
            // }
            //    let bookResults = await axios(config);
            console.log(bookResults);
        }
    }

    componentDidMount() {
        this.getBooks();
    }

    render() {
        console.log(this.props.auth0.user);
        return (
            <h2>Content Pages</h2>
        )
    }
}

export default withAuth0(Content);