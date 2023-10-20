import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/pages/registration/registration.component';  
import { LoginComponent } from './components/pages/login/login.component';
import { ForgetPasswordComponent } from './components/pages/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/pages/reset-password/reset-password.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';
import { ProductManagementComponent } from './components/views/product-management/product-management.component';
import { CategoryManagementComponent } from './components/views/category-management/category-management.component';
import { ReclamationManagementComponent } from './components/views/reclamation-management/reclamation-management.component';
import { AddReclamationComponent } from './components/views/reclamation-management/add-reclamation/add-reclamation.component';
import { GiftManagementComponent } from './components/views/gift-management/gift-management.component';
import { AddProductComponent } from './components/views/product-management/add-product/add-product.component';
import { DonationComponent } from './components/views/donation/donation.component';
import { AddDonationComponent } from './components/views/donation/add-donation/add-donation.component';
import { AssociationComponent } from './components/views/association/association.component';
import { MyDonationsComponent } from './components/views/donation/my-donations/my-donations.component';
import { AddAssociationComponent } from './components/views/association/add-association/add-association.component';
import { AddRequestComponent } from './components/views/association-requests/add-request/add-request.component';
import { AssociationRequestsComponent } from './components/views/association-requests/association-requests.component';
import { ListRequestsComponent } from './components/views/association-requests/list-requests/list-requests.component';
import { MyAssociationComponent } from './components/views/association/my-association/my-association.component';
import { RequestComponent } from './components/views/request/request.component';
import { ContactDonationComponent } from './components/views/donation/contact-donation/contact-donation.component';
import { DonationsGiftComponent } from './components/views/donation/donations-gift/donations-gift.component';
import { CollectComponent } from './components/views/donation/collect/collect.component';
import { EventComponent } from './components/views/event/event.component';
import { ReservationComponent } from './components/views/reservation/reservation.component';
import { ArticleDetailComponent } from './components/views/article-detail/article-detail.component';
import { ArticleComponent } from './components/views/article/article.component';
import { CommentComponent } from './components/views/comment/comment.component';
import { MyCommandsComponent } from './components/views/command/my-commands/my-commands.component';
import { CommandComponent } from './components/views/command/command.component';

const routes: Routes = [
  // Home
  { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: "Homepage" } },
  { path: 'home-v2', loadChildren: () => import('./components/pages/home-two/home-two.module').then(m => m.HomeTwoModule), data: { breadcrumb: "Homepage" } },
  // Blog
  { path: 'blog/cat/:catId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/tag/:tagId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/search/:query', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/author/:authorId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog-standard', loadChildren: () => import('./components/pages/blog-standard/blog-standard.module').then(m => m.BlogStandardModule), data: { breadcrumb: "Blog Standard" } },
  { path: 'blog-details/:id', loadChildren: () => import('./components/pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule), data: { breadcrumb: "Blog Details" } },
  // About
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule), data: { breadcrumb: "About Us" } },
  // Services
  { path: 'service/cat/:catId', loadChildren: () => import('./components/pages/services/services.module').then(m => m.ServicesModule), data: { breadcrumb: "Services" } },
  { path: 'services', loadChildren: () => import('./components/pages/services/services.module').then(m => m.ServicesModule), data: { breadcrumb: "Services" } },
  { path: 'service-details/:id', loadChildren: () => import('./components/pages/service-details/service-details.module').then(m => m.ServiceDetailsModule), data: { breadcrumb: "Service Details" } },
  // Faqs
  { path: 'faqs', loadChildren: () => import('./components/pages/faqs/faqs.module').then(m => m.FaqsModule), data: { breadcrumb: "FAQ's" } },
  // Appointment
  { path: 'appointment', loadChildren: () => import('./components/pages/appointment/appointment.module').then(m => m.AppointmentModule), data: { breadcrumb: "Appointment" } },
  // Clinics
  { path: 'clinic/cat/:catId', loadChildren: () => import('./components/pages/clinic-grid/clinic-grid.module').then(m => m.ClinicGridModule), data: { breadcrumb: "Clinic Grid" } },
  { path: 'clinic-grid', loadChildren: () => import('./components/pages/clinic-grid/clinic-grid.module').then(m => m.ClinicGridModule), data: { breadcrumb: "Clinic Grid" } },
  { path: 'clinic-list', loadChildren: () => import('./components/pages/clinic-list/clinic-list.module').then(m => m.ClinicListModule), data: { breadcrumb: "Clinic List" } },
  { path: 'clinic-details/:id', loadChildren: () => import('./components/pages/clinic-details/clinic-details.module').then(m => m.ClinicDetailsModule), data: { breadcrumb: "Clinic Details" } },
  // Doctors
  { path: 'doctor/cat/:catId', loadChildren: () => import('./components/pages/doctor-grid/doctor-grid.module').then(m => m.DoctorGridModule), data: { breadcrumb: "Doctor Grid" } },
  { path: 'doctor-grid', loadChildren: () => import('./components/pages/doctor-grid/doctor-grid.module').then(m => m.DoctorGridModule), data: { breadcrumb: "Doctor Grid" } },
  { path: 'doctor-list', loadChildren: () => import('./components/pages/doctor-list/doctor-list.module').then(m => m.DoctorListModule), data: { breadcrumb: "Doctor List" } },
  { path: 'doctor-details/:id', loadChildren: () => import('./components/pages/doctor-details/doctor-details.module').then(m => m.DoctorDetailsModule), data: { breadcrumb: "Doctor Details" } },
  // Shop
  { path: 'shop/cat/:catId', loadChildren: () => import('./components/pages/shop-grid/shop-grid.module').then(m => m.ShopGridModule), data: { breadcrumb: "Shop Grid" } },
  { path: 'shop/tag/:tagId', loadChildren: () => import('./components/pages/shop-grid/shop-grid.module').then(m => m.ShopGridModule), data: { breadcrumb: "Shop Grid" } },
  { path: 'shop/search/:query', loadChildren: () => import('./components/pages/shop-grid/shop-grid.module').then(m => m.ShopGridModule), data: { breadcrumb: "Shop Grid" } },
  { path: 'shop/:minPrice/:maxPrice', loadChildren: () => import('./components/pages/shop-grid/shop-grid.module').then(m => m.ShopGridModule), data: { breadcrumb: "Shop Grid" } },
  { path: 'shop-grid', loadChildren: () => import('./components/pages/shop-grid/shop-grid.module').then(m => m.ShopGridModule), data: { breadcrumb: "Shop Grid" } },
  { path: 'shop-left', loadChildren: () => import('./components/pages/shop-left/shop-left.module').then(m => m.ShopLeftModule), data: { breadcrumb: "Shop Grid" } },
  { path: 'shop-right', loadChildren: () => import('./components/pages/shop-right/shop-right.module').then(m => m.ShopRightModule), data: { breadcrumb: "Shop Grid" } },
  { path: 'product-single/:id', loadChildren: () => import('./components/pages/shop-details/shop-details.module').then(m => m.ShopDetailsModule), data: { breadcrumb: "Shop Details" } },
  { path: 'wishlist', loadChildren: () => import('./components/pages/wishlist/wishlist.module').then(m => m.WishlistModule), data: { breadcrumb: "Wishlist" } },
  { path: 'cart', loadChildren: () => import('./components/pages/cart/cart.module').then(m => m.CartModule), data: { breadcrumb: "Cart" } },
  { path: 'checkout', loadChildren: () => import('./components/pages/checkout/checkout.module').then(m => m.CheckoutModule), data: { breadcrumb: "Checkout" } },
  // Contact
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: "Contact Us" } },
  // Extra
  { path: 'error-page', loadChildren: () => import('./components/pages/error-page/error-page.module').then(m => m.ErrorPageModule), data: { breadcrumb: "Error 404" } },
 
  { path: 'registration',component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path : 'forgetPassword', component:ForgetPasswordComponent},
  { path: 'resetPassword', component: ResetPasswordComponent},
  { path: 'userProfile', component: UserProfileComponent ,data: { breadcrumb: "User Profile" } },

  //
    //ProductAndGiftsManagement
  {path:'product-management',component:ProductManagementComponent},
  {path:'category-management',component:CategoryManagementComponent},
  {path:'reclamation-management',component:ReclamationManagementComponent},
  {path:'add-reclamation/:id',component:AddReclamationComponent},
  {path:'gift-management',component:GiftManagementComponent},
  {path:'add-product',component:AddProductComponent},
  ///DonationAssociation
  { path: 'donation/:idAssociation', component:DonationComponent  },
  { path: 'addDonation', component:AddDonationComponent },
  { path: 'myDonations', component:MyDonationsComponent },
  { path: 'association',component:AssociationComponent },
  { path: 'addAssociation',component:AddAssociationComponent },

  { path: 'addRequest/:idAssociation',component:AddRequestComponent },
  
  { path: 'myRequest',component:AssociationRequestsComponent },
  { path: 'listRequests/:idAssociation',   component: ListRequestsComponent },
 

  { path: 'listRequests/:idAssociation',   component: ListRequestsComponent },
  
  { path: 'myAssociation',component:MyAssociationComponent },
  { path: 'myRequests',component:RequestComponent },
  { path: 'contactDonations',component:ContactDonationComponent },
  { path: 'donationGifts',component:DonationsGiftComponent },
  { path: 'collectDonations',component: CollectComponent},
   

  { path: 'event',component:EventComponent },
  { path: 'reservation',component:ReservationComponent },


//Article
{ path: 'article', component:ArticleComponent  },
{ path: 'article-detail/:id', component:ArticleDetailComponent},
{ path: 'comment', component:CommentComponent},

   //Commands
   {path:'addCommand/:idProduct',component:CommandComponent},
   {path:'myCommands',component:MyCommandsComponent},



  { path: '**', loadChildren: () => import('./components/pages/error-page/error-page.module').then(m => m.ErrorPageModule), data: { breadcrumb: "Error 404" } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
