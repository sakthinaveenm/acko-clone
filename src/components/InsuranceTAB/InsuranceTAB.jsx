import React, { useState, useEffect } from "react";
import BikeIcon from "../BikeIcon/BikeIcon";
import "./InsuranceTAB.css";
import classNames from "classnames";
import CarIcon from "../CarIcon/CarIcon";
import { FaGreaterThan } from "react-icons/fa";
import Heart from "../Heart/Heart";
import { FaAward, FaFacebook } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiTwotoneStar } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import FadeIn from "react-fade-in";
import { CButton } from "@coreui/react";
import DisplayAds from "../../hikw.png";
export default function InsuranceTAB({ mobileWidth }) {
  const [bikeHexcode, setBikeHexCode] = useState(
    mobileWidth ? "#3e4651" : "#cebeef"
  );
  const [carHexcode, setcarHexcode] = useState(
    mobileWidth ? "#3e4651" : "#cebeef"
  );
  const [heartHexcode, setheartHexcode] = useState(
    mobileWidth ? "#3e4651" : "#cebeef"
  );

  const [buttonOne, setButtonOne] = useState(false);
  const [buttonTwo, setButtonTwo] = useState(true);
  const [buttonThree, setButtonThree] = useState(false);

  useEffect(() => {
    if (buttonOne) {
      if (mobileWidth) {
        setBikeHexCode("#ffffff");
      } else {
        setBikeHexCode("#5e27ca");
      }
    } else {
      if (mobileWidth) {
        setBikeHexCode("#3e4651");
      } else {
        setBikeHexCode("#cebeef");
      }
    }

    if (buttonTwo) {
      if (mobileWidth) {
        setcarHexcode("#ffffff");
      } else {
        setcarHexcode("#5e27ca");
      }
    } else {
      if (mobileWidth) {
        setcarHexcode("#3e4651");
      } else {
        setcarHexcode("#cebeef");
      }
    }

    if (buttonThree) {
      if (mobileWidth) {
        setheartHexcode("#ffffff");
      } else {
        setheartHexcode("#5e27ca");
      }
    } else {
      if (mobileWidth) {
        setheartHexcode("#3e4651");
      } else {
        setheartHexcode("#cebeef");
      }
    }
  }, [buttonOne, buttonTwo, buttonThree, mobileWidth]);

  const heartBannerViewHeader = classNames(
    { "mob-heart-Banner-View-header": mobileWidth },
    { "web-heart-Banner-View-header": !mobileWidth }
  );
  const heartBannerViewSubHeader = classNames(
    { "mob-heart-Banner-View-subheader": mobileWidth },
    { "web-heart-Banner-View-subheader": !mobileWidth }
  );

  return (
    <div style={{ marginTop: "40px" }} className={mobileWidth && "mobile-fit"}>
      <div className="dfc">
        <div className="dfr" style={{ marginBottom: "10px" }}>
          {/* one */}
          <div
            style={{
              borderBottomColor:
                !mobileWidth && buttonTwo
                  ? !mobileWidth && buttonTwo
                    ? "#ffffff"
                    : "#434F5A"
                  : mobileWidth && buttonTwo
                  ? "#5e27ca"
                  : "#3e4651",
            }}
            onClick={() => {
              setButtonTwo(true);
              setButtonThree(false);
              setButtonOne(false);
            }}
            className={
              "tabs-it-left " +
              (buttonTwo ? " tabs-it-clicked" : "tabs-not-clicked")
            }
          >
            <div
              className={
                buttonTwo
                  ? mobileWidth
                    ? "rounded-circle-violet"
                    : "rounded-circle-white dfc"
                  : ""
              }
            ></div>
            <div
              className={
                buttonTwo
                  ? mobileWidth
                    ? "image-up-fit-mob"
                    : "image-up-fit"
                  : ""
              }
            >
              <CarIcon
                width="30px"
                height="30px"
                onClick={() => {
                  setButtonOne(false);
                  setButtonTwo(true);
                  setButtonThree(false);
                }}
                carHexcode={carHexcode}
              />
            </div>
            <div
              className={buttonTwo ? "mrn-top" : "tabs-not-clicked"}
              style={{
                textAlign: "center",

                border: 0,
              }}
            >
              <div
                style={{
                  color: !mobileWidth
                    ? !mobileWidth && buttonTwo
                      ? "#ffffff"
                      : "#dab2ff"
                    : mobileWidth && buttonTwo
                    ? "#7c47e0"
                    : "#3e4651",
                }}
              >
                Taxi
              </div>
            </div>
          </div>
          {/*  */}

          {/* two */}
          <div
            style={{
              borderBottomColor:
                !mobileWidth && buttonOne
                  ? !mobileWidth && buttonOne
                    ? "#ffffff"
                    : "#434F5A"
                  : mobileWidth && buttonOne
                  ? "#5e27ca"
                  : "#3e4651",
            }}
            onClick={() => {
              setButtonOne(true);
              setButtonTwo(false);
              setButtonThree(false);
            }}
            className={
              "tabs-it-center " +
              (buttonOne && !mobileWidth
                ? "tabs-it-clicked"
                : "tabs-not-clicked")
            }
          >
            <div
              className={
                buttonOne
                  ? mobileWidth
                    ? "rounded-circle-violet"
                    : "rounded-circle-white dfc"
                  : ""
              }
            ></div>
            <div
              className={
                buttonOne
                  ? mobileWidth
                    ? "image-up-fit-mob"
                    : "image-up-fit"
                  : ""
              }
            >
              <BikeIcon
                width="30px"
                height="30px"
                onMouseOver={() => {
                  setBikeHexCode("#ffffff");
                }}
                onMouseOut={() => {
                  setBikeHexCode("#434F5A");
                }}
                onClick={() => {
                  setButtonTwo(false);
                  setButtonThree(false);
                  setButtonOne(true);
                }}
                bikeHexcode={bikeHexcode}
              />
            </div>
            <div
              className={buttonOne ? "mrn-top" : "tabs-not-clicked"}
              style={{
                textAlign: "center",
                border: 0,
              }}
            >
              <div
                style={{
                  color: !mobileWidth
                    ? !mobileWidth && buttonOne
                      ? "#ffffff"
                      : "#dab2ff"
                    : mobileWidth && buttonOne
                    ? "#7c47e0"
                    : "#3e4651",
                }}
              >
                Bike
              </div>
            </div>
          </div>
          {/* 2 ends */}
          {/* 3 starts */}
          <div
            style={{
              borderBottomColor:
                !mobileWidth && buttonThree
                  ? !mobileWidth && buttonThree
                    ? "#ffffff"
                    : "#434F5A"
                  : mobileWidth && buttonThree
                  ? "#5e27ca"
                  : "#3e4651",
            }}
            onClick={() => {
              setButtonOne(false);
              setButtonTwo(false);
              setButtonThree(true);
            }}
            onMouseOver={() => {
              if (!buttonThree) {
                setheartHexcode("#ffffff");
              }
            }}
            onMouseOut={() => {
              if (!buttonThree) {
                setheartHexcode("#cebeef");
              }
            }}
            className={
              "tabs-it-end " +
              (buttonThree ? " tabs-it-clicked" : "tabs-not-clicked")
            }
          >
            <div
              className={
                buttonThree
                  ? mobileWidth
                    ? "rounded-circle-violet"
                    : "rounded-circle-white dfc"
                  : ""
              }
            ></div>
            <div
              className={
                buttonThree
                  ? mobileWidth
                    ? "image-up-fit-mob"
                    : "image-up-fit"
                  : ""
              }
            >
              <Heart width="30px" height="30px" heartcolor={heartHexcode} />
            </div>
            <div
              className={buttonThree ? "mrn-top" : "tabs-not-clicked"}
              style={{
                textAlign: "center",

                border: 0,
              }}
            >
              <div
                style={{
                  color: !mobileWidth
                    ? !mobileWidth && buttonThree
                      ? "#ffffff"
                      : "#dab2ff"
                    : mobileWidth && buttonThree
                    ? "#7c47e0"
                    : "#3e4651",
                }}
              >
                {" "}
                Health
              </div>
            </div>
          </div>
        </div>
        {/* 3 ends */}
        {buttonTwo && (
          <FadeIn>
            {!mobileWidth ? (
              <>
                <div className="inpot-form">
                  <div class="bg dark">
                    <div class="input-cont dark">
                      <input
                        type="text"
                        name="name"
                        autocomplete="off"
                        required
                      />
                      <label for="name" class="label-name">
                        <span class="content-name">Enter your Car Number</span>
                      </label>
                    </div>
                  </div>
                  <CButton className="insure-you" color="success">
                    Insure You &#8594;
                  </CButton>
                </div>
              </>
            ) : (
              <div className="inpot-form">
                <div class="bg-mob dark">
                  <div class="input-cont dark">
                    <input
                      type="text"
                      name="name"
                      autocomplete="off"
                      required
                    />
                    <label for="name" class="label-name">
                      <span class="content-name">Enter your Car Number</span>
                    </label>
                  </div>
                </div>
                <CButton className="insure-you mob-desasa" color="success">
                  &#8594;
                </CButton>
              </div>
            )}

            {!mobileWidth ? (
              <>
                <div
                  style={{ marginTop: "10px", color: "#ffffff" }}
                  className="dfr"
                >
                  <hr className="lh" />
                  OR
                  <hr className="rh-hr" />
                </div>

                <div className="ads-1">
                  <div className="dfr">
                    <div style={{ margin: "10px" }}>
                      <CarIcon width="32" height="32" carHexcode="#ffffff" />
                    </div>
                    <div>
                      <div
                        className="dfc webview-ban-card"
                        style={{ width: "max-content" }}
                      >
                        <div className="webview-ban-head">
                          Looking for insure your new Car ?
                        </div>
                        <div className="webview-ban-subhead">
                          Save big with our zero commission insurance
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="get-quote-btn">Get a Quote</div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    marginTop: "10px",
                    color: "#000000",
                    justifyContent: "center",
                  }}
                  className="dfr"
                >
                  <hr className="lh-mob" />
                  OR
                  <hr className="rh-hr-mob" />
                </div>
                <div
                  className="dfr"
                  style={{
                    border: "1px solid #5d636a",
                    textAlign: "left",
                    borderRadius: "10px",
                  }}
                >
                  <div style={{ margin: "10px" }}>
                    <CarIcon width="32" height="32" carHexcode="#5d636a" />
                  </div>
                  <div>
                    <div
                      className="dfc webview-ban-card"
                      style={{ width: "100%" }}
                    >
                      <div className="mobview-ban-head">
                        Looking for insure your new Car ?
                      </div>
                      <div className="mobview-ban-subhead">Get a Quote </div>
                    </div>
                  </div>
                </div>
                <div>
                  <FaGreaterThan
                    style={{
                      float: "right",
                      marginTop: "-40px",
                      marginRight: "10px",
                    }}
                    size="20"
                  />
                </div>
              </>
            )}
          </FadeIn>
        )}
        {buttonOne && (
          <FadeIn>
            {!mobileWidth ? (
              <div className="inpot-form">
                <div class="bg dark">
                  <div class="input-cont dark">
                    <input
                      type="text"
                      name="name"
                      autocomplete="off"
                      required
                    />
                    <label for="name" class="label-name">
                      <span class="content-name">Enter your Bike Number</span>
                    </label>
                  </div>
                </div>
                <CButton className="insure-you" color="success">
                  Insure You &#8594;
                </CButton>
              </div>
            ) : (
              <div className="inpot-form">
                <div class="bg-mob dark">
                  <div class="input-cont dark">
                    <input
                      type="text"
                      name="name"
                      autocomplete="off"
                      required
                    />
                    <label for="name" class="label-name">
                      <span class="content-name">Enter your Bike Number</span>
                    </label>
                  </div>
                </div>
                <CButton className="insure-you mob-desasa" color="success">
                  &#8594;
                </CButton>
              </div>
            )}
            {!mobileWidth ? (
              <>
                <div
                  style={{ marginTop: "10px", color: "#ffffff" }}
                  className="dfr"
                >
                  <hr className="lh" />
                  OR
                  <hr className="rh-hr" />
                </div>

                <div className="ads-1">
                  <div className="dfr">
                    <div style={{ margin: "10px" }}>
                      <BikeIcon width="32" height="32" bikeHexcode="#ffffff" />
                    </div>
                    <div>
                      <div
                        className="dfc webview-ban-card"
                        style={{ width: "max-content" }}
                      >
                        <div className="webview-ban-head">
                          Looking for insure your new bike ?
                        </div>
                        <div className="webview-ban-subhead">
                          Save big with our zero commission insurance
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="get-quote-btn">Get a Quote</div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    marginTop: "10px",
                    color: "#000000",
                    justifyContent: "center",
                  }}
                  className="dfr"
                >
                  <hr className="lh-mob" />
                  OR
                  <hr className="rh-hr-mob" />
                </div>
                <div
                  className="dfr"
                  style={{
                    border: "1px solid #5d636a",
                    textAlign: "left",
                    borderRadius: "10px",
                  }}
                >
                  <div style={{ margin: "10px" }}>
                    <BikeIcon width="32" height="32" bikeHexcode="#5d636a" />
                  </div>
                  <div>
                    <div
                      className="dfc webview-ban-card"
                      style={{ width: "100%" }}
                    >
                      <div className="mobview-ban-head">
                        Looking for insure your new bike ?
                      </div>
                      <div className="mobview-ban-subhead">Get a Quote </div>
                    </div>
                  </div>
                </div>
                <div>
                  <FaGreaterThan
                    style={{
                      float: "right",
                      marginTop: "-40px",
                      marginRight: "10px",
                    }}
                    size="20"
                  />
                </div>
              </>
            )}
          </FadeIn>
        )}
        {buttonThree && (
          <FadeIn>
            <div className={mobileWidth ? "" : "inpot-form"}>
              <div className={mobileWidth ? "" : "web-padding-banner"}>
                <h5 className={heartBannerViewHeader}>
                  Arogya Sanjeevani policy, ACKO
                </h5>
                <p className={heartBannerViewSubHeader}>
                  Standard health insurance plan that’s big on benefits, low on
                  cost
                </p>
              </div>
              {!mobileWidth && (
                <CButton className="insure-you" color="success">
                  Get Started&#8594;
                </CButton>
              )}
            </div>
            <div
              style={{ marginTop: "10px", color: "#ffffff" }}
              className="dfr"
            ></div>

            <div className="ads-1">
              <div className="dfr">
                <div style={{ margin: "10px" }}>
                  <BikeIcon width="32" height="32" bikeHexcode="#ffffff" />
                </div>
                <div>
                  {!mobileWidth && (
                    <div className={mobileWidth ? "" : "dfc webview-ban-card"}>
                      <div
                        className={
                          mobileWidth ? "mobview-ban-head" : "webview-ban-head"
                        }
                      >
                        Looking for insure your new bike ?
                      </div>
                      <div
                        className={
                          mobileWidth
                            ? "mobview-ban-subhead"
                            : "webview-ban-subhead"
                        }
                      >
                        Save big with our zero commission insurance
                      </div>
                    </div>
                  )}
                </div>
                {!mobileWidth && (
                  <div>
                    <div className="get-quote-btn">Get a Quote</div>
                  </div>
                )}
              </div>
            </div>
            {/* </div> */}
          </FadeIn>
        )}
        {!mobileWidth ? (
          <>
            <img
              className={
                mobileWidth ? "container-fluid m-dss" : "display-ads-webview"
              }
              src={DisplayAds}
              alt=""
            />
            <div className="dfc">
              <div
                className="dfr ads-down-credentials"
                style={{ marginTop: "30px" }}
              >
                <div style={{ marginLeft: "50px" }}>
                  <FaAward /> &nbsp;&nbsp; Licensed by IRDAI
                </div>
                <div style={{ marginLeft: "20px", marginRight: "20px" }}>|</div>
                <div>
                  <FiUsers />
                  &nbsp;&nbsp; 6.2 Crore users
                </div>
                <div style={{ marginLeft: "20px", marginRight: "20px" }}>|</div>
                <div>
                  <FcGoogle /> <FaFacebook />
                  &nbsp; 95% <AiTwotoneStar /> 5Ratings
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
