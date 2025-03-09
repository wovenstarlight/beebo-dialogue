/** Deep-freezes the given objects.
 * @param  {...object} objs Indefinitely nested objects.
 */
export default function deepFreeze(...objs) {
	objs.forEach(obj => {
		if (obj == null) return;
		Object.freeze(obj);
		deepFreeze(...(Object.values(obj)).filter(val => (Array.isArray(val) || Object.prototype.toString.call(val) === "[object Object]")));
	});
};