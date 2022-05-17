import Component from '../core/Component.js';

class WordList extends Component {
  setup() {
    this.$target.style.display = 'none';
    this.state = {
      data: this.props.data,
      currentSelectedIndex: this.props.currentSelectedIndex,
    };
  }

  template() {
    const { data, currentSelectedIndex } = this.state;
    return `
    <ul>
      ${data
        .map(
          (word, index) =>
            `<li data-id="suggestionItem" class=${
              currentSelectedIndex === index ? 'Suggestion__item--selected' : ''
            }>${word}</li>`
        )
        .join('')}
    </ul>
   `;
  }

  setVisibility(hasData) {
    if (hasData) {
      this.$target.style.display = 'block';
    } else {
      this.$target.style.display = 'none';
    }
  }

  mounted() {
    const { data } = this.state;
    this.setVisibility(data.length);
  }

  setEvent() {
    const { onClickWord } = this.props;
    this.addEventToTarget('click', `[data-id='suggestionItem']`, (e) => {
      onClickWord(e);
    });
  }
}

export default WordList;
