import React, { useState } from "react";
import Logo from "../Logo/Logo";
import "./Navbar.css";
import classNames from "classnames";
import ClaimIcons from "../ClaimIcons/ClaimIcons";
import CarIcon from "../CarIcon/CarIcon";
import BikeIcon from "../BikeIcon/BikeIcon";
import { HealthIcon, ElectronicIcon } from "../../Constants/Icons.js";
import Hamburger from "hamburger-react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CModalBody,
  CCard,
} from "@coreui/react";
export default function Navbar({ mobileWidth }) {
  const [displayProductMenu, setdisplayProductMenu] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const navbarclassNames = classNames(
    { "container-fluid mob-nav": mobileWidth },
    { " web-nav container-fluid dfr": !mobileWidth }
  );
  const navbarbanner = classNames(
    { "bg-white": mobileWidth },
    { "bg-violet": !mobileWidth }
  );
  const DisplayProduct = classNames(
    { "product-menu": displayProductMenu },
    { "display-false": !displayProductMenu }
  );

  return (
    <div
      style={{ marginTop: "-10px" }}
      className={navbarbanner + "  " + navbarclassNames}
    >
      <div className={navbarclassNames}>
        <div>
          <Logo color={mobileWidth ? "white" : "#5e27ca"} />
          {mobileWidth && (
            <div
              onClick={() => {
                setOpen(false);
                setVisible("true");
              }}
              style={{ float: "right" }}
            >
              <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
              <SwipeableDrawer anchor="right" open={visible}>
                <Box
                  sx={{
                    width: 350,
                  }}
                  role="presentation"
                  onClick={() => setVisible(false)}
                  onKeyDown={() => setVisible(false)}
                >
                  <div>
                    <div>
                      <img
                        alt=""
                        height="26px"
                        width="26px"
                        src="https://myaccount.ackoassets.com/static/images/header-icons/raise-a-claim-v2.svg"
                        className="sc-gAmQfK jqNPIq"
                      />
                      Raise a claim
                    </div>
                    <div>
                      <img
                        alt=""
                        height="26px"
                        width="26px"
                        src="https://myaccount.ackoassets.com/static/images/header-icons/renew-policy-v2.svg"
                        className="sc-gAmQfK jqNPIq"
                      />
                      Renew policy
                    </div>
                    <div>
                      <img
                        alt=""
                        height="26px"
                        width="26px"
                        src="https://myaccount.ackoassets.com/static/images/header-icons/help-icon-v2.svg"
                        className="sc-gAmQfK jqNPIq"
                      />
                      Help
                    </div>
                  </div>
                  <br />
                  <br />
                  <div>
                    <div className={"giri"}>
                      <div className="paraiir" style={{ paddingTop: "30px" }}>
                        Have a partner issued policy?
                      </div>
                    </div>
                    <div className="TmMsR">
                      <p className="fIzbua">Claim</p>
                    </div>
                    <div className="hiriimg">
                      <img
                        alt="partners"
                        height="74px"
                        width="76px"
                        src="https://myaccount.ackoassets.com/static/images/header-icons/partner-group-logo.svg"
                        className="sc-gAmQfK daUfMO"
                      />
                    </div>
                  </div>
                  <br />
                  <br />

                  <div className="laOZvl">
                    <div className="khGBsD">Products</div>
                    <div>
                      <CAccordion flush>
                        <CAccordionItem itemKey={1}>
                          <CAccordionHeader>
                            <div className="jsDehE">
                              <img
                                height="26px"
                                width="26px"
                                src="https://myaccount.ackoassets.com/static/images/header-icons/car-hamburger-new-v2.svg"
                                alt="product"
                                className="sc-bJHhxl kVbLrd"
                              />
                              Car & taxi
                            </div>
                          </CAccordionHeader>
                          <CAccordionBody>
                            <ul className="sc-bJTOcE jfGmYb">
                              <li className="sc-PLyBE hNrZVc">
                                <p className="sc-dPNhBE drGShU">
                                  Comprehensive Car Insurance
                                </p>
                              </li>
                              <li className="sc-PLyBE hNrZVc">
                                <p className="sc-dPNhBE drGShU">
                                  Third Party Car Insurance
                                </p>
                              </li>
                              <li className="sc-PLyBE hNrZVc">
                                <p className="sc-dPNhBE drGShU">
                                  Commercial Car Insurance
                                </p>
                              </li>
                            </ul>
                          </CAccordionBody>
                        </CAccordionItem>
                        <CAccordionItem itemKey={2}>
                          <CAccordionHeader>
                            {" "}
                            <div className="jsDehE">
                              <img
                                height="26px"
                                width="26px"
                                src="https://myaccount.ackoassets.com/static/images/header-icons/bike-hamburger-new-v2.svg"
                                alt="product"
                                className="sc-bJHhxl kVbLrd"
                              />
                              Bike
                            </div>
                          </CAccordionHeader>
                          <CAccordionBody>
                            <ul className="sc-bJTOcE jfGmYb">
                              <li className="sc-PLyBE hNrZVc">
                                <p className="sc-dPNhBE drGShU">
                                  Comprehensive Bike Insurance
                                </p>
                              </li>
                              <li className="sc-PLyBE hNrZVc">
                                <p className="sc-dPNhBE drGShU">
                                  Third Party Bike Insurance
                                </p>
                              </li>
                            </ul>
                          </CAccordionBody>
                        </CAccordionItem>
                        <CAccordionItem itemKey={3}>
                          <CAccordionHeader>
                            {" "}
                            <div className="jsDehE">
                              <img
                                height="26px"
                                width="26px"
                                src="https://myaccount.ackoassets.com/static/images/header-icons/health-hamburger-new-v2.svg"
                                alt="product"
                                className="sc-bJHhxl kVbLrd"
                              />
                              Health
                            </div>
                          </CAccordionHeader>
                          <CAccordionBody>
                            <ul className="sc-bJTOcE jfGmYb">
                              <li className="sc-PLyBE hNrZVc">
                                <p className="sc-dPNhBE drGShU">
                                  Health Insurance
                                </p>
                              </li>
                              <li className="sc-PLyBE hNrZVc">
                                <p className="sc-dPNhBE drGShU">
                                  Arogya Sanjeevani
                                </p>
                              </li>
                              <li className="sc-PLyBE hNrZVc">
                                <p className="sc-dPNhBE drGShU">
                                  Group Medical Cover
                                </p>
                              </li>
                            </ul>
                          </CAccordionBody>
                        </CAccordionItem>
                        <CAccordionItem itemKey={4}>
                          <CAccordionHeader>
                            {" "}
                            <div className="jsDehE">
                              <img
                                height="26px"
                                width="26px"
                                src="https://myaccount.ackoassets.com/static/images/header-icons/electronics-hamburger-new-v2.svg"
                                alt="product"
                                className="sc-bJHhxl kVbLrd"
                              />
                              Electronics
                            </div>
                          </CAccordionHeader>
                          <CAccordionBody>
                            <ul className="sc-bJTOcE jfGmYb">
                              <li className="sc-PLyBE hNrZVc">
                                <p className="sc-dPNhBE drGShU">
                                  Mobile Protection
                                </p>
                              </li>
                              <li className="sc-PLyBE hNrZVc">
                                <p className="sc-dPNhBE drGShU">
                                  Appliance Protection
                                </p>
                              </li>
                            </ul>
                          </CAccordionBody>
                        </CAccordionItem>
                      </CAccordion>
                    </div>
                  </div>

                  <div>
                    <div className="laOZvl">
                      <p className="bBbmeJ">Know your Insurance</p>
                    </div>

                    <div className="dgjJYt">
                      <img
                        height="26px"
                        width="26px"
                        src="https://myaccount.ackoassets.com/static/images/all-resources-v2.svg"
                        alt="resource"
                        className="sc-gAmQfK jqNPIq"
                      />
                      All Resources
                    </div>
                    <div className="dgjJYt">
                      <img
                        height="26px"
                        width="26px"
                        src="https://myaccount.ackoassets.com/static/images/articles-v2.svg"
                        alt="resource"
                        className="sc-gAmQfK jqNPIq"
                      />
                      Articles
                    </div>
                    <div className="dgjJYt">
                      <img
                        height="26px"
                        width="26px"
                        src="https://myaccount.ackoassets.com/static/images/guides-v2.svg"
                        alt="resource"
                        className="sc-gAmQfK jqNPIq"
                      />
                      Guides
                    </div>
                  </div>

                  <div>
                    <p className="jUGXNt">
                      Trade logo displayed above belongs to ACKO Technology &
                      Services Pvt Ltd and used by ACKO General insurance
                      Limited under License.
                      <br />
                      <br />
                      For more details on risk factors, terms, conditions and
                      exclusions, please read the policy wordings carefully
                      before concluding a sale.
                    </p>
                  </div>
                </Box>
              </SwipeableDrawer>
            </div>
          )}
        </div>
        {mobileWidth ? null : (
          <>
            <div className="dfr">
              <div
                className="webview-link webview-link-1"
                onMouseOver={() => {
                  setdisplayProductMenu(true);
                }}
                onMouseOut={() => {
                  setdisplayProductMenu(false);
                }}
              >
                Products
              </div>
              <div className="webview-link webview-link-2">Resources</div>
              <div>
                <div className="dfr">
                  <div className="claim-icons" o>
                    <ClaimIcons />
                  </div>
                  <CCard className="login-card fr">
                    Claim,edit,renew & more{" "}
                  </CCard>
                  <div className="login-card-btn">login &#8744;</div>
                </div>
              </div>
              <div className="webview-link webview-link-3">Help</div>
            </div>

            <div
              className={DisplayProduct}
              onMouseOver={() => {
                setdisplayProductMenu(true);
              }}
              onMouseOut={() => {
                setdisplayProductMenu(false);
              }}
            >
              <div className="arrow-up"></div>
              <div className="dfc">
                <center className="dfr align-pm">
                  <div className="p-5 box-pm">
                    <div className="elements-pm-head">
                      <CarIcon width="32" height="32" carHexcode="#434F5A" />
                      Car & Taxi
                    </div>
                    <div className="elements-pm">
                      Comprehensive Car Insurance
                    </div>
                    <div className="elements-pm">Third Party Car Insurance</div>
                    <div className="elements-pm">Commercial Car Insurance</div>
                  </div>
                  <div className="p-5 box-pm">
                    <div className="elements-pm-head">
                      <BikeIcon width="32" height="32" bikeHexcode="#434F5A" />{" "}
                      Bike
                    </div>
                    <div className="elements-pm">
                      Comprehensive Bike Insurance
                    </div>
                    <div className="elements-pm">
                      Third Party Bike Insurance
                    </div>
                  </div>
                  <div className="p-5 box-pm">
                    <div className="elements-pm-head">
                      <HealthIcon
                        width="32"
                        height="32"
                        bikeHexcode="#434F5A"
                      />{" "}
                      Health
                    </div>
                    <div className="elements-pm">Health Insurance</div>
                    <div className="elements-pm">Arogya Sanjeevani</div>
                    <div className="elements-pm">Group Medical Cover</div>
                  </div>
                  <div className="p-5 box-pm">
                    <div className="elements-pm-head">
                      <ElectronicIcon
                        width="32"
                        height="32"
                        bikeHexcode="#434F5A"
                      />
                      Electronics
                    </div>
                    <div className="elements-pm">Mobile Protection</div>
                    <div className="elements-pm">Appliance Protection</div>
                  </div>
                </center>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
