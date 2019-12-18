import { ajax, jstool, $, siblings, bufferMove, double } from "./tool.js";
//渲染数据+尾部懒加载
import { Render } from "./index_render.js";
new Render().init();
//tab切换
import { Tab } from "./index_tab.js";
new Tab().init();
//搜索框
import {Search} from "./index_search.js";
new Search().init();
//二级菜单
import { Menu } from "./index_menu.js";
new Menu().init();
//顶部悬浮
import { Topsus } from "./index_topsus.js";
new Topsus().init();
//倒计时
import { Djs } from "./index_djs.js";
new Djs().init();
//右侧工具栏
import {Toolbar} from "./index_toolbar.js";
new Toolbar().init();