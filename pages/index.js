import Layout from "../components/Layout";
import withSession from "../lib/Session";
import { useRouter } from "next/router";
import { Container, Box } from "@chakra-ui/react";

export default function Home({ user }) {
	return (
		<Layout title="Home Page" isLoggedIn={true}>
			<Container maxW="container.xl">
				<h1>Haha</h1>
				Hello There {user.user_uname}
			</Container>
		</Layout>
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
