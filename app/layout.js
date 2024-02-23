// import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Next Auth App",
	description: "Next Auth Tutorial",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<div className="container">
					<Nav />
					<div className="content">{children}</div>
				</div>
			</body>
		</html>
	);
}
