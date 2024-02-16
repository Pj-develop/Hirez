import React from "react";
//import { Link } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBIcon,
  MDBCol,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
        <FontAwesomeIcon icon="fa-brands fa-youtube" />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faXTwitter} />
        <FontAwesomeIcon icon={["fab", "twitter"]} /> */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <svg
                  width="284"
                  height="63"
                  viewBox="0 0 284 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M55.9223 0H9.07428C8.56946 4.58965 4.72014 8.34258 0 8.82246V54.5344C4.72014 55.1373 8.32966 58.5211 9.07428 63H56.0485C56.4271 58.5211 60.1503 54.9035 64.618 54.4113V8.82246C60.024 8.09648 56.4145 4.47891 55.9223 0ZM51.2527 49.8217C46.6713 49.8217 48.88 49.5756 44.2987 49.5756C39.7804 49.5756 41.6483 49.8217 37.2184 49.8217C36.4738 49.8217 36.6 48.8127 37.2184 48.6158C40.096 47.6807 40.1086 47.3607 40.3231 47.0408C41.6357 45.1213 41.0678 36.8279 41.0678 33.1365C41.0678 32.4844 40.26 31.5615 39.3261 31.5615H25.2919C24.3579 31.5615 23.5502 32.4844 23.5502 33.1365C23.5502 36.8279 22.9823 45.1213 24.2948 47.0408C24.5094 47.3484 24.522 47.6807 27.3995 48.6158C28.018 48.8127 28.1568 49.8217 27.3995 49.8217C22.9697 49.8217 24.8375 49.5756 20.3193 49.5756C15.738 49.5756 17.9466 49.8217 13.3653 49.8217C12.3683 49.8217 12.6333 48.4928 13.3653 48.4928C14.6526 48.0744 15.0691 48.0621 16.104 46.7947C17.0758 45.2074 17.101 41.3314 17.101 31.0693V18.617C17.101 15.8854 15.5613 15.1348 13.4915 14.6303C12.3809 14.3596 12.9867 13.1783 13.6177 13.1783C18.2243 13.1783 16.2176 13.4244 20.8242 13.4244C24.9511 13.4244 22.9066 13.1783 27.0335 13.1783C27.45 13.1783 28.1063 14.1996 27.1597 14.5072C26.5413 14.7041 23.6764 14.9625 23.6764 19.343C23.6764 24.9539 23.6512 26.209 23.8026 27.8086C23.8026 27.9686 24.0929 29.3836 25.4181 29.3836H39.1999C40.5251 29.3836 40.8153 27.9686 40.8153 27.8086C40.9668 26.209 40.9415 24.9539 40.9415 19.343C40.9415 14.9625 38.0766 14.7041 37.4582 14.5072C36.5117 14.1996 37.168 13.1783 37.5844 13.1783C41.7114 13.1783 39.6669 13.4244 43.7938 13.4244C48.4004 13.4244 46.3937 13.1783 51.0002 13.1783C51.6187 13.1783 52.2497 14.3596 51.1265 14.6303C49.0567 15.1348 47.5169 15.8977 47.5169 18.617V31.0693C47.5169 41.3314 47.5296 45.2074 48.514 46.7947C49.5489 48.0498 49.9527 48.0744 51.2527 48.4928C51.9847 48.4928 52.2371 49.8217 51.2527 49.8217Z"
                    fill="#009688"
                  />
                  <path
                    d="M75.3499 43.86V15.54H78.2299V43.86H75.3499ZM80.8699 46.548V12.852H72.7099V46.548H80.8699ZM71.5099 47.748V11.652H82.0699L86.7259 16.596V52.404H76.4539L71.5099 47.748ZM122.184 21.156C122.568 21.156 122.968 21.188 123.384 21.252C123.8 21.316 124.184 21.428 124.536 21.588C124.888 21.748 125.176 21.972 125.4 22.26C125.656 22.548 125.784 22.932 125.784 23.412C125.784 23.86 125.656 24.228 125.4 24.516C125.144 24.804 124.824 25.028 124.44 25.188C124.088 25.348 123.688 25.46 123.24 25.524C122.824 25.588 122.456 25.62 122.136 25.62H104.376V21.156H122.184ZM122.136 28.26C122.904 28.26 123.656 28.18 124.392 28.02C125.16 27.828 125.848 27.54 126.456 27.156C127.064 26.772 127.544 26.276 127.896 25.668C128.28 25.028 128.472 24.276 128.472 23.412C128.472 22.516 128.296 21.748 127.944 21.108C127.592 20.468 127.112 19.956 126.504 19.572C125.928 19.188 125.256 18.916 124.488 18.756C123.752 18.564 122.984 18.468 122.184 18.468H101.736V28.26H122.136ZM126.504 30.42C126.056 30.676 125.56 30.868 125.016 30.996C124.472 31.124 123.96 31.252 123.48 31.38C125.272 33.492 127.064 35.572 128.856 37.62C130.68 39.668 132.504 41.748 134.328 43.86H130.44L119.352 31.14H101.736V43.86H98.7596V15.54H122.184C123.496 15.54 124.712 15.684 125.832 15.972C126.984 16.26 127.96 16.724 128.76 17.364C129.592 18.004 130.232 18.82 130.68 19.812C131.16 20.804 131.4 22.004 131.4 23.412C131.4 25.172 131 26.628 130.2 27.78C129.4 28.9 128.184 29.78 126.552 30.42H126.504ZM134.088 23.412C134.088 21.588 133.8 20.02 133.224 18.708C132.648 17.364 131.832 16.26 130.776 15.396C129.72 14.532 128.456 13.892 126.984 13.476C125.544 13.06 123.944 12.852 122.184 12.852H96.1676V46.548H104.376V33.78H118.104L129.144 46.548H140.184L128.088 32.676C132.088 30.916 134.088 27.828 134.088 23.412ZM94.9676 47.748V11.652H122.184C123.432 11.652 124.632 11.748 125.784 11.94C126.936 12.1 128.088 12.452 129.24 12.996C130.424 13.54 131.64 14.324 132.888 15.348C134.168 16.372 135.528 17.732 136.968 19.428C137.896 20.356 138.616 21.604 139.128 23.172C139.672 24.708 139.944 26.388 139.944 28.212C139.944 30.324 139.48 32.196 138.552 33.828C137.656 35.46 136.344 36.788 134.616 37.812C135.608 38.964 136.648 40.164 137.736 41.412C138.824 42.66 139.912 43.924 141 45.204C142.088 46.452 143.16 47.684 144.216 48.9C145.304 50.148 146.328 51.316 147.288 52.404H133.464L128.616 47.748L121.608 39.636H110.232V52.404H99.9116L94.9676 47.748ZM156.757 28.26H181.189V31.14H156.757V40.932H186.181V43.86H153.781V15.54H186.133V18.468H156.757V28.26ZM159.397 21.156H188.821V12.852H151.093V46.548H188.869V38.244H159.397V33.78H183.829V25.62H159.397V21.156ZM149.893 47.748V11.652H190.021L194.677 16.596V27.012H187.333L189.685 29.364V37.044L194.725 41.988V52.404H154.837L149.893 47.748ZM206.549 15.54H234.869V17.94L210.149 40.932H236.405V43.86H205.061V41.46L229.877 18.468H206.549V15.54ZM203.861 21.156H223.205L202.421 40.308V46.548H239.045V38.244H216.869L237.557 19.14V12.852H203.861V21.156ZM202.661 11.652H238.757L243.413 16.596V24.42L229.685 37.044H240.245L244.901 41.988V52.404H206.165L201.221 47.748V39.78L215.045 27.012H207.605L202.661 22.356V11.652Z"
                    fill="#009688"
                  />
                </svg>
              </h6>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "32px",
                  color: "#007066",
                }}
              >
                Subscribe to our newsletter
              </p>

              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  aria-describedby="button-addon2"
                />{" "}
                <button
                  class="btn btn-success"
                  type="button"
                  id="button-addon2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                    />
                  </svg>
                </button>
              </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
              <p>
                <a href="#!" className="text-reset">
                  Job Search
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Employer
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  CV Analyzer
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  AI Chat
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">About Us</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Premium
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Premium
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                BH-1 ,Lovely Professional University,Phagwara,Punjab,India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@hirez.in
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 95184 16761
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 91 99357 28402
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 h4 "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <p>© 2024 Copyright: All rights Reserved by HIREZ</p>
      </div>
    </MDBFooter>
  );
}
