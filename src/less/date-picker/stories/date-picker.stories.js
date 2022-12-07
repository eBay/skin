export default { title: 'Date Picker' };

export const double = () => /* html */ `
<div class="date-picker">
    <button class="date-picker__month-button date-picker__month-button--left icon-btn icon-btn--small icon-btn--transparent" aria-label="Go to July 2019" variant="icon">
        <svg aria-hidden="true" class="icon icon--chevron-left" focusable="false">
            <use href="#icon-chevron-left"></use>
        </svg>
    </button>
    <button class="date-picker__month-button date-picker__month-button--right icon-btn icon-btn--small icon-btn--transparent" aria-label="Go to July 2019" variant="icon">
        <svg aria-hidden="true" class="icon icon--chevron-right" focusable="false">
            <use href="#icon-chevron-right"></use>
        </svg>
    </button>
    <div class="date-picker__month">
        <h3>August 2019</h3>
        <div role="grid" aria-label="August 2019">
            <div role="row">
                <div role="columnheader" class="date-picker__day-label">Su</div>
                <div role="columnheader" class="date-picker__day-label">Mo</div>
                <div role="columnheader" class="date-picker__day-label">Tu</div>
                <div role="columnheader" class="date-picker__day-label">We</div>
                <div role="columnheader" class="date-picker__day-label">Th</div>
                <div role="columnheader" class="date-picker__day-label">Fr</div>
                <div role="columnheader" class="date-picker__day-label">Sa</div>
            </div>
            <div role="row">
                <div class="date-picker__day"></div>
                <div class="date-picker__day"></div>
                <div class="date-picker__day"></div>
                <div class="date-picker__day"></div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Thursday 1 August 2019" disabled>1</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Friday 2 August 2019" disabled>2</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Saturday 3 August 2019" disabled>3</button>
                </div>
            </div>
            <div role="row">
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Sunday 4 August 2019" disabled>4</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Monday 5 August 2019" disabled>5</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Tuesday 6 August 2019" disabled>6</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Wednesday 7 August 2019" disabled>7</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Thursday 8 August 2019" disabled>8</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Friday 9 August 2019" disabled>9</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Saturday 10 August 2019" disabled>10</button>
                </div>
            </div>
            <div role="row">
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Sunday 11 August 2019" disabled>11</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Monday 12 August 2019" disabled>12</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Tuesday 13 August 2019" disabled>13</button>
                </div>
                <div role="gridcell" class="date-picker__day date-picker__day--today">
                    <button type="button" aria-label="Wednesday 14 August 2019">14</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Thursday 15 August 2019">15</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Friday 16 August 2019">16</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Saturday 17 August 2019">17</button>
                </div>
            </div>
            <div role="row">
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Sunday 18 August 2019">18</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Monday 19 August 2019">19</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Tuesday 20 August 2019">20</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Wednesday 21 August 2019">21</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Thursday 22 August 2019">22</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Friday 23 August 2019">23</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Saturday 24 August 2019">24</button>
                </div>
            </div>
            <div role="row">
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Sunday 25 August 2019">25</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Monday 26 August 2019">26</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Tuesday 27 August 2019">27</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Wednesday 28 August 2019">28</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Thursday 29 August 2019">29</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Friday 30 August 2019">30</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Saturday 31 August 2019">31</button>
                </div>
            </div>
        </div>
    </div>
    <div class="date-picker__month">
        <h3>September 2019</h3>
        <div role="grid" aria-label="August 2019">
            <div role="row">
                <div role="columnheader" class="date-picker__day-label">Su</div>
                <div role="columnheader" class="date-picker__day-label">Mo</div>
                <div role="columnheader" class="date-picker__day-label">Tu</div>
                <div role="columnheader" class="date-picker__day-label">We</div>
                <div role="columnheader" class="date-picker__day-label">Th</div>
                <div role="columnheader" class="date-picker__day-label">Fr</div>
                <div role="columnheader" class="date-picker__day-label">Sa</div>
            </div>
            <div role="row">
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Thursday 1 August 2019">1</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Thursday 2 August 2019">2</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Thursday 3 August 2019">3</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Thursday 4 August 2019">4</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Thursday 5 September 2019">5</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Friday 6 September 2019">6</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Saturday 7 September 2019">7</button>
                </div>
            </div>
            <div role="row">
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Sunday 8 September 2019">8</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Monday 9 September 2019">9</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Tuesday 10 September 2019">10</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Wednesday 11 September 2019">11</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Thursday 12 September 2019">12</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Friday 13 September 2019">13</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Saturday 14 September 2019">14</button>
                </div>
            </div>
            <div role="row">
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Sunday 15 September 2019">15</button>
                </div>
                <div role="gridcell" class="date-picker__day date-picker__day--range date-picker__day--start">
                    <button type="button" aria-label="Monday 16 September 2019" aria-selected="true">16</button>
                </div>
                <div role="gridcell" class="date-picker__day date-picker__day--range">
                    <button type="button" aria-label="Tuesday 17 September 2019">17</button>
                </div>
                <div role="gridcell" class="date-picker__day date-picker__day--range">
                    <button type="button" aria-label="Wednesday 18 September 2019">18</button>
                </div>
                <div role="gridcell" class="date-picker__day date-picker__day--range">
                    <button type="button" aria-label="Thursday 19 September 2019">19</button>
                </div>
                <div role="gridcell" class="date-picker__day date-picker__day--range">
                    <button type="button" aria-label="Friday 20 September 2019">20</button>
                </div>
                <div role="gridcell" class="date-picker__day date-picker__day--range">
                    <button type="button" aria-label="Saturday 21 September 2019">21</button>
                </div>
            </div>
            <div role="row">
                <div role="gridcell" class="date-picker__day date-picker__day--range">
                    <button type="button" aria-label="Sunday 22 September 2019">22</button>
                </div>
                <div role="gridcell" class="date-picker__day date-picker__day--range">
                    <button type="button" aria-label="Monday 23 September 2019">23</button>
                </div>
                <div role="gridcell" class="date-picker__day date-picker__day--range">
                    <button type="button" aria-label="Tuesday 24 September 2019">24</button>
                </div>
                <div role="gridcell" class="date-picker__day date-picker__day--range date-picker__day--end">
                    <button type="button" aria-label="Wednesday 25 September 2019" aria-selected="true">25</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Thursday 26 September 2019">26</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Friday 27 September 2019">27</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Saturday 28 September 2019">28</button>
                </div>
            </div>
            <div role="row">
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Sunday 29 September 2019">29</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Monday 30 September 2019">30</button>
                </div>
            </div>
        </div>
    </div>
</div>
`;

export const single = () => /* html */ `
<div class="date-picker date-picker--single-month">
    <button class="date-picker__month-button date-picker__month-button--left icon-btn icon-btn--small icon-btn--transparent" aria-label="Go to July 2019" variant="icon">
        <svg aria-hidden="true" class="icon icon--chevron-left" focusable="false">
            <use href="#icon-chevron-left"></use>
        </svg>
    </button>
    <button class="date-picker__month-button date-picker__month-button--right icon-btn icon-btn--small icon-btn--transparent" aria-label="Go to July 2019" variant="icon">
        <svg aria-hidden="true" class="icon icon--chevron-right" focusable="false">
            <use href="#icon-chevron-right"></use>
        </svg>
    </button>
    <div class="date-picker__month">
        <h3>August 2019</h3>
        <div role="grid" aria-label="August 2019">
            <div role="row">
                <div role="columnheader" class="date-picker__day-label">Su</div>
                <div role="columnheader" class="date-picker__day-label">Mo</div>
                <div role="columnheader" class="date-picker__day-label">Tu</div>
                <div role="columnheader" class="date-picker__day-label">We</div>
                <div role="columnheader" class="date-picker__day-label">Th</div>
                <div role="columnheader" class="date-picker__day-label">Fr</div>
                <div role="columnheader" class="date-picker__day-label">Sa</div>
            </div>
            <div role="row">
                <div class="date-picker__day"></div>
                <div class="date-picker__day"></div>
                <div class="date-picker__day"></div>
                <div class="date-picker__day"></div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Thursday 1 August 2019" disabled>1</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Friday 2 August 2019" disabled>2</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Saturday 3 August 2019" disabled>3</button>
                </div>
            </div>
            <div role="row">
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Sunday 4 August 2019" disabled>4</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Monday 5 August 2019" disabled>5</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Tuesday 6 August 2019" disabled>6</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Wednesday 7 August 2019" disabled>7</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Thursday 8 August 2019" disabled>8</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Friday 9 August 2019" disabled>9</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Saturday 10 August 2019" disabled>10</button>
                </div>
            </div>
            <div role="row">
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Sunday 11 August 2019" disabled>11</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Monday 12 August 2019" disabled>12</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Tuesday 13 August 2019" disabled>13</button>
                </div>
                <div role="gridcell" class="date-picker__day date-picker__day--today">
                    <button type="button" aria-label="Wednesday 14 August 2019">14</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Thursday 15 August 2019">15</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Friday 16 August 2019">16</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Saturday 17 August 2019">17</button>
                </div>
            </div>
            <div role="row">
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Sunday 18 August 2019">18</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Monday 19 August 2019">19</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Tuesday 20 August 2019">20</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Wednesday 21 August 2019">21</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Thursday 22 August 2019">22</button>
                </div>
                <div role="gridcell" class="date-picker__day date-picker__day--range date-picker__day--start">
                    <button type="button" aria-label="Friday 23 August 2019" aria-selected="true">23</button>
                </div>
                <div role="gridcell" class="date-picker__day date-picker__day--range">
                    <button type="button" aria-label="Saturday 24 August 2019">24</button>
                </div>
            </div>
            <div role="row">
                <div role="gridcell" class="date-picker__day date-picker__day--range">
                    <button type="button" aria-label="Sunday 25 August 2019">25</button>
                </div>
                <div role="gridcell" class="date-picker__day date-picker__day--range">
                    <button type="button" aria-label="Monday 26 August 2019">26</button>
                </div>
                <div role="gridcell" class="date-picker__day date-picker__day--range date-picker__day--end">
                    <button type="button" aria-label="Tuesday 27 August 2019" aria-selected="true">27</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Wednesday 28 August 2019">28</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Thursday 29 August 2019">29</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Friday 30 August 2019">30</button>
                </div>
                <div role="gridcell" class="date-picker__day">
                    <button type="button" aria-label="Saturday 31 August 2019">31</button>
                </div>
            </div>
        </div>
    </div>
</div>
`;
