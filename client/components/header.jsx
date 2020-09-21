import React from 'react';

function Header(props) {
  return (
    <header className="row mt-4 mb-3">
      <h1 className="col-lg text-center">{props.text}</h1>
    </header>
  );
}

export default Header;
