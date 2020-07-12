var i=0;
var correctioncount=0;
generate(0);
function generate(index)
{
    document.getElementById("question").innerHTML=jsonData[index].q;
    document.getElementById("optt1").innerHTML=jsonData[index].opt1;
    document.getElementById("optt2").innerHTML=jsonData[index].opt2;
    document.getElementById("optt3").innerHTML=jsonData[index].opt3;

}
function checkAnswer()
{
    if(document.getElementById("opt1").checked  && jsonData[i].opt1 == jsonData[i].answer)
    {
        correctioncount++;
    }
    if(document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer)
    {
        correctioncount++;
    }
    if(document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer)
    {
        correctioncount++;
    }
    i++;
    if(jsonData.length-1 < i)
    {
     document.write("*********your score is********** :"+correctioncount);
    }
    generate(i);
}
