import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { WelcomeComponent } from './welcome/welcome.component'
import {ProductListComponent} from './products/product-list.component'
import {ProductDetailComponent} from './products/product-detail.component'
import {StarComponent} from './star/star.component'
import {ProductFilterPipe} from './products/product-filter.pipe'
import {HttpModule} from '@angular/http'
import {RouterModule} from '@angular/router'
import {ProductDetailGuard} from './products/product-guard.service'


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
    StarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',
      canActivate: [ProductDetailGuard]
      , component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo:'welcome', pathMatch:'full'},
      {path: '**', redirectTo:'welcome', pathMatch:'full'}
    ],{useHash:true})
  ],
  providers: [ProductDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
