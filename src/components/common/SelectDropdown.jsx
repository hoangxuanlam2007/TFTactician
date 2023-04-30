import { useState } from "react";
import styled from "styled-components";

function Select(props) {
  const [showDropdown, setshowDropdown] = useState(false);
  function hanleClick() {
    setshowDropdown(!showDropdown);
  }
  return (
    <SelectDefault
      className={props.className}
      id="default-select"
      onClick={hanleClick}
    >
      <div className="value">
        <span>{props.placeholder}</span>
      </div>
    </SelectDefault>
  );
}

export default Select;

const SelectDefault = styled.div`
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  position: relative;
  background-color: #123040;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  width: 100%;
  width: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .dropdown {
    position: absolute;
    top: 100%;
    width: 100%;
    left: 0;
    background-color: #102531;
    z-index: 1;
    .dropdown-item {
      transition: all 0.3s;
      height: 40px;
      display: flex;
      align-items: center;
      &:hover {
        background-color: #112d3c;
      }
    }
    .dropdown-item.selected {
      background-color: #227aad;
    }
    #defaul-button {
      width: 100%;
    }
  }
`;
