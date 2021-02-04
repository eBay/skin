export default { title: 'Progress Bar/Progress Bar' };

export const empty = () =>
    `<progress class="progress" value=0 min=0 max=100>0%</progress>`;

empty.storyName = 'Empty';

export const half = () =>
    `<progress class="progress" value=50 min=0 max=100>0%</progress>`;

half.storyName = 'Half';

export const full = () =>
    `<progress class="progress" value=100 min=0 max=100>0%</progress>`;

full.storyName = 'Full';
