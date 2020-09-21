import React from 'react';

import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades =>
        this.setState(state => {
          return { grades: grades };
        }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <Header text="Student Grade Table"/>
        <main className="col-12">
          <GradeTable grades={this.state.grades} />
        </main>
      </>
    );
  }
}

export default App;
