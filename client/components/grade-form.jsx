import React from 'react';

function GradeForm(props) {
  return (
    <form className="col-lg-4">
      <div className="input-group">
        <div className="input-group-prepend">
          <i className="fas fa-user"></i>
        </div>
        <input type="text" className="form-control" placeholder="Name"/>
      </div>
      <div className="input-group">
        <div className="input-group-prepend">
          <i className="fas fa-list-alt"></i>
        </div>
        <input type="text" className="form-control" placeholder="Course"/>
      </div>
      <div className="input-group">
        <div className="input-group-prepend">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <input type="text" className="form-control" placeholder="Course" />
      </div>
      <div>
        <button type="submit" className="btn btn-primary">Add</button>
        <button type="reset" className="btn btn-outline-primary">Cancel</button>
      </div>
    </form>
  );
}

export default GradeForm;
