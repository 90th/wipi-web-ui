import { useNavigate } from "@solidjs/router";
import Button from "../components/ui/Button";
import { useAuth } from "../providers/auth";

export default function HomePage() {
  const { signOut, authToken } = useAuth();
  const navigate = useNavigate();
  return <>
    <h1>Home Page</h1>
    <div>
      <div>Session: {authToken() || "Not logged in"}</div>
      {authToken() && <button onClick={signOut}>Sign Out</button> || <Button onClick={() => navigate("/login")}>Sign In</Button>}
    </div>
  </>
}
