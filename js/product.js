
const SUPABASE_URL = ""; // YOUR_PROJECT_URL;
const SUPABASE_KEY = "" //"YOUR_PUBLISHABLE_KEY";

const supaclient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

$(document).ready(function () {   
    
   $('#btnSave').click(async function () {
       const name = $('#productName').val();
       const product = { ProducName : name } 

       const {data: reesponseData , error: errorMsg} = await supaclient
                                                                .from('tblProduct')
                                                                .insert([product])
                                                                .select();       
       
        const {data: productList , error: errorList} = await supaclient
        .from('tblProduct')
        .select();
       
       for (let i = 0; i < productList.length; i++) {
        $('#productTable').append(`<tr><td>${productList[i].id}</td><td>${productList[i].ProducName}</td></tr>`);
       }
    });
});