import { withIronSession } from "next-iron-session";

function handler(req, res) {
	req.session.destroy();
	res.send("You have successfully logged out");
}

export default withIronSession(handler, {
	password: "complex_password_at_least_32_characters_long",
	cookieName: "myapp_cookiename"
	// if your localhost is served on http:// then disable the secure flag
	// cookieOptions: {
	// 	secure: process.env.NODE_ENV === "production"
	// }
});
