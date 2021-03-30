/**
 * vant ui
 * @author Chenxiangyu
 */
import {
    Icon,
    Tabbar,
    TabbarItem,
    NavBar,
    Cell,
    CellGroup,
    Button,
    List
} from 'vant'

/**
 * vant ui 组件初始化
 * @param {object} vue 实例
 * @return void
 */
export default function (app) {
    app.use(Icon);
    app.use(Tabbar);
    app.use(TabbarItem);
    app.use(NavBar);
    app.use(Cell);
    app.use(CellGroup);
    app.use(Button);
    app.use(List);
}