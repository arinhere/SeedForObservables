/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Control, ControlGroup, FormBuilder} from 'angular2/common'

import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-app',
    template: `
        <form [ngFormModel]="form">
        <input id="searchBox" type="text" class="form-control" ngControl="searchBox" />
        </form>
    `
})
export class AppComponent {
    constructor(){
        var startdates=[];
        var startdate=new Date();

        for(var day=-2;day <=2;day++){
            var date=new Date(
                startdate.getFullYear(),startdate.getMonth(),startdate.getDay()+ day
            );
            startdates.push(date);
        }

        // var returndata=Observable.fromArray(startdates)
        // .map(
        //     date => 
        //     {
        //         var retstring="Deal for the day: " + date;
        //         return retstring;
        //     }
        // )
        // .subscribe(x => console.log(x));

        // var returndata=Observable.interval(1000)
        // .map(d => {
        //     return Observable.of([1,2,3])
        // })
        // .subscribe(x => console.log(x));
        var userList=[
            {user: 'Arin G', userEmail: 'arinhere@gmail.com'}
        ]

       var users=Observable.fromArray(userList)
       .map(myuser => {
           return myuser.user + ", " + myuser.userEmail;
       }).delay(1000);

       var tweetHandlers=[
            {tweetid: '@arinhere'}
        ]

    //    var usersTweets=Observable.fromArray(tweetHandlers)
    //    .map(tweetuser => {
    //        return tweetuser.tweetid;
    //    }).delay(1500);

    //    var allusers=Observable.forkJoin(users,usersTweets)
    //    .map(joined => {
    //        return new Object({ user: joined[0], tweets: joined[1]});
    //    })
    //    .subscribe(
    //        x=>console.log(Observable.fromArray([1,2,3]),
    //        error => console.log(Observable.throw(new Error("error")),
    //        () => console.log("Completed"))));

    var returndata=Observable.of([1,2,3,4,5])
    .take(3)
    .subscribe(x=>console.log(x));

    //    var remoteDataStream=Observable.throw(new Error("Something went wrong"));
    //    remoteDataStream.catch(
    //        err => {
    //             var localdata=Observable.of([1,2,3]);
    //             return localdata;
    //        }
    //    ).subscribe(x => console.log(x));
    }
//     form: ControlGroup;
//    constructor(fb: FormBuilder){    
//         this.form=fb.group({
//             searchBox:[]           
//         });
 
//         var search= this.form.find("searchBox");  
                    
//         search.valueChanges
//         .map(str => (<string>str).replace('','-'))
//         .debounceTime(400)
//         .subscribe(data => console.log(data));



        // var oauth="Bearer BQCSLHKfEpjMzJxe4HCVXBzbTP3sTpyBbYwHdVWFlATaUTd4l7n4nIzEM2pLx1jELupZyd9BEvGiTTmaGJeAfNfeUZc-ZAvegS5Has4LpsssEfyeeZ4yb-X_XrKcUhA4Wuv978a08IPE-DPCVDuQuRHZ8zEBmH4";
        // var returndata=Observable.fromEvent($("#search"),"keyup")
        //                 .map(e => e.target.value)
        //                 .debounceTime(400)
        //                 .filter(text => text.length >=3)
        //                 .distinctUntilChanged()
        //                 .flatMap(searchterm => {
        //                     $.ajaxSetup({
        //                         headers : {
        //                             'Accept': 'application/json',
        //                             'Content-Type': 'application/json',
        //                             'Authorization': oauth
        //                         }
        //                     });
                            
        //                     var promise = $.getJSON("https://api.spotify.com/v1/search?query=" + searchterm + "&type=artist");
        //                     return Observable.fromPromise(promise);
        //                 });

        // var debounced=_.debounce(function(text){
        //     var url="https://api.spotify.com/v1/search?query=" + text + "&type=artist";
        //     var oauth="Bearer BQCSLHKfEpjMzJxe4HCVXBzbTP3sTpyBbYwHdVWFlATaUTd4l7n4nIzEM2pLx1jELupZyd9BEvGiTTmaGJeAfNfeUZc-ZAvegS5Has4LpsssEfyeeZ4yb-X_XrKcUhA4Wuv978a08IPE-DPCVDuQuRHZ8zEBmH4";
            
        //     $.ajaxSetup({
        //         headers : {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //             'Authorization': oauth
        //         }
        //     });
            
        //     $.getJSON(url, function(result){
        //        console.log(result);
        //     });
        // },400);
        
        // $("#search").keyup(function(e){
        //     var text=(<HTMLInputElement>e.target).value;

        //     if(text.length < 3)
        //         return;

        //     debounced(text);
        // });
}