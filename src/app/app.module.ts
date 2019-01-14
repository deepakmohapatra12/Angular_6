import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {ModalModule,BsModalService} from 'ngx-bootstrap/modal';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import { Ng2SearchPipeModule } from 'ng2-search-filter';//for search filter
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TestData } from './test-data';
import { CreateComponent } from './employee/create.component';
import { ListComponent } from './employee/list.component';
import { PraticeComponent } from './employee/pratice/pratice.component';
import { TeamManagementService } from './employee/pratice/team-management.service';
import { AddNewPostComponent } from './Blog/add-new-post/add-new-post.component';
import { EditPostComponent } from './Blog/edit-post/edit-post.component';
import { DeletePostComponent } from './Blog/delete-post/delete-post.component';
import { BlogService } from './Blog/blog.service';
import { MainComponent } from './Blog/main/main.component';
import { NgtemplatengforComponent } from './concrete/ngtemplatengfor.component';
import { MessageDirective } from './concrete/message.directive';
import { ParentComponent } from './concrete/parent.component';
import { DemopraticeComponent } from './concrete/demopratice.component';
import { CpDirective } from './concrete/cp.directive';

const appRoutes: Routes = [
      { path: 'create', component: CreateComponent },
      { path: 'list',component: ListComponent },
      { path: 'edit/:id', component: CreateComponent },
      {path:'pratice',component:PraticeComponent},
      {path:'main',component:MainComponent},
      {path:'ngTemplate',component:NgtemplatengforComponent},
      {path:'useredit/:id',component:NgtemplatengforComponent},
      {path:'listMain',component:ParentComponent},
      {path:'demopratice',component:DemopraticeComponent},
      {path:'my-book/:id',component:DemopraticeComponent}
    ];

@NgModule({
  imports: [     
            BrowserModule,
            HttpModule,
            HttpClientModule,
            BsDatepickerModule.forRoot(),
            NgxPaginationModule,
            Ng2OrderModule,
            Ng2SearchPipeModule,
            ReactiveFormsModule,
            FormsModule,
            BrowserAnimationsModule,
            TableModule,
            PaginatorModule,
            NgbModule.forRoot(),
            ModalModule.forRoot(),
            ToastrModule.forRoot(),
            RouterModule.forRoot(
                  appRoutes
                )
  ],
  declarations: [
        AppComponent,
        CreateComponent,
        ListComponent,
        PraticeComponent,
        AddNewPostComponent,
        EditPostComponent,
        DeletePostComponent,
        MainComponent,
        NgtemplatengforComponent,
        ParentComponent,
        DemopraticeComponent,
        CpDirective,
        MessageDirective
     
  ],
  providers: [
      TeamManagementService,BlogService,BsModalService
  ],
  bootstrap: [
        AppComponent
  ],
  entryComponents:[AddNewPostComponent, DeletePostComponent, EditPostComponent]

})
export class AppModule { }
