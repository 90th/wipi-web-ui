import { useNavigate } from "@solidjs/router";
import { useAuth } from "../providers/auth";
import { createEffect } from "solid-js";
import { Card } from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export default function LoginPage() {
  let passwordElement!: HTMLInputElement;
  const { signIn } = useAuth();

  const doSignIn = (e: Event) => {
    e.preventDefault();
    const password = passwordElement.value;
    signIn({ password });
  }

  return <div class="flex justify-center mt-16">
    <Card class="w-96 !border-0 sm:!border-2 max-sm:w-full">
      <Card.Title>Login</Card.Title>
      <Card.Body>
        <form class="flex flex-col gap-4" onSubmit={doSignIn}>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium">Password</label>
            <Input ref={passwordElement} type="password" required />
          </div>
          <Button class="w-full">Sign In</Button>
        </form>
      </Card.Body>
    </Card>
  </div>
}

