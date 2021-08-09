jQuery( function( $ ) {

    /**
     * Votes
     * @type {{init: Donators.init, install: Donators.install, remove: Donators.remove}}
     */
    let Votes = {

        /**
         * init Donators
         */
        init: function() {

            /**
             * Install Run
             */
            this.install  = this.install( this );

            /**
             * Screens Action
             */
            this.screen_1  = this.screen_1( this );

            // /**
            //  * Click
            //  * Start
            //  */
            // $( document ).on(
            //     'click',
            //     '.votesStart',
            //     this.screen_1 );





        },

        /**
         * Install Donators
         */
        install: function() {

        },

        /**
         * Install Donators
         */
        screen_1: function() {

            $(document).on('click', '.votesStart', function (e) {

                e.preventDefault();

                $('.votesStartText').fadeOut(400, function () {
                    $('.votesStartForm').fadeIn(400);
                });

            });

        },






    };

    /**
     * init
     */
    Votes.init();

});
