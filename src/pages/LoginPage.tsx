import { useNavigate } from "@solidjs/router";
import { useAuth } from "../providers/auth";
import { createEffect } from "solid-js";
import { Card } from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function LoginPage() {
  let passwordElement! : HTMLInputElement;
  const { signIn } = useAuth();

  const doSignIn = () => {
    window.event?.preventDefault();
    const password = passwordElement.value;
    signIn({ password });
  }

  return <Card>
    <Card.Title>Login</Card.Title>
    <Card.Body>
      <form class="flex flex-col" onSubmit={doSignIn}>
        <label class="text-slate-900 font-bold">Password</label>
        <input ref={passwordElement} class="border-2 border-slate-600 rounded-md px-2" type="password" required/>
        <Button class="my-2">Sign In</Button>
      </form>
    </Card.Body>
  </Card>
}
