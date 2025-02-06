import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';

// Importar NG-ZORRO
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NzMenuModule, CommonModule, NzLayoutModule, NzMenuModule, NzButtonModule, NzCardModule, NzFormModule, NzInputModule, CommonModule, NzIconModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
}
