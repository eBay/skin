export default { title: 'Button/Base/Fixed Height' };

export const nonTruncated = () => `
<button style="width: 200px;" type="button" class="btn btn--fixed-height">
    Button with a lot of text that should wrap
</button>
`;

export const truncated = () => `
<button style="width: 200px;" type="button" class="btn btn--fixed-height btn--truncated">
    Button with a lot of text that should wrap
</button>
`;
