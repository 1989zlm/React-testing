
import Card from './Card';


/*
 ! JSX (Javascript XML):
 * react tarafında kullanılan söz dziimi
 * Ksx javascript içerisnde HTML benzeri bir yapıyla
 * arayüzü tanımlamaya yarar.
 
 * HTML'den farkları:
 * {}: doğrudan jsx içerisne js kodu yazabiliyoruz
 * className: sınıf tanımlarken class yerine kullanılır
 * inline css: {{}} çift paranetz içerisne stilleri yazarız. / camelCase
 * <div/> : bütün etiketler self closing olabilir
 * input / img / br : gibi etiiketlerde kapnış mutlaka olmalı
 * olay izleme: izleme istediğimiz olayları direkt etikete tanımlıyoruz.
 * <>: fragment
*/




function Main() {
    const text = 'sayfamıza hoşgeldiniz';
    const url = 'https://gtso.org.tr/wp-content/uploads/2020/11/red.jpg'

    const formatText = (uzunYazi) => {
        return uzunYazi.slice(0, 20) + '...';
    }

    const selam = () => {
        alert('merhabayın');
    }

    const status = 'loading'; // error - success

    return (
        <main>
            <h1>Ana Sayfa</h1>
            <h3> Ürünler</h3>
            <h3>{text}</h3>
            <p className="text-area">
                {formatText('merhaba bugun gununuz nasıldı..?')}</p>
            <img src={url} width={300} />

            {/* Kartlar */}
            <Card />
            <Card image='https://picsum.photos/200' category='automobil' title='TOOG' />
            <Card image='https://picsum.photos/201' category='giyim' title='t-shirt' />
            <Card image='https://picsum.photos/202' category='elektrik' title='klavye' />

            {/* CARDLARI YAN YANA GETİRMEK İÇİN AYNI DİV İÇİNE ALIP DİSPLAY FLEX VEREBİLİRİZ. */}


            <div style={{
                background: 'gray',
                height: '100px'
            }} />
            <input onChange={(e) => {
                console.log(e.target.value);
            }} />
            <button onClick={() => {
                alert('tıkla')
            }} >Tıkla</button>

            <button onClick={selam}>merhaba</button>



            {/*BİRDEN VE İKİDEN FAZLA KOŞUL OLDUĞU SENARYODA ÖRNEK */}

            {status === 'loading' ? (<p>Sayfa yükleniyor...</p>
            ) : status === 'error' ? (<p>Üzgünüz bir hata oluştu</p>
            ) : (<p>Veri başarıyla alındı</p>
            )}
            {/*eğerki yükleniyorsa ekrana bir yükleniyor paragrafı bas, 
            eğer yüklenmiyorsa hata varmı kontrol et hata varsa hata oluştu yaz,
             hata yoksada veri başarıyla alındı yaz.*/}


        </main>
    );


}
export default Main;