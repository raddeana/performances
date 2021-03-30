/**
 * app
 * @author Philip
 */
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { NavBar, TabBar, Icon }  from 'antd-mobile';
import './App.css';

class App extends PureComponent {
  state = {
    selectedTab: 'blueTab'
  };

  render () {
    return (
      <div className="App">
        <NavBar
          mode="dark"
          leftContent="Back"
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
        <div className="content">
          {this.props.children}
        </div>
        <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
          >
            <TabBar.Item
              title="Life"
              key="Life"
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
              />
              }
              selected={this.state.selectedTab === 'blueTab'}
              badge={1}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });

                this.props.history.push('/');
              }}
              data-seed="logId"
            />
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                />
              }
              title="Koubei"
              key="Koubei"
              badge={'new'}
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                });

                this.props.history.push('/hack');
              }}
              data-seed="logId1"
            />
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                />
              }
              title="Friend"
              key="Friend"
              dot
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                });

                this.props.history.push('/user');
              }}
            />
          </TabBar>
      </div>
    );
  }
}

export default withRouter(App)