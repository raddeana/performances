import React, { PureComponent } from 'react';
import { Button } from 'antd-mobile';

class User extends PureComponent {
    render () {
        return (
            <div className="login-panel">
                <Button type="primary">primary</Button>
            </div>
        );
    }
}

export default User;