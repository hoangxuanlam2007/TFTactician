import React from "react";
import Header from "layouts/Header";
import TopNavigation from "layouts/TopNavigation";
import styled from "styled-components";
import { useState } from "react";
import Footer from "layouts/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Home() {
    const [isOpenNaviagtion, setIsOpenNaviagtion] = useState(false);

  return (
    <RootLayoutDefault id="root-layout">

      <Header hanleClickNavigationBtn={() => setIsOpenNaviagtion((pre) => !pre)} />

      <TopNavigation
        isOpenNaviagtion={isOpenNaviagtion}
        hanleClickLink={() => setIsOpenNaviagtion(false)}
      />

        <Landing className="col-12 home-header">
            <div className="background-header"></div>
            <div className="text-header">
                <h1 className="text-white text-center fw-bolder">TFTactician</h1>
                <h3 className="orange text-center fw-bold" style={{'margin': '10px'}}>Đồng hành cùng bạn trong DTCL!</h3>
                <p className="grey text-center" style={{'maxWidth': '600px', 'margin': '20px auto'}}>Cùng nhau leo rank, xây dựng đội hình, trang bị chuẩn, khám phá những đội hình Top đầu Meta và còn nhiều hơn thế nữa...</p>
            </div>
        </Landing>

        <Wrapper className="wrapper">
            <a className="version-update" href="https://github.com/hoangxuanlam2007" target="_blank" rel="noreferrer">
            <div className="update-title">
                Thấy thú vị và bổ ích?
            </div>
            <div className="update-subtitle">Cho mình 1 sao trên github nhé ^^</div>
            </a>
        </Wrapper>

        <div className="col-12 home-app">
            <div className="row">
                <div className="col-12 col-lg-6 app-image left">
                    <h2 className="text-white fw-bold">Xây dựng đội hình</h2>
                    <p className="grey" style={{'maxWidth': '450px'}}>Xây dựng những đội hình mạnh hơn bằng cách lên kế hoạch cho đội hình của bạn hoặc chọn một trong những đội hình vượt trội trong Meta hiện tại.</p>
                </div>
                <div className="col-12 col-lg-6 app-image right">
                    <img className="image-full" src="https://rerollcdn.com/home/teams-full.jpg" alt="comps-full"/>
                    <img className="image-crop" src="https://rerollcdn.com/home/teams-crop.jpg" alt="comps-crop"/>
                </div>
            </div>
        </div>

        <div className="col-12 home-app">
            <div className="row">
                <div className="col-12 col-lg-6 app-image left">
                    <img className="image-full" src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/341831495_548417414133138_7003062662206718136_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RAHFDH0ijiQAX8IRbCt&_nc_ht=scontent.fhan14-2.fna&oh=03_AdTUgJAhY1rDltB8_x9SQsgMmEfHPyGSJ3aFmDsb9X9-NA&oe=6474A5A9" width={'65%'} alt="list-full"/>
                    <img className="image-crop" src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/341808132_781344967002089_4111522620184356945_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=FetYNzB_RzsAX-aVCb5&_nc_oc=AQkI_wTrhYJsyPBkE4SkfedJKuj-mVtaQWzNpxfK3TtmT7IJl264pxZZyfDiGwVXqlugayiXkUoHv3wEWfDkQqA0&_nc_ht=scontent.fhan14-2.fna&oh=03_AdQHDh7v3R6GpLGVSWHPRE6USp8bmyYTmw8yRp-BFWRtMg&oe=64748C53" width={'65%'} alt="champion-crop"/>
                </div>
                <div className="col-12 col-lg-6 app-image right">
                    <h2 className="text-white fw-bold">Truy tìm anh hùng</h2>
                    <p className="grey" style={{'maxWidth': '450px'}}>Tra cứu danh sách các tướng DTCL, chỉ số cơ bản, kỹ năng, Tộc/Hệ và nhiều thứ khác...</p>
                </div>
            </div>
        </div>

        <div className="col-12 home-app">
            <div className="row">
                <div className="col-12 col-lg-6 app-image left">
                    <h2 className="text-white fw-bold">Lựa chọn trang bị chuẩn</h2>
                    <p className="grey" style={{'maxWidth': '450px'}}>Tìm những món đồ, trang bị chuẩn dành cho những vị tướng DTCL. Tra cứu cách kết hợp và các thành phần của chúng.</p>
                </div>
                <div className="col-12 col-lg-6 app-image right">
                    <img className="image-full" src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/343904514_627313385920131_6790464048876253050_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=O3ZZqxUMK0sAX9OYgml&_nc_ht=scontent.fhan14-2.fna&oh=03_AdTbBi5d1B816guZ06lm_yt2wpCLcevR2uedUE6S25q-nw&oe=6474BC02" width={'65%'} alt="list-full"/>
                    <img className="image-crop" src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/343849717_164387819911917_982670899922784349_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=mOJJuBkMGUYAX_bzfAM&_nc_ht=scontent.fhan14-1.fna&oh=03_AdT6ZEJA84qun2jEGasGpZqkOeSG9Cpgy0K4hfNScmD5fA&oe=64749E5B" height={'85%'} alt="item-crop"/>
                </div>
            </div>
        </div>


      <Footer />

    </RootLayoutDefault>
  );
}

const Wrapper = styled.div`

  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background-color: #0D202B;
  .version-update {
    position: relative;
    font-size: 21px;
    background: #102531;
    background-image: url(https://rerollcdn.com/partners-bg.png);
    background-position: 50%;
    background-size: cover;
    border: 1px solid #17313a;
    width: 100%;
    height: 100px;
    color: hsla(0,0%,100%,.9);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    -webkit-filter: saturate(1);
    filter: saturate(1);
    cursor: pointer;
    transition: all .3s;
    margin: -490px 0 30px 0;
    text-decoration: none;
    &:hover {
      border-color: #227aad;
    }
    .update-title {
      font-weight: 600;
      font-size: 21px;
      margin-bottom: 7px;
    }
    .update-subtitle {
      font-size: 16px;
      color: #ffb800;
      font-weight: 400;
    }
  }
`;

const Landing = styled.div`
  min-height: 100vh;
  background-color: #0d202b;
  @media (max-width: 1024px) {
    padding-left: 45px;
    padding-right: 45px;
  }
`;

const RootLayoutDefault = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  color: white;
  .my-content {
    background-color: #d47559;
    text-align: center;
    padding: 3px 0;
    a {
      text-decoration: none;
      color: #12407c;
    }
  }
`;

export default Home;
