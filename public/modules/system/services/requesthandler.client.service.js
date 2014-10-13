'use strict';

/**
 * Created by Dominic on 24-Aug-2014.
 */
app.factory(
    'RequestHandlingService', ['$q',
        function($q) {

            function handleSuccess(response){
                if(response){
                    return (response.data);
                }
            }

            function handleFailure(response){

                if (
                    ! angular.isObject( response.data ) ||
                    ! response.data.message
                    ) {

                    return( $q.reject( 'An unknown error occurred.' ) );

                }

                // Otherwise, use expected error message.
                return( $q.reject( response.data.message ) );
            }

//
            return {
               handleSuccess : handleSuccess,
               handleFailure : handleFailure
            };


        }
    ]);