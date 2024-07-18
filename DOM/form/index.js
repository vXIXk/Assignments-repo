"use strict";

const form = document.querySelector("form");

e.target.onsubmit = e => {
    e.preventDefault();

    const formData = packInfo(e.target);
    console.log("Form data :>> ", formData);
};

function packInfo(form) {
    const pack = {};

    pack.userName = `${form.elements["first-name"].value} ${form.elements["last-name"].value}`;
    pack.email = form.elements["email"].value;
    pack.phoneNumber = `${form.elements["area-code"].value}-${form.elements["prefix"].value}-${form.elements["line-number"].value}`;
    pack.messageSubject = form.elements["message-subject"].value;
    pack.message = form.elements["message"].value.trim().replace(/\s+/g, " ");

    return pack;
}
