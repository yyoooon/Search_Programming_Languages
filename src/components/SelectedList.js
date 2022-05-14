import Component from '../core/Component.js';

class SelectedList extends Component {
  setup() {
    this.state = {
      items: this.props.items,
    };
  }

  template() {
    const { items } = this.state;
    return `
            <ul>
            ${items.map((item) => `<li>${item}</li>`).join('')}
            </ul>
        `;
  }
}

export default SelectedList;
