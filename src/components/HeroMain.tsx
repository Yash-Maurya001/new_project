"use client"
import { motion } from "framer-motion"
import { HeroHighlight, Highlight } from "./ui/hero-highlight"

export function HeroHighlightDemo() {
	return (
		<HeroHighlight>
			<motion.h1
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: [20, -5, 0],
				}}
				transition={{
					duration: 0.5,
					ease: [0.4, 0.0, 0.2, 1],
				}}
				className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto my-[5vh] "
			>
				With insomnia, nothing&apos;s real. Everything is far away. Everything
				is a{" "}
				<Highlight className="text-black dark:text-white">
					copy, of a copy, of a copy.
				</Highlight>
			</motion.h1>
			<div className="flex justify-center items-center">
				<button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
						Button Main
					</span>
				</button>
			</div>
		</HeroHighlight>
	)
}
