document.addEventListener('DOMContentLoaded', function () {
    
    // Get the result from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const result = urlParams.get('result');

    // Display the result in the result-message div
    const resultMessageDiv = document.getElementById('resultMessage');
    if (result) {
        resultMessageDiv.textContent = result;

        if(result == "နှလုံးရောဂါဖြစ်နိုင်ချေရှိနိုင်သည်။ ဆရာဝန်နဲ့ တိုင်ပင်ပါ။"){
            document.body.classList.add("at-risk");
        }

        // Check if the body has the 'at-risk' class
        if (document.body.classList.contains('at-risk')) {
            resultMessageDiv.classList.add('high-risk');
            document.getElementById('adviceContainer').innerHTML = `
                <p>သင့်တွင် နှလုံးရောဂါ ဖြစ်ပွားနိုင်ခြေများရှိသည်။ ကျန်းမာရေးဆိုင်ရာပညာရှင်နှင့် အကြံပေးသည့် ကုသမှုများနှင့် လူနေမှုဘဝပြောင်းလဲမှုများ အကြောင်း စဉ်းစားပါ။</p>
                <ul>
                    <li>ဟင်းသီးဟင်းရွက်များ၊ သစ်သီးများနှင့် အစေ့အဆန်များ ပါဝင်သော အစားအသောက်ကို စားပါ။</li>
                    <li>လမ်းလျှောက်ခြင်း၊ ရေကူးခြင်း သို့မဟုတ် စက်ဘီးစီးခြင်းကဲ့သို့သော ပုံမှန်လေ့ကျင့်ခန်းများ ပြုလုပ်ပါ။</li>
                    <li>သင့်ရဲ့ သွေးဖိအား နှင့် ကိုလက်စတိုရယ် အခြေအနေကို စိစစ်ပါ။</li>
                </ul>
            `;
        } else {
            resultMessageDiv.classList.add('low-risk');
            document.getElementById('adviceContainer').innerHTML = `
                <p>သင့်တွင် နှလုံးရောဂါ ဖြစ်ပွားနိုင်ခြေ အနည်းငယ်ရှိသော်လည်း ကျန်းမာသော လူနေမှုစဉ်ကို ထိန်းသိမ်းပါ။</p>
                <ul>
                    <li>မျှတတဲ့ အစားအသောက်ကို ဆက်စားပါ။</li>
                    <li>လေ့ကျင့်ခန်းများ ပြုလုပ်ပါ။ အနည်းဆုံး ၃၀ မိနစ် တစ်နေ့လျှင် လေ့ကျင့်ပါ။</li>
                    <li>သင့်ကျန်းမာရေးကို စောင့်ရှောက်မှုများနှင့် စစ်ဆေးမှုများဖြင့် ထိန်းသိမ်းပါ။</li>
                </ul>
            `;
        }
    }

    
});
