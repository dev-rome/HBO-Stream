import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import useMounted from "@/src/hooks/useMounted";
import ls from "local-storage";

const AuthCheck = (WrappedComponent: React.ComponentType<any>) => {
  return function WithAuthWrapper(props: any) {
    const router = useRouter();
    const isMounted = useMounted();
    const activeUser = ls("activeUser");
    const storedUsers = ls("users");
    const users = useMemo(
      () => (Array.isArray(storedUsers) ? storedUsers : []),
      [storedUsers]
    );

    useEffect(() => {
      if (activeUser === null && users.length === 0) {
        router.push("/create-user");
      }
    }, [activeUser, users, router]);

    // if the user is authenticated, render the wrapped component
    if (users.length >= 1 && activeUser !== null) {
      return isMounted ? <WrappedComponent {...props} /> : null;
    }
  };
};

export default AuthCheck;
