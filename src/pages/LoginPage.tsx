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

  return <div class="flex justify-center mt-16">
    <Card class="w-128 !border-0 sm:!border-2 max-sm:w-full">
      <Card.Title class="my-2">Login</Card.Title>
      <Card.Body>
        <form class="flex flex-col mt-8" onSubmit={doSignIn}>
          <label class="text-lg font-bold mb-1">Password</label>
          <input ref={passwordElement} class="border-2 text-lg border-slate-600 rounded-md px-2 mb-8" type="password" required/>
          <Button class="my-2">Sign In</Button>
        </form>
      </Card.Body>
    </Card>
  </div>
}
