import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { HeaderComponent } from './header/header.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { GallerySliderComponent } from './gallery-slider/gallery-slider.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { ServiceSidebarComponent } from './service-sidebar/service-sidebar.component';
import { DoctorSidebarComponent } from './doctor-sidebar/doctor-sidebar.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { ClinicSidebarComponent } from './clinic-sidebar/clinic-sidebar.component';
import { SmallCartComponent } from './small-cart/small-cart.component';
import { ShopSidebarComponent } from './shop-sidebar/shop-sidebar.component';
import { JwtServiceService } from '../services/jwt-service.service';
import { UserProfileComponent } from '../pages/user-profile/user-profile.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegistrationComponent } from '../pages/registration/registration.component';
import { ResetPasswordComponent } from '../pages/reset-password/reset-password.component';
import { ForgetPasswordComponent } from '../pages/forget-password/forget-password.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ProductManagementComponent } from '../views/product-management/product-management.component';
import { ReclamationManagementComponent } from '../views/reclamation-management/reclamation-management.component';
import { CategoryManagementComponent } from '../views/category-management/category-management.component';
import { GiftManagementComponent } from '../views/gift-management/gift-management.component';
import { SearchPipe } from 'src/app/search.pipe';
import { AddReclamationComponent } from '../views/reclamation-management/add-reclamation/add-reclamation.component';
import { AddProductComponent } from '../views/product-management/add-product/add-product.component';
import { AddRequestComponent } from '../views/association-requests/add-request/add-request.component';
import { AssociationRequestsComponent } from '../views/association-requests/association-requests.component';
import { ListRequestsComponent } from '../views/association-requests/list-requests/list-requests.component';
import { AddAssociationComponent } from '../views/association/add-association/add-association.component';
import { AssociationComponent } from '../views/association/association.component';
import { MyAssociationComponent } from '../views/association/my-association/my-association.component';
import { AddDonationComponent } from '../views/donation/add-donation/add-donation.component';
import { CollectComponent } from '../views/donation/collect/collect.component';
import { ContactDonationComponent } from '../views/donation/contact-donation/contact-donation.component';
import { DonationComponent } from '../views/donation/donation.component';
import { DonationsGiftComponent } from '../views/donation/donations-gift/donations-gift.component';
import { MyDonationsComponent } from '../views/donation/my-donations/my-donations.component';
import { RequestComponent } from '../views/request/request.component';
import { ReservationComponent } from '../views/reservation/reservation.component';
import { EventComponent } from '../views/event/event.component';
import { ArticleDetailComponent } from '../views/article-detail/article-detail.component';
import { ArticleComponent } from '../views/article/article.component';
import { CommentComponent } from '../views/comment/comment.component';
import { CommandComponent } from '../views/command/command.component';
import { MyCommandsComponent } from '../views/command/my-commands/my-commands.component';
@NgModule({
  declarations: [
    HeaderComponent,
    HeaderTwoComponent,
    FooterComponent,
    BreadcrumbsComponent,
    GallerySliderComponent,
    BlogSidebarComponent,
    ServiceSidebarComponent,
    DoctorSidebarComponent,
    MobileMenuComponent,
    ClinicSidebarComponent,
    SmallCartComponent,
    ShopSidebarComponent,
    UserProfileComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    LoginComponent,
    ProductManagementComponent,
    ReclamationManagementComponent,
    CategoryManagementComponent,
    GiftManagementComponent,
    SearchPipe,
    AddReclamationComponent,
    AddProductComponent,


    AssociationComponent,
    DonationComponent,
    RequestComponent,
    AddDonationComponent,
    MyDonationsComponent,
    ContactDonationComponent,
    DonationsGiftComponent,
    CollectComponent,
    AddAssociationComponent,
    MyAssociationComponent,
    AssociationRequestsComponent,
    AddRequestComponent,
    ListRequestsComponent,

    ReservationComponent,
    EventComponent,
    ArticleComponent,
    ArticleDetailComponent,
    CommentComponent,
    CommandComponent,
    MyCommandsComponent


  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BreadcrumbModule,
    FormsModule,
    SlickCarouselModule,
    NgxSliderModule,
    ReactiveFormsModule,
  ],
  providers : [JwtServiceService],
  exports:[
    HeaderComponent,
    HeaderTwoComponent,
    FooterComponent,
    BreadcrumbsComponent,
    GallerySliderComponent,
    BlogSidebarComponent,
    ServiceSidebarComponent,
    DoctorSidebarComponent,
    ClinicSidebarComponent,
    ShopSidebarComponent
  ]
})
export class SharedModule { }
