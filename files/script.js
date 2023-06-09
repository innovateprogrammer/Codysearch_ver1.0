database=`<br>`+"date - Display the date"+`<br>`+
"time - Display current time"+`<br>`+
"day - Display today's Day"+`<br>`+
"search - To search anything on Web"+`<br>`+
"ogmeet - Open Google meet"+`<br>`+
"ogmail - Open Gmail"+`<br>`+
"ogkeep - Open Keep Notes"+`<br>`+

"ogacc - Access Google Account"+`<br>`+
"cse - Used to Change Search Engine for a search"+`<br>`+
"cse bing - used to use Mozilla for the search"+`<br>`+
"cse chrome - used to use Chrome for the search"+`<br>`+
"cse default - used to set the current search engine to default"+`<br>`+
"cml info - used to get a short info about the interface"+`<br>`+
"cml exit - used to close the browser"+`<br>`+
"cls - clear previous commands"+`<br>`+
"cml cloud - see which files are available for download from our cloud space"+`<br>`+
"color - change the color of text"+`<br>`+
"cml version - see current version of the interface"+`<br>`+
"^ - get last command"+`<br>`+
"more - visit our official website of CodySearch"+`<br>`+
"czd - Visit Official CZD Website"+`<br>`+
"manual- download the manuel"+`<br>`+
"cml help - To get the use of all commands"
;

window.onload=function(){
    notify=document.getElementById('notify');
    document.getElementById("inp").focus();
    
}
nott_state="on";



document.getElementById("inp").addEventListener('change', (event) => {
    if(nott_state=="on")
    {
        notify.play();
    }
    
  
});

function read(text)
{
var speech = new SpeechSynthesisUtterance();
speech.text =text; 
window.speechSynthesis.speak(speech);
}
var spflag=0;
const d = new Date();
var hist=hist=document.getElementById('history').textContent;
var content='';
var prev='';
var flag=0;
var hflag=0;
days={1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",7:"Sunday"};
cmds={"info":"CodySearch is a Quick Tool Developed for Command Line lovers to use commands to perform different operations.Its developed by CoderZdevs Solutions and the same has all copyrights of the tool!!.It provides relaxation and also encourages use of command line for different tasks to be performed!!",
"version":"1.0.0","cloud":"https://drive.google.com/drive/folders/14j6CBTFWxAT3AXj1iCwGgu-XgMHt2ww0?usp=sharing"

};

se={'bing':'https://www.bing.com/search?q=','chrome':'https://www.google.com/search?q='}
var s="https://www.google.com/search?q=";
function checkdefault(a){
    if(se[a]==s){
        return true;
    }
    else{
        return false;
    }
}
function output(q)
{
    var ret='';
    
    arr=q.split(" ");

    
    if(q.includes('cml'))
    {
        if(arr[1]=="exit")
        {
            ret=`<br>`+"Thank you for using CodySearch";
            document.querySelector('.back').classList.add("active");
            document.getElementById("inp").disabled=true;
        }
        else if(arr[1]=='help')
        {
            ret=database;
            hflag=1;
    
        }
        else if(arr[1]=="info")
        {
            ret=`<br>`+cmds[arr[1]];

        }
        else if(arr[1]=="version")
        {
            ret=`<br>`+cmds[arr[1]];

        }
        else if(arr[1]=="cloud")
        {
            ret=`<br>`+"Accessing Cloud Storage"
            window.open(cmds[arr[1]]);
        }
        else{
            window.alert("'"+q+"'"+" is not recognised as a internal or external command");
        flag=1;
        ret='';

        }
    }
    else if(q.includes("manual"))
    {
        window.open("https://drive.google.com/file/d/1ZRu_OJ7FnAZFgrKyMcWjpWmZrjG_7Wn_/view?usp=sharing");
        ret=`<br>`+'Accessing Manual'
    }
    else if(q.includes("nott"))
    {
        if(nott_state==arr[1])
        {
            ret=`<br>`+"Notification is already "+arr[1];
        }
        else{
        nott_state=arr[1];
        ret=`<br>`+"Notification turned "+arr[1];
    }
    }
    else if(q.includes("date")){
        
        let date = d.getDate();
        let month = d.getMonth();
        let year = d.getFullYear();
        ret= `<br>`+"Today its "+(month+1).toString()+"-"+date.toString()+"-"+year.toString();
    }
    else if(q.includes("day")){
        let day = d.getDay();
        ret= `<br>`+"Today its "+days[day];
    }
    else if(q.includes("time")){
        let hours = d.getHours();
        let minuites=d.getMinutes();
        let seconds=d.getSeconds();
        ret= `<br>`+"Time is "+hours.toString()+":"+minuites.toString()+":"+seconds.toString();
    }
    else if(q.includes("more"))
    {
        window.open("https://www.codysearch.ml/");
        ret=`<br>`+"Opening CodySearch Website";
    }
    else if(q.includes("czd"))
    {
        window.open("https://www.coderzdevs.ml/");
        ret=`<br>`+"Opening CoderZDevs Website";
    }
    else if(q.includes("color"))
    {
        clr=arr[1];
        if(clr=="default")
        {
            document.getElementById('history').style.color="yellowgreen";
        }
        else{
            document.getElementById('history').style.color=arr[1];
        }
        ret=`<br>`+'Color changed to '+arr[1];
        
    }
    else if(q.includes('search'))
    {
        
        fq=q.substring(6,);
        var final=s+fq;
        window.open(final);
        ret= `<br>`+'Searching for '+fq;

    }
    else if(q.includes("og"))
    {
        if(arr[0]=="ogmeet"){
            window.open("https://meet.google.com/");
            ret= `<br>`+'Opening Google Meet';
        }
        else if(arr[0]=="ogmail")
        {
            window.open("https://www.gmail.com/");
            ret= `<br>`+'Opening Gmail';
        }
        else if(arr[0]=="ogkeep")
        {
            window.open("https://www.keep.com/");
            ret= `<br>`+'Opening Keep Notes';
        }
        else if(arr[0]=="ogacc")
        {
            window.open("https://myaccount.google.com/");
            ret=`<br>`+'Opening Google Account';
        }

        
        

    }
    else if(q.includes("^"))
    {
        document.getElementById('inp').value=prev;
        return '';
    }
    else if(q.includes("spk-o"))
    {
        read(content.slice(4,));
        ret= '';
    }
    else if(q.includes("spk-a"))
    {
        spflag=1;
        read("speech out activated");
        ret= '';
    }
    else if(q.includes("spk-d"))
    {
        spflag=0;
        read("speech out deactivated");
        ret='';
    }
    else if(q.includes("cse"))
    {
        if(arr[1]=="bing")
        {
            if(checkdefault('bing')==true){
                ret= `<br>`+"Its already the Search Engine";
            }
            else{
                s=se['bing'];
                ret= `<br>`+'Your search Engine is changed to Bing';
            }
            
        }
        else if(arr[1]=="chrome")
        {
            if(checkdefault('chrome')==true){
                ret= `<br>`+"Its already the Search Engine";
                
            }
            else{
                s=se['chrome'];
                ret= `<br>`+'Your search Engine is changed to Chrome';
            }

        }
        else if(arr[1]=="default")
        {
            var defaulty="";
            if(checkdefault("chrome")==true){
                defaulty="Chrome";

            }
            else{
                defaulty="Bling";
            }
            ret= `<br>`+'Your Default search engine is '+defaulty;
        }
    }
    else if(arr[0]=='cls')
    {
        hist='';
        flag=1;
        ret= `<br>`+'Screen Cleared';
    }
    else{
        window.alert("'"+q+"'"+" is not recognised as a internal or external command");
        flag=1;
        ret='';
    }
    prev=q;
    document.getElementById('inp').value='';
    return ret;


}
window. addEventListener('keyup', function(event) { if (event. keyCode === 13) { 
    

   

    var n = document.getElementById('inp').value;
    
   content=output(n);
    if(flag==0){
        hist+=`<br>`+"$"+n+content;

    }
    if(spflag==1 && hflag==0){
        read(content.slice(4,));
    }
    flag=0;
    hflag=0;
    document.getElementById('history').innerHTML=hist;
    
    
    


} });

