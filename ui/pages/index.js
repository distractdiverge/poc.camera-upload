import React from 'react';
import Header from '../components/header';
import UploadForm from '../components/upload-form';
import List from '../components/list';

import '../styles/index.scss';

export default class extends React.Component {
    getInitialProps() {

    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <main role="main" className="container">
                    <UploadForm />
                    <List />
                </main>
            </div>

        );
    }
}