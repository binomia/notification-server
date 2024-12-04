import { GlobalZodSchema } from "@/auth/globalZodSchema";

export const NODEMAILER_EMAIL: string = process.env.NODEMAILER_EMAIL || "";
export const NODEMAILER_PASSWORD: string = process.env.NODEMAILER_PASSWORD || "";
export const ZERO_ENCRYPTION_KEY: string = process.env.ZERO_ENCRYPTION_KEY || "";
export const ZERO_SIGN_PRIVATE_KEY: string = process.env.ZERO_SIGN_PRIVATE_KEY || "";
export const AUTH_SERVER_URL: string = process.env.AUTH_SERVER_URL || "";
export const SENDGRID_API_KEY: string = process.env.SENDGRID_API_KEY || "";


export const REDIS_SUBSCRIPTION_CHANNEL = {
    TRANSACTION_CREATED: "TRANSACTION_CREATED",
    TRANSACTION_REQUEST_PAIED: "TRANSACTION_REQUEST_PAIED",
    BANKING_TRANSACTION_CREATED: "BANKING_TRANSACTION_CREATED",
    LOGIN_VERIFICATION_CODE: "LOGIN_VERIFICATION_CODE",
    TRANSACTION_CREATED_FROM_QUEUE: "TRANSACTION_CREATED_FROM_QUEUE"
}


export const evironmentVariables = GlobalZodSchema.evironmentVariables.parse(process.env)
 