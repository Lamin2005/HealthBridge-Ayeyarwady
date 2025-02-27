document.addEventListener('DOMContentLoaded', function () {
    
// Get the result from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const result = urlParams.get('result');

// Display the result in the result-message div
const resultMessageDiv = document.getElementById('resultMessage');
if (result) {
    resultMessageDiv.textContent = result;
   
    
    if(result == "ဆီးချိုရောဂါဖြစ်နိုင်ချေရှိနိုင်သည်။ ဆရာဝန်နဲ့ တိုင်ပင်ပါ။"){
        document.body.classList.add("at-risk");
    }

    // Check if the body has the 'at-risk' class
    if (document.body.classList.contains('at-risk')) {
        resultMessageDiv.classList.add('high-risk');
        document.getElementById('adviceContainer').innerHTML = `
            <p>သင်ဆီးချိုရောဂါဖြစ်နိုင်ချေရှိပုံရသည်။ မှန်ကန်သောရောဂါရှာဖွေမှုအတွက် ကျန်းမာရေးစောင့်ရှောက်မှုပညာရှင်နှင့် တိုင်ပင်ဆွေးနွေးရန်နှင့် ဖြစ်နိုင်ချေရှိသော လူနေမှုပုံစံပြောင်းလဲမှုများကို ဆွေးနွေးရန် အရေးကြီးပါသည်။</p>
            <ul>
                <li>ဟင်းသီးဟင်းရွက်များ၊ သစ်သီးများနှင့် အစေ့အဆန်များ ကြွယ်ဝသော မျှတသောအစားအစာကို ဆင်ခြင်ပါ။</li>
                <li>လမ်းလျှောက်ခြင်း၊ ရေကူးခြင်း သို့မဟုတ် စက်ဘီးစီးခြင်းကဲ့သို့သော ပုံမှန်ကိုယ်လက်လှုပ်ရှားမှုများတွင် ပါဝင်ပါ။</li>
                <li>သင့်သွေးတွင်းသကြားဓာတ်ပမာဏကို ပုံမှန်စစ်ဆေးပါ။</li>
            </ul>
        `;
    } else {
        resultMessageDiv.classList.add('low-risk');
        document.getElementById('adviceContainer').innerHTML = `
            <p>သင့်ဆီးချိုရောဂါဖြစ်နိုင်ချေနည်းသော်လည်း ကျန်းမာသောလူနေမှုပုံစံကို ထိန်းသိမ်းထားရန် အရေးကြီးပါသည်။</p>
            <ul>
                <li>မျှတတဲ့ အစားအသောက်ကို ဆက်စားပါ။</li>
                <li>တက်ကြွပြီး တစ်နေ့ကို အနည်းဆုံး မိနစ် 30 ခန့် လေ့ကျင့်ခန်းလုပ်ပါ။</li>
                <li>ပုံမှန်စစ်ဆေးမှုများသည် သင့်ကျန်းမာရေးအခြေအနေကို ခြေရာခံရန် ကူညီပေးနိုင်သည်။</li>
            </ul>
        `;
    }
}

console.log(result);
console.log(document.body.classList);

});

