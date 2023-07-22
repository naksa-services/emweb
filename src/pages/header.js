import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <div>
        <div id="preloader">
          <div className="sk-three-bounce">
            <div className="sk-child sk-bounce1"></div>
            <div className="sk-child sk-bounce2"></div>
            <div className="sk-child sk-bounce3"></div>
          </div>
        </div>

        <div id="main-wrapper">
          <div className="nav-header">
            <a href="/" className="brand-logo">
              <img src="em.jpg" className="logo-abbr" alt="Image" width="150px" style={{marginTop:'10px'}} />
              {/* <h3 className="brand-title">Emechanics</h3> */}
            </a>

            <div className="nav-control">
              <div className="hamburger">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </div>
          </div>

          <div className="header">
            <div className="header-content">
              <nav className="navbar navbar-expand">
                <div className="collapse navbar-collapse justify-content-between">
                  <div className="header-left">
                    <div className="dashboard_bar">Dashboard</div>
                  </div>

                  <ul className="navbar-nav header-right">
                    <li className="nav-item">
                      <div className="input-group search-area d-xl-inline-flex d-none">
                        <div className="input-group-append">
                          <button className="input-group-text">
                            <i className="flaticon-381-search-2"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search here..."
                        />
                      </div>
                    </li>
                    <li className="nav-item dropdown notification_dropdown">
                      <a
                        className="nav-link  ai-icon"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        <i className="flaticon-381-ring"></i>
                        <div className="pulse-css"></div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <div
                          id="DZ_W_Notification1"
                          className="widget-media dz-scroll p-3"
                          style={{ height: "380px" }}
                        >
                          <ul className="timeline">
                            <li>
                              <div className="timeline-panel">
                                <div className="media me-2">
                                  <img
                                    alt="image"
                                    width="50"
                                    src="nkasa.png"
                                  />
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">
                                    Dr sultads Send you Photo
                                  </h6>
                                  <small className="d-block">
                                    29 July 2020 - 02:26 PM
                                  </small>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-panel">
                                <div className="media me-2 media-info">KG</div>
                                <div className="media-body">
                                  <h6 className="mb-1">
                                    Resport created successfully
                                  </h6>
                                  <small className="d-block">
                                    29 July 2020 - 02:26 PM
                                  </small>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-panel">
                                <div className="media me-2 media-success">
                                  <i className="fa fa-home"></i>
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">
                                    Reminder : Treatment Time!
                                  </h6>
                                  <small className="d-block">
                                    29 July 2020 - 02:26 PM
                                  </small>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-panel">
                                <div className="media me-2">
                                  <img
                                    alt="image"
                                    width="50"
                                    src="assets/images/avatar/1.jpg"
                                  />
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">
                                    Dr sultads Send you Photo
                                  </h6>
                                  <small className="d-block">
                                    29 July 2020 - 02:26 PM
                                  </small>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-panel">
                                <div className="media me-2 media-danger">
                                  KG
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">
                                    Resport created successfully
                                  </h6>
                                  <small className="d-block">
                                    29 July 2020 - 02:26 PM
                                  </small>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-panel">
                                <div className="media me-2 media-primary">
                                  <i className="fa fa-home"></i>
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">
                                    Reminder : Treatment Time!
                                  </h6>
                                  <small className="d-block">
                                    29 July 2020 - 02:26 PM
                                  </small>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <a className="all-notification" href="#">
                          See all notifications{" "}
                          <i className="ti-arrow-right"></i>
                        </a>
                      </div>
                    </li>

                    <li className="nav-item dropdown header-profile">
                      <a
                        className="nav-link"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        <img
                          src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
                          width="20"
                          alt="image"
                        />
                        <div className="header-info">
                          <span>{sessionStorage.getItem("name")}</span>
                          <small>Vendor</small>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="/profile" className="dropdown-item ai-icon">
                          <svg
                            id="icon-user1"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          <span className="ms-2">Profile </span>
                        </a>

                        <Link to="/logout" className="dropdown-item ai-icon">
                          <svg
                            id="icon-logout"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-danger"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                          </svg>
                          <span className="ms-2">Logout </span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>

          <div className="deznav">
            <div className="deznav-scroll">
              <ul className="metismenu" id="menu">
                <li>
                  <a className="has-arrow ai-icon" href="javascript:void()">
                    <i className="fa fa-dashboard"></i>
                    <span className="nav-text">Dashboard</span>
                  </a>
                  <ul>
                    <li>
                      <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/frenchiser">Frenchiser Order</Link>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <a className="has-arrow ai-icon" href="javascript:void()">
                    <i className="fa fa-user"></i>
                    <span className="nav-text">Vendor</span>
                  </a>
                  <ul>
                    <li>
                      <Link to="/customerProfile">Vendor Details</Link>
                    </li>
                    <li>
                      <Link to="/customerExecutive">Call Support</Link>
                    </li>
                  </ul>
                </li> */}

                <li>
                  <a className="has-arrow ai-icon" href="javascript:void()">
                    <i className="fa fa-user-circle-o"></i>
                    <span className="nav-text">Vendor</span>
                  </a>
                  <ul>
                    <li>
                      <Link to="/allvendor">Vendor Details</Link>
                    </li>
                  
                     
                    
                      {/* <Link to="/personalDetails">Personal Details</Link>
                    </li>
                    <li>
                      <Link to="/bankDetails">Bank Detail</Link>
                    </li>
                    <li>
                      <Link to="/educationalDetails">Eductational Detail</Link>
                    </li>
                    <li>
                      <Link to="/experience">Experience Detail</Link>
                    </li>
                    <li>
                      <Link to="/availibility">Availbility</Link>
                    </li>
                    <li>
                      <Link to="/vendorother">Other Details</Link>
                    </li>
                    <li>
                      <Link to="/profile"> profile</Link>
                    </li>
                    <li>
                      <Link to="/Uploadprofile">Uploade profile</Link>
                    </li>  */}
                  </ul>
                </li>
                <li>
                  <a className="has-arrow ai-icon" href="javascript:void()">
                    <i className="fa fa-user-circle-o"></i>
                    <span className="nav-text">Account</span>
                  </a>
                  <ul>
                   <li>
                      <Link to="/frenchiser_wallet">Wallet Amount</Link>
                    </li> 
                   
                   <li>
                      <Link to="/requestmoney">Request Money</Link>
                    </li> 
                    <li>
                      <Link to="/profile">Frenchiser Profile</Link>
                    </li>
                    {/* <li>
                      <Link to="/register">Sign up</Link>
                    </li>
                    <li>
                      <Link to="/login">Sign in</Link>
                    </li>
                    <li>
                      <Link to="/logout">Sign out</Link>
                    </li> */}
                  </ul>
                </li>

                <li>
                  <a className="has-arrow ai-icon" href="javascript:void()">
                     {/* <i className="flaticon-381-faqs"></i>  */}
                    <i class="fa fa-question-circle"></i>
                    <span className="nav-text">Logout</span>
                  </a>
                  <ul>

                    <li>
                      <Link to="/logout">Logout</Link>
                    </li>
                    {/* <li>
                      <Link to="/banner">Banner</Link>
                    </li>
                    <li>
                      <Link to="/expert_portfolio">Expert Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/recharge_plan">Recharge Plan</Link>
                    </li>
                    <li>
                      <Link to="/gift_plan">Gift Plan</Link>
                    </li> */}
                  </ul>
                </li>
              </ul>
            </div>
            <div className="copyright">
              <p>
                <strong>Kripton Crypto Admin Dashboard</strong> © 2022 All
                Rights Reserved
              </p>
              <p className="fs-12">
                Made with <span className="heart"></span> by DexignZone
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
