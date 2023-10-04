"use client"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

export function GoogleSignupButton() {
  return (
    <Button variant="outline">
      <Icons.google className="mr-2 h-4 w-4" />
      Google
    </Button>
  )
}
