var counter =520;
var currentLink = "";
var timer = null;

/**
Start the scrapper
*/
function runScraper(){
    currentLink =  'https://targestdomain.com/some-page'+counter+'.aspx';
    
    $.ajax({
        url: currentLink,
        success: function(html){
            document.close();
            document.write(html);

        },
        complete: function(){
            
            submitData();
            counter++;
        }
    })
}

function submitData(){
   

    var tableData = {
        title: $('#lblTitle').text(),
        address: $('#lblAddress').text(),
        city: $('#lblCity').text(),
        email: $('#lblEmail').text(),
        phone: $('#lblPhone').text(),
        website: $('#lblWebsite').text(),
        more_info: $('#lblMore').text(),
        category: $('#lblCat').text(),
    };

    $.ajax({
        url: 'http://localhost/scrapper/save.php',
        type: 'post',
        data: tableData,
        success: function(data){
     
console.clear();
        },
        complete: function(){
clearTimeout(timer);
timer = setTimeout(function(){
runScraper();
},3000);
            
        },
        error: function(){
            
        }
    });
}

runScraper()