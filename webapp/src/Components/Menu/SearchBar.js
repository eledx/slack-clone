import React from 'react';
import './Menu.css';

const SearchBar = () => {
  return (
    <div>
      <div className="search-channel-bloc">
        <button
          className="button-search-channel"
          type="button"
          data-toggle="modal"
          data-target=".search-modal"
        >
          Search your channel{' '}
        </button>
      </div>
      <div>
        <div
          class="modal fade search-modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content modal-search-channel">
              <form className="search-form">
                <input
                  className="channel-search-input"
                  type="search"
                  placeholder="Search your channel..."
                ></input>
              </form>
              <div>
                <ul className="search-channel-list">
                  <li>Un premier channel</li>
                  <li>Un second channel</li>
                  <li>Un troisième channel</li>
                </ul>
              </div>
              <div>
                <ul className="shortcuts-list">
                  <li>Un premier raccourci</li>
                  <li>Un second raccourci</li>
                  <li>Un troisième raccourci</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
