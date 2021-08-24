import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
	useColorModeValue,
	FormControl,
	FormLabel,
	Button,
	Flex,
	Box,
	Spinner,
	Spacer,
	Textarea,
	Select,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper
} from "@chakra-ui/react";
import Reimbursement from "./Reimbursement";

export default function User({ user, reimbursements }) {
	const formBackground = useColorModeValue("gray.100", "gray.700");
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm();
	const [buttonClicked, setbuttonClicked] = useState(false);
	const router = useRouter();
	const onSubmit = async (values) => {
		const data = {
			reimb_amount: values.amount,
			reimb_type: values.category,
			reimb_description: values.description,
			reimb_author_id: user.user_id,
			reimb_status: "PENDING"
		};
		setbuttonClicked(true);
		const res = await fetch("/api/reimbursements", {
			body: JSON.stringify(data),
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			}
		});
		const databaseStatus = await res.json();

		setbuttonClicked(false);
		toast.success(`Reimbursement submitted successfully!`);

		setTimeout(() => {
			router.replace(router.asPath);
		}, 2000);
	};

	useEffect(() => {
		reset({
			amount: "0",
			category: "",
			description: ""
		});
	}, [reimbursements]);

	return (
		<Flex as="section" justifyContent="center" mt={6}>
			<Toaster position="top-right" />
			<Box rounded={6} background={formBackground} p={6} height="sm">
				<form
					onSubmit={handleSubmit(onSubmit)}
					action="#"
					method="POST">
					<FormControl id="amount" isRequired>
						<FormLabel>Amount</FormLabel>
						<NumberInput mb={3}>
							<NumberInputField
								variant="filled"
								size="lg"
								type="amount"
								{...register("amount", { required: true })}
								id="amount"
								name="amount"
								required
								min={0}
								placeholder="$0.00"
							/>
							<NumberInputStepper>
								<NumberIncrementStepper />
								<NumberDecrementStepper />
							</NumberInputStepper>
						</NumberInput>
					</FormControl>
					<FormControl id="category" isRequired>
						<FormLabel as="label">Category</FormLabel>
						<Select
							placeholder="Select Category"
							variant="filled"
							size="lg"
							{...register("category", { required: true })}
							id="category"
							name="category"
							required
							mb={3}>
							<option value="FOOD">FOOD</option>
							<option value="LODGING">LODGING</option>
							<option value="TRANSPORTATION">
								TRANSPORTATION
							</option>
							<option value="OTHER">OTHER</option>
						</Select>
					</FormControl>
					<FormControl id="description" isRequired>
						<FormLabel>Description</FormLabel>
						<Textarea
							variant="filled"
							size="lg"
							{...register("description", { required: true })}
							id="description"
							name="description"
							type="description"
							required
							placeholder="Brief description"
							mb={3}
						/>
					</FormControl>

					<Button
						isFullWidth={true}
						type="submit"
						px={24}
						mb={3}
						colorScheme="green">
						Submit Reimbursement
						{buttonClicked && <Spinner ml={2} size="sm" />}
					</Button>
				</form>
			</Box>
			<Spacer />
			<Box colSpan={2}>
				{reimbursements.map((reimbursement) => (
					<Reimbursement
						key={reimbursement.reimb_id}
						reimbursement={reimbursement}
					/>
				))}
			</Box>
		</Flex>
	);
}
