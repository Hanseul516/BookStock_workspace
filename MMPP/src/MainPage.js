// import React, { useState } from 'react';
import Header from './Header';
import BookItem from './BookItem';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './MainPage.css'; // MainPage.css 파일을 import


function MainPage() {
    // const [bookItems, setBookItems] = useState([]);
    // const [bookData, setBookData] = useState(null);


    // BookItem 컴포넌트에 전달할 데이터를 임시로 정의
    const bookItemData = {
        name: '어린왕자',
        imageUrl: '이미지 URL',
        startingPrice: 50000,
        currentPrice: 60000,
        bidderCount: 3,
    };


    // useEffect(() => {
    //     // 서버에서 도서 데이터 가져오기
    //     fetch('/api/book') // 서버의 엔드포인트에 요청
    //         .then((response) => response.json()) // JSON 형식으로 변환
    //         .then((data) => setBookData(data)) // 데이터 상태 업데이트
    //         .catch((error) => console.error('데이터를 불러오는 중 에러 발생:', error));
    // }, []);

    return (
        <div>
            <Header />
            {/* 본문상단배너 */}
            <div id="topSector">
                <h1>소비자 중심의 역경매 시스템의 시작 북스탁</h1>
                <input id="mainSearchbar" type="search" />
                <button id="searchImg"><img src="https://placeholder.com/10x10" alt='.'/></button>
                <div>
                    <button id="buying">삽니다</button>
                    <button id="selling">팝니다</button>
                </div>
                {/* 본문상단네비게이터 */}
                <div id="mainNavigator">
                    <Link to="/" class="1"><img src="https://placeholder.com/85x76" alt='.'/></Link>
                    <Link to="/" class="2"><img src="https://placeholder.com/85x76" alt='.'/></Link>
                    <Link to="/" class="3"><img src="https://placeholder.com/85x76" alt='.'/></Link>
                    <Link to="/" class="4"><img src="https://placeholder.com/85x76" alt='.'/></Link>
                    <Link to="/" class="5"><img src="https://placeholder.com/85x76" alt='.'/></Link>
                    <Link to="/" class="6"><img src="https://placeholder.com/85x76" alt='.'/></Link>
                    <Link to="/" class="7"><img src="https://placeholder.com/85x76" alt='.'/></Link>
                </div>
                {/* 부트스트랩 스타일시트 */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous" />

                {/* 부트스트랩 JavaScript 스크립트 */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa" crossorigin="anonymous"></script>

            </div>

            <div id="middleSector">
                <div id="middleSectorTopbar">
                    <h1 id="middleSectorTitle">최신 경매 도서</h1>
                    <Link to="/" id="moreItem">+ 더보기</Link>
                </div>

                <div id="lastestItem1">
                    <BookItem
                        name={bookItemData.name}
                        imageUrl={bookItemData.imageUrl}
                        startingPrice={bookItemData.startingPrice}
                        currentPrice={bookItemData.currentPrice}
                        bidderCount={bookItemData.bidderCount}
                    />

                    <div id="lastestItem2">
                        <div>
                            <button>팝니다</button>
                            <Link to="/"><h3>어린왕자</h3></Link>
                            <span>판매중 | 소설 | ~2023-09-03</span>
                        </div>
                        <div>
                            <button>팝니다</button>
                            <Link to="/"><h3>어린왕자</h3></Link>
                            <span>판매중 | 소설 | ~2023-09-03</span>
                        </div>
                        <div>
                            <button>삽니다</button>
                            <Link to="/"><h3>어린왕자</h3></Link>
                            <span>판매중 | 소설 | ~2023-09-03</span>
                        </div>
                        <div>
                            <button>팝니다</button>
                            <Link to="/"><h3>어린왕자</h3></Link>
                            <span>판매중 | 소설 | ~2023-09-03</span>
                        </div>
                        <div>
                            <button>삽니다</button>
                            <Link to="/"><h3>어린왕자</h3></Link>
                            <span>판매중 | 소설 | ~2023-09-03</span>
                        </div>
                    </div>

                    <div id="trading">
                        <h1>북스탁 거래현황</h1>
                        <h4>판매자와 구매자 모두 만족하는 스마트한 도서 쌍방향 거래시스템</h4>
                        <div id="tradingImg">
                            <div>
                                <img src="https://placeholder.com/85x76" alt='.'/>
                                <h3>삽니다 상품</h3>
                                <h3>총 225건</h3>
                            </div>

                            <div>
                                <img src="https://placeholder.com/85x76" alt='.'/>
                                <h3>팝니다 상품</h3>
                                <h3>총 38,904건</h3>
                            </div>

                            <div>
                                <img src="https://placeholder.com/85x76" alt='.'/>
                                <h3>누적 판매완료</h3>
                                <h3>총 30,637건</h3>
                            </div>
                        </div>
                    </div>

                    <div id="guide">
                        <Link to="/"><img src="https://placeholder.com/85x76" alt='.'/></Link>
                    </div>
                </div>

                <div id="bottomSector">
                    <div id="blogLink">
                        <Link to><img src="https://placeholder.com/85x76" alt='.'/></Link>
                    </div>

                    <div id="marketingVideo">
                        <Link to><img src="https://placeholder.com/85x76" alt='.'/></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default MainPage;





