import Component from '../components/Component.js';

class Input extends Component {
  template() {
    return `
         <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="">
        `;
  }

  setEvent() {
    const $input = this.$target.querySelector('.SearchInput__input');
    $input.addEventListener('keyup', (e) => {
      this.props.onInput(e);
    });
  }
}

export default Input;
