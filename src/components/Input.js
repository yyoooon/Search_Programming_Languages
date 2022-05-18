import Component from '../core/Component.js';
import { getItem, setItem } from '../utils/storage.js';

class Input extends Component {
  $input;

  template() {
    return `
         <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value=${getItem(
           'input_value_cach',
           ''
         )} autofocus>
        `;
  }

  setCursorToEnd() {
    const maxLength = this.$input.value.length;
    this.$input.setSelectionRange(maxLength, maxLength);
  }

  mounted() {
    this.$input = this.$target.querySelector('.SearchInput__input');
    this.setCursorToEnd();
  }

  setEvent() {
    this.$target.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    this.$input.addEventListener('keyup', (e) => {
      this.props.onInput(e);
      this.props.onPressKey(e);
      setItem('input_value_cach', e.target.value);
    });
  }
}

export default Input;
