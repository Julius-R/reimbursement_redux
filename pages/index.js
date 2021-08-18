import Layout from "../components/Layout";
import withSession from "../lib/Session";
import User from "../components/User";
import Admin from "../components/Admin";
import { Container, Heading } from "@chakra-ui/react";

export default function Home({ user }) {
	return (
		<Layout title="Home Page" isLoggedIn={true}>
			<Container maxW="container.xl" p={10}>
				<Heading as="h1" mb={3}>
					Welcome,{" "}
					{user.user_firstname.charAt(0).toUpperCase() +
						user.user_firstname.slice(1)}
				</Heading>
				{user.user_role === "ADMIN" ? (
					<Admin user={user} />
				) : (
					<User user={user} />
				)}
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
