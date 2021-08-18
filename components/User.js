import { useState } from "react";
import { useForm } from "react-hook-form";
import {
	useColorModeValue,
	FormControl,
	FormLabel,
	Input,
	Button,
	Grid,
	GridItem,
	Spinner,
	Textarea,
	Heading,
	Select,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper
} from "@chakra-ui/react";

export default function User({ user }) {
	const formBackground = useColorModeValue("gray.100", "gray.700");
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors }
	} = useForm();
	const [buttonClicked, setbuttonClicked] = useState(false);
	return (
		<Grid
			as="section"
			templateColumns="repeat(3, 1fr)"
			templateRows="repeat(2, 1fr)"
			gap={4}>
			<GridItem
				rounded={6}
				rowSpan={2}
				colSpan={1}
				background={formBackground}
				p={6}>
				<form>
					<FormControl id="amount" isRequired>
						<FormLabel>Amount</FormLabel>
						<NumberInput mb={3}>
							<NumberInputField
								variant="filled"
								size="lg"
								type="amount"
								{...register("amount", {
									required: true
								})}
								id="amount"
								name="amount"
								type="amount"
								required
								min={1}
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
							placeholder="Select option"
							variant="filled"
							size="lg"
							{...register("category", {
								required: true
							})}
							id="category"
							name="category"
							required
							mb={3}>
							<option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
							<option value="option3">Option 3</option>
							<option value="option3">Option 3</option>
						</Select>
					</FormControl>
					<FormControl id="description" isRequired>
						<FormLabel>Description</FormLabel>
						<Textarea
							variant="filled"
							size="lg"
							{...register("description", {
								required: true
							})}
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
			</GridItem>
			<GridItem colSpan={2}>Current Reimbursements</GridItem>
		</Grid>
	);
}
