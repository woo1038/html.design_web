(function (window, document) {
    'use strict'

    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');
    const $fixed = document.querySelectorAll('.fixed');

    $toggleBtn.addEventListener('click', function () {
        toggleElements();
        fixedElements();
    });

    /* 브라우저 크기가 조절될때 */
    window.addEventListener('resize' ,function() {
        if(window.innerWidth > 1024) {
            offElements();
            relativeElements();
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

    function fixedElements() {
        [].forEach.call($fixed, function(fixed) {
            fixed.classList.toggle('on');          /* 클릭시 CLASS이름에 toggle위에 on추가 */
        });
    }

    function relativeElements() {
        [].forEach.call($toggles, function(fixed) {
            fixed.classList.remove('on');          /* 클릭시 CLASS이름에 toggle위에 on추가 */
        });
    }   
})(window, document)