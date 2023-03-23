export default { title: 'Calendar' };

export const base = () => /* HTML */ `
    <div class="calendar">
        <div class="calendar__body">
            <div class="calendar__month">
                <table>
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
                            <td><span class="calendar__cell--disabled">1</span></td>
                            <td><span class="calendar__cell--disabled">2</span></td>
                            <td><span class="calendar__cell--disabled">3</span></td>
                        </tr>
                        <tr>
                            <td><span class="calendar__cell--disabled">4</span></td>
                            <td><span class="calendar__cell--disabled">5</span></td>
                            <td><span class="calendar__cell--disabled">6</span></td>
                            <td><span class="calendar__cell--disabled">7</span></td>
                            <td><span class="calendar__cell--disabled">8</span></td>
                            <td><span class="calendar__cell--disabled">9</span></td>
                            <td><span class="calendar__cell--disabled">10</span></td>
                        </tr>
                        <tr>
                            <td><span class="calendar__cell--disabled">11</span></td>
                            <td><span class="calendar__cell--disabled">12</span></td>
                            <td><span class="calendar__cell--disabled">13</span></td>
                            <td aria-current="date">
                                <span>14</span>
                            </td>
                            <td><span>15</span></td>
                            <td><span>16</span></td>
                            <td><span>17</span></td>
                        </tr>
                        <tr>
                            <td><span>18</span></td>
                            <td><span>19</span></td>
                            <td><span>20</span></td>
                            <td><span>21</span></td>
                            <td><span>22</span></td>
                            <td
                                class="calendar__cell--selected calendar__range calendar__range--start"
                            >
                                <span
                                    >23
                                    <span class="clipped">- selected - start of range</span></span
                                >
                            </td>
                            <td class="calendar__range">
                                <span>24 <span class="clipped">- in range</span></span>
                            </td>
                        </tr>
                        <tr>
                            <td class="calendar__range">
                                <span>25 <span class="clipped">- in range</span></span>
                            </td>
                            <td class="calendar__range">
                                <span>26 <span class="clipped">- in range</span></span>
                            </td>
                            <td
                                class="calendar__cell--selected calendar__range calendar__range--end"
                            >
                                <span
                                    >27 <span class="clipped">- selected - end of range</span></span
                                >
                            </td>
                            <td><span>28</span></td>
                            <td><span>29</span></td>
                            <td><span>30</span></td>
                            <td><span>31</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
`;

export const interactive = () => /* HTML */ `
    <div class="calendar">
        <div class="calendar__body">
            <div class="calendar__month">
                <table>
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
                            <td
                                class="calendar__cell--selected calendar__range calendar__range--start"
                            >
                                <button tabindex="-1" aria-label="23 - selected - start of range">
                                    23
                                </button>
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
                            <td
                                class="calendar__cell--selected calendar__range calendar__range--end"
                            >
                                <button tabindex="-1" aria-label="27 - selected - end of range">
                                    27
                                </button>
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

export const header = () => /* HTML */ `
    <div class="calendar">
        <div class="calendar__header">
            <div class="calendar__header--inner">
                <button
                    class="icon-btn icon-btn--small icon-btn--transparent"
                    aria-label="Previous Month - July 2019"
                    variant="icon"
                >
                    <svg class="icon icon--chevron-left-24">
                        <use href="#icon-chevron-left-24"></use>
                    </svg>
                </button>
                <h3>August 2019</h3>
                <button
                    class="icon-btn icon-btn--small icon-btn--transparent"
                    aria-label="Next Month - September 2019"
                    variant="icon"
                >
                    <svg class="icon icon--chevron-right-24">
                        <use href="#icon-chevron-right-24"></use>
                    </svg>
                </button>
            </div>
        </div>
        <div class="calendar__body">
            <div class="calendar__month">
                <table>
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
                            <td><span class="calendar__cell--disabled">1</span></td>
                            <td><span class="calendar__cell--disabled">2</span></td>
                            <td><span class="calendar__cell--disabled">3</span></td>
                        </tr>
                        <tr>
                            <td><span class="calendar__cell--disabled">4</span></td>
                            <td><span class="calendar__cell--disabled">5</span></td>
                            <td><span class="calendar__cell--disabled">6</span></td>
                            <td><span class="calendar__cell--disabled">7</span></td>
                            <td><span class="calendar__cell--disabled">8</span></td>
                            <td><span class="calendar__cell--disabled">9</span></td>
                            <td><span class="calendar__cell--disabled">10</span></td>
                        </tr>
                        <tr>
                            <td><span class="calendar__cell--disabled">11</span></td>
                            <td><span class="calendar__cell--disabled">12</span></td>
                            <td><span class="calendar__cell--disabled">13</span></td>
                            <td aria-current="date">
                                <span>14</span>
                            </td>
                            <td><span>15</span></td>
                            <td><span>16</span></td>
                            <td><span>17</span></td>
                        </tr>
                        <tr>
                            <td><span>18</span></td>
                            <td><span>19</span></td>
                            <td><span>20</span></td>
                            <td><span>21</span></td>
                            <td><span>22</span></td>
                            <td
                                class="calendar__cell--selected calendar__range calendar__range--start"
                            >
                                <span
                                    >23
                                    <span class="clipped">- selected - start of range</span></span
                                >
                            </td>
                            <td class="calendar__range">
                                <span>24 <span class="clipped">- in range</span></span>
                            </td>
                        </tr>
                        <tr>
                            <td class="calendar__range">
                                <span>25 <span class="clipped">- in range</span></span>
                            </td>
                            <td class="calendar__range">
                                <span>26 <span class="clipped">- in range</span></span>
                            </td>
                            <td
                                class="calendar__cell--selected calendar__range calendar__range--end"
                            >
                                <span
                                    >27 <span class="clipped">- selected - end of range</span></span
                                >
                            </td>
                            <td><span>28</span></td>
                            <td><span>29</span></td>
                            <td><span>30</span></td>
                            <td><span>31</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
`;

export const double = () => /* HTML */ `
    <div class="calendar">
        <div class="calendar__body">
            <div class="calendar__month">
                <table>
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
                            <td><span class="calendar__cell--disabled">1</span></td>
                            <td><span class="calendar__cell--disabled">2</span></td>
                            <td><span class="calendar__cell--disabled">3</span></td>
                        </tr>
                        <tr>
                            <td><span class="calendar__cell--disabled">4</span></td>
                            <td><span class="calendar__cell--disabled">5</span></td>
                            <td><span class="calendar__cell--disabled">6</span></td>
                            <td><span class="calendar__cell--disabled">7</span></td>
                            <td><span class="calendar__cell--disabled">8</span></td>
                            <td><span class="calendar__cell--disabled">9</span></td>
                            <td><span class="calendar__cell--disabled">10</span></td>
                        </tr>
                        <tr>
                            <td><span class="calendar__cell--disabled">11</span></td>
                            <td><span class="calendar__cell--disabled">12</span></td>
                            <td><span class="calendar__cell--disabled">13</span></td>
                            <td aria-current="date">
                                <span>14</span>
                            </td>
                            <td><span>15</span></td>
                            <td><span>16</span></td>
                            <td><span>17</span></td>
                        </tr>
                        <tr>
                            <td><span>18</span></td>
                            <td><span>19</span></td>
                            <td><span>20</span></td>
                            <td><span>21</span></td>
                            <td><span>22</span></td>
                            <td><span>23</span></td>
                            <td><span>24</span></td>
                        </tr>
                        <tr>
                            <td><span>25</span></td>
                            <td><span>26</span></td>
                            <td><span>27</span></td>
                            <td><span>28</span></td>
                            <td><span>29</span></td>
                            <td><span>30</span></td>
                            <td><span>31</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="calendar__month">
                <table>
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
                            <td><span>1</span></td>
                            <td><span>2</span></td>
                            <td><span>3</span></td>
                            <td><span>4</span></td>
                            <td><span>5</span></td>
                            <td><span>6</span></td>
                            <td><span>7</span></td>
                        </tr>
                        <tr>
                            <td><span>8</span></td>
                            <td><span>9</span></td>
                            <td><span>10</span></td>
                            <td><span>11</span></td>
                            <td><span>12</span></td>
                            <td><span>13</span></td>
                            <td><span>14</span></td>
                        </tr>
                        <tr>
                            <td><span>15</span></td>
                            <td
                                class="calendar__cell--selected calendar__range calendar__range--start"
                            >
                                <span
                                    >16
                                    <span class="clipped">- selected - start of range</span></span
                                >
                            </td>
                            <td class="calendar__range">
                                <span>17 <span class="clipped">- in range</span></span>
                            </td>
                            <td class="calendar__range">
                                <span>18 <span class="clipped">- in range</span></span>
                            </td>
                            <td class="calendar__range">
                                <span>19 <span class="clipped">- in range</span></span>
                            </td>
                            <td class="calendar__range">
                                <span>20 <span class="clipped">- in range</span></span>
                            </td>
                            <td class="calendar__range">
                                <span>21 <span class="clipped">- in range</span></span>
                            </td>
                        </tr>
                        <tr>
                            <td class="calendar__range">
                                <span>22 <span class="clipped">- in range</span></span>
                            </td>
                            <td class="calendar__range">
                                <span>23 <span class="clipped">- in range</span></span>
                            </td>
                            <td class="calendar__range">
                                <span>24 <span class="clipped">- in range</span></span>
                            </td>
                            <td
                                class="calendar__cell--selected calendar__range calendar__range--end"
                            >
                                <span
                                    >25 <span class="clipped">- selected - end of range</span></span
                                >
                            </td>
                            <td><span>26</span></td>
                            <td><span>27</span></td>
                            <td><span>28</span></td>
                        </tr>
                        <tr>
                            <td><span>29</span></td>
                            <td><span>30</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
`;

export const doubleWithHeader = () => /* HTML */ `
    <div class="calendar">
        <div class="calendar__header">
            <div class="calendar__header--inner">
                <button
                    class="icon-btn icon-btn--small icon-btn--transparent"
                    aria-label="Previous Month - July 2019"
                    variant="icon"
                >
                    <svg class="icon icon--chevron-left-24">
                        <use href="#icon-chevron-left-24"></use>
                    </svg>
                </button>
                <h3>August 2019</h3>
                <h3>September 2019</h3>
                <button
                    class="icon-btn icon-btn--small icon-btn--transparent"
                    aria-label="Next Month - October 2019"
                    variant="icon"
                >
                    <svg class="icon icon--chevron-right-24">
                        <use href="#icon-chevron-right-24"></use>
                    </svg>
                </button>
            </div>
        </div>
        <div class="calendar__body">
            <div class="calendar__month">
                <table>
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
                            <td><span class="calendar__cell--disabled">1</span></td>
                            <td><span class="calendar__cell--disabled">2</span></td>
                            <td><span class="calendar__cell--disabled">3</span></td>
                        </tr>
                        <tr>
                            <td><span class="calendar__cell--disabled">4</span></td>
                            <td><span class="calendar__cell--disabled">5</span></td>
                            <td><span class="calendar__cell--disabled">6</span></td>
                            <td><span class="calendar__cell--disabled">7</span></td>
                            <td><span class="calendar__cell--disabled">8</span></td>
                            <td><span class="calendar__cell--disabled">9</span></td>
                            <td><span class="calendar__cell--disabled">10</span></td>
                        </tr>
                        <tr>
                            <td><span class="calendar__cell--disabled">11</span></td>
                            <td><span class="calendar__cell--disabled">12</span></td>
                            <td><span class="calendar__cell--disabled">13</span></td>
                            <td aria-current="date">
                                <span>14</span>
                            </td>
                            <td><span>15</span></td>
                            <td><span>16</span></td>
                            <td><span>17</span></td>
                        </tr>
                        <tr>
                            <td><span>18</span></td>
                            <td><span>19</span></td>
                            <td><span>20</span></td>
                            <td><span>21</span></td>
                            <td><span>22</span></td>
                            <td><span>23</span></td>
                            <td><span>24</span></td>
                        </tr>
                        <tr>
                            <td><span>25</span></td>
                            <td><span>26</span></td>
                            <td><span>27</span></td>
                            <td><span>28</span></td>
                            <td><span>29</span></td>
                            <td><span>30</span></td>
                            <td><span>31</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="calendar__month">
                <table>
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
                            <td><span>1</span></td>
                            <td><span>2</span></td>
                            <td><span>3</span></td>
                            <td><span>4</span></td>
                            <td><span>5</span></td>
                            <td><span>6</span></td>
                            <td><span>7</span></td>
                        </tr>
                        <tr>
                            <td><span>8</span></td>
                            <td><span>9</span></td>
                            <td><span>10</span></td>
                            <td><span>11</span></td>
                            <td><span>12</span></td>
                            <td><span>13</span></td>
                            <td><span>14</span></td>
                        </tr>
                        <tr>
                            <td><span>15</span></td>
                            <td
                                class="calendar__cell--selected calendar__range calendar__range--start"
                            >
                                <span
                                    >16
                                    <span class="clipped">- selected - start of range</span></span
                                >
                            </td>
                            <td class="calendar__range">
                                <span>17 <span class="clipped">- in range</span></span>
                            </td>
                            <td class="calendar__range">
                                <span>18 <span class="clipped">- in range</span></span>
                            </td>
                            <td class="calendar__range">
                                <span>19 <span class="clipped">- in range</span></span>
                            </td>
                            <td class="calendar__range">
                                <span>20 <span class="clipped">- in range</span></span>
                            </td>
                            <td class="calendar__range">
                                <span>21 <span class="clipped">- in range</span></span>
                            </td>
                        </tr>
                        <tr>
                            <td class="calendar__range">
                                <span>22 <span class="clipped">- in range</span></span>
                            </td>
                            <td class="calendar__range">
                                <span>23 <span class="clipped">- in range</span></span>
                            </td>
                            <td class="calendar__range">
                                <span>24 <span class="clipped">- in range</span></span>
                            </td>
                            <td
                                class="calendar__cell--selected calendar__range calendar__range--end"
                            >
                                <span
                                    >25 <span class="clipped">- selected - end of range</span></span
                                >
                            </td>
                            <td><span>26</span></td>
                            <td><span>27</span></td>
                            <td><span>28</span></td>
                        </tr>
                        <tr>
                            <td><span>29</span></td>
                            <td><span>30</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
`;
