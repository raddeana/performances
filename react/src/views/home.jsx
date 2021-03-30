import axios from 'axios';
import React, { PureComponent } from 'react';
import { Button } from 'antd-mobile';

class Home extends PureComponent {
    state = {
        list: [],
        num: 0
    }

    /**
     * 搜索查询
     * @EventHandler
     */
    handleSearch = () => {
        axios.get('/api/list').then((res) => {
            this.setState({
                list: res.data.list
            })
        });
    }

    handleClick = () => {
        this.setState({
            num: Math.random() * 1000
        })
    }

    componentWillUpdate () {
        console.log(' will update ');
    }

    componentDidMount () {
        this.handleSearch();
    }

    render () {
        const list = this.state.list;

        return (
            <div className="home">
                <Button type="info" onClick={this.handleClick}>查询</Button>
                <div className="list">
                    {list.map((item) => (
                        <div className="item" key={item.id}>
                            <img src={item.photo} width="300" height="150" />
                            <h4>{ item.title }</h4>
                            <p>{ item.address }</p>
                            <p>{ item.date }</p>
                            <p>{ item.a }</p>
                            <p>{ item.b }</p>
                            <p>{ item.c }</p>
                            <p>{ item.d }</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;