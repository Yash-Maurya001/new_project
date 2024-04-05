function FooterMain() {
	return (
		<>
			<footer className="bg-black/90 h-[5vh] text-white  pb-3 pt-2 flex items-center justify-between px-6">
				<div className="flex space-x-4">
					<div className="h-8 w-8">Logo</div>
					{/* Replace with your logo path */}
					<a href="/about" className="hover:underline">
						About
					</a>
					<a href="/contact" className="hover:underline">
						Contact
					</a>
					<a href="/contribute" className="hover:underline">
						Contribute
					</a>
				</div>
				<p>© {new Date().getFullYear()} Your Company Name</p>
			</footer>
		</>
	)
}

export default FooterMain
