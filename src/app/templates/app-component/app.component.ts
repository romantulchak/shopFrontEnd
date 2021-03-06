import { Component, HostListener } from '@angular/core';
import {TokenStorageService} from '../../service/token-storage.service';
import { WebSocketService } from '../../service/webSocket.service';
import { ProductService } from '../../service/product.service';
import { BasketService } from '../../service/basket.service';
import { CategoryService } from 'src/app/service/category.service';
import { OpinionService } from 'src/app/service/opinion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  product:any[] = [];


  title = 'ShopFrontEnd';

  public notifications = 0;

  constructor(private webSocketService: WebSocketService, private productService: ProductService,private categoryService: CategoryService, private basketService: BasketService, private opinionService: OpinionService){

    let stompClient = this.webSocketService.connect();
    stompClient.connect({},frame=>{
      stompClient.subscribe('/topic/update', res => {
              let parseToJson = JSON.parse(res.body);

              switch(parseToJson.title){
                case 'updateProducts':
                  this.productService.updateProducts.next(true);
                  this.basketService.updateBasket.next(true);
                  this.basketService.updatePrice.next(true);
                  break;
                case 'updateCategory':
                  this.categoryService.updateCategories.next(true);
                  break;
                case 'updateOpinion':
                  this.opinionService.updateOpinion.next(true);
                  this.opinionService.productId.next(parseToJson.productId);
                  this.productService.updateAverageRanking.next(true);
                  break;
                case 'updateAnswer':
                  this.opinionService.updateReplayToOption.next(true);
                  this.opinionService.replayOpinion.next(parseToJson.opinionProductId);
                  break;
              }



        })
    });

  }




  ngOnInit() {

    if(localStorage.getItem('product') === null){
      console.log('m,.m,.');
      localStorage.setItem('product',  JSON.stringify(this.product));
      this.basketService.updateBasket.next(true);
    }
  }


}
