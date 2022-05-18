import Component from './core/Component.js';
import Input from './components/Input.js';
import WordList from './components/WordList.js';
import SelectedList from './components/SelectedList.js';
import { getSearchResults } from './api/apis.js';
import { upCount, downCount } from './utils/circulateCount.js';
import debounce from './utils/debounce.js';
import { getItem, setItem } from './utils/storage.js';

class App extends Component {
  cachData = getItem('search_word_cach', {});

  setup() {
    this.state = getItem('state_cach', {
      searchData: [],
      selectedWords: [],
      currentSelectedWordIndex: 0,
      currentInputText: '',
    });
  }

  selectWord(word) {
    const { selectedWords } = this.state;

    alert(word);

    if (selectedWords.includes(word)) return;
    this.setState({ selectedWords: [...selectedWords, word] }, true);
  }

  handleInput(e) {
    debounce(async () => {
      let result = [];
      const { value } = e.target;

      if (!value) {
        this.setState({ searchData: [], selectedWords: [] }, true);
        return;
      }

      if (this.cachData[value]) {
        result = this.cachData[value];
      } else {
        result = await getSearchResults(value);
        if (result.length) {
          this.cachData[value] = result;
          setItem('search_word_cach', this.cachData);
        }
      }

      this.setState({ searchData: result, currentInputText: value }, true);
    }, 500);
  }

  handlePressKey(e) {
    const { currentSelectedWordIndex, searchData } = this.state;
    const maxIndex = searchData.length - 1;

    if (e.key === 'ArrowUp') {
      const nextIndex = downCount(currentSelectedWordIndex, maxIndex);
      this.setState({ currentSelectedWordIndex: nextIndex }, true);
    }

    if (e.key === 'ArrowDown') {
      const nextIndex = upCount(currentSelectedWordIndex, maxIndex);
      this.setState({ currentSelectedWordIndex: nextIndex }, true);
    }

    if (e.key === 'Enter') {
      this.selectWord(searchData[currentSelectedWordIndex]);
    }
  }

  handleClickWord(e) {
    const { textContent } = e.target;
    this.selectWord(textContent);
  }

  template() {
    return `
         <div class="SelectedLanguage"></div>
         <form class="SearchInput"></form>
         <div class="Suggestion"></div>
        `;
  }

  mounted() {
    const {
      searchData,
      selectedWords,
      currentSelectedWordIndex,
      currentInputText,
    } = this.state;

    const $form = this.$target.querySelector('.SearchInput');
    const $wordList = this.$target.querySelector('.Suggestion');
    const $selectedList = this.$target.querySelector('.SelectedLanguage');

    this.Input = new Input($form, {
      onInput: this.handleInput.bind(this),
      onPressKey: this.handlePressKey.bind(this),
    });
    this.WordList = new WordList($wordList, {
      data: searchData,
      currentSelectedIndex: currentSelectedWordIndex,
      currentInputText: currentInputText,
      onClickWord: this.handleClickWord.bind(this),
    });
    this.SelectedList = new SelectedList($selectedList, {
      items: selectedWords,
    });
  }

  limitFiveLength(arr) {
    if (arr.length > 5) {
      arr.shift();
    }
    return arr;
  }

  childUpdate() {
    const {
      searchData,
      selectedWords,
      currentSelectedWordIndex,
      currentInputText,
    } = this.state;

    this.WordList.setState({
      data: searchData,
      currentSelectedIndex: currentSelectedWordIndex,
      currentInputText,
    });

    this.SelectedList.setState({
      items: this.limitFiveLength(selectedWords),
    });

    setItem('state_cach', this.state);
  }
}

export default App;
