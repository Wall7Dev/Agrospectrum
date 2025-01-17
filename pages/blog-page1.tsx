import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import styles from "./blog-page1.module.css";

const BlogPage1: NextPage = () => {
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
    router.push("/media3");
  }, [router]);

  const onLinkPricing4Click = useCallback(() => {
    router.push("/media3");
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

  const onFrameContainerClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onNavRightsvgFillContainerClick = useCallback(() => {
    router.push("/blog-page2");
  }, [router]);

  const onPath2IconClick = useCallback(() => {
    router.push("/blog-page2");
  }, [router]);

  const onNavRightsvgFillContainer1Click = useCallback(() => {
    router.push("/blog-page");
  }, [router]);

  const onPath2Icon2Click = useCallback(() => {
    router.push("/blog-page");
  }, [router]);

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
      <main className={styles.digitalisation} id={`7projects&partermain`}>
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
                      src="/clip-path-group17@2x.png"
                      onClick={onClipPathGroup1Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group18@2x.png"
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
                    src="/images-2-17@2x.png"
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
                    src="/logo8@2x.png"
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
                      src="/line-119@2x.png"
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
                  <button className={styles.media} onClick={onMediaClick}>
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
        <section className={styles.section6partners}>
          <div className={styles.frameParent}>
            <div className={styles.hotWrapper}>
              <div className={styles.hot}>Hot</div>
            </div>
            <div className={styles.hotWrapper}>
              <div className={styles.hot}>Blogs</div>
            </div>
            <div className={styles.hotWrapper}>
              <div className={styles.hot}>News</div>
            </div>
          </div>
          <div className={styles.digitalisationAGameChangerParent}>
            <div className={styles.digitalisationAGameContainer}>
              <span className={styles.d}>D</span>
              <span
                className={styles.igitalisationAGame}
              >{`igitalisation, A Game Changer For `}</span>
              <span className={styles.d}>G</span>
              <span className={styles.igitalisationAGame}>
                hanaian Farmers.
              </span>
            </div>
            <div className={styles.december132023Wrapper}>
              <div className={styles.december132023}>December 13, 2023</div>
            </div>
          </div>
          <div className={styles.image2Wrapper}>
            <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
          </div>
          <div className={styles.inSubSaharanAfricaContainer}>
            <p className={styles.inSubSaharanAfrica}>
              In sub-Saharan Africa, smallholder farmers make up the largest
              cohort. They occupy a much larger share of land in sub-Saharan
              Africa than the global average. In Ghana, about 45% of our
              workforce is employed in Agriculture with the largest group being
              smallholder farmers. This group of farmers contributes about 80%
              of the food produced in Ghana. Hence promoting food security in
              the West African country.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              Albeit the commendable feat these smallholder farmers attained.
              Their industry is still saddled with numerous complexities and
              challenges. Some of such challenges include access to markets,
              lack of information, inadequate finances and infrastructure.
              Digitalization can help farmers and industry players overcome
              these challenges by connecting farmers to global opportunities.
            </p>
            <p className={styles.blankLine}>
              Agrospectrum Ghana Limited, a Ghanaian AgTech business is at the
              forefront of this digital revolution. By leveraging technology,
              Agrospectrum Limited is helping farmers in Ghana access global
              markets and financing by way of inputs and resources;
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              <b className={styles.accessToMarketplaces}>
                Access to Marketplaces:
              </b>
              <span className={styles.agrospectrumLimitedUses}>
                {" "}
                Agrospectrum Limited uses its data collection framework as a
                focal point to provide farmers with inclusion and also open them
                up to global markets. The platform serves as a marketplace where
                all members in the Agric sector can transact. The cocktail of
                solutions provided by Agrospectrum like the Agronomic and
                climate-smart information, and extension services which include
                monitoring ensure that farmers have their produce meeting local
                and foreign specifications. Thus, giving them eligibility for
                certification to European and American Markets for export.
              </span>
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              <b
                className={styles.accessToMarketplaces}
              >{`Access to Information: `}</b>
              <span>
                Digitalization can help farmers access real-time information
                about weather, markets, and crop management. This can help
                farmers make informed decisions and improve their yields. The
                Agrospectrum suite includes the Climate-smart Agric product,
                which is deployed through SMS and Interactive voice response
                (IVR) and call centers in numerous local languages to farmers.
                Now farmers can get access to data that will help them make
                accurate planting, harvesting, and irrigation decisions
                enhancing their yield quality and cutting down on crop losses.
                Thus, bridging the information divide in the agricultural
                sector.
              </span>
            </p>
          </div>
          <img className={styles.image2Icon} alt="" src="/image-3@2x.png" />
          <div className={styles.inSubSaharanAfricaContainer}>
            <p className={styles.blankLine}>
              <b className={styles.accessToMarketplaces}>
                Improved Traceability:
              </b>
              <span>
                {" "}
                Digitalization can help farmers track their products from farm
                to market. This can help improve food safety and quality.
                Agrospectrum with its extension services offered as part of the
                Climate Smart Agric, allows for extensive monitoring of farmers
                and regular checks to ensure that they follow the accepted
                agronomic procedures from the planting to harvesting stage this
                ensures that the commodities produced are of the highest
                quality. As a data-oriented entity, Agrospectrum ensures that
                each bag of produce sold can be tracked and traced to the farmer
                who produced it.
              </span>
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              <b className={styles.accessToMarketplaces}>Access to Finance:</b>
              <span>{` Digitalization can help farmers access finance through digital platforms. This can help farmers invest in their farms and expand their businesses. Agrospectrum serves as a link between value chain actors and the farmers. Agrospectrum helps aggregators access farmers to whom they provide credit in the form of input. These farmers are then allowed to pay back commodities at the end of the season. `}</span>
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p
              className={styles.blankLine}
            >{`Agrospectrum aims to change the nature of credit offered to farmers by onboarding financial institutions and aggregators onto their platforms. Agrospectrum ensures that farmers registered on our platform get inclusion in these programs being run by collecting requisite and salient information including biometrics to ensure that investors are confident in the use of their credit. `}</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.inSubSaharanAfrica}>
              Agrospectrum acts as a marketplace that offers enough
              documentation for all actors in the value chain to transact in a
              risk-free environment.
            </p>
            <p className={styles.blankLine}>
              Digitalization is transforming agriculture in Ghana and connecting
              farmers with global opportunities. Agrospectrum Limited is playing
              a key role in this transformation by providing farmers with access
              to online marketplaces, weather data, and crop management
              information. By leveraging technology, Agrospectrum Limited is
              helping farmers in Ghana overcome the challenges they face and
              improve their livelihoods.
            </p>
            <p className={styles.blankLine}></p>
            <p className={styles.blankLine}>Media Contact:</p>
            <p className={styles.audreyAmaOduro}>Audrey Ama Oduro</p>
            <p className={styles.blankLine}>
              <span className={styles.aodurobslcom1}>{`a.oduro@bsl.com `}</span>
              <span className={styles.accessToMarketplaces}></span>
            </p>
            <p className={styles.blankLine}></p>
            <p className={styles.blankLine}></p>
            <p className={styles.blankLine}></p>
          </div>
          <div className={styles.gradientmsgWrapper}>
            <div className={styles.gradientmsg}>
              <img
                className={styles.gradientmsgChild}
                alt=""
                src="/group-2063@2x.png"
              />
              <div className={styles.weSupportAgribusinessIndustParent}>
                <b
                  className={styles.weSupportAgribusinessContainer}
                  data-animate-on-scroll
                >
                  <p className={styles.blankLine}>
                    We support Agribusiness Industry
                  </p>
                  <p className={styles.blankLine}>
                    To Utilize modern Equipments
                  </p>
                  <p className={styles.blankLine}>for a Better Result.</p>
                </b>
                <div
                  className={styles.vectorParent}
                  onClick={onFrameContainerClick}
                >
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/arrow-94@2x.png"
                  />
                  <div className={styles.viewProducts}>view produCts</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.arrow}>
            <div
              className={styles.navRightsvgFill}
              onClick={onNavRightsvgFillContainerClick}
            >
              <img className={styles.vectorIcon} alt="" src="/vector20.svg" />
              <img
                className={styles.path2Icon}
                alt=""
                src="/path-24.svg"
                onClick={onPath2IconClick}
              />
            </div>
            <b className={styles.faq}>
              <span className={styles.d}>n</span>
              <span className={styles.igitalisationAGame}>
                AVIGATE OUR OTHER BLOG PAGES
              </span>
            </b>
            <div
              className={styles.navRightsvgFill1}
              onClick={onNavRightsvgFillContainer1Click}
            >
              <img className={styles.vectorIcon1} alt="" src="/vector21.svg" />
              <img
                className={styles.path2Icon1}
                alt=""
                src="/path-21.svg"
                onClick={onPath2Icon2Click}
              />
            </div>
          </div>
        </section>
        <div className={styles.footerComponent}>
          <div className={styles.component1}>
            <div className={styles.frameGroup}>
              <div className={styles.download5Parent}>
                <img
                  className={styles.download5Icon}
                  alt=""
                  src="/download-521@2x.png"
                />
                <img
                  className={styles.download5Icon1}
                  alt=""
                  src="/download-523@2x.png"
                />
                <img
                  className={styles.captureIcon}
                  alt=""
                  src="/capture17@2x.png"
                />
                <img
                  className={styles.mofaColorIcon}
                  alt=""
                  src="/mofa-color17@2x.png"
                />
                <img
                  className={styles.download3Icon}
                  alt=""
                  src="/download-317@2x.png"
                />
                <img
                  className={styles.imagesIcon}
                  alt=""
                  src="/images16@2x.png"
                />
                <img
                  className={styles.download6Icon}
                  alt=""
                  src="/download-611@2x.png"
                />
                <img
                  className={styles.download1Icon}
                  alt=""
                  src="/download-117@2x.png"
                />
                <img
                  className={styles.downloadIcon}
                  alt=""
                  src="/download17@2x.png"
                />
                <img
                  className={styles.images1Icon}
                  alt=""
                  src="/images-117@2x.png"
                />
                <img
                  className={styles.download2Icon}
                  alt=""
                  src="/download-217@2x.png"
                />
              </div>
              <div className={styles.download5Group}>
                <img
                  className={styles.download5Icon}
                  alt=""
                  src="/download-534@2x.png"
                />
                <img
                  className={styles.download5Icon1}
                  alt=""
                  src="/download-535@2x.png"
                />
                <img
                  className={styles.captureIcon}
                  alt=""
                  src="/capture18@2x.png"
                />
                <img
                  className={styles.mofaColorIcon}
                  alt=""
                  src="/mofa-color18@2x.png"
                />
                <img
                  className={styles.download3Icon}
                  alt=""
                  src="/download-318@2x.png"
                />
                <img
                  className={styles.imagesIcon}
                  alt=""
                  src="/images17@2x.png"
                />
                <img
                  className={styles.download6Icon}
                  alt=""
                  src="/download-618@2x.png"
                />
                <img
                  className={styles.download1Icon}
                  alt=""
                  src="/download-118@2x.png"
                />
                <img
                  className={styles.downloadIcon}
                  alt=""
                  src="/download18@2x.png"
                />
                <img
                  className={styles.images1Icon}
                  alt=""
                  src="/images-118@2x.png"
                />
                <img
                  className={styles.download2Icon}
                  alt=""
                  src="/download-218@2x.png"
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
                      className={styles.blankLine}
                    >{`Transform your agricultural practices and `}</p>
                    <p className={styles.blankLine}>
                      <span className={styles.accessToMarketplaces}>
                        cultivate success with
                      </span>
                      <b className={styles.accessToMarketplaces}>
                        {" "}
                        industry's best
                      </b>
                      <span>—empowering farmers, streamlining operations,</span>
                    </p>
                    <p className={styles.blankLine}>
                      <span>{`and fostering a connected `}</span>
                      <b className={styles.accessToMarketplaces}>
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
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.nowWereParent}>
                    <div className={styles.nowWere2}>business</div>
                    <div className={styles.frameParent1}>
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
                          className={styles.frameItem}
                          alt=""
                          src="/line-120@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameParent3}>
                      <div className={styles.nowWereWrapper3}>
                        <div className={styles.nowWere7}>{`CONTACT US `}</div>
                      </div>
                      <div className={styles.agrsopectrumLtd}>
                        <span className={styles.d}>A</span>
                        <span
                          className={styles.igitalisationAGame}
                        >{`GRSOPECTRUM `}</span>
                        <span className={styles.d}>l</span>
                        <span className={styles.igitalisationAGame}>TD</span>
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
                <div className={styles.frameParent4}>
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
              <div className={styles.frameParent5}>
                <button className={styles.vectorGroup}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/arrow-104.svg"
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
                        src="/group8.svg"
                      />
                    </div>
                    <div className={styles.facebook}>
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector22.svg"
                      />
                    </div>
                    <div className={styles.twitter}>
                      <img
                        className={styles.vectorIcon3}
                        alt=""
                        src="/vector17.svg"
                      />
                    </div>
                    <div
                      className={styles.linkedinAgrospectrem}
                      onClick={onLinkedinAgrospectremContainerClick}
                    >
                      <img
                        className={styles.vectorIcon4}
                        alt=""
                        src="/vector4.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className={styles.image2Wrapper}>
            <div className={styles.lineWrapper}>
              <div className={styles.lineDiv} />
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
      </main>
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

export default BlogPage1;
