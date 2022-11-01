import * as Price from "./price.js";
Price.getCryptoPrice2();

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 10,
    stagePadding: 0,
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
  });
});

const getJSON2 = function (url, errorMsg = "something went wrong") {
  return fetch(url).then((response) => {
    // console.log(response);

    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

const getCryptoPrice3 = async function () {
  try {
    const data1 = await getJSON2(`https://api.changelly.com/`);
    console.log(data1);
  } catch (err) {
    console.log(err);
  }
};
getCryptoPrice3();
