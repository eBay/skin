export default { title: "Skin/Details-Group" };

export const closed = () => `
<ul
    class="details-group"
    role="list"
    aria-roledescription="accordion"
>
    <li>
        <details class="details">
            <summary class="details__summary">
                <span class="details__label">
                    Shipping and returns
                </span>
                <span class="details__icon" hidden />
            </summary>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </details>
    </li>
    <li>
        <details class="details">
            <summary class="details__summary">
                <span class="details__label">
                    Text wraps on small screen with this long text
                </span>
                <span class="details__icon" hidden />
            </summary>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </details>
    </li>
    <li>
        <details class="details">
            <summary class="details__summary">
                <span class="details__label">
                    Specifications
                </span>
                <span class="details__icon" hidden />
            </summary>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </details>
    </li>
</ul>
`;

export const open = () => `
<ul
    class="details-group"
    role="list"
    aria-roledescription="accordion"
>
    <li>
        <details class="details" open>
            <summary class="details__summary">
                <span class="details__label">
                    Shipping and returns
                </span>
                <span class="details__icon" hidden />
            </summary>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </details>
    </li>
    <li>
        <details class="details">
            <summary class="details__summary">
                <span class="details__label">
                    Text wraps on small screen with this long text
                </span>
                <span class="details__icon" hidden />
            </summary>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </details>
    </li>
    <li>
        <details class="details">
            <summary class="details__summary">
                <span class="details__label">
                    Specifications
                </span>
                <span class="details__icon" hidden />
            </summary>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </details>
    </li>
</ul>
`;

export const textSpacing = () => `
<ul
    class="details-group demo-a11y-text-spacing"
    role="list"
    aria-roledescription="accordion"
>
    <li>
        <details class="details" open>
            <summary class="details__summary">
                <span class="details__label">
                    Shipping and returns
                </span>
                <span class="details__icon" hidden />
            </summary>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </details>
    </li>
    <li>
        <details class="details">
            <summary class="details__summary">
                <span class="details__label">
                    Text wraps on small screen with this long text
                </span>
                <span class="details__icon" hidden />
            </summary>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </details>
    </li>
    <li>
        <details class="details">
            <summary class="details__summary">
                <span class="details__label">
                    Specifications
                </span>
                <span class="details__icon" hidden />
            </summary>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </details>
    </li>
</ul>
`;

export const large = () => `
<ul
  class="details-group details-group--large"
  role="list"
  aria-roledescription="accordion"
>
  <li>
      <details class="details">
          <summary class="details__summary">
              <span class="details__label">
                  Shipping and returns
              </span>
              <span class="details__icon" hidden />
          </summary>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </details>
  </li>
  <li>
      <details class="details">
          <summary class="details__summary">
              <span class="details__label">
                  Description
              </span>
              <span class="details__icon" hidden />
          </summary>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </details>
  </li>
  <li>
      <details class="details">
          <summary class="details__summary">
              <span class="details__label">
                  Specifications
              </span>
              <span class="details__icon" hidden />
          </summary>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </details>
  </li>
</ul>
`;

export const autoCollapse = () => `
<ul
  class="details-group"
  role="list"
  aria-roledescription="accordion"
>
  <li>
      <details class="details" name="details-group-1">
          <summary class="details__summary">
              <span class="details__label">
                  Shipping and returns
              </span>
              <span class="details__icon" hidden />
          </summary>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </details>
  </li>
  <li>
      <details class="details" name="details-group-1">
          <summary class="details__summary">
              <span class="details__label">
                  Text wraps on small screen with this long text
              </span>
              <span class="details__icon" hidden />
          </summary>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </details>
  </li>
  <li>
      <details class="details" name="details-group-1">
          <summary class="details__summary">
              <span class="details__label">
                  Specifications
              </span>
              <span class="details__icon" hidden />
          </summary>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </details>
  </li>
</ul>
`;
