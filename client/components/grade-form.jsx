import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.view === 'update') {
      const grade = this.props.gradeToUpdate;
      if (prevProps.gradeToUpdate !== this.props.gradeToUpdate) {
        this.setState({
          name: grade.name,
          course: grade.course,
          grade: grade.grade
        });
      }
    }
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleCourseChange(event) {
    this.setState({
      course: event.target.value
    });
  }

  handleGradeChange(event) {
    this.setState({
      grade: parseInt(event.target.value)
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    const grade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };

    if (this.props.view === 'add') {
      this.props.addNewGrade(grade);
    } else if (this.props.view === 'update') {
      grade.id = this.props.gradeToUpdate.id;
      this.props.updateGrade(grade);
    }

    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  handleReset(event) {
    event.target.reset();
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <form className="col-lg-4" onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <div className="input-group form-group">
          <div className="input-group-prepend">
            <div className="input-group-text px-3">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={this.handleNameChange}
            value={this.state.name}
          />
        </div>
        <div className="input-group form-group">
          <div className="input-group-prepend">
            <div className="input-group-text px-3">
              <i className="fas fa-list-alt"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Course"
            onChange={this.handleCourseChange}
            value={this.state.course}
          />
        </div>
        <div className="input-group form-group">
          <div className="input-group-prepend">
            <div className="input-group-text px-3">
              <i className="fas fa-graduation-cap"></i>
            </div>
          </div>
          <input
            type="number"
            className="form-control"
            placeholder="Grade"
            onChange={this.handleGradeChange}
            value={this.state.grade}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-success">{this.props.btnText}</button>
          <button type="reset" className="btn btn-outline-secondary ml-2">Cancel</button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
