export default { title: 'Date Picker' };

export const double = () => /* HTML */ `
    <div class="date-picker" role="dialog" aria-label="date picker">
        <div class="calendar">
            <div class="calendar__header">
                <button
                    class="calendar__nav-button--left icon-btn icon-btn--transparent"
                    aria-label="Go to July 2019"
                    variant="icon"
                >
                    <svg aria-hidden="true" class="icon icon--chevron-left" focusable="false">
                        <use href="#icon-chevron-left"></use>
                    </svg>
                </button>
                <h3>August 2019</h3>
                <button
                    class="calendar__nav-button--right icon-btn icon-btn--transparent"
                    aria-label="Go to September 2019"
                    variant="icon"
                >
                    <svg aria-hidden="true" class="icon icon--chevron-right" focusable="false">
                        <use href="#icon-chevron-right"></use>
                    </svg>
                </button>
            </div>
            <table class="calendar__body" aria-label="August 2019">
                <caption>
                    Select Dates
                </caption>
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
                        <td><button disabled>1</button></td>
                        <td><button disabled>2</button></td>
                        <td><button disabled>3</button></td>
                    </tr>
                    <tr>
                        <td><button disabled>4</button></td>
                        <td><button disabled>5</button></td>
                        <td><button disabled>6</button></td>
                        <td><button disabled>7</button></td>
                        <td><button disabled>8</button></td>
                        <td><button disabled>9</button></td>
                        <td><button disabled>10</button></td>
                    </tr>
                    <tr>
                        <td><button disabled>11</button></td>
                        <td><button disabled>12</button></td>
                        <td><button disabled>13</button></td>
                        <td aria-current="date">
                            <button>14</button>
                        </td>
                        <td><button>15</button></td>
                        <td><button>16</button></td>
                        <td><button>17</button></td>
                    </tr>
                    <tr>
                        <td><button>18</button></td>
                        <td><button>19</button></td>
                        <td><button>20</button></td>
                        <td><button>21</button></td>
                        <td><button>22</button></td>
                        <td><button>23</button></td>
                        <td><button>24</button></td>
                    </tr>
                    <tr>
                        <td><button>25</button></td>
                        <td><button>26</button></td>
                        <td><button>27</button></td>
                        <td><button>28</button></td>
                        <td><button>29</button></td>
                        <td><button>30</button></td>
                        <td><button>31</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="calendar">
            <div class="calendar__header">
                <button
                    class="calendar__nav-button--left icon-btn icon-btn--transparent"
                    aria-label="Go to August 2019"
                    variant="icon"
                >
                    <svg aria-hidden="true" class="icon icon--chevron-left" focusable="false">
                        <use href="#icon-chevron-left"></use>
                    </svg>
                </button>
                <h3>September 2019</h3>
                <button
                    class="calendar__nav-button--right icon-btn icon-btn--transparent"
                    aria-label="Go to October 2019"
                    variant="icon"
                >
                    <svg aria-hidden="true" class="icon icon--chevron-right" focusable="false">
                        <use href="#icon-chevron-right"></use>
                    </svg>
                </button>
            </div>
            <table class="calendar__body" aria-label="August 2019">
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
                        <td><button>1</button></td>
                        <td><button>2</button></td>
                        <td><button>3</button></td>
                        <td><button>4</button></td>
                        <td><button>5</button></td>
                        <td><button>6</button></td>
                        <td><button>7</button></td>
                    </tr>
                    <tr>
                        <td><button>8</button></td>
                        <td><button>9</button></td>
                        <td><button>10</button></td>
                        <td><button>11</button></td>
                        <td><button>12</button></td>
                        <td><button>13</button></td>
                        <td><button>14</button></td>
                    </tr>
                    <tr>
                        <td><button>15</button></td>
                        <td class="calendar__range calendar__range--start" aria-selected="true">
                            <button aria-label="16 - start of range">16</button>
                        </td>
                        <td class="calendar__range">
                            <button aria-label="17 - in range">17</button>
                        </td>
                        <td class="calendar__range">
                            <button aria-label="18 - in range">18</button>
                        </td>
                        <td class="calendar__range">
                            <button aria-label="19 - in range">19</button>
                        </td>
                        <td class="calendar__range">
                            <button aria-label="20 - in range">20</button>
                        </td>
                        <td class="calendar__range">
                            <button aria-label="21 - in range">21</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="calendar__range">
                            <button aria-label="22 - in range">22</button>
                        </td>
                        <td class="calendar__range">
                            <button aria-label="23 - in range">23</button>
                        </td>
                        <td class="calendar__range">
                            <button aria-label="24 - in range">24</button>
                        </td>
                        <td class="calendar__range calendar__range--end" aria-selected="true">
                            <button aria-label="25 - end of range">25</button>
                        </td>
                        <td><button>26</button></td>
                        <td><button>27</button></td>
                        <td><button>28</button></td>
                    </tr>
                    <tr>
                        <td><button>29</button></td>
                        <td><button>30</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
`;

export const single = () => /* HTML */ `
    <div class="date-picker" role="dialog" aria-label="date picker">
        <div class="calendar">
            <div class="calendar__header">
                <button
                    class="calendar__nav-button--left icon-btn icon-btn--transparent"
                    aria-label="Go to July 2019"
                    variant="icon"
                >
                    <svg aria-hidden="true" class="icon icon--chevron-left" focusable="false">
                        <use href="#icon-chevron-left"></use>
                    </svg>
                </button>
                <h3>August 2019</h3>
                <button
                    class="calendar__nav-button--right icon-btn icon-btn--transparent"
                    aria-label="Go to July 2019"
                    variant="icon"
                >
                    <svg aria-hidden="true" class="icon icon--chevron-right" focusable="false">
                        <use href="#icon-chevron-right"></use>
                    </svg>
                </button>
            </div>
            <table class="calendar__body" aria-label="August 2019">
                <caption>
                    Select Dates
                </caption>
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
                        <td><button disabled>1</button></td>
                        <td><button disabled>2</button></td>
                        <td><button disabled>3</button></td>
                    </tr>
                    <tr>
                        <td><button disabled>4</button></td>
                        <td><button disabled>5</button></td>
                        <td><button disabled>6</button></td>
                        <td><button disabled>7</button></td>
                        <td><button disabled>8</button></td>
                        <td><button disabled>9</button></td>
                        <td><button disabled>10</button></td>
                    </tr>
                    <tr>
                        <td><button disabled>11</button></td>
                        <td><button disabled>12</button></td>
                        <td><button disabled>13</button></td>
                        <td aria-current="date">
                            <button>14</button>
                        </td>
                        <td><button>15</button></td>
                        <td><button>16</button></td>
                        <td><button>17</button></td>
                    </tr>
                    <tr>
                        <td><button>18</button></td>
                        <td><button>19</button></td>
                        <td><button>20</button></td>
                        <td><button>21</button></td>
                        <td><button>22</button></td>
                        <td class="calendar__range calendar__range--start" aria-selected="true">
                            <button aria-label="23 - start of range">23</button>
                        </td>
                        <td class="calendar__range">
                            <button aria-label="24 - in range">24</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="calendar__range">
                            <button aria-label="25 - in range">25</button>
                        </td>
                        <td class="calendar__range">
                            <button aria-label="26 - in range">26</button>
                        </td>
                        <td class="calendar__range calendar__range--end" aria-selected="true">
                            <button aria-label="27 - end of range">27</button>
                        </td>
                        <td><button>28</button></td>
                        <td><button>29</button></td>
                        <td><button>30</button></td>
                        <td><button>31</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
`;
