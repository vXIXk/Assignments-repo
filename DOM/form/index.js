"use strict";

const form = document.querySelector("form");
const formData = {};

form.onsubmit = e => {
      e.preventDefault();
      packInfo();
};

function packInfo() {
      formData.userName = `${form.elements["first-name"].value} ${form.elements["last-name"].value}`;
      formData.email = form.elements["email"].value;
      formData.phoneNumber = `${form.elements["area-code"].value}-${form.elements["prefix"].value}-${form.elements["line-number"].value}`;
      formData.messageSubject = form.elements["message-subject"].value;
      formData.message = form.elements["message"].value
            .trim()
            .replace(/\s+/g, " ");

      return formData;
}
