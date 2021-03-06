import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product.model';
import { BasketService } from '../service/basket.service';
import { Category } from '../model/category.model';
import { CategoryService } from '../service/category.service';
import { error, element } from 'protractor';
import { identifierModuleUrl } from '@angular/compiler';
import { MatDialog} from '@angular/material/dialog';
import { OrderService } from '../service/order.service';
import {DialogSearchComponent} from '../dialogs/dialog-search/dialog-search.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TokenStorageService } from '../service/token-storage.service';
import { NotificationService } from '../service/notification.service';
import { BrandService } from '../service/brand.service';
import { Brand } from '../model/brand.model';
import { Cpu } from '../model/cpu.model';
import { ProductsComponent } from '../products/products.component';
import { Subject, BehaviorSubject } from 'rxjs';
import { SubscriptionService } from '../service/subscription.service';
import { Subscription } from '../model/subscription.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  public styleOn = false;
  public currentProduct: Product;

  @ViewChild(ProductsComponent) childComp: ProductsComponent;

  public slides = [
    { src: '../../assets/img/slider-1.jpg' },
    { src: '../../assets/img/slider-2.jpg' },
    { src: '../../assets/img/slider-3.jpg' }
  ];
  public slidesMin = [
    { src: '../../assets/img/slider-min-1.jpg' },
    { src: '../../assets/img/slider-min-2.jpg' },
    { src: '../../assets/img/slider-min-3.jpg' }
  ]



  public lastTenProducts: Product[];


  public mainLoading = true;
  public productToCompare: Product;
  public productsToComponent: Product[];
 // public brandsToSend: string[] = [];
 // public cpusToSend: string[] = [];
  //public gpusToSend: string[] = [];
  public category: Category = {
    id: null,
    categoryName: '',
    product: null
  };
  public categories: Category[];
//  public brands: Brand[];
 // public cpus: Cpu[];
  // public gpus: Gpu[];
  constructor(private brandService: BrandService,  private notificationService: NotificationService, private toketnSerivce: TokenStorageService, private productService: ProductService,private orderService: OrderService, private basketService: BasketService, private categoryService: CategoryService, private subscriptionService: SubscriptionService) { }

  public isAdmin = false;

  productCheck: any[] = [];
  ngOnInit(): void {
    this.productCheck =  this.basketService.sa;

    this.getLastTenProducts();
    this.mostPurchased();
    this.isAdmin = this.toketnSerivce.showAdminBoard;
    setTimeout(() => {
      this.getCategories();
      //this.getAllBrands();
      //this.getAllCpus();
      //this.getAllGpus();

   }, 500);
   this.categoryService.updateCategories.subscribe(

    res=>{
      if(res === true){
        this.getCategories();
      }
    }

  );


  this.productService.updateProducts.subscribe(
    res=>{
      if(res === true){
        console.log('WEB UPDATE ');
        this.getLastTenProducts();
        this.mostPurchased();
      }
    }
  );


   this.basketService.updateProducts.subscribe(
    res=>{
      if(res === true){
        this.getLastTenProducts();
      }
    }

   );
  }

  /*
  getAllGpus(){
    this.productService.getAllGpus().subscribe(
      res=>{
        if(res != null)
          this.gpus = res;
      },
      error=>{
        console.log(error);
      }
    );
  }

  getAllCpus(){
    this.productService.getAllCpus().subscribe(

      res=>{
        if(res != null)
          this.cpus = res;
      },
      error=>{
        console.log(error);
      }

    );
  }

  getAllBrands(){
    this.brandService.getAllBrands().subscribe(

      res=>{
        if (res != null) {
          this.brands = res;
        }

      }

    );
  }*/


/*
  filter(brandName?: string, cpuName?: string, gpuName?: string){
    this.mainLoading = true;

    if(brandName != null){
      if(!this.brandsToSend.includes(brandName)){
        console.log('1');
        this.brandsToSend.push(brandName);
      }else{
        this.brandsToSend = this.brandsToSend.filter(e=>e != brandName);
      }
    }
    if(cpuName != null){
      if(!this.cpusToSend.includes(cpuName)){
        console.log('2');
        this.cpusToSend.push(cpuName);
      }else{
        this.cpusToSend = this.cpusToSend.filter(e=>e != cpuName);
      }
    }

    if(gpuName != null){
      console.log('3');
      if(!this.gpusToSend.includes(gpuName)){
        console.log('3');
        this.gpusToSend.push(gpuName);
      }else{
        this.gpusToSend = this.gpusToSend.filter(e=>e != gpuName);
      }

    }
    this.productService.filter(this.brandsToSend, this.cpusToSend, this.gpusToSend).subscribe(
      res=>{
        if(res !=null){
          this.childComp.filterCategory(res);
          setTimeout(() => {
            this.mainLoading = false;
          }, 500);
        }
      },
      error=>{
        console.log('error');
      }

    );

  }*/



  getCategories(){
    this.mainLoading = true;
    this.categoryService.getCategories().subscribe(
      res=>{
        if(res != null){
          this.categories = res;
          setTimeout(() => {
            this.mainLoading = false;
          }, 500);
        }
      },
      error=>{
        console.log(error);
      }
    );
  }

  filterByPrice(){
    this.productService.getProductsByPrice().subscribe(
      res=>{
        //this.products = res;
        console.log(res);
     },
     error => {
       console.log(error);
     }
    );
  }

  filterByCategory(){
    this.productService.filterByCategory(this.category.categoryName, 0).subscribe(
      res=>{
        if(res != null){
          if(this.childComp){

            this.childComp.filterCategory(res);
          }else{
            alert('Something wrong')
          }
        }
      },
      error=>{
        console.log(error);
      }
    );
  }

  mostPurchased(){
    this.productService.mostPurchased().subscribe(
      res=>{
        if(res != null){
          this.productsToComponent = res;

        }
      }

    );
  }
  getLastTenProducts(){
    this.mainLoading = true;
    this.productService.getLastTenProducts().subscribe(
      res=>{
        if(res != null){
            console.log(res);
          this.childComp.checkInBasket(res);
          this.lastTenProducts = res;
          this.productService.lastProducts.next(true);
          setTimeout(() => {
            this.mainLoading = false;
          }, 500);
        }
      }

    );
  }

}
