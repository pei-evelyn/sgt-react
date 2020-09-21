import React from 'react';

function Header(props) {
  return (
    <header className="row mt-4 mb-3">
      <h1 className="col-lg-8">{props.text}</h1>
      <h3 className="col-lg text-right">Average Grade</h3>
    </header>
  );
}

export default Header;
