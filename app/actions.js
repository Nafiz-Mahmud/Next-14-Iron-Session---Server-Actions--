"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { defaultSession, sessionOptions } from "./lib";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// lama

// biome-ignore lint/style/useConst: <explanation>
let username = "john";
// biome-ignore lint/style/useConst: <explanation>
let isPro = false;

// biome-ignore lint/style/useConst: <explanation>
let isBlocked = false;

export async function getSessionAction() {
	const session = await getIronSession(cookies(), sessionOptions);
	if (!session.isLoggedIn) {
		session.isLoggedIn = defaultSession.isLoggedIn;
	}

	// CHECK THE USER IN THE DB for conformation of the user data ( use only if needed)
	session.isBlocked = isBlocked;
	session.isPro = isPro;

	return session;
}

export async function loginAction(prevState, formData) {
	const session = await getSessionAction();
	const formUsername = formData.get("username");
	const formPassword = formData.get("password");
	console.log(formUsername, formPassword, session);
	// CHECK USER IN THE DB
	// const user = await db.getUser({username,password})

	if (formUsername !== username) {
		console.log("Wrong Credentials!!!");
		return { error: "Wrong Credentials!" };
	}

	session.userId = "1";
	session.username = formUsername;
	session.isPro = isPro;
	session.isLoggedIn = true;

	await session.save();
	redirect("/");
}
export async function logoutAction() {
	const session = await getSessionAction();
	session.destroy();

	redirect("/");
}

export async function changePremiumAction() {
	const session = await getSessionAction();

	// change user premium/free status in the db
	isPro = !session.isPro;

	session.isPro = isPro;

	await session.save();

	revalidatePath("/profile");
}

export async function changeUsernameAction(formData) {
	const session = await getSessionAction();

	const newUsername = formData.get("updateName");

	// change user's username status in the db
	username = newUsername;

	session.username = username;

	await session.save();

	revalidatePath("/profile");
}
