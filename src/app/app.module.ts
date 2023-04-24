import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { PageTitleComponent } from './components/pageTitle/pageTitle.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { MenuBtnComponent } from './components/menu-btn/menu-btn.component';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PageTitleComponent,
    GlobalErrorComponent,
    MenuBtnComponent,
    ModalComponent,
    CreateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
