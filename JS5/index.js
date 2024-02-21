function output(){
    var a = new Date(1663830395302);
    console.log("milliseconds to Date -",a)

    var date = new Date(Date.UTC(2003, 11, 27));
    b = date.toUTCString();
    console.log("UTC Date -",b)

    var today = new Date();
    var c = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    console.log("hours:minutes:seconds -",c)

    var g = today.toISOString();
    console.log("zulu format -",g)

    var d = new Date("November 11, 2021");
    var nov = d.getTime();
    var e = new Date("July 27, 2022");
    var jul = e.getTime();
    var milli = jul - nov;
    var sec = milli / 1000;
    var minutes = sec / 60;
    var hours = minutes / 60;
    console.log("Between dates hours -",hours)
    var noDays = hours /24 ;
    console.log("No of days -",noDays)
    
    var valid = new Date('2022-09-31');
    valid instanceof Date && !isNaN(valid);
    console.log("validation", valid);

    var f = new Date();
    var Zone = f.getTimezoneOffset();
    console.log("Timezone :",Zone)

    var currentday = new Date();
    var format = currentday.toLocaleString();
    console.log("today",format)

    var days = ['May 23 2000', 'Jan 22 2021', 'Dec 01 1978'];
    days.sort(function(a,b){
        var first = new Date(a)
        var second = new Date(b)
        return first - second;
    });
    days.sort((a,b) =>(new Date(b) - new date(a)))
    console.log("arrange",days)

    var dates = ['May 23 2000', 'Jan 22 2021', 'Dec 01 1978'];
    dates.sort(function(a,b){
        var first = new Date(a)
        var second = new Date(b)
        return second - first;
    });
    console.log("decending",dates)
    document.getElementById("date").innerHTML
}