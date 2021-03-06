import Confirm from './components/ConfirmDoc'
import CountUp from './components/CountUpDoc'
import Signup from './components/SignupDoc'
import Login from './components/LoginDoc'
import Oauth2 from './components/Oauth2Doc'
import Forget from './components/ForgetDoc'
import BottomLoader from './components/BottomLoaderDoc'
import WeSearchBar from './components/WeSearchBarDoc'
import QMap from './components/QMapDoc'
import QMapLocation from './components/QMapLocationDoc'
import ScriptLoader from './components/ScriptLoaderDoc'
import UserInfo from './components/UserInfoDoc'
import Modal from './components/ModalDoc'
import WeToast from './components/WeToastDoc'
import Demo from './components/DemoDoc'
import VSwiper from './components/VSwiperDoc'
import Clipboard from './components/ClipboardDoc'

// desc 是为了menu上显示用，vue-router本身是不需要的
export default {
  '/Clipboard': {name: 'Clipboard', component: Clipboard, desc: '点击复制'},
  '/VSwiper': {name: 'VSwiper', component: VSwiper, desc: '走马灯'},
  '/Demo': {name: 'Demo', component: Demo, desc: 'Demo'},
  '/WeToast': {name: 'WeToast', component: WeToast, desc: '微信信息提示'},
  '/Modal': {name: 'Modal', component: Modal, desc: 'modal'},
  '/UserInfo': {name: 'UserInfo', component: UserInfo, desc: '显示并编辑用户信息'},
  '/ScriptLoader': {name: 'ScriptLoader', component: ScriptLoader, desc: 'js 非阻塞加载模块'},
  '/QMapLocation': {name: 'QMapLocation', component: QMapLocation, desc: 'QMap 的附加组件，能够定位当前位置'},
  '/QMap': {name: 'QMap', component: QMap, desc: 'qq 地图基础组件'},
  '/WeSearchBar': {name: 'WeSearchBar', component: WeSearchBar, desc: 'weui的searchbar组件，有一些js操作'},
  '/BottomLoader': {name: 'BottomLoader', component: BottomLoader, desc: '滚动到底部做些什么'},
  '/Forget': {name: 'Forget', component: Forget, desc: '忘记密码'},
  '/Oauth2': {name: 'Oauth2', component: Oauth2, desc: 'Oauth2登录'},
  '/Login': {name: 'Login', component: Login, desc: '登录'},
  '/Signup': {name: 'Signup', component: Signup, desc: '用户注册'},
  '/CountUp': {name: 'CountUp', component: CountUp, desc: '数字递增递减动画效果'},
  '/Confirm': {name: 'Confirm', component: Confirm, desc: '确认提示框'},
  '/': { component: BottomLoader }
}
