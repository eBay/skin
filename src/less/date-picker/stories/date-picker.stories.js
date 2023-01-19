export default { title: 'Date Picker' };

export const double = () => /* HTML */ `
    <div class="date-picker" aria-label="date picker">
        <div class="date-picker__header">
            <div class="date-picker__header--inner">
                <button
                    class="icon-btn icon-btn--small icon-btn--transparent"
                    aria-label="Previous Month - July 2019"
                    variant="icon"
                >
                    <svg class="icon icon--chevron-left">
                        <use href="#icon-chevron-left"></use>
                    </svg>
                </button>
                <h3>August 2019</h3>
                <h3>September 2019</h3>
                <button
                    class="icon-btn icon-btn--small icon-btn--transparent"
                    aria-label="Next Month - October 2019"
                    variant="icon"
                >
                    <svg class="icon icon--chevron-right">
                        <use href="#icon-chevron-right"></use>
                    </svg>
                </button>
            </div>
        </div>
        <div class="date-picker__body">
            <div class="date-picker__calendar-cell">
                <table class="calendar">
                    <caption>
                        August 2019
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
                            <td colspan="4"></td>
                            <td><button tabindex="-1" disabled>1</button></td>
                            <td><button tabindex="-1" disabled>2</button></td>
                            <td><button tabindex="-1" disabled>3</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1" disabled>4</button></td>
                            <td><button tabindex="-1" disabled>5</button></td>
                            <td><button tabindex="-1" disabled>6</button></td>
                            <td><button tabindex="-1" disabled>7</button></td>
                            <td><button tabindex="-1" disabled>8</button></td>
                            <td><button tabindex="-1" disabled>9</button></td>
                            <td><button tabindex="-1" disabled>10</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1" disabled>11</button></td>
                            <td><button tabindex="-1" disabled>12</button></td>
                            <td><button tabindex="-1" disabled>13</button></td>
                            <td aria-current="date">
                                <button>14</button>
                            </td>
                            <td><button tabindex="-1">15</button></td>
                            <td><button tabindex="-1">16</button></td>
                            <td><button tabindex="-1">17</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1">18</button></td>
                            <td><button tabindex="-1">19</button></td>
                            <td><button tabindex="-1">20</button></td>
                            <td><button tabindex="-1">21</button></td>
                            <td><button tabindex="-1">22</button></td>
                            <td><button tabindex="-1">23</button></td>
                            <td><button tabindex="-1">24</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1">25</button></td>
                            <td><button tabindex="-1">26</button></td>
                            <td><button tabindex="-1">27</button></td>
                            <td><button tabindex="-1">28</button></td>
                            <td><button tabindex="-1">29</button></td>
                            <td><button tabindex="-1">30</button></td>
                            <td><button tabindex="-1">31</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="date-picker__calendar-cell">
                <table class="calendar">
                    <caption>
                        September 2019
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
                            <td><button tabindex="-1">1</button></td>
                            <td><button tabindex="-1">2</button></td>
                            <td><button tabindex="-1">3</button></td>
                            <td><button tabindex="-1">4</button></td>
                            <td><button tabindex="-1">5</button></td>
                            <td><button tabindex="-1">6</button></td>
                            <td><button tabindex="-1">7</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1">8</button></td>
                            <td><button tabindex="-1">9</button></td>
                            <td><button tabindex="-1">10</button></td>
                            <td><button tabindex="-1">11</button></td>
                            <td><button tabindex="-1">12</button></td>
                            <td><button tabindex="-1">13</button></td>
                            <td><button tabindex="-1">14</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1">15</button></td>
                            <td class="calendar__range calendar__range--start" aria-selected="true">
                                <button tabindex="-1" aria-label="16 - start of range">16</button>
                            </td>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="17 - in range">17</button>
                            </td>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="18 - in range">18</button>
                            </td>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="19 - in range">19</button>
                            </td>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="20 - in range">20</button>
                            </td>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="21 - in range">21</button>
                            </td>
                        </tr>
                        <tr>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="22 - in range">22</button>
                            </td>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="23 - in range">23</button>
                            </td>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="24 - in range">24</button>
                            </td>
                            <td class="calendar__range calendar__range--end" aria-selected="true">
                                <button tabindex="-1" aria-label="25 - end of range">25</button>
                            </td>
                            <td><button tabindex="-1">26</button></td>
                            <td><button tabindex="-1">27</button></td>
                            <td><button tabindex="-1">28</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1">29</button></td>
                            <td><button tabindex="-1">30</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
`;

export const triple = () => /* HTML */ `
    <div class="date-picker" aria-label="date picker">
        <div class="date-picker__header">
            <div class="date-picker__header--inner">
                <button
                    class="icon-btn icon-btn--small icon-btn--transparent"
                    aria-label="Previous Month - July 2019"
                    variant="icon"
                >
                    <svg class="icon icon--chevron-left">
                        <use href="#icon-chevron-left"></use>
                    </svg>
                </button>
                <h3>August 2019</h3>
                <h3>September 2019</h3>
                <h3>October 2019</h3>
                <button
                    class="icon-btn icon-btn--small icon-btn--transparent"
                    aria-label="Next Month - October 2019"
                    variant="icon"
                >
                    <svg class="icon icon--chevron-right">
                        <use href="#icon-chevron-right"></use>
                    </svg>
                </button>
            </div>
        </div>
        <div class="date-picker__body">
            <div class="date-picker__calendar-cell">
                <table class="calendar">
                    <caption>
                        August 2019
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
                            <td colspan="4"></td>
                            <td><button tabindex="-1" disabled>1</button></td>
                            <td><button tabindex="-1" disabled>2</button></td>
                            <td><button tabindex="-1" disabled>3</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1" disabled>4</button></td>
                            <td><button tabindex="-1" disabled>5</button></td>
                            <td><button tabindex="-1" disabled>6</button></td>
                            <td><button tabindex="-1" disabled>7</button></td>
                            <td><button tabindex="-1" disabled>8</button></td>
                            <td><button tabindex="-1" disabled>9</button></td>
                            <td><button tabindex="-1" disabled>10</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1" disabled>11</button></td>
                            <td><button tabindex="-1" disabled>12</button></td>
                            <td><button tabindex="-1" disabled>13</button></td>
                            <td aria-current="date">
                                <button>14</button>
                            </td>
                            <td><button tabindex="-1">15</button></td>
                            <td><button tabindex="-1">16</button></td>
                            <td><button tabindex="-1">17</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1">18</button></td>
                            <td><button tabindex="-1">19</button></td>
                            <td><button tabindex="-1">20</button></td>
                            <td><button tabindex="-1">21</button></td>
                            <td><button tabindex="-1">22</button></td>
                            <td><button tabindex="-1">23</button></td>
                            <td><button tabindex="-1">24</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1">25</button></td>
                            <td><button tabindex="-1">26</button></td>
                            <td><button tabindex="-1">27</button></td>
                            <td><button tabindex="-1">28</button></td>
                            <td><button tabindex="-1">29</button></td>
                            <td><button tabindex="-1">30</button></td>
                            <td><button tabindex="-1">31</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="date-picker__calendar-cell">
                <table class="calendar">
                    <caption>
                        September 2019
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
                            <td><button tabindex="-1">1</button></td>
                            <td><button tabindex="-1">2</button></td>
                            <td><button tabindex="-1">3</button></td>
                            <td><button tabindex="-1">4</button></td>
                            <td><button tabindex="-1">5</button></td>
                            <td><button tabindex="-1">6</button></td>
                            <td><button tabindex="-1">7</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1">8</button></td>
                            <td><button tabindex="-1">9</button></td>
                            <td><button tabindex="-1">10</button></td>
                            <td><button tabindex="-1">11</button></td>
                            <td><button tabindex="-1">12</button></td>
                            <td><button tabindex="-1">13</button></td>
                            <td><button tabindex="-1">14</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1">15</button></td>
                            <td class="calendar__range calendar__range--start" aria-selected="true">
                                <button tabindex="-1" aria-label="16 - start of range">16</button>
                            </td>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="17 - in range">17</button>
                            </td>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="18 - in range">18</button>
                            </td>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="19 - in range">19</button>
                            </td>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="20 - in range">20</button>
                            </td>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="21 - in range">21</button>
                            </td>
                        </tr>
                        <tr>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="22 - in range">22</button>
                            </td>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="23 - in range">23</button>
                            </td>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="24 - in range">24</button>
                            </td>
                            <td class="calendar__range calendar__range--end" aria-selected="true">
                                <button tabindex="-1" aria-label="25 - end of range">25</button>
                            </td>
                            <td><button tabindex="-1">26</button></td>
                            <td><button tabindex="-1">27</button></td>
                            <td><button tabindex="-1">28</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1">29</button></td>
                            <td><button tabindex="-1">30</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="date-picker__calendar-cell">
                <table class="calendar">
                    <caption>
                        August 2019
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
                            <td colspan="2"></td>
                            <td><button tabindex="-1">1</button></td>
                            <td><button tabindex="-1">2</button></td>
                            <td><button tabindex="-1">3</button></td>
                            <td><button tabindex="-1">4</button></td>
                            <td><button tabindex="-1">5</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1">6</button></td>
                            <td><button tabindex="-1">7</button></td>
                            <td><button tabindex="-1">8</button></td>
                            <td><button tabindex="-1">9</button></td>
                            <td><button tabindex="-1">10</button></td>
                            <td><button tabindex="-1">11</button></td>
                            <td><button tabindex="-1">12</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1">13</button></td>
                            <td><button tabindex="-1">14</button></td>
                            <td><button tabindex="-1">15</button></td>
                            <td><button tabindex="-1">16</button></td>
                            <td><button tabindex="-1">17</button></td>
                            <td><button tabindex="-1">18</button></td>
                            <td><button tabindex="-1">19</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1">20</button></td>
                            <td><button tabindex="-1">21</button></td>
                            <td><button tabindex="-1">22</button></td>
                            <td><button tabindex="-1">23</button></td>
                            <td><button tabindex="-1">24</button></td>
                            <td><button tabindex="-1">25</button></td>
                            <td><button tabindex="-1">26</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1">27</button></td>
                            <td><button tabindex="-1">28</button></td>
                            <td><button tabindex="-1">29</button></td>
                            <td><button tabindex="-1">30</button></td>
                            <td><button tabindex="-1">31</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
`;

export const single = () => /* HTML */ `
    <div class="date-picker" aria-label="date picker">
        <div class="date-picker__header">
            <div class="date-picker__header--inner">
                <button
                    class="icon-btn icon-btn--small icon-btn--transparent"
                    aria-label="Previous Month - July 2019"
                    variant="icon"
                >
                    <svg class="icon icon--chevron-left">
                        <use href="#icon-chevron-left"></use>
                    </svg>
                </button>
                <h3>August 2019</h3>
                <button
                    class="icon-btn icon-btn--small icon-btn--transparent"
                    aria-label="Next Month - September 2019"
                    variant="icon"
                >
                    <svg class="icon icon--chevron-right">
                        <use href="#icon-chevron-right"></use>
                    </svg>
                </button>
            </div>
        </div>
        <div class="date-picker__body">
            <div class="date-picker__calendar-cell">
                <table class="calendar">
                    <caption>
                        August 2019
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
                            <td colspan="4"></td>
                            <td><button tabindex="-1" disabled>1</button></td>
                            <td><button tabindex="-1" disabled>2</button></td>
                            <td><button tabindex="-1" disabled>3</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1" disabled>4</button></td>
                            <td><button tabindex="-1" disabled>5</button></td>
                            <td><button tabindex="-1" disabled>6</button></td>
                            <td><button tabindex="-1" disabled>7</button></td>
                            <td><button tabindex="-1" disabled>8</button></td>
                            <td><button tabindex="-1" disabled>9</button></td>
                            <td><button tabindex="-1" disabled>10</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1" disabled>11</button></td>
                            <td><button tabindex="-1" disabled>12</button></td>
                            <td><button tabindex="-1" disabled>13</button></td>
                            <td aria-current="date">
                                <button>14</button>
                            </td>
                            <td><button tabindex="-1">15</button></td>
                            <td><button tabindex="-1">16</button></td>
                            <td><button tabindex="-1">17</button></td>
                        </tr>
                        <tr>
                            <td><button tabindex="-1">18</button></td>
                            <td><button tabindex="-1">19</button></td>
                            <td><button tabindex="-1">20</button></td>
                            <td><button tabindex="-1">21</button></td>
                            <td><button tabindex="-1">22</button></td>
                            <td class="calendar__range calendar__range--start" aria-selected="true">
                                <button tabindex="-1" aria-label="23 - start of range">23</button>
                            </td>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="24 - in range">24</button>
                            </td>
                        </tr>
                        <tr>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="25 - in range">25</button>
                            </td>
                            <td class="calendar__range">
                                <button tabindex="-1" aria-label="26 - in range">26</button>
                            </td>
                            <td class="calendar__range calendar__range--end" aria-selected="true">
                                <button tabindex="-1" aria-label="27 - end of range">27</button>
                            </td>
                            <td><button tabindex="-1">28</button></td>
                            <td><button tabindex="-1">29</button></td>
                            <td><button tabindex="-1">30</button></td>
                            <td><button tabindex="-1">31</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
`;

export const dropdown = () => /* HTML */ `
    <div class="date-picker__dropdown" role="dialog">
        <div class="date-picker" aria-label="date picker">
            <div class="date-picker__header">
                <div class="date-picker__header--inner">
                    <button
                        class="icon-btn icon-btn--small icon-btn--transparent"
                        aria-label="Previous Month - July 2019"
                        variant="icon"
                    >
                        <svg class="icon icon--chevron-left">
                            <use href="#icon-chevron-left"></use>
                        </svg>
                    </button>
                    <h3>August 2019</h3>
                    <h3>September 2019</h3>
                    <button
                        class="icon-btn icon-btn--small icon-btn--transparent"
                        aria-label="Next Month - October 2019"
                        variant="icon"
                    >
                        <svg class="icon icon--chevron-right">
                            <use href="#icon-chevron-right"></use>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="date-picker__body">
                <div class="date-picker__calendar-cell">
                    <table class="calendar">
                        <caption>
                            August 2019
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
                                <td colspan="4"></td>
                                <td><button tabindex="-1" disabled>1</button></td>
                                <td><button tabindex="-1" disabled>2</button></td>
                                <td><button tabindex="-1" disabled>3</button></td>
                            </tr>
                            <tr>
                                <td><button tabindex="-1" disabled>4</button></td>
                                <td><button tabindex="-1" disabled>5</button></td>
                                <td><button tabindex="-1" disabled>6</button></td>
                                <td><button tabindex="-1" disabled>7</button></td>
                                <td><button tabindex="-1" disabled>8</button></td>
                                <td><button tabindex="-1" disabled>9</button></td>
                                <td><button tabindex="-1" disabled>10</button></td>
                            </tr>
                            <tr>
                                <td><button tabindex="-1" disabled>11</button></td>
                                <td><button tabindex="-1" disabled>12</button></td>
                                <td><button tabindex="-1" disabled>13</button></td>
                                <td aria-current="date">
                                    <button>14</button>
                                </td>
                                <td><button tabindex="-1">15</button></td>
                                <td><button tabindex="-1">16</button></td>
                                <td><button tabindex="-1">17</button></td>
                            </tr>
                            <tr>
                                <td><button tabindex="-1">18</button></td>
                                <td><button tabindex="-1">19</button></td>
                                <td><button tabindex="-1">20</button></td>
                                <td><button tabindex="-1">21</button></td>
                                <td><button tabindex="-1">22</button></td>
                                <td><button tabindex="-1">23</button></td>
                                <td><button tabindex="-1">24</button></td>
                            </tr>
                            <tr>
                                <td><button tabindex="-1">25</button></td>
                                <td><button tabindex="-1">26</button></td>
                                <td><button tabindex="-1">27</button></td>
                                <td><button tabindex="-1">28</button></td>
                                <td><button tabindex="-1">29</button></td>
                                <td><button tabindex="-1">30</button></td>
                                <td><button tabindex="-1">31</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="date-picker__calendar-cell">
                    <table class="calendar">
                        <caption>
                            September 2019
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
                                <td><button tabindex="-1">1</button></td>
                                <td><button tabindex="-1">2</button></td>
                                <td><button tabindex="-1">3</button></td>
                                <td><button tabindex="-1">4</button></td>
                                <td><button tabindex="-1">5</button></td>
                                <td><button tabindex="-1">6</button></td>
                                <td><button tabindex="-1">7</button></td>
                            </tr>
                            <tr>
                                <td><button tabindex="-1">8</button></td>
                                <td><button tabindex="-1">9</button></td>
                                <td><button tabindex="-1">10</button></td>
                                <td><button tabindex="-1">11</button></td>
                                <td><button tabindex="-1">12</button></td>
                                <td><button tabindex="-1">13</button></td>
                                <td><button tabindex="-1">14</button></td>
                            </tr>
                            <tr>
                                <td><button tabindex="-1">15</button></td>
                                <td
                                    class="calendar__range calendar__range--start"
                                    aria-selected="true"
                                >
                                    <button tabindex="-1" aria-label="16 - start of range">
                                        16
                                    </button>
                                </td>
                                <td class="calendar__range">
                                    <button tabindex="-1" aria-label="17 - in range">17</button>
                                </td>
                                <td class="calendar__range">
                                    <button tabindex="-1" aria-label="18 - in range">18</button>
                                </td>
                                <td class="calendar__range">
                                    <button tabindex="-1" aria-label="19 - in range">19</button>
                                </td>
                                <td class="calendar__range">
                                    <button tabindex="-1" aria-label="20 - in range">20</button>
                                </td>
                                <td class="calendar__range">
                                    <button tabindex="-1" aria-label="21 - in range">21</button>
                                </td>
                            </tr>
                            <tr>
                                <td class="calendar__range">
                                    <button tabindex="-1" aria-label="22 - in range">22</button>
                                </td>
                                <td class="calendar__range">
                                    <button tabindex="-1" aria-label="23 - in range">23</button>
                                </td>
                                <td class="calendar__range">
                                    <button tabindex="-1" aria-label="24 - in range">24</button>
                                </td>
                                <td
                                    class="calendar__range calendar__range--end"
                                    aria-selected="true"
                                >
                                    <button tabindex="-1" aria-label="25 - end of range">25</button>
                                </td>
                                <td><button tabindex="-1">26</button></td>
                                <td><button tabindex="-1">27</button></td>
                                <td><button tabindex="-1">28</button></td>
                            </tr>
                            <tr>
                                <td><button tabindex="-1">29</button></td>
                                <td><button tabindex="-1">30</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
`;
