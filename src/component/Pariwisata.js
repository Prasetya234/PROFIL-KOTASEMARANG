import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Pariwisata extends Component{
    render(){
        return(
            <div>
                <br/>
                    <h1 align="center">Pariwisata</h1>
                <br/>
                <center>
                <Mui.ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Mui.Button href="/">Home</Mui.Button>
                        <Mui.Button href="/Pariwisata">Pariwisata</Mui.Button>
                        <Mui.Button href="/Sejarah">Sejarah</Mui.Button>
                        <Mui.Button href="/Pemerintah">Pemerintah</Mui.Button>
                        <Mui.Button href="/Kuliner">Kuliner</Mui.Button>
                    </Mui.ButtonGroup>
                </center>
                <hr/>
                    <Carousel>
                        <img src="/masjidagung.jpg" width="1300" height="800"/>
                        <img src="/tebing.png" width="1300" height="800"/>
                        <img src="/Sam-Poo-Kong.jpg" width="1300" height="800"/>
                    </Carousel>
                    <br/><br/>
                    <Mui.Container fixed>
                        <h2>1. Masjid Agung Semarang</h2>
                            <img src="/masjidagung.jpg" width="700" height="500"></img>
                                <p><b>Masjid Agung Jawa Tengah adalah</b> masjid yang terletak di Semarang, provinsi Jawa Tengah, Indonesia Masjid ini mulai dibangun sejak tahun 2001 hingga selesai secara keseluruhan pada tahun 2006. Masjid ini berdiri di atas lahan 10 hektare. Masjid Agung diresmikan oleh Presiden Indonesia Susilo Bambang Yudhoyono pada tanggal 14 November 2006. Masjid Agung Jawa Tengah (MAJT) merupakan masjid provinsi bagi provinsi Jawa Tengah. Keberadaan bangunan masjid ini tak lepas dari Masjid Besar Kauman Semarang. Pembangunan MAJT berawal dari kembalinya tanah banda (harta) wakaf milik Masjid Besar Kauman Semarang yang telah sekian lama tak tentu rimbanya. Raibnya banda wakaf Masjid Besar Kauman Semarang berawal dari proses tukar guling tanah wakaf Masjid Kauman seluas 119.127 ha yang dikelola oleh BKM (Badan Kesejahteraan Masjid) bentukan Bidang Urusan Agama Depag Jawa Tengah. Dengan alasan tanah itu tidak produktif, oleh BKM tanah itu di tukar guling dengan tanah seluas 250 ha di Demak lewat PT. Sambirejo. Kemudian berpindah tangan ke PT. Tensindo milik Tjipto Siswoyo.
                                        Hasil perjuangan banyak pihak untuk mengembalikan banda wakaf Masjid Besar Kauman Semarang itu ahirnya berbuah manis setelah melalui perjuangan panjang. MAJT sendiri dibangun di atas salah satu petak tanah banda wakaf Masjid Besar Kauman Semarang yang telah kembali tersebut. </p><br/><br/>
                        <h2>2. Grand Canyon</h2>
                            <img src="/tebing.png" width="700" height="500"></img>
                                <p><b>Grand Canyon adalah</b> sebuah ngarai tebing-terjal yang menjadi salah satu icon di benua amerika, sedangkan di Indonesia sendiri ternyata memililiki tempat tak kalah indah grand canyon bernama Brown Canyon.
                                    Brown Canyon berada di 2 KM sebelah selatan TVRI Jawa Tengah – Pucang Gading Mranggen, terdapat tebing-tebing tinggi yang sekilas menyerupai Grand Canyon. Tempat ini sedang ngehits diantara mereka yang hobi fotografi. Brown Canyon Semarang sebenarnya merupakan sebuah proyek galian yang sudah berumur 10 tahun lebih.
                                    Sebenarnya brown canyon bukanlah tempat wisata melainkan sebuah perbukitan biasa, namun karena penambangan material yang dilakukan setiap hari selama bertahun-tahun ahirnya berubah wujud seperti layaknya grand canyon yang mempesona di Amerika.</p><br/><br/>
                        <h2>3. Sam Poo Kong</h2>
                            <img src="/Sam-Poo-Kong.jpg"></img>
                                <p><b>Kelenteng Gedung Kuno Sam Poo Tong</b> yaitu bekas tempat persinggahan dan pendaratan pertama seorang Laksamana Tiongkok beragama Islam yang bernama Zheng He/Cheng Ho. Tidak semua anak buah kapal beragama Islam. Kompleks Sam Po Tong berada di daerah Simongan, sebelah barat daya Kota Semarang. Tanda yang menunjukan sebagai bekas petilasan yang berciri keislaman dengan ditemukannya tulisan berbunyi "Marilah kita mengheningkan cipta dengan mendengarkan bacaan Al Qur'an".Kelenteng ini disebut Gedung Batu karena bentuknya merupakan gua batu besar yang berada di sebuah bukit batu. Untuk mengenang Zheng He, masyarakat Indonesia keturunan Tionghoa membangun sebuah kelenteng. Sekarang tempat ini dijadikan tempat peringatan dan pemujaan atau bersembahyang serta tempat untuk berziarah. Untuk keperluan tersebut, di dalam gua batu itu diletakkan sebuah altar serta patung-patung Sam Po Tay Djien. Meskipun Laksamana Cheng Ho adalah seorang muslim, tetapi masyarakat menganggapnya sebagai dewa. Hal ini dapat dimaklumi mengingat agama Konghucu atau Taoisme menganggap orang yang sudah meninggal dapat memberikan pertolongan kepada mereka.</p>
                    </Mui.Container>
            </div>
        )
    }
}

export default Pariwisata;