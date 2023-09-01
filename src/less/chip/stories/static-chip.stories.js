export default { title: "Skin/Chip/Static Chip" };

export const typical = () => `
<span class="chip">
    <span class="chip__text">Football</span>
</span>
`;

export const leastContent = () => `
<span class="chip">
    <span class="chip__text">I</span>
</span>
`;

export const mostContent = () => `
<span class="chip">
    <span class="chip__text">Chip with the longest potentially possible content</span>
</span>
`;

export const set = () => `
<span class="chip">
    <span class="chip__text">Football</span>
</span>

<span class="chip">
    <span class="chip__text">Basketball</span>
</span>

<span class="chip">
    <span class="chip__text">Baseball</span>
</span>

<span class="chip">
    <span class="chip__text">Hockey</span>
</span>

<span class="chip">
    <span class="chip__text">Tennis</span>
</span>

<span class="chip">
    <span class="chip__text">Golf</span>
</span>

<span class="chip">
    <span class="chip__text">Gymnastics</span>
</span>

<span class="chip">
    <span class="chip__text">Swimming</span>
</span>

<span class="chip">
    <span class="chip__text">Cricket</span>
</span>

<span class="chip">
    <span class="chip__text">Volleyball</span>
</span>

<span class="chip">
    <span class="chip__text">Rugby</span>
</span>
`;

export const list = () => `
<ul>
    <li>
        <span class="chip">
            <span class="chip__text">Football</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Basketball</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Baseball</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Hockey</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Tennis</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Golf</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Gymnastics</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Swimming</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Cricket</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Volleyball</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Rugby</span>
        </span>
    </li>
</ul>
`;

export const largeText = () => `
    <span class="chip" style="font-size: 200%;">
        <span class="chip__text">Football</span>
    </span>
`;

export const RTL = () => `
<div dir="rtl">
    <span class="chip">
        <span class="chip__text">Football</span>
    </span>
</div>
`;
