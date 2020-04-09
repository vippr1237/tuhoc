let tabs={
	tab1: "Toi la Tran Minh Duc",
	tab2: "Toi la bac si",
	tab3: "Toi dep trai khoi noi",
	tab4: "Be ngoai toi giong nhu 1 chang trai mong manh de vo",
	tab5: "Nhung ben trong toi con mong manh de vo hon :((",
}
const content=document.querySelector(".content");
const list=document.querySelector(".container ul")
// push li tag to html
let i=1;
for (let k in tabs){
	if (i==1)
		list.innerHTML+=`<li class="active">Tab ${i} </li>`
	else
		list.innerHTML+=`<li>Tab ${i} </li>`
	i++;
}
// select li tag
const listContent=document.querySelectorAll(".container ul li");
//push event click on each tag
for (let i=0;i<listContent.length;i++){
	listContent[i].setAttribute("onclick",`showTab(${i})`);
}
// show first tab
showTab(0);

function showTab(n){
	//change the content each tag
	content.innerText=tabs[Object.keys(tabs)[n]];
	//change background color on active tag
	for (let i=0;i<listContent.length;i++){
		listContent[i].className=listContent[i].className.replace=("active","");
	}
	listContent[n].className+="active";
}

