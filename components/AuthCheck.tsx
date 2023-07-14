"use client";

import {useSession} from "next-auth/react";
import React from "react";

type Props = React.PropsWithChildren<{fallbackComponent?: React.ReactElement}>;
export default function AuthCheck({children, fallbackComponent}: Props) {
	const {status} = useSession();

	if (status === "authenticated") return <>{children}</>;
	return <>{fallbackComponent}</>;
}
