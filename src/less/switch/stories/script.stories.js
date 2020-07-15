export default { title: 'Switch/Script' };

export const on = () => `
<div class="switch">
    <span class="switch__control" role="switch" aria-checked="true"></span>
    <span class="switch__button"></span>
</div>
`;

export const onDisabled = () => `
<div class="switch">
    <span class="switch__control" role="switch" aria-checked="true" aria-disabled="true"></span>
    <span class="switch__button"></span>
</div>
`;

export const off = () => `
<div class="switch">
    <span class="switch__control" role="switch" aria-checked="false"></span>
    <span class="switch__button"></span>
</div>
`;

export const offDisabled = () => `
<div class="switch">
    <span class="switch__control" role="switch" aria-checked="false" aria-disabled="true"></span>
    <span class="switch__button"></span>
</div>
`;
