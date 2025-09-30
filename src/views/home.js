import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Colaida</title>
        <meta property="og:title" content="Colaida" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <Link to="/" className="home-navlink">
          <img
            alt="logo"
            src="/colaida_logo-removebg-preview-200h.png"
            className="home-image10"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="home-desktop-menu">
          <nav className="home-links">
            <span>Let&apos;s Talk</span>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-nav">
            <div className="home-top">
              <img
                alt="image"
                src="/colaida_logo-removebg-preview-200h.png"
                className="home-logo"
              />
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <span>Let&apos;s Talk</span>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-container11">
        <div className="home-container12">
          <div className="home-container13">
            <span className="home-text102">Colaida</span>
            <div className="home-container14">
              <button type="button" className="home-button1 button">
                Get Started
              </button>
              <button type="button" className="home-button2 button">
                Learn More
              </button>
            </div>
            <span className="home-text103">
              <span>
                Transforming industries through Collaboration, AI, and Data
              </span>
              <br className="home-text105"></br>
              <br></br>
              <br className="home-text107"></br>
              <br></br>
            </span>
          </div>
        </div>
        <div className="home-container15">
          <span className="home-text109">
            <span>The Problem: what’s wrong with</span>
            <br></br>
            <span>the current condition?</span>
          </span>
          <div className="home-container16">
            <img
              alt="image"
              src="/qc25ql5chu78zysod7t5t0kkehdziuqyk5eupevn-published-400w.jpg"
              className="home-image11"
            />
            <div className="home-container17">
              <span className="home-text113">
                <span>
                  Our manufacturers don&apos;t
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>understand</span>
              </span>
              <span className="home-text117">
                <span>
                  Manufacturers don&apos;t understand our industry&apos;s
                  demands,
                </span>
                <br></br>
                <span>
                  {' '}
                  using outdated designs in both product and strategy.
                </span>
              </span>
            </div>
          </div>
          <div className="home-container18">
            <div className="home-container19">
              <span className="home-text121">Coast to Coast differences</span>
              <span className="home-text122">
                <span>
                  Behavior and regions of profitability changes drastically as
                </span>
                <br></br>
                <span>
                  {' '}
                  we move from coast to coast,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>even if it is the same exact product being sold.</span>
                <br></br>
                <br></br>
              </span>
            </div>
            <img
              alt="image"
              src="/ws1agetlooi3otdhbx3jjfb1oeuzoevhg1wlbjaw-published-400w.jpg"
              className="home-image12"
            />
          </div>
          <div className="home-container20">
            <img
              alt="image"
              src="/fijkpoqvzdgqlnewfpx7ozip6lkbt3b4xxeffslf-published-400w.jpg"
              className="home-image13"
            />
            <div className="home-container21">
              <span className="home-text130">
                <span>Lack of a source of truth</span>
                <br></br>
              </span>
              <span className="home-text133">
                <span>
                  Without an analytical source of truth, understanding the
                </span>
                <br></br>
                <span> industry </span>
                <span>and forecasting becomes</span>
                <br></br>
                <span> either a guess or a gamble.</span>
              </span>
            </div>
          </div>
        </div>
        <div className="home-container22">
          <div className="home-container23">
            <span className="home-text140">
              <span>The Solution</span>
              <br></br>
            </span>
            <span className="home-text143">
              Colaida offers a comprehensive tool of real product health and
              behavior across the US
            </span>
            <div className="home-container24">
              <div className="home-container25">
                <video
                  src="/08365ae3-5711-423a-b9fc-2e4bc03e80a9.mp4"
                  loop="true"
                  muted="true"
                  poster="https://play.teleporthq.io/static/svg/videoposter.svg"
                  autoPlay="true"
                  className="home-video1"
                ></video>
                <div className="home-container26">
                  <span className="home-text144">
                    <span>Accurate Data and Data Analysis</span>
                    <br></br>
                  </span>
                  <span className="home-text147">
                    <span>Analyze sales, pricing, and distribution</span>
                    <br></br>
                    <span> data from industry </span>
                    <span>
                      leaders to
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      understand
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>product performance and</span>
                    <br></br>
                    <span> identify </span>
                    <span>potential success factors.</span>
                    <br></br>
                    <span>
                      Consider similar products
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>with potential for success.</span>
                  </span>
                </div>
              </div>
              <div className="home-container27">
                <video
                  src="/39726a7a-c0f8-4bd4-ae43-90d554ab5d43.mp4"
                  loop="true"
                  muted="true"
                  poster="https://play.teleporthq.io/static/svg/videoposter.svg"
                  autoPlay="true"
                  className="home-video2"
                ></video>
                <div className="home-container28">
                  <span className="home-text162">
                    <span>Generate Strategies with Manufacturers</span>
                    <br></br>
                  </span>
                  <span className="home-text165">
                    <span>A thorough examination of product</span>
                    <br></br>
                    <span> trends and wellness patterns across</span>
                    <br></br>
                    <span> the United States then collaborate with</span>
                    <br></br>
                    <span>
                      {' '}
                      manufacturers to assess product
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      compatibility in our market and
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>industry.</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-container29">
                <img
                  alt="image"
                  src="/62866170-11b4-4db3-920c-5c20fae46403-400w.jpeg"
                  className="home-image14"
                />
                <div className="home-container30">
                  <span className="home-text178">
                    <span>Accurate Data and Data Analysis</span>
                    <br></br>
                  </span>
                  <span className="home-text181">
                    <span>Analyze sales, pricing, and distribution</span>
                    <br></br>
                    <span> data from industry </span>
                    <span>
                      leaders to
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      understand
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>product performance and</span>
                    <br></br>
                    <span> identify </span>
                    <span>potential success factors.</span>
                    <br></br>
                    <span>
                      Consider similar products
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>with potential for success.</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container31">
          <span className="home-text196">
            <span>Go to market</span>
            <br></br>
          </span>
          <span className="home-text199">How are we planning to grow?</span>
          <div className="home-container32">
            <div className="home-container33">
              <img
                alt="image"
                src="/tj8iuz9tjljqtnr34mrr3dzh1zj5adlpgafiebcq-published-400h.png"
                className="home-image15"
              />
              <div className="home-container34">
                <span className="home-text200">
                  <span>Targeted Partnerships</span>
                  <br></br>
                </span>
                <span className="home-text203">
                  <span>Partner with top companies</span>
                  <br></br>
                  <span> to enhance nationwide data</span>
                  <br></br>
                  <span> accuracy.</span>
                  <br className="home-text209"></br>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-container35">
              <img
                alt="image"
                src="/qzwhajrvv6yz30ixt1ordchdh7hg2oue0dtlepeo-published-400h.png"
                className="home-image16"
              />
              <div className="home-container36">
                <span className="home-text211">
                  <span>
                    Digital Marketing
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Campaigns</span>
                  <br></br>
                </span>
                <span className="home-text216">
                  <span>
                    Stay informed and improve
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    forecasting with our
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    newsletters and source of
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>truth updates. From supply</span>
                  <br></br>
                  <span> chain to community, we&apos;ve</span>
                  <br></br>
                  <span> got you covered.</span>
                </span>
              </div>
            </div>
            <div className="home-container37">
              <img
                alt="image"
                src="/pn5ovrj3hyaozxhp9plfobsmdihfftzoviacmfrg-published-400h.png"
                className="home-image17"
              />
              <div className="home-container38">
                <span className="home-text228">
                  Consultation With the Source
                </span>
                <span className="home-text229">
                  <span>Collaborate with manufacturer</span>
                  <br></br>
                  <span> to meet industry</span>
                  <br></br>
                  <span> needs and improve it,</span>
                  <br></br>
                  <span> rather than adding</span>
                  <br></br>
                  <span> irrelevant options.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container39">
          <div className="home-container40">
            <img
              alt="image"
              src="/7ny3fgy1svjwss6jsrurgv19xhzzylgbksycjkj2-published-200w.png"
              className="home-image18"
            />
            <div className="home-container41">
              <span className="home-text239">Q1 Roadmap</span>
              <span className="home-text240">
                <span>
                  Create a comprehensive collaboration platform for accurate
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  product information and
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>behavior across the US, serving as a </span>
                <span>reliable source of truth for all.</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container42">
            <img
              alt="image"
              src="/oyldujyv4iadgol0duzyokvw08bzjbyhfmlvtw3d-published-400w.png"
              className="home-image19"
            />
            <div className="home-container43">
              <span className="home-text247">Q2 Roadmap</span>
              <span className="home-text248">
                <span>
                  Our comprehensive data collection covers the entire US,
                  providing 
                </span>
                <span>reliable and</span>
                <br></br>
                <span> up-to-date information. </span>
                <span>
                  With a wide range of sources,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  we ensure consistent and accurate data for all your needs.
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="home-container44">
          <div className="home-container45">
            <img
              alt="image"
              src="/kfkm7xfdpbnzanlmnvfcwmgu8h814aqobdrf47cu-published-400w.png"
              className="home-image20"
            />
            <div className="home-container46">
              <span className="home-text256">
                <span>Q3 Roadmap</span>
                <br></br>
              </span>
              <span className="home-text259">
                <span>
                  Utilize market research to expand product reach and tailor 
                </span>
                <span>
                  marketing strategies for each region.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Collaborate with local </span>
                <span>
                  distributors to meet diverse consumer needs and increase sales
                </span>
                <br></br>
                <span> nationwide.</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container47">
            <img
              alt="image"
              src="/lohwld57dzvxwuahqc0phynfj6peknhjcbl9l2md-published-200h.png"
              className="home-image21"
            />
            <div className="home-container48">
              <span className="home-text268">Q4 Roadmap</span>
              <span className="home-text269">
                <span>
                  Scale operations, establish strategic partnerships, and
                  explore new 
                </span>
                <span>market</span>
                <br></br>
                <span>opportunities.</span>
              </span>
            </div>
          </div>
        </div>
        <div className="home-container49">
          <span className="home-text274">
            Looking forward to working with you.
          </span>
          <span className="home-text275">
            To join us on this exciting journey, book a meeting today to learn
            more about Colaida. Contact us via email, phone, or our website.
            Your could help us shape the future of our industry!
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <div className="home-container50">
            <input
              type="text"
              placeholder="contact@colaida.com"
              className="input"
            />
            <button type="button" className="home-button3 button">
              Sign Up
            </button>
          </div>
        </div>
        <div className="home-container51">
          <img
            alt="image"
            src="/6a7c14c4-4b82-4831-aec1-0b10621ea82e-removebg-preview-200h.png"
            className="home-image22"
          />
          <span className="home-text276">
            © 2024 Colaida. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
