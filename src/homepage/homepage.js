import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu} from 'antd';
import SideBar from './../sidebar/sidebar';
import LayoutContent from './content';
import Todo from './../page/todo-list';
import Home from './../page/home';
import Profile from './../page/profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { Header, Sider, Content } = Layout;
const routes = [
  {
    path: "/home",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/todo-list",
    main: () => <Todo />
  },
  {
    path: "/profile",
    main: () => <Profile />
  }
];

class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
			sidebar: [
				{id: 1, name: 'Home', slug: '/home'},
				{id: 2, name: 'Todo list', slug: '/todo-list'},
				{id: 3, name: 'Profile', slug: '/profile'},
			],
			selectedKey: '1'
		}
	}

  	onCollapse() {
	    this.setState({ 
	    	collapsed: !this.state.collapsed 
	    });
  	};

  	selectItem(key) {
  		this.setState({
        selectedKey: key.toString()
      });
  	};

  	render() {
    	return (
        <Router>
      		<Layout style={{ minHeight: '100vh' }}>
        		<Sider collapsible collapsed={this.state.collapsed} onCollapse={() => this.onCollapse()}>
        			<SideBar mode="inline" selectedKey={this.state.selectedKey} selectItem={(key) => this.selectItem(key)} sidebar={this.state.sidebar}/>
        		</Sider>
        		<Layout className="site-layout">
          			<Header className="header">
				      	<div className="logo" />
				      	<SideBar mode="horizontal" selectedKey={this.state.selectedKey} selectItem={(key) => this.selectItem(key)} sidebar={this.state.sidebar}/>
				    </Header>
          			<Content style={{ margin: '0 16px' }}>
            			<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            			   <Switch>
                      {routes.map((route, index) => (
                        <Route
                          key={index}
                          path={route.path}
                          exact={route.exact}
                          children={<route.main />}
                        />
                      ))}
                    </Switch>
            			</div>
          			</Content>
        		</Layout>
      		</Layout>
        </Router>
    	);
  	}
}
export default Homepage;
