"use strict";

const form = document.querySelector("form");
const formData = {};

form.onsubmit = e => {
      e.preventDefault();
      packInfo(obj);
};

function packInfo(obj) {
      obj.userName = `${form.elements["first-name"].value} ${form.elements["last-name"].value}`;
      obj.email = form.elements["email"].value;
      obj.phoneNumber = `${form.elements["area-code"].value}-${form.elements["prefix"].value}-${form.elements["line-number"].value}`;
      obj.messageSubject = form.elements["message-subject"].value;
      obj.message = form.elements["message"].value.trim().replace(/\s+/g, " ");
}
