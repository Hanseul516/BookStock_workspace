import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      {/* 메인상단로고 */}
      <div id="logo">
        <Link to="/">
          <img className="logoImg" src="./bookStockLogo.jpg" alt="로고" />
        </Link>
      </div>
      <div>
        {/* 로그인 */}
        <div id="login">
          <Link to="/">
            <img className="loginImg" src="https://placeholder.com/150x38" alt="로그인" />
          </Link>
        </div>
        {/* 회원가입 */}
        <div id="register">
          <Link to="/">
            <img className="registerImg" src="https://placeholder.com/150x38" alt="회원가입" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
