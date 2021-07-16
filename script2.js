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

    function yomikomi(yomikomi_v){$("<img>").attr("src",yomikomi_v);}

    $('.baji_pictures').on('click','li>a', function(event){
        event.preventDefault();
        var $this=$(this);

        $this.parent().siblings().removeClass('selected').end().addClass('selected');

        var imagePath=$this.data('img');
        $('.baji_menpai_img .mainimage img').attr('src',imagePath);
    })

    .children("li").each(function(){var images_yomikomi=$(this).children("a").data("img");
        yomikomi(images_yomikomi);});

});
 
$(function(){function yomikomi(yomikomi_v){$("<img>").attr("src",yomikomi_v);}
    $('.fanzi_pictures').on('click','li>a', function(event){
        event.preventDefault();
        var $this=$(this);
        $this.parent().siblings().removeClass('selected').end().addClass('selected');
        var imagePath=$this.data('img');
        $('.fanzi_menpai_img .mainimage img').attr('src',imagePath);
    })
    .children("li").each(function(){var images_yomikomi=$(this).children("a").data("img");
        yomikomi(images_yomikomi);});
}); 

$(function(){function yomikomi(yomikomi_v){$("<img>").attr("src",yomikomi_v);}
    $('.tanlang_pictures').on('click','li>a', function(event){
        event.preventDefault();
        var $this=$(this);
        $this.parent().siblings().removeClass('selected').end().addClass('selected');
        var imagePath=$this.data('img');
        $('.tanlang_menpai_img .mainimage img').attr('src',imagePath);
    })
    .children("li").each(function(){var images_yomikomi=$(this).children("a").data("img");
        yomikomi(images_yomikomi);});
});

$(function(){function yomikomi(yomikomi_v){$("<img>").attr("src",yomikomi_v);}
    $('.jian_pictures').on('click','li>a', function(event){
        event.preventDefault();
        var $this=$(this);
        $this.parent().siblings().removeClass('selected').end().addClass('selected');
        var imagePath=$this.data('img');
        $('.jian_menpai_img .mainimage img').attr('src',imagePath);
    })
    .children("li").each(function(){var images_yomikomi=$(this).children("a").data("img");
        yomikomi(images_yomikomi);});
}); 

$(function(){
    function yomikomi(yomikomi_v){$("<img>").attr("src",yomikomi_v);}
    $('.dao_pictures').on('click','li>a', function(event){
        event.preventDefault();
        var $this=$(this);
        $this.parent().siblings().removeClass('selected').end().addClass('selected');
        var imagePath=$this.data('img');
        $('.dao_menpai_img .mainimage img').attr('src',imagePath);
    })
    .children("li").each(function(){var images_yomikomi=$(this).children("a").data("img");
        yomikomi(images_yomikomi);});
}); 


