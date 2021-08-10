import Head from "next/head";
import withSession from "../lib/Session";
import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export default function Home({ user }) {
	const router = useRouter();

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				Hello There {user.user_uname}
			</main>
		</div>
	);
}

export const getServerSideProps = withSession(async function ({ req, res }) {
	const user = req.session.get("user");

	if (!user) {
		return {
			redirect: {
				destination: "/login",
				permanent: false
			}
		};
	}

	return {
		props: {
			user
		}
	};
});
