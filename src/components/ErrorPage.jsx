export default function ErrorPage() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-slate-100 to-blue-50">
			<h1 className="text-4xl font-bold text-red-500">404 - Not Found</h1>
			<p className="mt-4 text-lg text-gray-700">
				The page you are looking for does not exist.
			</p>
		</div>
	);
}
