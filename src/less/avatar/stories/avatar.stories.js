export default { title: "Avatar" };

export const base = () => /* HTML */ ` <div class="avatar">E</div> `;

export const variations = () => /* HTML */ `
    <div class="avatar avatar--teal" role="img" aria-label="Signed-in as Zed">
        Z
    </div>
    <div
        class="avatar avatar--light-teal"
        role="img"
        aria-label="Signed-in as Awesome Jack"
    >
        A
    </div>
    <div class="avatar avatar--green" aria-label="Signed-in as Bob">B</div>
    <div class="avatar avatar--lime" aria-label="Signed-in as Carol12345">
        C
    </div>
    <div class="avatar avatar--yellow" aria-label="Signed-in as DogLover">
        D
    </div>
    <div class="avatar avatar--orange" aria-label="Signed-in as FooBar">F</div>
    <div class="avatar avatar--magenta" aria-label="Signed-in as Goolio">G</div>
`;

export const withImage = () => /* HTML */ `
    <div class="avatar" role="img" aria-label="Signed-in as Doggy">
        <img
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"
            alt="profile pic"
        />
    </div>
    <div class="avatar avatar--128" role="img" aria-label="Signed-in as Doggy">
        <img
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"
            alt="profile pic"
        />
    </div>
`;

export const signedOut = () => /* HTML */ `
    <div class="avatar" role="img" aria-label="Signed-Out">
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
            aria-label="Signed-in as Harry Potter"
        >
            H
        </div>
        <div
            class="avatar avatar--40"
            role="img"
            aria-label="Signed-in as Igquana"
        >
            I
        </div>
        <div
            class="avatar avatar--48"
            role="img"
            aria-label="Signed-in as Josh123"
        >
            J
        </div>
        <div
            class="avatar avatar--56"
            role="img"
            aria-label="Signed-in as KoolGuy"
        >
            K
        </div>
        <div class="avatar avatar--64" role="img" aria-label="Signed-in as Leo">
            L
        </div>
        <div class="avatar avatar--96" role="img" aria-label="Signed-in as Me">
            M
        </div>
        <div
            class="avatar avatar--128"
            role="img"
            aria-label="Signed-in as Noir"
        >
            N
        </div>
    </div>
`;

export const sizesProfilePic = () => /* HTML */ `
    <div>
        <div
            class="avatar avatar--32"
            role="img"
            aria-label="Signed-in as Doggy"
        >
            <img
                src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"
                alt="profile pic"
            />
        </div>
        <div
            class="avatar avatar--40"
            role="img"
            aria-label="Signed-in as Doggy"
        >
            <img
                src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"
                alt="profile pic"
            />
        </div>
        <div
            class="avatar avatar--48"
            role="img"
            aria-label="Signed-in as Doggy"
        >
            <img
                src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"
                alt="profile pic"
            />
        </div>
        <div
            class="avatar avatar--56"
            role="img"
            aria-label="Signed-in as Doggy"
        >
            <img
                src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"
                alt="profile pic"
            />
        </div>
        <div
            class="avatar avatar--64"
            role="img"
            aria-label="Signed-in as Doggy"
        >
            <img
                src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"
                alt="profile pic"
            />
        </div>
        <div
            class="avatar avatar--96"
            role="img"
            aria-label="Signed-in as Doggy"
        >
            <img
                src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"
                alt="profile pic"
            />
        </div>
        <div
            class="avatar avatar--128"
            role="img"
            aria-label="Signed-in as Doggy"
        >
            <img
                src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"
                alt="profile pic"
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
            aria-label="Signed-in as Omega"
        >
            O
        </div>
        <div class="avatar avatar--40" role="img" aria-label="Signed-out">
            <svg class="icon" focusable="false" aria-hidden="true">
                <use href="#icon-avatar-signed-out"></use>
            </svg>
        </div>
        <div
            class="avatar avatar--48 avatar--green"
            role="img"
            aria-label="Signed-in as Queen"
        >
            Q
        </div>
        <div
            class="avatar avatar--56"
            role="img"
            aria-label="Signed-in as Doggy"
        >
            <img
                src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"
                alt="profile pic"
            />
        </div>
        <div
            class="avatar avatar--64"
            role="img"
            aria-label="Signed-in as Ryan"
        >
            R
        </div>
        <div
            class="avatar avatar--96 avatar--magenta"
            role="img"
            aria-label="Signed-in as Sam"
        >
            S
        </div>
        <div
            class="avatar avatar--128"
            role="img"
            aria-label="Signed-in as Turner"
        >
            T
        </div>
        <div></div>
    </div>
`;
