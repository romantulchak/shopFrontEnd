import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './templates/app-component/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ProductService } from './service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { DetailsComponent } from './product/details/details.component';
import { BasketComponent } from './basket/basket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DialogSearchComponent } from './dialogs/dialog-search/dialog-search.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BasketDialogComponent } from './dialogs/basket-dialog/basket-dialog.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginDialogComponent } from './dialogs/login-dialog/login-dialog.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AuthGuard } from './guards/auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatSelectModule} from '@angular/material/select';
import { RegistrationGuard } from './guards/registration-guard.service';
import {MatBadgeModule} from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { RenamerPipe } from './pipes/renamer.pipe';
import {MatExpansionModule} from '@angular/material/expansion';
import { EditUserComponent } from './profile/edit-user/edit-user.component';
import { BrandComponent } from './brand/brand.component';
import { CpuComponent } from './cpu/cpu.component';
import { GpuComponent } from './gpu/gpu.component';
import { ProductsComponent } from './products/products.component';
import { CarouselComponent } from './carousel/carousel.component';
import { EditProductDialogComponent } from './dialogs/edit-product-dialog/edit-product-dialog.component';
import { StatusesComponent } from './statuses/statuses.component';
import { RemindMeDialogComponent } from './dialogs/remind-me-dialog/remind-me-dialog.component';
import { WebSocketService } from './service/webSocket.service';
import { FooterComponent } from './footer/footer.component';
import { BoardAdminComponent } from './templates/admin-component/board-admin.component';
import { OpinionsComponent } from './product/details/opinions/opinions.component';
import { AllAboutProductComponent } from './product/details/all-about-product/all-about-product.component';
import { ProductFeaturesComponent } from './product/details/product-features/product-features.component';
import { StarRatingModule, StarRatingConfigService } from 'angular-star-rating';
import { SingleLookProductComponent } from './single-look-product/single-look-product.component';
import { HeaderComponent } from './header/header.component';
import { BuyButtonComponent } from './buy-button/buy-button.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ShopComponent } from './shop/shop.component';
import {MatRadioModule} from '@angular/material/radio';
import { Ng5SliderModule } from 'ng5-slider';
import { AdminDashboardComponent } from './templates/admin-component/admin-dashboard/admin-dashboard.component';
import { AdminDashboardNavComponent } from './admin-dashboard-nav/admin-dashboard-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ProductComponent,
    CreateProductComponent,
    CategoryComponent,
    DetailsComponent,
    BasketComponent,
    DialogSearchComponent,
    BasketDialogComponent,
    OrderComponent,
    LoginDialogComponent,
    RegistrationComponent,
    ProfileComponent,
    NotFoundComponent,
    RenamerPipe,
    EditUserComponent,
    BrandComponent,
    CpuComponent,
    GpuComponent,
    ProductsComponent,
    CarouselComponent,
    EditProductDialogComponent,
    StatusesComponent,
    RemindMeDialogComponent,
    FooterComponent,
    BoardAdminComponent,
    ProductsComponent,
    OpinionsComponent,
    AllAboutProductComponent,
    ProductFeaturesComponent,
    SingleLookProductComponent,
    HeaderComponent,
    BuyButtonComponent,
    SubcategoryComponent,
    ShopComponent,
    AdminDashboardComponent,
    AdminDashboardNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    EditorModule,
    AppRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatBadgeModule,
    MatTabsModule,
    MatExpansionModule,
    MatRadioModule,
    Ng5SliderModule,
    StarRatingModule.forRoot()

  ],
  providers: [ProductService,authInterceptorProviders, AuthGuard, RegistrationGuard, WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
