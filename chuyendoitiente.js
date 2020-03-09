function chuyendoi() {
    let amount = document.getElementById("amount").value;
    console.log(amount);
    let fromcurrentcy = document.getElementById("fromcurrentcy").value;
    let tocurrentcy = document.getElementById("tocurrentcy").value;
    if (fromcurrentcy === "VND" && tocurrentcy === "USD") {
        let result = Number(amount) / 23000;
        document.getElementById("result").innerHTML = result.toFixed(0);
    }
    if (fromcurrentcy === "USD" && tocurrentcy === "VND") {
        let result = Number(amount) * 23000;
        document.getElementById("result").innerHTML = result.toFixed(0);
    }
}