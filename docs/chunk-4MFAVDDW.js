import{b as e,o as r,r as n,wa as l}from"./chunk-IO2BSXBM.js";var c={baseApiUrl:"http://localhost:3000/api",mockApiUrl:"assets/mock-data/blogs-mock.json"};var g=(()=>{let i=class i{constructor(t){this.http=t,this.$blogsSubject=new e([]),this.blogs=[],this.initializeList()}initializeList(){console.log("ete");let t=c.mockApiUrl;this.http.get(t).subscribe({next:o=>{this.blogs=o.data,this.$blogsSubject.next(this.blogs)}})}getBlog(t){return this.blogs.find(o=>o.id==t)||this.blogs[0]}postBlog(t){this.blogs.unshift(t)}};i.\u0275fac=function(o){return new(o||i)(n(l))},i.\u0275prov=r({token:i,factory:i.\u0275fac,providedIn:"root"});let s=i;return s})();export{g as a};
