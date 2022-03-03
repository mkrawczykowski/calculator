$( document ).ready(function() {

    let pierwszaLiczba = '';
    let drugaLiczba = '';
    let dzialanie = '';
    let wynikDzialania = '';

    function wyswietlanko(coWyswietlic){
        if (coWyswietlic != 0 && coWyswietlic != ''){
            $('.wyswietlacz').html(coWyswietlic);
        } else if (coWyswietlic == 0 && coWyswietlic == '0'){
            $('.wyswietlacz').html(0);
        }
        
    }

    $(document).on('click', '.num1, .num2, .num3, .num4, .num5, .num6, .num7, .num8, .num9, .num0', function(){
        
        let dys = $(this).html();

        if (pierwszaLiczba == '') {
            pierwszaLiczba = dys;
            wyswietlanko(dys);
            console.log('pierwszaLiczba: ' + pierwszaLiczba);
        } else {
            drugaLiczba = dys;
            wyswietlanko(dys);
            console.log('drugaLiczba: ' + dys);
        }
    });

    $(document).on('click', '.dodawanie', function(){
        dzialanie = 'dodawanie';
    });

    $(document).on('click', '.odejmowanie', function(){
        dzialanie = 'odejmowanie';
    });
    
    $(document).on('click', '.mnozenie', function(){
        dzialanie = 'mnozenie';
    });
    
    $(document).on('click', '.dzielenie', function(){
        dzialanie = 'dzielenie';
    });
    
    $(document).on('click', '.procent', function(){
        dzialanie = 'procent';
    });   

    $(document).on('click', '.rownas', function(){
        if (pierwszaLiczba != '' && drugaLiczba != ''){
            switch (dzialanie){
                case 'dodawanie':
                wynikDzialania = parseInt(pierwszaLiczba) + parseInt(drugaLiczba);
                break;

                case 'odejmowanie':
                wynikDzialania = pierwszaLiczba - drugaLiczba;
                break;

                case 'mnozenie':
                wynikDzialania = pierwszaLiczba * drugaLiczba;
                break;    
                
                case 'dzielenie':
                wynikDzialania = pierwszaLiczba / drugaLiczba;
                break; 
                
                case 'procent':
                wynikDzialania = pierwszaLiczba / drugaLiczba * 100;
                wynikDzialania += '%';
                break; 
            }

            wyswietlanko(wynikDzialania);

            pierwszaLiczba = '';
            drugaLiczba = '';
            dzialanie = '';
        }
    })

    $(document).on('click', '.zeruj', function(){
        wyswietlanko(0);
        pierwszaLiczba = '';
        drugaLiczba = '';
        dzialanie = '';
    });       

});


    


