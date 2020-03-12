/**
 * index.js
 * @author wangbo
 * @since 2020/3/10
 * @github https://github.com/BoWang816
 */
import './gridmanager-reset.less';
import ajaxPageTemplate from './ajaxPage.tpl.html';

((GridManager) => {
    if (!GridManager) {
        console.error('GridManager未发现，请确认是否已经引用。');
        return;
    }
    GridManager.defaultOption = {
        width: '100%',
        height: '100%',
        supportRemind: false, // 不支持提示
        supportDrag: false, // 不支持列拖拽
        supportAutoOrder: false, // 不支持序号
        disableLine: true, // 默认不支持列分割线显示
        skinClassName: 'ant-skin', // 页样式名称
        configInfo: '自定义字段可在列表拖拽调整排序', // 列配置提示信息
        ajaxPageTemplate
    };
})(window.GridManager);
