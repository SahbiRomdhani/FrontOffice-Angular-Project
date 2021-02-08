import { JqueryMethode } from './../../Shared/utils';
import { ProduitServiceFront } from './../../Shared/Services/ProdServiceVetrine';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { data } from 'jquery';
declare var jQuery :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listprod: any;
  quantite;

  constructor(private produitServ:ProduitServiceFront,
    private _sanitizer: DomSanitizer 
    ) { }

  ngOnInit(): void {
    jQuery('#slideshow').nivoSlider();
    this.getallProduct()
    this.JqueryyFunction()
    this.anotherJquery()
  }
  public getSantizeUrl(imageurl: string): SafeHtml {
    return this._sanitizer.sanitize(SecurityContext.HTML, this._sanitizer.bypassSecurityTrustHtml("http://127.0.0.1:8000/img_produits/" + imageurl));

  }
  

  Acheter( id:any){
    let user= localStorage.getItem('user_id') 
    this.quantite =(<HTMLInputElement>document.getElementById("quantite"+id)).value
    console.log('id prod ',id ,"Quantite ",this.quantite)
    let formdata = new FormData()
    formdata.append('user_id',user)
    formdata.append('produit_id',id)
    formdata.append('quantite',this.quantite)
    this.produitServ.acheter(formdata).subscribe(res=>{
      console.log('resultat',res)
    },err=>{
      console.log("error " , err)
    })
 
  }

  getallProduct(){
       setTimeout (() => {
      this.produitServ.listProduit().subscribe((data)=>{
        console.log("list produits",data)
        this.listprod = data;
      })
    }, 500);
  }

  JqueryyFunction(){
    
      // store the slider in a local variable
      var $window = jQuery(window),
          flexslider;
     
      // tiny helper function to add breakpoints
      function getGridSize() {
        return (window.innerWidth < 320) ? 1 :
           (window.innerWidth < 600) ? 2 :
           (window.innerWidth < 800) ? 3 :
          (window.innerWidth < 900) ? 4 : 5;
      }
      $window.load(function() {
        jQuery('#content .featured_carousel').flexslider({
          animation: "slide",
          animationLoop: false,
        slideshow: false,
          itemWidth: 210,
          minItems: getGridSize(), // use function to pull in initial value
          maxItems: getGridSize() // use function to pull in initial value
        });
      });
      
  }


  anotherJquery(){
      // store the slider in a local variable
  var $window = jQuery(window),
  flexslider;
// tiny helper function to add breakpoints
function getGridSize() {
return (window.innerWidth < 320) ? 1 :
   (window.innerWidth < 600) ? 2 :
   (window.innerWidth < 800) ? 3 :
       (window.innerWidth < 900) ? 4 : 5;
}
$window.load(function() {
  jQuery('#product-tab .featured_carousel_tab, #product-tab .latest_carousel_tab, #product-tab .bestseller_carousel_tab, #product-tab .special_carousel_tab').flexslider({
  animation: "slide",
  animationLoop: false,
slideshow: false,
  itemWidth: 210,
  minItems: getGridSize(), // use function to pull in initial value
  maxItems: getGridSize(), // use function to pull in initial value
start: function(){
  jQuery("#product-tab .tab_content").addClass("deactive");
  jQuery("#product-tab .tab_content:first").removeClass("deactive"); //Show first tab content
  } });
});

jQuery(document).ready(function() {
//Default Action
jQuery("ul#tabs li:first").addClass("active").show(); //Activate first tab
//On Click Event
jQuery("ul#tabs li").click(function() {
    jQuery("ul#tabs li").removeClass("active"); //Remove any "active" class
    jQuery(this).addClass("active"); //Add "active" class to selected tab
jQuery("#product-tab .tab_content").hide(); 
    var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
    jQuery(activeTab).fadeIn(); //Fade in the active content
    return false;
});
});
  }

}
