import ReactDOM from 'react-dom';
import RouterConfig from './routes/router.jsx';
import './common/css/common.less';

window.__DEV_ENV__ = true;
ReactDOM.render(RouterConfig, document.getElementById('root'));
