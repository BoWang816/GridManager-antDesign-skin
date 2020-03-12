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
            gridManagerName: 'testAnt',
            height: '100%',
            columnData: [{
                key: 'title',
                text: '标题',
                filter: {
                    // 筛选条件列表, 数组对象。格式: [{value: '1', text: 'HTML/CSS'}],在使用filter时该参数为必设项。
                    option: [{value: '1', text: '过滤条件1'},{value: '2', text: '过滤条件2'},{value: '3', text: '过滤条件3'},{value: '4', text: '过滤条件4'}],
                    // 筛选选中项，字符串, 未存在选中项时设置为''。 在此设置的选中的过滤条件将会覆盖query
                    selected: '3',
                    // 否为多选, 布尔值, 默认为false。非必设项
                    isMultiple: false
                },
            },{
                key: 'type',
                text: '分类',
                align: 'center'
            },{
                key: 'info',
                text: '使用说明'
            },{
                key: 'username',
                text: '作者',
                align: 'center',
                // 使用函数返回 dom node
                template: (username, row, index) => {
                    return (
                        <a href={'https://github.com/baukh789'} target={'_black'}>{username}</a>
                    );
                }
            },{
                key: 'createDate',
                width: '100px',
                text: '创建时间',
                sorting: 'DESC',
                // 使用函数返回 htmlString
                template: function(createDate, rowObject){
                    return new Date(createDate).toLocaleDateString();
                }
            },{
                key: 'lastDate',
                width: '120px',
                text: '最后修改时间',
                sorting: '',
                // 使用函数返回 htmlString
                template: function(lastDate, rowObject){
                    return new Date(lastDate).toLocaleDateString();
                }
            }],
            supportAjaxPage: true,
            ajaxData: 'https://www.fastmock.site/mock/654a6d890e9e4da4fb45f4a2a1180afb/testMock/antgridList',
            ajaxType: 'POST'
        };
        return (
            <>
                <h3 style={{ textAlign: 'center' }}>适配Ant Design组件库的GridManager皮肤</h3>
                <div style={{ height: 'calc(100vh - 70px)' }}>
                    <ReactGridManager
                        option={option} // 也可以将option中的配置项展开
                        height={'100%'} // 展开后的参数，会覆盖option中的值
                    />
                </div>
            </>
        );
    };
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

