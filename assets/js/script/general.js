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
            this.screen_wizard  = this.screen_wizard( this );

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

        /**
         * Wizard
         */
        screen_wizard: function() {

            $( '#wizard' ).wizard({
                animations: {
                    show: {
                        options: {
                            duration: 200
                        },
                        properties: {
                            opacity: "show"
                        }
                    },
                    hide: {
                        options: {
                            duration: 0
                        },
                        properties: {
                            opacity: "hide"
                        }
                    }
                },
                beforeBackward: function( event, state ) {

                },
                beforeForward: function( event, state ) {

                }
            })

        },

    };

    /**
     * init
     */
    Votes.init();

});
