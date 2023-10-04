import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { GithubSigninButton } from "./partials/github-signin-button"
import { GoogleSignupButton } from "./partials/google-signin-button"
import { SigninForm } from "./partials/signin-form"
import { SigninHeader } from "./partials/signin-header"

export default function SigninPage() {
  return (
    <>
      <SigninHeader />
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign in to your account</CardTitle>
          <CardDescription>
            Enter your email below to Sign in with your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <GithubSigninButton />
            <GoogleSignupButton />
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <SigninForm />
        </CardContent>
        <CardFooter className="flex flex-col gap-2 -mt-4">
          <div className="flex justify-center">
            <Label className="text-sm font-light">
              Don't have an account?
              <Link
                href="/signup"
                className="ml-1 font-normal text-blue-600 hover:underline block text-center"
              >
                Sign up
              </Link>
            </Label>
          </div>
        </CardFooter>
      </Card>
    </>
  )
}
