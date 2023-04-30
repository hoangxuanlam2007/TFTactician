import styled from "styled-components";
import SynergyInfo from "components/info/SynergyInfo";
import { BONUS_LEVEL_COLOR } from "config/color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { capitalize } from "utils/filter";
import { Fragment } from "react";

export default function PartialTraitsItem({
  width,
  height,
  count,
  hide_name,
  synergy_name,
  bonus_level,
  lvls,
}) {
  return (
    <PartialTraitsItemWrapper>
      <SynergyInfoWrapper bonus_level_color={BONUS_LEVEL_COLOR[bonus_level]}>
        <SynergyInfo
          width={width}
          height={height}
          count={count}
          hide_name={hide_name}
          synergy_name={synergy_name}
          bonus_level={bonus_level}
          className="teambuilder-synergy-info"
        />
      </SynergyInfoWrapper>
      <div className="trait-info">
        <div className="trait-info-name">{capitalize(synergy_name)}</div>
        <div className="trait-info-level">
          {bonus_level > 0 ? (
            lvls.map((item, index) => {
              return (
                <span key={item} className="traits-bonus">
                  <Fragment>
                    <span className={count >= item ? "active" : ""}>
                      {item}
                    </span>
                    {index < lvls.length - 1 && (
                      <FontAwesomeIcon
                        size="sm"
                        className={count >= Number(lvls[index + 1]) ? "active" : ""}
                        icon={solid("angle-right")}
                      />
                    )}
                  </Fragment>
                </span>
              );
            })
          ) : (
            <Fragment>
              <span className="non-active">
                {count}/{lvls[0]}
              </span>
            </Fragment>
          )}
        </div>
      </div>
    </PartialTraitsItemWrapper>
  );
}

const PartialTraitsItemWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: red;
  margin-bottom: 15px;
  border: 1px solid #17313a;
  font-size: 14px;
  background: #102531;
  .teambuilder-synergy-info > .wrapper > span {
    transform: translateX(5px);
  }
  .trait-info-level {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .traits-bonus,
    .non-active {
      width: max-content;
      color: #88a0a7;
      .active {
        color: white;
      }
    }
    svg {
      vertical-align: middle;
      margin: 0 5px;
    }
  }
`;

const SynergyInfoWrapper = styled.div`
  cursor: pointer;
  height: 25px;
  display: flex;
  width: 55px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bonus_level_color || "#123040"};
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0 5px 0 4px;
  position: relative;
  margin-right: 10px;
  &::before {
    content: "";
    position: absolute;
    width: 0;
    left: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    z-index: 1;
    bottom: 100%;
    border-bottom: 10px solid
      ${(props) => props.bonus_level_color || "#123040"};
  }
  &::after {
    content: "";
    position: absolute;
    width: 0;
    left: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    z-index: 1;
    top: 100%;
    border-top: 10px solid
      ${(props) => props.bonus_level_color || "#123040"};
  }
`;
