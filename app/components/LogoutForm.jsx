import { logoutAction } from "../actions";

export default function LogoutForm() {
	return (
		<form action={logoutAction}>
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button>Logout</button>
		</form>
	);
}
