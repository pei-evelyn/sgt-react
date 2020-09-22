import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: 0
    };
    this.handleAddGrade = this.handleAddGrade.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAddGrade(event) {
    const target = event.target;
    const value = target.value;
    const formInput = target.name;
    if (formInput === 'grade') {
      this.setState({
        [formInput]: parseInt(value)
      });
    } else {
      this.setState({
        [formInput]: value
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.addNewGrade(newGrade);
    this.setState({
      name: '',
      course: '',
      grade: 0
    });
  }

  render() {
    return (
      <form className="col-md-4" onSubmit={this.handleSubmit}>
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
            name="name"
            onChange={this.handleAddGrade}
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
            name="course"
            onChange={this.handleAddGrade}
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
            name="grade"
            onChange={this.handleAddGrade}
          />
        </div>
        <div className="d-flex justify-content-end">
          <input type="submit" className="btn btn-success" value="Add" name="add"/>
          <input type="submit" className="btn btn-outline-secondary ml-2" value="Cancel" name="cancel" />
        </div>
      </form>
    );
  }
}

export default GradeForm;
