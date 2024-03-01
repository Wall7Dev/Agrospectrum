import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./media2.module.css";

const Media2: NextPage = () => {
  const router = useRouter();
  const [isDrwawerMenuOpen, setDrwawerMenuOpen] = useState(false);

  const onClipPathGroupClick = useCallback(() => {
    window.open("https://bsl.com.gh/");
  }, []);

  const onClipPathGroup1Click = useCallback(() => {
    window.open("https://isg.com.gh/");
  }, []);

  const onClipPathGroup2Click = useCallback(() => {
    window.open("https://sfl.com.gh/");
  }, []);

  const onLgoFrameContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onHomeCContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLinkAboutClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLinkAbout2Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutUsClick = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onLinkPricingClick = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onProducAndServicesClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onLinkPricing2Click = useCallback(() => {
    // Please sync "product_services" to the project
  }, []);

  const onClientspartnersClick = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onLinkPricing3Click = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onMediaClick = useCallback(() => {
    router.push("/media");
  }, [router]);

  const onLinkPricing4Click = useCallback(() => {
    router.push("/media");
  }, [router]);

  const openDrwawerMenu = useCallback(() => {
    setDrwawerMenuOpen(true);
  }, []);

  const closeDrwawerMenu = useCallback(() => {
    setDrwawerMenuOpen(false);
  }, []);

  const onContactUsContainerClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onContactUsTextClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onOurMediaTextClick = useCallback(() => {
    router.push("/media");
  }, [router]);

  const onBtnsContainerClick = useCallback(() => {
    router.push("/media");
  }, [router]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback(() => {
    router.push("/contact-p-age");
  }, [router]);

  const onNowWereTextClick = useCallback(() => {
    router.push("/careers");
  }, [router]);

  const onNowWereText2Click = useCallback(() => {
    router.push("/about-u-s-page");
  }, [router]);

  const onFrameContainer3Click = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onNowWereText3Click = useCallback(() => {
    router.push("/projectspartners");
  }, [router]);

  const onArrowIconClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onNowWereText4Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Agrospectrum+Limited/@5.6353051,-0.1755855,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9bbdee369f39:0xa57b6b7babf17392!8m2!3d5.6352998!4d-0.1730106!16s%2Fg%2F11v60sh254?entry=ttu"
    );
  }, []);

  const onNowWereText5Click = useCallback(() => {
    window.location.href = "tel:+233(0) 593 808 064";
  }, []);

  const onInstagramContainerClick = useCallback(() => {
    window.location.href = "https://www.linkedin.com/company/eagric-gh/";
  }, []);

  const onLinkedinAgrospectremContainerClick = useCallback(() => {
    window.location.href = "https://www.linkedin.com/company/eagric-gh/";
  }, []);

  return (
    <>
      <div className={styles.media}>
        <header className={styles.allnavs}>
          <nav className={styles.navdesktop} id="navBar">
            <div className={styles.logorightnavlink}>
              <div className={styles.logoasset}>
                <button className={styles.arrowframe}>
                  <div
                    className={styles.oursubsidiarylogos}
                    id="ourSubsidiaries"
                  >
                    <img
                      className={styles.clipPathGroup}
                      alt=""
                      src="/clip-path-group3.svg"
                      onClick={onClipPathGroupClick}
                    />
                    <img
                      className={styles.clipPathGroup1}
                      alt=""
                      src="/clip-path-group2@2x.png"
                      onClick={onClipPathGroup1Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group5@2x.png"
                      onClick={onClipPathGroup2Click}
                    />
                    <img
                      className={styles.oursubsidiarylogosChild}
                      alt=""
                      src="/group-93911.svg"
                    />
                  </div>
                  <img
                    className={styles.images21}
                    alt=""
                    src="/images-2-119@2x.png"
                  />
                </button>
                <div
                  className={styles.lgoframe}
                  onClick={onLgoFrameContainerClick}
                >
                  <img
                    className={styles.logoIcon}
                    id="logo"
                    alt=""
                    src="/logo1@2x.png"
                  />
                </div>
              </div>
              <nav className={styles.rightnavlink}>
                <div className={styles.homecParent}>
                  <div className={styles.homec} onClick={onHomeCContainerClick}>
                    <button
                      className={styles.linkAbout}
                      onClick={onLinkAboutClick}
                    >
                      <div
                        className={styles.linkAbout1}
                        onClick={onLinkAbout2Click}
                      >
                        Home
                      </div>
                    </button>
                    <img
                      className={styles.homecChild}
                      alt=""
                      src="/line-15@2x.png"
                    />
                  </div>
                  <button className={styles.aboutus} onClick={onAboutUsClick}>
                    <div
                      className={styles.linkPricing}
                      onClick={onLinkPricingClick}
                    >
                      About Us
                    </div>
                  </button>
                  <button
                    className={styles.producAndServices}
                    onClick={onProducAndServicesClick}
                  >
                    <div
                      className={styles.linkPricing}
                      onClick={onLinkPricing2Click}
                    >{`Product & Services`}</div>
                  </button>
                  <button
                    className={styles.aboutus}
                    onClick={onClientspartnersClick}
                  >
                    <div
                      className={styles.linkPricing}
                      onClick={onLinkPricing3Click}
                    >{`Clients & Partners`}</div>
                  </button>
                  <button className={styles.media1} onClick={onMediaClick}>
                    <div
                      className={styles.linkPricing}
                      onClick={onLinkPricing4Click}
                    >
                      Media
                    </div>
                    <img
                      className={styles.mediaChild}
                      alt=""
                      src="/line-11@2x.png"
                    />
                  </button>
                </div>
                <div className={styles.handburger} onClick={openDrwawerMenu}>
                  <div className={styles.handburgerChild} />
                  <div className={styles.handburgerChild} />
                  <div className={styles.handburgerInner} />
                </div>
                <button
                  className={styles.contactusContainer}
                  onClick={onContactUsContainerClick}
                >
                  <div
                    className={styles.contactUs}
                    onClick={onContactUsTextClick}
                  >
                    Contact Us
                  </div>
                </button>
              </nav>
            </div>
          </nav>
        </header>
        <div className={styles.mediaimage2}>
          <img
            className={styles.bottomBlurIcon}
            alt=""
            src="/bottom-blur1@2x.png"
          />
          <div className={styles.container}>
            <div className={styles.cardText}>
              <div className={styles.card}>
                <div className={styles.img}>
                  <img className={styles.blurIcon} alt="" src="/blur@2x.png" />
                  <img className={styles.imgIcon} alt="" src="/img20@2x.png" />
                </div>
              </div>
              <div className={styles.coralReef}>Coral Reef</div>
            </div>
            <div className={styles.cardText1}>
              <div className={styles.card}>
                <div className={styles.img}>
                  <img className={styles.blurIcon} alt="" src="/blur4@2x.png" />
                  <img className={styles.imgIcon} alt="" src="/img21@2x.png" />
                </div>
              </div>
              <div className={styles.coralReef}>Ripples</div>
            </div>
            <div className={styles.cardText2}>
              <div className={styles.card}>
                <div className={styles.img}>
                  <img className={styles.blurIcon} alt="" src="/blur7@2x.png" />
                  <img className={styles.imgIcon} alt="" src="/img22@2x.png" />
                </div>
              </div>
              <div className={styles.coralReef}>Input Credit</div>
            </div>
            <div className={styles.cardText3}>
              <div className={styles.card3}>
                <div className={styles.img3}>
                  <img
                    className={styles.blurIcon3}
                    alt=""
                    src="/blur6@2x.png"
                  />
                  <img className={styles.imgIcon3} alt="" src="/img23@2x.png" />
                </div>
              </div>
              <div className={styles.coralReef}>Enumerations</div>
            </div>
          </div>
          <div className={styles.ourMedia} onClick={onOurMediaTextClick}>
            Our Media
          </div>
          <div className={styles.btns} onClick={onBtnsContainerClick}>
            <div className={styles.btn}>
              <img
                className={styles.bgBlurIcon}
                alt=""
                src="/bg-blur7@2x.png"
              />
              <div className={styles.button}>
                <div className={styles.div}>←</div>
              </div>
            </div>
            <div className={styles.btn1}>
              <img
                className={styles.bgBlurIcon}
                alt=""
                src="/bg-blur61@2x.png"
              />
              <div className={styles.button}>
                <div className={styles.div}>→</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.labels}>
          <div className={styles.games}>Games</div>
          <div className={styles.games}>Researches</div>
          <div className={styles.games}>Events</div>
          <h1 className={styles.awards}>Awards</h1>
          <div className={styles.games}>Conferences</div>
          <div className={styles.games}>Seminars</div>
          <div className={styles.games}>Games</div>
        </div>
        <div className={styles.footerComponent}>
          <div className={styles.component1}>
            <div className={styles.frameParent}>
              <div className={styles.download5Parent}>
                <img
                  className={styles.download5Icon}
                  alt=""
                  src="/download-59@2x.png"
                />
                <img
                  className={styles.download5Icon1}
                  alt=""
                  src="/download-513@2x.png"
                />
                <img
                  className={styles.captureIcon}
                  alt=""
                  src="/capture5@2x.png"
                />
                <img
                  className={styles.mofaColorIcon}
                  alt=""
                  src="/mofa-color7@2x.png"
                />
                <img
                  className={styles.download3Icon}
                  alt=""
                  src="/download-35@2x.png"
                />
                <img
                  className={styles.imagesIcon}
                  alt=""
                  src="/images6@2x.png"
                />
                <img
                  className={styles.download6Icon}
                  alt=""
                  src="/download-65@2x.png"
                />
                <img
                  className={styles.download1Icon}
                  alt=""
                  src="/download-15@2x.png"
                />
                <img
                  className={styles.downloadIcon}
                  alt=""
                  src="/download5@2x.png"
                />
                <img
                  className={styles.images1Icon}
                  alt=""
                  src="/images-15@2x.png"
                />
                <img
                  className={styles.download2Icon}
                  alt=""
                  src="/download-25@2x.png"
                />
              </div>
              <div className={styles.download5Group}>
                <img
                  className={styles.download5Icon}
                  alt=""
                  src="/download-511@2x.png"
                />
                <img
                  className={styles.download5Icon1}
                  alt=""
                  src="/download-512@2x.png"
                />
                <img
                  className={styles.captureIcon}
                  alt=""
                  src="/capture6@2x.png"
                />
                <img
                  className={styles.mofaColorIcon}
                  alt=""
                  src="/mofa-color8@2x.png"
                />
                <img
                  className={styles.download3Icon}
                  alt=""
                  src="/download-36@2x.png"
                />
                <img
                  className={styles.imagesIcon}
                  alt=""
                  src="/images5@2x.png"
                />
                <img
                  className={styles.download6Icon}
                  alt=""
                  src="/download-66@2x.png"
                />
                <img
                  className={styles.download1Icon}
                  alt=""
                  src="/download-16@2x.png"
                />
                <img
                  className={styles.downloadIcon}
                  alt=""
                  src="/download7@2x.png"
                />
                <img
                  className={styles.images1Icon}
                  alt=""
                  src="/images-16@2x.png"
                />
                <img
                  className={styles.download2Icon}
                  alt=""
                  src="/download-26@2x.png"
                />
              </div>
            </div>
          </div>
          <footer className={styles.footer}>
            <div
              className={styles.transformParent}
              id="footercontent"
              data-animate-on-scroll
            >
              <div className={styles.transform}>
                <div className={styles.nowWereWrapper}>
                  <div className={styles.nowWere}>TRANSFORM with</div>
                </div>
                <div className={styles.nowWereContainer}>
                  <div className={styles.nowWere1}>AGROSPECTRUM</div>
                </div>
                <div className={styles.nuncUltricesTellusWrapper}>
                  <div className={styles.nuncUltricesTellusContainer}>
                    <p
                      className={styles.transformYourAgricultural}
                    >{`Transform your agricultural practices and `}</p>
                    <p className={styles.transformYourAgricultural}>
                      <span className={styles.cultivateSuccessWith}>
                        cultivate success with
                      </span>
                      <b className={styles.cultivateSuccessWith}>
                        {" "}
                        industry's best
                      </b>
                      <span>—empowering farmers, streamlining operations,</span>
                    </p>
                    <p className={styles.transformYourAgricultural}>
                      <span>{`and fostering a connected `}</span>
                      <b className={styles.cultivateSuccessWith}>
                        global community
                      </b>
                    </p>
                  </div>
                </div>
                <button
                  className={styles.getInTouchWrapper}
                  onClick={onFrameButtonClick}
                >
                  <div className={styles.getInTouch}>GET IN TOUCH</div>
                </button>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.nowWereParent}>
                    <div className={styles.nowWere2}>business</div>
                    <div className={styles.frameDiv}>
                      <div className={styles.nowWereFrame}>
                        <div
                          className={styles.nowWere3}
                          onClick={onNowWereTextClick}
                        >
                          CAREERS
                        </div>
                      </div>
                      <div className={styles.nowWereFrame}>
                        <div
                          className={styles.nowWere4}
                          onClick={onNowWereText2Click}
                        >{`ABOUT US `}</div>
                      </div>
                      <div className={styles.nowWereWrapper2}>
                        <div className={styles.nowWere5}>PRIVACY POLICY</div>
                      </div>
                      <div
                        className={styles.nowWereGroup}
                        onClick={onFrameContainer3Click}
                      >
                        <div
                          className={styles.nowWere6}
                          onClick={onNowWereText3Click}
                        >
                          PARTNERS
                        </div>
                        <img
                          className={styles.frameChild}
                          alt=""
                          src="/line-12@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameParent2}>
                      <div className={styles.nowWereWrapper3}>
                        <div className={styles.nowWere7}>{`CONTACT US `}</div>
                      </div>
                      <div className={styles.agrsopectrumLtd}>
                        <span className={styles.a}>A</span>
                        <span
                          className={styles.grsopectrum}
                        >{`GRSOPECTRUM `}</span>
                        <span className={styles.a}>l</span>
                        <span className={styles.grsopectrum}>TD</span>
                      </div>
                    </div>
                    <div className={styles.nowWereParent1}>
                      <div className={styles.nowWere8}>EAST LEGON office</div>
                      <div className={styles.nowWereParent2}>
                        <div className={styles.nowWere9}>No 24 Maseru St</div>
                        <div className={styles.nowWere9}>East Legon,</div>
                        <div className={styles.nowWere9}>Accra - ghana</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.nowWereParent3}>
                    <div className={styles.nowWere8}>BSL HEAD OFFICE</div>
                    <div className={styles.nowWere13}>No 24 Botwe</div>
                    <div className={styles.nowWere13}>Dzorwulu - Accra</div>
                  </div>
                  <div className={styles.nowWereParent4}>
                    <div className={styles.nowWere8}>TAMALE office</div>
                    <div className={styles.nowWereParent5}>
                      <div className={styles.nowWere16}>Tamale.</div>
                      <div className={styles.nowWere17}>16 Dagomba Road,</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <button className={styles.vectorParent}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/arrow-103.svg"
                    onClick={onArrowIconClick}
                  />
                  <div
                    className={styles.nowWere18}
                    onClick={onNowWereText4Click}
                  >
                    GET DIRECTION
                  </div>
                </button>
                <div className={styles.nowWereParent6}>
                  <div className={styles.nowWere19}>
                    <div className={styles.nowWere20}>PHONE</div>
                  </div>
                  <div
                    className={styles.nowWere21}
                    onClick={onNowWereText5Click}
                  >
                    +233(0) 593 808 064
                  </div>
                </div>
                <div className={styles.nowWereParent7}>
                  <div className={styles.nowWere22}>
                    <div className={styles.nowWere23}>EMAIL</div>
                  </div>
                  <div className={styles.nowWere24}>
                    <div className={styles.nowWere25}>
                      customercare@bsl.com.gh
                    </div>
                  </div>
                </div>
                <div className={styles.nowWereParent8}>
                  <div className={styles.nowWere26}>
                    <div className={styles.nowWere27}>{`FOLLOW US `}</div>
                  </div>
                  <div className={styles.instagramParent}>
                    <div
                      className={styles.instagram}
                      onClick={onInstagramContainerClick}
                    >
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group1.svg"
                      />
                    </div>
                    <div className={styles.facebook}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className={styles.twitter}>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector7.svg"
                      />
                    </div>
                    <div
                      className={styles.linkedinAgrospectrem}
                      onClick={onLinkedinAgrospectremContainerClick}
                    >
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className={styles.frameParent5}>
            <div className={styles.lineWrapper}>
              <div className={styles.frameInner} />
            </div>
            <div className={styles.nowWereParent9}>
              <div className={styles.nowWere28}>
                No 24 Maseru Street,East Legon -Accra
              </div>
              <div className={styles.nowWere29}>
                © Copyright 2023 Agrospectrum Ltd. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDrwawerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrwawerMenu}
        >
          <DrwawerMenu onClose={closeDrwawerMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Media2;
