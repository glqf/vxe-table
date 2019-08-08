(window["webpackJsonpVXETable"]=window["webpackJsonpVXETable"]||[]).push([["start"],{"03df":function(e,n,t){"use strict";t.r(n);var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Event collision interceptor 事件冲突拦截器")]),e._m(0),t("h3",[e._v("API")]),t("p",{staticClass:"green"},[e._v("添加一个拦截器 interceptor.add(type, callback)")]),t("h3",[e._v("type 可选值")]),t("p",{staticClass:"orange"},[e._v("event.clear_filter（清除筛选面板时触发）")]),t("p",{staticClass:"orange"},[e._v("event.clear_actived（清除激活单元格时触发）")]),t("p",[e._v("例子：比如自定义渲染某个组件后，由于弹出层面板不在单元格之内，按键事件的交互行为存在冲突，对于这些场景就很有用了")]),t("pre",[e._v("    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n  ")])])},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("通过内置拦截器可以解决当表格的事件处理与第三方组件存在冲突的问题，从而可以集成其他组件互相兼容；比如这些插件 "),t("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/vxe-table-plugin-element",target:"_blank"}},[e._v("vxe-table-plugin-element")])])}],s=(t("5df3"),t("1c4c"),t("ac6a"),t("1487")),r=t.n(s),o={data:function(){return{demoCodes:["\n        VXETable.interceptor.add('event.clear_actived', (params, event) => {\n          // 比如点击了某个组件的弹出层面板之后，此时被激活单元格不应该被自动关闭，通过返回 false 可以阻止默认的行为。\n          if (event.target.className.indexOf('other-popper') > -1) {\n            return false\n          }\n        })\n        "]}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){r.a.highlightBlock(e)})}},i=o,c=t("2877"),u=Object(c["a"])(i,l,a,!1,null,null,null);n["default"]=u.exports},"0aa1":function(e,n,t){"use strict";t.r(n);var l=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h3",[e._v("Theme 主题")]),t("p",[e._v("Case 1.使用默认的主题样式")]),t("pre",[e._v("    "),t("code",{staticClass:"scss"},[e._v("\n      @import 'vxe-table/lib/index.css';\n    ")]),e._v("\n  ")]),t("p",[e._v("Case 2.修改主题颜色，并引入所有样式（"),t("a",{staticClass:"link",attrs:{href:"https://github.com/xuliangzhan/vxe-table/blob/v1.5/styles/variable.scss",target:"_blank"}},[e._v("查看所有变量")]),e._v("）")]),t("pre",[e._v("    "),t("code",{staticClass:"scss"},[e._v("\n      @import 'vxe-table/styles/variable.scss';\n      $vxe-font-color: #666; // 主题颜色\n      $vxe-zindex: 3000; // 对于在某些场景中，由于堆叠被覆盖时可能会用到\n      @import 'vxe-table/styles/default.scss';\n    ")]),e._v("\n  ")]),t("p",[e._v("Case 3.修改主题颜色，并按需引入样式（"),t("a",{staticClass:"link",attrs:{href:"https://github.com/xuliangzhan/vxe-table/blob/v1.5/styles/variable.scss",target:"_blank"}},[e._v("查看所有变量")]),e._v("）")]),t("pre",[e._v("    "),t("code",{staticClass:"scss"},[e._v("\n      @import 'vxe-table/styles/variable.scss';\n      $vxe-font-color: #666; // 主题颜色\n      $vxe-zindex: 3000; // 对于在某些场景中，由于堆叠被覆盖时可能会用到\n      @import 'vxe-table/styles/table.scss';\n      @import 'vxe-table/styles/column.scss';\n      @import 'vxe-table/styles/header.scss';\n      @import 'vxe-table/styles/body.scss';\n      @import 'vxe-table/styles/footer.scss';\n      @import 'vxe-table/styles/icon.scss';\n      @import 'vxe-table/styles/filter.scss';\n      @import 'vxe-table/styles/loading.scss';\n      @import 'vxe-table/styles/grid.scss';\n      @import 'vxe-table/styles/excel.scss';\n      @import 'vxe-table/styles/menu.scss';\n      @import 'vxe-table/styles/toolbar.scss';\n      @import 'vxe-table/styles/pager.scss';\n      @import 'vxe-table/styles/checkbox.scss';\n      @import 'vxe-table/styles/radio.scss';\n      @import 'vxe-table/styles/input.scss';\n      @import 'vxe-table/styles/button.scss';\n      @import 'vxe-table/styles/message.scss';\n      @import 'vxe-table/styles/tooltip.scss';\n    ")]),e._v("\n  ")]),t("p",[e._v("Case 4.如果需要完全重写主题样式，把 vxe-table/styles/** 目录全部复制到项目中自行修改（例如 /assets/styles/xtable 目录下）")]),t("pre",[e._v("    "),t("code",{staticClass:"scss"},[e._v("\n      @import './assets/styles/xtable/index.scss';\n    ")]),e._v("\n  ")])])}],s=(t("5df3"),t("1c4c"),t("ac6a"),t("1487")),r=t.n(s),o={mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){r.a.highlightBlock(e)})}},i=o,c=t("2877"),u=Object(c["a"])(i,l,a,!1,null,null,null);n["default"]=u.exports},"101e":function(e,n,t){"use strict";t.r(n);var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Renderer 渲染器")]),e._m(0),t("h3",[e._v("内置的渲染")]),t("p",[e._v("默认自带的原生渲染器 input、textarea、select，你也可以根据不同业务去实现对应的渲染器")]),t("h3",[e._v("渲染器和插槽对比")]),t("p",{staticClass:"orange"},[e._v("渲染器：抽象一切可复用的功能，实现简单的可配置化；")]),t("p",{staticClass:"orange"},[e._v("插槽：自定义程度高，但需要重复写冗余代码，比较繁琐；")]),t("h3",[e._v("API")]),t("p",{staticClass:"green"},[e._v("添加渲染器 renderer.add(name, options)")]),t("p",{staticClass:"green"},[e._v("混合多个渲染器 renderer.mixin(renderMap)")]),t("p",{staticClass:"green"},[e._v("删除渲染器 renderer.delete(name)")]),t("h3",[e._v("简单示例")]),t("h4",[e._v("例子：实现一个简单的筛选渲染")]),t("pre",[e._v("    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),t("h4",[e._v("例子：实现一个简单的单元格渲染")]),t("pre",[e._v("    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),t("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")]),t("h4",[e._v("例子：（推荐）通过 JSX 实现更加简单，可维护性好")]),t("pre",[e._v("    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[4]))]),e._v("\n    "),t("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[5]))]),e._v("\n  ")])])},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("通过渲染器你可以轻松实现筛选模板、单元格模板，可以根据不同业务实现不一样的组件，这个功能将非常实用；比如这些插件 "),t("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/vxe-table-plugin-element",target:"_blank"}},[e._v("vxe-table-plugin-element")])])}],s=(t("5df3"),t("1c4c"),t("ac6a"),t("1487")),r=t.n(s),o={data:function(){return{demoCodes:["\n        // 定义一个筛选渲染器\n        VXETable.renderer.add('MyFilter', {\n          // 筛选模板\n          renderFilter (h, filterRender, params, context) {\n            let { column } = params\n            return column.filters.map(item => {\n              return h('input', {\n                attrs: {\n                  type: 'text'\n                },\n                domProps: {\n                  value: item.data\n                },\n                on: {\n                  input (evnt) {\n                    item.data = evnt.target.value\n                  }\n                }\n              })\n            })\n          },\n          // 筛选方法\n          filterMethod ({ option, row, column }) {\n            let { data } = option\n            let cellValue = XEUtils.get(row, column.property)\n            return cellValue === data\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          height="600"\n          :data.sync="tableData"\n          :edit-config="{trigger: \'click\', mode: \'row\'}">\n          <vxe-table-column type="selection" width="60" fixed="left"></vxe-table-column>\n          <vxe-table-column type="index" width="60" fixed="left"></vxe-table-column>\n          <vxe-table-column field="age" title="Age" :filters="[{data: null}]" :filter-render="{name: \'MyFilter\'}"></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n        </vxe-table>\n        ',"\n        // 定义一个输入框渲染器\n        VXETable.renderer.add('MyCell', {\n          autofocus: '.my-cell',\n          // 编辑模板\n          renderEdit (h, editRender, params) {\n            let { row, column } = params\n            return [\n              h('input', {\n                class: 'my-cell',\n                attrs: {\n                  type: 'text'\n                },\n                domProps: {\n                  value: row[column.property]\n                },\n                on: {\n                  input (evnt) {\n                    row[column.property] = evnt.target.value\n                  }\n                }\n              })\n            ]\n          },\n          // 显示模板\n          renderCell (h, editRender, params) {\n            let { row, column } = params\n            return [\n              h('span', row[column.property])\n            ]\n          }\n        })\n\n        // 定义一个链接渲染器\n        VXETable.renderer.add('MyLink', {\n          // 显示模板\n          renderCell (h, editRender, params) {\n            let { row, column } = params\n            let { events } = editRender\n            return [\n              <a class=\"my-link\" onClick=\"{ () => events.click(params) }\">{row[column.property]}</a>\n            ]\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          height="600"\n          :data.sync="tableData"\n          :edit-config="{trigger: \'click\', mode: \'row\'}">\n          <vxe-table-column type="selection" width="60" fixed="left"></vxe-table-column>\n          <vxe-table-column type="index" width="60" fixed="left"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" :cell-render="{name: \'MyLink\', events: {click: linkEvent}}"></vxe-table-column>\n          <vxe-table-column field="role" title="Role" :edit-render="{name: \'MyCell\'}"></vxe-table-column>\n        </vxe-table>\n        ',"\n        // 定义一个输入框渲染器\n        VXETable.renderer.add('MyCell', {\n          autofocus: '.my-cell',\n          // 编辑模板\n          renderEdit (h, editRender, { row, column }) {\n            return [\n              <input class=\"my-cell\" text=\"text\" value={ row[column.property] } onInput={ evnt => { row[column.property] = evnt.target.value }}/>\n            ]\n          },\n          // 显示模板\n          renderCell (h, editRender, { row, column }) {\n            return [\n              <span>{row[column.property]}</span>\n            ]\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          height="600"\n          :data.sync="tableData"\n          :edit-config="{trigger: \'click\', mode: \'row\'}">\n          <vxe-table-column type="selection" width="60" fixed="left"></vxe-table-column>\n          <vxe-table-column type="index" width="60" fixed="left"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" :cell-render="{name: \'MyLink\'}"></vxe-table-column>\n          <vxe-table-column field="role" title="Role" :edit-render="{name: \'MyCell\'}"></vxe-table-column>\n        </vxe-table>\n        ']}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){r.a.highlightBlock(e)})}},i=o,c=t("2877"),u=Object(c["a"])(i,l,a,!1,null,null,null);n["default"]=u.exports},"61d9":function(e,n,t){"use strict";t.r(n);var l=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h3",[e._v("npm install")]),t("p",[e._v("推荐使用 npm 的方式安装，它能更好地和 "),t("a",{staticClass:"link",attrs:{href:"https://webpack.js.org/"}},[e._v("webpack")]),e._v(" 打包工具配合使用。")]),t("p",[e._v("依赖库： "),t("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/xe-utils"}},[e._v("xe-utils1.9+")]),e._v("  "),t("a",{staticClass:"link",attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D"}},[e._v("vue2.6+")])]),t("pre",[e._v("    "),t("code",{staticClass:"shell"},[e._v("\n      npm install xe-utils vxe-table\n    ")]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v("\n      import Vue from 'vue'\n      import VXETable from 'vxe-table'\n      import 'vxe-table/lib/index.css'\n\n      Vue.use(VXETable)\n    ")]),e._v("\n  ")]),t("h3",[e._v("CDN")]),t("p",[e._v("可以通过 "),t("a",{staticClass:"link",attrs:{href:"https://unpkg.com/vxe-table/"}},[e._v("unpkg")]),e._v(" 或 "),t("a",{staticClass:"link",attrs:{href:"https://cdn.jsdelivr.net/npm/vxe-table/"}},[e._v("cdnjs")]),e._v(" 获取到最新版本的资源，并在页面上引入即可")]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v('\n      \x3c!-- 引入样式 --\x3e\n      <link rel="stylesheet" href="https://unpkg.com/vxe-table/lib/index.css">\n      \x3c!-- 引入脚本 --\x3e\n      <script src="https://unpkg.com/xe-utils"><\/script>\n      <script src="https://unpkg.com/vxe-table"><\/script>\n    ')]),e._v("\n  ")])])}],s=(t("5df3"),t("1c4c"),t("ac6a"),t("1487")),r=t.n(s),o={mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){r.a.highlightBlock(e)})}},i=o,c=t("2877"),u=Object(c["a"])(i,l,a,!1,null,null,null);n["default"]=u.exports},"8dea":function(e,n,t){"use strict";t.r(n);var l=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h3",[e._v("size")]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v("\n      每个组件都有 size 属性，默认是继承父组件，所以只要给局部的父组件设置 size，所有后代组件一律继承，该功能对于很多场景中都非常有用\n    ")]),e._v("\n  ")]),t("h3",[e._v("Default Global Props")]),t("pre",[e._v("    "),t("code",{staticClass:"javascript"},[e._v("\n      import Vue from 'vue'\n      import VXETable from 'vxe-table'\n      import 'vxe-table/lib/index.css'\n\n      VXETable.setup({\n        // 默认表格参数\n        size: 'small',\n        showOverflow: null,\n        showHeaderOverflow: null,\n        align: null,\n        headerAlign: null,\n        stripe: false,\n        border: false,\n        resizable: false,\n        fit: true,\n        showHeader: true,\n        highlightCurrentRow: false,\n        highlightHoverRow: false,\n        highlightCurrentColumn: false,\n        highlightHoverColumn: false,\n        rowId: '_XID',\n        sortConfig: {\n          trigger: 'default'\n        },\n        validConfig: {\n          message: 'default'\n        },\n        // 版本号（对于某些带 Storage 数据储存的功能有用到，上升版本号可以用于重置 Storage 数据）\n        version: 0,\n        // 自定义图标配置（如果全部图标都使用自定义，就不需要引入 Icon 模块了，减少体积）\n        icon: {\n          sortAsc: 'vxe-icon--caret-top',\n          sortDesc: 'vxe-icon--caret-bottom',\n          filter: 'vxe-icon--funnel',\n          edit: 'vxe-icon--edit-outline',\n          tree: 'vxe-icon--caret-right',\n          jumpPrev: 'vxe-icon--d-arrow-left',\n          jumpNext: 'vxe-icon--d-arrow-right',\n          prevPage: 'vxe-icon--arrow-left',\n          nextPage: 'vxe-icon--arrow-right',\n          msgClose: 'vxe-icon--close',\n          msgInfo: 'vxe-icon--info',\n          msgSuccess: 'vxe-icon--success',\n          msgWarning: 'vxe-icon--warning',\n          msgError: 'vxe-icon--error',\n          msgLoading: 'vxe-icon--refresh roll'\n        },\n        // 配置式表格的默认参数\n        grid: {\n          proxyConfig: {\n            autoLoad: true,\n            message: true,\n            props: {\n              list: null,\n              result: 'result',\n              total: 'page.total'\n            }\n          }\n        },\n        // 默认快捷菜单\n        menu: {},\n        // 默认 tooltip 主题样式\n        tooltip: {\n          zIndex: 99,\n          theme: 'dark'\n        },\n        // 默认分页参数\n        pager: {\n          pageSize: 10,\n          pagerCount: 7,\n          pageSizes: [10, 15, 20, 50, 100],\n          layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total'] // 非常灵活的分页布局，支持任意位置随意换\n        },\n        // 默认工具栏参数\n        toolbar: {\n          resizable: {\n            storage: false\n          },\n          setting: {\n            storage: false\n          },\n          buttons: []\n        },\n        // 默认消息提示框参数\n        message: {\n          zIndex: 999,\n          lockView: true,\n          lockScroll: true,\n          mask: true,\n          duration: 3000,\n          animat: true\n        },\n        // 默认优化配置项\n        optimization : {\n          animat: true,\n          // 当表头大于 40 列时自动启用横向 X 滚动渲染\n          scrollX: {\n            gt: 40,\n            oSize: 5,\n            rSize: 16\n          },\n          // 当行数据大于 500 条时自动启用纵向 Y 滚动渲染\n          scrollY: {\n            gt: 200,\n            oSize: 20,\n            rSize: 80\n          }\n        },\n        // 集成国际化（可选）（将对列头、校验提示..进行自动翻译）\n        translate: : key => i18n.t(key)\n      })\n    ")]),e._v("\n  ")])])}],s=(t("5df3"),t("1c4c"),t("ac6a"),t("1487")),r=t.n(s),o={mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){r.a.highlightBlock(e)})}},i=o,c=t("2877"),u=Object(c["a"])(i,l,a,!1,null,null,null);n["default"]=u.exports},a325:function(e,n,t){"use strict";t.r(n);var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h3",[e._v("Internationalization 国际化")]),e._m(0),t("p",[e._v("若希望使用指定语言，则需要进行多语言设置。以中/英文为例")]),t("pre",[e._v("    "),t("code",{staticClass:"shell"},[e._v("\n      npm install vue-i18n\n    ")]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n  ")]),t("h3",[e._v("集成国际化")]),t("p",[e._v("若希望在项目中支持全局自动翻译，可以通过全局参数开启（将对列头、校验提示..进行自动翻译）")]),t("pre",[e._v("    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),t("code",{staticClass:"html"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")])])},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("目前支持的"),t("a",{staticClass:"link",attrs:{href:"https://github.com/xuliangzhan/vxe-table/tree/master/locale/lang",target:"_blank"}},[e._v("国际化列表")])])}],s=(t("5df3"),t("1c4c"),t("ac6a"),t("1487")),r=t.n(s),o={data:function(){return{demoCodes:["\n        import Vue from 'vue'\n        import VueI18n from 'vxe-i18n'\n        import VXETable from 'vxe-table'\n        import zhCNLocat from 'vxe-table/lib/locale/lang/zh_CN'\n        import enLocat from 'vxe-table/lib/locale/lang/en'\n\n        const messages = {\n          zh_CN: {\n            ...zhCNLocat\n          },\n          en: {\n            ...enLocat\n          }\n        }\n\n        const i18n = new VueI18n({\n          locale: 'zh_CN',\n          messages,\n        })\n\n        Vue.use(VXETable, {\n          // 对组件内置的提示语进行国际化翻译\n          i18n: (key, value) => i18n.t(key, value)\n        })\n\n        new Vue({ i18n }).$mount('#app')\n        ","\n        Vue.use(VXETable, {\n          // 对外部参数的内容进行国际化翻译\n          translate: : key => i18n.t(key)\n        })\n        ",'\n        <vxe-table\n          border\n          height="600"\n          :data.sync="tableData">\n          <vxe-table-column field="name" title="app.body.label.name"></vxe-table-column>\n          <vxe-table-column field="age" title="app.body.label.age"></vxe-table-column>\n          <vxe-table-column field="sex" title="app.body.label.sex"></vxe-table-column>\n        </vxe-table>\n        ']}},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){r.a.highlightBlock(e)})}},i=o,c=t("2877"),u=Object(c["a"])(i,l,a,!1,null,null,null);n["default"]=u.exports},f924:function(e,n,t){"use strict";t.r(n);var l=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h3",[e._v("Import 完整引入")]),t("pre",[e._v("    "),t("code",{staticClass:"shell"},[e._v("\n      npm install xe-utils vxe-table\n    ")]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v("\n      import Vue from 'vue'\n      import VXETable from 'vxe-table'\n      import 'vxe-table/lib/index.css'\n\n      Vue.use(VXETable)\n    ")]),e._v("\n  ")]),t("h3",[e._v("Import on demand 按需引入")]),t("p",[e._v("借助插件 "),t("a",{staticClass:"link",attrs:{href:"https://www.npmjs.com/package/babel-plugin-import"}},[e._v("babel-plugin-import")]),e._v(" 可以实现按需加载模块，减少文件体积。然后在文件 .babelrc 中配置")]),t("pre",[e._v("    "),t("code",{staticClass:"shell"},[e._v("\n      npm install babel-plugin-import -D\n    ")]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v('\n      {\n        "plugins": [\n          [\n            "import",\n            {\n              "libraryName": "vxe-table",\n              "style": true // 样式是否也按需加载\n            }\n          ]\n        ]\n      }\n    ')]),e._v("\n  ")]),t("p",[e._v("最后这样按需引入模块，就可以减小体积了")]),t("pre",[e._v("    "),t("code",{staticClass:"javascript"},[e._v("\n      import {\n        VXETable,\n        Table,\n        Column,\n        Cell,\n        Header,\n        Body,\n        Footer,\n        Icon,\n        Filter,\n        Loading,\n        Tooltip,\n        Grid,\n        Excel,\n        Menu,\n        Toolbar,\n        Pager,\n        Checkbox,\n        Radio,\n        Input,\n        Button,\n        Message,\n        Export,\n        Resize\n      } from 'vxe-table'\n      import zhCNLocat from 'vxe-table/lib/locale/lang/zh-CN'\n\n      Vue.use(Table)\n      Vue.use(Column)\n      Vue.use(Cell)\n      Vue.use(Header)\n      Vue.use(Body)\n      Vue.use(Footer)\n      Vue.use(Icon)\n      Vue.use(Filter)\n      Vue.use(Loading)\n      Vue.use(Tooltip)\n      Vue.use(Grid)\n      Vue.use(Excel)\n      Vue.use(Menu)\n      Vue.use(Toolbar)\n      Vue.use(Pager)\n      Vue.use(Checkbox)\n      Vue.use(Radio)\n      Vue.use(Input)\n      Vue.use(Button)\n      Vue.use(Message)\n      Vue.use(Export)\n      Vue.use(Resize)\n\n      // 按需加载的方式默认是不带国际化的，需要自行导入\n      VXETable.setup({\n        i18n: (key, value) => VXETable.t(zhCNLocat, key)\n      })\n    ")]),e._v("\n  ")]),t("h3",[e._v("局部 size 设置")]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v("\n      每个组件都有 size 属性，默认是继承父组件，所以只要给局部的父组件设置 size，所有后代组件一律继承，该功能对于很多场景中都非常有用\n    ")]),e._v("\n  ")]),t("h3",[e._v("全局默认参数")]),t("pre",[e._v("    "),t("code",{staticClass:"javascript"},[e._v("\n      import Vue from 'vue'\n      import VXETable from 'vxe-table'\n      import 'vxe-table/lib/index.css'\n\n      VXETable.setup({\n        // 默认表格参数\n        size: 'small',\n        showOverflow: null,\n        showHeaderOverflow: null,\n        stripe: false,\n        border: false,\n        resizable: false,\n        fit: true,\n        showHeader: true,\n        highlightCurrentRow: false,\n        highlightHoverRow: false,\n        highlightCurrentColumn: false,\n        highlightHoverColumn: false,\n        rowId: '_XID',\n        sortConfig: {\n          trigger: 'default'\n        },\n        validConfig: {\n          message: 'default'\n        },\n        // 版本号（对于某些带 Storage 数据储存的功能有用到，上升版本号可以用于重置 Storage 数据）\n        version: 0,\n        // 自定义图标配置（如果全部图标都使用自定义，就不需要引入 Icon 模块了，减少体积）\n        icon: {\n          sortAsc: 'vxe-icon--caret-top',\n          sortDesc: 'vxe-icon--caret-bottom',\n          filter: 'vxe-icon--funnel',\n          edit: 'vxe-icon--edit-outline',\n          tree: 'vxe-icon--caret-right',\n          jumpPrev: 'vxe-icon--d-arrow-left',\n          jumpNext: 'vxe-icon--d-arrow-right',\n          prevPage: 'vxe-icon--arrow-left',\n          nextPage: 'vxe-icon--arrow-right',\n          msgClose: 'vxe-icon--close',\n          msgInfo: 'vxe-icon--info',\n          msgSuccess: 'vxe-icon--success',\n          msgWarning: 'vxe-icon--warning',\n          msgError: 'vxe-icon--error',\n          msgLoading: 'vxe-icon--refresh roll'\n        },\n        // 配置式表格的默认参数\n        grid: {\n          proxyConfig: {\n            autoLoad: true,\n            message: true,\n            props: {\n              list: null,\n              result: 'result',\n              total: 'page.total'\n            }\n          }\n        },\n        // 默认快捷菜单\n        menu: {},\n        // 默认 tooltip 主题样式\n        tooltip: {\n          zIndex: 3000,\n          theme: 'dark'\n        },\n        // 默认分页参数\n        pager: {\n          pageSize: 10,\n          pagerCount: 7,\n          pageSizes: [10, 15, 20, 50, 100],\n          layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total'] // 非常灵活的分页布局，支持任意位置随意换\n        },\n        // 默认工具栏参数\n        toolbar: {\n          resizable: {\n            storage: false\n          },\n          setting: {\n            storage: false\n          },\n          buttons: []\n        },\n        // 默认消息提示框参数\n        message: {\n          zIndex: 3000,\n          lockView: true,\n          lockScroll: true,\n          mask: true,\n          duration: 1500,\n          animat: true\n        },\n        // 默认优化配置项\n        optimization : {\n          animat: true,\n          // 当表头大于 40 列时自动启用横向 X 滚动渲染\n          scrollX: {\n            gt: 40,\n            oSize: 5,\n            rSize: 16\n          },\n          // 当行数据大于 500 条时自动启用纵向 Y 滚动渲染\n          scrollY: {\n            gt: 200,\n            oSize: 20,\n            rSize: 80\n          }\n        },\n        // 集成国际化（将对列头、校验提示..进行自动翻译）\n        translate: key => i18n.t(key)\n      })\n    ")]),e._v("\n  ")])])}],s=(t("5df3"),t("1c4c"),t("ac6a"),t("1487")),r=t.n(s),o={mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach(function(e){r.a.highlightBlock(e)})}},i=o,c=t("2877"),u=Object(c["a"])(i,l,a,!1,null,null,null);n["default"]=u.exports}}]);