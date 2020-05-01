
import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: props.location,
    };
  }
  render() {
    return (

      <div id="page" className="hfeed site">
   
         <Header></Header>


      <div id="content" className="site-content" tabIndex={-1}>
         
        <div className="col-full">
          <div id="primary" className="content-area">
            <main id="main" className="site-main">
              <div className="home-v1-slider">
                <div id="owl-main" className="owl-carousel owl-inner-nav owl-ui-sm">
                  <div className="item slider-1" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)'}}>
                    <div className="caption fadeIn">
                      <div className="pre-title">
                        <div className="border front" />
                        <div className="lable">New!</div>
                        <div className="pre-title-value">LIMITED TIME OFFER</div>
                        <div className="border back" />
                      </div>
                      <div className="title">SUPREME BBQ</div>
                      <div className="sub-title">CHICKEN</div>
                      <div className="bottom-caption">Bacon  -  Grilled Onions  -  Potatos  -  Mozarella  -  BBQ Sauce</div>
                    </div>
                    {/* /.caption */}
                  </div>
                  {/* /.item */}
                  <div className="item slider-2" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=901&q=80)'}}>
                    <div className="caption fadeIn">
                      <div className="price-tag">
                        <div className="border front"> </div>
                        <div className="price-tag-value">
                          <div className="price"><span className="symbol">$</span>12<span className="slider-amount">99<br /><span className="price-only">only</span></span> </div>
                        </div>
                        <div className="border back"> </div>
                      </div>
                      <div className="title">ORYGINAL ITALY</div>
                      <div className="sub-title">PIZZA LOVERS SET</div>
                    </div>
                    {/* /.caption */}
                  </div>
                  {/* /.item */}
                  <div className="item slider-3" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1586032340283-3f6fc13b3780?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)'}}>
                    <div className="caption fadeIn">
                      <div className="pre-title">DISCOVER WHAT'S NEW</div>
                      <div className="title"><span>and</span>order<span>with<br />visa</span>online</div>
                    </div>
                    {/* /.caption */}
                  </div>
                  {/* /.item */}
                  <div className="item slider-4" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80)'}}>
                    <div className="caption fadeIn">
                      <div className="pre-title">EXCLUSIVE OFFER</div>
                      <div className="title"><span>VEGGIE FUN</span><br />DELICIOUS SUMMER!</div>
                    </div>
                    {/* /.caption */}
                  </div>
                  {/* /.item */}
                </div>
                {/* /.owl-carousel */}
              </div>

              <div className="columns-3">
  <ul className="products">
    <li className="product first">
      <div className="product-outer">
        <div className="product-inner">
          <div className="product-image-wrapper">
            <a href="single-product-v1.html" className="woocommerce-LoopProduct-link">
              <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" className="img-responsive" alt="" />
            </a>
          </div>
          <div className="product-content-wrapper">
            <a href="single-product-v1.html" className="woocommerce-LoopProduct-link">
              <h3>Pepperoni Pizza</h3>
              <div itemProp="description">
                <p style={{maxHeight: 'none'}}>Extra-virgin olive oil, garlic, mozzarella, mushrooms and olives.</p>
              </div>
              <div className="yith_wapo_groups_container">
                <div className="ywapo_group_container ywapo_group_container_radio form-row form-row-wide " data-requested={1} data-type="radio" data-id={1} data-condition>
                  <h3><span>Pick Size</span></h3>
                  <div className="ywapo_input_container ywapo_input_container_radio">
                    <span className="ywapo_label_tag_position_after"><span className="ywapo_option_label ywapo_label_position_after">22 cm</span></span><span className="ywapo_label_price"><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>19</span></span>
                  </div>
                  <div className="ywapo_input_container ywapo_input_container_radio">
                    <span className="ywapo_label_tag_position_after"><span className="ywapo_option_label ywapo_label_position_after">29 cm</span></span>
                    <span className="ywapo_label_price"><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>25</span></span>
                  </div>
                </div>
              </div>
            </a>
            <div className="hover-area">
              <a rel="nofollow" href="single-product-v1.html" data-quantity={1} data-product_id={51} data-product_sku className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
      {/* /.product-outer */}
    </li>
    {/* /.products */}
    <li className="product ">
      <div className="product-outer">
        <div className="product-inner">
          <div className="product-image-wrapper">
            <a href="single-product-v1.html" className="woocommerce-LoopProduct-link">
              <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" className="img-responsive" alt="" />
            </a>
          </div>
          <div className="product-content-wrapper">
            <a href="single-product-v1.html" className="woocommerce-LoopProduct-link">
              <h3>Trio Cheese</h3>
              <div itemProp="description">
                <p style={{maxHeight: 'none'}}>Extra-virgin olive oil, garlic, mozzarella, mushrooms and olives.</p>
              </div>
              <div className="yith_wapo_groups_container">
                <div className="ywapo_group_container ywapo_group_container_radio form-row form-row-wide " data-requested={1} data-type="radio" data-id={1} data-condition>
                  <h3><span>Pick Size</span></h3>
                  <div className="ywapo_input_container ywapo_input_container_radio">
                    <span className="ywapo_label_tag_position_after"><span className="ywapo_option_label ywapo_label_position_after">22 cm</span></span><span className="ywapo_label_price"><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>19</span></span>
                  </div>
                  <div className="ywapo_input_container ywapo_input_container_radio">
                    <span className="ywapo_label_tag_position_after"><span className="ywapo_option_label ywapo_label_position_after">29 cm</span></span>
                    <span className="ywapo_label_price"><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>25</span></span>
                  </div>
                </div>
              </div>
            </a>
            <div className="hover-area">
              <a rel="nofollow" href="single-product-v1.html" data-quantity={1} data-product_id={51} data-product_sku className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
      {/* /.product-outer */}
    </li>
    {/* /.products */}
    <li className="product last">
      <div className="product-outer">
        <div className="product-inner">
          <div className="product-image-wrapper">
            <a href="single-product-v1.html" className="woocommerce-LoopProduct-link">
              <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" className="img-responsive" alt="" />
            </a>
          </div>
          <div className="product-content-wrapper">
            <a href="single-product-v1.html" className="woocommerce-LoopProduct-link">
              <h3>Apricot Chicken</h3>
              <div itemProp="description">
                <p style={{maxHeight: 'none'}}>Extra-virgin olive oil, garlic, mozzarella, mushrooms and olives.</p>
              </div>
              <div className="yith_wapo_groups_container">
                <div className="ywapo_group_container ywapo_group_container_radio form-row form-row-wide " data-requested={1} data-type="radio" data-id={1} data-condition>
                  <h3><span>Pick Size</span></h3>
                  <div className="ywapo_input_container ywapo_input_container_radio">
                    <span className="ywapo_label_tag_position_after"><span className="ywapo_option_label ywapo_label_position_after">22 cm</span></span><span className="ywapo_label_price"><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>19</span></span>
                  </div>
                  <div className="ywapo_input_container ywapo_input_container_radio">
                    <span className="ywapo_label_tag_position_after"><span className="ywapo_option_label ywapo_label_position_after">29 cm</span></span>
                    <span className="ywapo_label_price"><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>25</span></span>
                  </div>
                </div>
              </div>
            </a>
            <div className="hover-area">
              <a rel="nofollow" href="single-product-v1.html" data-quantity={1} data-product_id={51} data-product_sku className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
      {/* /.product-outer */}
    </li>
    {/* /.products */}
    {/* /.products */}
  </ul>
</div>


              <div className="features-list">
                <div className="row">
                  <div className="feature col-xs-12 col-sm-3">
                    <div className="feature-icon"><i className="po po-best-quality" /></div>
                    <div className="feature-label">
                      <h4>Best Quality</h4>
                      <p>Praesent pulvinar neque pellentesque mattis pretium.</p>
                    </div>
                  </div>
                  <div className="feature col-xs-12 col-sm-3">
                    <div className="feature-icon"><i className="po po-on-time" /></div>
                    <div className="feature-label">
                      <h4>On Time</h4>
                      <p>Praesent pulvinar neque pellentesque mattis pretium.</p>
                    </div>
                  </div>
                  <div className="feature col-xs-12 col-sm-3">
                    <div className="feature-icon"><i className="po po-master-chef" /></div>
                    <div className="feature-label">
                      <h4>MasterChefs</h4>
                      <p>Praesent pulvinar neque pellentesque mattis pretium.</p>
                    </div>
                  </div>
                  <div className="feature col-xs-12 col-sm-3">
                    <div className="feature-icon"><i className="po po-ready-delivery" /></div>
                    <div className="feature-label">
                      <h4>Taste Food</h4>
                      <p>Praesent pulvinar neque pellentesque mattis pretium.</p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            {/* #main */}
          </div>
          {/* #primary */}
        </div>
        {/* .col-full */}
      </div>




      {/* #content */}
      <div className="footer-v1-static-content">
        <div className="kc-css-994088 kc_row">
          <div className="kc-row-container  kc-container">
            <div className="kc-wrap-columns">
              <div className="kc-css-194963 kc_col-sm-12 kc_column kc_col-sm-12">
                <div className="stretch-full-width kc-col-container">
                  <div className="kc-css-126640 kc_shortcode kc_wrap_instagram  kc_ins_col_6">
                    <ul className="row">
                      <li className="col-md-2 col-sm-2 col-lg-2 col-xs-4"><a href="https://www.instagram.com/p/BO4Gyf2hTkr/" target="_blank"><img alt="" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /></a></li>
                      <li className="col-md-2 col-sm-2 col-lg-2 col-xs-4"><a href="https://www.instagram.com/p/BO4Gtf1BCmM/" target="_blank"><img alt="" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /></a></li>
                      <li className="col-md-2 col-sm-2 col-lg-2 col-xs-4"><a href="https://www.instagram.com/p/BO4GnvhBqNt/" target="_blank"><img alt="" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /></a></li>
                      <li className="col-md-2 col-sm-2 col-lg-2 col-xs-4"><a href="https://www.instagram.com/p/BO4GhsuhQE4/" target="_blank"><img alt="" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /></a></li>
                      <li className="col-md-2 col-sm-2 col-lg-2 col-xs-4"><a href="https://www.instagram.com/p/BO4F_ZbBuxI/" target="_blank"><img alt="" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /></a></li>
                      <li className="col-md-2 col-sm-2 col-lg-2 col-xs-4"><a href="https://www.instagram.com/p/BO4F8fLhgkp/" target="_blank"><img alt="" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <Footer></Footer>
      {/* #colophon */}
    </div>
    

    )
  } 
}
export default Home