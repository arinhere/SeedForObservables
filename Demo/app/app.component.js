/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', "rxjs/Rx", 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Rx_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    var startdates = [];
                    var startdate = new Date();
                    for (var day = -2; day <= 2; day++) {
                        var date = new Date(startdate.getFullYear(), startdate.getMonth(), startdate.getDay() + day);
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
                    var userList = [
                        { user: 'Arin G', userEmail: 'arinhere@gmail.com' }
                    ];
                    var users = Rx_1.Observable.fromArray(userList)
                        .map(function (myuser) {
                        return myuser.user + ", " + myuser.userEmail;
                    }).delay(1000);
                    var tweetHandlers = [
                        { tweetid: '@arinhere' }
                    ];
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
                    var returndata = Rx_1.Observable.of([1, 2, 3, 4, 5])
                        .take(3)
                        .subscribe(function (x) { return console.log(x); });
                    //    var remoteDataStream=Observable.throw(new Error("Something went wrong"));
                    //    remoteDataStream.catch(
                    //        err => {
                    //             var localdata=Observable.of([1,2,3]);
                    //             return localdata;
                    //        }
                    //    ).subscribe(x => console.log(x));
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <form [ngFormModel]=\"form\">\n        <input id=\"searchBox\" type=\"text\" class=\"form-control\" ngControl=\"searchBox\" />\n        </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map