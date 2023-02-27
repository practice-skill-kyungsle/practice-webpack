const getFirstNode = () => {
    const printer = document.createElement("div");
    printer.innerHTML = "first node!";
    return printer;
};

// app이라는 id를 가진 요소에 append 해주기
document.getElementById("app").appendChild(getFirstNode());
