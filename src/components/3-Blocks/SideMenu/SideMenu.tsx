import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { useDispatch } from 'react-redux';

import { useApp, useDevice } from '../../../hooks';
import { appSideMenuToggle } from '../../../redux';

export default function SideMenu() {
  const { isSideMenuOpen: isOpen } = useApp();
  const { isMobile } = useDevice();
  const dispatch = useDispatch();

  return (
    <>
      <aside className={classnames('SideMenu', { collapse: !isOpen })}>
        <div className="SideMenu__body">
          <Link
            className={classnames('SideMenu__tag', { collapse: !isOpen })}
            title="Home"
            to="/"
            onClick={() => dispatch(appSideMenuToggle(false))}
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
            {isOpen && (
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
                {!isMobile && <span>.</span>}
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
        <div className={classnames('SideMenu__side', { collapse: !isOpen })}>
          {!isOpen && (
            <Link
              className="SideMenu__tag short fade-in"
              title="Home"
              to="/"
              onClick={() => dispatch(appSideMenuToggle(false))}
            >
              R . U
            </Link>
          )}
          <button
            className="SideMenu__action"
            type="button"
            onClick={() => dispatch(appSideMenuToggle())}
            // onMouseEnter={() => dispatch(appSideMenuToggle(false))}
          >
            <i className="Chevron"></i>
          </button>
          {!isOpen && (
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
              {!isMobile && <span>.</span>}
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
