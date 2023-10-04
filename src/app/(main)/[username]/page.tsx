type Props = {
  params: {
    username: string
  }
}

export default function UserProfilePage({ params }: Props) {
  return <div>UserProfilePage {params.username}</div>
}
