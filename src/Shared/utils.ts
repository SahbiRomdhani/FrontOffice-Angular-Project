import * as $ from "jquery"

export class JqueryMethode{

    slider(){
        $(document).ready(function() {
            $('#slideshow').nivoSlider();
        });
    }
}