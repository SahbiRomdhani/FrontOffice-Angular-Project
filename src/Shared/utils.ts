declare var $: any;

export class JqueryMethode{

    slider(){
        $(document).ready(function() {
            $('#slideshow').nivoSlider();
        });
    }
}