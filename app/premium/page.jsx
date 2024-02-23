import { redirect } from "next/navigation";
import Link from "next/link";
import { getSessionAction } from "../actions";
export default async function PremiumPage() {
	const session = await getSessionAction();
	if (!session.isLoggedIn) {
		redirect("/");
	}
	if (!session.isPro) {
		return (
			<div className="notPremium">
				<h1>Only premium users can see the content!</h1>
				<Link href="/profile">
					Go to the profile page to upgrade to premium
				</Link>
			</div>
		);
	}
	return (
		<div className="premium">
			<h1 className="font-bold text-[2rem]">Welcome To The Premium Page</h1>
			<ul>
				<li>Apple</li>
				<li>Orange</li>
				<li>Banana</li>
			</ul>
		</div>
	);
}
