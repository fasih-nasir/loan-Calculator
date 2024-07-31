
    document.getElementById("d1").style.opacity="0"
    document.getElementById("apply").addEventListener("click",()=>{
        var amount=document.getElementById("amount").value
        var rate=document.getElementById("rate").value
        var sel1=document.getElementById("sel1").value
        // document.getElementById("sel1").value;
        document.getElementById("type").value=sel1
        var sel2=document.getElementById("sel2").value
        if (amount && rate && sel1 && sel2) {
                document.getElementById("d1").style.opacity="1"
        }
if(sel2 === "6"){
    var ans=amount /6;
    var ans1=amount * rate/100;
    // var res=ans1
    document.getElementById("monthpay").value=ans.toFixed(1) 
        document.getElementById("pa").value=" 6 Months"
    document.getElementById("intpay").value=ans1.toFixed(1)

}
if(sel2 === "1"){
    var ans=amount /12;
    var ans1=amount * rate/100;
    document.getElementById("monthpay").value=ans.toFixed(1) 
            document.getElementById("pa").value=" 1 Years"
    document.getElementById("intpay").value=ans1.toFixed(1)

}
if(sel2 === "2"){
    var ans=amount /24;
    var ans1=amount * rate/100;
    document.getElementById("monthpay").value=ans.toFixed(1)
      document.getElementById("pa").value=" 2 Years"
    document.getElementById("intpay").value=ans1.toFixed(1)

}
if(sel2 === "3"){
    var ans=amount /24;
    var ans1=amount * rate/100;
    document.getElementById("monthpay").value=ans.toFixed(1) 
      document.getElementById("pa").value=" 3 Years"
    document.getElementById("intpay").value=ans1.toFixed(1)

}

})

