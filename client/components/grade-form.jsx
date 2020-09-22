import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: 0
    };
    this.handleAddName = this.handleAddName.bind(this);
    this.handleAddCourse = this.handleAddCourse.bind(this);
    this.handleAddGrade = this.handleAddGrade.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleReset = this.handleReset.bind(this);
  }

  handleAddName(event) {
    this.setState({ name: event.target.value });
  }

  handleAddCourse(event) {
    this.setState({ course: event.target.value });
  }

  handleAddGrade(event) {
    this.setState({ grade: parseInt(event.target.value) });
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

  // handleReset(event) {
  //   event.preventDefault();
  //   event.target.reset();
  //   this.setState({
  //     name: '',
  //     course: '',
  //     grade: 0
  //   });
  // }

  render() {
    return (
      <form className="col-md-4" onSubmit={this.handleSubmit}>
        <div className="input-group form-group">
          <div className="input-group-prepend">
            <div className="input-group-text px-3">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input type="text" className="form-control" placeholder="Name" onChange={this.handleAddName}/>
        </div>
        <div className="input-group form-group">
          <div className="input-group-prepend">
            <div className="input-group-text px-3">
              <i className="fas fa-list-alt"></i>
            </div>
          </div>
          <input type="text" className="form-control" placeholder="Course" onChange={this.handleAddCourse}/>
        </div>
        <div className="input-group form-group">
          <div className="input-group-prepend">
            <div className="input-group-text px-3">
              <i className="fas fa-graduation-cap"></i>
            </div>
          </div>
          <input type="number" className="form-control" placeholder="Grade" onChange={this.handleAddGrade}/>
        </div>
        <div className="d-flex justify-content-end">
          <input type="submit" className="btn btn-success" value="Add" />
          <input type="submit" className="btn btn-outline-secondary ml-2" value="Cancel" />
        </div>
      </form>
    );
  }
}

export default GradeForm;
