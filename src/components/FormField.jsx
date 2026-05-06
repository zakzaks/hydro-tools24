export default function FormField({ label, name, unit }) {
	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={name} className="text-sm font-medium text-gray-700">
				{label}
			</label>
			<div className="relative">
				<input
					className="w-full rounded-lg border border-gray-300 px-3 py-2.5 pr-14 text-gray-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
					type="number"
					step="any"
					name={name}
					id={name}
					placeholder="0"
				/>
				{unit && (
					<span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-gray-400">
						{unit}
					</span>
				)}
			</div>
		</div>
	);
}
