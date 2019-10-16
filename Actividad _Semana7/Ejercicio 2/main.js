let evento_field = document.querySelector("#evento_field");
let dia_list = document.querySelector("#dia_field");

let late_switch = document.querySelector("#late_switch")
let submit_btn = document.querySelector("#submit_btn");

let tbody = document.querySelector("#table_body");

let evento_regex = new RegExp("")

let addEvent = (obj) =>{
    let new_row = document.createElement("tr")
    let datetime = new Date()

    new_row.classList.add("table-active")

    new_row.innerHTML  = ` 
    <td>${obj.evento}</td>
    <td>${obj.dia}</td>
    <td>${datetime.toLocaleString()}</td>
    <td>${obj.late}</td>
    `

    tbody.appendChild(new_row)

}

let parseLateBool=(value)=>{
    if(value){
        return "Si"
    }

    return "No"
}

submit_btn.addEventListener("click", ()=> {
    let evento = evento_field.value
    let dia =  dia_list.options[dia_list.selectedIndex].text
    let late = parseLateBool(late_switch.checked)

    let result_obj = {

        "evento" :evento,
        "dia" : dia,
        "late": late 


    }
if(evento_regex.test(evento)){
    addEvent(result_obj)
}else{
    alert("Formato Incorrecto")
}

})

evento_field.addEventListener("keyup", (event)=>{

if(event.keyCode ==13){
    submit_btn.click()
}

})