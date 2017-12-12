import React from 'react';
import ReactDOM from 'react-dom';

class Chosen extends React.Component {
  componentDidMount() {
  console.log(this.el);
    this.$el = $(this.el);
	console.log($(this.el));
	console.log(this.$el[0].chosen);
    //this.$el.chosen();
  }
  
  componentWillUnmount() {
    this.$el.chosen('destroy');
  }
  
  render() {
    return (
      <div>
        <select className="Chosen-select" ref={el => this.el = el}>
          {this.props.children}
        </select>
      </div>
    );
  }
}

function Example() {
  return (
    <Chosen>
      <option>vanilla</option>
      <option>chocolate</option>
      <option>strawberry</option>
    </Chosen>
  );
}

ReactDOM.render(
  <Example />,
  document.getElementById('app')
);