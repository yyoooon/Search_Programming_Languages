import Component from './core/Component.js';
import Input from './components/Input.js';
import WordList from './components/WordList.js';
import SelectedList from './components/SelectedList.js';
import { getSearchResults } from './api/apis.js';

class App extends Component {
  setup() {
    this.state = {
      searchData: [],
      selectedWords: [],
    };
  }

  async handleInput(e) {
    const { value } = e.target;
    if (!value) {
      this.setState({ searchData: [] }, true);
      return;
    }
    const result = await getSearchResults(value);
    this.setState({ searchData: result }, true);
  }

  handleSelectWord(e) {
    const { textContent } = e.target;
    const { selectedWords } = this.state;

    alert(textContent);

    if (selectedWords.includes(textContent)) return;
    this.setState({ selectedWords: [...selectedWords, textContent] }, true);
  }

  template() {
    return `
         <div class="SelectedLanguage"></div>
         <form class="SearchInput"></form>
         <div class="Suggestion"></div>
        `;
  }

  mounted() {
    const { searchData, selectedWords } = this.state;

    const $form = this.$target.querySelector('.SearchInput');
    const $wordList = this.$target.querySelector('.Suggestion');
    const $selectedList = this.$target.querySelector('.SelectedLanguage');

    this.Input = new Input($form, { onInput: this.handleInput.bind(this) });
    this.WordList = new WordList($wordList, {
      data: searchData,
      onSelectWord: this.handleSelectWord.bind(this),
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
    const { searchData, selectedWords } = this.state;
    this.WordList.setState({ data: searchData });
    this.SelectedList.setState({
      items: this.limitFiveLength(selectedWords),
    });
  }
}

export default App;
