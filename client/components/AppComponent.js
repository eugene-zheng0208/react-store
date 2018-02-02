import React from 'react';

import styles from './AppComponent.css';


class AppComponent extends React.Component {
    render() {
        return (
            <div className={styles.app}>
            {this.props.children}
            </div>
        );
    }
}

export default AppComponent;

