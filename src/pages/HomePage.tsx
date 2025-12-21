import { useAuth } from "../providers/auth";

export default function HomePage() {
  const { signOut, authToken } = useAuth();
  return <>
    <h1>Home Page</h1>
    <div>
      <div>Session: {authToken() || "Not logged in"}</div>
      {authToken() && <button onClick={signOut}>Sign Out</button>}
    </div>
  </>
}
