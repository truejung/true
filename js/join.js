function formCheck(form) {
    //유효성 검사
    if(form.name.value == "") {
        alert('이름을 입력하세요.');
        form.name.focus() ;
        return ;
    }
    if(form.id.value == "") {
        alert('아이디를 입력하세요.');
        form.id.focus() ;
        return ;
    }
    if(form.pwd.value == "") {
        alert('비밀번호를 입력하세요.');
        form.pwd.focus() ;
        return ;
    }
    if(form.pwd.value.length < 10 || form.pwd.value.length > 16) {
        alert('비밀번호는 10 ~ 16자 사이로 입력하세요.');
        form.pwd.focus() ;
        return ;
    }
    if(form.pwdCheck.value == "") {
        alert('비밀번호 확인을 입력하세요.');
        form.pwdCheck.focus() ;
        return ;
    }
    if(form.birth1.value == "") {
        alert('출생년도를 입력하세요.');
        form.birth1.focus() ;
        return ;
    }
    if(form.birth2.selectedIndex == 0) {
        alert('생년월일에 월을 선택하세요.');
        form.birth2.focus() ;
        return ;
    }
    if(form.birth3.value == "") {
        alert('생년월일에 일를 입력하세요.');
        form.birth3.focus() ;
        return ;
    }
    if(form.mailid.value == "") {
        alert('e-mail을 입력하세요.');
        form.mailid.focus() ;
        return ;
    }
    if(form.mailid.value == "") {
        alert('e-mail을 입력하세요.');
        form.mailid.focus() ;
        return ;
    }
    if(form.email.value == "" && form.mailslc.selectedIndex == 0) {
        alert('e-mail을 입력하세요.');
        form.mailslc.focus() ;
        return ;
    }
    if(form.phone.selectedIndex == 0) {
        alert('앞자리번호를 선택하세요.');
        form.phone.focus();
        return;
    }
    if(form.phone2.value == "") {
        alert('전화번호를 입력하세요.');
        form.phone2.focus() ;
        return ;
    }
    if(form.phone3.value == "") {
        alert('전화번호를 입력하세요.');
        form.phone3.focus() ;
        return ;
    }
    alert('회원가입이 완료되었습니다.') ;

    form.reset();
    }