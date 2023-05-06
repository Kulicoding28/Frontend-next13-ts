import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import axios from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { Modal } from "../Modal";

export const RegisterModal = () => {
  const LoginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    registerModal.onClose();
    LoginModal.onOpen();
  }, [isLoading, registerModal, LoginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      // TODO add register and login

      await axios.post("/api/register", {
        email,
        password,
        username,
        name,
      });

      toast.success("Account created.");

      signIn("credentials", {
        email,
        password,
      });

      registerModal.onClose();
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [registerModal, email, password, username, name]);

  const bodyContent = (
    <div className="flex flex-col gap-4 ">
      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
        className="p-1"
      />
      <input
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
        className="p-1"
      />
      <input
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoading}
        className="p-1"
      />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
        className="p-1"
      />
    </div>
  );

  const footerContent = (
    <div className="mt-4 text-center text-neutral-300">
      <p>
        Already have an account?
        <span
          onClick={onToggle}
          className="cursor-pointer text-blue-400 hover:underline"
        >
          sign in
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};
