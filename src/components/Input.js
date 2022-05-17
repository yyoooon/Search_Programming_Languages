import Component from '../core/Component.js';

class Input extends Component {
  template() {
    return `
         <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="">
        `;
  }

  setEvent() {
    this.$target.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    const $input = this.$target.querySelector('.SearchInput__input');
    $input.addEventListener('keyup', (e) => {
      this.props.onInput(e);
      this.props.onPressKey(e);
    });
  }
}

export default Input;
