"use strict";

//* options for hashtags:
const options = [
      undefined,
      "#fullstack",
      "#backend",
      "#frontend",
      "#web",
      "#html",
      "#css",
      "#script",
      "#javascript",
      "#js",
      "#json",
      "#react",
      "#coding",
      "#devving",
      "#work",
      "#education",
      "#lesson",
      "#somethingNew",
      "#continue",
      "#break",
      "#coffee",
      "#java",
      "#positivity",
      "#humor",
      "#motivation",
      "#discussion",
      "#helpNeeded",
      "#idea",
];

class Post {
      constructor(
            id,
            title,
            poster,
            date,
            body,
            images,
            hashtags,
            likesCount,
            dislikesCount,
      ) {
            this.id = id;
            this.title = title;
            this.poster = poster;
            this.date = date;
            this.body = body;
            this.images = images;
            this.hashtags = hashtags;
            this.likesCount = likesCount;
            this.dislikesCount = dislikesCount;
      }

      set hashtags(value) {
            try {
                  if (value.length > 6) {
                        throw new RangeError(
                              "Posts can be assigned only up to 6 hashtags.",
                        );
                  }
                  for (const el of value) {
                        if (!options.includes(el)) {
                              throw new RangeError(
                                    "The 'hashtags' property values can't be custom.",
                              );
                        }
                  }

                  this._hashtags = value;
            } catch (err) {
                  return err;
            }
      }

      set likesCount(value) {
            try {
                  if (typeof value !== "number" || !Number.isInteger(value)) {
                        throw new TypeError(
                              "The 'likesCount' property value must be integer.",
                        );
                  }
                  if (value < 0) {
                        throw new RangeError(
                              "The 'likesCount' property value can't be negative.",
                        );
                  }
                  this._likesCount = value;
            } catch (err) {
                  return err;
                  this._likesCount = " ";
            }
      }

      set dislikesCount(value) {
            try {
                  if (typeof value !== "number" || !Number.isInteger(value)) {
                        throw new TypeError(
                              "The 'dislikesCount' property value must be integer.",
                        );
                  }
                  if (value < 0) {
                        throw new RangeError(
                              "The 'dislikesCount' property value can't be negative.",
                        );
                  }
                  this._dislikesCount = value;
            } catch (err) {
                  return err;
                  this._dislikesCount = " ";
            }
      }

      get hashtags() {
            return this._hashtags;
      }
      get likesCount() {
            return this._likesCount;
      }
      get dislikesCount() {
            return this._dislikesCount;
      }

      editTitle() {
            return `Edited :>> ${(this.title = prompt(
                  "A fitter title in mind?",
            ))}`;
      }
      editBody() {
            return `Edited :>> ${(this.body = prompt(
                  "Here goes brand new body text.",
            ))}`;
      }

      touchLikes(sign) {
            try {
                  if (sign === "-" && this.likesCount < 1) {
                        throw new RangeError(
                              "The 'likesCount' property value can't be negative.",
                        );
                  }
                  if (sign === "+") {
                        return `Likes :>> ${++this.likesCount}`;
                  } else if (sign === "-") {
                        return `Likes :>> ${--this.likesCount}`;
                  } else {
                        throw new RangeError(
                              "Acceptable operation must be either addition or substraction.",
                        );
                  }
            } catch (err) {
                  return err;
            }
      }
      touchDislikes(sign) {
            try {
                  if (sign === "-" && this.dislikesCount < 1) {
                        throw new RangeError(
                              "The 'dislikesCount' property value can't be negative.",
                        );
                  }
                  if (sign === "+") {
                        return `Dislikes :>> ${++this.dislikesCount}`;
                  } else if (sign === "-") {
                        return `Dislikes :>> ${--this.dislikesCount}`;
                  } else {
                        throw new RangeError(
                              "Acceptable operation must be either addition or substraction.",
                        );
                  }
            } catch (err) {
                  return err;
            }
      }

      render() {
            try {
                  const {
                        title,
                        poster,
                        date,
                        body,
                        images,
                        hashtags,
                        likesCount: likes,
                        dislikesCount: dislikes,
                  } = this;
                  document.write(`
            <article style="margin-bottom: 10rem">
                  <header>
                        <h2>${title}</h2>
                        <p>${poster}</p>
                        <p>${date}</p>
                  </header>
                  <section>
                        <p>${body}</p>
                        <ul class="images" style="list-style:none; display:flex; gap:1rem">
                              ${images
                                    .map(el => `<li><img src="${el}" /></li>`)
                                    .join(" ")}
                        </ul>
                        <ul class="hashtags" style="list-style:none; display:flex; gap:1rem">
                              ${hashtags
                                    .map(
                                          el =>
                                                `<li><a href="" style="text-decoration:none; color:inherit">${el}</a></li>`,
                                    )
                                    .join(" ")}
                        </ul>
                        <button disabled><i class="fa-regular fa-thumbs-up"></i> ${likes}</button>
                        <button disabled><i class="fa-regular fa-thumbs-down"></i> ${dislikes}</button>
                  </section>
            </article>`);
            } catch (err) {
                  return err;
            }
      }
}

const posts = [
      new Post(
            13,
            "Coding Journey",
            "wannabeJunior",
            "2024-06-06",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nobis recusandae consequatur in nisi, nesciunt dolorum obcaecati, autem consequuntur, fuga nemo et eligendi. Esse, necessitatibus dolorum omnis deleniti, ea mollitia ipsum cumque laboriosam alias dolore ex culpa illum quaerat nemo voluptatem harum vitae maxime molestias? Ducimus quae eius dignissimos deserunt eligendi facilis, placeat nostrum? Illo sunt amet dolores ut non eligendi explicabo adipisci maiores? Quibusdam tempora vel nisi, alias laboriosam iste inventore vitae quasi eius a, doloremque fugiat atque nam est unde dolores expedita veritatis velit quam! Eaque dolores possimus mollitia labore iure ✎",
            [
                  `https://i.pinimg.com/564x/cc/45/a3/cc45a3b373d65a36186d044883ecf2ce.jpg`,
                  `https://i.pinimg.com/564x/63/e4/4c/63e44c9263f6b29a76aefad90a0d26be.jpg`,
            ],
            ["#motivation"],
            4,
            1,
      ),
      new Post(
            19,
            "Coffee break ✌️",
            "coffee_addict",
            "2024-06-07",
            "",
            [
                  `https://i.pinimg.com/originals/61/5d/8e/615d8e937751d65c8a8399e6410a8b1a.gif`,
            ],
            ["#coffee", "#java", "#break"],
            21,
            3,
      ),
];

posts.forEach(el => el.render(el));

class RangeValidator {
      constructor(from, to) {
            this.from = from;
            this.to = to;
      }

      set from(value) {
            try {
                  if (typeof value !== "number") {
                        throw new TypeError("Range limits must be numbers.");
                  }
                  this._from = value;
            } catch (err) {
                  return err;
            }
      }
      set to(value) {
            try {
                  if (typeof value !== "number") {
                        throw new TypeError("Range limits must be numbers.");
                  }
                  if (value < this._from) {
                        throw new RangeError(
                              "The lower range limit can't be greater or equal to the upper range limit.",
                        );
                  }
                  this._to = value;
            } catch (err) {
                  return err;
            }
      }

      get from() {
            return this._from;
      }
      get to() {
            return this._to;
      }
      get range() {
            return [this._from, this._to];
      }

      isValid(number) {
            try {
                  if (typeof number !== "number") {
                        throw new TypeError(
                              "The value to validate must be a number.",
                        );
                  }
                  return number >= this.from && number <= this.to;
            } catch (err) {
                  return err;
            }
      }
}

const range = new RangeValidator(0, 100);
