
const webfeedCss: (string | Raw.Style)[] = [
	"HTML", {
		scrollSnapType: "y mandatory",
	},
	"HTML, BODY", {
		margin: 0,
		padding: 0,
		height: "100%",
	},
	"HTML", {
		overflowY: "auto",
	},
	"SECTION", {
		position: "relative",
		overflow: "hidden",
		height: "100%",
		paddingTop: "0.02px",
		paddingBottom: "0.02px",
		scrollSnapAlign: "start",
		scrollSnapStop: "always",
	}
];

//@ts-ignore
typeof module !== "undefined" && (module.exports = webfeedCss);
