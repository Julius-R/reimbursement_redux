import Layout from "../components/Layout";
import { PrismaClient } from "@prisma/client";
import withSession from "../lib/Session";
import User from "../components/User";
import Admin from "../components/Admin";
import { Container, Heading } from "@chakra-ui/react";

export default function Home({ user, reimbursements }) {
	return (
		<Layout title="Home Page" isLoggedIn={true}>
			<Container maxW="container.xl" p={10}>
				<Heading as="h1" mb={3}>
					Welcome,{" "}
					{user.user_firstname.charAt(0).toUpperCase() +
						user.user_firstname.slice(1)}
				</Heading>
				{user.user_role === "ADMIN" ? (
					<Admin user={user} reimbursements={reimbursements} />
				) : (
					<User user={user} reimbursements={reimbursements} />
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

	const client = new PrismaClient();
	let data;
	if (user.user_role === "ADMIN") {
		data = await client.reimbursements.findMany();
	} else {
		data = await client.reimbursements.findMany({
			where: {
				reimb_author_id: user.user_id
			}
		});
	}

	const reimbursements = JSON.parse(JSON.stringify(data));

	return {
		props: {
			user,
			reimbursements
		}
	};
});
