export default { title: "Skin/List" };

export const base = () => `
<div class="list">
    <div class="list__item">
       <span class="list__body">
            Text 0
        </span>
    </div>
    <div class="list__item">
       <span class="list__body">
            Text 1
        </span>
    </div>
    <div class="list__item">
       <span class="list__body">
            Text 2
        </span>
    </div>
</div>
`;

export const withLeading = () => `
<div class="list">
    <div class="list__item">
        <span class="list__leading">
            <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                <use href="#icon-folder-16"/>
            </svg>
        </span>
        <span class="list__body">
            Text 0
        </span>
    </div>
    <div class="list__item">
        <span class="list__leading">
            <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                <use href="#icon-file-16"/>
            </svg>
        </span>
       <span class="list__body">
            Text 1
        </span>
    </div>
    <div class="list__item">
        <span class="list__leading">
            <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                <use href="#icon-key-16"/>
            </svg>
        </span>
       <span class="list__body">
            Text 2
        </span>
    </div>
</div>

`;

export const multiLine = () => `
<div class="list">
    <div class="list__item">
        <span class="list__leading">
            <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                <use href="#icon-folder-16"/>
            </svg>
        </span>
        <span class="list__body">
            Text 0 with a long line that should wrap to the next line. This is testing to see how well the component wraps.
        </span>
    </div>
    <div class="list__item">
        <span class="list__leading">
            <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                <use href="#icon-file-16"/>
            </svg>
        </span>
       <span class="list__body">
            Text 1 with a long line that should wrap to the next line. This is testing to see how well the component wraps, but also has an end item.
        </span>
        <span class="list__trailing">
            <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                <use href="#icon-information-16"/>
            </svg>
        </span>
    </div>
    <div class="list__item">
        <span class="list__leading">
            <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                <use href="#icon-key-16"/>
            </svg>
        </span>
       <span class="list__body">
            Text 2, this one is normal.
        </span>
    </div>
</div>

`;

export const action = () => `
<div class="list">
    <button class="list__item">
        Button
    </button>
    <a class="list__item" href="www.ebay.com">
        <span class="list__body">
            Link
        </span>
        <span class="list__trailing">
            <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                <use href="#icon-chevron-right-16"/>
            </svg>
        </span>
    </a>
    <div class="list__item">
        <span class="list__body">
            Item 1 with an action
        </span>
        <span class="list__trailing">
            <span class="switch">
                <input
                    aria-label="Checkbox switch demo"
                    class="switch__control"
                    role="switch"
                    type="checkbox"
                    aria-checked="false"
                >
                <span class="switch__button"/>
            </span>
        </span>
    </div>
</div>
`;

export const RTL = () => `
<div dir="rtl">
    <div class="list">
        <button class="list__item">
            <span class="list__leading">
                <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                    <use href="#icon-folder-16"/>
                </svg>
            </span>

            Button
        </button>
        <a class="list__item" href="www.ebay.com">
            <span class="list__leading">
                <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                    <use href="#icon-folder-16"/>
                </svg>
            </span>
            <span class="list__body">
                Link
            </span>
            <span class="list__trailing">
                <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                    <use href="#icon-chevron-left-16"/>
                </svg>
            </span>
        </a>
        <div class="list__item">
            <span class="list__leading">
                <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                    <use href="#icon-folder-16"/>
                </svg>
            </span>
            <span class="list__body">
                Item 1 with an action
            </span>
            <span class="list__trailing">
                <span class="switch">
                    <input
                        aria-label="Checkbox switch demo"
                        class="switch__control"
                        role="switch"
                        type="checkbox"
                        aria-checked="false"
                    >
                    <span class="switch__button"/>
                </span>
            </span>
        </div>
    </div>
</div>
`;
export const variableWidth = () =>
    `<div style="width: 200px">
    <div class="list">
       <div class="list__item">
            <span class="list__leading">
                <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                    <use href="#icon-file-16"/>
                </svg>
            </span>
            <span class="list__body">
                Item 1
            </span>
        </div>


       <div class="list__item">
            <span class="list__leading">
                <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                    <use href="#icon-file-16"/>
                </svg>
            </span>
            <span class="list__body">
                Item 2
            </span>
            <span class="list__trailing">
                <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
                    <use href="#icon-money-back-guarantee-16"/>
                </svg>
            </span>

        </div>
</div>`;

export const withDivider = () => `
<div class="list">
  <div class="list__item">
    <span class="list__leading">
      <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
        <use href="#icon-folder-16" />
      </svg>
    </span>
    <span class="list__body"> Item 1 </span>
  </div>
  <div class="list__divider"></div>
  <div class="list__item">
    <span class="list__leading">
      <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
        <use href="#icon-file-16" />
      </svg>
    </span>
    <span class="list__body"> Item 2 </span>
  </div>
  <div class="list__item">
    <span class="list__leading">
      <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
        <use href="#icon-file-16" />
      </svg>
    </span>
    <span class="list__body"> Item 3 </span>
  </div>
  <div class="list__item">
    <span class="list__leading">
      <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
        <use href="#icon-file-16" />
      </svg>
    </span>
    <span class="list__body"> Item 4 </span>
  </div>
  <div class="list__divider"></div>

  <div class="list__item">
    <span class="list__leading">
      <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
        <use href="#icon-key-16" />
      </svg>
    </span>
    <span class="list__body">
        Item 5
    </span>
  </div>
  <div class="list__item">
    <span class="list__leading">
      <svg aria-hidden="true" class="icon icon--16" height="16" width="16">
        <use href="#icon-key-16" />
      </svg>
    </span>
    <span class="list__body">
        Item 6
    </span>
  </div>
</div>
`;
