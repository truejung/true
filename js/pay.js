function check2() {
    var form = document.order_form;
    if (!form.oname.value) {
        swal({
            title: "성함을 입력해 주십시오.",
            icon: "warning"
        })
        form.oname.focus();
        return false;
    }
    else if (!form.otell.value) {
        swal({
            title: "휴대폰 번호를 입력해 주십시오.",
            icon: "warning"
        })
        form.otell.focus();
        return false;
    }
    else if (!form.omail.value) {
        swal({
            title: "이메일을 입력해 주십시오.",
            icon: "warning"
        })
        form.omail.focus();
        return false;
    }
    else if (!form.ooname.value) {
        swal({
            title: "받으실분을 입력해 주십시오.",
            icon: "warning"
        })
        form.ooname.focus();
        return false;
    }
    else if (!form.ootell.value) {
        swal({
            title: "휴대폰 번호를 입력해 주십시오.",
            icon: "warning"
        })
        form.ootell.focus();
        return false;
    }    
    else if (!form.roadAddrPart1.value) {
        swal({
            title: "우편번호를 입력해 주십시오.",
            icon: "warning"
        })
        form.roadAddrPart1.focus();
        return false;
    }
    else if (!form.addrDetail.value) {
        swal({
            title: "상세주소를 입력해 주십시오.",
            icon: "warning"
        })
        form.addrDetail.focus();
        return false;
    }
    else if (!form.roadAddrPart2.value) {
        swal({
            title: "도로명/지번주소를 입력해 주십시오.",
            icon: "warning"
        })
        form.roadAddrPart2.focus();
        return false;
    }
    else if (!form.payCheck2.checked) {
        swal({
            title: "주문 상품정보에 동의해 주십시오",
            icon: "warning"
        })
        form.payCheck2.focus();
        return false;
    }
    else if (!form.payCheck3.checked) {
        swal({
            title: "결제대행 서비스 이용을 위해 개인정보 제 3자 위탁동의를 체크해 주십시오",
            icon: "warning"
        })
        form.payCheck3.focus();
        return false;
    }
    return true;
};
/*동의 체크박스 js*/ 
window.onload = function(){
    var checkWrap = document.getElementById('checkWrap'),
        check = checkWrap.getElementsByTagName('input');
    checkWrap.addEventListener('click', function(e){
        var target = e.target,
            checkNum = 0;
        if(target === check[0]){
            if(target.checked){
                for(var i = 1;i < check.length;i++){
                    check[i].checked = true;
                };
            }else{
                for(var i = 1;i < check.length;i++){
                    check[i].checked = false;
                };
            };
        }else{
            for(var i = 1;i < check.length;i++){
                if(check[i].checked){
                    checkNum++;
                };
            };
            if(checkNum >= check.length - 1){
                check[0].checked = true;
            }else{
                check[0].checked = false;
            };
        };
    });
};