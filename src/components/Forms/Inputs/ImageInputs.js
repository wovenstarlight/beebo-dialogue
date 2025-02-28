import { Trans, useTranslation } from "react-i18next";
import "../../../constants/documentation";
import ColorSelector from "./ColorSelector";
import { splitAround } from "../../../utils/arrayUtils";

/**
 * Form fields for editing an Image block.
 * @param {object} args
 * @param {DataImage} args.data Data representing the values of this form's inputs.
 * @param {function} args.setData The setter for this form's inputs.
 * @param {boolean} [args.includePalette=true] `true` if the palette selector should be rendered; `false` if it should be omitted.
 * @returns A set of form fields corresponding to an Image block.
 */
export function SingleImageInputs({ data, setData, includePalette = true }) {
	const { t } = useTranslation();

	/** Sets the file to what's currently uploaded. */
	function uploadFile(e) {
		if (!e.target.files[0].type.startsWith("image/")) {
			window.alert(t("alerts.error_image_filetype"));
			return;
		}
		const reader = new FileReader();
		reader.addEventListener("load", () => {
			setData(obj => {
				return {
					...obj,
					image: reader.result,
				}
			});
		}, false);
		reader.readAsDataURL(e.target.files[0]);
	}

	/* BREAKDOWN:
		- palette selector for border color
		- file input for the actual image
	*/

	return <>
		{includePalette && <label className="labelcolor">
			<span className="labeltext">{t("forms.fields.palette")}</span>
			<ColorSelector color={data.color} setColor={(e) => setData({ ...data, color: e.target.value })} />
			<span className="explainer">{t("forms.fields.explain_image_palette")}</span>
		</label>}

		<label className="blockbtn labelimageupload">
			<span className="labeltext">{t("forms.fields.upload_image_single")}</span>
			<input type="file" accept="image/*" onChange={uploadFile} />
		</label>

		<label className="labelstretch">
				<input type="checkbox" checked={data.stretch} onChange={e => setData({ ...data, stretch: e.target.checked })} className="visuallyhidden" />
				<span className="icon" aria-hidden={true} />
				<span className="labeltext">{t("actions.stretch_image_single")}</span>
			</label>

		<div className="imagedata">
			<span className="imagelabel">{t("forms.fields.image_preview")}</span>
			<img
				src={data.image}
				alt={data.altText}
				className={data.stretch ? "stretch" : undefined}
			/>
		</div>
	</>;
}

/**
 * Form fields for creating Image blocks. Allows multiple images.
 * @param {object} args
 * @param {DataImageMultiple} args.data Data representing the values of this form's inputs.
 * @param {function} args.setData The setter for this form's inputs.
 * @param {boolean} [args.includePalette=true] `true` if the palette selector should be rendered; `false` if it should be omitted.
 * @returns A set of form fields corresponding to an Image block.
 */
export function MultipleImageInputs({ data, setData, includePalette = true }) {
	const { t } = useTranslation();

	/** Sets the list of files to what's currently uploaded. */
	function uploadFiles(e) {
		let images = [];

		for (let i = 0; i < e.target.files.length; i++) {
			const file = e.target.files[i];
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				if (!file.type.startsWith("image/")) {
					window.alert(t("alerts.error_image_filetype"));
					images.splice(0, images.length);
					return;
				}
				images.push({
					altText: file.name,
					image: reader.result,
				});
				// Trigger data update once all files have been converted to data URLs
				if (images.length === e.target.files.length)
					setData(values => {
						return {
							...values,
							images: images.map((imageObj, index) => {
								return {
									id: `${(new Date()).getTime()}_${index}`,
									...imageObj,
									stretch: true,
								}
							}),
						}
					});
			}, false);
			reader.readAsDataURL(file);
		}
	}

	/* BREAKDOWN:
		- palette selector for border color
		- multiple file input for the actual images
	*/

	return <>
		{includePalette && <label className="labelcolor">
			<span className="labeltext">{t("forms.fields.palette")}</span>
			<ColorSelector color={data.color} setColor={(e) => setData({ ...data, color: e.target.value })} />
			<span className="explainer">{t("forms.fields.explain_image_palette")}</span>
		</label>}

		<label className="blockbtn labelimageupload">
			<span className="labeltext">{t("forms.fields.upload_image_multiple")}</span>
			<input type="file" accept="image/*" required multiple onChange={uploadFiles} />
		</label>

		<section className="imagepreviews">
			{data.images.map((obj, index) => <MultipleImagesSingleInput
				key={obj.id}
				index={index}
				imageData={obj}
				allImages={data.images}
				setData={setData}
			/>)}
		</section>
	</>;
}

/** Input fields for a single Image in the multi-image form. Includes:
 * - Preview of the actual image (with original filename)
 * - Checkbox for whether to stretch this image to fill available space
 * - Reordering buttons (only if more than 1 image is present)
 * - Deletion button (only if more than 1 image is present)
 * @param {object} args
 * @param {int} args.index The 0-based index of this image in the list of images.
 * @param {DataImage} args.imageData Data representing this image.
 * @param {DataImage[]} args.allImages The list of all images, in which the current image is included.
 * @param {function} args.setData The setter for the image list's data.
 * @returns An input group for a single Image.
 */
function MultipleImagesSingleInput({ index, imageData, allImages, setData }) {
	const { t } = useTranslation();

	/** Sets whether the current image is stretched to fill available space or displayed at original size. */
	function setImageStretch(e) {
		setData(imagesData => { return {
			...imagesData,
			images: imagesData.images.slice(0, index).concat(
				{
					...imagesData.images[index],
					stretch: e.target.checked,
				},
				imagesData.images.slice(index + 1),
			),
		} });
	}

	/** Swaps the current image with its predecessor. */
	function moveImageUp() {
		let [pre, curr, post] = splitAround(allImages, imageData.id);
		setData(imagesData => { return {
			...imagesData,
			images: pre.slice(0, -1).concat(curr, pre.at(-1), post),
		} });
	}
	/** Swaps the current image with its successor. */
	function moveImageDown() {
		let [pre, curr, post] = splitAround(allImages, imageData.id);
		setData(imagesData => { return {
			...imagesData,
			images: pre.concat(post.at(0), curr, post.slice(1)),
		} });
	}

	/** Removes the current image from the list. */
	function deleteImage() {
		setData(imagesData => { return {
			...imagesData,
			images: imagesData.images.filter(img => img.id !== imageData.id),
		} });
	}

	return <div className="imagedata">
		<span className="imagelabel">{imageData.altText}</span>
		<img
			src={imageData.image}
			alt={t("forms.fields.image_preview")}
			className={imageData.stretch ? "stretch" : undefined}
		/>
		
		<div className="blockitemmods">
			<label className="labelstretch">
				<input type="checkbox" name={`inputstretch${index}`} checked={imageData.stretch} onChange={setImageStretch} className="visuallyhidden" />
				<span className="icon" aria-hidden={true} />
				<span className="labeltext"><Trans
					i18nKey="actions.stretch_image_multiple"
					values={{ index: index + 1 }}
					components={{ hidden: <span className="visuallyhidden" /> }}
				/></span>
			</label>
			
			{allImages.length > 1 && <>
				<button type="button" className="blockbtn movebtn" onClick={moveImageUp} disabled={allImages.at(0).id === imageData.id}>{t("actions.move_up")}</button>
				<button type="button" className="blockbtn movebtn" onClick={moveImageDown} disabled={allImages.at(-1).id === imageData.id}>{t("actions.move_down")}</button>
				<button type="button" className="blockbtn deletebtn" onClick={deleteImage}>{t("actions.delete")}</button>
			</>}
		</div>
	</div>;
}