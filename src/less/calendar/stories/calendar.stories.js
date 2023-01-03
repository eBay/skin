export default { title: 'Calendar' };

export const base = () => /* HTML */ `
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><span aria-disabled="true">1</span></td>
                <td><span aria-disabled="true">2</span></td>
                <td><span aria-disabled="true">3</span></td>
            </tr>
            <tr>
                <td><span aria-disabled="true">4</span></td>
                <td><span aria-disabled="true">5</span></td>
                <td><span aria-disabled="true">6</span></td>
                <td><span aria-disabled="true">7</span></td>
                <td><span aria-disabled="true">8</span></td>
                <td><span aria-disabled="true">9</span></td>
                <td><span aria-disabled="true">10</span></td>
            </tr>
            <tr>
                <td><span aria-disabled="true">11</span></td>
                <td><span aria-disabled="true">12</span></td>
                <td><span aria-disabled="true">13</span></td>
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
                <td class="calendar__range calendar__range--start" aria-selected="true">
                    <span aria-label="23 - start of range">23</span>
                </td>
                <td class="calendar__range">
                    <span aria-label="24 - in range">24</span>
                </td>
            </tr>
            <tr>
                <td class="calendar__range">
                    <span aria-label="25 - in range">25</span>
                </td>
                <td class="calendar__range">
                    <span aria-label="26 - in range">26</span>
                </td>
                <td class="calendar__range calendar__range--end" aria-selected="true">
                    <span aria-label="27 - end of range">27</span>
                </td>
                <td><span>28</span></td>
                <td><span>29</span></td>
                <td><span>30</span></td>
                <td><span>31</span></td>
            </tr>
        </tbody>
    </table>
`;

export const interactive = () => /* HTML */ `
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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
`;
