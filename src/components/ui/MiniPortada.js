export default function MiniPortada({
	imageSrc = '',
	imageAlt = '',
	title = '',
	description = '',
}) {
	return (
		<div className="relative w-full min-h-60 md:h-70 overflow-hidden rounded-b-lg">
			<img
				src={imageSrc}
				alt={imageAlt}
				className="absolute inset-0 w-full h-full object-cover object-top"
			/>
			<div className="absolute inset-0 bg-linear-to-r from-[#111827]/60 via-transparent to-[#111827]/20"></div>
			<div className="relative z-10 max-w-6xl mx-auto h-full flex items-center justify-center md:justify-start px-6 md:px-12 pt-16 md:pt-0">
				<div className="text-white">
					{title ? (
						<h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{title}</h1>
					) : null}
					{description ? (
						<p className="mt-3 max-w-2xl text-sm md:text-base text-white/90">{description}</p>
					) : null}
				</div>
			</div>
		</div>
	);
}