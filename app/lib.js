export const defaultSession = {
	isLoggedIn: false,
};

export const sessionOptions = {
	// .env - NEXTAUTH_SECRET = secret key
	// .env - NODE_ENV = development
	// password: process.env.NEXTAUTH_SECRET,
	password: "next-auth-session-secret-password-key",
	cookieName: "auth-session",
	cookieOptions: {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
	},
};
