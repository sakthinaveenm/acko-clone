import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from "@coreui/react";
import React from "react";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.css";
export default function Footer({ mobileWidth }) {
  return (
    <div>
      <div className="dfc">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: mobileWidth ? "column" : "row",
          }}
        >
          <div className="dfr">
            <div>
              <div
                className="dfc"
                style={{ paddingLeft: mobileWidth && "20px" }}
              >
                <div className="static-footer-title">
                  ACKO General Insurance Limited
                </div>
                <div className="static-footer-address">
                  2nd Floor, #36/5, Hustlehub One East, Somasandrapalya, 27th
                  Main road, Sector 2, HSR Layout, Bengaluru, Karnataka - 560102
                </div>
                {!mobileWidth && (
                  <>
                    <div className="web-social-active-footer">
                      We’re socially active!
                    </div>
                    <div>
                      <FaFacebook />
                      <FaInstagram className="web-social-arrange" />
                      <AiFillLinkedin className="web-social-arrange" />
                      <AiFillTwitterCircle className="web-social-arrange" />
                      <AiFillYoutube className="web-social-arrange" />
                    </div>
                    <div className="web-download-our-app-footer">
                      Download our app
                    </div>
                  </>
                )}
              </div>
            </div>
            {!mobileWidth && (
              <div>
                <hr
                  style={{
                    marginLeft: "60px",
                    marginRight: "50px",
                    height: "600px",
                    border: "1px solid #000000",
                  }}
                />
              </div>
            )}
          </div>
          <div>
            <div className={mobileWidth ? "dfc" : "dfc web-footer-layout"}>
              {mobileWidth ? (
                <CAccordion flush>
                  <CAccordionItem itemKey={1}>
                    <CAccordionHeader>
                      <div className="web-footer-layout-header">Company</div>
                    </CAccordionHeader>
                    <CAccordionBody>
                      <div className="web-footer-layout-link">About us</div>
                      <div className="web-footer-layout-link">
                        Board of directors
                      </div>
                      <div className="web-footer-layout-link">Careers</div>
                      <div className="web-footer-layout-link">Media kit</div>
                      <div className="web-footer-layout-link">Articles</div>
                      <div className="web-footer-layout-link">
                        Ackology - The tech blog
                      </div>
                      <div className="web-footer-layout-link">Partnerships</div>
                      <div className="web-footer-layout-link">Sitemap</div>
                    </CAccordionBody>
                  </CAccordionItem>
                </CAccordion>
              ) : (
                <>
                  <div className="web-footer-layout-header">Company</div>
                  <div className="web-footer-layout-link">About us</div>
                  <div className="web-footer-layout-link">
                    Board of directors
                  </div>
                  <div className="web-footer-layout-link">Careers</div>
                  <div className="web-footer-layout-link">Media kit</div>
                  <div className="web-footer-layout-link">Articles</div>
                  <div className="web-footer-layout-link">
                    Ackology - The tech blog
                  </div>
                  <div className="web-footer-layout-link">Partnerships</div>
                  <div className="web-footer-layout-link">Sitemap</div>{" "}
                </>
              )}
            </div>
          </div>
          <div>
            <div className={mobileWidth ? "dfc" : "dfc web-footer-layout"}>
              {mobileWidth ? (
                <CAccordion flush>
                  <CAccordionItem itemKey={1}>
                    <CAccordionHeader>
                      <div className="web-footer-layout-header">Support</div>
                    </CAccordionHeader>
                    <CAccordionBody>
                      <div className="web-footer-layout-link">
                        Cancellations & refunds
                      </div>
                      <div className="web-footer-layout-link">
                        Customer service
                      </div>
                      <div className="web-footer-layout-link">Downloads</div>
                      <div className="web-footer-layout-link">
                        Unclaimed amount
                      </div>
                      <div className="web-footer-layout-link">
                        Ackology - The tech blog
                      </div>
                      <div className="web-footer-layout-link">
                        IRDAI website
                      </div>
                      <div className="web-footer-layout-link">
                        Other Products
                      </div>
                    </CAccordionBody>
                  </CAccordionItem>
                </CAccordion>
              ) : (
                <>
                  <div className="web-footer-layout-header">Support</div>
                  <div className="web-footer-layout-link">
                    Cancellations & refunds
                  </div>
                  <div className="web-footer-layout-link">Customer service</div>
                  <div className="web-footer-layout-link">Downloads</div>
                  <div className="web-footer-layout-link">Unclaimed amount</div>
                  <div className="web-footer-layout-link">
                    Ackology - The tech blog
                  </div>
                  <div className="web-footer-layout-link">IRDAI website</div>
                  <div className="web-footer-layout-link">Other Products</div>
                </>
              )}
            </div>
          </div>
          <div>
            <div className={mobileWidth ? "dfc" : "dfc web-footer-layout"}>
              {mobileWidth ? (
                <CAccordion flush>
                  <CAccordionItem itemKey={1}>
                    <CAccordionHeader>
                      <div className="web-footer-layout-header">Legal</div>
                    </CAccordionHeader>
                    <CAccordionBody>
                      <div className="web-footer-layout-link">About us</div>
                      <div className="web-footer-layout-link">
                        Whistleblower policy
                      </div>
                      <div className="web-footer-layout-link">
                        Public disclosure
                      </div>
                      <div className="web-footer-layout-link">
                        Financials & disclosures
                      </div>
                      <div className="web-footer-layout-link">
                        Privacy policy
                      </div>
                      <div className="web-footer-layout-link">
                        Terms & conditions
                      </div>
                      <div className="web-footer-layout-link">
                        Offer terms & conditions
                      </div>
                      <div className="web-footer-layout-link">
                        Stewardship code
                      </div>
                      <div className="web-footer-layout-link">Disclaimer</div>
                      <div className="web-footer-layout-link">
                        Anti fraud policy
                      </div>
                      <div className="web-footer-layout-link">
                        Health underwriting philosophy
                      </div>
                    </CAccordionBody>
                  </CAccordionItem>
                </CAccordion>
              ) : (
                <>
                  <div className="web-footer-layout-header">Legal</div>
                  <div className="web-footer-layout-link">About us</div>
                  <div className="web-footer-layout-link">
                    Whistleblower policy
                  </div>
                  <div className="web-footer-layout-link">
                    Public disclosure
                  </div>
                  <div className="web-footer-layout-link">
                    Financials & disclosures
                  </div>
                  <div className="web-footer-layout-link">Privacy policy</div>
                  <div className="web-footer-layout-link">
                    Terms & conditions
                  </div>
                  <div className="web-footer-layout-link">
                    Offer terms & conditions
                  </div>
                  <div className="web-footer-layout-link">Stewardship code</div>
                  <div className="web-footer-layout-link">Disclaimer</div>
                  <div className="web-footer-layout-link">
                    Anti fraud policy
                  </div>
                  <div className="web-footer-layout-link">
                    Health underwriting philosophy
                  </div>
                </>
              )}
              {mobileWidth && (
                <div style={{ paddingLeft: "20px" }}>
                  <div className="web-social-active-footer">
                    We’re socially active!
                  </div>
                  <div>
                    <FaFacebook />
                    <FaInstagram className="web-social-arrange" />
                    <AiFillLinkedin className="web-social-arrange" />
                    <AiFillTwitterCircle className="web-social-arrange" />
                    <AiFillYoutube className="web-social-arrange" />
                  </div>
                  <div className="web-download-our-app-footer">
                    Download our app
                  </div>
                  <div className="dfc">
                    <div>
                      <img
                        style={{ width: "200px" }}
                        src="https://logodix.com/logo/1338051.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
