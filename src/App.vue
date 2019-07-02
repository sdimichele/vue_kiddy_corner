<template>
  <div id="app">

    <!-- ====================================
    ——— HEADER
    ===================================== -->
    <header class="header" id="pageTop">
      <!-- Top Color Bar -->
      <div class="color-bars">
        <div class="container-fluid">
          <div class="row">
            <div class="col color-bar bg-warning d-none d-md-block"></div>
            <div class="col color-bar bg-success d-none d-md-block"></div>
            <div class="col color-bar bg-danger d-none d-md-block"></div>
            <div class="col color-bar bg-info d-none d-md-block"></div>
            <div class="col color-bar bg-purple d-none d-md-block"></div>
            <div class="col color-bar bg-pink d-none d-md-block"></div>
            <div class="col color-bar bg-warning"></div>
            <div class="col color-bar bg-success"></div>
            <div class="col color-bar bg-danger"></div>
            <div class="col color-bar bg-info"></div>
            <div class="col color-bar bg-purple"></div>
            <div class="col color-bar bg-pink"></div>
          </div>
        </div>
      </div>

              <!-- Top Bar-->
          <div class=" bg-stone d-none d-md-block top-bar">
            <div class="container">
              <div class="row">
                <div class="col-lg-7 d-none d-lg-block">
                  <ul class="list-inline d-flex justify-content-xl-start align-items-center h-100 mb-0">
                    <li>
                      <span class="bg-warning icon-header mr-xl-2">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                      </span>
                      <a href="mailto:sabrinadimichele1992@gmail.com" class="mr-lg-4 mr-xl-6 text-white opacity-80">sabrinadimichele1992@gmail.com</a>
                    </li>
                    <li>
                      <span class="bg-success icon-header mr-xl-2">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                      </span>
                      <a href="tel:+1 219 670 9492" class="mr-lg-4 mr-xl-6 text-white opacity-80"> +1 219 670 9492 </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-5">
                  <ul class="list-inline d-flex mb-0 justify-content-xl-end justify-content-md-center align-items-center mr-xl-2">
                    

                    <li class="text-white mr-3 mr-lg-2 mr-xl-5">
                      <span class="bg-purple icon-header mr-2 mr-lg-1 mr-xl-2">
                        <i class="fa fa-unlock-alt text-white font-size-13" aria-hidden="true"></i>
                      </span>

                      <router-link class="text-white font-weight-medium opacity-80" to="/login">Login</router-link>
                      <span class="text-white opacity-80"> or </span>
                      <router-link class="text-white font-weight-medium opacity-80" to="/signup">Create an account</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


      <!-- Navbar -->
      <nav class="navbar navbar-expand-md navbar-scrollUp navbar-sticky navbar-white">
        <div class="container">
          <router-link class="navbar-brand" to="/">
            <img class="d-inline-block" src="/assets/img/logo-school.png" alt="Kidz School">
          </router-link>

          <button class="navbar-toggler py-2" type="button" data-toggle="collapse" data-target="#navbarContent"
            aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav ml-lg-auto">
              <li class="nav-item dropdown bg-warning">
                <router-link class="nav-link" to="/">
                  <i class="fa fa-home nav-icon"></i>
                  <span>Home</span>
                </router-link>
              </li>

              <li class="nav-item dropdown bg-danger">
               <router-link class="nav-link" to="/tasks">
                  <i class="fa fa-home nav-icon"></i>
                  <span>Tasks</span>
                </router-link>
              </li>

              <li class="nav-item dropdown bg-pink">
                <router-link class="nav-link" to="/tasks/new">
                  <i class="fa fa-file-text-o nav-icon"></i>
                  <span>New Task</span>
                   </router-link>
              </li>
               

              <li class="nav-item dropdown bg-info">
                <a class="nav-link dropdown-toggle " href="javascript:void(0)" id="stores"
                  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-pencil-square-o nav-icon" aria-hidden="true"></i>
                  <span>Store</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="stores">
                  <li>
                    <a class="dropdown-item
                     ||
                     ||
                    

                    "
                      href="javascript:void(0)">Products<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                    <ul class="sub-menu">
                      <li><a class="" href="products.html">Products Fullwidth</a></li>
                      <li><a class="" href="product-left-sidebar.html">Products
                          Left Sidebar</a></li>
                      <li><a class="" href="product-right-sidebar.html">Products
                          Right Sidebar</a></li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item " href="product-single.html">Single
                      Product</a>
                  </li>
                  <li>
                    <a class="dropdown-item " href="product-category.html">Product
                      Categories</a>
                  </li>
                  <li>
                    <a class="dropdown-item " href="product-cart.html">Cart</a>
                  </li>
                  <li>
                    <a class="dropdown-item
                       ||
                       ||
                      
                      "
                      href="javascript:void(0)">Checkout<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                    <ul class="sub-menu">
                      <li>
                        <a class="" href="product-checkout-step-1.html">Personal
                          Info</a>
                      </li>
                      <li>
                        <a class="" href="product-checkout-step-2.html">Payment
                          Info</a>
                      </li>
                      <li>
                        <a class="" href="product-checkout-step-3.html">Confirmation</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown bg-purple">
                <a class="nav-link dropdown-toggle " href="javascript:void(0)" id="stores"
                  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-calendar nav-icon" aria-hidden="true"></i>
                  <span>Blog</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="stores">
                  <li>
                    <a class="dropdown-item
                       ||
                       ||
                      
                    "
                      href="javascript:void(0)">Blog Grid<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                    <ul class="sub-menu">
                      <li><a class="" href="blog-grid.html">Blog Grid Fullwidth</a></li>
                      <li><a class="" href="blog-grid-left-sidebar.html">Blog
                          Grid Left Sidebar</a></li>
                      <li><a class="" href="blog-grid-right-sidebar.html">Blog
                          Grid Right Sidebar</a></li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item
                       ||
                       ||
                      "
                      href="javascript:void(0)">Blog List<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                    <ul class="sub-menu">
                      <li><a class="" href="blog-list.html">Blog List Fullwidth</a></li>
                      <li><a class="" href="blog-list-left-sidebar.html">Blog
                          List Left Sidebar</a></li>
                      <li><a class="" href="blog-list-right-sidebar.html">Blog
                          List Right Sidebar</a></li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item
                       ||
                       ||
                      
                    "
                      href="javascript:void(0)">Single Blog<i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                    <ul class="sub-menu">
                      <li><a class="" href="blog-single.html">Blog Single
                          Fullwidth</a></li>
                      <li><a class="" href="blog-single-left-sidebar.html">Blog
                          Single Left Sidebar</a></li>
                      <li><a class="" href="blog-single-right-sidebar.html">Blog
                          Single Right Sidebar</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown bg-pink">
                <a class="nav-link dropdown-toggle " href="component-default.html">
                  <i class="fa fa-home nav-icon" aria-hidden="true"></i>
                  <span>components</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div class="main-wrapper home">
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/logout">Logout</router-link> |
        <router-link to="/tasks">Tasks</router-link> |
        <router-link to="/tasks/new"> New Task </router-link>
      </div>

      <router-view/>
    </div> <!-- element wrapper ends -->

    <!-- ====================================
          ——— FOOTER
          ===================================== -->
    <footer class="footer-bg-img">
      <!-- Footer Color Bar -->
      <div class="color-bar">
        <div class="container-fluid">
          <div class="row">
            <div class="col color-bar bg-warning"></div>
            <div class="col color-bar bg-danger"></div>
            <div class="col color-bar bg-success"></div>
            <div class="col color-bar bg-info"></div>
            <div class="col color-bar bg-purple"></div>
            <div class="col color-bar bg-pink"></div>
            <div class="col color-bar bg-warning d-none d-md-block"></div>
            <div class="col color-bar bg-danger d-none d-md-block"></div>
            <div class="col color-bar bg-success d-none d-md-block"></div>
            <div class="col color-bar bg-info d-none d-md-block"></div>
            <div class="col color-bar bg-purple d-none d-md-block"></div>
            <div class="col color-bar bg-pink d-none d-md-block"></div>
          </div>
        </div>
      </div>

      <div class="pt-8 pb-7  bg-repeat" style="background-image: url(assets/img/background/footer-bg-img-1.png);">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-lg-3 col-xs-12">
              <a class="mb-6 d-block" href="index.html">
                <img class="img-fluid d-inline-block w-50 lazyestload" data-src="/assets/img/logo-footer.png" src="/assets/img/logo-footer.png">
              </a>
              <p class="mb-6">Excepteur sint occaecat cupidatat non proident, sunt in culpa officia.Lorem ipsum dolor sit
                amet.</p>
              <p class="mb-6">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.</p>
            </div>

            <div class="col-sm-6 col-lg-3 col-xs-12">
              <h4 class="section-title-sm font-weight-bold text-white mb-6">Useful Links</h4>
              <ul class="list-unstyled">
                <li class="mb-4">
                  <a href="index.html">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>Kidz School
                  </a>
                </li>
                <li class="mb-4">
                  <a href="about-us.html">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>About Kidz School
                  </a>
                </li>
                <li class="mb-4">
                  <a href="index-v2.html">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>Kidz Store
                  </a>
                </li>
                <li class="mb-4">
                  <a href="index-v3.html">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>Kidz Daycare
                  </a>
                </li>
                <li class="mb-3">
                  <a href="photo-gallery.html">
                    <i class="fa fa-angle-double-right mr-2" aria-hidden="true"></i>
                    Photo Gallery
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-sm-6 col-lg-3 col-xs-12">
              <h4 class="section-title-sm font-weight-bold text-white mb-6">Recent Post</h4>
              <ul class="list-unstyled list-item-border-bottom">
                <li class="mb-4 pb-4">
                  <div class="media">
                    <a class="mr-2" href="blog-single-left-sidebar.html">
                      <img class="rounded-lg w-100 border-warning border-2 d-block" data-src="/assets/img/blog/blog-sm-img5.jpg"
                        src="/assets/img/blog/blog-sm-img5.jpg" alt="blog-sm-img5.jpg">
                    </a>
                    <div class="media-body">
                      <h5 class="line-hight-16 mb-1">
                        <a class="font-base font-size-14" href="blog-single-left-sidebar.html">A Clean Website Gives More Experience To The
                          Visitors</a>
                      </h5>
                      <time class="text-white">July 7 - 2018</time>
                    </div>
                  </div>
                </li>

                <li class="mb-4 pb-4">
                  <div class="media">
                    <a class="mr-2" href="blog-single-left-sidebar.html">
                      <img class="rounded-lg w-100 border-success border-2 d-block" data-src="/assets/img/blog/blog-sm-img-12.jpg"
                        src="/assets/img/blog/blog-sm-img-12.jpg" alt="blog-sm-img-12.jpg">
                    </a>
                    <div class="media-body">
                      <h5 class="line-hight-16 mb-1">
                        <a class="font-base font-size-14" href="blog-single-left-sidebar.html">Duis aute irure dolor in reprehenderit
                          in voluptate.</a>
                      </h5>
                      <time class="text-white">Jun 7 - 2018</time>
                    </div>
                  </div>
                </li>

                <li class="mb-4 pb-4">
                  <div class="media">
                    <a class="mr-2" href="blog-single-left-sidebar.html">
                      <img class="rounded-lg w-100 border-info border-2 d-block" data-src="/assets/img/blog/blog-sm-img7.jpg"
                        src="/assets/img/blog/blog-sm-img7.jpg" alt="blog-sm-img7.jpg">
                    </a>
                    <div class="media-body">
                      <h5 class="line-hight-16 mb-1">
                        <a class="font-base font-size-14" href="blog-single-left-sidebar.html">Duis aute irure dolor in reprehenderit
                          in voluptate.</a>
                      </h5>
                      <time class="text-white">Jun 7 - 2018</time>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="col-sm-6 col-lg-3 col-xs-12">
              <h4 class="section-title-sm font-weight-bold text-white mb-6">Mailing List</h4>
              <p class="mb-4">Sign up for our mailing list to get latest updates and offers.</p>
              <form class="mb-4" action="">
                <div class="input-group shadow-light rounded-sm input-addon">
                  <input type="text" class="form-control py-4" placeholder="Email address" aria-describedby="basic-addon21">
                  <div class="input-group-append ">
                    <div class="input-group-text bg-danger">
                      <i class="fa fa-check text-white" aria-hidden="true"></i></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Copy Right -->
      <div class="copyright">
        <div class="container">
          <div class="row py-4 align-items-center">
            <div class="col-sm-7 col-xs-12 order-1 order-md-0">
              <p class="copyright-text"> © 2018 Copyright Kidz School Bootstrap Template by <a href="http://www.iamabdus.com/" target="_blank">Abdus.</a></p>
            </div>

            <div class="col-sm-5 col-xs-12">
              <ul class="list-inline d-flex align-items-center justify-content-md-end justify-content-center mb-md-0">
                <li class="mr-3">
                  <a class="icon-rounded-circle-small bg-warning" href="javascript:void(0)">
                    <i class="fa fa-facebook text-white" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="mr-3">
                  <a class="icon-rounded-circle-small bg-success" href="javascript:void(0)">
                    <i class="fa fa-twitter text-white" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="mr-3">
                  <a class="icon-rounded-circle-small bg-danger" href="javascript:void(0)">
                    <i class="fa fa-google-plus text-white" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="mr-3">
                  <a class="icon-rounded-circle-small bg-info" href="javascript:void(0)">
                    <i class="fa fa-pinterest-p text-white" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="">
                  <a class="icon-rounded-circle-small bg-purple" href="javascript:void(0)">
                    <i class="fa fa-vimeo text-white" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>

</style>
