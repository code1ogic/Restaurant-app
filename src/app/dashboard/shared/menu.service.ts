import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MenuInterface } from '../model/menu-interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private afs : AngularFirestore) { }

  addMenu(menuObj: MenuInterface) {
    menuObj.id = this.afs.createId();
    return this.afs.collection('/Menu').add(menuObj);
  }
  deleteMenu(menuObj: MenuInterface) {
    return this.afs.doc('Menu/'+menuObj.id).delete();
  }
  getAllMenu() {
    return this.afs.collection('/Menu').snapshotChanges();
  }

}
