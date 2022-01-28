import { Component, OnInit } from '@angular/core';
import { MenuInterface } from '../../model/menu-interface';
import { MenuService } from '../../shared/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  totalMenus : MenuInterface[] = [];

  uid : string = '';
  name: string = '';
  full: number = 0;
  half: number = 0;

  constructor(private menuService : MenuService) { }

  ngOnInit(): void {
    this.getAllMenu();
    this.uid = '';
    this.name = '';
    this.full = 0;
    this.half = 0;
  }

  addMenu() {
    var menuObj: MenuInterface = {
      id: '',
      name: this.name,
      half_price: this.half,
      full_price: this.full
    }

    this.menuService.addMenu(menuObj);
    this.ngOnInit();
  }

  getAllMenu() {
    this.menuService.getAllMenu().subscribe((res: any[]) => {

      this.totalMenus = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, (err: { message: string; }) => {
      alert('Error occured while fetching employee data.' + err.message);
    })
  }

  deleteMenu(menu : MenuInterface) {
    if(window.confirm('Are you sure you want to delete '+menu.name +' ?')) {
      this.menuService.deleteMenu(menu);
      this.menuService.getAllMenu();
    }
  }

  editMenuInfo(menu : MenuInterface) {
    this.uid = menu.id;
    this.name = menu.name;
    this.full = menu.full_price;
    this.half = menu.half_price;;
  }

  saveEditedMenu() {
    var menuObj: MenuInterface = {
      id: this.uid,
      name: this.name,
      full_price: this.full,
      half_price: this.half,
    }
    this.menuService.deleteMenu(menuObj);
    this.menuService.addMenu(menuObj);
    this.ngOnInit();
  }
}
