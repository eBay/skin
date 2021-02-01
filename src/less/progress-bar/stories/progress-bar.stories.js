export default { title: 'Progress Bar/Progress Bar' };

export const base = () =>
    `<progress class="progress" style="margin: 25px;" value=40 min=0 max=100>0%</progress>
    <div>
        <button name="start-progress-0">Start Progress</button>
        <button name="end-progress-0">End</button>
    </div>`;

// export const Basic = () => <Button />
base.storyName = 'Base';
