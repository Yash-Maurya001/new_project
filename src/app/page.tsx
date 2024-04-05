import { FeaturePod } from "@/components/FeaturedPod"
import { GettingStarted } from "@/components/GettingStarted"
import { HeroHighlightDemo } from "@/components/HeroMain"

export default function Home() {
	return (
		<main className="  bg-black">
			<div className="w-full min-h-screen flex justify-center items-center">
				<HeroHighlightDemo />
			</div>
			<div className="w-full min-h-screen flex justify-center items-center">
				<GettingStarted />
			</div>
			<div className="w-full min-h-screen flex justify-center items-center">
				<FeaturePod />
			</div>
		</main>
	)
}
