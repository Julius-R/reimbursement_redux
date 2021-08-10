import Head from "next/head";
import Link from "next/link";
import withSession from "../lib/Session.js";
// import bcrypt from "bcryptjs";
import { useRouter } from "next/router";
// import { useForm } from "react-hook-form";
// import toast, { Toaster } from "react-hot-toast";
import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export default function Login() {
	return <div>You not logged in</div>;
}
