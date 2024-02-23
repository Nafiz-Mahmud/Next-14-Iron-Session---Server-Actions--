"use client";
import { useFormState } from "react-dom";
import { loginAction } from "../actions";
const LoginForm = () => {
	const [state, formAction] = useFormState(loginAction, undefined);
	return (
		<form action={formAction}>
			<input type="text" name="username" required placeholder="username" />
			<input type="password" name="password" required placeholder="password" />
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button>Login</button>
			{state?.error && <p>{state.error}</p>}
		</form>
	);
};

export default LoginForm;
