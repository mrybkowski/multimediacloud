import React, { useState } from 'react';
import { useAuth } from '../../context/AuthProvider';
import { SEO } from '../../components';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { login } = useAuth();

  const [t] = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await login({ email, password });
  };

  return (
    <>
      <SEO
        title={t("seo:login.title")}
        description={t("seo:login.description")}
        name="marpio Sp. z o.o."
        type="article" 
      />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
