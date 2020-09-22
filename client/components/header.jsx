import React from 'react';

function Header(props) {
  return (
    <header className="row mt-4 mb-3">
      <h1 className="col-lg-8">{props.text}</h1>
      <h3 className="col-lg-4">
        Average Grade
        <span className="badge badge-primary ml-2">{props.average}</span>
      </h3>
    </header>
  );
}

export default Header;
