"use client";
import React from "react";
import useUserAuth, {User} from "@/hooks/useUserAuth";
import Link from "next/link";

export function HeroWelcome() {
	const user = useUserAuth() as User;

	return (
		<>
			<h2>Welcome back !</h2>
			<div className="card card-side bg-base-100 shadow-xl px-8">
				<div className={"avatar"}>
					<figure className={"w-48 rounded-full"}>
						<img
							src={user.image}
							alt="avatar"
						/>
					</figure>
				</div>
				<div className="card-body">
					<h2 className="card-title">{user.name}</h2>
					<div className="card-actions justify-end">
						<Link
							href={`mailto:${user.email}`}
							className="btn btn-primary link underline-offset-4">
							{/* eslint-disable-next-line react/no-unescaped-entities */}
							📨 Let's get in touch !
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
