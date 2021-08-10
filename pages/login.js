import Head from "next/head";
import Link from "next/link";
import withSession from "../lib/Session.js";
// import bcrypt from "bcryptjs";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export default function Login() {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors }
	} = useForm();
	const onSubmit = (values) => {
		if (!!values.password.trim()) {
			console.log(values);
			fetch("/api/login", {
				body: JSON.stringify(values),
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				}
			}).then((res) => {
				if (res.status === 401) {
					toast.error("Username or password was invalid!");
				} else {
					reset();
					router.push("/");
				}
			});
		} else {
			setError("password", { type: "blank_space" });
		}
	};
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div>
				<Toaster position="top-right" />
			</div>
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Sign in to your account
					</h2>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="mt-8 space-y-6"
					action="#"
					method="POST">
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								{...register("email", {
									required: true
								})}
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
							/>
						</div>
						<div className="my-4">
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								{...register("password", {
									required: true
								})}
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Password"
							/>
							{errors.password?.type === "required" &&
								"Field should not be blank"}
							{errors.password?.type === "blank_space" &&
								"Field is blank."}
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
