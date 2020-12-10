export default { title: 'Switch/Switch/Form' };

export const on = () => `
<div class="switch">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="true" checked />
    <span class="switch__button"></span>
</div>
`;

export const RTL = () => `
<div class="switch" dir="rtl">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="true" checked />
    <span class="switch__button"></span>
</div>
`;

export const onDisabled = () => `
<div class="switch">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="true" disabled checked />
    <span class="switch__button"></span>
</div>
`;

export const off = () => `
<div class="switch">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="false" />
    <span class="switch__button"></span>
</div>
`;

export const offDisabled = () => `
<div class="switch">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="false" disabled />
    <span class="switch__button"></span>
</div>
`;


