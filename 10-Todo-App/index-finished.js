// Notes: styling, state, static state, setState, map, react dev tool

const root = document.getElementById('root');

class Todo extends React.Component {
  constructor(props) {
    super(props);

    // static state

    // this.state = {
    //   todoList: [
    //     {
    //       content: 'Complete This',
    //     },
    //   ],
    // };

    this.state = {
      todoList: [],
      inputValue: ''
    };
  }

  addTodo = () => {
    this.setState({
      todoList: [...this.state.todoList, { content: this.state.inputValue }],
      inputValue: ''
    });
  };

  handleInputChange = e => {
    const inputValue = e.target.value;
    this.setState({
      inputValue
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="title">
            <h1>Things To Do</h1>
          </div>
          <div className="new-task">
            <a className="add-new" href="#" onClick={this.addTodo}>
              <i className="fa fa-plus" />
            </a>
            <input
              id="todo-text"
              placeholder="New task"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
          </div>
          <ul>
            {this.state.todoList.map(todo => (
              <li className="row">
                <a className="remove" href="#">
                  <i className="fa fa-trash-o" />
                </a>
                <a className="completed" href="#">
                  <i className="fa fa-check" />
                </a>
                {todo.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Todo />, root);
