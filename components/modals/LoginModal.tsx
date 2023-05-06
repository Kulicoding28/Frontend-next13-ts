import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { Modal } from "../Modal";

export const LoginModal = () => {
  const LoginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    LoginModal.onClose();
    registerModal.onOpen();
  }, [isLoading, registerModal, LoginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      // TODO add login

      await signIn("credentials", {
        email,
        password,
      });

      LoginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [LoginModal, email, password]);

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
        Frist time using Ngoceh?
        <span
          onClick={onToggle}
          className="cursor-pointer text-blue-400 hover:underline"
        >
          create an account
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={LoginModal.isOpen}
      title="login"
      actionLabel="sign in"
      onClose={LoginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};
