

서브라임텍스트
String str = command + alt(option) + f ;


안녕하세요. 소개팅(♥)하실래요! 

안녕하세요. 소개팅하실래요!
좋아요!! 졸라 이쁜 언니로 해주세요!. 신민아 좋아요. 
아이유 같은 아이나. 태연 같은 아이
한효주도 좋고요. ㅎㅎㅎㅎ
감사합니다. 

알겠어요! 곧 소개 해드릴께요~!!^*^

<script  src="http://code.jquery.com/jquery-latest.min.js"></script>

<script>
$(document).ready(function() {
     jQuery.ajax({
           type:"GET",
           url:"/test",
           dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
           success : function(data) {
                 // 통신이 성공적으로 이루어졌을 때 이 함수를 타게 된다.
                 // TODO
           },
           complete : function(data) {
                 // 통신이 실패했어도 완료가 되었을 때 이 함수를 타게 된다.
                 // TODO
           },
           error : function(xhr, status, error) {
                 alert("에러발생");
           }
     });
});
</script>