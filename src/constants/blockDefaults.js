import { CHOICE, DIALOGUE, IMAGE, OPTION } from "./blockNames";
import ALL_COLORS from "./colors";
import "./documentation";
import deepFreeze from "../utils/deepFreeze";

// #region Dialogue
/** Default data for a dialogue block. For filling in templates.
 * @type {DataDialogue}
 */
export const DEFAULT_DIALOGUE = {
	color: Object.keys(ALL_COLORS)[0],
	portrait: `misc/someone_shadow.png`,
	speaker: "defaults.dialogue.speaker",
	dialogue: "defaults.dialogue.dialogue",
};

/** Blank data for a dialogue block. For initializing dialogue objects.
 * @type {DataDialogue}
 */
export const DEFAULT_DIALOGUE_BLANK = {
	color: DEFAULT_DIALOGUE.color,
	portrait: "",
	speaker: "",
	dialogue: "",
}
// #endregion

// #region Multiple choice
// #region Flat version
/** Default data for a choice block. For filling in templates.
 * @type {DataChoice}
 */
export const DEFAULT_CHOICE = {
	color: Object.keys(ALL_COLORS)[0],
};

/** Blank data for a choice block. For initializing choice objects.
 * @type {DataChoice}
 */
export const DEFAULT_CHOICE_BLANK = {
	color: DEFAULT_CHOICE.color,
}
// #endregion

// #region Single option
/** Default data for a single option in a choice block. For filling in templates.
 * @type {DataChoiceOption}
 */
export const DEFAULT_CHOICE_OPTION = 
{
	text: "defaults.choice.text",
	selected: false,
};

/** Blank data for a single option in a choice block. For initializing option objects.
 * @type {DataChoiceOption}
 */
export const DEFAULT_CHOICE_OPTION_BLANK = 
{
	text: "",
	selected: false,
};
// #endregion
// #endregion

// #region Image
/** Default data for an image block. For filling in templates.
 * @type {DataImage}
 */
export const DEFAULT_IMAGE = {
	color: Object.keys(ALL_COLORS)[0],
	// Bar conversation
	image: "data:image/gif;base64,R0lGODlh/ABmAPAAACcAKodYiiH/C05FVFNDQVBFMi4wAwEAAAAh/wtJbWFnZU1hZ2ljaw1nYW1tYT0wLjQ1NDU1ACH5BAAjAP8AIf4oR0lGIGNyZWF0ZWQgd2l0aCBodHRwczovL2V6Z2lmLmNvbS9tYWtlcgAsAAAAAPwAZgAAAv+EjxCb7Q+jnLTai7PeevkPBpnHleaJpurahUoobgxL1/aNl+Arwlh8AOaGxKJRt/vwSBZh0HmMSqdDWI/hakKg1K73+7NexzNKjKsAq9fshBgLZ5rT27b9Ln3HyZWeBI0XKIiiF7fURxcBOMjYaFY4djix2EDpeIm5pMfzgqiV+WcJOgVJAjf3M/pwpspWaqpUI9oINNta9UpmO3K5abB7a5MLWyYbuPOEgBUMNpx1A4wLJRfUyezljAztylWsXJ2nPZodixNtXAnodM7hbX1BHUVebv41vbieaI4P/8SONO9fvy7ILOXTh+7PJ2UCRwQ00nBLPImUpoFLOAmVA3f/sgJGXKii2C56vzZeZHFvosFQOTwe+ZjMTQsh3b6hZHjQZp1JMDfOy0NIXbuSJk8S0llJpiKGO1H+BIokowyhMVPUUnryDdGS8fw4JUdq6iyBKt30vKoULUKcSMt4XfE0LLxo/5YhTQNTbTWad7Gu9drzVzZ7/dR19WnF31aEb3XYnOGN7yq/4AILHtZs4L27ZybiFNmY69HFmkx9jrWum+XLr9aM3MqRJkeKctyFlmG0rL/Ee186UwPMz2zGiDfHtPhRrZKcpcV5FgY289yVp3M9hkwaN1fhi2Xz7l3kIWEajT2yAr+WV/dEerVWhui+uvSQ71iDTW20w8Xzonf7/3i3Gm2QlDYefV09VFN6qbxHTWq+5AcdZgQSBBcnZt23Sl777XbhfzIFWFwWYjRHRWCdpSQhiG1l1xxJSanY4XccFgIRfZel0xqE5LFVIYzV0bhXfDMNp6N+n/knJIsYKTiUj0ha1+JzLSxlI44j1uFkVjdlGaV5RE5ZlFU7cimYkk2GZ559UjoW5gmr3SbNlmh6qaZDz1RVpHo9liinNF6CZpVFfbEJkklkJsXTmnCS96eHfUgZ2aBDSWSWVHJlKOM3WTZ6ZSh3UqaXm4oAqhCfmGZKWYScinMqq35JNtqprDHV36UxoppnSKt+aiWvqZppZIhRaopNr0nyt8+uLv/+qItuv04aYqe12vqkjMhCo+yyLarJqqBitorqouFFK+21qmZLLre8MicquL6KO+6t5QKra7ZuNYuvkOy2a6yj01Kb43t+osuJC+45Cuu38sYHLxEoJplroPZ2RuCVDEsKLbPWMhnvwtpyObEhBov4IHs3eexvww6T66LKEttb8HIFJUZPqLH+RmyBC09GZsgxE7PHzA1GrGcSQP5Lrca2wQcz0JpsS+KGJ7P83KGTUU1SzxPfOCKUbSrc78fAhY2wbyGf3bSAywqHdtdk85Zv241ew7G/6BWLsrryEMwMPq4+C1W1TNjdEt99FyfJ1fMJ7t2XHe1Kt4JBU7W4uir/WW25eNdU9Pd2mPdVcpCO1zs33X77ihfqpJumdE24Mvrn5uK+HvfjBrce6YDJuqTK7VgjF7pYbjN+mNdf8Y7J8G+L1KXqiWrV+MWDYRtdL9AvX1vzzqutfI5xB297KdZv8jCN0zfRWi3Wac60tIKkj7vR5z8vPs5p4rG92fUTj1pc9NcvPu0FMHIOwwyU7ve/gCXQf204WjgkpDf+6e4RcmMfAQvHQAkqcIEVHCAjCNe+Dk4QfSLc4AUHVkL3kTCFEPugCufEwvx5KoZrOmEBaVjD6ZSwdy0sEQ3DtzUbvk+ED8xg5ObnQ2UJETgjXKITnwjFKPLQeFKsohWviEIZP0rRhFjsohe/iDLw9c2IYCyjGc+Ivc6N8YVobKMbt6hEJ+LsjXSsox3viMc86nGPfOyjH/8IyEAKcpCEbEUBAAAh/wtJbWFnZU1hZ2ljaw1nYW1tYT0wLjQ1NDU1ACH5BAAjAP8ALAAAAAD8AGYAAAL/hI8QG+kPo5y02ouz3lyzDzLb0pXmiabqOoZK2HAxS9f2jZfg28DZ/MoJh8QiyiXyYYAGpvEJjQ5hPZLr4mxKt9zuiVoNiyyxLMmLTqsRYKv7TFZIsuu6XdgO8+iP8vwOGHiT98YTJzfBJ7jISEZoOEah6DDZaHm5lwdZiYiFKcn5CUWY5FYRyiYK4aeqRloayYIqODPbivMKa/vT+Kh165ULixv4kQAXtAtMI6w0WBfbhKw1vTzavEOcVh3Ud6D8la2KLf4c3MfHBC7jxJ0YXURujHd+rKjeiXu/xLbeIQ/Phr9wYyrhy1eDE6p2A38AjKcvVMBUx76ZO4VxVcNT/wA3epIFZ9Y8ihV/MbM30mKidzk6ejyUoho4ZGZIqgAik9JKUIMeGvHoDiE/oSaJ6rBZUmUEnOkSdhylI6hSD02/vex0cGqbolV0XpUmL8rMhVHb2bs5lZrWpVlpGi1LTixVD/96JJWGtqjatavuJtNLMK4UkW8NIQXrrCBSu1+U1sr6FrLKr5mEcSEsNNLBlJRSWvF6RCuVfOUQcpNaF1sXW6y63Z2ocWTOjbVQ6rQKJhXlOarreeq61CbnTP0AMzZRu/JtxFdwxwu7mqpBlL1/KS78Uc5j16Rz634u+LJA009JY23M9TxX79bBs2fuG63Mp+qSHzXZWns/7yHdk/9CHJ0shuEWVk3YZdReLPVpclhPzewRoHzzFahRTI4RSF1zy7X0ng+l/STggARadiB67XX2nje7oeOLcy22tMJjDOXS4EnOxVjiEdWJ4QyMeWHI3FZ+XQQYcjkG1huD7Aw35H0opugNETgJuOKTcSmpY3A/yvdTfqFVmSF0lVF2Go5UXvPVcRy6pBlsRjb5z0lg/oHjnCOyeQZqVn44zVWsrWSnlrwxaVGgY+LJ2kQ5pfVmX2cFZ2iUsfX4HR6IQskiodypZyFb+0myRTpYFjrFpaO9Qymcfg5aRpuSgZgppmo6aOqHYWpaZJps6VLOrE/M+GKNINVq6508Dmdgp7H/pugrrLeeeuKaxMJ2xaiZmblsqs1CtGeHRTIzLaFI/HfYqpNCuS23xnp7JFzhFjcujWnpmi176UrZLbSIBBqubMce2qqGU2K7H7l7hZqvhvuW2m/AyikhZHoEr6vvvVPUa6uhDef5r4ej2qdskB+3O17C7mi88SbGxLtDr4yaWN3BCNfbF8oNq/wGrxx79nKj8xisX4T5DmhxjDfzSpzHAvfspMlmRSros4n5RyxYAB+L6bdNS12V0CILGenGYosdmb4Vjb0VsK9oh/bN1tyjMKnxfR2spdNaU3axQc999Z2/vou3GTvvg4baArsp0N2BV0ico3xbq6dTteKNXdyF/0ZOJN1lIj7spZRPkio1esfkYcHojiml57esvKvlWGO+RG5MjQy05C6Ng0TrGV8NO6ujzY7l62YbfTsmsp/bo/ChO6IJ8BErnzXpYvaSNsay8W45KP/J6Av00XdeezGPGN58zBytzf32PqG5PDTomz7+9KjSmGTxd7TfJf0UV7u+9pbJiyjKUS1+a8Ne3ZAnr/PhiRbfk1YCDwW/8PivbfITYEQqqDnzzY+CGrxf9gbIwYhhIYQksiAISfjBDaJweIA4YOpWiD8FwrB3JrTdDF8CQ1GIsHAzpFW/ariIEA7GfibsIPsmB8RQhS+JTGyiE5+IuxJCcYpUrKIDYzhFKTxacYtc7KLutChADHpxjGQsYwR3aEEXmnGNbHQi4GpoxDbKcY50rKMd74jHPOpxj3zsox//CMhACvISBQAAOw==",
	stretch: true,
};

/** Blank data for an image block. For initializing image objects.
 * @type {DataImage}
 */
export const DEFAULT_IMAGE_BLANK = {
	color: DEFAULT_IMAGE.color,
	image: "",
	stretch: DEFAULT_IMAGE.stretch,
}
// #endregion

deepFreeze(
	DEFAULT_DIALOGUE, DEFAULT_DIALOGUE_BLANK,
	DEFAULT_CHOICE, DEFAULT_CHOICE_BLANK,
	DEFAULT_CHOICE_OPTION, DEFAULT_CHOICE_OPTION_BLANK,
	DEFAULT_IMAGE, DEFAULT_IMAGE_BLANK,
);

/**
 * Returns the default values for a given block type, whether empty or non-empty.
 * @param {object} args
 * @param {BlockType|"option"} args.type The type of block or block component to retrieve defaults for.
 * @param {boolean} [args.blank=false] `true` to get the empty data object for the block `type`, `false` to get the non-empty defaults for the block `type`.
 * @returns The requested block type's defaults.
 */
export function getDefaults({ type, blank = false }) {
	switch (type) {
		case IMAGE:
			return blank ? DEFAULT_IMAGE_BLANK : DEFAULT_IMAGE;
		
		case CHOICE:
			return blank ? DEFAULT_CHOICE_BLANK : DEFAULT_CHOICE;
		
		case OPTION:
			return blank ? DEFAULT_CHOICE_OPTION_BLANK : DEFAULT_CHOICE_OPTION;

		case DIALOGUE:
		default:
			return blank ? DEFAULT_DIALOGUE_BLANK : DEFAULT_DIALOGUE;
	}
}