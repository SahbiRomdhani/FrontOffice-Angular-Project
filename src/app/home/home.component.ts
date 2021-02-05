import { ProduitServiceFront } from './../../Shared/Services/ProdServiceVetrine';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listprod: any;

  constructor(private produitServ:ProduitServiceFront,
    private _sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {

    this.getallProduct()
  }
  public getSantizeUrl(imageurl: string): SafeHtml {
    return this._sanitizer.sanitize(SecurityContext.HTML, this._sanitizer.bypassSecurityTrustHtml("http://127.0.0.1:8000/img_produits/" + imageurl));

  }

  getallProduct(){
       setTimeout (() => {
      this.produitServ.listProduit().subscribe((data)=>{
        console.log("list produits",data)
        this.listprod = data;
      })
    }, 3000);
  }

}
