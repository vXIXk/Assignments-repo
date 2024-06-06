"use strict";

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
            dislikesCount
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
      set likesCount(value) {
            if (typeof value !== "number" || !Number.isInteger(value)) {
                  throw new TypeError(
                        "The 'likesCount' property value must be integer."
                  );
            }
            if (value < 0) {
                  throw new RangeError(
                        "The 'likesCount' property value can't be negative."
                  );
            }
            this._likesCount = value;
      }
      get likesCount() {
            return this._likesCount;
      }
      set dislikesCount(value) {
            if (typeof value !== "number" || !Number.isInteger(value)) {
                  throw new TypeError(
                        "The 'dislikesCount' property value must be integer."
                  );
            }
            if (value < 0) {
                  throw new RangeError(
                        "The 'dislikesCount' property value can't be negative."
                  );
            }
            this._dislikesCount = value;
      }
      get dislikesCount() {
            return this._dislikesCount;
      }
      editTitle() {
            return `Edited :>> ${(this.title = prompt(
                  "A fitter title in mind?"
            ))}`;
      }
      editBody() {
            return `Edited :>> ${(this.body = prompt(
                  "Here goes brand new body text."
            ))}`;
      }
      touchLikes(sign) {
            if (sign === "-" && this._likesCount < 1) {
                  throw new RangeError(
                        "The 'likesCount' property value can't be negative."
                  );
            }
            if (sign === "+") {
                  return `Likes :>> ${++this._likesCount}`;
            } else if (sign === "-") {
                  return `Likes :>> ${--this._likesCount}`;
            } else {
                  throw new RangeError(
                        "Acceptable operation must be either addition or substraction."
                  );
            }
      }
      touchDislikes(sign) {
            if (sign === "-" && this._dislikesCount < 1) {
                  throw new RangeError(
                        "The 'dislikesCount' property value can't be negative."
                  );
            }
            if (sign === "+") {
                  return `Dislikes :>> ${++this._dislikesCount}`;
            } else if (sign === "-") {
                  return `Dislikes :>> ${--this._dislikesCount}`;
            } else {
                  throw new RangeError(
                        "Acceptable operation must be either addition or substraction."
                  );
            }
      }
      render({
            title,
            poster,
            date,
            body,
            images,
            hashtags,
            likesCount: likes,
            dislikesCount: dislikes,
      }) {
            document.write(`
            <article style="margin-bottom: 10rem">
                  <header>
                        <h2>${title}</h2>
                        <p>${poster}</p>
                        <p>${date}</p>
                  </header>
                  <section>
                        <p>${body}</p>
                        <ul class="images" style="list-style:none; display:flex; gap:1rem">`);
            for (const el of images) {
                  document.write(`
                              <li><img src="${el}" /></li>`);
            }
            document.write(`
                        </ul>
                        <ul class="hashtags" style="list-style:none; display:flex; gap:1rem">`);
            for (const el of hashtags) {
                  document.write(`
                              <li><a href="" style="text-decoration:none; color:inherit">${el}</a></li>`);
            }
            document.write(`
                        </ul>
                        <button disabled><i class="fa-regular fa-thumbs-up"></i> ${likes}</button>
                        <button disabled><i class="fa-regular fa-thumbs-down"></i> ${dislikes}</button>
                  </section>
            </article>`);
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
            ["#wfeghrfjkghj", "#dfghjkl"],
            4,
            1
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
            ["#coffee", "#break", "#:P"],
            21,
            3
      ),
];

posts.forEach(el => el.render(el));
