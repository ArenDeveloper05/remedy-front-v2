import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContainer } from '../User/UserContainer.jsx';
import { formatDate, formatSum, inflect } from '../../utils.js';
import { UIDropdown } from '../UI/UIDropdown.jsx';
import './ProgramList.scss';


export function ProgramList(){
  const [programs, setPrograms] = React.useState([]);

  useEffect(() => {
    fetchPrograms().then(setPrograms);
  }, []);

  function fetchPrograms(){
    return fetch('/__MOCK/programs.json').then(res => res.json())
  }

  return (
    <UserContainer>
      <div className="Programs">
        <div className="Global__app-content-max-width">

          <div className="Programs__header">
            <h2 className="Programs__header-title">ProgramList</h2>
            <div className="Programs__header-actions">
              <Link className="UIButton UIButton--green" to="/programs/create">Create New Program</Link>
            </div>
          </div>

          <ul className="my-5 py-3">
            <li>
              <Link to="/programs/CBB7755098">Program CBB7755098</Link>
            </li>
            <li>
              <Link to="/programs/CBB7755777">Program CBB7755777</Link>
            </li>
            <li>
              <Link to="/programs/bookmarked">ProgramList bookmarked</Link>
            </li>
            <li>
              <Link to="/programs/create">ProgramList create</Link>
            </li>
            <li>
              <Link to="/programs/CBB7755777/submit-bug">Submit bug to CBB7755777</Link>
            </li>
          </ul>

          <div className="Programs__tabs">
            <NavLink className="Programs__tabs-item UIButton" to="/programs" end>All ProgramList</NavLink>
            <NavLink className="Programs__tabs-item UIButton" to="/programs/bookmarked">Bookmarks</NavLink>
          </div>

          <div className="Programs__toolbar">
            <div className="Programs__toolbar-search">
              <input className="Programs__toolbar-search-input" type="search" placeholder="Search for programs"/>
            </div>
            <UIDropdown
              className="Programs__toolbar-sort"
              items={[
                { title: 'Company name (A-Z)', linkTo: '/programs?sort=1' },
                { title: 'Company name (Z-A)', linkTo: '/programs?sort=2' },
                { title: 'Type (A-Z)', linkTo: '/programs?sort=3' },
                { title: 'Type (Z-A)', linkTo: '/programs?sort=4' },
                { title: 'Budget (Ascending-Descending)', linkTo: '/programs?sort=5' },
                { title: 'Budget (Descending-Ascending)', linkTo: '/programs?sort=6' },
                { title: 'Expiration date (Soonest - Latest)', linkTo: '/programs?sort=7' },
                { title: 'Expiration date (Latest - Soonest)', linkTo: '/programs?sort=8' },
              ]}
            />
            <button className="Programs__toolbar-filters UIButton">Filters</button>
          </div>

          <div className="Programs__count">
            {inflect(programs.length, ['program', 'programs'])} available
          </div>

          <ul className="Programs__list">
            {programs.map(program => (
              <li className="Programs__item" key={program.public_id}>
                <Link className="Programs__item-link" to={'/programs/' + program.public_id}>
                  <div className="Programs__item-logo">
                    <img
                      className="Programs__item-logo-img"
                      src={program.logo}
                      alt={program.company_name}
                      width="60"
                      height="60"/>
                  </div>

                  <div className="Programs__item-content">
                    <div className="Programs__item-primary">
                      <div className="Programs__item-info">
                        <h3 className="Programs__item-title">
                          {program.company_name}
                          <span>{formatSum(program.reward)}</span>
                        </h3>
                        <div className="Programs__item-description">
                          {program.program_name}
                        </div>
                      </div>
                      <button className="Programs__item-cta UIButton UIButton--lg UIButton--green">
                        Submit a bug
                      </button>
                    </div>

                    <ul className="Programs__item-secondary">
                      <li className="Programs__item-secondary-item">
                        <span className="Programs__item-secondary-title">Type</span>
                        <span className="Programs__item-secondary-value">
                          {program.type.join(', ')}
                        </span>
                      </li>
                      <li className="Programs__item-secondary-item ms-auto">
                        <span className="Programs__item-secondary-title">Participating experts</span>
                        <span className="Programs__item-secondary-value">{program.participating_experts}</span>
                      </li>
                      <li className="Programs__item-secondary-item">
                        <span className="Programs__item-secondary-title">Last updated</span>
                        <span className="Programs__item-secondary-value">{formatDate(program.last_updated)}</span>
                      </li>
                      <li className="Programs__item-secondary-item">
                        <span className="Programs__item-secondary-title">Expiration date</span>
                        <span className="Programs__item-secondary-value">{formatDate(program.expiration_date)}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="Programs__item-actions">
                    <span className="Programs__item-actions-item Programs__item-actions-item--view">
                      View
                    </span>
                    <span className="Programs__item-actions-item Programs__item-actions-item--upvote">
                      Upvote
                    </span>
                    <span className="Programs__item-actions-item Programs__item-actions-item--bookmark">
                      Bookmark
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </UserContainer>
  );
}
