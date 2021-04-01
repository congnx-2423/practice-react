import React from 'react';
import { Menu} from 'antd';
import { useHistory } from 'react-router-dom';

function SideBar(props) {
	let history = useHistory();

	function changeContent(id, slug) {
		history.push(slug);
		props.selectItem(id);
	}
	return (
		<Menu theme="dark" mode={props.mode} selectedKeys={[props.selectedKey]}>

			{
				props.sidebar.map((item) => {
					return 	<Menu.Item key={item.id} 
								onClick={() => changeContent(item.id, item.slug)} 
								title={item.name}
							>
  								{item.name}
        					</Menu.Item>
				})
			}
		</Menu>

	);
}

export default SideBar;
