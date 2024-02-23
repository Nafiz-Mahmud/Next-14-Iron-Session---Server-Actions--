import { redirect } from "next/navigation";
import {
	getSessionAction,
	changePremiumAction,
	changeUsernameAction,
} from "../actions";

export default async function ProfilePage() {
	const session = await getSessionAction();
	if (!session.isLoggedIn) {
		redirect("/login");
	}

	return (
		<div className="profile">
			<h1 className="font-bold text-[2rem]">Welcome To The Profile Page</h1>
			<h1>
				Welcome, <b>{session.username}</b>
			</h1>
			<span>
				You are a <b>{session.isPro ? "Pro" : "Free"}</b> user!
			</span>
			<form action={changePremiumAction}>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button>{session.isPro ? "Cancel" : "Buy"} premium</button>
			</form>
			<form action={changeUsernameAction}>
				<input type="text" name="updateName" placeholder={session.username} />
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button>Update Username</button>
			</form>
		</div>
	);
}
