import Component from './Component.js';
import { addDataset } from '../utils/createElement.js';

class WordItem extends Component {
  setup() {
    this.createNode('li');
    addDataset(this.$node, { id: 'suggestionItem' });
  }

  template() {
    return `${this.props.word}`;
  }
}

export default WordItem;
