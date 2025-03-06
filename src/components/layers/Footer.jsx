import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <MDBFooter className={styles.footer}>
     
      <section className={`${styles.socialSection} d-flex justify-content-center justify-content-lg-between p-4 border-bottom`}>
        <div className={`${styles.socialText} me-5 d-none d-lg-block`}>
          <span>Connect with me:</span>
        </div>

        <div className={styles.socialIcons}>
          <a href="https://github.com/RahimiMirzo" target="_blank" rel="noreferrer" className={`${styles.iconLink} me-4`}>
            <MDBIcon fab icon="github" className={styles.scaleOnHover}/>
          </a>
          <a href="https://www.instagram.com/mlrzofirdavs?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noreferrer" className={`${styles.iconLink} me-4`}>
           <MDBIcon fab icon="instagram" className={styles.scaleOnHover}/>
          </a>
          <a href="https://t.me/mirzofirdavs" target="_blank" rel="noreferrer" className={`${styles.iconLink} me-4`}>
            <MDBIcon fab icon="telegram" className={styles.scaleOnHover}/>
          </a>
        </div>
      </section>

    
      <section className={styles.mainSection}>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3 g-4">
            
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className={`${styles.brand} text-uppercase fw-bold mb-4`}>
                <MDBIcon icon="react" className={`${styles.pulseIcon} me-3`}/>
                🚀 React Developer
              </h6>
              <p className={styles.textSecondary}>
                Building dynamic web applications using modern technologies.
                Specializing in React ecosystem, performance optimization, and UI/UX.
              </p>
            </MDBCol>

            {/* Tech Stack Section */}
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Tech Stack</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className={styles.textSecondary}>React + Hooks</span>
                </li>
                <li className="mb-2">
                  <span className={styles.textSecondary}>TypeScript</span>
                </li>
                <li className="mb-2">
                  <span className={styles.textSecondary}>React Router 6</span>
                </li>
                <li className="mb-2">
                  <span className={styles.textSecondary}>Webpack/Vite</span>
                </li>
              </ul>
            </MDBCol>

            {/* Projects Section */}
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Projects</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="PROJECT_LINK" className={`${styles.hoverUnderline} ${styles.textSecondary}`}>E-commerce</a>
                </li>
                <li className="mb-2">
                  <a href="PROJECT_LINK" className={`${styles.hoverUnderline} ${styles.textSecondary}`}>Admin Panel</a>
                </li>
                <li className="mb-2">
                  <a href="PROJECT_LINK" className={`${styles.hoverUnderline} ${styles.textSecondary}`}>UI Kit</a>
                </li>
              </ul>
            </MDBCol>

           
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <ul className={`${styles.contactList} list-unstyled`}>
                <li className="mb-3">
                   <MDBIcon icon="phone-alt" className={`${styles.contactIcon} me-3`}/>
                      <a href="tel:+992-92-818-19-61" className={`${styles.hoverUnderline} ${styles.textSecondary}`}>
                        +992-92-818-19-61
                    </a>
                 </li>
                <li className="mb-3">
                  <MDBIcon icon="envelope" className={`${styles.contactIcon} me-3`}/>
                  <a href="mailto:mirzofirdavsrahimov@mail.ru" className={`${styles.hoverUnderline} ${styles.textSecondary}`}>mirzofirdavsrahimov@mail.ru</a>
                </li>
                <li className="mb-3">
                <MDBIcon icon="map-marker-alt" className={`${styles.contactIcon} me-3`}/>
                  <span className={styles.textSecondary}>Khujand(Khodhent), Tajikistan 👑 </span>
                 </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      
      <div className={`${styles.copyright} text-center p-4`}>
        © {new Date().getFullYear()} 
        <a className={`${styles.hoverUnderline} text-reset fw-bold ms-2`} href="#">
         R. Mirzofirdavs
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;