import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import DrwawerMenu from "../components/drwawer-menu";
import PortalDrawer from "../components/portal-drawer";
import Arrow from "../components/arrow";
import FOOTERCOMPONENT11 from "../components/f-o-o-t-e-r-c-o-m-p-o-n-e-n-t11";
import styles from "./blog-page3.module.css";

const BlogPage3: NextPage = () => {
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

  return (
    <>
      <main className={styles.ourawards} id={`7projects&partermain`}>
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
                      src="/clip-path-group52@2x.png"
                      onClick={onClipPathGroup1Click}
                    />
                    <img
                      className={styles.clipPathGroup2}
                      alt=""
                      src="/clip-path-group62@2x.png"
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
                    src="/images-2-15@2x.png"
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
                    src="/logo22@2x.png"
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
                      src="/line-1111@2x.png"
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
          <div className={styles.agrospectrumLimitedWinsTwoParent}>
            <div className={styles.agrospectrumLimitedWins}>
              Agrospectrum Limited wins two prestigious awards at Africa
              Agricbusiness Awards 2023
            </div>
            <div className={styles.november232023Wrapper}>
              <div className={styles.november232023}>November 23, 2023</div>
            </div>
          </div>
          <img
            className={styles.mrCastroAwards1}
            alt=""
            src="/mr-castro-awards-1@2x.png"
          />
          <div className={styles.agrospectrumLimitedAContainer}>
            <p className={styles.agrospectrumLimitedA}>
              Agrospectrum Limited, a prominent player in the agricultural
              sector, achieved notable recognition by clinching two prestigious
              awards at the Africa Agribusiness Awards 2023, held at the Accra
              International Conference in Accra on November 22, 2023.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              The company received the distinguished titles of "Outstanding
              African Agribusiness Data Management Company of the Year" and
              "African Agritech Company of the Year" during the awards ceremony,
              which took place as part of the 6th edition of Agrofood and
              Plastprintpack Ghana 2023. This significant event, occurring from
              November 21 to 23, served as a vital business platform for the
              Ghanaian industry and was organized by Fairtrade Messe, the German
              trade show specialists, in collaboration with their local partner
              Geovision.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              Agrospectrum's leadership team expressed deep gratitude for the
              honors bestowed upon them and reaffirmed the company's unwavering
              commitment to advancing the agricultural sector. Castro
              Antwi-Danso, the General Manager of Agrospectrum Limited,
              commented on the achievement, stating, "This award is a testament
              to the hard work and dedication of the entire Agrospectrum team.
              We are honored to be recognized for our efforts in transforming
              agriculture and contributing to sustainable development in
              Africa."
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              Antwi-Danso emphasized that Agrospectrum would persist in setting
              high standards in agribusiness data management and reiterated the
              company's mission to foster positive change, connect futures, and
              reshape the agricultural landscape for a more sustainable and
              inclusive future.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              These accolades underscore Agrospectrum's dedication to
              transforming traditional agricultural paradigms and empowering
              stakeholders across the agricultural value chain. The company's
              primary focus on Africa reflects its commitment to creating an
              inclusive marketplace that caters to the diverse needs of farmers,
              government agencies, financial institutions, and service
              providers.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              Agrospectrum's innovative solutions address challenges faced by
              the sector, facilitating seamless connections between farmers and
              markets, providing support services for farmer well-being,
              leveraging technology for informed decision-making, and promoting
              financial inclusion and access to inputs. The awards recognize the
              company's commitment to sustainability and innovation,
              particularly its emphasis on climate-smart agriculture to help
              farmers adapt to changing weather patterns.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              By employing diverse delivery channels, including SMS, voice
              messages, and other technological means, Agrospectrum ensures
              widespread access to its services. The company's recognition as
              the Outstanding African Agribusiness Data Management Company of
              the Year and African Agritech Company of the Year highlights its
              pivotal role as a catalyst for positive change in the agricultural
              landscape.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              As an affiliate of Broadspectrum Limited, Agrospectrum remains
              committed to mainstreaming its agricultural technology services to
              enhance the lives of all agricultural value chain actors.
            </p>
          </div>
          <div className={styles.gradientmsgWrapper}>
            <div className={styles.gradientmsg}>
              <img
                className={styles.gradientmsgChild}
                alt=""
                src="/group-20621@2x.png"
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
                    src="/arrow-92@2x.png"
                  />
                  <div className={styles.viewProducts}>view produCts</div>
                </div>
              </div>
            </div>
          </div>
          <Arrow />
        </section>
        <FOOTERCOMPONENT11 />
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

export default BlogPage3;
