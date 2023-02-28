export default function () {
    let newHTML = "";
    newHTML += "<div>";
    newHTML += "second module!";
    newHTML += "</div>";
    return new DOMParser().parseFromString(newHTML, "text/html").body.firstChild;
}
