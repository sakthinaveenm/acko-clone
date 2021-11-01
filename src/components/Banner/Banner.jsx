import React, { useEffect, useState } from "react";
import "./Banner.css";
import classNames from "classnames";
import InsuranceTAB from "../InsuranceTAB/InsuranceTAB";
import DisplayAds from "../../hikw.png";

export default function Banner({ mobileWidth }) {
  const BannerHeading = classNames(
    { "mobView-banner-heading": mobileWidth },
    { "webView-banner-heading": !mobileWidth }
  );
  const BannersubHeading = classNames(
    { "mobView-banner-sub-heading": mobileWidth },
    { "webView-banner-sub-heading": !mobileWidth }
  );
  const SpaceAllocation = classNames(
    { "space-Allocation-mob": mobileWidth }
    // { "webView-banner-sub-heading": !mobileWidth }
  );
  const DisableContents = classNames({ "display-none": mobileWidth });
  const Bannercolor = classNames(
    { "banner-none": mobileWidth },
    { banner: !mobileWidth }
  );

  return (
    <div style={{ width: "100%", justifyContent: "space-between" }}>
      <div className={`dfr ${Bannercolor}`}>
        <div className={`fc left-banner-image ${DisableContents}`}>
          <img
            src="https://acko-home-prod.ackoassets.com/next_assets/5ce5234a43ed2b5d41ff9ba5bf62a3e996e5d026/_next/static/images/homepage-banner-illustration-1-5d2a4d352884a025c5e728efb0a4c6ce.svg"
            alt=""
          />
        </div>
        <div className={SpaceAllocation}>
          <div className="dfc  container-fluid">
            <div className={BannerHeading}>
              <div>Insurance made easy</div>
            </div>

            <div className={BannersubHeading}>
              Zero comission,zero Paperwork
            </div>
            <div className={mobileWidth ? "center-tab" : "center-tab"}>
              <InsuranceTAB mobileWidth={mobileWidth} />
            </div>
          </div>
        </div>
        <div className={`fc right-banner-image ${DisableContents}`}>
          <img
            src="https://acko-home-prod.ackoassets.com/next_assets/5ce5234a43ed2b5d41ff9ba5bf62a3e996e5d026/_next/static/images/homepage-banner-illustration-2-99577afed0f02e7ee1411f1e8aede6c9.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
