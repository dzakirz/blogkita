"use client"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

export function GithubSigninButton() {
  return (
    <Button variant="outline">
      <Icons.gitHub className="mr-2 h-4 w-4" />
      Github
    </Button>
  )
}
