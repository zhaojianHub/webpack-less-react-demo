import _ from 'lodash';
import './style.less';
import Icon from './images/icon.png'

const component = () => {
    const element = document.createElement('div');

    // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());