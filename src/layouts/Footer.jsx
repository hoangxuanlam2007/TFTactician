import styled from "styled-components";

import SelectDropdown from "components/common/SelectDropdown";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="footer-links">
          <a href="/">Chính sách bảo mật</a>
          <a href="/">Giấy phép nguồn mở</a>
          <a href="/">Mã nguồn</a>
          <a href="/">Báo lỗi</a>
          <div className="language-btn">Ngôn ngữ 
            <div className="version">
            <SelectDropdown
              placeholder="Tiếng Việt"
              className="version-dropdown"
            />
            </div>
          </div>
        </div>
        <div className="divider footer"></div>
        <p className="footer-about">TFTactician không được Riot Games chứng thực và không phản ánh quan điểm hay ý kiến ​​của Riot Games hay bất kỳ ai chính thức tham gia sáng tạo hoặc quản lý tài sản của Riot Games. Riot Games và tất cả các tài sản liên quan đều là nhãn hiệu đã đăng ký của Riot Games, Inc.</p>
        <p className="footer-copyright">© TFTactician 2023</p>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: auto;
  font-size: 15px;
  padding: 30px 0;
  background: #102531;
  border-top: 1px solid #17313a;
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  @media (max-width: 1024px) {
    padding-left: 45px;
    padding-right: 45px;
  }
`;
