function getfile(file,callback){
  var xhr= new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function() {
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }

  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  career(data.career);
  edu(data.Education);
  skills(data.skills);
})
var main=document.querySelector(".main");
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function profile(pro) {
  var image=document.createElement('img');
  image.src=pro.img;
  left.appendChild(image);
  main.appendChild(left);
    var head=document.createElement('h2');
  head.textContent=pro.name;
  left.appendChild(head);
  var hr=document.createElement('hr');
  left.append(hr);
  var head1=document.createElement('h2');
head1.textContent=pro.email;
left.appendChild(head1);
var hr=document.createElement('hr');
left.append(hr);
}
function career(c){

    var head2=document.createElement('h2');
    head2.textContent="Career";
    right.append(head2);
      main.appendChild(right);
  var head2=document.createElement('h5');
  head2.textContent=c.info;
  right.appendChild(head2);
}
function edu(e){
  var head3=document.createElement('h1');
   head3.textContent="Education Details";
   right.append(head3);
   main.appendChild(right);
   var hr=document.createElement('hr');
   right.append(hr);
   var table=document.createElement('table');
   let row='';
  row+= "<tr>"+"<th>"+"sno"+"</th>"+"<th>"+"degree"+"</th>"+"<th>"+"institute"+"</th>"+"<th>"+"percentage"+"</th>"+"</tr>";
   for(i in e){
   row += "<tr>"+"<td>"+e[i].sno+"</td>"+"<td>"+e[i].degree+"</td>"+"<td>"+e[i].institue+"</td>"+"<td>"+e[i].Percentage+"</td>"+"</tr>";
    }
   table.innerHTML=row;
   right.appendChild(table);
   main.appendChild(right);
   var hr=document.createElement('hr');
   right.append(hr);
}
function skills(l){
  var head6=document.createElement('h2');
  head6.textContent="skills";
  right.append(head6);
    main.appendChild(right);
    var hr=document.createElement('hr');
    right.append(hr);
    var ul=document.createElement(ul);
    right.append(ul);
    for(i in l){
       var li=document.createElement("li");
       li.textContent=l[i].info;
       ul.append(li);
    }
}
