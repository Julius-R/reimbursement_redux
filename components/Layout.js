import Head from "next/head";
import { useRouter } from "next/router";
import { MoonIcon } from "@chakra-ui/icons";
import {
	Flex,
	Container,
	Box,
	Text,
	useColorMode,
	Spacer,
	Button
} from "@chakra-ui/react";

const Layout = ({ title, children, isLoggedIn }) => {
	const router = useRouter();
	const { toggleColorMode } = useColorMode();

	async function handleLogout() {
		await fetch("/api/logout", {
			method: "GET"
		});
		router.push("/login");
	}

	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box
				w="100%"
				p={4}
				borderBottom="2px"
				borderBottomColor="green.400"
				boxShadow="sm">
				<Container maxWidth="full" px={20}>
					<Flex justifyContent="center" alignItems="center">
						<Text fontSize="xl">
							[Insert Creative Name Here LLC]
						</Text>
						<Spacer />
						{isLoggedIn && (
							<Button
								px={6}
								mr={3}
								colorScheme="green"
								onClick={() => handleLogout()}>
								Logout
							</Button>
						)}
						<MoonIcon boxSize={6} onClick={toggleColorMode} />
					</Flex>
				</Container>
			</Box>
			{children}
		</>
	);
};

export default Layout;
