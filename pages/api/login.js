import { withIronSession } from "next-iron-session";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function handler(req, res) {
	if (!req.method === "POST") {
		res.status(405).send("Method not allowed");
	}

	const { email, password } = req.body;

	const user = await prisma.users.findMany({
		where: {
			user_email: email,
			user_password: password
		}
	});

	req.session.set("user", user[0]);
	console.log(user[0]);
	await req.session.save();
	res.send("session created");
}

export default withIronSession(handler, {
	password: "complex_password_at_least_32_characters_long",
	cookieName: "myapp_cookiename"
	// if your localhost is served on http:// then disable the secure flag
	// cookieOptions: {
	// 	secure: process.env.NODE_ENV === "production"
	// }
});
