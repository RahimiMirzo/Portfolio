import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import styles from "./Footer.module.css"; // Импортируем CSS Module

function Footer() {
  return (
    <MDBFooter className={styles.footer}>
      <section className={`${styles.socialSection} d-flex justify-content-center justify-content-lg-between p-4 border-bottom`}>
        <div className={`${styles.socialText} me-5 d-none d-lg-block`}>
          <span>Connect with me:</span>
        </div>

        <div className={styles.socialIcons}>
          <a href="#" className={`${styles.iconLink} me-4`}>
            <MDBIcon fab icon="github" className={styles.scaleOnHover}/>
          </a>
          <a href="#" className={`${styles.iconLink} me-4`}>
            <MDBIcon fab icon="linkedin-in" className={styles.scaleOnHover}/>
          </a>
          <a href="#" className={`${styles.iconLink} me-4`}>
            <MDBIcon fab icon="twitter" className={styles.scaleOnHover}/>
          </a>
          <a href="#" className={`${styles.iconLink} me-4`}>
            <MDBIcon fab icon="instagram" className={styles.scaleOnHover}/>
          </a>
        </div>
      </section>

      <section className={styles.mainSection}>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3 g-4">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className={`${styles.brand} text-uppercase fw-bold mb-4`}>
                <MDBIcon icon="code" className={`${styles.pulseIcon} me-3`}/>
                DevPortfolio
              </h6>
              <p className={styles.textSecondary}>
                Full-stack developer specializing in modern web applications.
                Passionate about creating intuitive user experiences.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Skills</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#!" className={`${styles.hoverUnderline} ${styles.textSecondary}`}>React</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className={`${styles.hoverUnderline} ${styles.textSecondary}`}>Node.js</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className={`${styles.hoverUnderline} ${styles.textSecondary}`}>TypeScript</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className={`${styles.hoverUnderline} ${styles.textSecondary}`}>MongoDB</a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Projects</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#!" className={`${styles.hoverUnderline} ${styles.textSecondary}`}>E-commerce</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className={`${styles.hoverUnderline} ${styles.textSecondary}`}>Social App</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className={`${styles.hoverUnderline} ${styles.textSecondary}`}>Dashboard</a>
                </li>
                <li className="mb-2">
                  <a href="#!" className={`${styles.hoverUnderline} ${styles.textSecondary}`}>Open Source</a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <ul className={`${styles.contactList} list-unstyled`}>
                <li className="mb-3">
                  <MDBIcon icon="map-marker-alt" className={`${styles.contactIcon} me-3`}/>
                  <span className={styles.textSecondary}>Khujand, Tajikistan</span>
                </li>
                <li className="mb-3">
                  <MDBIcon icon="envelope" className={`${styles.contactIcon} me-3`}/>
                  <a href="mailto:contact@example.com" className={`${styles.hoverUnderline} ${styles.textSecondary}`}>mirzofirdavsrahimov@mail.ru</a>
                </li>
                <li className="mb-3">
                  <MDBIcon icon="phone-alt" className={`${styles.contactIcon} me-3`}/>
                  <a href="tel:+1234567890" className={`${styles.hoverUnderline} ${styles.textSecondary}`}>+992 92 818 19 61</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className={`${styles.copyright} text-center p-4`}>
        © {new Date().getFullYear()} Copyright:
        <a className={`${styles.hoverUnderline} text-reset fw-bold ms-2`} href="#">
          R.Mirzofirdavs
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;