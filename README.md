# react-icon

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Icon component. Icons keeped in svg-format.

## Usage

```javascript

import { Icon } from "@crpt/react-icon";

<Icon type="calendar" />

```

| PropName | Описание | Пример |
|---|---|---|
| type(required): String | Icon name. | `<Icon type="search" />` |
| onClick: Function  | Callback for the click event. |  `<Icon type="calendar" onClick={e => console.log(e)} />` |
| size: Integer  | Set size in pixels. |  `<Icon size={16} type="calendar" />` |
| spacingLeft: Integer  | Set left margin in pixels. |  `<Icon type="calendar" spacingLeft={16} />` |
| spacingRight: Integer  | Set right margin in pixels. |  `<Icon type="calendar" spacingRight={16} />` |


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
