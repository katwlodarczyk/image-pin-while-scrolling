const sectionOneImage = document.querySelector(".image-one");
const sectionTwoImage = document.querySelector(".image-two");
const sectionThreeImage = document.querySelector(".image-three");

const topValue = "240px";

const options = {
  threshold: 1,
};

const observerOne = new IntersectionObserver((entries) => {
  if (entries[0].boundingClientRect.y < 0) {
    sectionOneImage.classList.add("fixed");
    sectionOneImage.style.setProperty("top", topValue);

    sectionTwoImage.classList.add("invisible");
    sectionThreeImage.classList.add("invisible");
  } else {
    sectionOneImage.classList.remove("fixed");
    sectionOneImage.classList.remove("invisible");

    sectionTwoImage.classList.add("invisible");
    sectionThreeImage.classList.add("invisible");
  }
}, options);

observerOne.observe(document.querySelector("#pixel-to-watch-one"));

const observerTwo = new IntersectionObserver((entries) => {
  console.log(entries[0]);
  if (entries[0].boundingClientRect.y < 0) {
    sectionTwoImage.classList.remove("invisible");
    sectionTwoImage.classList.add("fixed");
    sectionTwoImage.style.setProperty("top", topValue);

    sectionOneImage.classList.add("invisible");
    sectionThreeImage.classList.add("invisible");
  } else {
    if (
      entries[0].isIntersecting &&
      sectionOneImage.classList.contains("invisible")
    ) {
      sectionTwoImage.classList.remove("invisible");
      sectionTwoImage.classList.add("fixed");
      sectionTwoImage.style.setProperty("top", topValue);

      sectionThreeImage.classList.add("invisible");
    }
  }
}, options);

observerTwo.observe(document.querySelector("#pixel-to-watch-two"));

const observerThree = new IntersectionObserver((entries) => {
  if (entries[0].boundingClientRect.y < 0) {
    sectionThreeImage.classList.remove("fixed");
    sectionThreeImage.classList.remove("invisible");

    sectionOneImage.classList.remove("fixed");
    sectionTwoImage.classList.remove("fixed");

    sectionOneImage.classList.add("invisible");
    sectionTwoImage.classList.add("invisible");
  } else {
    sectionThreeImage.classList.add("fixed");
    sectionThreeImage.style.setProperty("top", topValue);
  }
}, options);

observerThree.observe(document.querySelector("#pixel-to-watch-three"));
