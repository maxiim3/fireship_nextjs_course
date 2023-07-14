import "./globals.css";
import type {Metadata} from "next";
import Link from "next/link";
import {cookies} from "next/headers";
import React from "react";
import AuthProvider from "@/components/AuthProvider";

export const metadata: Metadata = {
	title: "🔥",
	description: "Next.js Course",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<AuthProvider>
			<html lang="en">
				<body>
					<header className={"navbar bg-primary"}>
						<div className={"max-w-4xl w-full mx-auto flex justify-between px-2 py-4"}>
							<h1>Fireship 🔥 Next.js Course </h1>
							<nav>
								<ul className={"flex gap-x-2"}>
									{cookies().get("next-auth.session-token") ? (
										<li className={"link"}>
											<Link href={"api/auth/signout"}>Sign Out</Link>
										</li>
									) : (
										<li className={"link"}>
											<Link href={"/api/auth/signin"}>Sign in</Link>
										</li>
									)}
									<li className={"link"}>
										<Link href={"#"}>About</Link>
									</li>
									<li className={"link"}>
										<Link href={"#"}>Contacts</Link>
									</li>
								</ul>
							</nav>
						</div>
					</header>
					{children}
				</body>
			</html>
		</AuthProvider>
	);
}
