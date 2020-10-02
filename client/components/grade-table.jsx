import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.course}</td>
      <td>{props.grade}</td>
      <td>
        <i className="fas fa-trash text-danger" onClick={() => props.delete(props.id)}></i>
        <i className="fas fa-pen text-primary ml-3" onClick={() => props.getGrade(props.id)}></i>
      </td>
    </tr>
  );
}

function GradeTable(props) {
  const grades = props.grades;
  const deleteGrade = props.deleteGrade;
  if (grades.length === 0) {
    return (
      <div className="col-lg-8">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Student Name</th>
              <th scope="col">Course</th>
              <th scope="col">Grade</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>
        </table>
        <h4 className="mx-auto mb-4">No Grades Recorded</h4>
      </div>
    );
  } else {
    const gradeList = grades.map(grade => {
      return (
        <Grade
          key={grade.id}
          id={grade.id}
          name={grade.name}
          course={grade.course}
          grade={grade.grade}
          delete={deleteGrade}
          getGrade={props.getGrade}
        />
      );
    });
    return (
      <table className="table table-striped table-bordered col-lg-8">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {gradeList}
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
