export default function FormField({ label, name }) {
	return (
		<div className="flex flex-col gap-4">
			<label htmlFor={name}>{label}</label>
			<input
				className="border border-black"
				type="number"
				step="any"
				name={name}
				id={name}
			/>
		</div>
	);
}
