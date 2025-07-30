export default function ApplicationLogo(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 316 316"
            xmlns="http://www.w3.org/2000/svg" // Keep the correct XML namespace
        >
            {/* Add an image inside SVG */}
            <image
                href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvZiyiyJT5L_Xhh_gA2HpdcbA_SdLc_O_VQ&s"
                width="50%"
                height="50%"
                preserveAspectRatio="xMidYMid meet"
            />
        </svg>
    );
}
