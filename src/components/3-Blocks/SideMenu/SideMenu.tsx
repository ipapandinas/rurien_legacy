import React, { useState } from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';

import './SideMenu.scss';

export default function SideMenu() {
  const [collapse, toggleCollapse] = useState(false);

  return (
    <>
      <aside className={classnames('SideMenu', { collapse })}>
        <div className="SideMenu__body">
          <Link
            className={classnames('SideMenu__tag', { collapse })}
            title="Home"
            to="/"
          >
            Fuensanta <br /> R. Urien
          </Link>
          <div className="SideMenu__menu">
            <Link className="SideMenu__link" title="Work" to="/work">
              Obras
            </Link>
            <Link
              className="SideMenu__link"
              title="Exhibition"
              to="/exhibitions"
            >
              Expos
            </Link>
            <Link className="SideMenu__link" title="About" to="/about">
              Sobre mí
            </Link>
          </div>
          <div className="SideMenu__footer">
            <Link className="Footer__left" title="Home" to="/">
              © {new Date().getFullYear()} R. Urien
            </Link>
            {!collapse && (
              <div className="Footer__right fade-in">
                <a
                  className="Footer__link"
                  href="https://www.facebook.com/fuensanta.ruizurien"
                  title="Fuensanta en facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook
                </a>
                .
                <a
                  className="Footer__link"
                  href="https://www.instagram.com/fuentxu"
                  title="Fuensanta en instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  instagram
                </a>
              </div>
            )}
          </div>
        </div>
        <div className={classnames('SideMenu__side', { collapse })}>
          {collapse && (
            <Link className="SideMenu__tag short fade-in" title="Home" to="/">
              R . U
            </Link>
          )}
          <button
            className="SideMenu__action"
            type="button"
            onClick={() => toggleCollapse(!collapse)}
          >
            <i className="Chevron"></i>
          </button>
          {collapse && (
            <div className="Footer__socials--short fade-in">
              <a
                className="Footer__link short"
                href="https://www.facebook.com/fuensanta.ruizurien"
                title="Fuensanta en facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                fb
              </a>
              .
              <a
                className="Footer__link short"
                href="https://www.instagram.com/fuentxu"
                title="Fuensanta en instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                ig
              </a>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
