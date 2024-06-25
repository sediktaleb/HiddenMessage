
document.getElementById("Third").style.display="none";
document.getElementById("Secend").style.display="none";
document.getElementById("Forth").style.display="none";

function First(){

    document.getElementById("First").style.display="none";
    document.getElementById("Secend").style.display="inline";

}
function Forth(){
    document.getElementById("Forth").style.display="inline";
    document.getElementById("Third").style.display="none";
    document.getElementById("Secend").style.display="none";
    document.getElementById("First").style.display="none";
}

function Calculat(){
    var Mazot = document.getElementById("Mazot").value;
    var Ess = document.getElementById("Ess").value;
    var Date = document.getElementById("Date").value;
    var BoDa5la = document.getElementById("BoDa5la").value;
    var Bo5alsa = document.getElementById("Bo5alsa").value;
    var Person = document.getElementById("person").value;
    var Time = document.getElementById("time").value
    var BDT = document.getElementById("BDT").value
    var Tunis = document.getElementById("Tunis").value
    var DayTunis = document.getElementById("DayTunis").value

        if(Mazot && Ess && Date && BoDa5la && Bo5alsa && Person && Time && Tunis && DayTunis){
            document.getElementById("Secend").style.display="none";
            document.getElementById("Third").style.display="inline";
            information(Mazot,Ess,Date,Bo5alsa,BoDa5la,Person,Time,Tunis,DayTunis,BDT)

        }else{
            alert("ادخل كل المعلومات ");
        }

}
const screenshotTarget = document.body;


function information(Mazot,Ess,Date,BoDa5la,Bo5alsa,Person,Time,Tunis,DayTunis,BDT){
    var MazotDinar = Mazot * 29.01;
    var EssDinar = Ess * 45.62;
    var TunisDinar = Tunis * DayTunis
    MazotDinar = Math.floor(MazotDinar);
    EssDinar = Math.floor(EssDinar);
    TunisDinar = Math.floor(TunisDinar);
    document.getElementById("TimeValue").innerText = Time;
    document.getElementById("PersonValue").innerText = Person;
    document.getElementById("MazotValue").innerText = Mazot + " (L) * 29.01  = " + MazotDinar + " (Da)";
    document.getElementById("EssValue").innerText = Ess + " (L) * 45.62  = " + EssDinar + " (Da)";
    document.getElementById("BoDa5laValue").innerText = BoDa5la + " (Da)";
    document.getElementById("Bo5alsaValue").innerText = Bo5alsa + " (Da)";
    document.getElementById("DateValue").innerText = Date;
    document.getElementById("TunisValue").innerText = Tunis + " (Tn) " + " * " + DayTunis + " = " + TunisDinar + " (Da)";
    document.getElementById("DayTunisValue").innerText = DayTunis;

    var AllDinar = MazotDinar + EssDinar + +BoDa5la - +Bo5alsa + TunisDinar
 
    document.getElementById("TotalDinar").innerText= AllDinar + " (Da)"

   // sendEmail(Mazot,MazotDinar,Ess,EssDinar,Tunis,DayTunis,TunisDinar,Time,Person,Bo5alsa,BoDa5la,AllDinar,BDT)
}

function send(){
    var Mazot = document.getElementById("Mazot").value;
    var Ess = document.getElementById("Ess").value;
    var Date = document.getElementById("Date").value;
    var BoDa5la = document.getElementById("BoDa5la").value;
    var Bo5alsa = document.getElementById("Bo5alsa").value;
    var Person = document.getElementById("person").value;
    var Time = document.getElementById("time").value
    var BDT = document.getElementById("BDT").value
    var Tunis = document.getElementById("Tunis").value
    var DayTunis = document.getElementById("DayTunis").value
    MazotDinar = Mazot * 29.01;
    EssDinar = Ess * 45.62;
    TunisDinar = Tunis * DayTunis
    AllDinar = MazotDinar + EssDinar + +BoDa5la - +Bo5alsa + TunisDinar
    AllDinar = Math.floor(AllDinar)
    MazotDinar = Math.floor(MazotDinar);
    EssDinar = Math.floor(EssDinar);
    TunisDinar = Math.floor(TunisDinar);
    sendEmail(Date,Mazot,MazotDinar,Ess,EssDinar,Tunis,DayTunis,TunisDinar,Time,Person,Bo5alsa,BoDa5la,AllDinar,BDT)
}
function Report(){
    var Email = "sedikminecraft@gmail.com";
    var Message = document.getElementById("Report").value;
    if(Message){
        var parmas = {
            Email : Email,
            message : Message,
    
        };
        document.getElementById("ReportButton").style.display="none";
        const serviceID = "service_fsioy4u";
        const templateID = "template_ppseq1b";
        
        emailjs.send(serviceID,templateID,parmas).then(function(red){
            alert("تم الارسال");
            document.getElementById("ReportButton").style.display="inline";
        });
    }else{
        alert("اكتب الشكوى")
    }

}


function sendEmail(Date,Mazot,MazotDinar,Ess,EssDinar,Tunis,DayTunis,TunisDinar,Time,Person,Bo5alsa,BoDa5la,AllDinar,BDT){

    var parmas = {
        Day : Date,
        Person : Person,
        Time : Time,
        Mazot : Mazot,
        MazotDinar : MazotDinar,
        EssDinar : EssDinar,
        Ess : Ess,
        Tunis : Tunis,
        DayTunis : DayTunis,
        TunisDinar : TunisDinar,
        BoDa5la : BoDa5la,
        BDT : BDT,
        Bo5alsa : Bo5alsa,
        AllTotal : AllDinar,


    };
    const serviceID = "service_fsioy4u";
    const templateID = "template_5qtmkx4";
    
    emailjs.send(serviceID,templateID,parmas).then(function(red){
        alert("تم الارسال");
    }
    
    )};