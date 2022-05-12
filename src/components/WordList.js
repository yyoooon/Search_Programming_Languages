import Component from './Component.js';
import WordItem from './WordItem.js';

class WordList extends Component {
  setup() {
    this.$target.style.display = 'none';
    this.state = {
      data: this.props.data,
    };
  }

  template() {
    return `<ul class='word-List'></ul>`;
  }

  mounted() {
    const { data } = this.state;
    const $wordList = this.$target.querySelector('.word-List');

    if (!data.length) {
      this.$target.style.display = 'none';
      return;
    }

    this.$target.style.display = 'block';
    $wordList.innerHTML = '';
    data.map((word) => {
      new WordItem($wordList, { word });
    });
  }

  setEvent() {
    const { onSelectWord } = this.props;
    this.addEventToTarget('click', `[data-id='suggestionItem']`, (e) => {
      onSelectWord(e);
    });
  }
}

export default WordList;
