import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import {
	Flex,
	FormControl,
	FormLabel,
	Input,
	Heading,
	Button,
	useColorModeValue,
	Spinner
} from "@chakra-ui/react";
import Layout from "../components/Layout";

export default function Login() {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors }
	} = useForm();
	const formBackground = useColorModeValue("gray.100", "gray.700");
	const [buttonClicked, setbuttonClicked] = useState(false);
	const onSubmit = (values) => {
		setbuttonClicked(true);
		if (!!values.password.trim()) {
			fetch("/api/login", {
				body: JSON.stringify(values),
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				}
			}).then((res) => {
				if (res.status === 401) {
					setbuttonClicked(false);
					toast.error("Username or password was invalid!");
				} else {
					reset();
					setbuttonClicked(false);
					router.push("/");
				}
			});
		} else {
			setError("password", { type: "blank_space" });
		}
	};
	return (
		<Layout title="Login To Your Account" isLoggedIn={false}>
			<Flex height="100vh" alignItems="center" justifyContent="center">
				<Toaster position="top-right" />

				<Flex
					direction="column"
					background={formBackground}
					p={12}
					rounded={6}>
					<Heading mb={6}>Sign in to your account</Heading>

					<form
						onSubmit={handleSubmit(onSubmit)}
						action="#"
						method="POST">
						<FormControl id="email" isRequired>
							<FormLabel>Email address</FormLabel>
							<Input
								variant="filled"
								size="lg"
								type="email"
								{...register("email", {
									required: true
								})}
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								placeholder="Email address"
								mb={3}
							/>
						</FormControl>
						<FormControl id="password" isRequired>
							<FormLabel>Password</FormLabel>
							<Input
								variant="filled"
								size="lg"
								{...register("password", {
									required: true
								})}
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								placeholder="Password"
								mb={3}
							/>
							{errors.password?.type === "required" &&
								"Field should not be blank"}
							{errors.password?.type === "blank_space" &&
								"Field is blank."}
						</FormControl>

						<Button
							isFullWidth={true}
							type="submit"
							px={24}
							mb={3}
							colorScheme="green">
							Sign in
							{buttonClicked && <Spinner ml={2} size="sm" />}
						</Button>
					</form>
				</Flex>
			</Flex>
		</Layout>
	);
}
