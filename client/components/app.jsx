import React from 'react';

import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

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

  addNewGrade(newGrade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    })
      .then(res => res.json())
      .then(data => this.setState(state => {
        const gradesList = state.grades.concat(newGrade);
        return { grades: gradesList };
      }))
      .catch(err => console.error(err));
  }

  getAverageGrade() {
    const gradeList = [];
    for (let i = 0; i < this.state.grades.length; i++) {
      gradeList.push(this.state.grades[i].grade);
    }
    if (gradeList.length === 0) {
      return 'N/A';
    } else {
      const sum = (total, currentGrade) => total + currentGrade;
      const calculatedAverage = gradeList.reduce(sum, 0) / gradeList.length;
      return Math.round(calculatedAverage);
    }
  }

  render() {
    return (
      <>
        <Header text="Student Grade Table" average={this.getAverageGrade()}/>
        <main className="row">
          <GradeTable grades={this.state.grades} />
          <GradeForm addNewGrade={this.addNewGrade}/>
        </main>
      </>
    );
  }
}

export default App;
