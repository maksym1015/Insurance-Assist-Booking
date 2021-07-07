import { useState } from "react";

const Layout = (props) => {
  const [hambugerActive, setHambugerActiveState] = useState(false);
  const hamburgerHandler = () => {
    setHambugerActiveState(!hambugerActive);
  };

  let humbugerClsName = "hamburger ";
  let navMenuClsName = "nav-menu-links w-nav-menu";
  if (hambugerActive) {
    humbugerClsName += "active";
    navMenuClsName += " active";
  }
  return (
    <>
      <header>
        <div className='navbar-container'>
          <div
            data-collapse='medium'
            data-animation='default'
            data-duration='12'
            data-easing='ease-in-out'
            data-easing2='ease-in-out'
            id='typeform5'
            role='banner'
            className='navbar w-nav'
          >
            <div className='container nav-bar-container centered-links-nav'>
              <a href='/' className='brand w-nav-brand' aria-label='home'>
                <img
                  src='https://assets.website-files.com/603deb9a43f8ac0ae37579d5/607faebb3127fd6f6153e6cc_img_insuranceassist_logo.svg'
                  width='160'
                  alt='The Insurance Assist Homepage'
                />
              </a>
              <nav
                role='navigation'
                id='w-node-_849c6709-de55-7e6d-ec2b-999791252559-91252555'
                className={navMenuClsName}
              >
                <a href='/' className='nav-menu-link'>
                  Home
                </a>
                <a href='/about' className='nav-menu-link'>
                  About
                </a>
                <a
                  href='/insurance'
                  aria-current='page'
                  className='nav-menu-link w--current'
                >
                  Insurance 101
                </a>
                <a
                  href='/insurance'
                  aria-current='page'
                  className='nav-menu-link w--current'
                >
                  Meeting
                </a>
                <a href='/contact' className='nav-menu-link'>
                  Contact
                </a>
              </nav>
              <div
                id='w-node-_849c6709-de55-7e6d-ec2b-999791252586-91252555'
                className='nav-button-container'
              >
                <div
                  className={humbugerClsName}
                  onClick={hamburgerHandler}
                  onKeyDown={hamburgerHandler}
                  role='button'
                  tabIndex='0'
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <a
                  id='typeform4'
                  href='https://form.typeform.com/to/CJsgiesH'
                  target='_blank'
                  rel='noreferrer'
                  className='button button-outline nav-bar-button'
                >
                  Get a Review
                </a>
              </div>
            </div>
            <div
              className='w-nav-overlay'
              data-wf-ignore=''
              id='w-nav-overlay-0'
            ></div>
          </div>
        </div>
      </header>
      {props.children}
      <footer>
        <div className='footer'>
          <div className='container'>
            <div className='footer-halves'>
              <div className='footer-left-section'>
                <div className='div-block-4'>
                  <div className='card bg-primary-2'>
                    <div className='card-body card-body-small'>
                      <div className='w-layout-grid icon-list-vertical'>
                        <div className='icon-list-item'>
                          <img
                            src='https://assets.website-files.com/603deb9a43f8ac0ae37579d5/603deb9a43f8ac51be757a42_icon-mail.svg'
                            alt='email icon'
                            className='space-right email_icon'
                          />
                          <div className='text-block-4'>
                            <a href='mailto: assist@theinsuranceassist.com'>
                              assist@theinsuranceassist.com
                            </a>
                          </div>
                        </div>
                        <div className='icon-list-item'>
                          <img
                            src='https://assets.website-files.com/603deb9a43f8ac0ae37579d5/603deb9a43f8aca6c9757b76_icon-phone.alt-dark.svg'
                            alt='phone icon'
                            className='space-right'
                          />
                          <div className='text-block-5'>(610) 807-7755</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='footer-halves-section'>
                <div className='footer-links-grid-3-column'>
                  <div className='footer-link-list'>
                    <a href='/' className='footer-link-list-link-dark'>
                      Home
                    </a>
                    <a
                      href='https://devkit.webflow.io/#Company-Pages'
                      className='footer-link-list-link-dark'
                    >
                      About
                    </a>
                    <a
                      href='/insurance'
                      aria-current='page'
                      className='footer-link-list-link-dark w--current'
                    >
                      Insurance 101
                    </a>
                    <a href='/contact' className='footer-link-list-link-dark'>
                      Contact
                    </a>
                  </div>
                  <div className='footer-link-list'>
                    <a
                      id='typeform7'
                      href='https://form.typeform.com/to/CJsgiesH'
                      target='_blank'
                      rel='noreferrer'
                      className='footer-link-list-link-dark'
                    >
                      Book A Review
                    </a>
                    <a
                      href='https://www.guardianlife.com/privacy-policy'
                      target='_blank'
                      rel='noreferrer'
                      className='footer-link-list-link-dark'
                    >
                      Privacy Policy
                    </a>
                    <a
                      href='/terms'
                      target='_blank'
                      rel='noreferrer'
                      className='footer-link-list-link-dark'
                    >
                      Terms &amp; Conditions
                    </a>
                    <a
                      href='https://www.guardianlife.com/disclosures'
                      target='_blank'
                      rel='noreferrer'
                      className='footer-link-list-link-dark'
                    >
                      Disclosures
                    </a>
                  </div>
                  <div className='footer-link-list'>
                    <img
                      src='https://assets.website-files.com/603deb9a43f8ac0ae37579d5/607faebb3127fd6f6153e6cc_img_insuranceassist_logo.svg'
                      loading='lazy'
                      width='120'
                      alt=''
                      className='image-2'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='w-layout-grid grid'>
              <div className='poweredby animate-in-fourth'>
                <div className='center-text small-text animate-in-third'>
                  Powered by
                </div>
                <img
                  src='https://assets.website-files.com/603deb9a43f8ac0ae37579d5/603dfed5547cd7d9026da8b3_img_guardian_logo.svg'
                  loading='lazy'
                  alt='Guardian logo'
                />
              </div>
              <div
                id='w-node-_10bd012f-f95a-38f5-7587-0e7cacc06afd-878f94e8'
                className='credits'
              >
                Illustration by{" "}
                <a
                  href='https://storyset.com/'
                  target='_blank'
                  rel='noreferrer'
                  className='credit_link'
                >
                  Freepik Storyset
                </a>
              </div>
            </div>
            <div className='disclaimer'>
              IA PA LLC (d/b/a in California as IA PA Insurance Services) is a
              wholly-owned, insurance-producer licensed subsidiary of The
              Guardian Life Insurance Company of America (“Guardian”). 6255
              Sterners Way, &nbsp;Bethlehem, PA 18017. Guardian, its
              subsidiaries, agents, and employees do not provide tax, legal, or
              accounting advice. Consult your tax, legal, or accounting
              professional regarding your individual situation. IA PA LLC’s
              insurance assist team is a group of licensed life insurance
              producers who can help policyholders fully understand their
              current policy benefits for a holistic view of the full value of
              their life insurance policy. &nbsp;In the event this review
              results in your desire to purchase an additional insurance product
              or annuity, you will be referred to a Guardian Field
              Representative. &nbsp;Any purchase of a Guardian product will
              result in compensation being paid to the Field Representative,
              Guardian, and IA PA LLC. &nbsp;IA PA LLC’s service is not
              available in all states. &nbsp;If you are a resident of Florida,
              Georgia, New Mexico, New York, or Virginia, you may be referred
              directly to a licensed Guardian agent. &nbsp;This service is not
              available to anyone who owns a product issued by Guardian, its
              affiliates, or subsidiaries. In the event of any inconsistency
              between the terms of your policy and your policy review, the terms
              of your policy will control. All whole life insurance policy
              guarantees are subject to the timely payment of all required
              premiums and the claims paying ability of the issuing insurance
              company. Policy loans and withdrawals affect the guarantees by
              reducing the policy's death benefit and cash values. Policy
              benefits are reduced by any outstanding loan or loan interest
              and/or withdrawals. Dividends, if any, are affected by policy
              loans and loan interest. Withdrawals above the cost basis may
              result in taxable ordinary income. If the policy lapses, or is
              surrendered, any outstanding loans considered gain in the policy
              may be subject to ordinary income taxes. If the policy is a
              Modified Endowment Contract (MEC), loans are treated like
              withdrawals, but as gain first, subject to ordinary income taxes.
              If the policy owner is under 59 ½, any taxable withdrawal may also
              be subject to a 10% federal tax penalty. Guardian, its
              subsidiaries, agents and employees do not provide tax, legal, or
              accounting advice. Consult your tax, legal, or accounting
              professional regarding your individual situation. Some whole life
              policies do not have cash values in the first two years of the
              policy and don't pay a dividend until the policy's third year.
              Talk to your financial representative and refer to your individual
              whole life policy illustration for more information. 2021-120299.
              Exp. 4/23.
              <br />
              <br />
              Copyright © 2021 The Guardian Life Insurance Company of America,
              New York, NY. All rights reserved.
              <br />
              Guardian® is a registered trademark of The Guardian Life Insurance
              Company of America.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
