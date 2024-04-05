import { FeaturePod } from "@/components/FeaturedPod"
import { GettingStarted } from "@/components/GettingStarted"
import { HeroHighlightDemo } from "@/components/HeroMain"

export default function Home() {
	return (
		<main className="  bg-black">
			<div className="w-full min-h-screen flex justify-center items-center">
				<HeroHighlightDemo />
			</div>
			<div className="w-full min-h-screen flex flex-col justify-center items-center">
				<h2 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold  text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto my-[5vh]">
					Features
				</h2>
				<GettingStarted />
			</div>
			<div className="w-full min-h-screen flex  flex-col justify-center items-center">
				<h2 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold  text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto my-[5vh]">
					Featured Podcasts
				</h2>
				<FeaturePod />
			</div>
		</main>
	)
}
