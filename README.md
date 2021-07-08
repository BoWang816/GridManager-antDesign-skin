<h1 align="center">Welcome to gridmanager-antdesign-skin 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/gridmanager-antdesign-skin" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/gridmanager-antdesign-skin.svg">
  </a>
  <a href="https://github.com/BoWang816/GridManager-antDesign-skin#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/BoWang816/GridManager-antDesign-skin/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

> GridManager适配ant Design组件库样式

### 🏠 [Homepage](https://github.com/BoWang816/GridManager-antDesign-skin#readme)

## Rely

[gridmanager-react](https://www.npmjs.com/package/gridmanager-react)

## Install

```sh
npm install gridmanager-antdesign-skin
```

## Usage

- 引入js包，即可使用皮肤以及皮肤内部预设的配置
```sh
<script src="../node_modules/gridmanager-antdesign-skin"></script>
```
或
```shell
import "gridmanager-antdesign-skin"
```

- react配置

```shell
import ReactGridManager from 'gridmanager-react';
import "gridmanager-antdesign-skin"

class App extends Component {
  const option = {
    // 正常配置即可
    xxx: xxx
  };
    render() {
      return <ReactGridManager
                option={option} // 也可以将option中的配置项展开
                height={'100%'} // 展开后的参数会覆盖option中的值
            />
    }
}
```

- 其他框架配置：

  可直接拿到源码，在你自己项目中引入源码中的`gridmanager-reset.less`文件与`ajaxPage.tpl.html`，然后自己配置以下配置项。即可将该皮肤本地化。
  ![gridmanagerAntdOption](https://cdn.jsdelivr.net/gh/BoWang816/zPicture@main/20210628/gridmanagerAntdOption.png)


## dev
- `npm install`

- `npm run start`

- `http://localhost:2020`

## Author

👤 **bo.wang**

* Website: https://bowang816.github.io
* Github: [@BoWang816](https://github.com/BoWang816)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_