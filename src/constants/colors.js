import deepFreeze from "../utils/deepFreeze";

const ALL_COLORS = {
	purple:		"PURPLE",
	orange:		"ORANGE",
	gray:		"GRAY",
	red:		"RED",
	royalblue:	"ROYAL_BLUE",
	violet:		"VIOLET",
	pink:		"PINK",
	green:		"GREEN",
	cornflower:	"CORNFLOWER_BLUE",
	yellow:		"YELLOW",
	darkgray:	"DARK_GRAY",
	skyblue:	"SKY_BLUE",
};

deepFreeze(ALL_COLORS);

export default ALL_COLORS;