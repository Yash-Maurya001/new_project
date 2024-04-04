import { StickyScrollRevealDemo } from "@/components/GettingStarted"
import { HeroHighlightDemo } from "@/components/HeroMain"

export default function Home() {
	return (
		<main className="w-full min-h-screen  bg-black">
			<HeroHighlightDemo />
			<StickyScrollRevealDemo />
		</main>
	)
}
