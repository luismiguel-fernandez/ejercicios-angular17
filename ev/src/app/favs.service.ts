import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavsService {

  private favs:Array<string> = []

  constructor() {
    let savedFavs = localStorage.getItem("favs") || "[]"
    this.favs = JSON.parse(savedFavs)
   }

  addFav(id:string) {
    if (!this.favs.includes(id)) {
      this.favs.push(id)
      localStorage.setItem("favs",JSON.stringify(this.favs))
    }
  }

  delFav(id:string){
    let posicion = this.favs.indexOf(id)
    if (posicion != -1) {
      this.favs.splice(posicion,1)
      localStorage.setItem("favs",JSON.stringify(this.favs))
    }
  }

  getFavs():Array<string> {
    return this.favs
  }

  isFav(id:string) {
    return this.favs.includes(id)
  }
}
