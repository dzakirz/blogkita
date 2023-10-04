type Props = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex flex-col justify-center items-center md:min-h-screen pt-8 md:pt-0 gap-4">
      {children}
    </div>
  )
}
