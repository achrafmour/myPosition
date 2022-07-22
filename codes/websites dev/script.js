document.getElementById("get").onclick = () => {
    navigator.geolocation.watchPosition(
        function name(position) {
            document.querySelector("#maps").innerHTML = 
            `<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=${position.coords.longitude},${position.coords.latitude}&;layer=mapnik"></iframe>`
        },
        function name(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    document.querySelector("p").innerHTML = "you are denied the permission"
                    break;
                case error.UNKNOWN_ERROR:
                    document.querySelector("p").innerHTML = "unknown error"
                    break;
            }
        }
    )
}