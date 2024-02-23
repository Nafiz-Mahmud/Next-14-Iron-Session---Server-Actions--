import { getSessionAction } from "../actions";
import Link from "next/link";
import LogoutForm from "./LogoutForm";
export default async function Nav() {
	const session = await getSessionAction();
	console.log(session);
	return (
		<nav>
			<Link href="/">Home</Link>
			<Link href="/premium">Premium</Link>
			<Link href="/profile">Profile</Link>
			{session.isLoggedIn ? <LogoutForm /> : <Link href="/login">Login</Link>}
		</nav>
	);
}
