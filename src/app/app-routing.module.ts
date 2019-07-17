import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PostCreateComponent } from './features/posts/post-create/post-create.component';

const routes: Routes = [{ path: '', component: PostCreateComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
