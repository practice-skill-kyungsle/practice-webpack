const getSecondNode = () => {
    let newHTML = "";
    newHTML += "<div>";
    newHTML += "second node!";
    newHTML += "</div>";
    return new DOMParser().parseFromString(newHTML, "text/html").body.firstChild;
};

// app이라는 id를 가진 요소에 append 해주기
document.getElementById("app").appendChild(getSecondNode());
