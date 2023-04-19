import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPass.scss';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const ForgotPass = () => {
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
        <h1>Lấy lại mật khẩu</h1>
        <div className="bar"></div>
        <label>
          <input type="tel" value={phoneNumber} placeholder="Số điện thoại" onChange={handlePhoneNumberChange} />
        </label>
        <label className="password">
          <div className="password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              placeholder="Mã OTP"
              onChange={handlePasswordChange}
              className="password-input"
            />

            <div className="password-icon" onClick={toggleShowPassword}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>
        </label>

        <Link to="/">
          <button type="submit">Xác nhận</button>
        </Link>
      </form>
    </div>
  );
};

export default ForgotPass;
