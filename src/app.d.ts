import type { DefaultSession } from "@auth/core/types";

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};


declare module "@auth/sveltekit" {
	interface Session {
		user: {
			id: string;
		} & DefaultSession["user"];
	}
}