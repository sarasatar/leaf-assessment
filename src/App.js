import React from "react";
import "./styles.css";
import InfiniteCarousel from "react-leaf-carousel";
import ReactDOM from "react-dom";

ReactDOM.render(
  <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={0.5}
    sideSize={0.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div>
      <img
        alt=""
        src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/03/06213756/garfield-copy.jpg"
      />
    </div>

    <div>
      <img
        alt=""
        src="https://www.elcomercio.com/files/article_main/uploads/2017/03/10/58c2de31505ef.jpeg"
      />
    </div>

    <div>
      <img
        alt=""
        src="https://cdn-3.expansion.mx/35/9f/40d885d54e24870ca4e4a4009950/garfield-header-1.jpg"
      />
    </div>

    <div>
      <img
        alt=""
        src="https://images.clarin.com/2020/08/04/garfield-el-gato-que-fue___2icPYGWrK_1256x620__1.jpg"
      />
    </div>

    <div>
      <img
        alt=""
        src="https://ep01.epimg.net/elpais/imagenes/2018/08/07/icon/1533641807_689394_1533648172_noticia_normal.jpg"
      />
    </div>
  </InfiniteCarousel>,
  document.getElementById("root")
);
