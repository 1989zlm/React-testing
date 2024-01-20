/*
! React Bileşenleri (Component)
* Kullanıcı arayüzü oluşturmak için kullanılan
* temel yapı taşlarıdır. (Yapboz Parçaları)
 
* Bileşen Oluşturma:
* Bir tane fonksiyon oluşturuyoruz
* Fonksiyonun ismine bileşenin ismini veriyoruz.
* Bileşen ismi her zaman Büyük harfle başlamalı.
* Birden fazla kelimeden oluşuyorsa her kelimenin ilk harfi büyük başlar
 
* Bileşenler return satırında kullanıcnın göreceği arayüzü
* döndürmek zorundadır. (JSX - Javascript XML)
* Jsx kodu tek bir kapsayıya sahip olmalıdır
*/


function Header() {
    //bu veri apiden gelmiş gibi kabuul edelim
    // bu veriye göre ekrana basılacak butona karar verelim
    const islogged = true;

    //apiden gelen kullanıcı
    const userName = 'ÖZLEM';

    return (
        <div>
            <header>
                <h1> React components </h1>

                {/* && ve operatörüyle koşullu renderlama(kullanıcı ismi varsa ekrana bas yoksa hiç bişey yapma) */}
                {userName ? <b>{userName}</b> : ''}
                {/*aynışeyin yazımının 2.yöntemi*/}
                {userName && <b>{userName}</b>}


                {/*Ternary operatörüyle koşullu renderlama */}
                {islogged === true ? (
                    <button style={{ background: 'red' }}>Çıkış Yap</button>
                ) : (
                    <button style={{ background: 'green' }}>Giriş yap</button>
                )}


            </header>
        </div>
    );
}

// Bu bileşenleri app. js de kullanmak için export etmeliyiz
export default Header;