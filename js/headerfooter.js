//? Header

class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="topbar">
      <div class="topbar-content">
        <a href="#"><button class="view-details">Download Brochure</button></a>

        <button class="mar-btn">
          <span>
            Unlock your potential with our exclusive course discount! Enroll now
            to save big and excel effortlessly.
          </span>
        </button>
        <img
          class="offer-img"
          src="./images/off20-removebg-preview.png"
          alt=""
        />
      </div>
    </section>
    <header class="header">
      <div class="container">
        <div class="row v-center">
          <div class="header-item item-left">
            <div class="logo">
              <a href="./index.html">WCA</a>
            </div>
          </div>
          
          <div class="header-item item-center">
            <div class="menu-overlay"></div>
            <nav class="menu">
              <div class="mobile-menu-head">
                <div class="go-back"><i class="fa fa-angle-left"></i></div>
                <div class="current-menu-title"></div>
                <div class="mobile-menu-close">&times;</div>
              </div>
              <ul class="menu-main">
                <li>
                  <a href="./index.html">Home</a>
                </li>
                <li>
                  <a href="./about.html">About</a>
                </li>


                
                <li class="menu-item-has-children">
                  <a href="#">Classes <i class="fa fa-angle-down"></i></a>
                  <div class="sub-menu mega-menu mega-menu-column-4">
                    <div class="list-item text-center">
                      <a href="#">
                        <img
                          src="https://th.bing.com/th/id/R.ce8de1adaa3fcc169f0d97c436b8274b?rik=6W1qX6Qp03lNWg&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1504633273314-6a929fcd7090%3fixlib%3drb-0.3.5%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9%26s%3de8e0ff2cce3792a276fa84086113a17c&ehk=chx16tzqSRzpfA6BYM4FNaZZ%2fMJwEtxaqHPW1FZb9FI%3d&risl=&pid=ImgRaw&r=0"
                          alt="Fashion"
                        />
                        <h4 class="title">Fashion</h4>
                      </a>
                    </div>
                    <div class="list-item text-center">
                      <a href="#">
                        <img
                          src="https://img.freepik.com/free-photo/male-technician-repairing-computer-motherboard-wooden-desk_23-2147923493.jpg?w=740&t=st=1671765056~exp=1671765656~hmac=4c8dffc9558819b4c21b126aaa394150f48adc3be9c8004c0b65d0420709ec00"
                          alt="Electronics"
                        />
                        <h4 class="title">Electronics</h4>
                      </a>
                    </div>
                    <div class="list-item text-center">
                      <a href="#">
                        <img
                          src="https://images.unsplash.com/photo-1571380401583-72ca84994796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                          alt="Mobiles"
                        />
                        <h4 class="title">Mobiles</h4>
                      </a>
                    </div>
                    <div class="list-item text-center">
                      <a href="#">
                        <img
                          src="https://images.unsplash.com/photo-1578643463396-0997cb5328c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                          alt="Appliances"
                        />
                        <h4 class="title">Appliances</h4>
                      </a>
                    </div>
                  </div>
                </li>
                <li class="menu-item-has-children">
                  <a href="#">Courses <i class="fa fa-angle-down"></i></a>
                  <div class="sub-menu mega-menu mega-menu-column-4">
                    <div class="list-item">
                      <h4 class="title">Frontend Development</h4>
                      <ul>
                        <li>
                          <a href="./frontend-course.html">HTML / HTML5</a>
                        </li>
                        <li><a href="./frontend-course.html">CSS / CSS3</a></li>
                        <li><a href="./frontend-course.html">SAAS(SCSS)</a></li>
                        <li><a href="./frontend-course.html">Bootstrap</a></li>
                        <li><a href="./frontend-course.html">Javascript</a></li>
                        <li><a href="./frontend-course.html">jQuery</a></li>
                      </ul>
                      <h4 class="title">WordPress Course</h4>
                      <ul>
                        <li>
                          <a href="./wordpress-course.html"
                            >Setting Up WordPress</a
                          >
                        </li>
                        <li>
                          <a href="./wordpress-course.html"
                            >Understanding WordPress Dashboard</a
                          >
                        </li>
                        <li>
                          <a href="./wordpress-course.html"
                            >Creating and Managing Content</a
                          >
                        </li>
                        <li>
                          <a href="./wordpress-course.html"
                            >Choosing and Customizing Themes</a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <h4 class="title">Backend Development</h4>
                      <ul>
                        <li><a href="./backend-course.html">PHP</a></li>
                        <li><a href="./backend-course.html">MySQL</a></li>
                        <li>
                          <a href="./backend-course.html">
                            Session and Cookie</a
                          >
                        </li>
                        <li>
                          <a href="./backend-course.html">
                            Database Connectivity with MySql</a
                          >
                        </li>
                        <li>
                          <a href="./backend-course.html">
                            Web Application Architecture</a
                          >
                        </li>
                      </ul>
                      <h4 class="title">Blockchain</h4>
                      <ul>
                        <li>
                          <a href="./blockchain.html"
                            >Smart Contracts Development</a
                          >
                        </li>
                        <li>
                          <a href="./blockchain.html">Scalability Solutions </a>
                        </li>
                        <li>
                          <a href="./blockchain.html"
                            >Decentralized Finance (DeFi)</a
                          >
                        </li>
                        <li>
                          <a href="./blockchain.html">Interoperability</a>
                        </li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <h4 class="title">Mobile App Development</h4>
                      <ul>
                        <li>
                          <a href="./mobile-app.html">Swift </a>
                        </li>
                        <li>
                          <a href="./mobile-app.html">Kotlin</a>
                        </li>
                        <li>
                          <a href="./mobile-app.html">Java</a>
                        </li>
                        <li>
                          <a href="./mobile-app.html">Flutter</a>
                        </li>
                        <li>
                          <a href="./mobile-app.html">Firebase</a>
                        </li>
                      </ul>
                      <h4 class="title">React JS</h4>
                      <ul>
                       
                        <li>
                          <a href="./react-course.html"
                            >Functional vs class components, Props
                          </a>
                        </li>
                        <li>
                          <a href="./react-course.html"
                            >State, Lifecycle methods</a
                          >
                        </li>
                        <li>
                          <a href="./react-course.html"
                            >Hooks – useState, useEffect, useContext</a
                          >
                        </li>
                        <li>
                          <a href="./react-course.html"
                            >Routing and Navigation</a
                          >
                        </li>
                        <li>
                          <a href="./react-course.html">Working with APIs</a>
                        </li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <img
                        src="https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                        alt="Chair"
                      />
                      <a href="./login.html">
                        <button class="view-courses">
                          Login / Signup
                          <i
                            class="fa-solid fa-angles-right arr-anim"
                          ></i></button
                      ></a>
                      <a href="./courses.html">
                        <button class="view-courses">
                          View All Courses
                        </button></a
                      >
                    </div>
                  </div>
                </li>

                <li>
                  <a href="./services.html">Services</a>
                </li>
         
                <li class="menu-item-has-children">
                  <a href="#">Pages <i class="fas fa-angle-down"></i></a>
                  <div class="sub-menu single-column-menu">
                    <ul>
                    
                      <li><a href="./career.html">Careers</a></li>
                      <li><a href="./team.html">Trainers</a></li>
                      <li><a href="./placements.html">Placements</a></li>
                      <li><a href="./portfolio.html">Portfolio</a></li>
                      <li><a href="./gallery.html">Gallery</a></li>
                      <li><a href="./meethr.html">Meet HR</a></li>
                      <li><a href="./guest-speaker.html">Guest Speakers</a></li>
                      <li><a href="./faq.html">FAQ</a></li>
                     
                    </ul>
                  </div>
                </li>
                <li class="menu-item-has-children">
                  <a href="#">Admission <i class="fas fa-angle-down"></i></a>
                  <div class="sub-menu single-column-menu">
                    <ul>
                    
                      <li><a href="./adm-ind.html">For Indian Students</a></li>
                      <li><a href="./adm-out-ind.html">For Foreign Students</a></li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href="./contact.html">Contact</a>
                </li>

                <li>
                  <a href="./course-pdf.html"
                    ><button class="view-details">Course PDF</button></a
                  >
                </li>
              </ul>
            </nav>
          </div>

          <a href="./login.html">
            <button class="button-log-reg" style="vertical-align: middle">
              <span
                ><i style="margin-right: 0.5rem" class="fa-solid fa-user"></i
                >Login</span
              >
            </button>
          </a>
       
          <div class="header-item item-right">
  
           
          
            <div class="mobile-menu-trigger">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>`;
  }
}

customElements.define("my-header", MyHeader);

//? Footer

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` <footer id="footer" >
      <div class="footer-container">
        <div class="footer-box">
          <h2>WCA</h2>
          <address>
            <p>Habra, Prafullanagar</p>
            
          </address>
          <p class="phone">
            <strong>Phone:</strong>
            <a class="ph-link" href="tel:1234568789">+ 91 1234 568 789 (IND)</a>
            <a style="display:block;margin-top:1rem;" class="ph-link" href="tel:4242706260">+ 1 424 270 6260 (USA)</a>
          </p>
          <p>
            <strong>Email:</strong>
            <a class="em-link" href="mailto:admission@webcramacademy.com">admission@webcramacademy.com</a>
            <a class="em-link email-footer" href="mailto:contact@webcramacademy.com">contact@webcramacademy.com</a>
          </p>
        </div>
        <div class="footer-box">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <i class="fa-solid fa-chevron-right right-arrow"></i
              ><a href="./index.html">Home</a>
            </li>
            <li>
              <i class="fa-solid fa-chevron-right right-arrow"></i
              ><a href="./about.html">About us</a>
            </li>
            <li>
              <i class="fa-solid fa-chevron-right right-arrow"></i
              ><a href="./courses.html">Courses</a>
            </li>
            <li>
              <i class="fa-solid fa-chevron-right right-arrow"></i
              ><a href="./admission.html">Admission</a>
            </li>
            <li>
              <i class="fa-solid fa-chevron-right right-arrow"></i
              ><a href="./contact.html">Contact</a>
            </li>
          </ul>
        </div>
        <div class="footer-box">
          <h4>Services</h4>
          <ul>
            <li>
              <i class="fa-solid fa-chevron-right right-arrow"></i
              ><a href="./content-writing.html">Content Writing</a>
            </li>
            <li>
              <i class="fa-solid fa-chevron-right right-arrow"></i
              ><a href="./dm.html">Digital Marketing</a>
            </li>
            <li>
              <i class="fa-solid fa-chevron-right right-arrow"></i
              ><a href="./erp.html">ERP Solutions</a>
            </li>
            <li>
              <i class="fa-solid fa-chevron-right right-arrow"></i
              ><a href="./seo.html">SEO</a>
            </li>
            <li>
              <i class="fa-solid fa-chevron-right right-arrow"></i
              ><a href="./web-dev.html">Web Development</a>
            </li>
          </ul>
        </div>
        <div class="footer-box">
          <h4>Top Courses</h4>
          <ul>
            <li>
              <i class="fa-solid fa-chevron-right right-arrow"></i
              ><a href="./react-course.html">React JS</a>
            </li>
            <li>
              <i class="fa-solid fa-chevron-right right-arrow"></i
              ><a href="./laravel-course.html">Laravel</a>
            </li>
            <li>
              <i class="fa-solid fa-chevron-right right-arrow"></i
              ><a href="blockchain.html">Blockchain</a>
            </li>
            <li>
              <i class="fa-solid fa-chevron-right right-arrow"></i
              ><a href="./machine-learning-course.html">Machine Learning</a>
            </li>
            <li>
              <i class="fa-solid fa-chevron-right right-arrow"></i
              ><a href="./angular.html">Angular JS</a>
            </li>
          </ul>
        </div>
        <div class="footer-box">
          <h4>Join Our Newsletter</h4>
          <p>
            Stay informed! Subscribe now for updates and exclusive offers.
          </p>
 
          <div class="flex-ib">
            <input
              class="email"
              type="email"
              name="email"
              placeholder="Your Email"
            />


            <a
              type="submit"
              style="
                color: #fff;
                font-weight: 700;
                background-color: #000;
                padding: 1rem 1.5rem;
                margin-bottom: 1rem;
              "
              href="#"
              >Submit</a
            >
           
            
          </div>
        <p class="spam-txt">We don't spam *</p>
        <h3 class="pay-now-text">Pay Now</h3>
       <div class="pay-img-box">

    <a href="#"> <img class="pay-img pay-img2" src="./images/paypal-new-img.jpeg"</a>

      </div>
      <div class="upi-net-box">
      <button class="upi-net">UPI / NET BANKING</button>
      </div>
        </div>
        <div class="copy-icons">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-skype"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </footer>

 
    <div class="clr"></div>

    <section id="copy">
      <div class="copy-container">
        <div class="copy-text">
          <p>
            © Copyright @ <strong>Webcram Career Academy</strong>. All Rights
            Reserved.
          </p>
        </div>
        <div class="copy-pages-box">
          <h3 class="copy-pages">Site Map</h3>
              <h3 class="copy-pages">Disclaimer</h3>
              <h3 class="copy-pages">Privacy Policy</h3>
          <h3 class="copy-pages">Terms & Conditions</h3>
      
        </div>
      </div>
      
    </section>

    <a class="scrll-btn" href="#"><i class="fa-solid fa-arrow-up"></i></a>
    
    `;
  }
}

customElements.define(`my-footer`, MyFooter);
