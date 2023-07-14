import AuthCheck from "@/components/AuthCheck";
import React from "react";
import Link from "next/link";
import FlexStack from "@/components/FlexStack";
import {HeroWelcome} from "@/components/HeroWelcome";

export default function Home() {
	return (
		<main className={"hero h-[100vmin] prose mx-auto "}>
			<FlexStack
				dir={"vertical"}
				className={"hero-content text-center gap-2"}>
				<h1>Fireship 🔥</h1>
				<AuthCheck
					fallbackComponent={
						<>
							<p>You are not connected</p>
							<Link
								className={"btn btn-primary"}
								href={"/api/auth/signin"}>
								Sign up!
							</Link>
						</>
					}>
					<HeroWelcome />
				</AuthCheck>
			</FlexStack>
		</main>
	);
}
