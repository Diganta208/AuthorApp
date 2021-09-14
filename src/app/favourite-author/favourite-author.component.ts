import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-author',
  templateUrl: './favourite-author.component.html',
  styleUrls: ['./favourite-author.component.css']
})
export class FavouriteAuthorComponent implements OnInit {


  meta: any
  authors: any=[]
  myarr: any=[]
  displayedColumns: string[] = ['Name', 'Bio'];

  constructor() {

     this.meta = { totalItemCount: 0, totalPageCount: 0, itemsPerPage: 10, currentPage: 1, nextPage: 0 };
     let result=  localStorage.getItem('favouriteAuthors')
     if(result) this.authors=JSON.parse(result)
     this.meta.totalItemCount = this.authors.length
     this.getpagesizeWiseData()
   }

  ngOnInit(): void {
  }

  getPageDetails(event: any)
  {
      //console.log(event)
      this.getpagesizeWiseData(event.pageIndex, event.pageSize)
  }

  getpagesizeWiseData(pageindex=0,pageSize=10)
  {
       this.myarr=[]
         for(let i=pageindex*pageSize; i<pageSize*(pageindex+1); i++)
         {
            if(!this.authors[i]) break;
            this.myarr.push(this.authors[i])
         }
        
  }





}
