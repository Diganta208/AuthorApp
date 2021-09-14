import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service'
export class Meta{
  totalItemCount: any
  totalPageCount: any
  itemsPerPage: any
   currentPage: any
  nextPage: any
}

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  

  displayedColumns: string[] = ['Name', 'Bio','Action'];
  meta: any
  goToPage: any;
  authors: any[]=[]
  favAuthors : any=[]
  favAuythorId: any=[]

  constructor( public api: ApiService) {
   this.meta = { totalItemCount: 0, totalPageCount: 0, itemsPerPage: 10, currentPage: 1, nextPage: 0 };
   let result=  localStorage.getItem('favouriteAuthorsId')
   if(result) this.favAuythorId=JSON.parse(result)
   let result1=  localStorage.getItem('favouriteAuthors')
   if(result1) this.favAuthors=JSON.parse(result1)
     
   }

  ngOnInit(): void {
     this.api.getdata('authors').subscribe((res: any)=>{
         this.meta.totalItemCount = res.results.length
         let result= res.results
         this.authors=result.splice(0, this.meta.totalItemCount-10)
     })
     //this.getPageWiseAuthor()
  }

  AddOrRemoveFromFavorite(aAuthor: any)
  {
       if(this.favAuythorId.includes(aAuthor._id))
       {
         let index= this.favAuthors.indexOf(aAuthor)
         let indexId= this.favAuythorId.indexOf(aAuthor._id)
         this.favAuythorId.splice(indexId,1)
         this.favAuthors.splice(index,1)
         localStorage.setItem('favouriteAuthorsId',JSON.stringify(this.favAuythorId) )
         localStorage.setItem('favouriteAuthors', JSON.stringify(this.favAuthors))
       }
       else{

        this.favAuthors.push(aAuthor)
        this.favAuythorId.push(aAuthor._id)
        localStorage.setItem('favouriteAuthorsId',JSON.stringify(this.favAuythorId) )
        localStorage.setItem('favouriteAuthors', JSON.stringify(this.favAuthors))
       }
  }


  getPageDetails(e: any)
  {
    this.getPageWiseAuthor(e.pageIndex, e.pageSize)
  }

  getPageWiseAuthor(pageIndex=0, pageSize=10)
  {
    this.api.getdata('authors?limit='+pageSize+'&skip='+pageIndex*pageSize).subscribe((res: any)=>{
      this.authors = res.results
      console.log(this.authors)
     })
  }

}
