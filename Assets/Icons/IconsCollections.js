const Home = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || "24"}
        height={props.height || "24"}
        fill="none"
        viewBox="0 0 24 24"
        className={props.className || ""}
    >
        <path
            className={props.className || ""}
            stroke={props.stroke || "#141414"}
            strokeWidth="1.5"
            d="M2 12.204c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z"
        ></path>
        <path
            className={props.className || ""}
            stroke={props.stroke || "#141414"}
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M15 18H9"
        ></path>
    </svg>
);

const Download = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width || "800"}
            height={props.height || "800"}
            fill="none"
            viewBox="0 0 24 24"
            className={props.className || ""}
        >
            <path
            className={props.className || ""}
            stroke={props.stroke || "#464455"}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 12v7m0 0-2.25-2.333M12 19l2.25-2.333M6.6 17.833c-1.988 0-3.6-1.641-3.6-3.666 0-1.669 1.094-3.077 2.592-3.521A.15.15 0 0 0 5.7 10.5C5.7 7.462 8.118 5 11.1 5s5.4 2.462 5.4 5.5a.09.09 0 0 0 .11.089q.382-.088.79-.089c1.988 0 3.6 1.642 3.6 3.667s-1.612 3.666-3.6 3.666"
            ></path>
        </svg>
    )
}

export const SVG_ICONS = {
    Home,
    Download
};