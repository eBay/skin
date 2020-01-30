export default { title: 'switch' };

export const offForm = () => `
<div class="switch">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="false" />
    <span class="switch__button"></span>
</div>
`;

export const onForm = () => `
<div class="switch">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="true" checked />
    <span class="switch__button"></span>
</div>
`;

export const offFormDisabled = () => `
<div class="switch">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="false" disabled />
    <span class="switch__button"></span>
</div>
`;

export const onFormDisabled = () => `
<div class="switch">
    <input class="switch__control" role="switch" type="checkbox" aria-checked="true" disabled checked />
    <span class="switch__button"></span>
</div>
`;

export const offScript = () => `
<div class="switch">
    <span class="switch__control" role="switch" aria-checked="false"></span>
    <span class="switch__button"></span>
</div>
`;

export const onScript = () => `
<div class="switch">
    <span class="switch__control" role="switch" aria-checked="true"></span>
    <span class="switch__button"></span>
</div>
`;

export const offScriptDisabled = () => `
<div class="switch">
    <span class="switch__control" role="switch" aria-checked="false" aria-disabled="true"></span>
    <span class="switch__button"></span>
</div>
`;

export const onScriptDisabled = () => `
<div class="switch">
    <span class="switch__control" role="switch" aria-checked="true" aria-disabled="true"></span>
    <span class="switch__button"></span>
</div>
`;