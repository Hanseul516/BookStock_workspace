import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div id="footerNav">
        <Link to="/">서비스안내</Link>
        <Link to="/">이용약관</Link>
        <Link to="/">메일무단수집거부</Link>
        <Link to="/">개인정보처리방침</Link>
        <Link to="/">고객센터</Link>
        <Link to="/">관리자쪽지</Link>
      </div>

      <div id="companyInfo">
        <p>북스탁   사업자등록번호:514-81-28277 대표번호:1900-2896</p><br />
        <span>COPYRIGHT(C) {new Date().getFullYear()} 북스탁 RIGHTS RESERVED</span>
      </div>
    </footer>
  );
}

export default Footer;
