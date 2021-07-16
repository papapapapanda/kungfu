//ヘッダーのメニュー     
$(function(){
    $('.dropdown-menu').children('a').on('click', function(event){
        event.preventDefault();  event.stopPropagation();
		var $this = $(this);
        
       
    if($this.hasClass('open')) {
                $this.removeClass('open').next().hide(400);
           
                                $('html').off('click', closeItems);
            
            } 
        else { $this.addClass('open').next().show(400);
       
                $('html').on('click', closeItems);}
        function closeItems() {$this.removeClass('open').next().hide(200);}  
    }); 


});
/*套路のページの画像切り替え */
$(function(){
    $('.baji_pictures').on('click','li>a', function(event){
        event.preventDefault();
        var $this=$(this);

        $this.parent().siblings().removeClass('selected').end().addClass('selected');

        var imagePath=$this.data('img');
        $('.baji_gallery .mainimage img').attr('src',imagePath);
    })
});
 
$(function(){
    $('.fanzi_pictures').on('click','li>a', function(event){
        event.preventDefault();
        var $this=$(this);

        $this.parent().siblings().removeClass('selected').end().addClass('selected');

        var imagePath=$this.data('img');
        $('.fanzi_gallery .mainimage img').attr('src',imagePath);
    })
}); 

$(function(){
    $('.tanlang_pictures').on('click','li>a', function(event){
        event.preventDefault();
        var $this=$(this);

        $this.parent().siblings().removeClass('selected').end().addClass('selected');

        var imagePath=$this.data('img');
        $('.tanlang_gallery .mainimage img').attr('src',imagePath);
    })


});

$(function(){
    $('.jian_pictures').on('click','li>a', function(event){
        event.preventDefault();
        var $this=$(this);

        $this.parent().siblings().removeClass('selected').end().addClass('selected');

        var imagePath=$this.data('img');
        $('.jian_gallery .mainimage img').attr('src',imagePath);
    })


}); 

$(function(){
    $('.dao_pictures').on('click','li>a', function(event){
        event.preventDefault();
        var $this=$(this);

        $this.parent().siblings().removeClass('selected').end().addClass('selected');

        var imagePath=$this.data('img');
        $('.dao_gallery .mainimage img').attr('src',imagePath);
    })


}); 


/*ギャラリー　ひな形　
$(function(){
    $('._pictures').on('click','li>a', function(event){
        event.preventDefault();
        var $this=$(this);

        $this.parent().siblings().removeClass('selected').end().addClass('selected');

        var imagePath=$this.data('img');
        $('._gallery .mainimage img').attr('src',imagePath);
    })


}); 
*/