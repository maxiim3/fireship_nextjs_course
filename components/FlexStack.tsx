import React from "react";
import {styled} from "@phntms/css-components";

const FlexStack = styled("div", {
	css: "flex",
	variants: {
		dir: {
			horizontal: "flex-row",
			vertical: "flex-col",
		},
	},
});

export default FlexStack;
