import Component from '../core/Component.js';

class WordList extends Component {
  setup() {
    this.$target.style.display = 'none';
    this.state = {
      data: this.props.data,
      currentSelectedIndex: this.props.currentSelectedIndex,
      currentInputText: this.props.currentInputText,
    };
  }

  highlightText(word, highlightText) {
    return word.replace(
      highlightText,
      `<span class="Suggestion__item--matched">${highlightText}</span>`
    );
  }

  template() {
    const { data, currentSelectedIndex, currentInputText } = this.state;
    return `
    <ul>
      ${data
        .map(
          (word, wordIndex) =>
            `<li data-id="suggestionItem" class=${
              currentSelectedIndex === wordIndex
                ? 'Suggestion__item--selected'
                : ''
            }>${this.highlightText(word, currentInputText)}</li>`
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
