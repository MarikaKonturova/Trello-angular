import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedRoutingModule } from './shared-routing.module'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { LayoutModule } from '@angular/cdk/layout'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu'
import { RouterModule } from '@angular/router'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { ShellComponent } from './components/shell/shell.component'
import { FormsModule } from '@angular/forms'
import { PaginationComponent } from './components/pagination/pagination.component'
import { MatPaginatorModule } from '@angular/material/paginator'

const components = [ShellComponent, PaginationComponent]
const modules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatPaginatorModule,
  MatMenuModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSnackBarModule,
  RouterModule,
  LayoutModule,
]
@NgModule({
  declarations: [...components],
  imports: [CommonModule, FormsModule, SharedRoutingModule, ...modules],
  exports: [...components, ...modules, SharedRoutingModule],
})
export class SharedModule {}
