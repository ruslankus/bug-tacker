$(document).ready(function(e) {
 
    $('#translation').on('change','#lng_sel',function(){
         if($(this).val() == ''){
            return false;
         }   
		 select(this);
	});
	
    //$('a.add-label').click(function(e){});
    
    
     $('#translation').on('click','a.add-label',function(){
         var prefix = $(this).data('prefix');
         loadModal(prefix);
        
     });
     
      $('#translation').on('click','button.submit',function(){
        var value = $('#label-input').val();
        if(value == ''){
            $('#label-input').next().css('display','block');
        }
        
      });
	
});


function select(obj){
    
    lng = $(obj).val();
    prefix = $(obj).data('prefix');
    search_val = $('#search_label').val();  
    
    $(".table-holder").load('/'+ prefix +'/languages/list',{lng : lng, search_val : search_val});
}//select


function loadModal(prefix){
    $('.modal-dialog').load('/'+ prefix +'/languages/addlabel');
    $('.modal').modal('show');

}