import React from "react";
import { useTheme } from "@mui/material/styles";

const Logo = ({ width = 146, height = 38 }: SvgProps): JSX.Element => {
	const theme = useTheme();
	const colorPrimaryMain = theme.palette.primary.main;
	const colorPrimaryDark = theme.palette.primary.dark;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			fill="none"
			viewBox="0 0 146 38"
		>
			<path
				d="M9.40625 15.6719C11.5521 15.6719 13.3854 16.4323 14.9062 17.9531C16.4271 19.4635 17.1875 21.2969 17.1875 23.4531C17.1875 25.599 16.4271 27.4323 14.9062 28.9531C13.3854 30.474 11.5521 31.2344 9.40625 31.2344C7.95833 31.2344 6.65104 30.8854 5.48438 30.1875V26.9375C6.70312 27.9792 8.01042 28.5 9.40625 28.5C10.8021 28.5 11.9896 28.0052 12.9688 27.0156C13.9583 26.026 14.4531 24.8385 14.4531 23.4531C14.4531 22.0573 13.9583 20.8698 12.9688 19.8906C11.9896 18.901 10.8021 18.4062 9.40625 18.4062C8.01042 18.4062 6.81771 18.901 5.82812 19.8906C4.84896 20.8698 4.35938 22.0573 4.35938 23.4531H4.34375V37.3125H1.625V23.4531C1.625 21.2969 2.38542 19.4635 3.90625 17.9531C5.42708 16.4323 7.26042 15.6719 9.40625 15.6719ZM31.7812 23.4688C31.7812 22.0833 31.2865 20.8958 30.2969 19.9062C29.3177 18.9167 28.1302 18.4219 26.7344 18.4219C25.3385 18.4219 24.1458 18.9167 23.1562 19.9062C22.1771 20.8958 21.6875 22.0833 21.6875 23.4688C21.6875 24.8646 22.1771 26.0573 23.1562 27.0469C24.1458 28.026 25.3385 28.5156 26.7344 28.5156C28.1302 28.5156 29.3177 28.026 30.2969 27.0469C31.2865 26.0573 31.7812 24.8646 31.7812 23.4688ZM18.9531 23.4688C18.9531 21.3229 19.7135 19.4896 21.2344 17.9688C22.7552 16.4479 24.5885 15.6875 26.7344 15.6875C28.8802 15.6875 30.7135 16.4479 32.2344 17.9688C33.7552 19.4896 34.5156 21.3229 34.5156 23.4688C34.5156 25.625 33.7552 27.4635 32.2344 28.9844C30.7135 30.4948 28.8802 31.25 26.7344 31.25C24.5885 31.25 22.7552 30.4948 21.2344 28.9844C19.7135 27.4635 18.9531 25.625 18.9531 23.4688ZM37.2969 7.8125H40.0156V21.1094H41.75C43.2708 21.1094 44.9427 19.375 46.7656 15.9062H49.9062C48.5 18.4479 47.0625 20.4219 45.5938 21.8281C46.6458 21.8281 47.4948 22.1406 48.1406 22.7656C48.7969 23.3802 49.151 24.2083 49.2031 25.25V31H46.4688V26.5469C46.4688 25.7344 46.2656 25.0781 45.8594 24.5781C45.4531 24.0677 44.9427 23.8125 44.3281 23.8125H40.0156V31H37.2969V7.8125ZM54.2188 23.4531C54.2188 24.849 54.7083 26.0417 55.6875 27.0312C56.6771 28.0104 57.8698 28.5 59.2656 28.5C60.6615 28.5 61.8542 28.0052 62.8438 27.0156C63.5312 26.3281 63.974 25.5417 64.1719 24.6562L66.8906 25.0469C66.6094 26.526 65.901 27.8281 64.7656 28.9531C63.2448 30.474 61.4115 31.2344 59.2656 31.2344C57.1198 31.2344 55.2865 30.4792 53.7656 28.9688C52.2448 27.4479 51.4844 25.6094 51.4844 23.4531C51.4844 21.3073 52.2448 19.474 53.7656 17.9531C55.2865 16.4323 57.1198 15.6719 59.2656 15.6719C61.3073 15.6719 62.9375 16.2135 64.1562 17.2969C65.3854 18.3698 66.1042 19.2865 66.3125 20.0469L56.3594 25.5L55.2031 23.5L62.4531 19.5312C61.5469 18.7812 60.4844 18.4062 59.2656 18.4062C57.8698 18.4062 56.6771 18.901 55.6875 19.8906C54.7083 20.8802 54.2188 22.0677 54.2188 23.4531ZM54 7.21875H56.8594L61.7812 12.6094H59.4531L54 7.21875ZM77.2812 15.6719C79.4271 15.6719 81.2604 16.4323 82.7812 17.9531C84.3021 19.4635 85.0625 21.2969 85.0625 23.4531C85.0625 25.599 84.3021 27.4323 82.7812 28.9531C81.2604 30.474 79.4271 31.2344 77.2812 31.2344C75.8333 31.2344 74.526 30.8854 73.3594 30.1875V26.9375C74.5781 27.9792 75.8854 28.5 77.2812 28.5C78.6771 28.5 79.8646 28.0052 80.8438 27.0156C81.8333 26.026 82.3281 24.8385 82.3281 23.4531C82.3281 22.0573 81.8333 20.8698 80.8438 19.8906C79.8646 18.901 78.6771 18.4062 77.2812 18.4062C75.8854 18.4062 74.6927 18.901 73.7031 19.8906C72.724 20.8698 72.2344 22.0573 72.2344 23.4531H72.2188V37.3125H69.5V23.4531C69.5 21.2969 70.2604 19.4635 71.7812 17.9531C73.3021 16.4323 75.1354 15.6719 77.2812 15.6719ZM89.5625 23.4531C89.5625 24.849 90.0521 26.0417 91.0312 27.0312C92.0208 28.0104 93.2135 28.5 94.6094 28.5C96.0052 28.5 97.1979 28.0052 98.1875 27.0156C98.875 26.3281 99.3177 25.5417 99.5156 24.6562L102.234 25.0469C101.953 26.526 101.245 27.8281 100.109 28.9531C98.5885 30.474 96.7552 31.2344 94.6094 31.2344C92.4635 31.2344 90.6302 30.4792 89.1094 28.9688C87.5885 27.4479 86.8281 25.6094 86.8281 23.4531C86.8281 21.3073 87.5885 19.474 89.1094 17.9531C90.6302 16.4323 92.4635 15.6719 94.6094 15.6719C96.651 15.6719 98.2812 16.2135 99.5 17.2969C100.729 18.3698 101.448 19.2865 101.656 20.0469L91.7031 25.5L90.5469 23.5L97.7969 19.5312C96.8906 18.7812 95.8281 18.4062 94.6094 18.4062C93.2135 18.4062 92.0208 18.901 91.0312 19.8906C90.0521 20.8802 89.5625 22.0677 89.5625 23.4531ZM112.031 31.2344C109.885 31.2344 108.052 30.4792 106.531 28.9688C105.01 27.4479 104.25 25.6094 104.25 23.4531C104.25 21.3073 105.01 19.474 106.531 17.9531C108.052 16.4323 109.885 15.6719 112.031 15.6719C113.479 15.6719 114.786 16.0208 115.953 16.7188V19.9688C114.734 18.9271 113.427 18.4062 112.031 18.4062C110.635 18.4062 109.443 18.901 108.453 19.8906C107.474 20.8802 106.984 22.0677 106.984 23.4531C106.984 24.849 107.474 26.0417 108.453 27.0312C109.443 28.0104 110.635 28.5 112.031 28.5C113.427 28.5 114.615 28.0104 115.594 27.0312C116.583 26.0417 117.078 24.849 117.078 23.4531H117.094V7.8125H119.812V23.4531C119.812 25.6094 119.052 27.4479 117.531 28.9688C116.01 30.4792 114.177 31.2344 112.031 31.2344ZM123.016 15.9062H125.734V31H123.016V15.9062ZM124.375 12.7656C123.948 12.7656 123.578 12.6146 123.266 12.3125C122.964 12 122.812 11.6302 122.812 11.2031C122.812 10.7656 122.964 10.3958 123.266 10.0938C123.578 9.79167 123.948 9.64062 124.375 9.64062C124.802 9.64062 125.167 9.79167 125.469 10.0938C125.781 10.3958 125.938 10.7656 125.938 11.2031C125.938 11.6302 125.781 12 125.469 12.3125C125.167 12.6146 124.802 12.7656 124.375 12.7656ZM144.297 23.4531V31H141.562V23.4531C141.562 22.0677 141.068 20.8802 140.078 19.8906C139.099 18.901 137.911 18.4062 136.516 18.4062C135.12 18.4062 133.927 18.901 132.938 19.8906C131.958 20.8802 131.469 22.0677 131.469 23.4531C131.469 24.849 131.958 26.0417 132.938 27.0312C133.927 28.0104 135.12 28.5 136.516 28.5C137.349 28.5 138.115 28.3229 138.812 27.9688L140.062 30.4062C138.99 30.9583 137.807 31.2344 136.516 31.2344C134.37 31.2344 132.536 30.4792 131.016 28.9688C129.495 27.4479 128.734 25.6094 128.734 23.4531C128.734 21.3073 129.495 19.474 131.016 17.9531C132.536 16.4323 134.37 15.6719 136.516 15.6719C138.661 15.6719 140.495 16.4323 142.016 17.9531C143.536 19.474 144.297 21.3073 144.297 23.4531Z"
				fill={colorPrimaryMain}
			/>
		</svg>
	);
};

export default Logo;