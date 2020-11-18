import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Home extends Component{
    render(){
        return(
            <div>
                    <br/>
                    <h1 align="center">Kota Semarang</h1>
                    <br/>
                    <center>
                    <Mui.ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Mui.Button href="/">Home</Mui.Button>
                        <Mui.Button href="/Pariwisata">Pariwisata</Mui.Button>
                        <Mui.Button href="/Sejarah">Sejarah</Mui.Button>
                        <Mui.Button href="/Pemerintah">Pemerintah</Mui.Button>
                        <Mui.Button href="/Kuliner">Kuliner</Mui.Button>
                       
                    </Mui.ButtonGroup>
                    <hr/>
                    </center>
                    <Mui.Container fidex>
                       <center>
                            <img src="/pesona.jpeg" height="300" />
                        </center>
                        <p>
                    Kota Semarang adalah ibu kota Provinsi Jawa Tengah, Indonesia
                    sekaligus kota metropolitan terbesar kelima di Indonesia sesudah
                    Jakarta, Surabaya, Medan, dan Bandung.
                </p>
                <p>
                    <li><b>Luas:</b> 373,8 km²</li>
                    <li><b>Ketinggian:</b> 4 m</li>
                    <li><b>Cuaca:</b> 29 °C, Angin arah Timur dengan kecepatan 5 km/h, Kelembapan 73%</li>
                    <li><b>Provinsi:</b> Jawa Tengah</li>
                    <li><b>Jumlah Kecamatan:</b> 16</li>
                    <li><b>Jumlah Penduduk:</b> 1,556 juta (2010)</li>
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126715.796074123!2d110.34702460740775!3d-7.024724603714551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432b9da5cb9f2!2sSemarang%2C%20Kota%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1605670052193!5m2!1sid!2sid" width="1300" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </Mui.Container>
                </div>
        )
    }
}

export default Home;