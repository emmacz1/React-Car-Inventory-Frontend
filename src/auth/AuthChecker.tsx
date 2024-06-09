// src/auth/AuthChecker.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';

interface Props {
  children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      if (!auth.currentUser) {
        try {
          await signInWithPopup(auth, Providers.google);
        } catch (error) {
          console.error("Auth error: ", error);
        }
        navigate("../");
      }
    };
    checkAuth();
  }, [navigate]);

  return <>{children}</>;
};

export default AuthChecker;
