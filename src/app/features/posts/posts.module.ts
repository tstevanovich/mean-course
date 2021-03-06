import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { PostCreateComponent } from './post-create/post-create.component';

const COMPONENTS = [PostCreateComponent];
const PROVIDERS = [];
const MODULES = [CommonModule, SharedModule];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS]
})
export class PostsModule {}
