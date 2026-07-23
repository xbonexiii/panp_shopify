document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;

    var endDateStr = countdownElement.getAttribute('data-end-date');
    var endDate = new Date(endDateStr).getTime();

    function updateCountdown() {
        var now = new Date().getTime();
        var distance = endDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "SALE STARTED";
            return;
        }

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = 'あと' + days + '日 ' + hours + '時間 ' + minutes + '分 ' + seconds + '秒';
    }

    var countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
