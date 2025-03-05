import { useRef } from "react";
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
	function uploadFile(file) {
		if (!file.type.startsWith("image/")) {
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
		reader.readAsDataURL(file);
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

		<FileUploadInput uploadHandler={uploadFile} />

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
	function uploadFiles(files) {
		let images = [];

		for (let i = 0; i < files.length; i++) {
			const file = files[i];
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
				if (images.length === files.length) {
					images.sort((a, b) => a.altText.localeCompare(b.altText));
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
				}
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

		<FileUploadInput
			uploadHandler={uploadFiles}
			allowMultiple={true}
			isRequired={true}
		/>

		{data.images.length > 0 && <section className="imagepreviews">
			{data.images.map((obj, index) => <MultipleImagesSingleInput
				key={obj.id}
				index={index}
				imageData={obj}
				allImages={data.images}
				setData={setData}
			/>)}
		</section>}
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

/** File input for uploading images, with both a drag-and-drop area and a clickable button.
 * @param {object} args
 * @param {function} args.uploadHandler Takes a `File` or `FileList` (depending on `allowMultiple`) and uploads them.
 * @param {boolean} [args.allowMultiple=false] `true` if this input should allow the user to select more than one file; `false` otherwise.
 * @param {boolean} [args.isRequired=false] `true` if this input must be filled in to submit the form; `false` otherwise.
 */
function FileUploadInput({ uploadHandler, allowMultiple = false, isRequired = false }) {
	const { t } = useTranslation();
	/** Reference to the file input, for keeping it updated with dragged & dropped files */
	const fileInput = useRef();
	/** Reference to the outlined drag/drop box, for highlighting when hovered. */
	const dropContainer = useRef();
	/** Tracks whether {@link dropContainer} is being hovered over; `>= 1` when it is being hovered. */
	const dragCounter = useRef(0);

	/** Resets any hover styling on {@link dropContainer} and calls the {@link uploadHandler file upload handler}. */
	function handleDrop(e) {
		e.preventDefault();
		// Fetch files
		const files = e.dataTransfer.files;

		// Let the input know about the files to satisfy `required` if present
		fileInput.current.files = files; 

		// Disable hover styling
		dragCounter.current = 0;
		dropContainer.current.classList.remove("dragover");

		// And handle the uploads
		if (files.length > 0) {
			uploadHandler(allowMultiple ? files : files[0]);
		}
	};

	/** Enables hover styling on {@link dropContainer}. */
	function handleDragEnter(e) {
		e.preventDefault();
		dragCounter.current ++;
		dropContainer.current.classList.add("dragover");
	}

	/** Disables hover styling on {@link dropContainer}. */
	function handleDragLeave(e) {
		e.preventDefault();
		dragCounter.current --;
		if (dragCounter.current === 0) dropContainer.current.classList.remove("dragover");
	}

	return (
	<label
		className="labelimageupload"
		onDragEnter={handleDragEnter}
		onDragLeave={handleDragLeave}
	>
		<div
			id="dragdrop"
			ref={dropContainer}
			onDrop={handleDrop}
			onDragOver={(e) => e.preventDefault()}
		>
			<p className="toplabel">{t("actions.drag_drop_image", {
				context: allowMultiple ? "multiple" : "single",
			})}</p>
			<p className="blockbtn labeltext">{t("actions.browse_files", {
				context: allowMultiple ? "multiple" : "single",
			})}</p>
		</div>
		<input
			type="file"
			accept="image/*"
			ref={fileInput}
			required={isRequired}
			multiple={allowMultiple}
			onChange={(e) => uploadHandler(e.target.files)}
		/>
	</label>
	);
}