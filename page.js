let form = document.getElementById('form')
let chosenPlan
let name
let email
let telNo
let plan1 = document.getElementById('plan1')
let plan2 = document.getElementById('plan2')
let plan3 = document.getElementById('plan3')
let btn = document.getElementById('btn')
let allUser = []
function submit() {
    name = document.getElementById('name').value
    email = document.getElementById('email').value
    telNo = document.getElementById('tel').value
    txt = txt.value
    let user = {
        name: name,
        email: email,
        telNo: telNo,
        txt: txt,
    }
    if (name == '' || email == '' || telNo == '') {
        alert('All fields required')
        return
    }
    if (plan1.checked || plan2.checked || plan3.checked) {
        if (!check.checked) {
            alert('Accept Terms and Conditions')
            return
        }
        if (plan1.checked) {
            chosenPlan = 'Free plan'
        }else if(plan2.checked) {
            chosenPlan = '10k Plan'
        }else {
            chosenPlan = '50k plan'
        }
        console.log(chosenPlan, name, email, telNo, txt);
    }else {
        alert('Pick a plan')
        return
    }
    allUser.push(user)
    console.log(allUser);
    fetch('https://ukabir.github.io/DATABASE/db.json', {
        "method": 'POST',
        "content-type": 'application/json',
        "body": JSON.stringify(allUser)
    }).then((res) => res.json()).then(() => {
        alert('Data sent successfully')
        btn.disabled = false
        display()
    }).catch((err) => {
        alert(err)
        btn.disabled = false
    })
}
