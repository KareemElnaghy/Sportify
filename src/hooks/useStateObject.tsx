"use client";

import { useState, useMemo } from "react";

// export type ShallowState<T> = {
// 	[P in keyof T]: Readonly<T[P]>;
// };

export function useStateObject<S extends object>(
	initialState: S | (() => S)
): S {
	const [state, setState] = useState(initialState);
	return useMemo(
		() =>
			new Proxy<S>(state, {
				set: (target: S, prop: string | symbol, value: any) => {
					// Only really care about setting state, so do a partial set based on the key
					setState((prevState: S) => ({ ...prevState, [prop]: value }));
					return true;
				},
			}),
		[state, setState]
	);
}
