import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.course}</td>
      <td>{props.grade}</td>
    </tr>
  );
}

function GradeTable(props) {
  const grades = props.grades;
  if (grades.length === 0) {
    return (
      <>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Student Name</th>
              <th scope="col">Course</th>
              <th scope="col">Grade</th>
            </tr>
          </thead>
        </table>
        <h3>No Grades Recorded</h3>
      </>
    );
  } else {
    const gradeList = grades.map(grade => {
      return (
        <Grade
          key={grade.id}
          name={grade.name}
          course={grade.course}
          grade={grade.grade}
        />
      );
    });
    return (
      <table className="table table-striped table-bordered col-md-8">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
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
