import classNames from "classnames";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { CAvatar } from "@coreui/react";
import "./Scoreboard.css";
export default function Scoreboard({ mobileWidth }) {
  const feedBackContent = classNames(
    { "": mobileWidth },
    { "web-scoreboard-feedBackContent": !mobileWidth }
  );

  const feedBackBackground = classNames(
    { "dfc mob-feedback-background": mobileWidth },
    { "dfc web-feedback-background": !mobileWidth }
  );
  return (
    <div className={feedBackBackground}>
      <div className="dfr" style={{ justifyContent: "center" }}>
        {mobileWidth ? (
          <div>
            <div>
              <center style={{ paddingTop: "10px" }}>
                <AiTwotoneStar color="#ff9000" />
                <AiTwotoneStar color="#ff9000" />
                <AiTwotoneStar color="#ff9000" />
                <AiTwotoneStar color="#ff9000" />
                <AiTwotoneStar color="#ff9000" />
              </center>
            </div>
            <div className="mob-scoreboard-feedBackContent">
              Go for ACKO General Insurance if you want a 'WOW'! settlement of
              your claims.
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingBottom: "5px",
                }}
              >
                <CAvatar src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" />
              </div>
              <div className="dfr" style={{ justifyContent: "center" }}>
                <div>
                  <div className="dfc">
                    <div className="webview-feedback-user-name-scoreboard">
                      Header
                    </div>
                    <div
                      style={{ paddingBottom: "20px", paddingTop: "5px" }}
                      className="webview-feedback-user-location-scoreboard"
                    >
                      SubHeader
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div>
              <div>
                <AiTwotoneStar color="#ff9000" />
                <AiTwotoneStar color="#ff9000" />
                <AiTwotoneStar color="#ff9000" />
                <AiTwotoneStar color="#ff9000" />
                <AiTwotoneStar color="#ff9000" />
              </div>
              <div className={feedBackContent}>
                Very good experience. Got the settlement done in less than 24
                hours.
              </div>
              <div>
                <div className="dfr">
                  <div>
                    <CAvatar src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" />
                  </div>
                  <div>
                    <div className="dfc">
                      <div className="webview-feedback-user-name-scoreboard">
                        Header
                      </div>
                      <div className="webview-feedback-user-location-scoreboard">
                        SubHeader
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <AiTwotoneStar color="#ff9000" />
                <AiTwotoneStar color="#ff9000" />
                <AiTwotoneStar color="#ff9000" />
                <AiTwotoneStar color="#ff9000" />
                <AiTwotoneStar color="#ff9000" />
              </div>
              <div className={feedBackContent}>
                Very good experience. Got the settlement done in less than 24
                hours.
              </div>
              <div>
                <div className="dfr">
                  <div>
                    <CAvatar src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" />
                  </div>
                  <div>
                    <div className="dfc">
                      <div className="webview-feedback-user-name-scoreboard">
                        Header
                      </div>
                      <div className="webview-feedback-user-location-scoreboard">
                        SubHeader
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <AiTwotoneStar color="#ff9000" />
                <AiTwotoneStar color="#ff9000" />
                <AiTwotoneStar color="#ff9000" />
                <AiTwotoneStar color="#ff9000" />
                <AiTwotoneStar color="#ff9000" />
              </div>
              <div className={feedBackContent}>
                Very good experience. Got the settlement done in less than 24
                hours.
              </div>
              <div>
                <div className="dfr">
                  <div>
                    <CAvatar src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" />
                  </div>
                  <div>
                    <div className="dfc">
                      <div className="webview-feedback-user-name-scoreboard">
                        Header
                      </div>
                      <div className="webview-feedback-user-location-scoreboard">
                        SubHeader
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
