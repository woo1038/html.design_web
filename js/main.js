(function (window, document) {
    'use strict'

    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function () {
        toggleElements();
    });

    /* 브라우저 크기가 조절될때 */
    window.addEventListener('resize' ,function() {
        if(window.innerWidth > 1024) {
            offElements();
        }
    });

    function toggleElements() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.toggle('on');          /* 클릭시 CLASS이름에 toggle위에 on추가 */
        });
    }

    function offElements() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.remove('on');          /* 클릭시 CLASS이름에 toggle위에 on추가 */
        });
    }   
})(window, document)