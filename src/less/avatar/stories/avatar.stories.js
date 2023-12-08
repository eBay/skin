export default { title: "Skin/Avatar" };

export const base = () => /* HTML */ `
    <div class="avatar" role="img" aria-label="Profile picture, E">
        <span>E</span>
    </div>
`;

export const variations = () => /* HTML */ `
    <div class="avatar avatar--teal" role="img" aria-label="Profile picture, Z">
        <span>Z</span>
    </div>
    <div
        class="avatar avatar--light-teal"
        role="img"
        aria-label="Profile picture, J"
    >
        <span>J</span>
    </div>
    <div
        class="avatar avatar--green"
        role="img"
        aria-label="Profile picture, B"
    >
        <span>B</span>
    </div>
    <div class="avatar avatar--lime" role="img" aria-label="Profile picture, C">
        <span>C</span>
    </div>
    <div
        class="avatar avatar--yellow"
        role="img"
        aria-label="Profile picture, D"
    >
        <span>D</span>
    </div>
    <div
        class="avatar avatar--orange"
        role="img"
        aria-label="Profile picture, F"
    >
        <span>F</span>
    </div>
    <div
        class="avatar avatar--magenta"
        role="img"
        aria-label="Profile picture, G"
    >
        <span>G</span>
    </div>
`;

export const withImage = () => /* HTML */ `
    <div class="avatar" role="img" aria-label="Profile picture, custom">
        <img
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
            alt=""
        />
    </div>
    <div
        class="avatar avatar--128"
        role="img"
        aria-label="Profile picture, custom"
    >
        <img
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
            alt=""
        />
    </div>
`;

export const signedOut = () => /* HTML */ `
    <div class="avatar" role="img" aria-label="Profile picture, signed out">
        <svg class="icon" focusable="false" aria-hidden="true">
            <use href="#icon-avatar-signed-out"></use>
        </svg>
    </div>
`;

export const sizes = () => /* HTML */ `
    <div>
        <div
            class="avatar avatar--32"
            role="img"
            aria-label="Profile picture, H"
        >
            <span>H</span>
        </div>
        <div
            class="avatar avatar--40"
            role="img"
            aria-label="Profile picture, I"
        >
            <span>I</span>
        </div>
        <div
            class="avatar avatar--48"
            role="img"
            aria-label="Profile picture, J"
        >
            <span>J</span>
        </div>
        <div
            class="avatar avatar--56"
            role="img"
            aria-label="Profile picture, K"
        >
            <span>K</span>
        </div>
        <div
            class="avatar avatar--64"
            role="img"
            aria-label="Profile picture, L"
        >
            <span>L</span>
        </div>
        <div
            class="avatar avatar--96"
            role="img"
            aria-label="Profile picture, M"
        >
            <span>M</span>
        </div>
        <div
            class="avatar avatar--128"
            role="img"
            aria-label="Profile picture, N"
        >
            <span>N</span>
        </div>
    </div>
`;

export const sizesProfilePic = () => /* HTML */ `
    <div>
        <div
            class="avatar avatar--32"
            role="img"
            aria-label="Profile picture, custom"
        >
            <img
                src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
                alt=""
            />
        </div>
        <div
            class="avatar avatar--40"
            role="img"
            aria-label="Profile picture, custom"
        >
            <img
                src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
                alt=""
            />
        </div>
        <div
            class="avatar avatar--48"
            role="img"
            aria-label="Profile picture, custom"
        >
            <img
                src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
                alt=""
            />
        </div>
        <div
            class="avatar avatar--56"
            role="img"
            aria-label="Profile picture, custom"
        >
            <img
                src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
                alt=""
            />
        </div>
        <div
            class="avatar avatar--64"
            role="img"
            aria-label="Profile picture, custom"
        >
            <img
                src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
                alt=""
            />
        </div>
        <div
            class="avatar avatar--96"
            role="img"
            aria-label="Profile picture, custom"
        >
            <img
                src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
                alt=""
            />
        </div>
        <div
            class="avatar avatar--128"
            role="img"
            aria-label="Profile picture, custom"
        >
            <img
                src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
                alt=""
            />
        </div>
    </div>
`;

export const sizesIcon = () => /* HTML */ `
    <div>
        <div class="avatar avatar--32" role="img" aria-label="Signed-Out">
            <svg class="icon" focusable="false" aria-hidden="true">
                <use href="#icon-avatar-signed-out"></use>
            </svg>
        </div>
        <div class="avatar avatar--40" role="img" aria-label="Signed-Out">
            <svg class="icon" focusable="false" aria-hidden="true">
                <use href="#icon-avatar-signed-out"></use>
            </svg>
        </div>
        <div class="avatar avatar--48" role="img" aria-label="Signed-Out">
            <svg class="icon" focusable="false" aria-hidden="true">
                <use href="#icon-avatar-signed-out"></use>
            </svg>
        </div>
        <div class="avatar avatar--56" role="img" aria-label="Signed-Out">
            <svg class="icon" focusable="false" aria-hidden="true">
                <use href="#icon-avatar-signed-out"></use>
            </svg>
        </div>
        <div class="avatar avatar--64" role="img" aria-label="Signed-Out">
            <svg class="icon" focusable="false" aria-hidden="true">
                <use href="#icon-avatar-signed-out"></use>
            </svg>
        </div>
        <div class="avatar avatar--96" role="img" aria-label="Signed-Out">
            <svg class="icon" focusable="false" aria-hidden="true">
                <use href="#icon-avatar-signed-out"></use>
            </svg>
        </div>
        <div class="avatar avatar--128" role="img" aria-label="Signed-Out">
            <svg class="icon" focusable="false" aria-hidden="true">
                <use href="#icon-avatar-signed-out"></use>
            </svg>
        </div>
    </div>
`;

export const combinations = () => /* HTML */ `
    <div style="display: grid; grid-gap: 10px">
        <div
            class="avatar avatar--32"
            role="img"
            aria-label="Profile picture, O"
        >
            <span>O</span>
        </div>
        <div class="avatar avatar--40" role="img" aria-label="Signed-out">
            <svg class="icon" focusable="false" aria-hidden="true">
                <use href="#icon-avatar-signed-out"></use>
            </svg>
        </div>
        <div
            class="avatar avatar--48 avatar--green"
            role="img"
            aria-label="Profile picture, Q"
        >
            <span>Q</span>
        </div>
        <div
            class="avatar avatar--56"
            role="img"
            aria-label="Profile picture, custom"
        >
            <img
                src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile_optimized.jpg"
                alt=""
            />
        </div>
        <div
            class="avatar avatar--64"
            role="img"
            aria-label="Profile picture, R"
        >
            <span>R</span>
        </div>
        <div
            class="avatar avatar--96 avatar--magenta"
            role="img"
            aria-label="Profile picture, S"
        >
            <span>S</span>
        </div>
        <div
            class="avatar avatar--128"
            role="img"
            aria-label="Profile picture, T"
        >
            <span>T</span>
        </div>
    </div>
`;
