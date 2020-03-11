/**
 * app.js
 * @author wangbo
 * @since 2020/3/10
 * @github https://github.com/BoWang816
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactGridManager from 'gridmanager-react';
import 'gridmanager-react/css/gm-react.css';
// 封装文件
import '../js/index';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // 表格组件配置
        const option = {
            gridManagerName: 'testReact',
            height: '100%',
            emptyTemplate: '空',
            columnData: [{
                key: 'title',
                remind: 'the title',
                text: '标题'
            },{
                key: 'type',
                remind: 'the type',
                text: '分类',
                align: 'center'
            },{
                key: 'info',
                remind: 'the info',
                text: '使用说明'
            },{
                key: 'username',
                remind: 'the username',
                text: '作者',
                // 使用函数返回 dom node
                template: (username, row, index) => {
                    return (
                        <a href={'https://github.com/baukh789'} target={'_black'}>{username}</a>
                    );
                }
            },{
                key: 'createDate',
                remind: 'the createDate',
                width: '100px',
                text: '创建时间',
                sorting: 'DESC',
                // 使用函数返回 htmlString
                template: function(createDate, rowObject){
                    return new Date(createDate).toLocaleDateString();
                }
            },{
                key: 'lastDate',
                remind: 'the lastDate',
                width: '120px',
                text: '最后修改时间',
                sorting: '',
                // 使用函数返回 htmlString
                template: function(lastDate, rowObject){
                    return new Date(lastDate).toLocaleDateString();
                }
            },{
                key: 'action',
                remind: 'the action',
                width: '100px',
                disableCustomize: true,
                text: '操作'
            }],
            supportRemind: true,
            isCombSorting:  true,
            supportAjaxPage: true,
            supportSorting: true,
            ajaxData: 'https://www.fastmock.site/mock/654a6d890e9e4da4fb45f4a2a1180afb/testMock/antgridList',
            ajaxType: 'POST'
        };
        return (
            <div>
                <h3>适配Ant Design组件库的GridManager</h3>
                <ReactGridManager
                    option={option} // 也可以将option中的配置项展开
                    height={'100%'} // 展开后的参数，会覆盖option中的值
                />
            </div>
        );
    };
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

