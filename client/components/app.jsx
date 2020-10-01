import React from 'react';

import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      view: 'add'
    };
    this.addNewGrade = this.addNewGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.getGradeToUpdate = this.getGradeToUpdate.bind(this);
    this.updateGrade = this.updateGrade.bind(this);
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades =>
        this.setState({
          grades: grades
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
        const gradesList = state.grades.concat(data);
        return {
          grades: gradesList,
          view: 'add'
        };
      }))
      .catch(err => console.error(err));
  }

  deleteGrade(id) {
    const gradeIndex = this.state.grades.findIndex(grade => id === grade.id);
    const gradesCopy = this.state.grades.slice();
    gradesCopy.splice(gradeIndex, 1);
    fetch(`/api/grades/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          grades: gradesCopy
        }))
      .catch(err => console.error(err));
  }

  updateGrade(editedGrade) {
    const gradeIndex = this.state.grades.findIndex(grade => editedGrade.id === grade.id);
    const gradesCopy = this.state.grades.slice();
    gradesCopy[gradeIndex] = editedGrade;

    fetch(`/api/grades/${editedGrade.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedGrade)
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          grades: gradesCopy,
          view: 'add'
        }))
      .catch(err => console.error(err));
  }

  getGradeToUpdate(id) {
    const gradeIndex = this.state.grades.findIndex(grade => id === grade.id);
    const gradesCopy = this.state.grades.slice();
    const gradeToUpdate = gradesCopy[gradeIndex];
    this.gradeToUpdate = gradeToUpdate;
    this.setState({ view: 'update' });
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
    if (this.state.view === 'add') {
      return (
        <>
          <Header text="Student Grade Table" average={this.getAverageGrade()} />
          <main className="row">
            <GradeTable
              grades={this.state.grades}
              deleteGrade={this.deleteGrade}
              getGrade={this.getGradeToUpdate}
            />
            <GradeForm
              addNewGrade={this.addNewGrade}
              btnText="Add"
              view={this.state.view}
            />
          </main>
        </>
      );
    } else if (this.state.view === 'update') {
      return (
        <>
          <Header text="Student Grade Table" average={this.getAverageGrade()} />
          <main className="row">
            <GradeTable
              grades={this.state.grades}
              deleteGrade={this.deleteGrade}
              getGrade={this.getGradeToUpdate}
            />
            <GradeForm
              updateGrade={this.updateGrade}
              btnText="Update"
              view={this.state.view}
              gradeToUpdate={this.gradeToUpdate}
            />
          </main>
        </>
      );
    }

  }
}

export default App;
