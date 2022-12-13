export default { title: 'Date Picker' };

export const double = () => /* html */ `
<div class="date-picker" role="dialog" aria-label="date picker">
    <div class="calendar-month">
        <div class="calendar-month__header">
            <button class="date-picker__month-button date-picker__month-button--left icon-btn icon-btn--transparent" aria-label="Go to July 2019" variant="icon">
                <svg aria-hidden="true" class="icon icon--chevron-left" focusable="false">
                    <use href="#icon-chevron-left"></use>
                </svg>
            </button>
            <h3>August 2019</h3>
            <button class="date-picker__month-button date-picker__month-button--right icon-btn icon-btn--transparent" aria-label="Go to October 2019" variant="icon">
                <svg aria-hidden="true" class="icon icon--chevron-right" focusable="false">
                    <use href="#icon-chevron-right"></use>
                </svg>
            </button>
        </div>
        <table class="calendar-month__body" aria-label="August 2019">
            <caption>Select Dates</caption>
            <thead>
                <tr>
                    <th>Su</th>
                    <th>Mo</th>
                    <th>Tu</th>
                    <th>We</th>
                    <th>Th</th>
                    <th>Fr</th>
                    <th>Sa</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Thursday 1 August 2019" disabled>1</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Friday 2 August 2019" disabled>2</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Saturday 3 August 2019" disabled>3</button>
                    </td>
                </tr>
                <tr>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Sunday 4 August 2019" disabled>4</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Monday 5 August 2019" disabled>5</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Tuesday 6 August 2019" disabled>6</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Wednesday 7 August 2019" disabled>7</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Thursday 8 August 2019" disabled>8</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Friday 9 August 2019" disabled>9</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Saturday 10 August 2019" disabled>10</button>
                    </td>
                </tr>
                <tr>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Sunday 11 August 2019" disabled>11</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Monday 12 August 2019" disabled>12</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Tuesday 13 August 2019" disabled>13</button>
                    </td>
                    <td class="calendar-month__day calendar-month__day--today">
                        <button type="button" aria-label="Wednesday 14 August 2019">14</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Thursday 15 August 2019">15</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Friday 16 August 2019">16</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Saturday 17 August 2019">17</button>
                    </td>
                </tr>
                <tr>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Sunday 18 August 2019">18</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Monday 19 August 2019">19</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Tuesday 20 August 2019">20</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Wednesday 21 August 2019">21</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Thursday 22 August 2019">22</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Friday 23 August 2019">23</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Saturday 24 August 2019">24</button>
                    </td>
                </tr>
                <tr>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Sunday 25 August 2019">25</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Monday 26 August 2019">26</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Tuesday 27 August 2019">27</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Wednesday 28 August 2019">28</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Thursday 29 August 2019">29</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Friday 30 August 2019">30</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Saturday 31 August 2019">31</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="calendar-month">
        <div class="calendar-month__header">
            <button class="date-picker__month-button date-picker__month-button--left icon-btn icon-btn--transparent" aria-label="Go to July 2019" variant="icon">
                <svg aria-hidden="true" class="icon icon--chevron-left" focusable="false">
                    <use href="#icon-chevron-left"></use>
                </svg>
            </button>
            <h3>September 2019</h3>
            <button class="date-picker__month-button date-picker__month-button--right icon-btn icon-btn--transparent" aria-label="Go to October 2019" variant="icon">
                <svg aria-hidden="true" class="icon icon--chevron-right" focusable="false">
                    <use href="#icon-chevron-right"></use>
                </svg>
            </button>
        </div>
        <table class="calendar-month__body" aria-label="August 2019">
            <thead>
                <tr>
                    <th>Su</th>
                    <th>Mo</th>
                    <th>Tu</th>
                    <th>We</th>
                    <th>Th</th>
                    <th>Fr</th>
                    <th>Sa</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Thursday 1 August 2019">1</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Thursday 2 August 2019">2</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Thursday 3 August 2019">3</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Thursday 4 August 2019">4</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Thursday 5 September 2019">5</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Friday 6 September 2019">6</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Saturday 7 September 2019">7</button>
                    </td>
                </tr>
                <tr>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Sunday 8 September 2019">8</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Monday 9 September 2019">9</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Tuesday 10 September 2019">10</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Wednesday 11 September 2019">11</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Thursday 12 September 2019">12</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Friday 13 September 2019">13</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Saturday 14 September 2019">14</button>
                    </td>
                </tr>
                <tr>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Sunday 15 September 2019">15</button>
                    </td>
                    <td class="calendar-month__day calendar-month__day--range calendar-month__day--start">
                        <button type="button" aria-label="Monday 16 September 2019" aria-selected="true">16</button>
                    </td>
                    <td class="calendar-month__day calendar-month__day--range">
                        <button type="button" aria-label="Tuesday 17 September 2019">17</button>
                    </td>
                    <td class="calendar-month__day calendar-month__day--range">
                        <button type="button" aria-label="Wednesday 18 September 2019">18</button>
                    </td>
                    <td class="calendar-month__day calendar-month__day--range">
                        <button type="button" aria-label="Thursday 19 September 2019">19</button>
                    </td>
                    <td class="calendar-month__day calendar-month__day--range">
                        <button type="button" aria-label="Friday 20 September 2019">20</button>
                    </td>
                    <td class="calendar-month__day calendar-month__day--range">
                        <button type="button" aria-label="Saturday 21 September 2019">21</button>
                    </td>
                </tr>
                <tr>
                    <td class="calendar-month__day calendar-month__day--range">
                        <button type="button" aria-label="Sunday 22 September 2019">22</button>
                    </td>
                    <td class="calendar-month__day calendar-month__day--range">
                        <button type="button" aria-label="Monday 23 September 2019">23</button>
                    </td>
                    <td class="calendar-month__day calendar-month__day--range">
                        <button type="button" aria-label="Tuesday 24 September 2019">24</button>
                    </td>
                    <td class="calendar-month__day calendar-month__day--range calendar-month__day--end">
                        <button type="button" aria-label="Wednesday 25 September 2019" aria-selected="true">25</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Thursday 26 September 2019">26</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Friday 27 September 2019">27</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Saturday 28 September 2019">28</button>
                    </td>
                </tr>
                <tr>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Sunday 29 September 2019">29</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Monday 30 September 2019">30</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`;

export const single = () => /* html */ `
<div class="date-picker" role="dialog" aria-label="date picker">
    <div class="calendar-month">
        <div class="calendar-month__header">
            <button class="date-picker__month-button date-picker__month-button--left icon-btn icon-btn--transparent" aria-label="Go to July 2019" variant="icon">
                <svg aria-hidden="true" class="icon icon--chevron-left" focusable="false">
                    <use href="#icon-chevron-left"></use>
                </svg>
            </button>
            <h3>August 2019</h3>
            <button class="date-picker__month-button date-picker__month-button--right icon-btn icon-btn--transparent" aria-label="Go to July 2019" variant="icon">
                <svg aria-hidden="true" class="icon icon--chevron-right" focusable="false">
                    <use href="#icon-chevron-right"></use>
                </svg>
            </button>
        </div>
        <table class="calendar-month__body" aria-label="August 2019">
            <caption>Select Dates</caption>
            <thead>
                <tr>
                    <th>Su</th>
                    <th>Mo</th>
                    <th>Tu</th>
                    <th>We</th>
                    <th>Th</th>
                    <th>Fr</th>
                    <th>Sa</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Thursday 1 August 2019" disabled>1</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Friday 2 August 2019" disabled>2</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Saturday 3 August 2019" disabled>3</button>
                    </td>
                </tr>
                <tr>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Sunday 4 August 2019" disabled>4</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Monday 5 August 2019" disabled>5</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Tuesday 6 August 2019" disabled>6</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Wednesday 7 August 2019" disabled>7</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Thursday 8 August 2019" disabled>8</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Friday 9 August 2019" disabled>9</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Saturday 10 August 2019" disabled>10</button>
                    </td>
                </tr>
                <tr>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Sunday 11 August 2019" disabled>11</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Monday 12 August 2019" disabled>12</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Tuesday 13 August 2019" disabled>13</button>
                    </td>
                    <td class="calendar-month__day calendar-month__day--today">
                        <button type="button" aria-label="Wednesday 14 August 2019">14</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Thursday 15 August 2019">15</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Friday 16 August 2019">16</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Saturday 17 August 2019">17</button>
                    </td>
                </tr>
                <tr>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Sunday 18 August 2019">18</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Monday 19 August 2019">19</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Tuesday 20 August 2019">20</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Wednesday 21 August 2019">21</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Thursday 22 August 2019">22</button>
                    </td>
                    <td class="calendar-month__day calendar-month__day--range calendar-month__day--start">
                        <button type="button" aria-label="Friday 23 August 2019" aria-selected="true">23</button>
                    </td>
                    <td class="calendar-month__day calendar-month__day--range">
                        <button type="button" aria-label="Saturday 24 August 2019">24</button>
                    </td>
                </tr>
                <tr>
                    <td class="calendar-month__day calendar-month__day--range">
                        <button type="button" aria-label="Sunday 25 August 2019">25</button>
                    </td>
                    <td class="calendar-month__day calendar-month__day--range">
                        <button type="button" aria-label="Monday 26 August 2019">26</button>
                    </td>
                    <td class="calendar-month__day calendar-month__day--range calendar-month__day--end">
                        <button type="button" aria-label="Tuesday 27 August 2019" aria-selected="true">27</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Wednesday 28 August 2019">28</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Thursday 29 August 2019">29</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Friday 30 August 2019">30</button>
                    </td>
                    <td class="calendar-month__day">
                        <button type="button" aria-label="Saturday 31 August 2019">31</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`;
