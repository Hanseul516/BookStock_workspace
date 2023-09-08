import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; // 필요에 따라 스타일 시트 경로를 수정
import MainPage from './MainPage'; // MainPage 컴포넌트를 가져옴

ReactDOM.render(
  <React.StrictMode>
    <MainPage /> {/* MainPage 컴포넌트를 렌더링 */}
  </React.StrictMode>,
  document.getElementById('root')
);
