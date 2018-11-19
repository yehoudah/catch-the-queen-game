$(function () {
    var $card = $('.js-card');
    var switching = false;

    $('#btn').one('click', flipCard);

    function flipCard() {
        if (switching) {
            return false;
        }
        switching = true;

        $card.addClass('is-switched');
        var gridForLoop = $('#cards-deck').rdmGrid();
        var countTime = 0;
        if ($card.hasClass('is-switched')) {
            var shuffleTimeInterval = setInterval(function () {
                ++countTime;
                gridForLoop.trigger();
                if (countTime == 10) {
                    clearInterval(shuffleTimeInterval);

                    $card.on('click', function () {
                        $card.removeClass('is-switched');
                        $('#modal').show();
                        if ($(this).attr('id') == "queen") {
                            $('.success').show();
                            $('.fail').hide();
                        } else {
                            $('.success').hide();
                            $('.fail').show();
                        }
                    });
                }
            }, 500);
        }
        window.setTimeout(function () {
            $('card__side').toggleClass('is-active');
            switching = false;
        }, 500);
    }

});