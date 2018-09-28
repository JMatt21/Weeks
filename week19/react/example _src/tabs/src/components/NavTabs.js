import React from "react";

const NavTabs = props => {
  const isActive = (thisPage) => {
    return (props.currentPage === thisPage ? "nav-link active" : "nav-link");
  };

  return (
    <ul className="nav nav-tabs">
      {props.pages.map(page => (
        <li className="nav-item" key={page.key}>
          <a onClick={() => props.handlePageChange(page.name)} className={isActive(page.name)}>
            {page.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavTabs;
