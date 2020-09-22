import React from 'react';

function GradeForm(props) {
  return (
    <form className="col-lg-4">
      <div className="input-group form-group">
        <div className="input-group-prepend">
          <div className="input-group-text px-3">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input type="text" className="form-control" placeholder="Name"/>
      </div>
      <div className="input-group form-group">
        <div className="input-group-prepend">
          <div className="input-group-text px-3">
            <i className="fas fa-list-alt"></i>
          </div>
        </div>
        <input type="text" className="form-control" placeholder="Course"/>
      </div>
      <div className="input-group form-group">
        <div className="input-group-prepend">
          <div className="input-group-text px-3">
            <i className="fas fa-graduation-cap"></i>
          </div>
        </div>
        <input type="text" className="form-control" placeholder="Grade"/>
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-info">Add</button>
        <button type="reset" className="btn btn-outline-secondary ml-2">Cancel</button>
      </div>
    </form>
  );
}

export default GradeForm;
