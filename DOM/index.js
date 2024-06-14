const button = document.querySelector("#click-me");
const image = document.querySelector("img");

button.onclick = function (e) {
      button.textContent = "✧･ﾟ: *✧･ﾟ:*";
      button.style.cssText =
            "margin: 0; background-color: black; color: #2056a8; border: none; padding-right: 27.3rem";
};

const ogImgSrc = image.src;
image.onmouseenter = e =>
      (image.src =
            "https://i.pinimg.com/564x/69/d5/d7/69d5d7727c1e56acfd136f7e0d76a2ac.jpg");
image.onmouseleave = e => (image.src = ogImgSrc);

const user = {
      firstName: "Test",
      lastName: "Testovych",
      profilePhoto:
            "https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg&#39;",
      birthday: new Date("2000-05-16"),
      nickname: "super dev",
      likesCount: 10,
};
