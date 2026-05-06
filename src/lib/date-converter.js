export function formatTime(totalSeconds) {
	const days = Math.floor(totalSeconds / (24 * 3600));
	const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = Math.round(totalSeconds % 60);

	return `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;
}
