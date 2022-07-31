document.addEventListener("DOMContentLoaded", () => {
    let center = [55.776109, 37.774861];

    function init() {
        let map = new ymaps.Map('map', {
            center: center,
            zoom: 10
        });

        let placemark = new ymaps.Placemark(center, {
            balloonContent: null,
        }, {
            iconLayout: "default#image",
            iconImageHref: "data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.9993 0C20.8047 0 10.666 9.07467 10.666 20.272C10.666 31.4667 19.9167 44.832 31.9993 64C44.082 44.832 53.3327 31.4667 53.3327 20.272C53.3327 9.07467 43.1967 0 31.9993 0ZM31.9993 37.3333C23.162 37.3333 15.9993 30.1707 15.9993 21.3333C15.9993 12.496 23.162 5.33333 31.9993 5.33333C40.8367 5.33333 47.9994 12.496 47.9994 21.3333C47.9994 30.1707 40.8367 37.3333 31.9993 37.3333Z' fill='%232E4D99'/%3E%3Cpath d='M36.0818 13.5733H27.916V29.1188H36.0818V13.5733Z' fill='%232E4D99'/%3E%3Cpath d='M42.3579 18.3888H40.166V29.1218H42.3579V18.3888Z' fill='%232E4D99'/%3E%3Cpath d='M23.8318 18.3888H21.64V29.1218H23.8318V18.3888Z' fill='%232E4D99'/%3E%3C/svg%3E%0A",
            iconImageSize: [64, 64],
        });

        map.controls.remove("geolocationControl");
        map.controls.remove("searchControl");
        map.controls.remove("trafficControl");
        map.controls.remove("typeSelector");
        map.controls.remove("fullscreenControl");
        map.controls.remove("zoomControl");
        map.controls.remove("rulerControl");
        map.behaviors.disable(["scrollZoom"]);

        map.geoObjects.add(placemark);
    }

    window.ymaps?.ready(init);
});