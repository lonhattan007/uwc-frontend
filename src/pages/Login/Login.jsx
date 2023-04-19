import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic
    console.log(`Phone number: ${phoneNumber}, Password: ${password}`);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-background">
      <form onSubmit={handleLogin} className="login-form">
        <h1>Đăng nhập</h1>
        <div className="bar"></div>
        <label>
          <input
            type="tel"
            value={phoneNumber}
            placeholder="Số điện thoại"
            onChange={handlePhoneNumberChange}
          />
        </label>
        <label className="password">
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Mật khẩu"
              onChange={handlePasswordChange}
              className="password-input"
            />

            <div className="password-icon" onClick={toggleShowPassword}>
              {showPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </div>
          </div>
        </label>

        <Link to="/calendar">
          <button type="submit">Đăng nhập</button>
        </Link>
        <div className="forgotPass">
          <label className="remember-me">
            <input type="checkbox" />
            <span className="text">Ghi nhớ mật khẩu</span>
          </label>
          <Link to="/forgot">Quên mật khẩu</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
