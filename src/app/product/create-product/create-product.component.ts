import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { NotificationService } from 'src/app/service/notification.service';
import { Brand } from 'src/app/model/brand.model';
import { BrandService } from 'src/app/service/brand.service';
import { Cpu } from 'src/app/model/cpu.model';
import { Gpu } from 'src/app/model/gpu.model';
import { Sections } from 'src/app/model/sections.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {


  public showButton = true;
  public notify: boolean = false;
  public selectedFiles: File[];

  public dictionary: Map<string, string> = new Map();

  public categoryFields: Sections[];


  public product: Product = {
    id:null,
    productName: '',
    category: {
      id:1,
      categoryName: '',
      product: null
    },
    description: '',
    image: null,
    productPrice: 0,
    brand: new Brand(),
    amountInStock: 0,
    cpu: new Cpu(),
    gpu: new Gpu(),
    discountPrice: 0,
    isGlobalDiscount: false,
  };

  public category: Category[];
  public brands: Brand[];
  public cpus: Cpu[];
  public currentCpu: Cpu = new Cpu();
  public gpus: Gpu[];
  public currentGpu: Gpu = new Gpu();
  constructor(private brandService: BrandService,private notificationService: NotificationService, private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getBrands();
    this.getAllCpus();
    this.getAllGpus();
  }
  public getCategories(){
    this.categoryService.getCategories().subscribe(

      res=>{
          this.category = res;
          if(res.length == 0){
          
            this.showButton = false;
          }else{
            this.showButton = true;
          }
      },
      error=>{
        console.log(error);
      }

    );
  }
  public getAllCpus(){
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
  public getAllGpus(){
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


  public createProduct(){
    this.productService.pushImage(this.selectedFiles).subscribe(
      res=>{
        console.log(res);
      },
      error=>{console.log(error);}

    );
    const convMap = new Map<string, string>();
    this.dictionary.forEach((val: string, key: string) => {
      convMap[key] = val;
    });

    this.product.properties = convMap;
    console.log(this.product);
    this.productService.createProduct(this.product, this.notify).subscribe(
          res=>{
            this.notificationService.openSnackBar(res);
          },
          error=>{
            console.log(error);
          }

      );
  }
  showCpuDetails(){
    this.cpus.forEach(e=>{
      if(e.id == this.product.cpu.id){
        this.currentCpu = e;
      }
    });
  }
  showGpuDetails(){
    this.gpus.forEach(e=>{
      if(e.id == this.product.gpu.id){
        this.currentGpu = e;
      }
    });
  }
 
  handleImages(event){
    this.selectedFiles = event.target.files;
  }
  getBrands(){
    this.brandService.getAllBrands().subscribe(
      res=>{
        if(res != null){
          this.brands = res;
        }
      }
    );
  }
  showFields(){
    this.category.forEach(e=>{
      if(e.id == this.product.category.id){
        this.categoryFields = e.sectionsInDb;
        console.log(this.categoryFields);
      }
    });
  }

  setValue(fieldName:string ,value: string){
    this.dictionary.set(fieldName, value);
  }

}
